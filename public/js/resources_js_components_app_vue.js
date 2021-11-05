"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_app_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {},
      data: [],
      selectedZones: [],
      zones: [],
      groups: [],
      selectedGroups: [],
      selectedMoneavs: [],
      mone_avs: [],
      fetching: false,
      dateRange: [],
      delta_min: 0,
      delta_max: 0,
      delta: [0, 0],
      per_cent_min: 0,
      per_cent_max: 0,
      per_cent: [0, 0],
      plainOptions: ["date", "ezor", "group", "mone_av"],
      selectedX: [],
      sum: [],
      sumOptions: ["daily", "weekly", "monthly", "yearly"],
      graphType: [],
      graphOptions: ["pie", "line", "bar", "area"],
      dateChecked: false
    };
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_1___default()),
    handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(function (err, values) {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleZoneChange: function handleZoneChange(value) {
      this.selectedZones = value;
    },
    handleGroupChange: function handleGroupChange(value) {
      this.selectedGroups = value;
    },
    handleMoneavChange: function handleMoneavChange(value) {
      this.selectedMoneavs = value;
    },
    handleDateRangeChange: function handleDateRangeChange(date, dateString) {
      console.log(this.dateRange);
    },
    handleDeltaChange: function handleDeltaChange(value) {
      console.log(this.delta);
    },
    handlePerCentChange: function handlePerCentChange(value) {
      console.log(this.per_cent);
    },
    handleXAxisChange: function handleXAxisChange(checkedValues) {
      if (typeof checkedValues.find(function (e) {
        return e == "date";
      }) == "undefined") this.dateChecked = false;else this.dateChecked = true;
    },
    handleSumChange: function handleSumChange(value) {},
    handleGraphChange: function handleGraphChange(value) {}
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/zones").then(function (res) {
      _this.zones = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/groups").then(function (res) {
      _this.groups = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/mone_avs").then(function (res) {
      _this.mone_avs = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/delta_range").then(function (res) {
      _this.delta_min = parseFloat(res.data.min);
      _this.delta_max = parseFloat(res.data.max);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/per_cent_range").then(function (res) {
      _this.per_cent_min = parseFloat(res.data.min);
      _this.per_cent_max = parseFloat(res.data.max);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/app.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/app.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=f9a0fcb4& */ "./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./resources/js/components/app.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.render,
  _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/app.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=template&id=f9a0fcb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "components-layout-demo-basic" } },
    [
      _c(
        "a-layout",
        [
          _c("a-layout-header", [
            _c("h1", [_vm._v("Water Differences Analytics")])
          ]),
          _vm._v(" "),
          _c(
            "a-layout",
            [
              _c(
                "a-layout-sider",
                { attrs: { width: "400" } },
                [
                  _c(
                    "a-form",
                    {
                      attrs: { label: "Search Form", form: _vm.form },
                      on: { submit: _vm.handleSubmit }
                    },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Waste Zone:" } },
                        [
                          _c(
                            "a-select",
                            {
                              attrs: {
                                mode: "multiple",
                                value: _vm.selectedZones,
                                placeholder: "Select zones"
                              },
                              on: { change: _vm.handleZoneChange }
                            },
                            _vm._l(_vm.zones, function(zone) {
                              return _c(
                                "a-select-option",
                                { key: zone.waste_zone },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(zone.waste_description) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Belongs To:" } },
                        [
                          _c(
                            "a-select",
                            {
                              attrs: {
                                mode: "multiple",
                                value: _vm.selectedGroups,
                                placeholder: "Select group"
                              },
                              on: { change: _vm.handleGroupChange }
                            },
                            _vm._l(_vm.groups, function(group) {
                              return _c(
                                "a-select-option",
                                { key: group.waste_group },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(group.waste_description) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Mone_av:" } },
                        [
                          _c(
                            "a-select",
                            {
                              attrs: {
                                mode: "multiple",
                                value: _vm.selectedMoneavs,
                                placeholder: "Select Mone_av"
                              },
                              on: { change: _vm.handleMoneavChange }
                            },
                            _vm._l(_vm.mone_avs, function(mone_av) {
                              return _c(
                                "a-select-option",
                                { key: mone_av.mone_av },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(mone_av.mone_av) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Mone_av:" } },
                        [
                          _c("a-range-picker", {
                            on: { change: _vm.handleDateRangeChange },
                            model: {
                              value: _vm.dateRange,
                              callback: function($$v) {
                                _vm.dateRange = $$v
                              },
                              expression: "dateRange"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "delta:" } },
                        [
                          _c("a-slider", {
                            attrs: {
                              range: "",
                              "default-value": [_vm.delta_min, _vm.delta_max],
                              min: _vm.delta_min,
                              max: _vm.delta_max,
                              step: 0.0001
                            },
                            on: { afterChange: _vm.handleDeltaChange },
                            model: {
                              value: _vm.delta,
                              callback: function($$v) {
                                _vm.delta = $$v
                              },
                              expression: "delta"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "per_cent:" } },
                        [
                          _c("a-slider", {
                            attrs: {
                              range: "",
                              "default-value": [
                                _vm.per_cent_min,
                                _vm.per_cent_max
                              ],
                              min: _vm.per_cent_min,
                              max: _vm.per_cent_max
                            },
                            on: { afterChange: _vm.handlePerCentChange },
                            model: {
                              value: _vm.per_cent,
                              callback: function($$v) {
                                _vm.per_cent = $$v
                              },
                              expression: "per_cent"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "X-axis:" } },
                        [
                          _c("a-checkbox-group", {
                            attrs: { name: "xaxis", options: _vm.plainOptions },
                            on: { change: _vm.handleXAxisChange },
                            model: {
                              value: _vm.selectedX,
                              callback: function($$v) {
                                _vm.selectedX = $$v
                              },
                              expression: "selectedX"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.dateChecked
                        ? _c(
                            "a-form-item",
                            { attrs: { label: "Sum:" } },
                            [
                              _c("a-radio-group", {
                                attrs: { options: _vm.sumOptions },
                                on: { change: _vm.handleSumChange },
                                model: {
                                  value: _vm.sum,
                                  callback: function($$v) {
                                    _vm.sum = $$v
                                  },
                                  expression: "sum"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Graph:" } },
                        [
                          _c("a-radio-group", {
                            attrs: { name: "graph", options: _vm.graphOptions },
                            on: { change: _vm.handleGraphChange },
                            model: {
                              value: _vm.graphType,
                              callback: function($$v) {
                                _vm.graphType = $$v
                              },
                              expression: "graphType"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { "wrapper-col": { span: 12, offset: 5 } } },
                        [
                          _c(
                            "a-button",
                            {
                              attrs: { type: "primary", "html-type": "submit" }
                            },
                            [
                              _vm._v(
                                "\n                            Draw\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("a-layout-content", [_vm._v("Content")])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);