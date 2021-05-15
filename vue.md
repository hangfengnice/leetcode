# vue reactivity

* const get = /*#__PURE__*/ createGetter();
  * createGetter
    * 228

* mutableHandlers
  * 326

* mutableCollectionHandlers
  * 611

* createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  * 633

* createReactiveObject
  * 689

if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }

const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);

queuePostRenderEffect

queuePreFlushCb
