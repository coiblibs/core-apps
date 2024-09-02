import { ref, onMounted, watch, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, createBlock, renderList, createVNode, withCtx, toDisplayString, toRefs, createCommentVNode, computed, unref, defineComponent, resolveDirective, withDirectives, createTextVNode, renderSlot, normalizeClass } from 'vue';
import { useI18n } from 'vue-i18n';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$4 = "\n.color{ color: var(--project-color) !important;\n}\n.flex,.row,.column{display: flex;}\n.column{flex-direction: column;\n}\n.p15{padding: 15px;}\n.p30{padding: 30px;}\n.text-center{text-align: center;}\n.text-left{text-align: left;}\n.gap30{gap: 30px;}\n#tabpanel-Stats .v-form.with-fill[data-v-28cbafed] {grid-template-columns: [start] minmax(0,1fr) [half] minmax(0,1fr) [full] !important;}\n.divider{ border-bottom:1px solid var(--v-divider-color, var(--theme--form--field--input--border-color));}\n.between{justify-content: space-between;}\n.wfull{width: 100%;}\n.currency:last-child{border: 0;}\ntd,th{padding: 10px 10px;text-align: right;border-bottom: solid 1px var(--theme--form--field--input--border-color);}\ntr:last-child td {border: 0;}\n.text-right{text-align: right;}\n.container.right #tabpanel-Stats  section.row{flex-direction: column !important;}\n@media screen and (max-width: 960px) {\n#tabpanel-Stats section.row{flex-direction: column !important;}\n}\n#tabpanel-levels li .deselect,\n#tabpanel-teams li .deselect{display:none;}\n";
n(css$4,{});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _hoisted_1$2 = ["value"];
const _hoisted_2$1 = {
  key: 1,
  class: "row gap30 wfull"
};
const _hoisted_3 = { class: "column p15 divider text-center" };
const _hoisted_4 = {
  style: {"font-size":"2rem","font-weight":"600"},
  class: "color"
};
const _hoisted_5 = {
  class: "column",
  style: {"flex":"1","gap":"0","justify-content":"center","padding-left":"15px"}
};
const _hoisted_6 = {
  style: {"font-size":"1.3rem","font-weight":"600"},
  class: "color"
};
const _hoisted_7 = {
  class: "flex",
  style: {"flex":"2","background-color":"var(--theme--form--field--input--border-color)","border-radius":"5px"}
};
const _hoisted_8 = { class: "color" };
const _hoisted_9 = { class: "wfull" };
const _hoisted_10 = /*#__PURE__*/createElementVNode("thead", null, [
  /*#__PURE__*/createElementVNode("tr", null, [
    /*#__PURE__*/createElementVNode("th", null, "Total Items"),
    /*#__PURE__*/createElementVNode("th", null, "Total Usdt"),
    /*#__PURE__*/createElementVNode("th", null, "Total Amount"),
    /*#__PURE__*/createElementVNode("th", null, "Account"),
    /*#__PURE__*/createElementVNode("th", null, "Currency"),
    /*#__PURE__*/createElementVNode("th", null, "Status"),
    /*#__PURE__*/createElementVNode("th", null, "User Add Balance")
  ])
], -1 /* HOISTED */);
const _hoisted_11 = { style: {"text-align":"center"} };


