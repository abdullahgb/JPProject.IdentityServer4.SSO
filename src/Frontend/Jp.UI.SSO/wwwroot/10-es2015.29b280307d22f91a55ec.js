(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/app/panel/users/add/user-add.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/panel/users/add/user-add.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_UserAddComponent, View_UserAddComponent_0, View_UserAddComponent_Host_0, UserAddComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserAddComponent", function() { return RenderType_UserAddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserAddComponent_0", function() { return View_UserAddComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserAddComponent_Host_0", function() { return View_UserAddComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponentNgFactory", function() { return UserAddComponentNgFactory; });
/* harmony import */ var _user_add_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-add.component.scss.ngstyle */ "./src/app/panel/users/add/user-add.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component.ngfactory */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ngfactory.js");
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/input-validation/input-validation.ngfactory */ "./src/app/shared/components/input-validation/input-validation.ngfactory.js");
/* harmony import */ var _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/input-validation/input-validation */ "./src/app/shared/components/input-validation/input-validation.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-add.component */ "./src/app/panel/users/add/user-add.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */

























var styles_UserAddComponent = [_user_add_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserAddComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_UserAddComponent, data: {} });

function View_UserAddComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserAddComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserAddComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserAddComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserAddComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform("general.add")); _ck(_v, 1, 0, currVal_0); }); }
function View_UserAddComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loading-spinner", [], null, null, null, _shared_components_loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_LoadingSpinnerComponent_0"], _shared_components_loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_LoadingSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"], [], { height: [0, "height"], width: [1, "width"], whiteStroke: [2, "whiteStroke"] }, null)], function (_ck, _v) { var currVal_0 = 20; var currVal_1 = 20; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_UserAddComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserAddComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserAddComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserAddComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \u00A0\u00A0", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserAddComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserAddComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 130, "div", [["class", "card card-default"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 115, "div", [["class", "card-body"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 12, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 8, "input", [["autocomplete", "username"], ["class", "form-control"], ["required", ""]], [[8, "placeholder", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "app-input-validation", [], null, null, null, _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputValidationComponent_0"], _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 49152, null, 0, _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__["InputValidationComponent"], [], { control: [0, "control"], errorMsgs: [1, "errorMsgs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 18, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 17, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 10, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "input", [["autocomplete", "name"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "app-input-validation", [], null, null, null, _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputValidationComponent_0"], _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, null, 0, _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__["InputValidationComponent"], [], { control: [0, "control"], errorMsgs: [1, "errorMsgs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 19, "div", [["class", " form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 12, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 8, "input", [["autocomplete", "model-email"], ["class", "form-control"], ["required", ""]], [[8, "placeholder", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 2, "app-input-validation", [], null, null, null, _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputValidationComponent_0"], _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 49152, null, 0, _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__["InputValidationComponent"], [], { control: [0, "control"], errorMsgs: [1, "errorMsgs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 2, "label", [["class", "col-xl-4 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](92, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 9, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 5, "input", [["autocomplete", "current-password"], ["class", "form-control"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 2, "app-input-validation", [], null, null, null, _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputValidationComponent_0"], _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 49152, null, 0, _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__["InputValidationComponent"], [], { control: [0, "control"], errorMsgs: [1, "errorMsgs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 2, "label", [["class", "col-xl-4 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](107, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 9, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 5, "input", [["autocomplete", "current-password"], ["class", "form-control"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 2, "app-input-validation", [], null, null, null, _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputValidationComponent_0"], _shared_components_input_validation_input_validation_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 49152, null, 0, _shared_components_input_validation_input_validation__WEBPACK_IMPORTED_MODULE_15__["InputValidationComponent"], [], { control: [0, "control"], errorMsgs: [1, "errorMsgs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](123, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_17__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_18__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](138, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 9, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 4, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserAddComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserAddComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](148, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserAddComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](153, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_20__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 12, 0, "/users"); _ck(_v, 11, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 16, 0, currVal_6); var currVal_7 = _co.showButtonLoading; _ck(_v, 18, 0, currVal_7); var currVal_17 = _co.registerForm; _ck(_v, 25, 0, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transform("users.edit.userName-tooltip")); var currVal_19 = "top"; _ck(_v, 31, 0, currVal_18, currVal_19); var currVal_30 = ""; _ck(_v, 39, 0, currVal_30); var currVal_31 = _co.registerForm.controls.userName; _ck(_v, 42, 0, currVal_31); var currVal_32 = _co.registerForm.controls.userName; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 47, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).transform(_co.getErrorMessages())); _ck(_v, 47, 0, currVal_32, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("users.edit.name-tooltip")); var currVal_35 = "top"; _ck(_v, 52, 0, currVal_34, currVal_35); var currVal_45 = _co.registerForm.controls.name; _ck(_v, 61, 0, currVal_45); var currVal_46 = _co.registerForm.controls.name; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).transform(_co.getErrorMessages())); _ck(_v, 66, 0, currVal_46, currVal_47); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 71, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).transform("users.edit.email-tooltip")); var currVal_49 = "top"; _ck(_v, 71, 0, currVal_48, currVal_49); var currVal_60 = ""; _ck(_v, 79, 0, currVal_60); var currVal_61 = _co.registerForm.controls.email; _ck(_v, 82, 0, currVal_61); var currVal_62 = _co.registerForm.controls.email; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 87, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).transform(_co.getErrorMessages())); _ck(_v, 87, 0, currVal_62, currVal_63); var currVal_72 = _co.registerForm.controls.password; _ck(_v, 98, 0, currVal_72); var currVal_73 = _co.registerForm.controls.password; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 102, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).transform(_co.getErrorMessages())); _ck(_v, 102, 0, currVal_73, currVal_74); var currVal_83 = _co.registerForm.controls.confirmPassword; _ck(_v, 113, 0, currVal_83); var currVal_84 = _co.registerForm.controls.confirmPassword; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 117, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).transform(_co.getErrorMessages())); _ck(_v, 117, 0, currVal_84, currVal_85); var currVal_87 = false; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 127, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).transform("users.edit.confirmEmail-tooltip")); var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 127, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).transform("users.edit.confirmEmail")); var currVal_90 = "top"; var currVal_91 = "body"; _ck(_v, 127, 0, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91); var currVal_99 = _co.registerForm.controls.confirmEmail; _ck(_v, 136, 0, currVal_99); var currVal_100 = !_co.showButtonLoading; _ck(_v, 143, 0, currVal_100); var currVal_101 = _co.showButtonLoading; _ck(_v, 145, 0, currVal_101); var currVal_104 = _ck(_v, 148, 0, "/users"); _ck(_v, 147, 0, currVal_104); var currVal_105 = (_co.errors.length > 0); _ck(_v, 151, 0, currVal_105); var currVal_106 = _co.toasterconfig; _ck(_v, 153, 0, currVal_106); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("users.description")); _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("general.goback")); _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.showButtonLoading; _ck(_v, 19, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).transform("users.new-user")); _ck(_v, 22, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 24, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("users.edit.userName")); _ck(_v, 33, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).transform("users.edit.userName-tooltip")); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).required ? "" : null); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassUntouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassTouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPristine; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassDirty; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassValid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassInvalid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPending; _ck(_v, 37, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).transform("users.edit.name")); _ck(_v, 54, 0, currVal_36); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).transform("users.edit.name-tooltip")); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 58, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).transform("users.edit.email")); _ck(_v, 73, 0, currVal_50); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).transform("users.edit.email-tooltip")); var currVal_52 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).required ? "" : null); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).ngClassPending; _ck(_v, 77, 0, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 92, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).transform("users.edit.password")); _ck(_v, 92, 0, currVal_64); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassUntouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassTouched; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassPristine; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassDirty; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassValid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassInvalid; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassPending; _ck(_v, 95, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 107, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).transform("users.edit.confirmPassword")); _ck(_v, 107, 0, currVal_75); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassUntouched; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassTouched; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassPristine; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassDirty; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassValid; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassInvalid; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassPending; _ck(_v, 110, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 123, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).transform("users.edit.confirmEmail")); _ck(_v, 123, 0, currVal_86); var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassUntouched; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassTouched; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassPristine; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassDirty; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassValid; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassInvalid; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).ngClassPending; _ck(_v, 133, 0, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98); var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).target; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).href; _ck(_v, 146, 0, currVal_102, currVal_103); });
}
function View_UserAddComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-add", [], null, null, null, View_UserAddComponent_0, RenderType_UserAddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_add_component__WEBPACK_IMPORTED_MODULE_24__["UserAddComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserAddComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-add", _user_add_component__WEBPACK_IMPORTED_MODULE_24__["UserAddComponent"], View_UserAddComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/add/user-add.component.scss.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/panel/users/add/user-add.component.scss.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  \n  \n  \n  \n  \n  \n  \n  \n   }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n     }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n     }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      \n       }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          \n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n\n.bs-datepicker-head > bs-datepicker-navigation-view {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.theme-angle .bs-datepicker-head {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td span.selected, .theme-angle .bs-datepicker-body table td.selected span,\n.theme-angle .bs-datepicker-body table td span[class*=select-]:after, .theme-angle .bs-datepicker-body table td[class*=select-] span:after {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td.week span {\n  color: #23b7e5;\n}\ntag-input {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/users/add/user-add.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/panel/users/add/user-add.component.ts ***!
  \*******************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-stack/forms */ "./node_modules/@ng-stack/forms/fesm2015/ng-stack-forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/validators */ "./src/app/shared/validators/index.ts");
/* harmony import */ var _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/validators/form.utils */ "./src/app/shared/validators/form.utils.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









class UserAddComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.registerForm = new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].validator]),
            confirmPassword: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators__WEBPACK_IMPORTED_MODULE_3__["EqualToValidator"].validator('password')]),
            email: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            name: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            userName: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phoneNumber: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            confirmEmail: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null)
        });
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
        this.showButtonLoading = false;
    }
    ngOnInit() {
        this.errors = [];
        this.showButtonLoading = false;
        this.registerForm.controls.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(a => this.userService.checkEmail(a)))
            .subscribe((emailExist) => {
            if (emailExist)
                this.registerForm.controls.email.setErrors({ 'emailExist': true });
        });
        this.registerForm.controls.userName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(a => this.userService.checkUserName(a)))
            .subscribe((userExist) => {
            if (userExist)
                this.registerForm.controls.userName.setErrors({ 'usernameExist': true });
        });
    }
    save() {
        if (!this.validateForm(this.registerForm)) {
            return;
        }
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.save(this.registerForm.value).subscribe(registerResult => {
            if (registerResult) {
                this.showSuccessMessage();
                this.router.navigate(["/users", this.registerForm.value.userName, 'edit']);
            }
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_5__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    validateForm(form) {
        if (form.invalid) {
            _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_4__["FormUtil"].touchForm(form);
            _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_4__["FormUtil"].dirtyForm(form);
            return false;
        }
        return true;
    }
    getErrorMessages() {
        return this.translator.translate.get('validations').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
}


/***/ }),

/***/ "./src/app/panel/users/claims/user-claims.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/users/claims/user-claims.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_UserClaimsComponent, View_UserClaimsComponent_0, View_UserClaimsComponent_Host_0, UserClaimsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserClaimsComponent", function() { return RenderType_UserClaimsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserClaimsComponent_0", function() { return View_UserClaimsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserClaimsComponent_Host_0", function() { return View_UserClaimsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaimsComponentNgFactory", function() { return UserClaimsComponentNgFactory; });
/* harmony import */ var _user_claims_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-claims.component.scss.shim.ngstyle */ "./src/app/panel/users/claims/user-claims.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_claims_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-claims.component */ "./src/app/panel/users/claims/user-claims.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


















var styles_UserClaimsComponent = [_user_claims_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserClaimsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserClaimsComponent, data: {} });

function View_UserClaimsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserClaimsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserClaimsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserClaimsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserClaimsComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-danger btn-xs"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.remove(_v.context.$implicit.type) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.type; _ck(_v, 5, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 7, 0, currVal_1); });
}
function View_UserClaimsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.claims; _ck(_v, 17, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.userName; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("users.claims.type")); _ck(_v, 10, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("users.claims.value")); _ck(_v, 13, 0, currVal_2); }); }
function View_UserClaimsComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "btn btn-xs btn-outline-info"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectType(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); });
}
function View_UserClaimsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserClaimsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserClaimsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserClaimsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claims"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 49, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 38, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 21, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 20, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "input", [["autocomplete", "claims-type"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.type = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 5, "div", [["class", "col-xl-9 offset-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sugestions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "input", [["autocomplete", "claims-value"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.value = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](70, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserClaimsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/users", _co.userName, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.claims && (_co.claims.length > 0)); _ck(_v, 21, 0, currVal_8); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("users.claims.type-tooltip")); var currVal_12 = "top"; _ck(_v, 33, 0, currVal_11, currVal_12); var currVal_21 = _co.model.type; _ck(_v, 39, 0, currVal_21); var currVal_22 = _co.standardClaims; _ck(_v, 48, 0, currVal_22); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).transform("users.claims.value-tooltip")); var currVal_25 = "top"; _ck(_v, 55, 0, currVal_24, currVal_25); var currVal_34 = _co.model.value; _ck(_v, 61, 0, currVal_34); var currVal_37 = _ck(_v, 70, 0, "/users", _co.userName, "edit"); _ck(_v, 69, 0, currVal_37); var currVal_38 = (_co.errors.length > 0); _ck(_v, 73, 0, currVal_38); var currVal_39 = _co.toasterconfig; _ck(_v, 75, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.ClaimDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_9 = _co.userName; _ck(_v, 25, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("users.claims.type")); _ck(_v, 30, 0, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform("users.claims.type-tooltip")); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("users.claims.value")); _ck(_v, 52, 0, currVal_23); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).transform("users.claims.value-tooltip")); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 58, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).target; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).href; _ck(_v, 68, 0, currVal_35, currVal_36); });
}
function View_UserClaimsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-claim", [], null, null, null, View_UserClaimsComponent_0, RenderType_UserClaimsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_claims_component__WEBPACK_IMPORTED_MODULE_17__["UserClaimsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserClaimsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-claim", _user_claims_component__WEBPACK_IMPORTED_MODULE_17__["UserClaimsComponent"], View_UserClaimsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/claims/user-claims.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/users/claims/user-claims.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/users/claims/user-claims.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/users/claims/user-claims.component.ts ***!
  \*************************************************************/
/*! exports provided: UserClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaimsComponent", function() { return UserClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/claim.model */ "./src/app/shared/viewModel/claim.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_standard_claims_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/viewModel/standard-claims.model */ "./src/app/shared/viewModel/standard-claims.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class UserClaimsComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(m => this.userService.getUserClaims(m.toString()))).subscribe(result => this.claims = result);
        this.errors = [];
        this.model = new _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_2__["Claim"]();
        this.showButtonLoading = false;
        this.standardClaims = _shared_viewModel_standard_claims_model__WEBPACK_IMPORTED_MODULE_4__["StandardClaims"].claims;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    selectType(type) {
        this.model.type = type;
    }
    remove(type) {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.removeClaim(this.userName, type).subscribe(() => {
            this.showSuccessMessage();
            this.loadClaims();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    loadClaims() {
        this.userService.getUserClaims(this.userName).subscribe(c => this.claims = c);
    }
    save() {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.saveClaim(this.userName, this.model).subscribe(registerResult => {
            if (registerResult) {
                this.showSuccessMessage();
                this.loadClaims();
                this.model = new _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_2__["Claim"]();
            }
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
}


/***/ }),

/***/ "./src/app/panel/users/edit/user-edit.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/panel/users/edit/user-edit.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_UserEditComponent, View_UserEditComponent_0, View_UserEditComponent_Host_0, UserEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserEditComponent", function() { return RenderType_UserEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserEditComponent_0", function() { return View_UserEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserEditComponent_Host_0", function() { return View_UserEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponentNgFactory", function() { return UserEditComponentNgFactory; });
/* harmony import */ var _user_edit_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit.component.scss.ngstyle */ "./src/app/panel/users/edit/user-edit.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/numberCheck/numbers-only.directive */ "./src/app/shared/directives/numberCheck/numbers-only.directive.ts");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-edit.component */ "./src/app/panel/users/edit/user-edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */





















var styles_UserEditComponent = [_user_edit_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserEditComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_UserEditComponent, data: {} });

function View_UserEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserEditComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserEditComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserEditComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserEditComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 38, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "input", [["autocomplete", "new-password"], ["class", "form-control"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.resetPassword.password = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 5, "input", [["autocomplete", "new-password"], ["class", "form-control"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.resetPassword.confirmPassword = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.resetPass() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](38, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("users.edit.password-tooltip")); var currVal_2 = "top"; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_11 = _co.resetPassword.password; _ck(_v, 15, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("users.edit.confirmPassword-tooltip")); var currVal_13 = "top"; _ck(_v, 21, 0, currVal_12, currVal_13); var currVal_22 = _co.resetPassword.confirmPassword; _ck(_v, 30, 0, currVal_22); var currVal_25 = _ck(_v, 38, 0, "/users"); _ck(_v, 37, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showButtonLoading; _ck(_v, 0, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("users.edit.password")); _ck(_v, 8, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transform("users.edit.confirmPassword")); _ck(_v, 23, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 27, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).target; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).href; _ck(_v, 36, 0, currVal_23, currVal_24); });
}
function View_UserEditComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 245, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 244, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 233, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "label", [["class", "label label-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "input", [["autocomplete", "name"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.name = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 6, "input", [["autocomplete", "model-email"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.email = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.emailConfirmed = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](71, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 6, "input", [["autocomplete", "model-socialNumber"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.socialNumber = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 6, "input", [["autocomplete", "model-phoneNumber"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.phoneNumber = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](103, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.phoneNumberConfirmed = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 12, "div", [["class", "form-group row mb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](120, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 16777216, null, null, 4, "input", [["bsDatepicker", ""], ["class", "form-control"], ["name", "dp-basic"], ["type", "text"]], null, [[null, "bsValueChange"], [null, "change"], [null, "keyup.esc"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onChange($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.esc" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).hide() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onBlur() !== false);
                ad = (pd_2 && ad);
            }
            if (("bsValueChange" === en)) {
                var pd_3 = ((_co.model.birthdate = $event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 737280, [["dp", 4]], 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_13__["ComponentLoaderFactory"]], { bsValue: [0, "bsValue"], bsConfig: [1, "bsConfig"] }, { bsValueChange: "bsValueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](134, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.twoFactorEnabled = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 12, "div", [["class", "form-group row mb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](149, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](151, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 16777216, null, null, 4, "input", [["bsDatepicker", ""], ["class", "form-control"], ["name", "dp-basic"], ["type", "text"]], null, [[null, "bsValueChange"], [null, "change"], [null, "keyup.esc"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).onChange($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.esc" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).hide() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).onBlur() !== false);
                ad = (pd_2 && ad);
            }
            if (("bsValueChange" === en)) {
                var pd_3 = ((_co.model.lockoutEnd = $event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](158, 737280, [["dp", 4]], 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_13__["ComponentLoaderFactory"]], { bsValue: [0, "bsValue"], bsConfig: [1, "bsConfig"] }, { bsValueChange: "bsValueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 16384, null, 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](165, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.lockoutEnabled = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](171, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](175, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](182, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 7, "input", [["autocomplete", "model-accessFailedCount"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.accessFailedCount = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](191, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](192, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_14__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](197, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](199, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 204).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](204, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](205, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](206, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](211, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](213, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](216, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 218).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](218, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](219, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](220, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](224, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](225, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](227, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](232, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](233, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](234, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["* If you are not an Administrator, some fields will not show."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.update() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](243, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](244, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).transform("users.edit.userName-tooltip")); var currVal_3 = "top"; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("users.edit.name-tooltip")); var currVal_7 = "top"; _ck(_v, 20, 0, currVal_6, currVal_7); var currVal_17 = _co.model.name; _ck(_v, 29, 0, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).transform("users.edit.email-tooltip")); var currVal_19 = "top"; _ck(_v, 36, 0, currVal_18, currVal_19); var currVal_29 = _co.model.email; _ck(_v, 45, 0, currVal_29); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("users.edit.emailConfirmed-tooltip")); var currVal_31 = "top"; _ck(_v, 52, 0, currVal_30, currVal_31); var currVal_40 = _co.model.emailConfirmed; _ck(_v, 62, 0, currVal_40); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).transform("users.edit.socialNumber-tooltip")); var currVal_42 = "top"; _ck(_v, 69, 0, currVal_41, currVal_42); var currVal_52 = _co.model.socialNumber; _ck(_v, 78, 0, currVal_52); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 85, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).transform("users.edit.phoneNumber-tooltip")); var currVal_54 = "top"; _ck(_v, 85, 0, currVal_53, currVal_54); var currVal_64 = _co.model.phoneNumber; _ck(_v, 94, 0, currVal_64); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 101, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).transform("users.edit.phoneNumberConfirmed-tooltip")); var currVal_66 = "top"; _ck(_v, 101, 0, currVal_65, currVal_66); var currVal_75 = _co.model.phoneNumberConfirmed; _ck(_v, 111, 0, currVal_75); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 118, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).transform("users.edit.birthdate-tooltip")); var currVal_77 = "top"; _ck(_v, 118, 0, currVal_76, currVal_77); var currVal_79 = _co.model.birthdate; var currVal_80 = _co.bsConfig; _ck(_v, 127, 0, currVal_79, currVal_80); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 132, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).transform("users.edit.twoFactorEnabled-tooltip")); var currVal_82 = "top"; _ck(_v, 132, 0, currVal_81, currVal_82); var currVal_91 = _co.model.twoFactorEnabled; _ck(_v, 142, 0, currVal_91); var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 149, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).transform("users.edit.lockoutEnd-tooltip")); var currVal_93 = "top"; _ck(_v, 149, 0, currVal_92, currVal_93); var currVal_95 = _co.model.lockoutEnd; var currVal_96 = _co.bsConfig; _ck(_v, 158, 0, currVal_95, currVal_96); var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 163, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 164).transform("users.edit.lockoutEnabled-tooltip")); var currVal_98 = "top"; _ck(_v, 163, 0, currVal_97, currVal_98); var currVal_107 = _co.model.lockoutEnabled; _ck(_v, 173, 0, currVal_107); var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 180, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).transform("users.edit.accessFailedCount-tooltip")); var currVal_109 = "top"; _ck(_v, 180, 0, currVal_108, currVal_109); var currVal_119 = _co.model.accessFailedCount; _ck(_v, 189, 0, currVal_119); var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 197, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).transform("users.edit.claims-tooltip")); var currVal_121 = "top"; _ck(_v, 197, 0, currVal_120, currVal_121); var currVal_125 = _ck(_v, 205, 0, "/users", _co.model.userName, "claims"); _ck(_v, 204, 0, currVal_125); var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 211, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 212).transform("users.edit.roles-tooltip")); var currVal_128 = "top"; _ck(_v, 211, 0, currVal_127, currVal_128); var currVal_132 = _ck(_v, 219, 0, "/users", _co.model.userName, "roles"); _ck(_v, 218, 0, currVal_132); var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 225, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).transform("users.edit.externalLogins-tooltip")); var currVal_135 = "top"; _ck(_v, 225, 0, currVal_134, currVal_135); var currVal_139 = _ck(_v, 233, 0, "/users", _co.model.userName, "logins"); _ck(_v, 232, 0, currVal_139); var currVal_143 = _ck(_v, 244, 0, "/users"); _ck(_v, 243, 0, currVal_143); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showButtonLoading; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.model.name; _ck(_v, 4, 0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform("users.edit.userName")); _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.model.userName; _ck(_v, 16, 0, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).transform("users.edit.name")); _ck(_v, 22, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transform("users.edit.name-tooltip")); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending; _ck(_v, 26, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).transform("users.edit.email")); _ck(_v, 38, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).transform("users.edit.email-tooltip")); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPending; _ck(_v, 42, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).transform("users.edit.emailConfirmed")); _ck(_v, 54, 0, currVal_32); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassUntouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassTouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPristine; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassDirty; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassValid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassInvalid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPending; _ck(_v, 59, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 71, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).transform("users.edit.socialNumber")); _ck(_v, 71, 0, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).transform("users.edit.socialNumber-tooltip")); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassUntouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassTouched; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPristine; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassDirty; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassValid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassInvalid; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPending; _ck(_v, 75, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 87, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).transform("users.edit.phoneNumber")); _ck(_v, 87, 0, currVal_55); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 91, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).transform("users.edit.phoneNumber-tooltip")); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassUntouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassTouched; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassPristine; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassDirty; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassValid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassInvalid; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).ngClassPending; _ck(_v, 91, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 103, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).transform("users.edit.phoneNumberConfirmed")); _ck(_v, 103, 0, currVal_67); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassUntouched; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassTouched; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassPristine; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassDirty; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassValid; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassInvalid; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassPending; _ck(_v, 108, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74); var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).transform("users.edit.birthdate")); _ck(_v, 120, 0, currVal_78); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 134, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).transform("users.edit.twoFactorEnabled")); _ck(_v, 134, 0, currVal_83); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassUntouched; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassTouched; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassPristine; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassDirty; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassValid; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassInvalid; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).ngClassPending; _ck(_v, 139, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90); var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 151, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).transform("users.edit.lockoutEnd")); _ck(_v, 151, 0, currVal_94); var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 165, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).transform("users.edit.lockoutEnabled")); _ck(_v, 165, 0, currVal_99); var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassUntouched; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassTouched; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassPristine; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassDirty; var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassValid; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassInvalid; var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassPending; _ck(_v, 170, 0, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106); var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 182, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).transform("users.edit.accessFailedCount")); _ck(_v, 182, 0, currVal_110); var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 186, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).transform("users.edit.accessFailedCount-tooltip")); var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassUntouched; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassTouched; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassPristine; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassDirty; var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassValid; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassInvalid; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassPending; _ck(_v, 186, 0, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118); var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 199, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 200).transform("users.edit.claims")); _ck(_v, 199, 0, currVal_122); var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 204).target; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 204).href; _ck(_v, 203, 0, currVal_123, currVal_124); var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 206, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).transform("users.edit.claims")); _ck(_v, 206, 0, currVal_126); var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 213, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).transform("users.edit.roles")); _ck(_v, 213, 0, currVal_129); var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 218).target; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 218).href; _ck(_v, 217, 0, currVal_130, currVal_131); var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 220, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 221).transform("users.edit.roles")); _ck(_v, 220, 0, currVal_133); var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 227, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).transform("users.edit.externalLogins")); _ck(_v, 227, 0, currVal_136); var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).target; var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).href; _ck(_v, 231, 0, currVal_137, currVal_138); var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 234, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235).transform("users.edit.externalLogins")); _ck(_v, 234, 0, currVal_140); var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).target; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).href; _ck(_v, 242, 0, currVal_141, currVal_142); });
}
function View_UserEditComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserEditComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserEditComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserEditComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \u00A0\u00A0", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "button", [["class", "btn btn-outline-info"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showChangeData() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "button", [["class", "btn btn-outline-warning"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showChangePass() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEditComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEditComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEditComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEditComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_16__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.showButtonLoading; _ck(_v, 18, 0, currVal_4); var currVal_5 = (_co.errors.length > 0); _ck(_v, 20, 0, currVal_5); var currVal_6 = _co.shouldChangePass; _ck(_v, 22, 0, currVal_6); var currVal_7 = (_co.shouldChangeUserData && _co.model); _ck(_v, 24, 0, currVal_7); var currVal_8 = (_co.errors.length > 0); _ck(_v, 26, 0, currVal_8); var currVal_9 = _co.toasterconfig; _ck(_v, 28, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("users.description")); _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform("users.edit.user-data")); _ck(_v, 11, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform("users.edit.change-password")); _ck(_v, 15, 0, currVal_3); });
}
function View_UserEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-edit", [], null, null, null, View_UserEditComponent_0, RenderType_UserEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserEditComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-edit", _user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], View_UserEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/edit/user-edit.component.scss.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/panel/users/edit/user-edit.component.scss.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  \n  \n  \n  \n  \n  \n  \n  \n   }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n     }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n     }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      \n       }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          \n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n\n.bs-datepicker-head > bs-datepicker-navigation-view {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.theme-angle .bs-datepicker-head {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td span.selected, .theme-angle .bs-datepicker-body table td.selected span,\n.theme-angle .bs-datepicker-body table td span[class*=select-]:after, .theme-angle .bs-datepicker-body table td[class*=select-] span:after {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td.week span {\n  color: #23b7e5;\n}\ntag-input {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/users/edit/user-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/panel/users/edit/user-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_reset_password_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/reset-password.model */ "./src/app/shared/viewModel/reset-password.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-json-patch */ "./node_modules/fast-json-patch/index.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








class UserEditComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
        this.showButtonLoading = true;
        this.shouldChangePass = false;
        this.shouldChangeUserData = true;
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(p => this.username = p["username"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(p => this.userService.getDetails(p["username"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(user => this.patchObserver = fast_json_patch__WEBPACK_IMPORTED_MODULE_5__["observe"](user))).subscribe(result => {
            this.model = result;
            this.showButtonLoading = false;
            if (this.model.lockoutEnd != null)
                this.model.lockoutEnd = new Date(this.model.lockoutEnd);
        }, err => {
            this.router.navigate(['/users']);
        });
        this.errors = [];
        this.resetPassword = new _shared_viewModel_reset_password_model__WEBPACK_IMPORTED_MODULE_3__["ResetPassword"]();
    }
    update() {
        this.showButtonLoading = true;
        this.errors = [];
        try {
            this.userService.patch(this.username, fast_json_patch__WEBPACK_IMPORTED_MODULE_5__["generate"](this.patchObserver)).subscribe(() => {
                this.showSuccessMessage();
                this.router.navigate(["/users"]);
            }, err => {
                this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
                this.showButtonLoading = false;
            });
        }
        catch (error) {
            this.errors = [];
            this.errors.push("Unknown error while trying to update");
            this.showButtonLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])("Unknown error while trying to update");
        }
    }
    resetPass() {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.resetPassword(this.username, this.resetPassword).subscribe(() => {
            this.showSuccessMessage();
            this.router.navigate(["/users"]);
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    showChangePass() {
        this.shouldChangePass = true;
        this.shouldChangeUserData = false;
    }
    showChangeData() {
        this.shouldChangePass = false;
        this.shouldChangeUserData = true;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
}


/***/ }),

/***/ "./src/app/panel/users/events/user-events.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/users/events/user-events.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_UserEventsComponent, View_UserEventsComponent_0, View_UserEventsComponent_Host_0, UserEventsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserEventsComponent", function() { return RenderType_UserEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserEventsComponent_0", function() { return View_UserEventsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserEventsComponent_Host_0", function() { return View_UserEventsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsComponentNgFactory", function() { return UserEventsComponentNgFactory; });
/* harmony import */ var _user_events_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-events.component.scss.shim.ngstyle */ "./src/app/panel/users/events/user-events.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-events.component */ "./src/app/panel/users/events/user-events.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var styles_UserEventsComponent = [_user_events_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserEventsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserEventsComponent, data: {} });

function View_UserEventsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, "/users", _co.user.userName, "edit"); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("general.goback")); _ck(_v, 5, 0, currVal_3); });
}
function View_UserEventsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserEventsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "half-float-bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "img-thumbnail circle thumb128"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.picture; _ck(_v, 1, 0, currVal_0); }); }
function View_UserEventsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "half-float"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", ""], ["class", "img-fluid"], ["src", "assets/img/bg3.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [["class", "m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fas fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "fas fa-mail-bulk"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 9, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "div", [["class", "card bg-danger-dark border-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "div", [["class", "row align-items-center mx-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "col-4 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "em", [["class", "icon-star fa-3x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "col-8 py-4 bg-danger rounded-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "div", [["class", "h1 m-0 text-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "div", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Events"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.picture; _ck(_v, 5, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.user.name; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.user.userName; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.user.email; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co.total; _ck(_v, 22, 0, currVal_4); }); }
function View_UserEventsComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addRow(_v.context.index, "table-user-events") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.category; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.action; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.when; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.who; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.ip; _ck(_v, 10, 0, currVal_4); });
}
function View_UserEventsComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 65, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 17, "table", [["class", "table table-striped table-bordered table-hover"], ["id", "table-user-events"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["When"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Who"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Where"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 42, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 41, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Search"], ["type", "text"]], null, [[null, "keyup"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (_co.findEvent($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_co.findEvent($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 37, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 36, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 25, "select", [["class", "custom-select"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.quantity = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.loadResources() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 3, "option", [["value", "10"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "option", [["value", "20"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["20"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 3, "option", [["value", "30"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["30"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 3, "option", [["value", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["40"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "option", [["value", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 7, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pageChange" === en)) {
                var pd_0 = ((_co.page = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (("pageChange" === en)) {
                var pd_1 = (_co.loadResources() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NgbPagination_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NgbPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 573440, null, 6, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPagination"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationConfig"]], { boundaryLinks: [0, "boundaryLinks"], ellipses: [1, "ellipses"], rotate: [2, "rotate"], collectionSize: [3, "collectionSize"], maxSize: [4, "maxSize"], page: [5, "page"], pageSize: [6, "pageSize"] }, { pageChange: "pageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tplEllipsis: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { tplFirst: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { tplLast: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { tplNext: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { tplNumber: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { tplPrevious: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.model; _ck(_v, 22, 0, currVal_1); var currVal_9 = _co.quantity; _ck(_v, 35, 0, currVal_9); var currVal_10 = "10"; _ck(_v, 39, 0, currVal_10); var currVal_11 = "10"; _ck(_v, 40, 0, currVal_11); var currVal_12 = "20"; _ck(_v, 43, 0, currVal_12); var currVal_13 = "20"; _ck(_v, 44, 0, currVal_13); var currVal_14 = "30"; _ck(_v, 47, 0, currVal_14); var currVal_15 = "30"; _ck(_v, 48, 0, currVal_15); var currVal_16 = "40"; _ck(_v, 51, 0, currVal_16); var currVal_17 = "40"; _ck(_v, 52, 0, currVal_17); var currVal_18 = "50"; _ck(_v, 55, 0, currVal_18); var currVal_19 = "50"; _ck(_v, 56, 0, currVal_19); var currVal_20 = true; var currVal_21 = false; var currVal_22 = true; var currVal_23 = _co.total; var currVal_24 = 5; var currVal_25 = _co.page; var currVal_26 = _co.quantity; _ck(_v, 59, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending; _ck(_v, 32, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); });
}
function View_UserEventsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claims"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserEventsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.user; _ck(_v, 10, 0, currVal_2); var currVal_3 = (_co.model == null); _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.model; _ck(_v, 14, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.ClaimDescription")); _ck(_v, 7, 0, currVal_1); }); }
function View_UserEventsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-events", [], null, null, null, View_UserEventsComponent_0, RenderType_UserEventsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_events_component__WEBPACK_IMPORTED_MODULE_13__["UserEventsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserEventsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-events", _user_events_component__WEBPACK_IMPORTED_MODULE_13__["UserEventsComponent"], View_UserEventsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/events/user-events.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/users/events/user-events.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [""];



/***/ }),

/***/ "./src/app/panel/users/events/user-events.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/users/events/user-events.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsComponent", function() { return UserEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class UserEventsComponent {
    constructor(route, router, translator, userService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.page = 1;
        this.quantity = 10;
        this.eventSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(p => this.userService.getDetails(p["username"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => this.user = user))
            .subscribe(s => this.loadResources(), err => {
            this.router.navigate(['/users']);
        });
        this.eventSearch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(text => this.userService.searchEvents(this.user.userName, text, this.quantity, this.page)))
            .subscribe((response) => {
            this.model = response.collection;
            this.total = response.total;
        });
    }
    loadResources() {
        this.userService.showEvents(this.user.userName, this.quantity, this.page)
            .subscribe((response) => {
            this.setEveryoneToNotShow();
            this.model = response.collection;
            this.total = response.total;
        });
    }
    findEvent(event) {
        if (event.target.value == null || event.target.value === "") {
            this.loadResources();
        }
        this.eventSearch.next(event.target.value);
    }
    addRow(index, tableName) {
        var table = document.getElementById(tableName);
        // Hide everyone before. In case users click in another item from list
        table.querySelectorAll("[temp='true']").forEach((i) => i.remove());
        var item = this.model[index];
        if (item.show) {
            this.setEveryoneToNotShow();
            return;
        }
        let htmlContent = `<pre class="pre-scrollable-width">${JSON.stringify(JSON.parse(item.details), null, 4)}</pre>`;
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(index + 2);
        row.setAttribute("temp", "true");
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell = row.insertCell(0);
        // Add some text to the new cells:
        cell.innerHTML = htmlContent;
        cell.colSpan = 7;
        this.setEveryoneToNotShow();
        item.show = true;
    }
    setEveryoneToNotShow() {
        if (this.model == null)
            return;
        // set all others items as show = false
        this.model.forEach(e => {
            e.show = false;
        });
    }
}


/***/ }),

/***/ "./src/app/panel/users/list/user-list.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/panel/users/list/user-list.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_UserListComponent, View_UserListComponent_0, View_UserListComponent_Host_0, UserListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserListComponent", function() { return RenderType_UserListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserListComponent_0", function() { return View_UserListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserListComponent_Host_0", function() { return View_UserListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponentNgFactory", function() { return UserListComponentNgFactory; });
/* harmony import */ var _user_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component.scss.shim.ngstyle */ "./src/app/panel/users/list/user-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-list.component */ "./src/app/panel/users/list/user-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_UserListComponent = [_user_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserListComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserListComponent, data: {} });

function View_UserListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "w-100 d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_UserListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "img-fluid rounded thumb48"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.picture; _ck(_v, 0, 0, currVal_0); }); }
function View_UserListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "img-fluid rounded thumb48"], ["src", "assets/img/dummy.png"]], null, null, null, null, null))], null, null); }
function View_UserListComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 35, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "btn-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "a", [["class", "btn btn-primary btn-xs"], ["placement", "top"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (("focusin" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseEnter() !== false);
                ad = (pd_2 && ad);
            }
            if (("focusout" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseLeave() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "a", [["class", "btn btn-outline-primary btn-xs"], ["placement", "top"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (("focusin" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onMouseEnter() !== false);
                ad = (pd_2 && ad);
            }
            if (("focusout" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onMouseLeave() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { state: [0, "state"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](11, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-history"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 20, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 19, "div", [["class", "media align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "a", [["class", "mr-3"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 13, "div", [["class", "media-body d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h4", [["class", "m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "fas fa-mail-bulk"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "button", [["class", "btn btn-danger btn-sm"], ["placement", "top"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onClick() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_co.remove(_v.context.$implicit) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = _ck(_v, 5, 0, "/users", _v.context.$implicit.userName, "edit"); _ck(_v, 4, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("general.edit")); var currVal_4 = "top"; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_7 = _v.context.$implicit; var currVal_8 = _ck(_v, 11, 0, "/users", _v.context.$implicit.userName, "events"); _ck(_v, 10, 0, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).transform("users.list.log-tooltip")); var currVal_10 = "top"; _ck(_v, 12, 0, currVal_9, currVal_10); var currVal_11 = _v.context.$implicit.picture; _ck(_v, 19, 0, currVal_11); var currVal_12 = !_v.context.$implicit.picture; _ck(_v, 21, 0, currVal_12); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("general.remove")); var currVal_17 = "top"; _ck(_v, 33, 0, currVal_16, currVal_17); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_13 = _v.context.$implicit.name; _ck(_v, 25, 0, currVal_13); var currVal_14 = _v.context.$implicit.userName; _ck(_v, 27, 0, currVal_14); var currVal_15 = _v.context.$implicit.email; _ck(_v, 30, 0, currVal_15); });
}
function View_UserListComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 60, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "a", [["class", "btn btn-outline-primary mb-3"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Search"], ["type", "text"]], null, [[null, "keyup"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (_co.findUser($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_co.findUser($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 42, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 41, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Search"], ["type", "text"]], null, [[null, "keyup"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (_co.findUser($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_co.findUser($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 37, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 36, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 25, "select", [["class", "custom-select"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.quantity = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.loadResources() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "option", [["value", "10"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "option", [["value", "20"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["20"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 3, "option", [["value", "30"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["30"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "option", [["value", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["40"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 3, "option", [["value", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 7, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pageChange" === en)) {
                var pd_0 = ((_co.page = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (("pageChange" === en)) {
                var pd_1 = (_co.loadResources() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_NgbPagination_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_NgbPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 573440, null, 6, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPagination"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationConfig"]], { boundaryLinks: [0, "boundaryLinks"], ellipses: [1, "ellipses"], rotate: [2, "rotate"], collectionSize: [3, "collectionSize"], maxSize: [4, "maxSize"], page: [5, "page"], pageSize: [6, "pageSize"] }, { pageChange: "pageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tplEllipsis: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { tplFirst: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { tplLast: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { tplNext: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { tplNumber: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { tplPrevious: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, "/users/add"); _ck(_v, 3, 0, currVal_2); var currVal_4 = _co.loading; _ck(_v, 12, 0, currVal_4); var currVal_5 = _co.users; _ck(_v, 17, 0, currVal_5); var currVal_13 = _co.quantity; _ck(_v, 30, 0, currVal_13); var currVal_14 = "10"; _ck(_v, 34, 0, currVal_14); var currVal_15 = "10"; _ck(_v, 35, 0, currVal_15); var currVal_16 = "20"; _ck(_v, 38, 0, currVal_16); var currVal_17 = "20"; _ck(_v, 39, 0, currVal_17); var currVal_18 = "30"; _ck(_v, 42, 0, currVal_18); var currVal_19 = "30"; _ck(_v, 43, 0, currVal_19); var currVal_20 = "40"; _ck(_v, 46, 0, currVal_20); var currVal_21 = "40"; _ck(_v, 47, 0, currVal_21); var currVal_22 = "50"; _ck(_v, 50, 0, currVal_22); var currVal_23 = "50"; _ck(_v, 51, 0, currVal_23); var currVal_24 = true; var currVal_25 = false; var currVal_26 = true; var currVal_27 = _co.total; var currVal_28 = 5; var currVal_29 = _co.page; var currVal_30 = _co.quantity; _ck(_v, 54, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("users.new-user")); _ck(_v, 6, 0, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 27, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); });
}
function View_UserListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \u00A0\u00A0", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.users == null); _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.users; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("users.description")); _ck(_v, 6, 0, currVal_1); }); }
function View_UserListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-list", [], null, null, null, View_UserListComponent_0, RenderType_UserListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserListComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-list", _user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], View_UserListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/list/user-list.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/panel/users/list/user-list.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  cursor: pointer;\n}"];



/***/ }),

/***/ "./src/app/panel/users/list/user-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/panel/users/list/user-list.component.ts ***!
  \*********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






class UserListComponent {
    constructor(translator, userService) {
        this.translator = translator;
        this.userService = userService;
        this.loading = true;
        this.page = 1;
        this.quantity = 10;
        this.userSearch = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadResources();
        this.userSearch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.animateLoadUsers()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(a => this.userService.findUsers(a, this.quantity, this.page)))
            .subscribe((response) => {
            this.users = response.collection;
            this.total = response.total;
            this.stopAnimateLoadUsers();
        });
    }
    animateLoadUsers() {
        this.loading = true;
    }
    stopAnimateLoadUsers() {
        this.loading = false;
    }
    loadResources() {
        this.animateLoadUsers();
        this.userService.getUsers(this.quantity, this.page)
            .subscribe(a => {
            this.users = a.collection;
            this.total = a.total;
            this.stopAnimateLoadUsers();
        });
    }
    remove(user) {
        this.translator.translate.get('identityResource.remove').subscribe(m => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: m['title'],
                text: m["text"],
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: m["confirmButtonText"],
                cancelButtonText: m["cancelButtonText"],
            }).then(isConfirm => {
                if (isConfirm) {
                    this.userService.remove(user.userName).subscribe(() => {
                        this.loadResources();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Deleted!", m["deleted"], 'success');
                    }, err => {
                        let errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Error!", errors[0], 'error');
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cancelled", m["cancelled"], 'error');
                }
            });
        });
    }
    findUser(event) {
        if (event.target.value == null || event.target.value === "") {
            this.loadResources();
        }
        this.userSearch.next(event.target.value);
    }
}


/***/ }),

/***/ "./src/app/panel/users/logins/user-logins.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/users/logins/user-logins.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_UserLoginsComponent, View_UserLoginsComponent_0, View_UserLoginsComponent_Host_0, UserLoginsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserLoginsComponent", function() { return RenderType_UserLoginsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserLoginsComponent_0", function() { return View_UserLoginsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserLoginsComponent_Host_0", function() { return View_UserLoginsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginsComponentNgFactory", function() { return UserLoginsComponentNgFactory; });
/* harmony import */ var _user_logins_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-logins.component.scss.shim.ngstyle */ "./src/app/panel/users/logins/user-logins.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_logins_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-logins.component */ "./src/app/panel/users/logins/user-logins.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
















var styles_UserLoginsComponent = [_user_logins_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserLoginsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserLoginsComponent, data: {} });

function View_UserLoginsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserLoginsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserLoginsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserLoginsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserLoginsComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-danger btn-xs"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.remove(_v.context.$implicit.loginProvider, _v.context.$implicit.providerKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.loginProvider; _ck(_v, 5, 0, currVal_0); var currVal_1 = _v.context.$implicit.providerDisplayName; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.providerKey; _ck(_v, 9, 0, currVal_2); });
}
function View_UserLoginsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserLoginsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserLoginsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserLoginsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserLoginsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserLoginsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 23, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 19, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 15, "table", [["class", "table table-striped"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserLoginsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserLoginsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_11__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/users", _co.userName, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.showButtonLoading; _ck(_v, 19, 0, currVal_7); var currVal_14 = _co.logins; _ck(_v, 43, 0, currVal_14); var currVal_15 = (_co.errors.length > 0); _ck(_v, 45, 0, currVal_15); var currVal_16 = _co.toasterconfig; _ck(_v, 47, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.ClaimDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_8 = _co.userName; _ck(_v, 23, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).transform("users.logins.nologins")); _ck(_v, 26, 0, currVal_9); var currVal_10 = (_co.logins.length <= 0); _ck(_v, 28, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("users.logins.loginProvider")); _ck(_v, 33, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).transform("users.logins.providerDisplayName")); _ck(_v, 36, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).transform("users.logins.providerKey")); _ck(_v, 39, 0, currVal_13); });
}
function View_UserLoginsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-user-logins", [], null, null, null, View_UserLoginsComponent_0, RenderType_UserLoginsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _user_logins_component__WEBPACK_IMPORTED_MODULE_15__["UserLoginsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserLoginsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-logins", _user_logins_component__WEBPACK_IMPORTED_MODULE_15__["UserLoginsComponent"], View_UserLoginsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/logins/user-logins.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/users/logins/user-logins.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/users/logins/user-logins.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/users/logins/user-logins.component.ts ***!
  \*************************************************************/
/*! exports provided: UserLoginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginsComponent", function() { return UserLoginsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class UserLoginsComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(m => this.userService.getUserLogins(m.toString()))).subscribe(result => this.logins = result);
        this.errors = [];
        this.showButtonLoading = false;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    remove(loginProvider, providerKey) {
        this.showButtonLoading = true;
        this.errors = [];
        try {
            this.userService.removeLogin(this.userName, loginProvider, providerKey).subscribe(registerResult => {
                if (registerResult.data) {
                    this.showSuccessMessage();
                    this.loadLogins();
                }
                this.showButtonLoading = false;
            }, err => {
                this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
                this.showButtonLoading = false;
            });
        }
        catch (error) {
            this.errors = [];
            this.errors.push("Unknown error while trying to remove");
            this.showButtonLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Unknown error while trying to remove");
        }
    }
    loadLogins() {
        this.userService.getUserLogins(this.userName).subscribe(c => this.logins = c);
    }
}


/***/ }),

/***/ "./src/app/panel/users/roles/user-roles.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/panel/users/roles/user-roles.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_UserRolesComponent, View_UserRolesComponent_0, View_UserRolesComponent_Host_0, UserRolesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserRolesComponent", function() { return RenderType_UserRolesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserRolesComponent_0", function() { return View_UserRolesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserRolesComponent_Host_0", function() { return View_UserRolesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesComponentNgFactory", function() { return UserRolesComponentNgFactory; });
/* harmony import */ var _user_roles_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roles.component.scss.shim.ngstyle */ "./src/app/panel/users/roles/user-roles.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_role_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var _user_roles_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-roles.component */ "./src/app/panel/users/roles/user-roles.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */





















var styles_UserRolesComponent = [_user_roles_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserRolesComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserRolesComponent, data: {} });

function View_UserRolesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserRolesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserRolesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserRolesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_UserRolesComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-danger btn-xs"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.remove(_v.context.$implicit.name) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_0); });
}
function View_UserRolesComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 10, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserRolesComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.userRoles; _ck(_v, 14, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.userName; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("users.roles.name")); _ck(_v, 10, 0, currVal_1); }); }
function View_UserRolesComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_UserRolesComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_UserRolesComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserRolesComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Roles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserRolesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserRolesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserRolesComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 40, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 29, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 20, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 19, "ng-select", [["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.role = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵs"]], { placeholder: [0, "placeholder"], items: [1, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](61, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserRolesComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_15__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_16__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/users", _co.userName, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.userRoles && (_co.userRoles.length > 0)); _ck(_v, 21, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("users.roles.role-tooltip")); var currVal_11 = "top"; _ck(_v, 30, 0, currVal_10, currVal_11); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).transform("users.roles.role-tooltip")); var currVal_31 = _co.roles; _ck(_v, 38, 0, currVal_30, currVal_31); var currVal_32 = _co.model.role; _ck(_v, 53, 0, currVal_32); var currVal_35 = _ck(_v, 61, 0, "/users", _co.userName, "edit"); _ck(_v, 60, 0, currVal_35); var currVal_36 = (_co.errors.length > 0); _ck(_v, 64, 0, currVal_36); var currVal_37 = _co.toasterconfig; _ck(_v, 66, 0, currVal_37); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.users")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.ClaimDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_9 = _co.userName; _ck(_v, 25, 0, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).transform("users.roles.role")); _ck(_v, 32, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).useDefaultClass; var currVal_14 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).multiple; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).typeahead; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).multiple; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).addTag; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).searchable; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).clearable; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isOpen; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).filtered; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending; _ck(_v, 36, 1, [currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).target; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).href; _ck(_v, 59, 0, currVal_33, currVal_34); });
}
function View_UserRolesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "app-user-roles", [], null, null, null, View_UserRolesComponent_0, RenderType_UserRolesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_role_service__WEBPACK_IMPORTED_MODULE_19__["RoleService"], _shared_services_role_service__WEBPACK_IMPORTED_MODULE_19__["RoleService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _user_roles_component__WEBPACK_IMPORTED_MODULE_20__["UserRolesComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_16__["ToasterService"], _shared_services_role_service__WEBPACK_IMPORTED_MODULE_19__["RoleService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var UserRolesComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-user-roles", _user_roles_component__WEBPACK_IMPORTED_MODULE_20__["UserRolesComponent"], View_UserRolesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/users/roles/user-roles.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/users/roles/user-roles.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/users/roles/user-roles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/panel/users/roles/user-roles.component.ts ***!
  \***********************************************************/
/*! exports provided: UserRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesComponent", function() { return UserRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/viewModel/role.model */ "./src/app/shared/viewModel/role.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class UserRolesComponent {
    constructor(route, router, translator, userService, toasterService, roleService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.roleService = roleService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(m => this.userService.getUserRoles(m.toString()))).subscribe(result => this.userRoles = result);
        this.errors = [];
        this.model = new _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_4__["SaveRole"]();
        this.showButtonLoading = false;
        this.roleService.getAvailableRoles().subscribe(roles => this.roles = roles.map(r => r.name));
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    remove(role) {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.removeRole(this.userName, role).subscribe(() => {
            this.showSuccessMessage();
            this.loadClaims();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    loadClaims() {
        this.userService.getUserRoles(this.userName).subscribe(c => this.userRoles = c);
    }
    save() {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.saveRole(this.userName, this.model).subscribe(registerResult => {
            if (registerResult) {
                this.showSuccessMessage();
                this.loadClaims();
                this.model = new _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_4__["SaveRole"]();
            }
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
}


/***/ }),

/***/ "./src/app/panel/users/user.module.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/panel/users/user.module.ngfactory.js ***!
  \******************************************************/
/*! exports provided: UserModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModuleNgFactory", function() { return UserModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.module */ "./src/app/panel/users/user.module.ts");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory */ "./node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory */ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js");
/* harmony import */ var _node_modules_ng2_tooltip_directive_ng2_tooltip_directive_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ng2-tooltip-directive/ng2-tooltip-directive.ngfactory */ "./node_modules/ng2-tooltip-directive/ng2-tooltip-directive.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_popover_ngx_bootstrap_popover_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/popover/ngx-bootstrap-popover.ngfactory */ "./node_modules/ngx-bootstrap/popover/ngx-bootstrap-popover.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_typeahead_ngx_bootstrap_typeahead_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/typeahead/ngx-bootstrap-typeahead.ngfactory */ "./node_modules/ngx-bootstrap/typeahead/ngx-bootstrap-typeahead.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_user_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/user-list.component.ngfactory */ "./src/app/panel/users/list/user-list.component.ngfactory.js");
/* harmony import */ var _edit_user_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/user-edit.component.ngfactory */ "./src/app/panel/users/edit/user-edit.component.ngfactory.js");
/* harmony import */ var _add_user_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/user-add.component.ngfactory */ "./src/app/panel/users/add/user-add.component.ngfactory.js");
/* harmony import */ var _claims_user_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./claims/user-claims.component.ngfactory */ "./src/app/panel/users/claims/user-claims.component.ngfactory.js");
/* harmony import */ var _roles_user_roles_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./roles/user-roles.component.ngfactory */ "./src/app/panel/users/roles/user-roles.component.ngfactory.js");
/* harmony import */ var _logins_user_logins_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logins/user-logins.component.ngfactory */ "./src/app/panel/users/logins/user-logins.component.ngfactory.js");
/* harmony import */ var _events_user_events_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./events/user-events.component.ngfactory */ "./src/app/panel/users/events/user-events.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/services/colors.service */ "./src/app/shared/services/colors.service.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! angular2-toaster/src/toaster.module */ "./node_modules/angular2-toaster/src/toaster.module.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _list_user_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./list/user-list.component */ "./src/app/panel/users/list/user-list.component.ts");
/* harmony import */ var _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./edit/user-edit.component */ "./src/app/panel/users/edit/user-edit.component.ts");
/* harmony import */ var _add_user_add_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./add/user-add.component */ "./src/app/panel/users/add/user-add.component.ts");
/* harmony import */ var _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./claims/user-claims.component */ "./src/app/panel/users/claims/user-claims.component.ts");
/* harmony import */ var _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./roles/user-roles.component */ "./src/app/panel/users/roles/user-roles.component.ts");
/* harmony import */ var _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./logins/user-logins.component */ "./src/app/panel/users/logins/user-logins.component.ts");
/* harmony import */ var _events_user_events_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./events/user-events.component */ "./src/app/panel/users/events/user-events.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */























































var UserModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_user_module__WEBPACK_IMPORTED_MODULE_1__["UserModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AlertComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDaterangepickerContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerInlineContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDaterangepickerInlineContainerComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_4__["BsDropdownContainerComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponentNgFactory"], _node_modules_ng2_tooltip_directive_ng2_tooltip_directive_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"], _node_modules_ngx_bootstrap_popover_ngx_bootstrap_popover_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PopoverContainerComponentNgFactory"], _node_modules_ngx_bootstrap_typeahead_ngx_bootstrap_typeahead_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TypeaheadContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_lNgFactory"], _list_user_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["UserListComponentNgFactory"], _edit_user_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["UserEditComponentNgFactory"], _add_user_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["UserAddComponentNgFactory"], _claims_user_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["UserClaimsComponentNgFactory"], _roles_user_roles_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["UserRolesComponentNgFactory"], _logins_user_logins_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["UserLoginsComponentNgFactory"], _events_user_events_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["UserEventsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__["AccordionConfig"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__["AccordionConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertConfig"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_23__["PositioningService"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_23__["PositioningService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_24__["ComponentLoaderFactory"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_24__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_23__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵc"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵe"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDaterangepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDaterangepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerInlineConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerInlineConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDaterangepickerInlineConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDaterangepickerInlineConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsLocaleService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsLocaleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵd"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵd"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["ɵe"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsLocaleService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownState"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["BsModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_24__["ComponentLoaderFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_27__["PaginationConfig"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_27__["PaginationConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_28__["ProgressbarConfig"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_28__["ProgressbarConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_29__["RatingConfig"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_29__["RatingConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_30__["TabsetConfig"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_30__["TabsetConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerConfig"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerActions"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerActions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerStore"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverConfig"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_33__["TypeaheadConfig"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_33__["TypeaheadConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_34__["ColorsService"], _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_34__["ColorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_35__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_35__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_36__["ToasterService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_36__["ToasterService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_37__["ToasterContainerComponent"], angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_37__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_36__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_39__["CollapseModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_39__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__["AccordionModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_40__["ButtonsModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_40__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_27__["PaginationModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_27__["PaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_28__["ProgressbarModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_28__["ProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_29__["RatingModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_29__["RatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_30__["TabsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_30__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_31__["TimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_33__["TypeaheadModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_33__["TypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_42__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_42__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_43__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_43__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_45__["ToasterModule"], angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_45__["ToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_46__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_46__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_35__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_35__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _user_module__WEBPACK_IMPORTED_MODULE_1__["UserModule"], _user_module__WEBPACK_IMPORTED_MODULE_1__["UserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_42__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_42__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownConfig"], { autoClose: true, insideClick: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_43__["ROUTES"], function () { return [[{ path: "", component: _list_user_list_component__WEBPACK_IMPORTED_MODULE_48__["UserListComponent"] }, { path: ":username/edit", component: _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_49__["UserEditComponent"] }, { path: "add", component: _add_user_add_component__WEBPACK_IMPORTED_MODULE_50__["UserAddComponent"] }, { path: ":username/claims", component: _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_51__["UserClaimsComponent"] }, { path: ":username/roles", component: _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_52__["UserRolesComponent"] }, { path: ":username/logins", component: _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_53__["UserLoginsComponent"] }, { path: ":username/events", component: _events_user_events_component__WEBPACK_IMPORTED_MODULE_54__["UserEventsComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/panel/users/user.module.ts":
/*!********************************************!*\
  !*** ./src/app/panel/users/user.module.ts ***!
  \********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_user_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/user-add.component */ "./src/app/panel/users/add/user-add.component.ts");
/* harmony import */ var _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claims/user-claims.component */ "./src/app/panel/users/claims/user-claims.component.ts");
/* harmony import */ var _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/user-edit.component */ "./src/app/panel/users/edit/user-edit.component.ts");
/* harmony import */ var _events_user_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/user-events.component */ "./src/app/panel/users/events/user-events.component.ts");
/* harmony import */ var _list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/user-list.component */ "./src/app/panel/users/list/user-list.component.ts");
/* harmony import */ var _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logins/user-logins.component */ "./src/app/panel/users/logins/user-logins.component.ts");
/* harmony import */ var _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles/user-roles.component */ "./src/app/panel/users/roles/user-roles.component.ts");








const routes = [
    { path: "", component: _list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"] },
    { path: ":username/edit", component: _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"] },
    { path: "add", component: _add_user_add_component__WEBPACK_IMPORTED_MODULE_1__["UserAddComponent"] },
    { path: ":username/claims", component: _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_2__["UserClaimsComponent"] },
    { path: ":username/roles", component: _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_7__["UserRolesComponent"] },
    { path: ":username/logins", component: _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginsComponent"] },
    { path: ":username/events", component: _events_user_events_component__WEBPACK_IMPORTED_MODULE_4__["UserEventsComponent"] },
];
class UserModule {
}


/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_LoadingSpinnerComponent, View_LoadingSpinnerComponent_0, View_LoadingSpinnerComponent_Host_0, LoadingSpinnerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoadingSpinnerComponent", function() { return RenderType_LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoadingSpinnerComponent_0", function() { return View_LoadingSpinnerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoadingSpinnerComponent_Host_0", function() { return View_LoadingSpinnerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponentNgFactory", function() { return LoadingSpinnerComponentNgFactory; });
/* harmony import */ var _loading_spinner_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-spinner.component.scss.shim.ngstyle */ "./src/app/shared/components/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_LoadingSpinnerComponent = [_loading_spinner_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoadingSpinnerComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoadingSpinnerComponent, data: {} });

function View_LoadingSpinnerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner-container d-flex"]], [[4, "height", "px"], [4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["class", "spinner"], ["viewBox", "0 0 50 50"]], [[4, "height", "px"], [4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, ":svg:circle", [["class", "path"], ["cx", "25"], ["cy", "25"], ["fill", "none"], ["r", "20"], ["stroke-width", "5"]], [[2, "white-stroke", null]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.height; var currVal_1 = _co.width; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.height; var currVal_3 = _co.width; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _co.whiteStroke; _ck(_v, 2, 0, currVal_4); }); }
function View_LoadingSpinnerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loading-spinner", [], null, null, null, View_LoadingSpinnerComponent_0, RenderType_LoadingSpinnerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], [], null, null)], null, null); }
var LoadingSpinnerComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("loading-spinner", _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], View_LoadingSpinnerComponent_Host_0, { height: "height", width: "width", whiteStroke: "whiteStroke" }, {}, []);



/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".spinner-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  z-index: 2;\n}\n\n.spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d9cec;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-dasharray: 89, 200;\n  stroke-dashoffset: -10;\n}\n\n.spinner[_ngcontent-%COMP%]   .path.white-stroke[_ngcontent-%COMP%] {\n  stroke: white;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}"];



/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
class LoadingSpinnerComponent {
    constructor() {
        this.height = 40;
        this.width = 40;
        this.whiteStroke = false;
    }
}


/***/ }),

/***/ "./src/app/shared/validators/equal-to.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/equal-to.validator.ts ***!
  \*********************************************************/
/*! exports provided: EqualToValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualToValidator", function() { return EqualToValidator; });
class EqualToValidator {
    static validator(equalToControl) {
        const controlName = equalToControl;
        return (control) => {
            if (typeof equalToControl === 'string') {
                // 'Parent' de 'control' vai ser nulo durante a inicialização da página
                if (!control.parent) {
                    return null;
                }
                equalToControl = control.parent.get(equalToControl);
            }
            if ((controlName === 'userEmail1') && control.value !== equalToControl.value) {
                return { equalToEmail: true };
            }
            if ((controlName === 'password') && control.value !== equalToControl.value) {
                return { equalToPassword: true };
            }
            return null;
        };
    }
}


/***/ }),

/***/ "./src/app/shared/validators/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/validators/index.ts ***!
  \********************************************/
/*! exports provided: EqualToValidator, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equal_to_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equal-to.validator */ "./src/app/shared/validators/equal-to.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqualToValidator", function() { return _equal_to_validator__WEBPACK_IMPORTED_MODULE_0__["EqualToValidator"]; });

/* harmony import */ var _password_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.validator */ "./src/app/shared/validators/password.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return _password_validator__WEBPACK_IMPORTED_MODULE_1__["PasswordValidator"]; });





/***/ }),

/***/ "./src/app/shared/validators/password.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/password.validator.ts ***!
  \*********************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    static validator(control) {
        const passwordErrors = {};
        const numbersCharsRegex = new RegExp(/[\d]/g);
        const upperLettersRegex = new RegExp(/[A-Z]/g);
        const lowerLettersRegex = new RegExp(/[a-z]/g);
        const specialCharsRegex = new RegExp(/[!@#$%^&*()_\-\[\]{};'~`:"\\|,.<>\/?]/g);
        const forbiddenCharsRegex = new RegExp(/[^0-9A-Za-z!@#$%^&*()_\-\[\]{};'~`:"\\|,.<>\/?]/g);
        if (control.value != null && control.value.length < 8) {
            passwordErrors['minlength'] = true;
        }
        //if (!numbersCharsRegex.test(control.value)) { passwordErrors['pwNotHaveNumber'] = true; }
        //if (!upperLettersRegex.test(control.value)) { passwordErrors['pwNotHaveCapitalCase'] = true; }
        //if (!lowerLettersRegex.test(control.value)) { passwordErrors['pwNotHaveSmallCase'] = true; }
        //if (!specialCharsRegex.test(control.value)) { passwordErrors['pwNotHaveSpecialCharacters'] = true; }
        //if (forbiddenCharsRegex.test(control.value)) { passwordErrors['pwHaveForbiddenCharacters'] = true; }
        if (Object.keys(passwordErrors).length) {
            passwordErrors['password'] = true;
            return passwordErrors;
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/shared/viewModel/reset-password.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/viewModel/reset-password.model.ts ***!
  \**********************************************************/
/*! exports provided: ResetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
class ResetPassword {
}


/***/ })

}]);