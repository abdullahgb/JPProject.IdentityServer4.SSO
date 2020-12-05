(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/app/panel/panel.module.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/panel/panel.module.ngfactory.js ***!
  \*************************************************/
/*! exports provided: PanelModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModuleNgFactory", function() { return PanelModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.module */ "./src/app/panel/panel.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/auth-guard-authenticated-only.service */ "./src/app/core/auth/auth-guard-authenticated-only.service.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






var PanelModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_panel_module__WEBPACK_IMPORTED_MODULE_1__["PanelModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardAuthenticadeOnly"], _core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardAuthenticadeOnly"], [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _panel_module__WEBPACK_IMPORTED_MODULE_1__["PanelModule"], _panel_module__WEBPACK_IMPORTED_MODULE_1__["PanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "", canActivate: [_core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardAuthenticadeOnly"]], children: [{ path: "admin", redirectTo: "home", pathMatch: "full" }, { path: "", redirectTo: "home", pathMatch: "full" }, { path: "home", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"] }, { path: "clients", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"] }, { path: "identity-resource", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ2"] }, { path: "api-resource", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ3"] }, { path: "persisted-grants", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ4"] }, { path: "users", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ5"] }, { path: "roles", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ6"] }, { path: "emails", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ7"] }, { path: "settings", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ8"] }, { path: "events", loadChildren: _panel_module__WEBPACK_IMPORTED_MODULE_1__["ɵ9"] }] }]]; }, [])]); });




/***/ }),

/***/ "./src/app/panel/panel.module.ts":
/*!***************************************!*\
  !*** ./src/app/panel/panel.module.ts ***!
  \***************************************/
/*! exports provided: PanelModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ8", function() { return ɵ8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ9", function() { return ɵ9; });
/* harmony import */ var _core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth/auth-guard-authenticated-only.service */ "./src/app/core/auth/auth-guard-authenticated-only.service.ts");

var ɵ0 = function () { return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./home/home.module.ngfactory */ "./src/app/panel/home/home.module.ngfactory.js")).then(function (m) { return m.HomeModuleNgFactory; }); }, ɵ1 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e("common"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./clients/clients.module.ngfactory */ "./src/app/panel/clients/clients.module.ngfactory.js")).then(function (m) { return m.ClientsModuleNgFactory; }); }, ɵ2 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./identity-resources/identity-resource.module.ngfactory */ "./src/app/panel/identity-resources/identity-resource.module.ngfactory.js")).then(function (m) { return m.IdentityResourceModuleNgFactory; }); }, ɵ3 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./api-resources/api-resource.module.ngfactory */ "./src/app/panel/api-resources/api-resource.module.ngfactory.js")).then(function (m) { return m.ApiResourceModuleNgFactory; }); }, ɵ4 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./persisted-grants/persisted-grants.module.ngfactory */ "./src/app/panel/persisted-grants/persisted-grants.module.ngfactory.js")).then(function (m) { return m.PersistedGrantsModuleNgFactory; }); }, ɵ5 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./users/user.module.ngfactory */ "./src/app/panel/users/user.module.ngfactory.js")).then(function (m) { return m.UserModuleNgFactory; }); }, ɵ6 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e("common"), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./roles/roles.module.ngfactory */ "./src/app/panel/roles/roles.module.ngfactory.js")).then(function (m) { return m.RoleModuleNgFactory; }); }, ɵ7 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./emails/emails.module.ngfactory */ "./src/app/panel/emails/emails.module.ngfactory.js")).then(function (m) { return m.EmailModuleNgFactory; }); }, ɵ8 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(8), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./settings/settings.module.ngfactory */ "./src/app/panel/settings/settings.module.ngfactory.js")).then(function (m) { return m.SettingsModuleNgFactory; }); }, ɵ9 = function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e("common"), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./events/events.module.ngfactory */ "./src/app/panel/events/events.module.ngfactory.js")).then(function (m) { return m.EventsModuleNgFactory; }); };
var routes = [
    {
        path: "",
        canActivate: [
            _core_auth_auth_guard_authenticated_only_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardAuthenticadeOnly"]
        ],
        children: [
            { path: "admin", redirectTo: "home", pathMatch: "full" },
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: ɵ0 },
            { path: "clients", loadChildren: ɵ1 },
            { path: "identity-resource", loadChildren: ɵ2 },
            { path: "api-resource", loadChildren: ɵ3 },
            { path: "persisted-grants", loadChildren: ɵ4 },
            { path: "users", loadChildren: ɵ5 },
            { path: "roles", loadChildren: ɵ6 },
            { path: "emails", loadChildren: ɵ7 },
            { path: "settings", loadChildren: ɵ8 },
            { path: "events", loadChildren: ɵ9 }
        ]
    },
];
var PanelModule = /** @class */ /*@__PURE__*/ (function () {
    function PanelModule() {
    }
    return PanelModule;
}());





/***/ })

}]);
//# sourceMappingURL=19-es5.2ba86653685d84797372.js.map