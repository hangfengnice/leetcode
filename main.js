var o = {
  valueOf : () => {console.log("valueOf"); return {}},
  toString : () => {console.log("toString"); return {}}
}

o + ""
