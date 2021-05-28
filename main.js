/**
 * author dreamapplehappy
 * 关于代码的一些解释可以看一下这里：https://github.com/dreamapplehappy/blog/tree/master/2018/12/02
 */

const MAX_LEVEL = 16;

class Node {
  constructor({ data = -1, maxLevel = 0, refer = new Array(MAX_LEVEL) } = {}) {
    this.data = data;
    // maxLevel属性表明了当前节点处于整个跳表索引的级数

    this.maxLevel = maxLevel;
    // refer是一个有着MAX_LEVEL大小的数组，refer属性存放着很多个索引
    // 如果用p表示当前节点，用level表示这个节点处于整个跳表索引的级数；那么p[level]表示在level这一层级p节点的下一个节点
    // p[level-n]表示level级下面n级的节点
    this.refer = refer;
  }
}

class SkipList {
  constructor() {
    this.head = new Node();
    // levelCount属性表示了当前跳表索引的总共级数
    this.levelCount = 1;
  }
  randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }
  insert(value) {
    debugger;
    const level = this.randomLevel();
    const newNode = new Node();
    newNode.data = value;
    newNode.maxLevel = level;
    const update = new Array(level).fill(new Node());
    let p = this.head;
    for (let i = level - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }
    for (let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }
    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  find(value) {
    if (!value) {
      return null;
    }
    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      return p.refer[0];
    }
    return null;
  }

  remove(value) {
    let _node;
    let p = this.head;
    const update = new Array(new Node());
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      _node = p.refer[0];
      for (let i = 0; i <= this.levelCount - 1; i++) {
        if (
          update[i].refer[i] !== undefined &&
          update[i].refer[i].data === value
        ) {
          update[i].refer[i] = update[i].refer[i].refer[i];
        }
      }
      return _node;
    }
    return null;
  }

  printAll() {
    let p = this.head;
    while (p.refer[0] !== undefined) {
      console.log(p.refer[0].data);
      p = p.refer[0];
    }
  }
}

test();
function test() {
  let list = new SkipList();
  let length = 20000;
  //顺序插入
  for (let i = 1; i <= 10; i++) {
    list.insert(i);
  }
  //输出一次
  list.printAll();
  console.time("create length-10");
  //插入剩下的
  for (let i = 11; i <= length - 10; i++) {
    list.insert(i);
  }
  console.timeEnd("create length-10");
  //搜索 10次
  for (let j = 0; j < 10; j++) {
    let key = Math.floor(Math.random() * length + 1);
    console.log(key, list.find(key));
  }
  //搜索不存在的值
  console.log("null:", list.find(length + 1));
  //搜索5000次统计时间
  console.time("search 5000");
  for (let j = 0; j < 5000; j++) {
    let key = Math.floor(Math.random() * length + 1);
  }
  console.timeEnd("search 5000");
}
