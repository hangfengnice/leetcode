var shoppingOffers = function (price, special, needs) {
  let meno = new Map();
  const n = price.length;

  const filterSpecial = [];
  for (const sp of special) {
    let totalCount = 0,
      totalPrice = 0;

    for (let i = 0; i < n; i++) {
      totalCount += sp[i];
      totalPrice += sp[i] * price[i];
    }

    if (totalCount > 0 && totalPrice > sp[n]) {
      filterSpecial.push(sp);
    }
  }

  return dfs(price, special, needs, filterSpecial, n);

  function dfs(price, special, curNeeds, filterSpecial, n) {
    if (!meno.has(curNeeds)) {
      let minPrice = 0;

      for (let i = 0; i < n; i++) {
        minPrice += curNeeds[i] * price[i];
      }

      for (let curSpecial of special) {
        const specialPrice = curSpecial[n];
        const nextNeeds = [];

        for (let i = 0; i < n; i++) {
          if (curSpecial[i] > curNeeds[i]) break;
          nextNeeds.push(curNeeds[i] - curSpecial[i]);
        }
        if (nextNeeds.length === n) {
          minPrice = Math.min(
            minPrice,
            dfs(price, special, nextNeeds, filterSpecial, n) + specialPrice
          );
        }
      }
      meno.set(curNeeds, minPrice);
    }
    return meno.get(curNeeds);
  }
};
