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
/* harmony import */ var vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/vuejs-datepicker.esm.js */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Datepicker: vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return _defineProperty({
      trans: {
        qty: "qty",
        real_qty: "real qty",
        delta: "delta",
        per_cent: "percent",
        waste_zone: "waste_zone",
        mone_av: "mone_av",
        belongs_to_group: "belongs_to_group",
        day_date: "day_date",
        sum: "sum"
      },
      widthofscreen: window.innerWidth,
      collapsible: true,
      trans_updated: 0,
      form: this.$form.createForm(this, {
        name: "coordinated"
      }),
      data: [],
      zoneChecked: true,
      selectedZones: [],
      zones: [],
      groups: [],
      groupChecked: true,
      selectedGroups: [],
      selectedMoneavs: [],
      moneavChecked: true,
      mone_avs: [],
      fetching: false,
      sidebar: true,
      delta_min: -1,
      delta_max: 1,
      per_cent_min: -1,
      per_cent_max: 1,
      xOptions: ["date", "ezor", "group", "mone_av"],
      selectedX: "date",
      sum: "daily",
      sumOptions: ["daily", "weekly", "monthly", "yearly"],
      graphType: "area",
      graphOptions: ["line", "bar", "area"],
      selectedOneGraph: "qty",
      oneGraphOptions: ["qty", "r_qty", "delta", "per_cent"],
      chartOptionsQty: {
        fill: {
          colors: "#8d5e6b"
        },
        colors: ["#ff6663"],
        stroke: {
          width: 2
        },
        dataLabels: {
          style: {
            fontSize: "18px"
          },
          background: {
            opacity: 0.8
          }
        },
        grid: {
          borderColor: "#aaa",
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: "qty",
          style: {
            fontSize: "40px",
            color: "#fff"
          },
          offsetX: 300
        },
        chart: {
          background: "#444",
          id: "vuechart-example",
          height: "100%",
          zoom: {
            type: "x",
            enabled: true
          },
          toolbar: {
            "export": {
              csv: {
                dateFormatter: function dateFormatter(timestamp) {
                  return tFormat(timestamp);
                }
              }
            }
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              fontSize: "20px",
              colors: "#eee"
            }
          }
        },
        xaxis: {
          axisTicks: {
            height: true
          },
          type: "datetime",
          labels: {
            formatter: function formatter(value, timestamp, opts) {
              if (value % 10 == 1) {
                var d = new Date(value - 1); // Copy date so don't modify original

                d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
                // Make Sunday's day number 7

                d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

                var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

                var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

                return d.getUTCFullYear() + "-" + weekNo + "W";
              } else if (value % 10 == 2) {
                var _d = new Date(value - 2);

                return _d.getFullYear() + "-" + _d.getMonth();
              } else if (value % 10 == 3) {
                var _d2 = new Date(value - 3);

                return _d2.getFullYear();
              } else {
                if (typeof value != "undefined") {
                  var _d3 = new Date(value);

                  return _d3.toISOString().split("T")[0];
                } else {
                  return "";
                }
              }
            },
            style: {
              colors: "#eee",
              fontSize: "20px"
            }
          },
          axisBorder: {
            show: false
          }
        }
      },
      seriesQty: [{
        name: "Qty Chart",
        data: []
      }],
      chartOptionsRqty: {
        fill: {
          colors: "#918672"
        },
        colors: ["#d784d2"],
        stroke: {
          width: 2
        },
        dataLabels: {
          style: {
            fontSize: "18px"
          },
          background: {
            opacity: 0.8
          }
        },
        grid: {
          borderColor: "#aaa",
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: "real_qty",
          style: {
            fontSize: "40px",
            color: "#fff"
          },
          offsetX: 300
        },
        chart: {
          background: "#444",
          id: "vuechart-example",
          height: "100%",
          zoom: {
            type: "x",
            enabled: true
          },
          toolbar: {
            "export": {
              csv: {
                dateFormatter: function dateFormatter(timestamp) {
                  return tFormat(timestamp);
                }
              }
            }
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              fontSize: "20px",
              colors: "#eee"
            }
          }
        },
        xaxis: {
          axisTicks: {
            height: true
          },
          type: "datetime",
          labels: {
            formatter: function formatter(value, timestamp, opts) {
              if (value % 10 == 1) {
                var d = new Date(value - 1); // Copy date so don't modify original

                d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
                // Make Sunday's day number 7

                d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

                var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

                var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

                return d.getUTCFullYear() + "-" + weekNo + "W";
              } else if (value % 10 == 2) {
                var _d4 = new Date(value - 2);

                return _d4.getFullYear() + "-" + _d4.getMonth();
              } else if (value % 10 == 3) {
                var _d5 = new Date(value - 3);

                return _d5.getFullYear();
              } else {
                if (typeof value != "undefined") {
                  var _d6 = new Date(value);

                  return _d6.toISOString().split("T")[0];
                } else {
                  return "";
                }
              }
            },
            style: {
              colors: "#eee",
              fontSize: "20px"
            }
          },
          axisBorder: {
            show: false
          }
        }
      },
      seriesRqty: [{
        name: "Real Chart",
        data: []
      }],
      chartOptionsPercent: {
        fill: {
          colors: "#5e4739"
        },
        colors: ["#d18c2a"],
        stroke: {
          width: 2
        },
        dataLabels: {
          style: {
            fontSize: "18px"
          },
          background: {
            opacity: 0.8
          }
        },
        grid: {
          borderColor: "#aaa",
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: "per_cent",
          style: {
            fontSize: "40px",
            color: "#fff"
          },
          offsetX: 300
        },
        chart: {
          background: "#444",
          id: "vuechart-example",
          height: "100%",
          zoom: {
            type: "x",
            enabled: true
          },
          toolbar: {
            "export": {
              csv: {
                dateFormatter: function dateFormatter(timestamp) {
                  return tFormat(timestamp);
                }
              }
            }
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              fontSize: "20px",
              colors: "#eee"
            }
          }
        },
        xaxis: {
          axisTicks: {
            height: true
          },
          type: "datetime",
          labels: {
            formatter: function formatter(value, timestamp, opts) {
              if (value % 10 == 1) {
                var d = new Date(value - 1); // Copy date so don't modify original

                d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
                // Make Sunday's day number 7

                d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

                var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

                var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

                return d.getUTCFullYear() + "-" + weekNo + "W";
              } else if (value % 10 == 2) {
                var _d7 = new Date(value - 2);

                return _d7.getFullYear() + "-" + _d7.getMonth();
              } else if (value % 10 == 3) {
                var _d8 = new Date(value - 3);

                return _d8.getFullYear();
              } else {
                if (typeof value != "undefined") {
                  var _d9 = new Date(value);

                  return _d9.toISOString().split("T")[0];
                } else {
                  return "";
                }
              }
            },
            style: {
              colors: "#eee",
              fontSize: "20px"
            }
          },
          axisBorder: {
            show: false
          }
        }
      },
      seriesPercent: [{
        name: "Percent Chart",
        data: []
      }],
      chartOptionsDelta: {
        fill: {
          colors: "#717052"
        },
        colors: ["#fefd97"],
        stroke: {
          width: 2
        },
        dataLabels: {
          style: {
            fontSize: "18px"
          },
          background: {
            opacity: 0.8
          }
        },
        grid: {
          borderColor: "#aaa",
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: "delta",
          style: {
            fontSize: "40px",
            color: "#fff"
          },
          offsetX: 300
        },
        chart: {
          background: "#444",
          id: "vuechart-example",
          height: "100%",
          zoom: {
            type: "x",
            enabled: true
          },
          toolbar: {
            "export": {
              csv: {
                dateFormatter: function dateFormatter(timestamp) {
                  return tFormat(timestamp);
                }
              }
            }
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              fontSize: "20px",
              colors: "#eee"
            }
          }
        },
        xaxis: {
          axisTicks: {
            height: true
          },
          type: "datetime",
          labels: {
            formatter: function formatter(value, timestamp, opts) {
              if (value % 10 == 1) {
                var d = new Date(value - 1); // Copy date so don't modify original

                d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
                // Make Sunday's day number 7

                d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

                var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

                var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

                return d.getUTCFullYear() + "-" + weekNo + "W";
              } else if (value % 10 == 2) {
                var _d10 = new Date(value - 2);

                return _d10.getFullYear() + "-" + _d10.getMonth();
              } else if (value % 10 == 3) {
                var _d11 = new Date(value - 3);

                return _d11.getFullYear();
              } else {
                if (typeof value != "undefined") {
                  var _d12 = new Date(value);

                  return _d12.toISOString().split("T")[0];
                } else {
                  return "";
                }
              }
            },
            style: {
              colors: "#eee",
              fontSize: "20px"
            }
          },
          axisBorder: {
            show: false
          }
        }
      }
    }, "seriesPercent", [{
      name: "Percent Chart",
      data: []
    }]);
  },
  methods: {
    onClose: function onClose() {
      this.sidebar = false;
    },
    forceUpdate: function forceUpdate() {
      this.$forceUpdate();
    },
    handleSubmit: function handleSubmit(e) {
      var _this = this;

      var toCheck = [];
      if (!this.zoneChecked) toCheck.push("selectedZones");
      if (!this.groupChecked) toCheck.push("selectedGroups");
      if (!this.moneavChecked) toCheck.push("selectedMoneavs");
      toCheck.push("date_min");
      toCheck.push("date_max");
      this.form.validateFields(toCheck, function (err, values) {
        if (!err) {
          _this.updateChart();
        }
      });
      e.preventDefault();
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
    handleDateMinChange: function handleDateMinChange(d) {
      this.form.setFieldsValue({
        date_min: moment__WEBPACK_IMPORTED_MODULE_1___default()(d).format("MMMM D YYYY")
      });
    },
    handleDateMaxChange: function handleDateMaxChange(d, s) {
      this.form.setFieldsValue({
        date_max: moment__WEBPACK_IMPORTED_MODULE_1___default()(d).format("MMMM D YYYY")
      });
    },
    handleStackedChange: function handleStackedChange(value) {
      this.$apexcharts.exec("vuechart-example", "updateOptions", {
        chart: {
          stacked: value.target.checked
        }
      });
    },
    handleXAxisChange: function handleXAxisChange(e) {
      this.selectedX = e.target.value;
    },
    updateChart: function updateChart() {
      var _this2 = this;

      var zones = this.selectedZones;
      if (this.zoneChecked) zones = [];
      var groups = this.selectedGroups;
      if (this.groupChecked) groups = this.selectedGroups;
      var moneavs = this.selectedMoneavs;
      if (this.moneavChecked) moneavs = this.selectedMoneavs;
      var date_min_org = this.form.getFieldValue("date_min");
      var date_min = moment__WEBPACK_IMPORTED_MODULE_1___default()(date_min_org, "MMMM D YYYY").format("YYYY-MM-DD");
      var date_max_org = this.form.getFieldValue("date_max");
      var date_max = moment__WEBPACK_IMPORTED_MODULE_1___default()(date_max_org, "MMMM D YYYY").format("YYYY-MM-DD");
      var delta = this.delta;
      var per_cent_min = this.per_cent_min;
      var per_cent_max = this.per_cent_max;
      var delta_min = this.delta_min;
      var delta_max = this.delta_max;
      var xaxis = this.selectedX;
      var sum = this.sum;
      var graphType = this.graphType;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/chart", {
        zones: zones,
        groups: groups,
        moneavs: moneavs,
        delta_min: delta_min,
        delta_max: delta_max,
        per_cent_max: per_cent_max,
        per_cent_min: per_cent_min,
        date_max: date_max,
        date_min: date_min,
        xaxis: xaxis,
        sum: sum,
        graphType: graphType
      }).then(function (res) {
        _this2.seriesQty = res.data["qty"];
        _this2.seriesRqty = res.data["real_qty"];
        _this2.seriesPercent = res.data["percent"];
        _this2.seriesDelta = res.data["delta"];
        _this2.sidebar = false;
      });
    },
    showDrawer: function showDrawer() {
      this.sidebar = true;
    },
    handleAllZones: function handleAllZones(e) {
      if (e.target.checked) {
        this.form.setFieldsValue({
          selectedZones: this.zones.map(function (e) {
            return e.waste_zone;
          })
        });
      } else {
        this.form.setFieldsValue({
          selectedZones: []
        });
      }
    },
    handleAllGroups: function handleAllGroups(e) {
      if (e.target.checked) {
        this.form.setFieldsValue({
          selectedGroups: this.groups.map(function (e) {
            return e.waste_group;
          })
        });
      } else {
        this.form.setFieldsValue({
          selectedGroups: []
        });
      }
    },
    handleAllMones: function handleAllMones(e) {
      if (e.target.checked) {
        this.form.setFieldsValue({
          selectedMoneavs: this.mone_avs.map(function (e) {
            return e.mone_av;
          })
        });
      } else {
        this.form.setFieldsValue({
          selectedMoneavs: []
        });
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/zones").then(function (res) {
      var data = res.data;
      _this3.zones = data;

      _this3.form.setFieldsValue({
        selectedZones: _this3.zones.map(function (e) {
          return e.waste_zone;
        })
      });
    }, function () {
      _this3.$notify({
        type: "warn",
        group: "foo",
        title: "<h1 style='font-size: 24px;color: white'>Warning Message:</h1>",
        text: "<p style='font-size: 16px'>Error to fetch data from Server. Please check your server options file.</p>"
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/groups").then(function (res) {
      _this3.groups = res.data;

      _this3.form.setFieldsValue({
        selectedGroups: _this3.groups.map(function (e) {
          return e.waste_group;
        })
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/mone_avs").then(function (res) {
      _this3.mone_avs = res.data;

      _this3.form.setFieldsValue({
        selectedMoneavs: _this3.mone_avs.map(function (e) {
          return e.mone_av;
        })
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/trans").then(function (res) {
      _this3.trans = Object.assign(_this3.trans, res.data);
      _this3.chartOptionsQty.title.text = _this3.trans.qty;
      _this3.chartOptionsRqty.title.text = _this3.trans.real_qty;
      _this3.chartOptionsDelta.title.text = _this3.trans.delta;
      _this3.chartOptionsPercent.title.text = _this3.trans.per_cent;
      _this3.trans_updated = 1;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/delta_range").then(function (res) {
      _this3.delta_min = parseFloat(res.data.min);
      _this3.delta_max = parseFloat(res.data.max);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/per_cent_range").then(function (res) {
      _this3.per_cent_min = parseFloat(res.data.min);
      _this3.per_cent_max = parseFloat(res.data.max);
    });
  }
});

var tFormat = function tFormat(t) {
  // unix timestamp
  var ts = 1565605570; // convert unix timestamp to milliseconds

  var ts_ms = ts * 1000; // initialize new Date object

  var date_ob = new Date(ts_ms); // year as 4 digits (YYYY)

  var year = date_ob.getFullYear(); // month as 2 digits (MM)

  var month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // date as 2 digits (DD)

  var date = ("0" + date_ob.getDate()).slice(-2);
  return year + "-" + month + "-" + date;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vdp-datepicker {\r\n    display: flex;\r\n    justify-content: center;\n}\n.vdp-datepicker input {\r\n    width: 300px;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    color: #f00;\r\n    font-size: 24px;\r\n    border: none;\n}\n.vdp-datepicker input:focus-visible {\r\n    outline: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/app.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/app.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=style&index=0&lang=css&");


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
  return _c("a-config-provider", [
    _c(
      "div",
      { attrs: { id: "components-layout-demo-basic" } },
      [
        _c(
          "a-layout",
          [
            _c(
              "a-layout-header",
              [
                _c("h1", [_vm._v("Water Differences Analytics")]),
                _vm._v(" "),
                _c(
                  "a-button",
                  {
                    attrs: { type: "primary", size: "large" },
                    on: { click: _vm.showDrawer }
                  },
                  [
                    _vm._v(
                      "\n                    Show Sidebar\n                "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "a-layout",
              [
                _c(
                  "a-drawer",
                  {
                    attrs: {
                      placement: "right",
                      visible: _vm.sidebar,
                      width: _vm.widthofscreen
                    },
                    on: { close: _vm.onClose }
                  },
                  [
                    _c(
                      "a-form",
                      {
                        attrs: { label: "Search Form", form: _vm.form },
                        on: { submit: _vm.handleSubmit }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "grid",
                              "grid-template": "auto / 1fr 1fr 1fr 1fr",
                              "grid-column-gap": "24px",
                              "grid-row-gap": "20px",
                              "align-items": "flex-end",
                              "text-align": "center",
                              "justify-items": "center"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: _vm.trans.waste_zone } },
                                  [
                                    _c(
                                      "a-checkbox",
                                      {
                                        on: { change: _vm.handleAllZones },
                                        model: {
                                          value: _vm.zoneChecked,
                                          callback: function($$v) {
                                            _vm.zoneChecked = $$v
                                          },
                                          expression: "zoneChecked"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Select All\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a-select",
                                      {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "selectedZones",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please select waste zones!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "[\n                                            'selectedZones',\n                                            {\n                                                rules: [\n                                                    {\n                                                        required: true,\n                                                        message:\n                                                            'Please select waste zones!'\n                                                    }\n                                                ]\n                                            }\n                                        ]"
                                          }
                                        ],
                                        attrs: {
                                          mode: "multiple",
                                          placeholder: "Select zones",
                                          size: "large",
                                          disabled: _vm.zoneChecked
                                        },
                                        on: { change: _vm.handleZoneChange }
                                      },
                                      _vm._l(_vm.zones, function(zone) {
                                        return _c(
                                          "a-select-option",
                                          { key: zone.waste_zone },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(zone.waste_description) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      }),
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  {
                                    attrs: { label: _vm.trans.belongs_to_group }
                                  },
                                  [
                                    _c(
                                      "a-checkbox",
                                      {
                                        on: { change: _vm.handleAllGroups },
                                        model: {
                                          value: _vm.groupChecked,
                                          callback: function($$v) {
                                            _vm.groupChecked = $$v
                                          },
                                          expression: "groupChecked"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Select All\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a-select",
                                      {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "selectedGroups",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please select groups!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "[\n                                            'selectedGroups',\n                                            {\n                                                rules: [\n                                                    {\n                                                        required: true,\n                                                        message:\n                                                            'Please select groups!'\n                                                    }\n                                                ]\n                                            }\n                                        ]"
                                          }
                                        ],
                                        attrs: {
                                          mode: "multiple",
                                          size: "large",
                                          placeholder: "Select group",
                                          disabled: _vm.groupChecked
                                        },
                                        on: { change: _vm.handleGroupChange }
                                      },
                                      _vm._l(_vm.groups, function(group) {
                                        return _c(
                                          "a-select-option",
                                          { key: group.waste_group },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  group.waste_description
                                                ) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      }),
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  {
                                    staticClass: "sm-ch",
                                    attrs: { label: _vm.trans.mone_av }
                                  },
                                  [
                                    _c(
                                      "a-checkbox",
                                      {
                                        on: { change: _vm.handleAllMones },
                                        model: {
                                          value: _vm.moneavChecked,
                                          callback: function($$v) {
                                            _vm.moneavChecked = $$v
                                          },
                                          expression: "moneavChecked"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Select All\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a-select",
                                      {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "selectedMoneavs",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please select move_avs!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "[\n                                            'selectedMoneavs',\n                                            {\n                                                rules: [\n                                                    {\n                                                        required: true,\n                                                        message:\n                                                            'Please select move_avs!'\n                                                    }\n                                                ]\n                                            }\n                                        ]"
                                          }
                                        ],
                                        attrs: {
                                          mode: "multiple",
                                          size: "large",
                                          placeholder: "Select Mone_av",
                                          disabled: _vm.moneavChecked
                                        },
                                        on: { change: _vm.handleMoneavChange }
                                      },
                                      _vm._l(_vm.mone_avs, function(mone_av) {
                                        return _c(
                                          "a-select-option",
                                          { key: mone_av.mone_av },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(mone_av.mone_av) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      }),
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/3",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: _vm.trans.delta } },
                                  [
                                    _c("a-input-number", {
                                      staticStyle: {
                                        width: "265px",
                                        "text-align": "center"
                                      },
                                      attrs: {
                                        placeholder: "Minium Delta",
                                        size: "large"
                                      },
                                      model: {
                                        value: _vm.delta_min,
                                        callback: function($$v) {
                                          _vm.delta_min = $$v
                                        },
                                        expression: "delta_min"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a-input-number", {
                                      staticStyle: {
                                        width: "265px",
                                        "text-align": "center"
                                      },
                                      attrs: {
                                        size: "large",
                                        placeholder: "Maximum Delta"
                                      },
                                      model: {
                                        value: _vm.delta_max,
                                        callback: function($$v) {
                                          _vm.delta_max = $$v
                                        },
                                        expression: "delta_max"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "3/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: _vm.trans.per_cent } },
                                  [
                                    _c("a-input-number", {
                                      staticStyle: {
                                        width: "265px",
                                        "text-align": "center"
                                      },
                                      attrs: {
                                        size: "large",
                                        placeholder: "Minium Percent"
                                      },
                                      model: {
                                        value: _vm.per_cent_min,
                                        callback: function($$v) {
                                          _vm.per_cent_min = $$v
                                        },
                                        expression: "per_cent_min"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a-input-number", {
                                      staticStyle: {
                                        width: "265px",
                                        "text-align": "center"
                                      },
                                      attrs: {
                                        size: "large",
                                        placeholder: "Maximum Percent"
                                      },
                                      model: {
                                        value: _vm.per_cent_max,
                                        callback: function($$v) {
                                          _vm.per_cent_max = $$v
                                        },
                                        expression: "per_cent_max"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/3",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: "Minium Date" } },
                                  [
                                    _c("datepicker", {
                                      directives: [
                                        {
                                          name: "decorator",
                                          rawName: "v-decorator",
                                          value: [
                                            "date_min",
                                            {
                                              rules: [
                                                {
                                                  required: true,
                                                  message:
                                                    "Please select Min Date!"
                                                }
                                              ]
                                            }
                                          ],
                                          expression:
                                            "[\n                                            'date_min',\n                                            {\n                                                rules: [\n                                                    {\n                                                        required: true,\n                                                        message:\n                                                            'Please select Min Date!'\n                                                    }\n                                                ]\n                                            }\n                                        ]"
                                        }
                                      ],
                                      attrs: { placeholder: "min date" },
                                      on: { selected: _vm.handleDateMinChange }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "3/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: "Maxium Date" } },
                                  [
                                    _c("datepicker", {
                                      directives: [
                                        {
                                          name: "decorator",
                                          rawName: "v-decorator",
                                          value: [
                                            "date_max",
                                            {
                                              rules: [
                                                {
                                                  required: true,
                                                  message:
                                                    "Please select Max Date!"
                                                }
                                              ]
                                            }
                                          ],
                                          expression:
                                            "[\n                                            'date_max',\n                                            {\n                                                rules: [\n                                                    {\n                                                        required: true,\n                                                        message:\n                                                            'Please select Max Date!'\n                                                    }\n                                                ]\n                                            }\n                                        ]"
                                        }
                                      ],
                                      attrs: { placeholder: "max date" },
                                      on: { selected: _vm.handleDateMaxChange }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/3",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: "X-axis:" } },
                                  [
                                    _c("a-radio-group", {
                                      attrs: {
                                        name: "xaxis",
                                        value: _vm.selectedX,
                                        defaultValue: "date",
                                        options: _vm.xOptions
                                      },
                                      on: { change: _vm.handleXAxisChange }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "3/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: _vm.trans.sum } },
                                  [
                                    _c("a-radio-group", {
                                      attrs: { options: _vm.sumOptions },
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
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/3",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: "Graph Type:" } },
                                  [
                                    _c("a-radio-group", {
                                      attrs: {
                                        name: "graph",
                                        options: _vm.graphOptions
                                      },
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
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "3/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  { attrs: { label: "Graph:" } },
                                  [
                                    _c("a-radio-group", {
                                      attrs: { options: _vm.oneGraphOptions },
                                      model: {
                                        value: _vm.selectedOneGraph,
                                        callback: function($$v) {
                                          _vm.selectedOneGraph = $$v
                                        },
                                        expression: "selectedOneGraph"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "1/3",
                                  width: "100%"
                                }
                              },
                              [
                                _vm.graphType == "bar"
                                  ? _c(
                                      "a-form-item",
                                      [
                                        _c(
                                          "a-checkbox",
                                          {
                                            on: {
                                              change: _vm.handleStackedChange
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Stacked\n                                    "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "grid-column": "3/5",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "a-form-item",
                                  {
                                    attrs: {
                                      "wrapper-col": { span: 12, offset: 5 }
                                    }
                                  },
                                  [
                                    _c(
                                      "a-button",
                                      {
                                        attrs: {
                                          size: "large",
                                          type: "primary",
                                          "html-type": "submit"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Show\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("a-layout-content", [
                  _c("div", [
                    _c(
                      "div",
                      { staticStyle: { width: "80vw", margin: "auto" } },
                      [
                        _vm.selectedOneGraph == "qty"
                          ? _c("apexchart", {
                              key: _vm.trans_updated,
                              attrs: {
                                options: _vm.chartOptionsQty,
                                series: _vm.seriesQty,
                                type: _vm.graphType
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { width: "80vw", margin: "auto" } },
                    [
                      _c(
                        "div",
                        [
                          _vm.selectedOneGraph == "r_qty"
                            ? _c("apexchart", {
                                key: _vm.trans_updated,
                                attrs: {
                                  options: _vm.chartOptionsRqty,
                                  series: _vm.seriesRqty,
                                  type: _vm.graphType
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { width: "80vw", margin: "auto" } },
                    [
                      _c(
                        "div",
                        [
                          _vm.selectedOneGraph == "delta"
                            ? _c("apexchart", {
                                key: _vm.trans_updated,
                                attrs: {
                                  options: _vm.chartOptionsDelta,
                                  series: _vm.seriesDelta,
                                  type: _vm.graphType
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { width: "80vw", margin: "auto" } },
                    [
                      _c(
                        "div",
                        [
                          _vm.selectedOneGraph == "per_cent"
                            ? _c("apexchart", {
                                key: _vm.trans_updated,
                                attrs: {
                                  options: _vm.chartOptionsPercent,
                                  series: _vm.seriesPercent,
                                  type: _vm.graphType
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("notifications", { attrs: { group: "foo", width: "400px" } })
          ],
          1
        )
      ],
      1
    )
  ])
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