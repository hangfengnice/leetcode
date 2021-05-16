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

## parse

```js
function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0 /* DATA */, []), getSelection(context, start));
}

1.1

function createParserContext(content, options) { 
  return { 
    options: extend({}, defaultParserOptions, options), 
    column: 1, 
    line: 1, 
    offset: 0, 
    originalSource: content, 
    source: content, 
    inPre: false, 
    inVPre: false 
  } 
} 

1.2 

function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
}

function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
}

function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
        start,
        end,
        source: context.originalSource.slice(start.offset, end.offset)
    };
}

1.3 

parseChildren
```

function parseChildren

const context = createTransformContext(root, options);
