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
var styles = ["\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  \n  \n  \n  \n  \n  \n  \n  \n   }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n     }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n     }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      \n       }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          \n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n\n.bs-datepicker-head > bs-datepicker-navigation-view {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.theme-angle .bs-datepicker-head {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td span.selected, .theme-angle .bs-datepicker-body table td.selected span,\n.theme-angle .bs-datepicker-body table td span[class*=select-]:after, .theme-angle .bs-datepicker-body table td[class*=select-] span:after {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td.week span {\n  color: #23b7e5;\n}\ntag-input {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLnNjc3MiLCJub2RlX21vZHVsZXMvc3JjL2RhdGVwaWNrZXIvdXRpbHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci91dGlscy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9wYW5lbC91c2Vycy9hZGQvRDpcXHJlcG9zXFxEaXN0cnVidXRlZCBBdXRoXFxKUFByb2plY3QuSWRlbnRpdHlTZXJ2ZXI0LkFkbWluVUlcXHNyY1xcRnJvbnRlbmRcXEpwLkFkbWluVUkvc3JjXFxhcHBcXHBhbmVsXFx1c2Vyc1xcYWRkXFx1c2VyLWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFuZWwvdXNlcnMvYWRkL3VzZXItYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYW5lbC91c2Vycy9hZGQvRDpcXHJlcG9zXFxEaXN0cnVidXRlZCBBdXRoXFxKUFByb2plY3QuSWRlbnRpdHlTZXJ2ZXI0LkFkbWluVUlcXHNyY1xcRnJvbnRlbmRcXEpwLkFkbWluVUkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG1CQUFBO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQ1JvQjtFRFNwQiwyQkNOb0I7RURPcEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFZVixXQUFBO0VBZUEsd0JBQUE7RUF5RUEsd0JBQUE7RUFxT0Esc0JBQUE7RUEyQkEsNEJBQUE7RUFxQ0Esd0JBQUE7RUFZQSwrQkFBQTtFQU1BLG1DQUFBO0VBc0JBLDJCQUFBLEVBQTRCO0FBeGI5QjtJQVVJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYyxFQUFBO0FBWmxCO0lBZ0JJLFdBQVcsRUFBQTtBQWhCZjs7Ozs7Ozs7Ozs7SUErQkksYUFBYSxFQUFBO0FBSWY7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBU25CLCtCQUFBLEVBQWdDO0FBZGpDO01BUUcsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0FBWGQ7TUFnQkcscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixTQUFTO01BQ1QsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsV0MzRGdCO01ENERoQix3QkFBZ0I7TUFBaEIsZ0JBQWdCLEVBQUE7QUExQm5CO1FBK0JLLG9DQzdDdUM7UUQ4Q3ZDLGNDN0NzQjtRRDhDdEIsbUJBQW1CLEVBQUE7QUFqQ3hCO1FBc0NLLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWSxFQUFBO0FBeENqQjtVQTJDTyxlQUFlO1VBQ2YsY0FBYztVQUNkLHFCQUFxQjtVQUNyQixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtBQWpEekI7UUFzREssbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7QUFLcEI7SUFHSyxvQ0FBb0MsRUFBQTtBQUh6QztJQU1LLG9DQUFvQyxFQUFBO0FBTTFDO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQzVHcUI7SURtSHJCLDhCQUFBLEVBQStCO0FBWmhDO01BUUcsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtBQVRiO01BY0csV0FBVztNQUNYLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFzSGpCLG1DQUFBO01BdUNBLG9DQUFBLEVBQXFDO0FBN0t4QztRQW1CSyxlQUFlO1FBQ2YsY0M5SGlCO1FEK0hqQixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7QUF0QnZCO1FBMEJLLGNDbklpQjtRRG9JakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVLEVBQUE7QUE3QmY7VUFnQ08sY0FBYztVQUNkLGNBQWM7VUFDZCxlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixjQUFBO1VBQ0Esc0JBQXNCO1VBQ3RCLHlCQUF5QjtVQUN6QixxQkFBcUIsRUFBQTtBQXhDNUI7VUE2Q08sZUFBZSxFQUFBO0FBN0N0Qjs7VUFrRE8seUJDeEplO1VEeUpmLHNCQUFjO1VBQWQsY0FBYyxFQUFBO0FBbkRyQjs7VUF3RE8seUJDOUplO1VEK0pmLHNCQUFjO1VBQWQsY0FBYztVQUNkLGVBQWUsRUFBQTtBQTFEdEI7O1VBK0RPLGNDektlLEVBQUE7QUQwR3RCOztVQW9FTyxXQy9LWSxFQUFBO0FEMkduQjs7VUF5RU8sMEJBQTBCLEVBQUE7QUF6RWpDO1VBNkVPLGtCQUFrQixFQUFBO0FBN0V6QjtZQWdGUyxTQUFTLEVBQUE7QUFoRmxCO1lBb0ZTLFVBQVUsRUFBQTtBQXBGbkI7Ozs7VUE0Rk8sV0FBVztVQUNYLGNBQWM7VUFDZCxrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osd0JBQWdCO1VBQWhCLGdCQUFnQjtVQUNoQixNQUFNO1VBQ04sa0JBQWtCLEVBQUE7QUFwR3pCOztVQXlHTyxXQUFXO1VBQ1gsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsUUFBUTtVQUNSLFdBQVc7VUFDWCxVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2Qix1QkFBdUIsRUFBQTtBQWxIOUI7VUFzSE8sVUFBVSxFQUFBO0FBdEhqQjtVQTBITywwQkFBMEI7VUFDMUIsV0FBVztVQUNYLFVBQVUsRUFBQTtBQTVIakI7O1VBaUlPLGtCQUFrQjtVQUNsQixXQzdPWSxFQUFBO0FEMkduQjs7O1FBNElTLG1CQ2xQYSxFQUFBO0FEc0d0QjtRQWlKTyxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0FBbkp4QjtVQXNKUyxVQUFVLEVBQUE7QUF0Sm5CO1VBMEpTLGdCQUFnQjtVQUNoQixRQUFRO1VBQ1IsT0FBTyxFQUFBO0FBNUpoQjs7Ozs7O1FBdUtTLG1CQzdRYTtRRDhRYixXQUFXLEVBQUE7QUF4S3BCO1FBa0xXLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsV0FBVyxFQUFBO0FBcEx0QjtRQThMVywwQkFBMEIsRUFBQTtBQTlMckM7UUF1TVMsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsY0FBYyxFQUFBO0FBMU12QjtRQWlOVyxrQkFBa0IsRUFBQTtBQWpON0I7UUF5Tk8sWUFBWSxFQUFBO0FBek5uQjtVQTROUyxZQUFZO1VBQ1osbUJBQW1CLEVBQUE7QUF6VS9CO0lBa1ZJLGNDL1VxQjtJRGdWckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkNuVnFCO0lEb1ZyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFBO0FBOVZ6QjtNQWlXTSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLDJCQUEyQjtNQUMzQiwyZ0JBQTJnQixFQUFBO0FBSy9nQjtJQUNFLDBCQUEwQixFQUFBO0FBRDNCO01BSUcsaUJBQWlCLEVBQUE7QUFKcEI7TUFRRyxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7QUFUckI7UUFZSyxtQkFBbUIsRUFBQTtBQVp4QjtRQWdCSyxXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osK1lBQStZO1FBQy9ZLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVSxFQUFBO0FBdkJmO1FBMkJLLFdBQVcsRUFBQTtBQTNCaEI7UUErQkssWUFBWSxFQUFBO0FBTWxCO0lBQ0UsYUFBYSxFQUFBO0FBbFpqQjtJQXNaSSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUNiO01BdlpKO1FBd1pNLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQixFQUFBLEVBRXpCO0FBR0Q7SUFDRSxhQUFhO0lBQ2IsZ0JDbGFrQixFQUFBO0FEc2FuQjtJQUVHLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQzdabUI7SUQ4Wm5CLGtCQUFrQjtJQUNsQixXQ3phZ0I7SUQwYWhCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7QUFabkI7TUFnQksseUJDdmFpQixFQUFBO0FENmF2QjtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDZCQ3picUIsRUFBQTtBRG9idEI7TUFRRyxpQkFBaUIsRUFBQTtBQUt2QixtQkFBQTtBQUVFO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0MxY3FCO0VEMmNyQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFIbkI7SUFNRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJDbmRtQjtJRG9kbkIsY0N6ZG1CO0lEMGRuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtJQUNWLHdCQUFnQjtJQUFoQixnQkFBZ0IsRUFBQTtBQWpCbkI7TUFvQksseUJDNWRpQixFQUFBO0FEd2N0QjtJQXlCRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJDemVtQixFQUFBO0FEa2N6QjtFQTRDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJDbGZxQjtFRG1mckIsZ0JDNWZrQjtFRDZmbEIsY0N0ZnFCO0VEdWZyQixlQUFlLEVBQUE7QUFuRG5CO0lBc0RNLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtBQUt0Qjs7RUFFRSxhQUFhLEVBQUE7QUFHZix5QkFBQTtBQUNBO0VBRUk7SUFDRSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtJQURkO01BSUcsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQSxFQUNmO0FBS1AsWUFBQTtBRXZoQkU7RUFFSSxzQkRhZ0IsRUFBQTtBQ2ZwQjs7OztFQVlVLHNCREdVLEVBQUE7QUNmcEI7RUFnQlUsV0REVSxFQUFBO0FDZnBCO0VBb0JVLGVBQWU7RUFDZixzQkROVTtFQ09WLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRjbUIsRUFBQTtBQ2hCdkI7Ozs7RUFZVSx5QkRJYSxFQUFBO0FDaEJ2QjtFQWdCVSxjREFhLEVBQUE7QUNoQnZCO0VBb0JVLGVBQWU7RUFDZix5QkRMYTtFQ01iLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRlbUIsRUFBQTtBQ2pCdkI7Ozs7RUFZVSx5QkRLYSxFQUFBO0FDakJ2QjtFQWdCVSxjRENhLEVBQUE7QUNqQnZCO0VBb0JVLGVBQWU7RUFDZix5QkRKYTtFQ0tiLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRnQm1CLEVBQUE7QUNsQnZCOzs7O0VBWVUseUJETWEsRUFBQTtBQ2xCdkI7RUFnQlUsY0RFYSxFQUFBO0FDbEJ2QjtFQW9CVSxlQUFlO0VBQ2YseUJESGE7RUNJYixXRHBCVTtFQ3FCVixZQUFZO0VBQ1osc0JBQWM7RUFBZCxjQUFjLEVBQUE7QUF4QnhCO0VBRUkseUJEaUJtQixFQUFBO0FDbkJ2Qjs7OztFQVlVLHlCRE9hLEVBQUE7QUNuQnZCO0VBZ0JVLGNER2EsRUFBQTtBQ25CdkI7RUFvQlUsZUFBZTtFQUNmLHlCREZhO0VDR2IsV0RwQlU7RUNxQlYsWUFBWTtFQUNaLHNCQUFjO0VBQWQsY0FBYyxFQUFBO0FBeEJ4QjtFQUVJLHlCRGtCbUIsRUFBQTtBQ3BCdkI7Ozs7RUFZVSx5QkRRYSxFQUFBO0FDcEJ2QjtFQWdCVSxjRElhLEVBQUE7QUNwQnZCO0VBb0JVLGVBQWU7RUFDZix5QkREYTtFQ0ViLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQ25CMUIsOEJBQUE7QUFDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDTko7QURTQSxpQkFBQTtBQUVJO0VBQ0kseUJFQ2dCO0FEUnhCO0FEVVE7O0VBR0kseUJFTFk7QURKeEI7QURXUTtFQUNFLGNFUmM7QUREeEI7QURjQTtFQUNJLDBCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC91c2Vycy9hZGQvdXNlci1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd1dGlscy9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd1dGlscy9zY3NzL21peGlucyc7XG5cbi8qIC5icy1kYXRlcGlja2VyICovXG4uYnMtZGF0ZXBpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBiYWNrZ3JvdW5kOiAkbWFpbi1iZztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAkbWFpbi1ib3gtc2hhZG93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG5cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBicy1kYXktcGlja2VyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC8qIGJ1dHRvbiAqL1xuICBidXR0b246aG92ZXIsXG4gIGJ1dHRvbjpmb2N1cyxcbiAgYnV0dG9uOmFjdGl2ZSxcbiAgaW5wdXQ6aG92ZXIsXG4gIGlucHV0OmZvY3VzLFxuICBpbnB1dDphY3RpdmUsXG4gICYtYnRucyBidXR0b246aG92ZXIsXG4gICYtYnRucyBidXR0b246Zm9jdXMsXG4gICYtYnRucyBidXR0b246YWN0aXZlLFxuICAmLXByZWRlZmluZWQtYnRucyBidXR0b246YWN0aXZlLFxuICAmLXByZWRlZmluZWQtYnRucyBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1oZWFkICovXG4gICYtaGVhZCB7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8qIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uICovXG4gICAgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICZbZGlzYWJsZWRdLFxuICAgICAgJltkaXNhYmxlZF06aG92ZXIsXG4gICAgICAmW2Rpc2FibGVkXTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJi5uZXh0LFxuICAgICAgJi5wcmV2aW91cyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY3VycmVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1heC13aWR0aDogMTU1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLWhlYWQge1xuICAgIGJ1dHRvbiB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItYm9keSAqL1xuICAmLWJvZHkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgbWluLWhlaWdodDogMjMycHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuXG4gICAgLmRheXMud2Vla3Mge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlICovXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIC8qei1pbmRleDogMTsqL1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiBjaGVjayBmaXJzdCA6bm90KC5kaXNhYmxlZCkgdXNhZ2VcbiAgICAgICAgJjpub3QoLmRpc2FibGVkKTpub3QoLndlZWspIHNwYW46bm90KC5kaXNhYmxlZCk6bm90KC5pcy1vdGhlci1tb250aCkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtaGlnaGxpZ2h0ZWQ6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkgc3BhbixcbiAgICAgICAgc3Bhbi5pcy1oaWdobGlnaHRlZDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1hY3RpdmUtb3RoZXItbW9udGg6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkgc3BhbixcbiAgICAgICAgc3Bhbi5pcy1hY3RpdmUtb3RoZXItbW9udGg6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmRpc2FibGVkLFxuICAgICAgICAmLmRpc2FibGVkIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uc2VsZWN0ZWQsXG4gICAgICAgICYuc2VsZWN0ZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5pcy1vdGhlci1tb250aCxcbiAgICAgICAgJi5pcy1vdGhlci1tb250aCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAmLnNlbGVjdC1zdGFydDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMzUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogLTg1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmFjdGl2ZS5zZWxlY3Qtc3RhcnQ6YWZ0ZXIsXG4gICAgICAgIHNwYW4uYWN0aXZlLnNlbGVjdC1lbmQ6YWZ0ZXIsXG4gICAgICAgICYuYWN0aXZlLnNlbGVjdC1zdGFydCBzcGFuOmFmdGVyLFxuICAgICAgICAmLmFjdGl2ZS5zZWxlY3QtZW5kIHNwYW46YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgc3BhbjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZS5zZWxlY3Qtc3RhcnQgKyB0ZC5hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiAtMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgIHdpZHRoOiAxMjUlO1xuICAgICAgICAgIGxlZnQ6IC0yNSU7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl0sXG4gICAgICAgICZbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyAqL1xuICAgICAgJi5kYXlzIHtcbiAgICAgICAgdGQsXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICYuYWN0aXZlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZTpub3QoLnNlbGVjdC1zdGFydCk6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG5cbiAgICAgICAgICAmLnNlbGVjdC1zdGFydCB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmlzLWhpZ2hsaWdodGVkLmluLXJhbmdlOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0ICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUsXG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAgICAgJi5hY3RpdmUgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAgICAgJi5hY3RpdmUgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2UgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS53ZWVrcyAqL1xuICAgICAgJi53ZWVrcyB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKS5hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOm5vdCgud2Vla3MpIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgIHRke1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi55ZWFycyB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm1vbnRocyB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogLmN1cnJlbnQtdGltZWRhdGUgKi9cbiAgLmN1cnJlbnQtdGltZWRhdGUge1xuICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgc3Bhbjpub3QoOmVtcHR5KTpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBOEFBQUFRQ0FZQUFBREpWaVVFQUFBQk1rbEVRVlFvVTlWVHdXM0NRQkNjT1VnQnRFQktTQXVrQW5CS01FK3dGQ0FsWUloazhzUWx4RkFCdEpBU2NBc3VBUEJFZXdZY3hDUDhvdXhyUERzemE2MXVpVk4xbzZSTkhENGh0U0NtcTQ5UmZPNzFCdk1KcUJCa0lUUmYxa21VVzQ5blFSQzloMUk1QVpsQkNsYUw4YVAxZktnT094Q3g4YVNMcytRMTllWnVOTzhRbVBxSlJ0REZndXk3T0FjRGJKUHMrL0JLVlBESVBydkQyWkpnV0FtVmU3TzBySTBWcXMxc2V5V1VYcHVKb3BwWUNhNUwrVSsrTnBOUGtyNU9FMm9NZEFSc2IzZ3lrSlQ1eWRaY0w4WjlXdzYwbnhnMkxoak9OOWxpOU93WFp6byt4TGJwM25DMnM5Q0wyUnJ1ZUd5VnJnd05tOEhwc0N6WjlFRVc2a3FYbG8xR1FlMDNGelAvN1c4SGwwZEJ0dTdCZjd6dDZtSXd2WDFSdnpEQ203K3EzbUFXMERsL0dQZFVDZVhyWkxUOUJyRHJHa200cWxQdkFBQUFBRWxGVGtTdVFtQ0MpO1xuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLW11bHRpcGxlICovXG4gICYtbXVsdGlwbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJzLWRhdGVwaWNrZXIge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgJiArIC5icy1kYXRlcGlja2VyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQUtDQVlBQUFCckd3VDVBQUFBMUVsRVFWUW9VNDJSc1FyQ1VBeEY3N1Z1RHU3TzRvTVdXLy9CVVJCQnBadmdLazR1SXJqb3FLT1RmK0RvcElPNHVZZ2d0RlRmdzMrcGtRcUNXMS9HNUo3a0ppRnk0bTVNeFVseEF6Z0lQSFgrbHpNUHp1cFJZbFlneGlSN3Zxc09QOFlLenNUeDB5eEZNQ1VaK3E3YVp6bHIrT3Znb1djQUZ5QUhnYXQyakxXdTQ4MjUyRGRxQWloREpHU1NKTlVVeFltUWpzMytoUFFCbEFoMnJHMkxDT1BuYXczSWlHRFg5OVRSQ3M3QVNKc05oVU9BN2QvTGN1SHZSRzIyRkladnNOWHcxTVg2VlpFeENpbE9RS0VmZUxYci8xMCthQzlIbzdhcmg3b0FBQUFBU1VWT1JLNUNZSUk9KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1idG5zICovXG4gICYtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmJzLW1lZGlhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cblxuICAvKi5icy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZSAqL1xuICAmLWN1c3RvbS1yYW5nZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLXJhbmdlLWJnO1xuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zICovXG4gICYtcHJlZGVmaW5lZC1idG5zIHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmcyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAmOmFjdGl2ZSxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnMi1ob3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1idXR0b25zICovXG4gICYtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgICAuYnRuLWRlZmF1bHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qIC5icy10aW1lcGlja2VyICovXG4uYnMtdGltZXBpY2tlciB7XG4gICYtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAmLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICYtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmc7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWhvdmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLnN3aXRjaC10aW1lLWZvcm1hdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtaW4td2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1iZztcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsXG5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMTA4MDtcbn1cblxuLyogc2NyZWVuIHNpemUgPCAxMDI0cHggKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnMtZGF0ZXBpY2tlciB7XG4gICAgJi1tdWx0aXBsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiB0aGVtaW5nICovXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1saXN0IHtcbiAgQGluY2x1ZGUgdGhlbWluZygkbmFtZSwgJGNvbG9yKTtcbn1cbiIsIiRtYWluLWJnOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4kbWFpbi1ib3gtc2hhZG93OiAjYWFhICFkZWZhdWx0O1xuXG4kZm9udC1jb2xvci0wMTogICAjZmZmICFkZWZhdWx0O1xuJGZvbnQtY29sb3ItMDI6ICAgIzlhYWVjMSAhZGVmYXVsdDtcbiRmb250LWNvbG9yLTAzOiAgICM1NDcwOGIgIWRlZmF1bHQ7XG5cbiRib3JkZXItY29sb3I6ICAgICNlOWVkZjAgIWRlZmF1bHQ7XG4kaGlnaGxpZ2h0ZWQ6ICAgICAjZTllZGYwICFkZWZhdWx0O1xuXG4kYnRuLWJnOiAgICAgICAgICAjZTllZGYwICFkZWZhdWx0O1xuJGJ0bi1iZy1ob3ZlcjogICAgI2Q1ZGFkZCAhZGVmYXVsdDtcblxuJGJ0bi1iZzI6ICAgICAgICAgIzlhYWVjMSAhZGVmYXVsdDtcbiRidG4tYmcyLWhvdmVyOiAgICM1NDcwOGIgIWRlZmF1bHQ7XG5cbiR0aGVtZS1ncmF5OiAgICAgICM3NzcgIWRlZmF1bHQ7XG4kdGhlbWUtZ3JlZW46ICAgICAjNWNiODVjICFkZWZhdWx0O1xuJHRoZW1lLWJsdWU6ICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJsdWU6ICMzMzdhYjcgIWRlZmF1bHQ7XG4kdGhlbWUtcmVkOiAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuJHRoZW1lLW9yYW5nZTogICAgI2YwYWQ0ZSAhZGVmYXVsdDtcblxuJGRpc2FibGVkLWJhY2tncm91bmQ6ICByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMykgIWRlZmF1bHQ7XG4kZGlzYWJsZWQtY29sb3I6ICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiR0aGVtZS1saXN0OiAoXG4gICdkZWZhdWx0JzogJHRoZW1lLWdyYXksXG4gICdncmVlbic6ICR0aGVtZS1ncmVlbixcbiAgJ2JsdWUnOiAkdGhlbWUtYmx1ZSxcbiAgJ2RhcmstYmx1ZSc6ICR0aGVtZS1kYXJrLWJsdWUsXG4gICdyZWQnOiAkdGhlbWUtcmVkLFxuICAnb3JhbmdlJzogJHRoZW1lLW9yYW5nZSxcbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gdGhlbWluZygkbmFtZSwgJGNvbG9yKSB7XG4gIC50aGVtZS0jeyRuYW1lfSB7XG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG4gICAgLmJzLWRhdGVwaWNrZXItYm9keSB7XG4gICAgICB0YWJsZSB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBzcGFuLnNlbGVjdGVkLFxuICAgICAgICAgICYuc2VsZWN0ZWQgc3BhbixcbiAgICAgICAgICBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl06YWZ0ZXIsXG4gICAgICAgICAgJltjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYud2VlayBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUtd2VlayBzcGFuOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYm9vdHN0cmFwL19mdW5jdGlvbnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9ib290c3RyYXAvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Jvb3RzdHJhcC9fbWl4aW5zXCI7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYXBwL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi8vIEltcG9ydCBtb2R1bGUgc3R5bGluZ1xyXG5AaW1wb3J0IFwifm5neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxuLyogRml4IGhlYWRlciB0ZXh0IHBsYWNlbWVudCAqL1xyXG4uYnMtZGF0ZXBpY2tlci1oZWFkID4gYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4vKiBDdXN0b20gVGhlbWUgKi9cclxuLnRoZW1lLWFuZ2xlIHtcclxuICAgIC5icy1kYXRlcGlja2VyLWhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvO1xyXG4gICAgfVxyXG4gICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCB7XHJcbiAgICAgICAgc3Bhbi5zZWxlY3RlZCwgJi5zZWxlY3RlZCBzcGFuLFxyXG4gICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcclxuICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndlZWsgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogJGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50YWctaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJAaW1wb3J0IFwifm5neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzc1wiO1xuLyogRml4IGhlYWRlciB0ZXh0IHBsYWNlbWVudCAqL1xuLmJzLWRhdGVwaWNrZXItaGVhZCA+IGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi8qIEN1c3RvbSBUaGVtZSAqL1xuLnRoZW1lLWFuZ2xlIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNiN2U1O1xufVxuLnRoZW1lLWFuZ2xlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCwgLnRoZW1lLWFuZ2xlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3Bhbixcbi50aGVtZS1hbmdsZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPXNlbGVjdC1dOmFmdGVyLCAudGhlbWUtYW5nbGUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9c2VsZWN0LV0gc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2I3ZTU7XG59XG4udGhlbWUtYW5nbGUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzIzYjdlNTtcbn1cblxudGFnLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59IiwiXHJcbi8vIEN1dG9tcyBHcmF5IGNvbG9ycyBmb3IgdGhlbWVcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgIzIzMjczNTtcclxuJGdyYXktZGFyazogICAgICAgICAgICAgIzNhM2Y1MTtcclxuJGdyYXk6ICAgICAgICAgICAgICAgICAgI2RkZTZlOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgI2U0ZWFlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgI2VkZjFmMjtcclxuXHJcbi8vIEN1c3RvbSBicmFuZCBjb2xvcnMgZm9yIHRoZW1lXHJcbiRpbnZlcnNlOiAgICAgICAgICAgICAgICMxMzFlMjY7XHJcbiRwdXJwbGU6ICAgICAgICAgICAgICAgICM3MjY2YmE7XHJcbiRwaW5rOiAgICAgICAgICAgICAgICAgICNmNTMyZTU7XHJcbiR5ZWxsb3c6ICAgICAgICAgICAgICAgICNmYWQ3MzI7XHJcbiRncmVlbjogICAgICAgICAgICAgICAgICMzN2JjOWI7XHJcblxyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAjNWQ5Y2VjO1xyXG4kc2Vjb25kYXJ5OiAgICAgICAgICAgICAjZmZmO1xyXG4kc3VjY2VzczogICAgICAgICAgICAgICAjMjdjMjRjO1xyXG4kaW5mbzogICAgICAgICAgICAgICAgICAjMjNiN2U1O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAjZmY5MDJiO1xyXG4kZGFuZ2VyOiAgICAgICAgICAgICAgICAjZjA1MDUwO1xyXG4kZGFyazogICAgICAgICAgICAgICAgICAjM2EzZjUxO1xyXG5cclxuLy8gQ3VzdG9tIGNvbG9yIHZhcmlhbnRzXHJcbiRhbW91bnRPZkxpZ2h0OiAxMCU7XHJcblxyXG4kcHJpbWFyeS1saWdodDogICAgICAgICBsaWdodGVuKCRwcmltYXJ5LCAkYW1vdW50T2ZMaWdodCk7XHJcbiRzdWNjZXNzLWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsICRhbW91bnRPZkxpZ2h0KTtcclxuJGluZm8tbGlnaHQ6ICAgICAgICAgICAgbGlnaHRlbigkaW5mbywgJGFtb3VudE9mTGlnaHQpO1xyXG4kd2FybmluZy1saWdodDogICAgICAgICBsaWdodGVuKCR3YXJuaW5nLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRkYW5nZXItbGlnaHQ6ICAgICAgICAgIGxpZ2h0ZW4oJGRhbmdlciwgJGFtb3VudE9mTGlnaHQpO1xyXG4kaW52ZXJzZS1saWdodDogICAgICAgICBsaWdodGVuKCRpbnZlcnNlLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRncmVlbi1saWdodDogICAgICAgICAgIGxpZ2h0ZW4oJGdyZWVuLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRwaW5rLWxpZ2h0OiAgICAgICAgICAgIGxpZ2h0ZW4oJHBpbmssICRhbW91bnRPZkxpZ2h0KTtcclxuJHB1cnBsZS1saWdodDogICAgICAgICAgbGlnaHRlbigkcHVycGxlLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR5ZWxsb3ctbGlnaHQ6ICAgICAgICAgIGxpZ2h0ZW4oJHllbGxvdywgJGFtb3VudE9mTGlnaHQpO1xyXG4kcHJpbWFyeS1kYXJrOiAgICAgICAgICBkYXJrZW4oJHByaW1hcnksICRhbW91bnRPZkxpZ2h0KTtcclxuJHN1Y2Nlc3MtZGFyazogICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRpbmZvLWRhcms6ICAgICAgICAgICAgIGRhcmtlbigkaW5mbywgJGFtb3VudE9mTGlnaHQpO1xyXG4kd2FybmluZy1kYXJrOiAgICAgICAgICBkYXJrZW4oJHdhcm5pbmcsICRhbW91bnRPZkxpZ2h0KTtcclxuJGRhbmdlci1kYXJrOiAgICAgICAgICAgZGFya2VuKCRkYW5nZXIsICRhbW91bnRPZkxpZ2h0KTtcclxuJGludmVyc2UtZGFyazogICAgICAgICAgZGFya2VuKCRpbnZlcnNlLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRncmVlbi1kYXJrOiAgICAgICAgICAgIGRhcmtlbigkZ3JlZW4sICRhbW91bnRPZkxpZ2h0KTtcclxuJHBpbmstZGFyazogICAgICAgICAgICAgZGFya2VuKCRwaW5rLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRwdXJwbGUtZGFyazogICAgICAgICAgIGRhcmtlbigkcHVycGxlLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR5ZWxsb3ctZGFyazogICAgICAgICAgIGRhcmtlbigkeWVsbG93LCAkYW1vdW50T2ZMaWdodCk7XHJcblxyXG4vLyBUaGVtZSB2YXJpYWJsZXNcclxuXHJcbi8vIHVzZWQgZm9yIHNpZGViYXJzIGFuZCBjb250ZW50IHNwYWNpbmdcclxuJG5hdmJhci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA1NXB4O1xyXG5cclxuLy8gQnV0dG9uIHNlY29uZGFyeSByZWRlZmluaXRpb24gc3R5bGUgZm9yIHRoZW1lXHJcbiRidG4tc2Vjb25kYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzMzMztcclxuJGJ0bi1zZWNvbmRhcnktYmc6ICAgICAgICAgICAgICAgICAjZmZmO1xyXG4kYnRuLXNlY29uZGFyeS1ib3JkZXI6ICAgICAgICAgICAgICNlYWVhZWE7XHJcblxyXG4vLyBUb3AgQm9yZGVyIGNvbG9yIGZvciBjdXN0b20gZGVmYXVsdCBjYXJkcyAoLmNhcmQtZGVmYXVsdClcclxuJGNhcmQtZGVmYXVsdC1ib3JkZXItY29sb3I6ICAgICAgICAjY2ZkYmUyO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBVdGlsaXRpZXMgdmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHRleHQtYWxwaGE6ICAgICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiR0ZXh0LWFscGhhLWludmVyc2U6ICAgIHJnYmEoMCwwLDAsLjUpO1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgMXJlbTtcclxuJHRleHQtc206ICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMC43NDM3NTtcclxuJHRleHQtbWQ6ICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS42NjI1O1xyXG4kdGV4dC1sZzogICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjYyNTtcclxuXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiR3ZC14eHM6ICAgICAgICAgICAgICAgIDYwcHg7XHJcbiR3ZC14czogICAgICAgICAgICAgICAgIDkwcHg7XHJcbiR3ZC1zbTogICAgICAgICAgICAgICAgIDE1MHB4O1xyXG4kd2Qtc2Q6ICAgICAgICAgICAgICAgICAyMDBweDsgLy8gc2QgPT0gc3RhbmRhcmRcclxuJHdkLW1kOiAgICAgICAgICAgICAgICAgMjQwcHg7XHJcbiR3ZC1sZzogICAgICAgICAgICAgICAgIDI4MHB4O1xyXG4kd2QteGw6ICAgICAgICAgICAgICAgICAzMjBweDtcclxuJHdkLXh4bDogICAgICAgICAgICAgICAgMzYwcHg7XHJcbiR3ZC13aWRlOiAgICAgICAgICAgICAgIDEwMCU7XHJcbiR3ZC1hdXRvOiAgICAgICAgICAgICAgIGF1dG87XHJcbiR3ZC16ZXJvOiAgICAgICAgICAgICAgIDA7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJvb3RzdHJhcCA0IFZhcmlhYmxlcyBPdmVycmlkZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJGNvbG9yczogKFxyXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXHJcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcclxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXHJcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgICdpbnZlcnNlJzogICAgJGludmVyc2UsXHJcblxyXG4gICAgJ3ByaW1hcnktbGlnaHQnOiAkcHJpbWFyeS1saWdodCxcclxuICAgICdwcmltYXJ5LWRhcmsnOiAgJHByaW1hcnktZGFyayxcclxuICAgICdzdWNjZXNzLWxpZ2h0JzogJHN1Y2Nlc3MtbGlnaHQsXHJcbiAgICAnc3VjY2Vzcy1kYXJrJzogICRzdWNjZXNzLWRhcmssXHJcbiAgICAnaW5mby1saWdodCc6ICAgICRpbmZvLWxpZ2h0LFxyXG4gICAgJ2luZm8tZGFyayc6ICAgICAkaW5mby1kYXJrLFxyXG4gICAgJ3dhcm5pbmctbGlnaHQnOiAkd2FybmluZy1saWdodCxcclxuICAgICd3YXJuaW5nLWRhcmsnOiAgJHdhcm5pbmctZGFyayxcclxuICAgICdkYW5nZXItbGlnaHQnOiAgJGRhbmdlci1saWdodCxcclxuICAgICdkYW5nZXItZGFyayc6ICAgJGRhbmdlci1kYXJrLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogICAkZ3JlZW4tbGlnaHQsXHJcbiAgICAnZ3JlZW4tZGFyayc6ICAgICRncmVlbi1kYXJrLFxyXG4gICAgJ3BpbmstbGlnaHQnOiAgICAkcGluay1saWdodCxcclxuICAgICdwaW5rLWRhcmsnOiAgICAgJHBpbmstZGFyayxcclxuICAgICdwdXJwbGUtbGlnaHQnOiAgJHB1cnBsZS1saWdodCxcclxuICAgICdwdXJwbGUtZGFyayc6ICAgJHB1cnBsZS1kYXJrLFxyXG4gICAgJ2ludmVyc2UtbGlnaHQnOiAkaW52ZXJzZS1saWdodCxcclxuICAgICdpbnZlcnNlLWRhcmsnOiAgJGludmVyc2UtZGFyayxcclxuICAgICd5ZWxsb3ctbGlnaHQnOiAgJHllbGxvdy1saWdodCxcclxuICAgICd5ZWxsb3ctZGFyayc6ICAgJHllbGxvdy1kYXJrLFxyXG4pO1xyXG5cclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgXCJkYW5nZXJcIjogICAgICRkYW5nZXJcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAjZjVmN2ZhO1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgIzY1NjU2NTtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjM3NXJlbTtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNTI4NTcxNDI5O1xyXG5cclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4xO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgIzkwOUZBNztcclxuXHJcbi8vIFRhYmxlc1xyXG5cclxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgI2ZhZmJmYztcclxuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgI2ZhZmJmYztcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICNlZWU7XHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIDFyZW07XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMzEyNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjYyNXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC42MjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDEuMjVyZW07XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAyLjE4NzVyZW07IC8vIDM1cHhcclxuXHJcbi8vIEZvcm1zXHJcblxyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5O1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgIzY2YWZlOTtcclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICNiN2JhYzk7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuXHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICNlMWUxZTE7XHJcblxyXG4vLyBOYXZzXHJcblxyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAjZmZmO1xyXG5cclxuLy8gSnVtYm90cm9uXHJcblxyXG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAjZmNmY2ZjO1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgI2U0ZWFlYztcclxuXHJcbi8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4xMjVyZW07XHJcblxyXG5cclxuLy8gQnJlYWRjcnVtYnNcclxuXHJcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICNmYWZhZmE7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICNjMWMyYzM7XHJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRib2R5LWNvbG9yO1xyXG4iXX0= */"];




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
/* harmony import */ var _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-stack/forms */ "./node_modules/@ng-stack/forms/fesm2015/ng-stack-forms.js");
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/validators */ "./src/app/shared/validators/index.ts");
/* harmony import */ var _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/validators/form.utils */ "./src/app/shared/validators/form.utils.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class UserAddComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.registerForm = new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            password: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_validators__WEBPACK_IMPORTED_MODULE_1__["PasswordValidator"].validator]),
            confirmPassword: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_validators__WEBPACK_IMPORTED_MODULE_1__["EqualToValidator"].validator('password')]),
            email: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            name: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            userName: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            phoneNumber: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, null),
            confirmEmail: new _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, null)
        });
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterConfig"]({
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
        this.registerForm.controls.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(a => this.userService.checkEmail(a)))
            .subscribe((emailExist) => {
            if (emailExist)
                this.registerForm.controls.email.setErrors({ 'emailExist': true });
        });
        this.registerForm.controls.userName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(a => this.userService.checkUserName(a)))
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
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    validateForm(form) {
        if (form.invalid) {
            _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_2__["FormUtil"].touchForm(form);
            _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_2__["FormUtil"].dirtyForm(form);
            return false;
        }
        return true;
    }
    getErrorMessages() {
        return this.translator.translate.get('validations').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
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
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvdXNlcnMvY2xhaW1zL0Q6XFxyZXBvc1xcRGlzdHJ1YnV0ZWQgQXV0aFxcSlBQcm9qZWN0LklkZW50aXR5U2VydmVyNC5BZG1pblVJXFxzcmNcXEZyb250ZW5kXFxKcC5BZG1pblVJL3NyY1xcYXBwXFxwYW5lbFxcdXNlcnNcXGNsYWltc1xcdXNlci1jbGFpbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL3VzZXJzL2NsYWltcy91c2VyLWNsYWltcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC91c2Vycy9jbGFpbXMvdXNlci1jbGFpbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWctaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJ0YWctaW5wdXQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn0iXX0= */"];




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
/* harmony import */ var _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/viewModel/claim.model */ "./src/app/shared/viewModel/claim.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_standard_claims_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/standard-claims.model */ "./src/app/shared/viewModel/standard-claims.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class UserClaimsComponent {
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
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(m => this.userService.getUserClaims(m.toString()))).subscribe(result => this.claims = result);
        this.errors = [];
        this.model = new _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_0__["Claim"]();
        this.showButtonLoading = false;
        this.standardClaims = _shared_viewModel_standard_claims_model__WEBPACK_IMPORTED_MODULE_2__["StandardClaims"].claims;
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
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__["ProblemDetails"].GetErrors(err).map(a => a.value);
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
                this.model = new _shared_viewModel_claim_model__WEBPACK_IMPORTED_MODULE_0__["Claim"]();
            }
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__["ProblemDetails"].GetErrors(err).map(a => a.value);
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
var styles = ["\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  \n  \n  \n  \n  \n  \n  \n  \n   }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n     }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n     }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      \n       }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          \n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n\n.bs-datepicker-head > bs-datepicker-navigation-view {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.theme-angle .bs-datepicker-head {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td span.selected, .theme-angle .bs-datepicker-body table td.selected span,\n.theme-angle .bs-datepicker-body table td span[class*=select-]:after, .theme-angle .bs-datepicker-body table td[class*=select-] span:after {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td.week span {\n  color: #23b7e5;\n}\ntag-input {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLnNjc3MiLCJub2RlX21vZHVsZXMvc3JjL2RhdGVwaWNrZXIvdXRpbHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci91dGlscy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9wYW5lbC91c2Vycy9lZGl0L0Q6XFxyZXBvc1xcRGlzdHJ1YnV0ZWQgQXV0aFxcSlBQcm9qZWN0LklkZW50aXR5U2VydmVyNC5BZG1pblVJXFxzcmNcXEZyb250ZW5kXFxKcC5BZG1pblVJL3NyY1xcYXBwXFxwYW5lbFxcdXNlcnNcXGVkaXRcXHVzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFuZWwvdXNlcnMvZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL3VzZXJzL2VkaXQvRDpcXHJlcG9zXFxEaXN0cnVidXRlZCBBdXRoXFxKUFByb2plY3QuSWRlbnRpdHlTZXJ2ZXI0LkFkbWluVUlcXHNyY1xcRnJvbnRlbmRcXEpwLkFkbWluVUkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG1CQUFBO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQ1JvQjtFRFNwQiwyQkNOb0I7RURPcEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFZVixXQUFBO0VBZUEsd0JBQUE7RUF5RUEsd0JBQUE7RUFxT0Esc0JBQUE7RUEyQkEsNEJBQUE7RUFxQ0Esd0JBQUE7RUFZQSwrQkFBQTtFQU1BLG1DQUFBO0VBc0JBLDJCQUFBLEVBQTRCO0FBeGI5QjtJQVVJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYyxFQUFBO0FBWmxCO0lBZ0JJLFdBQVcsRUFBQTtBQWhCZjs7Ozs7Ozs7Ozs7SUErQkksYUFBYSxFQUFBO0FBSWY7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBU25CLCtCQUFBLEVBQWdDO0FBZGpDO01BUUcsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0FBWGQ7TUFnQkcscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixTQUFTO01BQ1QsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsV0MzRGdCO01ENERoQix3QkFBZ0I7TUFBaEIsZ0JBQWdCLEVBQUE7QUExQm5CO1FBK0JLLG9DQzdDdUM7UUQ4Q3ZDLGNDN0NzQjtRRDhDdEIsbUJBQW1CLEVBQUE7QUFqQ3hCO1FBc0NLLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWSxFQUFBO0FBeENqQjtVQTJDTyxlQUFlO1VBQ2YsY0FBYztVQUNkLHFCQUFxQjtVQUNyQixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtBQWpEekI7UUFzREssbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7QUFLcEI7SUFHSyxvQ0FBb0MsRUFBQTtBQUh6QztJQU1LLG9DQUFvQyxFQUFBO0FBTTFDO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQzVHcUI7SURtSHJCLDhCQUFBLEVBQStCO0FBWmhDO01BUUcsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtBQVRiO01BY0csV0FBVztNQUNYLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFzSGpCLG1DQUFBO01BdUNBLG9DQUFBLEVBQXFDO0FBN0t4QztRQW1CSyxlQUFlO1FBQ2YsY0M5SGlCO1FEK0hqQixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7QUF0QnZCO1FBMEJLLGNDbklpQjtRRG9JakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVLEVBQUE7QUE3QmY7VUFnQ08sY0FBYztVQUNkLGNBQWM7VUFDZCxlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixjQUFBO1VBQ0Esc0JBQXNCO1VBQ3RCLHlCQUF5QjtVQUN6QixxQkFBcUIsRUFBQTtBQXhDNUI7VUE2Q08sZUFBZSxFQUFBO0FBN0N0Qjs7VUFrRE8seUJDeEplO1VEeUpmLHNCQUFjO1VBQWQsY0FBYyxFQUFBO0FBbkRyQjs7VUF3RE8seUJDOUplO1VEK0pmLHNCQUFjO1VBQWQsY0FBYztVQUNkLGVBQWUsRUFBQTtBQTFEdEI7O1VBK0RPLGNDektlLEVBQUE7QUQwR3RCOztVQW9FTyxXQy9LWSxFQUFBO0FEMkduQjs7VUF5RU8sMEJBQTBCLEVBQUE7QUF6RWpDO1VBNkVPLGtCQUFrQixFQUFBO0FBN0V6QjtZQWdGUyxTQUFTLEVBQUE7QUFoRmxCO1lBb0ZTLFVBQVUsRUFBQTtBQXBGbkI7Ozs7VUE0Rk8sV0FBVztVQUNYLGNBQWM7VUFDZCxrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osd0JBQWdCO1VBQWhCLGdCQUFnQjtVQUNoQixNQUFNO1VBQ04sa0JBQWtCLEVBQUE7QUFwR3pCOztVQXlHTyxXQUFXO1VBQ1gsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsUUFBUTtVQUNSLFdBQVc7VUFDWCxVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2Qix1QkFBdUIsRUFBQTtBQWxIOUI7VUFzSE8sVUFBVSxFQUFBO0FBdEhqQjtVQTBITywwQkFBMEI7VUFDMUIsV0FBVztVQUNYLFVBQVUsRUFBQTtBQTVIakI7O1VBaUlPLGtCQUFrQjtVQUNsQixXQzdPWSxFQUFBO0FEMkduQjs7O1FBNElTLG1CQ2xQYSxFQUFBO0FEc0d0QjtRQWlKTyxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0FBbkp4QjtVQXNKUyxVQUFVLEVBQUE7QUF0Sm5CO1VBMEpTLGdCQUFnQjtVQUNoQixRQUFRO1VBQ1IsT0FBTyxFQUFBO0FBNUpoQjs7Ozs7O1FBdUtTLG1CQzdRYTtRRDhRYixXQUFXLEVBQUE7QUF4S3BCO1FBa0xXLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsV0FBVyxFQUFBO0FBcEx0QjtRQThMVywwQkFBMEIsRUFBQTtBQTlMckM7UUF1TVMsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsY0FBYyxFQUFBO0FBMU12QjtRQWlOVyxrQkFBa0IsRUFBQTtBQWpON0I7UUF5Tk8sWUFBWSxFQUFBO0FBek5uQjtVQTROUyxZQUFZO1VBQ1osbUJBQW1CLEVBQUE7QUF6VS9CO0lBa1ZJLGNDL1VxQjtJRGdWckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkNuVnFCO0lEb1ZyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFBO0FBOVZ6QjtNQWlXTSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLDJCQUEyQjtNQUMzQiwyZ0JBQTJnQixFQUFBO0FBSy9nQjtJQUNFLDBCQUEwQixFQUFBO0FBRDNCO01BSUcsaUJBQWlCLEVBQUE7QUFKcEI7TUFRRyxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7QUFUckI7UUFZSyxtQkFBbUIsRUFBQTtBQVp4QjtRQWdCSyxXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osK1lBQStZO1FBQy9ZLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVSxFQUFBO0FBdkJmO1FBMkJLLFdBQVcsRUFBQTtBQTNCaEI7UUErQkssWUFBWSxFQUFBO0FBTWxCO0lBQ0UsYUFBYSxFQUFBO0FBbFpqQjtJQXNaSSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUNiO01BdlpKO1FBd1pNLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQixFQUFBLEVBRXpCO0FBR0Q7SUFDRSxhQUFhO0lBQ2IsZ0JDbGFrQixFQUFBO0FEc2FuQjtJQUVHLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQzdabUI7SUQ4Wm5CLGtCQUFrQjtJQUNsQixXQ3phZ0I7SUQwYWhCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7QUFabkI7TUFnQksseUJDdmFpQixFQUFBO0FENmF2QjtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDZCQ3picUIsRUFBQTtBRG9idEI7TUFRRyxpQkFBaUIsRUFBQTtBQUt2QixtQkFBQTtBQUVFO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0MxY3FCO0VEMmNyQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFIbkI7SUFNRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJDbmRtQjtJRG9kbkIsY0N6ZG1CO0lEMGRuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtJQUNWLHdCQUFnQjtJQUFoQixnQkFBZ0IsRUFBQTtBQWpCbkI7TUFvQksseUJDNWRpQixFQUFBO0FEd2N0QjtJQXlCRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJDemVtQixFQUFBO0FEa2N6QjtFQTRDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJDbGZxQjtFRG1mckIsZ0JDNWZrQjtFRDZmbEIsY0N0ZnFCO0VEdWZyQixlQUFlLEVBQUE7QUFuRG5CO0lBc0RNLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtBQUt0Qjs7RUFFRSxhQUFhLEVBQUE7QUFHZix5QkFBQTtBQUNBO0VBRUk7SUFDRSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtJQURkO01BSUcsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQSxFQUNmO0FBS1AsWUFBQTtBRXZoQkU7RUFFSSxzQkRhZ0IsRUFBQTtBQ2ZwQjs7OztFQVlVLHNCREdVLEVBQUE7QUNmcEI7RUFnQlUsV0REVSxFQUFBO0FDZnBCO0VBb0JVLGVBQWU7RUFDZixzQkROVTtFQ09WLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRjbUIsRUFBQTtBQ2hCdkI7Ozs7RUFZVSx5QkRJYSxFQUFBO0FDaEJ2QjtFQWdCVSxjREFhLEVBQUE7QUNoQnZCO0VBb0JVLGVBQWU7RUFDZix5QkRMYTtFQ01iLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRlbUIsRUFBQTtBQ2pCdkI7Ozs7RUFZVSx5QkRLYSxFQUFBO0FDakJ2QjtFQWdCVSxjRENhLEVBQUE7QUNqQnZCO0VBb0JVLGVBQWU7RUFDZix5QkRKYTtFQ0tiLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQXhCeEI7RUFFSSx5QkRnQm1CLEVBQUE7QUNsQnZCOzs7O0VBWVUseUJETWEsRUFBQTtBQ2xCdkI7RUFnQlUsY0RFYSxFQUFBO0FDbEJ2QjtFQW9CVSxlQUFlO0VBQ2YseUJESGE7RUNJYixXRHBCVTtFQ3FCVixZQUFZO0VBQ1osc0JBQWM7RUFBZCxjQUFjLEVBQUE7QUF4QnhCO0VBRUkseUJEaUJtQixFQUFBO0FDbkJ2Qjs7OztFQVlVLHlCRE9hLEVBQUE7QUNuQnZCO0VBZ0JVLGNER2EsRUFBQTtBQ25CdkI7RUFvQlUsZUFBZTtFQUNmLHlCREZhO0VDR2IsV0RwQlU7RUNxQlYsWUFBWTtFQUNaLHNCQUFjO0VBQWQsY0FBYyxFQUFBO0FBeEJ4QjtFQUVJLHlCRGtCbUIsRUFBQTtBQ3BCdkI7Ozs7RUFZVSx5QkRRYSxFQUFBO0FDcEJ2QjtFQWdCVSxjRElhLEVBQUE7QUNwQnZCO0VBb0JVLGVBQWU7RUFDZix5QkREYTtFQ0ViLFdEcEJVO0VDcUJWLFlBQVk7RUFDWixzQkFBYztFQUFkLGNBQWMsRUFBQTtBQ25CMUIsOEJBQUE7QUFDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDTko7QURTQSxpQkFBQTtBQUVJO0VBQ0kseUJFQ2dCO0FEUnhCO0FEVVE7O0VBR0kseUJFTFk7QURKeEI7QURXUTtFQUNFLGNFUmM7QUREeEI7QURjQTtFQUNJLDBCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC91c2Vycy9lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3V0aWxzL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3V0aWxzL3Njc3MvbWl4aW5zJztcblxuLyogLmJzLWRhdGVwaWNrZXIgKi9cbi5icy1kYXRlcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJhY2tncm91bmQ6ICRtYWluLWJnO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICRtYWluLWJveC1zaGFkb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGJzLWRheS1waWNrZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLyogYnV0dG9uICovXG4gIGJ1dHRvbjpob3ZlcixcbiAgYnV0dG9uOmZvY3VzLFxuICBidXR0b246YWN0aXZlLFxuICBpbnB1dDpob3ZlcixcbiAgaW5wdXQ6Zm9jdXMsXG4gIGlucHV0OmFjdGl2ZSxcbiAgJi1idG5zIGJ1dHRvbjpob3ZlcixcbiAgJi1idG5zIGJ1dHRvbjpmb2N1cyxcbiAgJi1idG5zIGJ1dHRvbjphY3RpdmUsXG4gICYtcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjphY3RpdmUsXG4gICYtcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWhlYWQgKi9cbiAgJi1oZWFkIHtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24gKi9cbiAgICBidXR0b24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgJltkaXNhYmxlZF0sXG4gICAgICAmW2Rpc2FibGVkXTpob3ZlcixcbiAgICAgICZbZGlzYWJsZWRdOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmLm5leHQsXG4gICAgICAmLnByZXZpb3VzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5jdXJyZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcbiAgICAgICAgcGFkZGluZzogMCAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtaGVhZCB7XG4gICAgYnV0dG9uIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5ICovXG4gICYtYm9keSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBtaW4taGVpZ2h0OiAyMzJweDtcbiAgICBtaW4td2lkdGg6IDI3OHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgICAuZGF5cy53ZWVrcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgKi9cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgICAgdGgge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLyp6LWluZGV4OiAxOyovXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IGNoZWNrIGZpcnN0IDpub3QoLmRpc2FibGVkKSB1c2FnZVxuICAgICAgICAmOm5vdCguZGlzYWJsZWQpOm5vdCgud2Vlaykgc3Bhbjpub3QoLmRpc2FibGVkKTpub3QoLmlzLW90aGVyLW1vbnRoKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1oaWdobGlnaHRlZDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICBzcGFuLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICBzcGFuLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uZGlzYWJsZWQsXG4gICAgICAgICYuZGlzYWJsZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAyO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5zZWxlY3RlZCxcbiAgICAgICAgJi5zZWxlY3RlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmlzLW90aGVyLW1vbnRoLFxuICAgICAgICAmLmlzLW90aGVyLW1vbnRoIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0OmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtODUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uYWN0aXZlLnNlbGVjdC1zdGFydDphZnRlcixcbiAgICAgICAgc3Bhbi5hY3RpdmUuc2VsZWN0LWVuZDphZnRlcixcbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LXN0YXJ0IHNwYW46YWZ0ZXIsXG4gICAgICAgICYuYWN0aXZlLnNlbGVjdC1lbmQgc3BhbjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgYm90dG9tOiA2cHg7XG4gICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlLnNlbGVjdC1zdGFydCArIHRkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6IC0yMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgICAgICAgd2lkdGg6IDEyNSU7XG4gICAgICAgICAgbGVmdDogLTI1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXSxcbiAgICAgICAgJltjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW4ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzICovXG4gICAgICAmLmRheXMge1xuICAgICAgICB0ZCxcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgJi5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcblxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaXMtaGlnaGxpZ2h0ZWQuaW4tcmFuZ2U6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2Uuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSxcbiAgICAgICAgICAmLnNlbGVjdC1zdGFydCArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmFjdGl2ZSArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmFjdGl2ZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2UgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLndlZWtzICovXG4gICAgICAmLndlZWtzIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bm90KC53ZWVrcykge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgdGR7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnllYXJzIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubW9udGhzIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIGhlaWdodDogNTJweDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuY3VycmVudC10aW1lZGF0ZSAqL1xuICAuY3VycmVudC10aW1lZGF0ZSB7XG4gICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuOm5vdCg6ZW1wdHkpOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVFDQVlBQUFESlZpVUVBQUFCTWtsRVFWUW9VOVZUd1czQ1FCQ2NPVWdCdEVCS1NBdWtBbkJLTUUrd0ZDQWxZSWhrOHNRbHhGQUJ0SkFTY0FzdUFQQkVld1ljeENQOG91eHJQRHN6YTYxdWlWTjFvNlJOSEQ0aHRTQ21xNDlSZk83MUJ2TUpxQkJrSVRSZjFrbVVXNDluUVJDOWgxSTVBWmxCQ2xhTDhhUDFmS2dPT3hDeDhhU0xzK1ExOWVadU5POFFtUHFKUnRERmd1eTdPQWNEYkpQcysvQktWUERJUHJ2RDJaSmdXQW1WZTdPMHJJMFZxczFzZXlXVVhwdUpvcHBZQ2E1TCtVKytOcE5Qa3I1T0Uyb01kQVJzYjNneWtKVDV5ZFpjTDhaOVd3NjBueGcyTGhqT045bGk5T3dYWnpvK3hMYnAzbkMyczlDTDJScnVlR3lWcmd3Tm04SHBzQ3paOUVFVzZrcVhsbzFHUWUwM0Z6UC83VzhIbDBkQnR1N0JmN3p0Nm1Jd3ZYMVJ2ekRDbTcrcTNtQVcwRGwvR1BkVUNlWHJaTFQ5QnJEckdrbTRxbFB2QUFBQUFFbEZUa1N1UW1DQyk7XG4gICAgfVxuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKi9cbiAgJi1tdWx0aXBsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlciB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmICsgLmJzLWRhdGVwaWNrZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBS0NBWUFBQUJyR3dUNUFBQUExRWxFUVZRb1U0MlJzUXJDVUF4Rjc3VnVEdTdPNG9NV1cvL0JVUkJCcFp2Z0trNHVJcmpvcUtPVGYrRG9wSU80dVlnZ3RGVGZ3Mytwa1FxQ1cxL0c1SjdrSmlGeTRtNU14VWx4QXpnSVBIWCtsek1QenVwUllsWWd4aVI3dnFzT1A4WUt6c1R4MHl4Rk1DVVorcTdhWnpscitPdmdvV2NBRnlBSGdhdDJqTFd1NDgyNTJEZHFBaWhESkdTU0pOVVV4WW1RanMzK2hQUUJsQWgyckcyTENPUG5hdzNJaUdEWDk5VFJDczdBU0pzTmhVT0E3ZC9MY3VIdlJHMjJGSVp2c05YdzFNWDZWWkV4Q2lsT1FLRWZlTFhyLzEwK2FDOUhvN2FyaDdvQUFBQUFTVVZPUks1Q1lJST0pO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogLThweDtcbiAgICAgIH1cblxuICAgICAgLmxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJ0bnMgKi9cbiAgJi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuYnMtbWVkaWEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gIC8qLmJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlICovXG4gICYtY3VzdG9tLXJhbmdlIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICRjdXN0b20tcmFuZ2UtYmc7XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgKi9cbiAgJi1wcmVkZWZpbmVkLWJ0bnMge1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZzI7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICY6YWN0aXZlLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmcyLWhvdmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJ1dHRvbnMgKi9cbiAgJi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuICAgIC5idG4tZGVmYXVsdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLyogLmJzLXRpbWVwaWNrZXIgKi9cbi5icy10aW1lcGlja2VyIHtcbiAgJi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gICYtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgJi1jb250cm9scyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZztcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmctaG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAuc3dpdGNoLXRpbWUtZm9ybWF0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1pbi13aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRtYWluLWJnO1xuICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5icy1kYXRlcGlja2VyLWNvbnRhaW5lcixcbmJzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDgwO1xufVxuXG4vKiBzY3JlZW4gc2l6ZSA8IDEwMjRweCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5icy1kYXRlcGlja2VyIHtcbiAgICAmLW11bHRpcGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICYgKyAmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIHRoZW1pbmcgKi9cbkBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWxpc3Qge1xuICBAaW5jbHVkZSB0aGVtaW5nKCRuYW1lLCAkY29sb3IpO1xufVxuIiwiJG1haW4tYmc6ICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtYmc6ICNlZWUgIWRlZmF1bHQ7XG5cbiRtYWluLWJveC1zaGFkb3c6ICNhYWEgIWRlZmF1bHQ7XG5cbiRmb250LWNvbG9yLTAxOiAgICNmZmYgIWRlZmF1bHQ7XG4kZm9udC1jb2xvci0wMjogICAjOWFhZWMxICFkZWZhdWx0O1xuJGZvbnQtY29sb3ItMDM6ICAgIzU0NzA4YiAhZGVmYXVsdDtcblxuJGJvcmRlci1jb2xvcjogICAgI2U5ZWRmMCAhZGVmYXVsdDtcbiRoaWdobGlnaHRlZDogICAgICNlOWVkZjAgIWRlZmF1bHQ7XG5cbiRidG4tYmc6ICAgICAgICAgICNlOWVkZjAgIWRlZmF1bHQ7XG4kYnRuLWJnLWhvdmVyOiAgICAjZDVkYWRkICFkZWZhdWx0O1xuXG4kYnRuLWJnMjogICAgICAgICAjOWFhZWMxICFkZWZhdWx0O1xuJGJ0bi1iZzItaG92ZXI6ICAgIzU0NzA4YiAhZGVmYXVsdDtcblxuJHRoZW1lLWdyYXk6ICAgICAgIzc3NyAhZGVmYXVsdDtcbiR0aGVtZS1ncmVlbjogICAgICM1Y2I4NWMgIWRlZmF1bHQ7XG4kdGhlbWUtYmx1ZTogICAgICAjNWJjMGRlICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstYmx1ZTogIzMzN2FiNyAhZGVmYXVsdDtcbiR0aGVtZS1yZWQ6ICAgICAgICNkOTUzNGYgIWRlZmF1bHQ7XG4kdGhlbWUtb3JhbmdlOiAgICAjZjBhZDRlICFkZWZhdWx0O1xuXG4kZGlzYWJsZWQtYmFja2dyb3VuZDogIHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zKSAhZGVmYXVsdDtcbiRkaXNhYmxlZC1jb2xvcjogICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHRoZW1lLWxpc3Q6IChcbiAgJ2RlZmF1bHQnOiAkdGhlbWUtZ3JheSxcbiAgJ2dyZWVuJzogJHRoZW1lLWdyZWVuLFxuICAnYmx1ZSc6ICR0aGVtZS1ibHVlLFxuICAnZGFyay1ibHVlJzogJHRoZW1lLWRhcmstYmx1ZSxcbiAgJ3JlZCc6ICR0aGVtZS1yZWQsXG4gICdvcmFuZ2UnOiAkdGhlbWUtb3JhbmdlLFxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiB0aGVtaW5nKCRuYW1lLCAkY29sb3IpIHtcbiAgLnRoZW1lLSN7JG5hbWV9IHtcbiAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIHNwYW4uc2VsZWN0ZWQsXG4gICAgICAgICAgJi5zZWxlY3RlZCBzcGFuLFxuICAgICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbiAgICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53ZWVrIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZS13ZWVrIHNwYW46aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9ib290c3RyYXAvX2Z1bmN0aW9ucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYm9vdHN0cmFwL19taXhpbnNcIjtcclxuQGltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9hcHAvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLy8gSW1wb3J0IG1vZHVsZSBzdHlsaW5nXHJcbkBpbXBvcnQgXCJ+bmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG4vKiBGaXggaGVhZGVyIHRleHQgcGxhY2VtZW50ICovXHJcbi5icy1kYXRlcGlja2VyLWhlYWQgPiBicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBUaGVtZSAqL1xyXG4udGhlbWUtYW5nbGUge1xyXG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XHJcbiAgICB9XHJcbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHtcclxuICAgICAgICBzcGFuLnNlbGVjdGVkLCAmLnNlbGVjdGVkIHNwYW4sXHJcbiAgICAgICAgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxyXG4gICAgICAgICZbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2VlayBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAkaW5mbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhZy1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufSIsIkBpbXBvcnQgXCJ+bmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY3NzXCI7XG4vKiBGaXggaGVhZGVyIHRleHQgcGxhY2VtZW50ICovXG4uYnMtZGF0ZXBpY2tlci1oZWFkID4gYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLyogQ3VzdG9tIFRoZW1lICovXG4udGhlbWUtYW5nbGUgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2I3ZTU7XG59XG4udGhlbWUtYW5nbGUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLCAudGhlbWUtYW5nbGUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWFuZ2xlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9c2VsZWN0LV06YWZ0ZXIsIC50aGVtZS1hbmdsZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkW2NsYXNzKj1zZWxlY3QtXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzYjdlNTtcbn1cbi50aGVtZS1hbmdsZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjMjNiN2U1O1xufVxuXG50YWctaW5wdXQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn0iLCJcclxuLy8gQ3V0b21zIEdyYXkgY29sb3JzIGZvciB0aGVtZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAjMjMyNzM1O1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAjM2EzZjUxO1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAjZGRlNmU5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAjZTRlYWVjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAjZWRmMWYyO1xyXG5cclxuLy8gQ3VzdG9tIGJyYW5kIGNvbG9ycyBmb3IgdGhlbWVcclxuJGludmVyc2U6ICAgICAgICAgICAgICAgIzEzMWUyNjtcclxuJHB1cnBsZTogICAgICAgICAgICAgICAgIzcyNjZiYTtcclxuJHBpbms6ICAgICAgICAgICAgICAgICAgI2Y1MzJlNTtcclxuJHllbGxvdzogICAgICAgICAgICAgICAgI2ZhZDczMjtcclxuJGdyZWVuOiAgICAgICAgICAgICAgICAgIzM3YmM5YjtcclxuXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICM1ZDljZWM7XHJcbiRzZWNvbmRhcnk6ICAgICAgICAgICAgICNmZmY7XHJcbiRzdWNjZXNzOiAgICAgICAgICAgICAgICMyN2MyNGM7XHJcbiRpbmZvOiAgICAgICAgICAgICAgICAgICMyM2I3ZTU7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICNmZjkwMmI7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICNmMDUwNTA7XHJcbiRkYXJrOiAgICAgICAgICAgICAgICAgICMzYTNmNTE7XHJcblxyXG4vLyBDdXN0b20gY29sb3IgdmFyaWFudHNcclxuJGFtb3VudE9mTGlnaHQ6IDEwJTtcclxuXHJcbiRwcmltYXJ5LWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnksICRhbW91bnRPZkxpZ2h0KTtcclxuJHN1Y2Nlc3MtbGlnaHQ6ICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgJGFtb3VudE9mTGlnaHQpO1xyXG4kaW5mby1saWdodDogICAgICAgICAgICBsaWdodGVuKCRpbmZvLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR3YXJuaW5nLWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmcsICRhbW91bnRPZkxpZ2h0KTtcclxuJGRhbmdlci1saWdodDogICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRpbnZlcnNlLWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJGludmVyc2UsICRhbW91bnRPZkxpZ2h0KTtcclxuJGdyZWVuLWxpZ2h0OiAgICAgICAgICAgbGlnaHRlbigkZ3JlZW4sICRhbW91bnRPZkxpZ2h0KTtcclxuJHBpbmstbGlnaHQ6ICAgICAgICAgICAgbGlnaHRlbigkcGluaywgJGFtb3VudE9mTGlnaHQpO1xyXG4kcHVycGxlLWxpZ2h0OiAgICAgICAgICBsaWdodGVuKCRwdXJwbGUsICRhbW91bnRPZkxpZ2h0KTtcclxuJHllbGxvdy1saWdodDogICAgICAgICAgbGlnaHRlbigkeWVsbG93LCAkYW1vdW50T2ZMaWdodCk7XHJcbiRwcmltYXJ5LWRhcms6ICAgICAgICAgIGRhcmtlbigkcHJpbWFyeSwgJGFtb3VudE9mTGlnaHQpO1xyXG4kc3VjY2Vzcy1kYXJrOiAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsICRhbW91bnRPZkxpZ2h0KTtcclxuJGluZm8tZGFyazogICAgICAgICAgICAgZGFya2VuKCRpbmZvLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR3YXJuaW5nLWRhcms6ICAgICAgICAgIGRhcmtlbigkd2FybmluZywgJGFtb3VudE9mTGlnaHQpO1xyXG4kZGFuZ2VyLWRhcms6ICAgICAgICAgICBkYXJrZW4oJGRhbmdlciwgJGFtb3VudE9mTGlnaHQpO1xyXG4kaW52ZXJzZS1kYXJrOiAgICAgICAgICBkYXJrZW4oJGludmVyc2UsICRhbW91bnRPZkxpZ2h0KTtcclxuJGdyZWVuLWRhcms6ICAgICAgICAgICAgZGFya2VuKCRncmVlbiwgJGFtb3VudE9mTGlnaHQpO1xyXG4kcGluay1kYXJrOiAgICAgICAgICAgICBkYXJrZW4oJHBpbmssICRhbW91bnRPZkxpZ2h0KTtcclxuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgZGFya2VuKCRwdXJwbGUsICRhbW91bnRPZkxpZ2h0KTtcclxuJHllbGxvdy1kYXJrOiAgICAgICAgICAgZGFya2VuKCR5ZWxsb3csICRhbW91bnRPZkxpZ2h0KTtcclxuXHJcbi8vIFRoZW1lIHZhcmlhYmxlc1xyXG5cclxuLy8gdXNlZCBmb3Igc2lkZWJhcnMgYW5kIGNvbnRlbnQgc3BhY2luZ1xyXG4kbmF2YmFyLWhlaWdodDogICAgICAgICAgICAgICAgICAgIDU1cHg7XHJcblxyXG4vLyBCdXR0b24gc2Vjb25kYXJ5IHJlZGVmaW5pdGlvbiBzdHlsZSBmb3IgdGhlbWVcclxuJGJ0bi1zZWNvbmRhcnktY29sb3I6ICAgICAgICAgICAgICAjMzMzO1xyXG4kYnRuLXNlY29uZGFyeS1iZzogICAgICAgICAgICAgICAgICNmZmY7XHJcbiRidG4tc2Vjb25kYXJ5LWJvcmRlcjogICAgICAgICAgICAgI2VhZWFlYTtcclxuXHJcbi8vIFRvcCBCb3JkZXIgY29sb3IgZm9yIGN1c3RvbSBkZWZhdWx0IGNhcmRzICguY2FyZC1kZWZhdWx0KVxyXG4kY2FyZC1kZWZhdWx0LWJvcmRlci1jb2xvcjogICAgICAgICNjZmRiZTI7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFV0aWxpdGllcyB2YXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGV4dC1hbHBoYTogICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuJHRleHQtYWxwaGEtaW52ZXJzZTogICAgcmdiYSgwLDAsMCwuNSk7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAxcmVtO1xyXG4kdGV4dC1zbTogICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjc0Mzc1O1xyXG4kdGV4dC1tZDogICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjY2MjU7XHJcbiR0ZXh0LWxnOiAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNjI1O1xyXG5cclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxuJHdkLXh4czogICAgICAgICAgICAgICAgNjBweDtcclxuJHdkLXhzOiAgICAgICAgICAgICAgICAgOTBweDtcclxuJHdkLXNtOiAgICAgICAgICAgICAgICAgMTUwcHg7XHJcbiR3ZC1zZDogICAgICAgICAgICAgICAgIDIwMHB4OyAvLyBzZCA9PSBzdGFuZGFyZFxyXG4kd2QtbWQ6ICAgICAgICAgICAgICAgICAyNDBweDtcclxuJHdkLWxnOiAgICAgICAgICAgICAgICAgMjgwcHg7XHJcbiR3ZC14bDogICAgICAgICAgICAgICAgIDMyMHB4O1xyXG4kd2QteHhsOiAgICAgICAgICAgICAgICAzNjBweDtcclxuJHdkLXdpZGU6ICAgICAgICAgICAgICAgMTAwJTtcclxuJHdkLWF1dG86ICAgICAgICAgICAgICAgYXV0bztcclxuJHdkLXplcm86ICAgICAgICAgICAgICAgMDtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQm9vdHN0cmFwIDQgVmFyaWFibGVzIE92ZXJyaWRlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcclxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgJ2ludmVyc2UnOiAgICAkaW52ZXJzZSxcclxuXHJcbiAgICAncHJpbWFyeS1saWdodCc6ICRwcmltYXJ5LWxpZ2h0LFxyXG4gICAgJ3ByaW1hcnktZGFyayc6ICAkcHJpbWFyeS1kYXJrLFxyXG4gICAgJ3N1Y2Nlc3MtbGlnaHQnOiAkc3VjY2Vzcy1saWdodCxcclxuICAgICdzdWNjZXNzLWRhcmsnOiAgJHN1Y2Nlc3MtZGFyayxcclxuICAgICdpbmZvLWxpZ2h0JzogICAgJGluZm8tbGlnaHQsXHJcbiAgICAnaW5mby1kYXJrJzogICAgICRpbmZvLWRhcmssXHJcbiAgICAnd2FybmluZy1saWdodCc6ICR3YXJuaW5nLWxpZ2h0LFxyXG4gICAgJ3dhcm5pbmctZGFyayc6ICAkd2FybmluZy1kYXJrLFxyXG4gICAgJ2Rhbmdlci1saWdodCc6ICAkZGFuZ2VyLWxpZ2h0LFxyXG4gICAgJ2Rhbmdlci1kYXJrJzogICAkZGFuZ2VyLWRhcmssXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAgICRncmVlbi1saWdodCxcclxuICAgICdncmVlbi1kYXJrJzogICAgJGdyZWVuLWRhcmssXHJcbiAgICAncGluay1saWdodCc6ICAgICRwaW5rLWxpZ2h0LFxyXG4gICAgJ3BpbmstZGFyayc6ICAgICAkcGluay1kYXJrLFxyXG4gICAgJ3B1cnBsZS1saWdodCc6ICAkcHVycGxlLWxpZ2h0LFxyXG4gICAgJ3B1cnBsZS1kYXJrJzogICAkcHVycGxlLWRhcmssXHJcbiAgICAnaW52ZXJzZS1saWdodCc6ICRpbnZlcnNlLWxpZ2h0LFxyXG4gICAgJ2ludmVyc2UtZGFyayc6ICAkaW52ZXJzZS1kYXJrLFxyXG4gICAgJ3llbGxvdy1saWdodCc6ICAkeWVsbG93LWxpZ2h0LFxyXG4gICAgJ3llbGxvdy1kYXJrJzogICAkeWVsbG93LWRhcmssXHJcbik7XHJcblxyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG4gIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICBcImRhbmdlclwiOiAgICAgJGRhbmdlclxyXG4pO1xyXG5cclxuLy8gQm9keVxyXG5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICNmNWY3ZmE7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNjU2NTY1O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuMzc1cmVtO1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41Mjg1NzE0Mjk7XHJcblxyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjE7XHJcblxyXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAjOTA5RkE3O1xyXG5cclxuLy8gVGFibGVzXHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAjZmFmYmZjO1xyXG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICAjZmFmYmZjO1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgI2VlZTtcclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgMXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4zMTI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjYyNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMS4yNXJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgIDIuMTg3NXJlbTsgLy8gMzVweFxyXG5cclxuLy8gRm9ybXNcclxuXHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXk7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAjNjZhZmU5O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgI2I3YmFjOTtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG5cclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgI2UxZTFlMTtcclxuXHJcbi8vIE5hdnNcclxuXHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICNmZmY7XHJcblxyXG4vLyBKdW1ib3Ryb25cclxuXHJcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICNmY2ZjZmM7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjZTRlYWVjO1xyXG5cclxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjEyNXJlbTtcclxuXHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZhZmFmYTtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgI2MxYzJjMztcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGJvZHktY29sb3I7XHJcbiJdfQ== */"];




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
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_reset_password_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/reset-password.model */ "./src/app/shared/viewModel/reset-password.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-json-patch */ "./node_modules/fast-json-patch/index.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class UserEditComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(p => this.username = p["username"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(p => this.userService.getDetails(p["username"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(user => this.patchObserver = fast_json_patch__WEBPACK_IMPORTED_MODULE_3__["observe"](user))).subscribe(result => {
            this.model = result;
            this.showButtonLoading = false;
            if (this.model.lockoutEnd != null)
                this.model.lockoutEnd = new Date(this.model.lockoutEnd);
        }, err => {
            this.router.navigate(['/users']);
        });
        this.errors = [];
        this.resetPassword = new _shared_viewModel_reset_password_model__WEBPACK_IMPORTED_MODULE_1__["ResetPassword"]();
    }
    update() {
        this.showButtonLoading = true;
        this.errors = [];
        try {
            this.userService.patch(this.username, fast_json_patch__WEBPACK_IMPORTED_MODULE_3__["generate"](this.patchObserver)).subscribe(() => {
                this.showSuccessMessage();
                this.router.navigate(["/users"]);
            }, err => {
                this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
                this.showButtonLoading = false;
            });
        }
        catch (error) {
            this.errors = [];
            this.errors.push("Unknown error while trying to update");
            this.showButtonLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Unknown error while trying to update");
        }
    }
    resetPass() {
        this.showButtonLoading = true;
        this.errors = [];
        this.userService.resetPassword(this.username, this.resetPassword).subscribe(() => {
            this.showSuccessMessage();
            this.router.navigate(["/users"]);
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3VzZXJzL2V2ZW50cy91c2VyLWV2ZW50cy5jb21wb25lbnQuc2NzcyJ9 */"];




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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class UserEventsComponent {
    constructor(route, router, translator, userService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.page = 1;
        this.quantity = 10;
        this.eventSearch = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(p => this.userService.getDetails(p["username"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(user => this.user = user))
            .subscribe(s => this.loadResources(), err => {
            this.router.navigate(['/users']);
        });
        this.eventSearch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(text => this.userService.searchEvents(this.user.userName, text, this.quantity, this.page)))
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
var styles = [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvdXNlcnMvbGlzdC9EOlxccmVwb3NcXERpc3RydWJ1dGVkIEF1dGhcXEpQUHJvamVjdC5JZGVudGl0eVNlcnZlcjQuQWRtaW5VSVxcc3JjXFxGcm9udGVuZFxcSnAuQWRtaW5VSS9zcmNcXGFwcFxccGFuZWxcXHVzZXJzXFxsaXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL3VzZXJzL2xpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwvdXNlcnMvbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"];




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
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




class UserListComponent {
    constructor(translator, userService) {
        this.translator = translator;
        this.userService = userService;
        this.loading = true;
        this.page = 1;
        this.quantity = 10;
        this.userSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.loadResources();
        this.userSearch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.animateLoadUsers()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(a => this.userService.findUsers(a, this.quantity, this.page)))
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Deleted!", m["deleted"], 'success');
                    }, err => {
                        let errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Error!", errors[0], 'error');
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Cancelled", m["cancelled"], 'error');
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
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvdXNlcnMvbG9naW5zL0Q6XFxyZXBvc1xcRGlzdHJ1YnV0ZWQgQXV0aFxcSlBQcm9qZWN0LklkZW50aXR5U2VydmVyNC5BZG1pblVJXFxzcmNcXEZyb250ZW5kXFxKcC5BZG1pblVJL3NyY1xcYXBwXFxwYW5lbFxcdXNlcnNcXGxvZ2luc1xcdXNlci1sb2dpbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL3VzZXJzL2xvZ2lucy91c2VyLWxvZ2lucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC91c2Vycy9sb2dpbnMvdXNlci1sb2dpbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWctaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJ0YWctaW5wdXQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn0iXX0= */"];




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
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class UserLoginsComponent {
    constructor(route, router, translator, userService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(m => this.userService.getUserLogins(m.toString()))).subscribe(result => this.logins = result);
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
                this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
                this.showButtonLoading = false;
            });
        }
        catch (error) {
            this.errors = [];
            this.errors.push("Unknown error while trying to remove");
            this.showButtonLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Unknown error while trying to remove");
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
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvdXNlcnMvcm9sZXMvRDpcXHJlcG9zXFxEaXN0cnVidXRlZCBBdXRoXFxKUFByb2plY3QuSWRlbnRpdHlTZXJ2ZXI0LkFkbWluVUlcXHNyY1xcRnJvbnRlbmRcXEpwLkFkbWluVUkvc3JjXFxhcHBcXHBhbmVsXFx1c2Vyc1xccm9sZXNcXHVzZXItcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL3VzZXJzL3JvbGVzL3VzZXItcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwvdXNlcnMvcm9sZXMvdXNlci1yb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhZy1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufSIsInRhZy1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufSJdfQ== */"];




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
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/role.model */ "./src/app/shared/viewModel/role.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class UserRolesComponent {
    constructor(route, router, translator, userService, toasterService, roleService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.userService = userService;
        this.toasterService = toasterService;
        this.roleService = roleService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(p => this.userName = p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(p => p["username"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(m => this.userService.getUserRoles(m.toString()))).subscribe(result => this.userRoles = result);
        this.errors = [];
        this.model = new _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_1__["SaveRole"]();
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
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
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
                this.model = new _shared_viewModel_role_model__WEBPACK_IMPORTED_MODULE_1__["SaveRole"]();
            }
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_0__["ProblemDetails"].GetErrors(err).map(a => a.value);
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
/* harmony import */ var _add_user_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/user-add.component */ "./src/app/panel/users/add/user-add.component.ts");
/* harmony import */ var _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claims/user-claims.component */ "./src/app/panel/users/claims/user-claims.component.ts");
/* harmony import */ var _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/user-edit.component */ "./src/app/panel/users/edit/user-edit.component.ts");
/* harmony import */ var _events_user_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/user-events.component */ "./src/app/panel/users/events/user-events.component.ts");
/* harmony import */ var _list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/user-list.component */ "./src/app/panel/users/list/user-list.component.ts");
/* harmony import */ var _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logins/user-logins.component */ "./src/app/panel/users/logins/user-logins.component.ts");
/* harmony import */ var _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/user-roles.component */ "./src/app/panel/users/roles/user-roles.component.ts");







const routes = [
    { path: "", component: _list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: ":username/edit", component: _edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserEditComponent"] },
    { path: "add", component: _add_user_add_component__WEBPACK_IMPORTED_MODULE_0__["UserAddComponent"] },
    { path: ":username/claims", component: _claims_user_claims_component__WEBPACK_IMPORTED_MODULE_1__["UserClaimsComponent"] },
    { path: ":username/roles", component: _roles_user_roles_component__WEBPACK_IMPORTED_MODULE_6__["UserRolesComponent"] },
    { path: ":username/logins", component: _logins_user_logins_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginsComponent"] },
    { path: ":username/events", component: _events_user_events_component__WEBPACK_IMPORTED_MODULE_3__["UserEventsComponent"] },
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
var styles = [".spinner-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  z-index: 2;\n}\n\n.spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d9cec;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-dasharray: 89, 200;\n  stroke-dashoffset: -10;\n}\n\n.spinner[_ngcontent-%COMP%]   .path.white-stroke[_ngcontent-%COMP%] {\n  stroke: white;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL0Q6XFxyZXBvc1xcRGlzdHJ1YnV0ZWQgQXV0aFxcSlBQcm9qZWN0LklkZW50aXR5U2VydmVyNC5BZG1pblVJXFxzcmNcXEZyb250ZW5kXFxKcC5BZG1pblVJL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRpbmctc3Bpbm5lclxcbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvRDpcXHJlcG9zXFxEaXN0cnVidXRlZCBBdXRoXFxKUFByb2plY3QuSWRlbnRpdHlTZXJ2ZXI0LkFkbWluVUlcXHNyY1xcRnJvbnRlbmRcXEpwLkFkbWluVUkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksNENBQUE7VUFBQSxvQ0FBQTtFQUNBLFVBQUE7QUNBSjs7QURDSTtFQUNJLGVFTWdCO0VGTGhCLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNDUjs7QURBUTtFQUNJLGFBQUE7QUNFWjs7QURHQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQ0FOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLG9CQUFBO0VDRE47RURHRTtJQUNJLHlCQUFBO0lBQ0Esc0JBQUE7RUNETjtFREdFO0lBQ0kseUJBQUE7SUFDQSx1QkFBQTtFQ0ROO0FBQ0Y7O0FEWEE7RUFDSTtJQUNJLHdCQUFBO0lBQ0Esb0JBQUE7RUNETjtFREdFO0lBQ0kseUJBQUE7SUFDQSxzQkFBQTtFQ0ROO0VER0U7SUFDSSx5QkFBQTtJQUNBLHVCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvYXBwL3ZhcmlhYmxlcy5zY3NzJztcclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLnBhdGgge1xyXG4gICAgICAgIHN0cm9rZTogJHByaW1hcnk7XHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDtcclxuICAgICAgICAmLndoaXRlLXN0cm9rZSB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcclxuICAgIH1cclxufSIsIi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogMjtcbn1cbi5zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlOiAjNWQ5Y2VjO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogLTEwO1xufVxuLnNwaW5uZXIgLnBhdGgud2hpdGUtc3Ryb2tlIHtcbiAgc3Ryb2tlOiB3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XG4gIH1cbn0iLCJcclxuLy8gQ3V0b21zIEdyYXkgY29sb3JzIGZvciB0aGVtZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAjMjMyNzM1O1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAjM2EzZjUxO1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAjZGRlNmU5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAjZTRlYWVjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAjZWRmMWYyO1xyXG5cclxuLy8gQ3VzdG9tIGJyYW5kIGNvbG9ycyBmb3IgdGhlbWVcclxuJGludmVyc2U6ICAgICAgICAgICAgICAgIzEzMWUyNjtcclxuJHB1cnBsZTogICAgICAgICAgICAgICAgIzcyNjZiYTtcclxuJHBpbms6ICAgICAgICAgICAgICAgICAgI2Y1MzJlNTtcclxuJHllbGxvdzogICAgICAgICAgICAgICAgI2ZhZDczMjtcclxuJGdyZWVuOiAgICAgICAgICAgICAgICAgIzM3YmM5YjtcclxuXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICM1ZDljZWM7XHJcbiRzZWNvbmRhcnk6ICAgICAgICAgICAgICNmZmY7XHJcbiRzdWNjZXNzOiAgICAgICAgICAgICAgICMyN2MyNGM7XHJcbiRpbmZvOiAgICAgICAgICAgICAgICAgICMyM2I3ZTU7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICNmZjkwMmI7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICNmMDUwNTA7XHJcbiRkYXJrOiAgICAgICAgICAgICAgICAgICMzYTNmNTE7XHJcblxyXG4vLyBDdXN0b20gY29sb3IgdmFyaWFudHNcclxuJGFtb3VudE9mTGlnaHQ6IDEwJTtcclxuXHJcbiRwcmltYXJ5LWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJHByaW1hcnksICRhbW91bnRPZkxpZ2h0KTtcclxuJHN1Y2Nlc3MtbGlnaHQ6ICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgJGFtb3VudE9mTGlnaHQpO1xyXG4kaW5mby1saWdodDogICAgICAgICAgICBsaWdodGVuKCRpbmZvLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR3YXJuaW5nLWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJHdhcm5pbmcsICRhbW91bnRPZkxpZ2h0KTtcclxuJGRhbmdlci1saWdodDogICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLCAkYW1vdW50T2ZMaWdodCk7XHJcbiRpbnZlcnNlLWxpZ2h0OiAgICAgICAgIGxpZ2h0ZW4oJGludmVyc2UsICRhbW91bnRPZkxpZ2h0KTtcclxuJGdyZWVuLWxpZ2h0OiAgICAgICAgICAgbGlnaHRlbigkZ3JlZW4sICRhbW91bnRPZkxpZ2h0KTtcclxuJHBpbmstbGlnaHQ6ICAgICAgICAgICAgbGlnaHRlbigkcGluaywgJGFtb3VudE9mTGlnaHQpO1xyXG4kcHVycGxlLWxpZ2h0OiAgICAgICAgICBsaWdodGVuKCRwdXJwbGUsICRhbW91bnRPZkxpZ2h0KTtcclxuJHllbGxvdy1saWdodDogICAgICAgICAgbGlnaHRlbigkeWVsbG93LCAkYW1vdW50T2ZMaWdodCk7XHJcbiRwcmltYXJ5LWRhcms6ICAgICAgICAgIGRhcmtlbigkcHJpbWFyeSwgJGFtb3VudE9mTGlnaHQpO1xyXG4kc3VjY2Vzcy1kYXJrOiAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsICRhbW91bnRPZkxpZ2h0KTtcclxuJGluZm8tZGFyazogICAgICAgICAgICAgZGFya2VuKCRpbmZvLCAkYW1vdW50T2ZMaWdodCk7XHJcbiR3YXJuaW5nLWRhcms6ICAgICAgICAgIGRhcmtlbigkd2FybmluZywgJGFtb3VudE9mTGlnaHQpO1xyXG4kZGFuZ2VyLWRhcms6ICAgICAgICAgICBkYXJrZW4oJGRhbmdlciwgJGFtb3VudE9mTGlnaHQpO1xyXG4kaW52ZXJzZS1kYXJrOiAgICAgICAgICBkYXJrZW4oJGludmVyc2UsICRhbW91bnRPZkxpZ2h0KTtcclxuJGdyZWVuLWRhcms6ICAgICAgICAgICAgZGFya2VuKCRncmVlbiwgJGFtb3VudE9mTGlnaHQpO1xyXG4kcGluay1kYXJrOiAgICAgICAgICAgICBkYXJrZW4oJHBpbmssICRhbW91bnRPZkxpZ2h0KTtcclxuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgZGFya2VuKCRwdXJwbGUsICRhbW91bnRPZkxpZ2h0KTtcclxuJHllbGxvdy1kYXJrOiAgICAgICAgICAgZGFya2VuKCR5ZWxsb3csICRhbW91bnRPZkxpZ2h0KTtcclxuXHJcbi8vIFRoZW1lIHZhcmlhYmxlc1xyXG5cclxuLy8gdXNlZCBmb3Igc2lkZWJhcnMgYW5kIGNvbnRlbnQgc3BhY2luZ1xyXG4kbmF2YmFyLWhlaWdodDogICAgICAgICAgICAgICAgICAgIDU1cHg7XHJcblxyXG4vLyBCdXR0b24gc2Vjb25kYXJ5IHJlZGVmaW5pdGlvbiBzdHlsZSBmb3IgdGhlbWVcclxuJGJ0bi1zZWNvbmRhcnktY29sb3I6ICAgICAgICAgICAgICAjMzMzO1xyXG4kYnRuLXNlY29uZGFyeS1iZzogICAgICAgICAgICAgICAgICNmZmY7XHJcbiRidG4tc2Vjb25kYXJ5LWJvcmRlcjogICAgICAgICAgICAgI2VhZWFlYTtcclxuXHJcbi8vIFRvcCBCb3JkZXIgY29sb3IgZm9yIGN1c3RvbSBkZWZhdWx0IGNhcmRzICguY2FyZC1kZWZhdWx0KVxyXG4kY2FyZC1kZWZhdWx0LWJvcmRlci1jb2xvcjogICAgICAgICNjZmRiZTI7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFV0aWxpdGllcyB2YXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGV4dC1hbHBoYTogICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuJHRleHQtYWxwaGEtaW52ZXJzZTogICAgcmdiYSgwLDAsMCwuNSk7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAxcmVtO1xyXG4kdGV4dC1zbTogICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjc0Mzc1O1xyXG4kdGV4dC1tZDogICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjY2MjU7XHJcbiR0ZXh0LWxnOiAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNjI1O1xyXG5cclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxuJHdkLXh4czogICAgICAgICAgICAgICAgNjBweDtcclxuJHdkLXhzOiAgICAgICAgICAgICAgICAgOTBweDtcclxuJHdkLXNtOiAgICAgICAgICAgICAgICAgMTUwcHg7XHJcbiR3ZC1zZDogICAgICAgICAgICAgICAgIDIwMHB4OyAvLyBzZCA9PSBzdGFuZGFyZFxyXG4kd2QtbWQ6ICAgICAgICAgICAgICAgICAyNDBweDtcclxuJHdkLWxnOiAgICAgICAgICAgICAgICAgMjgwcHg7XHJcbiR3ZC14bDogICAgICAgICAgICAgICAgIDMyMHB4O1xyXG4kd2QteHhsOiAgICAgICAgICAgICAgICAzNjBweDtcclxuJHdkLXdpZGU6ICAgICAgICAgICAgICAgMTAwJTtcclxuJHdkLWF1dG86ICAgICAgICAgICAgICAgYXV0bztcclxuJHdkLXplcm86ICAgICAgICAgICAgICAgMDtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQm9vdHN0cmFwIDQgVmFyaWFibGVzIE92ZXJyaWRlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcclxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgJ2ludmVyc2UnOiAgICAkaW52ZXJzZSxcclxuXHJcbiAgICAncHJpbWFyeS1saWdodCc6ICRwcmltYXJ5LWxpZ2h0LFxyXG4gICAgJ3ByaW1hcnktZGFyayc6ICAkcHJpbWFyeS1kYXJrLFxyXG4gICAgJ3N1Y2Nlc3MtbGlnaHQnOiAkc3VjY2Vzcy1saWdodCxcclxuICAgICdzdWNjZXNzLWRhcmsnOiAgJHN1Y2Nlc3MtZGFyayxcclxuICAgICdpbmZvLWxpZ2h0JzogICAgJGluZm8tbGlnaHQsXHJcbiAgICAnaW5mby1kYXJrJzogICAgICRpbmZvLWRhcmssXHJcbiAgICAnd2FybmluZy1saWdodCc6ICR3YXJuaW5nLWxpZ2h0LFxyXG4gICAgJ3dhcm5pbmctZGFyayc6ICAkd2FybmluZy1kYXJrLFxyXG4gICAgJ2Rhbmdlci1saWdodCc6ICAkZGFuZ2VyLWxpZ2h0LFxyXG4gICAgJ2Rhbmdlci1kYXJrJzogICAkZGFuZ2VyLWRhcmssXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAgICRncmVlbi1saWdodCxcclxuICAgICdncmVlbi1kYXJrJzogICAgJGdyZWVuLWRhcmssXHJcbiAgICAncGluay1saWdodCc6ICAgICRwaW5rLWxpZ2h0LFxyXG4gICAgJ3BpbmstZGFyayc6ICAgICAkcGluay1kYXJrLFxyXG4gICAgJ3B1cnBsZS1saWdodCc6ICAkcHVycGxlLWxpZ2h0LFxyXG4gICAgJ3B1cnBsZS1kYXJrJzogICAkcHVycGxlLWRhcmssXHJcbiAgICAnaW52ZXJzZS1saWdodCc6ICRpbnZlcnNlLWxpZ2h0LFxyXG4gICAgJ2ludmVyc2UtZGFyayc6ICAkaW52ZXJzZS1kYXJrLFxyXG4gICAgJ3llbGxvdy1saWdodCc6ICAkeWVsbG93LWxpZ2h0LFxyXG4gICAgJ3llbGxvdy1kYXJrJzogICAkeWVsbG93LWRhcmssXHJcbik7XHJcblxyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG4gIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICBcImRhbmdlclwiOiAgICAgJGRhbmdlclxyXG4pO1xyXG5cclxuLy8gQm9keVxyXG5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICNmNWY3ZmE7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNjU2NTY1O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuMzc1cmVtO1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41Mjg1NzE0Mjk7XHJcblxyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjE7XHJcblxyXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAjOTA5RkE3O1xyXG5cclxuLy8gVGFibGVzXHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAjZmFmYmZjO1xyXG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICAjZmFmYmZjO1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgI2VlZTtcclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgMXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4zMTI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjYyNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMS4yNXJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgIDIuMTg3NXJlbTsgLy8gMzVweFxyXG5cclxuLy8gRm9ybXNcclxuXHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXk7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAjNjZhZmU5O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgI2I3YmFjOTtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG5cclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgI2UxZTFlMTtcclxuXHJcbi8vIE5hdnNcclxuXHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICNmZmY7XHJcblxyXG4vLyBKdW1ib3Ryb25cclxuXHJcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICNmY2ZjZmM7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjZTRlYWVjO1xyXG5cclxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjEyNXJlbTtcclxuXHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZhZmFmYTtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgI2MxYzJjMztcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGJvZHktY29sb3I7XHJcbiJdfQ== */"];




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
//# sourceMappingURL=10-es2015.d7571cfdd1c60ede7c02.js.map