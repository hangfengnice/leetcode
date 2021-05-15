// function getSequence(arr) {
//   debugger
//   // 当前下标的 前一个下标
//   const p = arr.slice();

//   // 最长递增 子序列的下标
//   const result = [0];

//   let i, j, u, v, c;

//   const len = arr.length;

//   for (i = 0; i < len; i++) {
//     const arrI = arr[i];

//     if (arrI !== 0) {
//       j = result[result.length - 1];

//       if (arr[j] < arrI) {
//         // 存储在 result 更新前的最后一个索引的值

//         p[i] = j;

//         result.push(i);

//         continue;
//       }

//       u = 0;

//       v = result.length - 1;

//       // 二分搜索，查找比 arrI 小的节点，更新 result 的值

//       while (u < v) {
//         c = ((u + v) / 2) | 0;

//         if (arr[result[c]] < arrI) {
//           u = c + 1;
//         } else {
//           v = c;
//         }
//       }

//       if (arrI < arr[result[u]]) {
//         if (u > 0) {
//           p[i] = result[u - 1];
//         }

//         result[u] = i;
//       }
//     }
//   }

//   u = result.length;

//   v = result[u - 1];

//   // 回溯数组 p，找到最终的索引

//   while (u-- > 0) {
//     result[u] = v;

//     v = p[v];
//   }

//   return result;
// }

// let res = getSequence([10, 9, 2, 5, 3, 7, 101, 18]);


let obj = {
  name: '1',
  age: {
    name: '1'
  }
}


let obj1 = {
  sex: 1
}

let target = new Proxy(obj, {
  get(pro, key) {
    if (key == 'sex')
    return obj1[sex]
     console.log(pro, key);
     console.log(pro === obj, 't');
  }
})

const isSymbol = (val) => typeof val === 'symbol'

// console.log(target.__v_raw, target.__v_isReactive);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => (Symbol[key])))
    // .filter(isSymbol));

console.log(builtInSymbols);

function effect(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
      fn = fn.raw;
  }
  const effect = createReactiveEffect(fn, options);
  if (!options.lazy) {
      effect();
  }
  return effect;
}

function createReactiveEffect(fn, options) {
  const effect = function reactiveEffect() {
      if (!effect.active) {
          return options.scheduler ? undefined : fn();
      }
      if (!effectStack.includes(effect)) {
          cleanup(effect);
          try {
              enableTracking();
              effectStack.push(effect);
              activeEffect = effect;
              return fn();
          }
          finally {
              effectStack.pop();
              resetTracking();
              activeEffect = effectStack[effectStack.length - 1];
          }
      }
  };
  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}
