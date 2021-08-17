(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" },
    [
      _c("div", { staticClass: "row" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("svg", { staticClass: "glyph stroked home" }, [
                _c("use", { attrs: { "xlink:href": "#stroked-home" } })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "active" }, [_vm._v("Danh sách sản phẩm")])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-md-12 col-lg-12" }, [
          _c("div", { staticClass: "panel panel-primary" }, [
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "bootstrap-table" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "div",
                    {
                      staticClass: "alert bg-success",
                      attrs: { role: "alert" }
                    },
                    [
                      _c("svg", { staticClass: "glyph stroked checkmark" }, [
                        _c("use", {
                          attrs: { "xlink:href": "#stroked-checkmark" }
                        })
                      ]),
                      _vm._v("Đã thêm thành công"),
                      _vm._m(1)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { href: "addproduct.html" }
                    },
                    [_vm._v("Thêm sản phẩm")]
                  ),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" })
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("h1", { staticClass: "page-header" }, [_vm._v("Danh sách sản phẩm")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "pull-right", attrs: { href: "#" } }, [
      _c("span", { staticClass: "glyphicon glyphicon-remove" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-bordered",
        staticStyle: { "margin-top": "20px" }
      },
      [
        _c("thead", [
          _c("tr", { staticClass: "bg-primary" }, [
            _c("th", [_vm._v("ID")]),
            _vm._v(" "),
            _c("th", [_vm._v("Thông tin sản phẩm")]),
            _vm._v(" "),
            _c("th", [_vm._v("Giá sản phẩm")]),
            _vm._v(" "),
            _c("th", [_vm._v("Tình trạng")]),
            _vm._v(" "),
            _c("th", [_vm._v("Danh mục")]),
            _vm._v(" "),
            _c("th", { attrs: { width: "18%" } }, [_vm._v("Tùy chọn")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("img", {
                    staticClass: "thumbnail",
                    attrs: {
                      src: "img/ao-khoac.jpg",
                      alt: "Áo đẹp",
                      width: "100px"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("p", [_c("strong", [_vm._v("Mã sản phẩm : SP01")])]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("Tên sản phẩm :Áo Khoác Bomber Nỉ Xanh Lá Cây AK179")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("500.000 VND")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "btn btn-success",
                  attrs: { href: "#", role: "button" }
                },
                [_vm._v("Còn hàng")]
              )
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Áo Khoác Nam")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                { staticClass: "btn btn-warning", attrs: { href: "#" } },
                [
                  _c("i", {
                    staticClass: "fa fa-pencil",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Sửa")
                ]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "btn btn-danger", attrs: { href: "#" } }, [
                _c("i", {
                  staticClass: "fa fa-trash",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Xóa")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("img", {
                    staticClass: "thumbnail",
                    attrs: {
                      src: "img/ao-khoac.jpg",
                      alt: "Áo đẹp",
                      width: "100px"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("p", [_c("strong", [_vm._v("Mã sản phẩm : SP01")])]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("Tên sản phẩm :Áo Khoác Bomber Nỉ Xanh Lá Cây AK179")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("500.000 VND")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "btn btn-danger",
                  attrs: { href: "#", role: "button" }
                },
                [_vm._v("hết hàng")]
              )
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Áo Khoác Nam")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                { staticClass: "btn btn-warning", attrs: { href: "#" } },
                [
                  _c("i", {
                    staticClass: "fa fa-pencil",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Sửa")
                ]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "btn btn-danger", attrs: { href: "#" } }, [
                _c("i", {
                  staticClass: "fa fa-trash",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Xóa")
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { align: "right" } }, [
      _c("ul", { staticClass: "pagination" }, [
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("Trở lại")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("1")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("2")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("3")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("tiếp theo")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/ProductList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/backend/ProductList.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=50a15c17& */ "./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/ProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=template&id=50a15c17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/ProductList.vue?vue&type=template&id=50a15c17&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_50a15c17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);