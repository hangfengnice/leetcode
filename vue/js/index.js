const handler = () => alert("clicked");

// 旧的 VNode
const prevVNode = h("div", {
  style: {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  },
  onclick: handler,
});

// 新的 VNode
const nextVNode = h("div", {
});

render(prevVNode, document.getElementById("app"));

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById("app"));
}, 2000);