const _sfc_main$6 = {
  __name: 'interface',
  props: {
  value: { 
    type: [Number, BigInt], // Integer yerine Number kullanmalısınız.
  },
},
  emits: ['input'],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

const data = ref(null);
const error = ref(null);

function handleChange(value) {
  emit('input', value);
}

async function fetchData() {
  if (!props.value) return; // props.value kontrolü
  try {
    console.log(props);
    const response = await fetch('/core-apps-endpoint/user-stats/' + props.value);
    if (!response.ok) {
      throw new Error('Bir hata oluştu'); 
    }
    data.value = await response.json();  
  } catch (err) {
    error.value = err.message; 
  }
}

const getColor = (status) => { 
  switch (status) {
    case 'completed': return '#2ECDA7';
    case 'waiting': return '#A2B5CD';
    default: return '#E35169';
  } 
};

const getIcon = (status) => { 
  switch (status) {
    case 'completed': return 'check';
    case 'waiting': return 'timer';
    default: return 'archive';
  } 
};

onMounted(fetchData);

watch(() => props.value, fetchData, { immediate: true });

return (_ctx, _cache) => {
  const _component_VSkeletonLoader = resolveComponent("VSkeletonLoader");
  const _component_VIcon = resolveComponent("VIcon");
  const _component_VSheet = resolveComponent("VSheet");

  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("input", {
      value: __props.value,
      onInput: _cache[0] || (_cache[0] = $event => (handleChange($event.target.value))),
      style: {"display":"none"}
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1$2),
    (!data.value)
      ? (openBlock(), createBlock(_component_VSkeletonLoader, { key: 0 }))
      : (openBlock(), createElementBlock("section", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (d, i) => {
            return (openBlock(), createElementBlock("section", {
              key: i,
              style: {"flex":"1"},
              class: "column gap30 wfull"
            }, [
              createVNode(_component_VSheet, { class: "wfull" }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_3, [
                    createElementVNode("span", null, toDisplayString(i), 1 /* TEXT */),
                    createElementVNode("h6", _hoisted_4, "$" + toDisplayString(d.totals.all.total_usdt), 1 /* TEXT */),
                    createElementVNode("span", null, "Total " + toDisplayString(d.totals.all.total_items) + " Items", 1 /* TEXT */)
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(d.totals.currency, (c, currency) => {
                    return (openBlock(), createElementBlock("div", {
                      key: currency,
                      class: "row divider between currency",
                      style: {"padding":"15px 0","gap":"15px"}
                    }, [
                      createElementVNode("div", _hoisted_5, [
                        createElementVNode("span", null, toDisplayString(currency), 1 /* TEXT */),
                        createElementVNode("h4", _hoisted_6, "$" + toDisplayString(c.total_usdt), 1 /* TEXT */),
                        createElementVNode("span", null, " Total " + toDisplayString(c.total_items) + " items", 1 /* TEXT */)
                      ]),
                      createElementVNode("div", _hoisted_7, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(c.status, (s, status) => {
                          return (openBlock(), createElementBlock("div", {
                            key: status,
                            style: {"gap":"0","padding":"5px 15px","align-items":"center !important","justify-content":"center","flex":"1"},
                            class: "text-center column wfull"
                          }, [
                            createVNode(_component_VIcon, {
                              name: getIcon(status),
                              color: getColor(status)
                            }, null, 8 /* PROPS */, ["name", "color"]),
                            createElementVNode("div", _hoisted_8, "$" + toDisplayString(s), 1 /* TEXT */),
                            createElementVNode("span", null, toDisplayString(status), 1 /* TEXT */)
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ]),
                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */),
              createVNode(_component_VSheet, null, {
                default: withCtx(() => [
                  createElementVNode("table", _hoisted_9, [
                    _hoisted_10,
                    createElementVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(d.items, (item, i) => {
                        return (openBlock(), createElementBlock("tr", { key: i }, [
                          createElementVNode("td", _hoisted_11, toDisplayString(item.total_items), 1 /* TEXT */),
                          createElementVNode("td", null, toDisplayString(item.total_usdt), 1 /* TEXT */),
                          createElementVNode("td", null, toDisplayString(item.total_amount), 1 /* TEXT */),
                          createElementVNode("td", null, toDisplayString(item.account), 1 /* TEXT */),
                          createElementVNode("td", null, toDisplayString(item.currency), 1 /* TEXT */),
                          createElementVNode("td", null, [
                            createVNode(_component_VIcon, {
                              name: getIcon(item.status),
                              color: getColor(item.status)
                            }, null, 8 /* PROPS */, ["name", "color"])
                          ]),
                          createElementVNode("td", null, [
                            createVNode(_component_VIcon, {
                              name: getIcon(item.user_add_balance),
                              color: getColor(item.user_add_balance)
                            }, null, 8 /* PROPS */, ["name", "color"])
                          ])
                        ]))
                      }), 128 /* KEYED_FRAGMENT */))
                    ])
                  ])
                ]),
                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
var InterfaceComponent = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__file',"interface.vue"]]);

var e0 = {
	id: 'core-apps-user-stats',
	name: 'User Stats',
	icon: 'query_stats',
	description: 'This is my custom interface!',
	component: InterfaceComponent,
	hideLabel: true,
	hideLoader: true,
	autoKey: true,
	options: null,
	types: ['json','bigInteger', 'number','integer'],
  };

// Props tanımları
  
const _sfc_main$5 = {
  __name: 'interface',
  props: {
	value: {
	  type: [Array, Object],
	  default: () => []
	},
	displayTemplate: {
	  type: String,
	  default: ''
	},
	disabled: {
	  type: Boolean,
	  default: false
	},
	collection: {
	  type: String,
	  required: true
	},
	field: {
	  type: String,
	  required: true
	},
	loading: {
	  type: Boolean,
	  default: false
	},
	primaryKey: {
	  type: [String, Number],
	  required: true
	},
	enableCreate: {
	  type: Boolean,
	  default: true
	},
	enableSelect: {
	  type: Boolean,
	  default: true
	},
	filter: {
	  type: [Object, null],
	  default: null
	}
  },
  setup(__props) {

  const props = __props;
  
  // Props'ları tanıtma
  const { collection, field, primaryKey } = toRefs(props);
  
  console.log(collection);
  console.log(field  );
  console.log(primaryKey );
  
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", null, [
    createElementVNode("h1", null, toDisplayString(_ctx.name), 1 /* TEXT */),
    createElementVNode("p", null, toDisplayString(_ctx.description), 1 /* TEXT */),
    createCommentVNode(" Diğer içerikler buraya ")
  ]))
}
}

};
var Interface = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-4866cf6d"],['__file',"interface.vue"]]);

// index.js

var e1 = {
  id: 'user-team-diagram',
  name: 'User Team Diagram',
  icon: 'box',
  description: 'This is my custom TreeView interface!',
  component: Interface,
  group: 'relational', 
  types: ['alias'],
  localTypes: ['o2m'],
  options: ({ relations }) => {
		const collection = relations.o2m?.collection;
		
		return [
			{
				field: 'displayTemplate',
				name: '$t:display_template',
				meta: {
					interface: 'system-display-template',
					options: {
						collectionName: collection,
					},
					width: 'full',
				},
			},
			{
				field: 'enableCreate',
				name: '$t:creating_items',
				schema: {
					default_value: true,
				},
				meta: {
					interface: 'boolean',
					options: {
						label: '$t:enable_create_button',
					},
					width: 'half',
				},
			},
			// {
			// 	field: 'enableSelect',
			// 	name: '$t:selecting_items',
			// 	schema: {
			// 		default_value: true,
			// 	},
			// 	meta: {
			// 		interface: 'boolean',
			// 		options: {
			// 			label: '$t:enable_select_button',
			// 		},
			// 		width: 'half',
			// 	},
			// },
			/*{
				field: 'filter',
				name: '$t:filter',
				type: 'json',
				meta: {
					interface: 'system-filter',
					options: {
						collectionName: collection,
					},
					conditions: [
						{
							rule: {
								enableSelect: {
									_eq: false,
								},
							},
							hidden: true,
						},
					],
				},
			},*/
		];
	},
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$b.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$a.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray$1 = isArray;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$9 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$2.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map && getTag(new Map) != mapTag$1) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag$1) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object),
      othIsArr = isArray$1(other),
      objTag = objIsArr ? arrayTag : getTag$1(object),
      othTag = othIsArr ? arrayTag : getTag$1(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

function useGroupSection({ field, fields: groupFields, values, validationErrors }) {
  const { t } = useI18n();
  const fieldsInSection = computed(() => {
    var _a, _b, _c;
    const fields = [Object.assign({}, unref(field), { hideLabel: true })];
    if ((_b = (_a = unref(field).meta) == null ? void 0 : _a.special) == null ? void 0 : _b.includes("group")) {
      fields.push(...getFieldsForGroup((_c = unref(field).meta) == null ? void 0 : _c.field, [], unref(groupFields)));
    }
    return fields;
  });
  const edited = computed(() => {
    if (!unref(values))
      return false;
    const editedFields = Object.keys(unref(values));
    return fieldsInSection.value.some((field2) => editedFields.includes(field2.field));
  });
  const validationMessage = computed(() => {
    const validationError = unref(validationErrors).find(
      (error) => error.field === unref(field).field || unref(fieldsInSection).find((field2) => field2.field === error.field)
    );
    if (validationError === void 0)
      return;
    if (validationError.code === "RECORD_NOT_UNIQUE") {
      return t("validationError.unique");
    } else {
      return t(`validationError.${validationError.type}`, validationError);
    }
  });
  return { fieldsInSection, edited, validationMessage };
}
function getFieldsForGroup(group, passed = [], groupFields) {
  var _a, _b;
  const fieldsInGroup = groupFields.filter((field) => {
    var _a2;
    return ((_a2 = field.meta) == null ? void 0 : _a2.group) === group || group === null && !field.meta;
  });
  for (const field of fieldsInGroup) {
    if (((_b = (_a = field.meta) == null ? void 0 : _a.special) == null ? void 0 : _b.includes("group")) && !passed.includes(field.meta.field)) {
      passed.push(field.meta.field);
      fieldsInGroup.push(...getFieldsForGroup(field.meta.field, passed, groupFields));
    }
  }
  return fieldsInGroup;
}

const _hoisted_1$1 = {
  key: 0,
  class: "edit-dot"
};
const _hoisted_2 = { class: "field-name" };
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "tab-button",
  props: {
    field: {},
    fields: {},
    values: {},
    validationErrors: {},
    active: { type: Boolean },
    badge: {}
  },
  setup(__props) {
    const props = __props;
    const { edited, validationMessage } = useGroupSection(toRefs(props));
    const { t } = useI18n();
    return (_ctx, _cache) => {
      var _a;
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _directive_tooltip = resolveDirective("tooltip");
      return !((_a = _ctx.field.meta) == null ? void 0 : _a.hidden) ? (openBlock(), createBlock(_component_v_button, {
        key: 0,
        id: `tab-${_ctx.field.field}`,
        class: "tab-button",
        role: "tab",
        "aria-selected": _ctx.active ? "true" : "false",
        "aria-controls": `tabpanel-${_ctx.field.field}`,
        small: ""
      }, {
        default: withCtx(() => [
          unref(edited) ? withDirectives((openBlock(), createElementBlock(
            "span",
            _hoisted_1$1,
            null,
            512
            /* NEED_PATCH */
          )), [
            [_directive_tooltip, unref(t)("edited")]
          ]) : createCommentVNode("v-if", true),
          createElementVNode(
            "span",
            _hoisted_2,
            toDisplayString(_ctx.field.name),
            1
            /* TEXT */
          ),
          _ctx.badge ? (openBlock(), createBlock(_component_v_chip, {
            key: 1,
            "x-small": ""
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(_ctx.badge),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          unref(validationMessage) ? withDirectives((openBlock(), createBlock(
            _component_v_icon,
            {
              key: 2,
              class: "warning",
              name: "error",
              small: ""
            },
            null,
            512
            /* NEED_PATCH */
          )), [
            [_directive_tooltip, unref(validationMessage)]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["id", "aria-selected", "aria-controls"])) : createCommentVNode("v-if", true);
    };
  }
});

var css$3 = ".tab-button[data-v-49335147] {\n  --v-button-background-color: transparent;\n  --v-button-background-color-hover: transparent;\n  --v-button-border-color: transparent;\n  --v-button-width: unset;\n}\n.tab-button[data-v-49335147][data-v-49335147] .content {\n  overflow: visible;\n}\n.tab-button[data-v-49335147][aria-selected=true][data-v-49335147] {\n  --v-button-border-color: var(--theme--background-accent);\n  --v-button-background-color: var(--theme--background-accent);\n  --v-button-background-color-hover: var(--theme--background-accent);\n}\n.tab-button[data-v-49335147][data-v-49335147]:not([aria-selected=true]):hover {\n  color: var(--theme--foreground--accent);\n}\n.tab-button[data-v-49335147][data-v-49335147]:hover .field-name[data-v-49335147],\n.tab-button[data-v-49335147][data-v-49335147]:hover .icon[data-v-49335147], .tab-button[data-v-49335147][aria-selected=true][data-v-49335147] .field-name[data-v-49335147],\n.tab-button[data-v-49335147][aria-selected=true][data-v-49335147] .icon[data-v-49335147] {\n  color: var(--theme--foreground-accent);\n}\n.tab-button[data-v-49335147][data-v-49335147]:hover .edit-dot[data-v-49335147], .tab-button[data-v-49335147][aria-selected=true][data-v-49335147] .edit-dot[data-v-49335147] {\n  background-color: var(--theme--foreground);\n}\n.tab-button[data-v-49335147] .field-name[data-v-49335147],\n.tab-button[data-v-49335147] .icon[data-v-49335147] {\n  color: var(--theme--foreground);\n  transition: color var(--fast) var(--transition);\n}\n.tab-button[data-v-49335147] .v-chip[data-v-49335147] {\n  margin: 0 0 0 8px;\n}\n.tab-button[data-v-49335147] .edit-dot[data-v-49335147] {\n  position: absolute;\n  top: 7px;\n  left: -7px;\n  display: block;\n  width: 4px;\n  height: 4px;\n  background-color: var(--theme--foreground-subdued);\n  border-radius: 4px;\n  content: \"\";\n}\n\n.warning[data-v-49335147] {\n  margin-left: 8px;\n  color: var(--theme--danger);\n}";
n(css$3,{});

var TabButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-49335147"], ["__file", "tab-button.vue"]]);

var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "tab-group",
  props: {
    initialValues: {},
    modelValue: {},
    tabFields: {},
    fields: {},
    values: {},
    validationErrors: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const buttons = ref([]);
    function getFocusIndex() {
      const index = buttons.value.findIndex((button) => button.$el.contains(document.activeElement));
      return index !== -1 ? index : props.modelValue;
    }
    function setFocusIndex(index) {
      buttons.value[index].$el.querySelector("button").focus();
    }
    function onKeyDown(event) {
      const focusIndex = getFocusIndex();
      switch (event.key) {
        case "ArrowLeft":
          if (focusIndex !== -1) {
            setFocusIndex((unref(buttons).length + focusIndex - 1) % unref(buttons).length);
          }
          break;
        case "ArrowRight":
          if (focusIndex !== -1) {
            setFocusIndex((focusIndex + 1) % unref(buttons).length);
          }
          break;
      }
    }
    console.log("tabFields", props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode(
          "div",
          {
            role: "tablist",
            class: "tab-list",
            onKeydown: onKeyDown
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.tabFields, (field, index) => {
                return openBlock(), createBlock(TabButton, {
                  ref_for: true,
                  ref_key: "buttons",
                  ref: buttons,
                  key: field.field,
                  field,
                  fields: _ctx.fields,
                  values: _ctx.values,
                  "validation-errors": _ctx.validationErrors,
                  active: index === _ctx.modelValue,
                  onClick: ($event) => _ctx.$emit("update:modelValue", index)
                }, null, 8, ["field", "fields", "values", "validation-errors", "active", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          32
          /* NEED_HYDRATION */
        ),
        createTextVNode(),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});

var css$2 = ".tab-list[data-v-d701145d] {\n  display: flex;\n  gap: 0 0.5rem;\n  padding: 0.5rem;\n  border-radius: var(--theme--border-radius);\n  background-color: var(--theme--background-subdued);\n  flex-wrap: wrap;\n}";
n(css$2,{});

var TabGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d701145d"], ["__file", "tab-group.vue"]]);

var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "information",
  props: {
    primaryKey: {},
    tabName: {},
    tabsName: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createTextVNode(
            toDisplayString(_ctx.primaryKey) + " " + toDisplayString(_ctx.tabName) + " " + toDisplayString(_ctx.tabsName) + " ",
            1
            /* TEXT */
          ),
          createCommentVNode(` <VButton @click="logEvent('click', $event)">
  My Button
</VButton>  `)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});

var css$1 = "\n.v-form.with-fill{ \ngrid-template-columns: [start] minmax(0,1fr) [half] minmax(0,1fr) [full] !important;\n  gap: var(--theme--form--row-gap) var(--theme--form--column-gap) !important;\n}\n.group-raw{grid-column: start/fill !important}\n";
n(css$1,{});

var TabUserInformation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "information.vue"]]);

const _hoisted_1 = ["id"];
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tab-panel",
  props: {
    field: {},
    fields: {},
    values: {},
    initialValues: {},
    disabled: { type: Boolean },
    batchMode: { type: Boolean },
    batchActiveFields: { default: () => [] },
    primaryKey: {},
    loading: { type: Boolean },
    validationErrors: { default: () => [] },
    group: {},
    multiple: { type: Boolean },
    direction: {}
  },
  setup(__props) {
    const props = __props;
    const { fieldsInSection } = useGroupSection(toRefs(props));
    return (_ctx, _cache) => {
      const _component_v_form = resolveComponent("v-form");
      return openBlock(), createElementBlock("div", {
        id: `tabpanel-${_ctx.field.field}`,
        class: "tab-panel"
      }, [
        createVNode(_component_v_form, {
          "initial-values": _ctx.initialValues,
          fields: unref(fieldsInSection),
          "model-value": _ctx.values,
          "primary-key": _ctx.primaryKey,
          group: _ctx.group,
          "validation-errors": _ctx.validationErrors,
          loading: _ctx.loading,
          "batch-mode": _ctx.batchMode,
          disabled: _ctx.disabled,
          direction: _ctx.direction,
          "show-no-visible-fields": false,
          "show-validation-errors": false,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.$emit("apply", $event))
        }, null, 8, ["initial-values", "fields", "model-value", "primary-key", "group", "validation-errors", "loading", "batch-mode", "disabled", "direction"]),
        _ctx.group == "user_tabs" && _ctx.field.field == "information" ? (openBlock(), createBlock(TabUserInformation, {
          key: 0,
          tabName: _ctx.field.field,
          tabsName: _ctx.group,
          primaryKey: _ctx.primaryKey
        }, null, 8, ["tabName", "tabsName", "primaryKey"])) : createCommentVNode("v-if", true),
        createCommentVNode(" <pre>{{ JSON.stringify(field.field,null,2) }} </pre>  \n		<pre>{{ JSON.stringify(group,null,2) }} </pre>  \n		<pre>{{ JSON.stringify(fieldsInSection,null,2) }} </pre>  \n		<pre>{{ JSON.stringify(primaryKey,null,2) }} </pre>   ")
      ], 8, _hoisted_1);
    };
  }
});

var TabPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "tab-panel.vue"]]);

var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "group-tabs",
  props: {
    field: {},
    fields: {},
    values: {},
    initialValues: {},
    disabled: { type: Boolean },
    batchMode: { type: Boolean },
    batchActiveFields: { default: () => [] },
    primaryKey: {},
    loading: { type: Boolean },
    validationErrors: { default: () => [] },
    badge: {},
    rawEditorEnabled: { type: Boolean },
    direction: {},
    fillWidth: { type: Boolean }
  },
  emits: ["apply"],
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const { groupFields, groupValues } = useComputedGroup();
    watch(
      () => props.validationErrors,
      (newVal, oldVal) => {
        if (!props.validationErrors)
          return;
        if (isEqual(newVal, oldVal))
          return;
        const includedFieldsWithErrors = props.validationErrors.findIndex(
          (validationError) => groupFields.value.find((rootField) => rootField.field === validationError.field)
        );
        if (includedFieldsWithErrors !== -1)
          activeIndex.value = includedFieldsWithErrors;
      }
    );
    function useComputedGroup() {
      const groupFields2 = ref(limitFields());
      const groupValues2 = ref({});
      watch(
        () => props.fields,
        () => {
          const newVal = limitFields();
          if (!isEqual(groupFields2.value, newVal)) {
            groupFields2.value = newVal;
          }
        }
      );
      watch(
        () => props.values,
        (newVal) => {
          if (!isEqual(groupValues2.value, newVal)) {
            groupValues2.value = newVal;
          }
        }
      );
      return { groupFields: groupFields2, groupValues: groupValues2 };
      function limitFields() {
        return props.fields.filter((field) => {
          var _a, _b;
          return ((_a = field.meta) == null ? void 0 : _a.group) === ((_b = props.field.meta) == null ? void 0 : _b.field);
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TabGroup, {
        modelValue: activeIndex.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeIndex.value = $event),
        "tab-fields": unref(groupFields),
        fields: _ctx.fields,
        values: unref(groupValues),
        "validation-errors": _ctx.validationErrors,
        class: normalizeClass(["group-tabs", _ctx.fillWidth && "fill"])
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(groupFields), (groupField, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                {
                  key: groupField.field
                },
                [
                  activeIndex.value === index ? (openBlock(), createBlock(TabPanel, {
                    key: 0,
                    field: groupField,
                    fields: _ctx.fields,
                    values: unref(groupValues),
                    "initial-values": _ctx.initialValues,
                    disabled: _ctx.disabled,
                    "batch-mode": _ctx.batchMode,
                    "batch-active-fields": _ctx.batchActiveFields,
                    "primary-key": _ctx.primaryKey,
                    loading: _ctx.loading,
                    "validation-errors": _ctx.validationErrors,
                    badge: _ctx.badge,
                    "raw-editor-enabled": _ctx.rawEditorEnabled,
                    group: _ctx.field.meta.field,
                    direction: _ctx.direction,
                    onApply: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("apply", $event))
                  }, null, 8, ["field", "fields", "values", "initial-values", "disabled", "batch-mode", "batch-active-fields", "primary-key", "loading", "validation-errors", "badge", "raw-editor-enabled", "group", "direction"])) : createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "tab-fields", "fields", "values", "validation-errors", "class"]);
    };
  }
});

var css = ".group-tabs[data-v-a801975f] .tab-panel[data-v-a801975f] {\n  margin-top: var(--theme--form--row-gap);\n}";
n(css,{});

var InterfaceGroupTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a801975f"], ["__file", "group-tabs.vue"]]);

var e2 = {
  id: "group-tabs",
  name: "Tab Group",
  description: "Display fields in a tab group",
  icon: "tab_group",
  component: InterfaceGroupTabs,
  hideLabel: true,
  hideLoader: true,
  autoKey: true,
  types: ["alias"],
  localTypes: ["group"],
  group: "group",
  options: [
    {
      field: "fillWidth",
      type: "boolean",
      name: "Overwrite Group Width",
      meta: {
        interface: "boolean",
        note: "Normally groups can not fill the width of the page. This option allows you to overwrite that.",
        options: {
          label: "Fill Width"
        },
        width: "half"
      },
      schema: {
        default_value: false
      }
    }
  ]
};

const interfaces = [e0,e1,e2];const displays = [];const layouts = [];const modules = [];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
