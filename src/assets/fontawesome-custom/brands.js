/*!
 * Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
/*
 * IMPORTANT! This file has been edited to remove unused icons. If more icons are wanted, add them back in!
 */
;(function () {
    "use strict"

    var _WINDOW = {}
    var _DOCUMENT = {}

    try {
        if (typeof window !== "undefined") _WINDOW = window
        if (typeof document !== "undefined") _DOCUMENT = document
    } catch (e) {}

    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent
    var WINDOW = _WINDOW
    ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/")
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object)
            enumerableOnly &&
                (symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable
                })),
                keys.push.apply(keys, symbols)
        }

        return keys
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {}
            i % 2
                ? ownKeys(Object(source), !0).forEach(function (key) {
                      _defineProperty(target, key, source[key])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                  : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                    })
        }

        return target
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
            })
        } else {
            obj[key] = value
        }

        return obj
    }

    function _toConsumableArray(arr) {
        return (
            _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
        )
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr)
    }

    function _iterableToArray(iter) {
        if ((typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) || iter["@@iterator"] != null)
            return Array.from(iter)
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return
        if (typeof o === "string") return _arrayLikeToArray(o, minLen)
        var n = Object.prototype.toString.call(o).slice(8, -1)
        if (n === "Object" && o.constructor) n = o.constructor.name
        if (n === "Map" || n === "Set") return Array.from(o)
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

        return arr2
    }

    function _nonIterableSpread() {
        throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        )
    }

    var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5

    var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___"
    var PRODUCTION = (function () {
        try {
            return "production" === "production"
        } catch (e) {
            return false
        }
    })()
    var FAMILY_CLASSIC = "classic"
    var FAMILY_SHARP = "sharp"
    var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP]

    function familyProxy(obj) {
        // Defaults to the classic family if family is not available
        return new Proxy(obj, {
            get: function get(target, prop) {
                return prop in target ? target[prop] : target[FAMILY_CLASSIC]
            },
        })
    }
    familyProxy(
        ((_familyProxy = {}),
        _defineProperty(_familyProxy, FAMILY_CLASSIC, {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            "fa-kit": "kit",
        }),
        _defineProperty(_familyProxy, FAMILY_SHARP, {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
        }),
        _familyProxy),
    )
    var STYLE_TO_PREFIX = familyProxy(
        ((_familyProxy2 = {}),
        _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak",
        }),
        _defineProperty(_familyProxy2, FAMILY_SHARP, {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
        }),
        _familyProxy2),
    )
    familyProxy(
        ((_familyProxy3 = {}),
        _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
        }),
        _defineProperty(_familyProxy3, FAMILY_SHARP, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
        }),
        _familyProxy3),
    )
    familyProxy(
        ((_familyProxy4 = {}),
        _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
        }),
        _defineProperty(_familyProxy4, FAMILY_SHARP, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
        }),
        _familyProxy4),
    )
    familyProxy(
        ((_familyProxy5 = {}),
        _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
        }),
        _defineProperty(_familyProxy5, FAMILY_SHARP, {
            900: "fass",
            400: "fasr",
            300: "fasl",
        }),
        _familyProxy5),
    )
    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    var DUOTONE_CLASSES = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary",
    }
    var prefixes = new Set()
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes))
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes))
    ;[]
        .concat(FAMILIES, _toConsumableArray(prefixes), [
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "beat",
            "border",
            "fade",
            "beat-fade",
            "bounce",
            "flip-both",
            "flip-horizontal",
            "flip-vertical",
            "flip",
            "fw",
            "inverse",
            "layers-counter",
            "layers-text",
            "layers",
            "li",
            "pull-left",
            "pull-right",
            "pulse",
            "rotate-180",
            "rotate-270",
            "rotate-90",
            "rotate-by",
            "shake",
            "spin-pulse",
            "spin-reverse",
            "spin",
            "stack-1x",
            "stack-2x",
            "stack",
            "ul",
            DUOTONE_CLASSES.GROUP,
            DUOTONE_CLASSES.SWAP_OPACITY,
            DUOTONE_CLASSES.PRIMARY,
            DUOTONE_CLASSES.SECONDARY,
        ])
        .concat(
            oneToTen.map(function (n) {
                return "".concat(n, "x")
            }),
        )
        .concat(
            oneToTwenty.map(function (n) {
                return "w-".concat(n)
            }),
        )
    function bunker(fn) {
        try {
            for (
                var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                _key < _len;
                _key++
            ) {
                args[_key - 1] = arguments[_key]
            }

            fn.apply(void 0, args)
        } catch (e) {
            if (!PRODUCTION) {
                throw e
            }
        }
    }

    var w = WINDOW || {}
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {}
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {}
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {}
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = []
    var namespace = w[NAMESPACE_IDENTIFIER]

    function normalizeIcons(icons) {
        return Object.keys(icons).reduce(function (acc, iconName) {
            var icon = icons[iconName]
            var expanded = !!icon.icon

            if (expanded) {
                acc[icon.iconName] = icon.icon
            } else {
                acc[iconName] = icon
            }

            return acc
        }, {})
    }

    function defineIcons(prefix, icons) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
        var _params$skipHooks = params.skipHooks,
            skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks
        var normalized = normalizeIcons(icons)

        if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
            namespace.hooks.addPack(prefix, normalizeIcons(icons))
        } else {
            namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized)
        }
        /**
         * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
         * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
         * for `fas` so we'll ease the upgrade process for our users by automatically defining
         * this as well.
         */

        if (prefix === "fas") {
            defineIcons("fa", icons)
        }
    }

    var icons = {
        instagram: [
            448,
            512,
            [],
            "f16d",
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        ],
        "linkedin-in": [
            448,
            512,
            [],
            "f0e1",
            "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        ],
        "facebook-f": [
            320,
            512,
            [],
            "f39e",
            "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        ],
    }

    bunker(function () {
        defineIcons("fab", icons)
        defineIcons("fa-brands", icons)
    })
})()
