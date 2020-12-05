(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/angular2-toaster/src/bodyOutputType.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/bodyOutputType.js ***!
  \*************************************************************/
/*! exports provided: BodyOutputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyOutputType", function() { return BodyOutputType; });
var BodyOutputType = /*@__PURE__*/ (function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
    return BodyOutputType;
})({});





/***/ }),

/***/ "./node_modules/angular2-toaster/src/toast.component.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toast.component.js ***!
  \**************************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _bodyOutputType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bodyOutputType */ "./node_modules/angular2-toaster/src/bodyOutputType.js");





var ToastComponent = /** @class */ /*@__PURE__*/ (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = _bodyOutputType__WEBPACK_IMPORTED_MODULE_3__["BodyOutputType"];
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
        if (this.toast.bodyOutputType === _bodyOutputType__WEBPACK_IMPORTED_MODULE_3__["BodyOutputType"].TrustedHtml) {
            this.safeBodyHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.body);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());




/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-config.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster-config.js ***!
  \*************************************************************/
/*! exports provided: ToasterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterConfig", function() { return ToasterConfig; });
/* harmony import */ var _bodyOutputType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyOutputType */ "./node_modules/angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = /** @class */ /*@__PURE__*/ (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || _bodyOutputType__WEBPACK_IMPORTED_MODULE_0__["BodyOutputType"].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());






/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-container.component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster-container.component.js ***!
  \**************************************************************************/
/*! exports provided: ToasterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return ToasterContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _toaster_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster-config */ "./node_modules/angular2-toaster/src/toaster-config.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");






var ToasterContainerComponent = /** @class */ /*@__PURE__*/ (function () {
    function ToasterContainerComponent(toasterService, ref, ngZone) {
        this.ref = ref;
        this.ngZone = ngZone;
        this.timeoutIds = new Map();
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.isNullOrUndefined(this.toasterconfig)) {
            this.toasterconfig = new _toaster_config__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === 'function') {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log('The toast click handler is not a callable function.');
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            var toastId = this.toastIdOrDefault(toast);
            var timeoutId = this.timeoutIds.get(toastId);
            if (timeoutId) {
                window.clearTimeout(timeoutId);
                this.timeoutIds.delete(toastId);
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        var timeoutId = this.timeoutIds.get(this.toastIdOrDefault(toast));
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeout !== 0 && !timeoutId && this.toasterconfig.timeout) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId) {
            return;
        }
        ;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (this.isNullOrUndefined(toast.showCloseButton)) {
            if (typeof this.toasterconfig.showCloseButton === 'object') {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === 'boolean') {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === 'number')
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === 'object') {
            timeout = timeout[toast.type];
        }
        ;
        if (timeout > 0) {
            this.ngZone.runOutsideAngular(function () {
                var timeoutId = window.setTimeout(function () {
                    _this.ngZone.run(function () {
                        _this.ref.markForCheck();
                        _this.removeToast(toast);
                    });
                }, timeout);
                _this.timeoutIds.set(_this.toastIdOrDefault(toast), timeoutId);
            });
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0) {
            return;
        }
        ;
        var toastId = this.toastIdOrDefault(toast);
        var timeoutId = this.timeoutIds.get(toastId);
        this.toasts.splice(index, 1);
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            this.timeoutIds.delete(toastId);
        }
        if (toast.onHideCallback) {
            toast.onHideCallback(toast);
        }
        this.toasterService._removeToastSubject.next({ toastId: toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (this.isNullOrUndefined(toastContainerId)) {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.toastIdOrDefault = function (toast) {
        return toast.toastId || '';
    };
    ToasterContainerComponent.prototype.isNullOrUndefined = function (value) {
        return value === null || typeof value === 'undefined';
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());




/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster.module.js ***!
  \*************************************************************/
/*! exports provided: ToasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterModule", function() { return ToasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.component */ "./node_modules/angular2-toaster/src/toast.component.js");
/* harmony import */ var _toaster_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");






var ToasterModule = /** @class */ /*@__PURE__*/ (function () {
    function ToasterModule() {
    }
    ToasterModule_1 = ToasterModule;
    ToasterModule.forRoot = function () {
        return {
            ngModule: ToasterModule_1,
            providers: [_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"], _toaster_container_component__WEBPACK_IMPORTED_MODULE_4__["ToasterContainerComponent"]]
        };
    };
    ToasterModule.forChild = function () {
        return {
            ngModule: ToasterModule_1,
            providers: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_4__["ToasterContainerComponent"]]
        };
    };
    var ToasterModule_1;
    return ToasterModule;
}());




/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.service.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster.service.js ***!
  \**************************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = /** @class */ /*@__PURE__*/ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
var ToasterService = /** @class */ /*@__PURE__*/ (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) { return _this._addToast = observer; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.clearToasts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) { return _this._clearToasts = observer; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this._removeToastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.removeToast = this._removeToastSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        if (!toast.toastId) {
            toast.toastId = Guid.newGuid();
        }
        if (!this._addToast) {
            throw new Error('No Toaster Containers have been initialized to receive toasts.');
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());




/***/ }),

/***/ "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js ***!
  \******************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Ng2DropdownButton = /*@__PURE__*/ (() => {
    class Ng2DropdownButton {
        /**
         * @param {?} element
         */
        constructor(element) {
            this.element = element;
            this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.showCaret = true;
        }
        /**
         * \@name toggleMenu
         * @desc emits event to toggle menu
         * @return {?}
         */
        toggleMenu() {
            this.onMenuToggled.emit(true);
        }
        /**
         * \@name getPosition
         * @desc returns position of the button
         * @return {?}
         */
        getPosition() {
            return this.element.nativeElement.getBoundingClientRect();
        }
    }
    return Ng2DropdownButton;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
const /** @type {?} */ onSwitchNext = (index, items, state$$1) => {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
const /** @type {?} */ onSwitchPrev = (index, items, state$$1) => {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
const /** @type {?} */ onBackspace = (index, items, state$$1) => {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
const /** @type {?} */ onItemClicked = (index, items, state$$1) => {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
const /** @type {?} */ ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext,
    [KEYS.ENTER]: onItemClicked,
    [KEYS.ESCAPE]: onEscape
};
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ng2DropdownState {
    constructor() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * \@name selectedItem
     * @desc getter for _selectedItem
     * @return {?}
     */
    get selectedItem() {
        return this._selectedItem;
    }
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    select(item, dispatchEvent = true) {
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    }
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    unselect() {
        this._selectedItem = undefined;
    }
}
let DropdownStateService = /*@__PURE__*/ (() => {
    class DropdownStateService {
        constructor() {
            this.menuState = {
                isVisible: /** @type {?} */ (false),
                /**
                 * @return {?}
                 */
                toString() {
                    return this.isVisible === true ? 'visible' : 'hidden';
                }
            };
            this.dropdownState = new Ng2DropdownState();
        }
    }
    return DropdownStateService;
})();
let Ng2MenuItem = /*@__PURE__*/ (() => {
    class Ng2MenuItem {
        /**
         * @param {?} state
         * @param {?} element
         * @param {?} renderer
         */
        constructor(state$$1, element, renderer) {
            this.state = state$$1;
            this.element = element;
            this.renderer = renderer;
            /**
             * \@preventClose
             * @desc if true, clicking on the item won't close the dropdown
             */
            this.preventClose = false;
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.state.dropdownState.onItemDestroyed.emit(this);
        }
        /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        get isSelected() {
            return this === this.state.dropdownState.selectedItem;
        }
        /**
         * \@name click
         * @desc emits select event
         * @param {?=} $event
         * @return {?}
         */
        select($event) {
            this.state.dropdownState.select(this, true);
            if ($event) {
                $event.stopPropagation();
                $event.preventDefault();
            }
        }
        /**
         * \@name click
         * @desc emits click event
         * @return {?}
         */
        click() {
            this.state.dropdownState.onItemClicked.emit(this);
        }
        /**
         * \@name focus
         * @return {?}
         */
        focus() {
            this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
        }
    }
    return Ng2MenuItem;
})();
let Ng2DropdownMenu = /*@__PURE__*/ (() => {
    class Ng2DropdownMenu {
        /**
         * @param {?} state
         * @param {?} element
         * @param {?} renderer
         */
        constructor(state$$1, element, renderer) {
            this.state = state$$1;
            this.element = element;
            this.renderer = renderer;
            /**
             * \@name width
             */
            this.width = 4;
            /**
             * \@description if set to true, the first element of the dropdown will be automatically focused
             * \@name focusFirstElement
             */
            this.focusFirstElement = true;
            /**
             * \@name appendToBody
             */
            this.appendToBody = true;
            /**
             * \@name zIndex
             */
            this.zIndex = 1000;
            this.listeners = {
                arrowHandler: undefined,
                handleKeypress: undefined
            };
        }
        /**
         * \@name show
         * \@shows menu and selects first item
         * @param {?=} position
         * @param {?=} dynamic
         * @return {?}
         */
        show(position, dynamic = true) {
            const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
            const /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
            if (!this.state.menuState.isVisible) {
                // setting handlers
                this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
                this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
            }
            // update state
            this.state.menuState.isVisible = true;
            if (position) {
                this.updatePosition(position, dynamic);
            }
        }
        /**
         * \@name hide
         * @desc hides menu
         * @return {?}
         */
        hide() {
            this.state.menuState.isVisible = false;
            // reset selected item state
            this.state.dropdownState.unselect();
            // call function to unlisten
            this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
            this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
        }
        /**
         * \@name updatePosition
         * @desc updates the menu position every time it is toggled
         * @param {?} position {ClientRect}
         * @param {?} dynamic {boolean}
         * @return {?}
         */
        updatePosition(position, dynamic) {
            this.position = position;
            this.updateOnChange(dynamic);
        }
        /**
         * \@name handleKeypress
         * @desc executes functions on keyPress based on the key pressed
         * @param {?} $event
         * @return {?}
         */
        handleKeypress($event) {
            const /** @type {?} */ key = $event.keyCode;
            const /** @type {?} */ items = this.items.toArray();
            const /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
            if (!ACTIONS.hasOwnProperty(key)) {
                return;
            }
            ACTIONS[key].call(this, index, items, this.state.dropdownState);
        }
        /**
         * \@name getMenuElement
         * @return {?}
         */
        getMenuElement() {
            return this.element.nativeElement.children[0];
        }
        /**
         * \@name calcPositionOffset
         * @param {?} position
         * @return {?}
         */
        calcPositionOffset(position) {
            const /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
            const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
            if (!wd || !dc || !position) {
                return;
            }
            const /** @type {?} */ element = this.getMenuElement();
            const /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
            const /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
            const /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
                dc.documentElement.scrollLeft : dc.body.scrollLeft;
            const /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
                dc.documentElement.scrollTop : dc.body.scrollTop;
            let { top, left } = this.applyOffset(`${position.top + (this.appendToBody ? y - 15 : 0)}px`, `${position.left + x - 5}px`);
            const /** @type {?} */ clientWidth = element.clientWidth;
            const /** @type {?} */ clientHeight = element.clientHeight;
            const /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
            const /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
            const /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
            const /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
            if (marginFromBottom >= windowScrollHeight) {
                top = `${parseInt(top.replace('px', '')) - clientHeight}px`;
            }
            if (marginFromRight >= windowScrollWidth) {
                const /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
                left = `${parseInt(left.replace('px', '')) - marginRight}px`;
            }
            return { top, left };
        }
        /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
        applyOffset(top, left) {
            if (!this.offset) {
                return { top, left };
            }
            const /** @type {?} */ offset = this.offset.split(' ');
            if (!offset[1]) {
                offset[1] = '0';
            }
            top = `${parseInt(top.replace('px', '')) + parseInt(offset[0])}px`;
            left = `${parseInt(left.replace('px', '')) + parseInt(offset[1])}px`;
            return { top, left };
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
            if (this.appendToBody) {
                // append menu element to the body
                dc.body.appendChild(this.element.nativeElement);
            }
        }
        /**
         * @param {?=} dynamic
         * @return {?}
         */
        updateOnChange(dynamic = true) {
            const /** @type {?} */ element = this.getMenuElement();
            const /** @type {?} */ position = this.calcPositionOffset(this.position);
            if (position) {
                this.renderer.setElementStyle(element, 'top', position.top.toString());
                this.renderer.setElementStyle(element, 'left', position.left.toString());
            }
            // select first item unless user disabled this option
            if (this.focusFirstElement &&
                this.items.first &&
                !this.state.dropdownState.selectedItem) {
                this.state.dropdownState.select(this.items.first, false);
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            const /** @type {?} */ elem = this.element.nativeElement;
            elem.parentNode.removeChild(elem);
            if (this.listeners.handleKeypress) {
                this.listeners.handleKeypress();
            }
        }
    }
    return Ng2DropdownMenu;
})();
let Ng2Dropdown = /*@__PURE__*/ (() => {
    class Ng2Dropdown {
        /**
         * @param {?} state
         */
        constructor(state$$1) {
            this.state = state$$1;
            this.dynamicUpdate = true;
            // outputs
            this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this.state.dropdownState.onItemClicked.subscribe(item => {
                this.onItemClicked.emit(item);
                if (item.preventClose) {
                    return;
                }
                this.hide.call(this);
            });
            if (this.button) {
                this.button.onMenuToggled.subscribe(() => {
                    this.toggleMenu();
                });
            }
            this.state.dropdownState.onItemSelected.subscribe(item => {
                this.onItemSelected.emit(item);
            });
            this.state.dropdownState.onItemDestroyed.subscribe((item) => {
                let /** @type {?} */ newSelectedItem;
                const /** @type {?} */ items = this.menu.items.toArray();
                if (item !== this.state.dropdownState.selectedItem) {
                    return;
                }
                if (this.menu.focusFirstElement) {
                    newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
                }
                this.state.dropdownState.select(newSelectedItem);
            });
        }
        /**
         * \@name toggleMenu
         * @desc toggles menu visibility
         * @param {?=} position
         * @return {?}
         */
        toggleMenu(position = this.button.getPosition()) {
            this.state.menuState.isVisible ? this.hide() : this.show(position);
        }
        /**
         * - hides dropdown
         * \@name hide
         * @return {?}
         */
        hide() {
            this.menu.hide();
            this.onHide.emit(this);
        }
        /**
         * - shows dropdown
         * \@name show
         * @param {?=} position
         * @return {?}
         */
        show(position = this.button.getPosition()) {
            this.menu.show(position, this.dynamicUpdate);
            this.onShow.emit(this);
        }
        /**
         * \@name scrollListener
         * @return {?}
         */
        scrollListener() {
            if (this.button && this.dynamicUpdate) {
                this.menu.updatePosition(this.button.getPosition(), true);
            }
        }
    }
    return Ng2Dropdown;
})();
let Ng2DropdownModule = /*@__PURE__*/ (() => {
    class Ng2DropdownModule {
    }
    return Ng2DropdownModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */






/***/ }),

/***/ "./node_modules/ngx-chips/fesm2015/ngx-chips.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-chips/fesm2015/ngx-chips.js ***!
  \******************************************************/
/*! exports provided: DeleteIconComponent, TagComponent, TagInputComponent, TagInputDropdown, TagInputForm, TagInputModule, TagRipple, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");







const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
let HighlightPipe = /*@__PURE__*/ (() => {
    let HighlightPipe = class HighlightPipe {
        /**
         * @name transform
         * @param value {string}
         * @param arg {string}
         */
        transform(value, arg) {
            if (!arg.trim()) {
                return value;
            }
            try {
                const regex = new RegExp(`(${escape(arg)})`, 'i');
                return value.replace(regex, '<b>$1</b>');
            }
            catch (e) {
                return value;
            }
        }
    };
    return HighlightPipe;
})();
/*
** constants and default values for <tag-input>
 */
const PLACEHOLDER = '+ Tag';
const SECONDARY_PLACEHOLDER = 'Enter a new tag';
const KEYDOWN = 'keydown';
const KEYUP = 'keyup';
const MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
const ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
const KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
const DRAG_AND_DROP_KEY = 'Text';
const NEXT = 'NEXT';
const PREV = 'PREV';
let DragProvider = /*@__PURE__*/ (() => {
    let DragProvider = class DragProvider {
        constructor() {
            this.state = {
                dragging: false,
                dropping: false,
                index: undefined
            };
        }
        /**
         * @name setDraggedItem
         * @param event
         * @param tag
         */
        setDraggedItem(event, tag) {
            if (event && event.dataTransfer) {
                event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
            }
        }
        /**
         * @name getDraggedItem
         * @param event
         */
        getDraggedItem(event) {
            if (event && event.dataTransfer) {
                const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
                try {
                    return JSON.parse(data);
                }
                catch (_a) {
                    return;
                }
            }
        }
        /**
         * @name setSender
         * @param sender
         */
        setSender(sender) {
            this.sender = sender;
        }
        /**
         * @name setReceiver
         * @param receiver
         */
        setReceiver(receiver) {
            this.receiver = receiver;
        }
        /**
         * @name onTagDropped
         * @param tag
         * @param indexDragged
         * @param indexDropped
         */
        onTagDropped(tag, indexDragged, indexDropped) {
            this.onDragEnd();
            this.sender.onRemoveRequested(tag, indexDragged);
            this.receiver.onAddingRequested(false, tag, indexDropped);
        }
        /**
         * @name setState
         * @param state
         */
        setState(state) {
            this.state = Object.assign({}, this.state, state);
        }
        /**
         * @name getState
         * @param key
         */
        getState(key) {
            return key ? this.state[key] : this.state;
        }
        /**
         * @name onDragEnd
         */
        onDragEnd() {
            this.setState({
                dragging: false,
                dropping: false,
                index: undefined
            });
        }
    };
    return DragProvider;
})();
const defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    },
    dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn
    }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */
function matchingFn(value, target) {
    const targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
let OptionsProvider = /*@__PURE__*/ (() => {
    class OptionsProvider {
        setOptions(options) {
            OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
            OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
        }
    }
    OptionsProvider.defaults = defaults;
    return OptionsProvider;
})();
function isObject(obj) {
    return obj === Object(obj);
}
let TagInputAccessor = /*@__PURE__*/ (() => {
    class TagInputAccessor {
        constructor() {
            this._items = [];
            /**
             * @name displayBy
             */
            this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
            /**
             * @name identifyBy
             */
            this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
        }
        get items() {
            return this._items;
        }
        set items(items) {
            this._items = items;
            this._onChangeCallback(this._items);
        }
        onTouched() {
            this._onTouchedCallback();
        }
        writeValue(items) {
            this._items = items || [];
        }
        registerOnChange(fn) {
            this._onChangeCallback = fn;
        }
        registerOnTouched(fn) {
            this._onTouchedCallback = fn;
        }
        /**
         * @name getItemValue
         * @param item
         * @param fromDropdown
         */
        getItemValue(item, fromDropdown = false) {
            const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
            return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemDisplay
         * @param item
         * @param fromDropdown
         */
        getItemDisplay(item, fromDropdown = false) {
            const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
            return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemsWithout
         * @param index
         */
        getItemsWithout(index) {
            return this.items.filter((item, position) => position !== index);
        }
    }
    return TagInputAccessor;
})();
/**
 * @name listen
 * @param listenerType
 * @param action
 * @param condition
 */
function listen(listenerType, action, condition = true) {
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}
let TagInputForm = /*@__PURE__*/ (() => {
    let TagInputForm = class TagInputForm {
        constructor() {
            /**
             * @name onSubmit
             */
            this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onBlur
             */
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onFocus
             */
            this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onKeyup
             */
            this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onKeydown
             */
            this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name inputTextChange
             */
            this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name validators
             */
            this.validators = [];
            /**
             * @name asyncValidators
             * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
             */
            this.asyncValidators = [];
            /**
             * @name tabindex
             * @desc pass through the specified tabindex to the input
             */
            this.tabindex = '';
            /**
             * @name disabled
             */
            this.disabled = false;
            this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
        }
        /**
         * @name inputText
         */
        get inputText() {
            return this.item.value;
        }
        /**
         * @name inputText
         * @param text {string}
         */
        set inputText(text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        }
        ngOnInit() {
            this.item.setValidators(this.validators);
            this.item.setAsyncValidators(this.asyncValidators);
            // creating form
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                item: this.item
            });
        }
        ngOnChanges(changes) {
            if (changes.disabled && !changes.disabled.firstChange) {
                if (changes.disabled.currentValue) {
                    this.form.controls['item'].disable();
                }
                else {
                    this.form.controls['item'].enable();
                }
            }
        }
        /**
         * @name value
         */
        get value() {
            return this.form.get('item');
        }
        /**
         * @name isInputFocused
         */
        isInputFocused() {
            const doc = typeof document !== 'undefined' ? document : undefined;
            return doc ? doc.activeElement === this.input.nativeElement : false;
        }
        /**
         * @name getErrorMessages
         * @param messages
         */
        getErrorMessages(messages) {
            return Object.keys(messages)
                .filter(err => this.value.hasError(err))
                .map(err => messages[err]);
        }
        /**
         * @name hasErrors
         */
        hasErrors() {
            const { dirty, value, valid } = this.form;
            return dirty && value.item && !valid;
        }
        /**
         * @name focus
         */
        focus() {
            this.input.nativeElement.focus();
        }
        /**
         * @name blur
         */
        blur() {
            this.input.nativeElement.blur();
        }
        /**
         * @name getElementPosition
         */
        getElementPosition() {
            return this.input.nativeElement.getBoundingClientRect();
        }
        /**
         * - removes input from the component
         * @name destroy
         */
        destroy() {
            const input = this.input.nativeElement;
            input.parentElement.removeChild(input);
        }
        /**
         * @name onKeyDown
         * @param $event
         */
        onKeyDown($event) {
            this.inputText = this.value.value;
            if ($event.key === 'Enter') {
                this.submit($event);
                this.inputText = '';
            }
            return this.onKeydown.emit($event);
        }
        /**
         * @name onKeyUp
         * @param $event
         */
        onKeyUp($event) {
            this.inputText = this.value.value;
            return this.onKeyup.emit($event);
        }
        /**
         * @name submit
         */
        submit($event) {
            $event.preventDefault();
            if (this.form.valid) {
                this.onSubmit.emit($event);
            }
        }
    };
    return TagInputForm;
})();
let TagRipple = /*@__PURE__*/ (() => {
    let TagRipple = class TagRipple {
        constructor() {
            this.state = 'none';
        }
    };
    return TagRipple;
})();
// mocking navigator
const navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
let TagComponent = /*@__PURE__*/ (() => {
    let TagComponent = class TagComponent {
        constructor(element, renderer, cdRef) {
            this.element = element;
            this.renderer = renderer;
            this.cdRef = cdRef;
            /**
             * @name disabled
             */
            this.disabled = false;
            /**
             * @name onSelect
             */
            this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onRemove
             */
            this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onBlur
             */
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onKeyDown
             */
            this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onTagEdited
             */
            this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name editing
             */
            this.editing = false;
            /**
             * @name rippleState
             */
            this.rippleState = 'none';
        }
        /**
         * @name readonly {boolean}
         */
        get readonly() {
            return typeof this.model !== 'string' && this.model.readonly === true;
        }
        /**
         * @name select
         */
        select($event) {
            if (this.readonly || this.disabled) {
                return;
            }
            if ($event) {
                $event.stopPropagation();
            }
            this.focus();
            this.onSelect.emit(this.model);
        }
        /**
         * @name remove
         */
        remove($event) {
            $event.stopPropagation();
            this.onRemove.emit(this);
        }
        /**
         * @name focus
         */
        focus() {
            this.element.nativeElement.focus();
        }
        move() {
            this.moving = true;
        }
        /**
         * @name keydown
         * @param event
         */
        keydown(event) {
            if (this.editing) {
                if (event.keyCode === 13) {
                    return this.disableEditMode(event);
                }
            }
            else {
                this.onKeyDown.emit({ event, model: this.model });
            }
        }
        /**
         * @name blink
         */
        blink() {
            const classList = this.element.nativeElement.classList;
            classList.add('blink');
            setTimeout(() => classList.remove('blink'), 50);
        }
        /**
         * @name toggleEditMode
         */
        toggleEditMode() {
            if (this.editable) {
                return this.editing ? undefined : this.activateEditMode();
            }
        }
        /**
         * @name onBlurred
         * @param event
         */
        onBlurred(event) {
            // Checks if it is editable first before handeling the onBlurred event in order to prevent
            // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
            if (!this.editable) {
                return;
            }
            this.disableEditMode();
            const value = event.target.innerText;
            const result = typeof this.model === 'string'
                ? value
                : Object.assign({}, this.model, { [this.displayBy]: value });
            this.onBlur.emit(result);
        }
        /**
         * @name getDisplayValue
         * @param item
         */
        getDisplayValue(item) {
            return typeof item === 'string' ? item : item[this.displayBy];
        }
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */
        get isRippleVisible() {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        }
        /**
         * @name disableEditMode
         * @param $event
         */
        disableEditMode($event) {
            const classList = this.element.nativeElement.classList;
            const input = this.getContentEditableText();
            this.editing = false;
            classList.remove('tag--editing');
            if (!input) {
                this.setContentEditableText(this.model);
                return;
            }
            this.storeNewValue(input);
            this.cdRef.detectChanges();
            if ($event) {
                $event.preventDefault();
            }
        }
        /**
         * @name isDeleteIconVisible
         */
        isDeleteIconVisible() {
            return (!this.readonly && !this.disabled && this.removable && !this.editing);
        }
        /**
         * @name getContentEditableText
         */
        getContentEditableText() {
            const input = this.getContentEditable();
            return input ? input.innerText.trim() : '';
        }
        /**
         * @name setContentEditableText
         * @param model
         */
        setContentEditableText(model) {
            const input = this.getContentEditable();
            const value = this.getDisplayValue(model);
            input.innerText = value;
        }
        /**
         * @name
         */
        activateEditMode() {
            const classList = this.element.nativeElement.classList;
            classList.add('tag--editing');
            this.editing = true;
        }
        /**
         * @name storeNewValue
         * @param input
         */
        storeNewValue(input) {
            const exists = (tag) => {
                return typeof tag === 'string'
                    ? tag === input
                    : tag[this.displayBy] === input;
            };
            const hasId = () => {
                return this.model[this.identifyBy] !== this.model[this.displayBy];
            };
            // if the value changed, replace the value in the model
            if (exists(this.model)) {
                return;
            }
            const model = typeof this.model === 'string'
                ? input
                : {
                    index: this.index,
                    [this.identifyBy]: hasId()
                        ? this.model[this.identifyBy]
                        : input,
                    [this.displayBy]: input
                };
            if (this.canAddTag(model)) {
                this.onTagEdited.emit({ tag: model, index: this.index });
            }
            else {
                this.setContentEditableText(this.model);
            }
        }
        /**
         * @name getContentEditable
         */
        getContentEditable() {
            return this.element.nativeElement.querySelector('[contenteditable]');
        }
    };
    return TagComponent;
})();
/**
 * @name animations
 */
const animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
let TagInputDropdown = /*@__PURE__*/ (() => {
    let TagInputDropdown = class TagInputDropdown {
        constructor(injector) {
            this.injector = injector;
            /**
             * @name offset
             */
            this.offset = defaults.dropdown.offset;
            /**
             * @name focusFirstElement
             */
            this.focusFirstElement = defaults.dropdown.focusFirstElement;
            /**
             * - show autocomplete dropdown if the value of input is empty
             * @name showDropdownIfEmpty
             */
            this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
            /**
             * - desc minimum text length in order to display the autocomplete dropdown
             * @name minimumTextLength
             */
            this.minimumTextLength = defaults.dropdown.minimumTextLength;
            /**
             * - number of items to display in the autocomplete dropdown
             * @name limitItemsTo
             */
            this.limitItemsTo = defaults.dropdown.limitItemsTo;
            /**
             * @name displayBy
             */
            this.displayBy = defaults.dropdown.displayBy;
            /**
             * @name identifyBy
             */
            this.identifyBy = defaults.dropdown.identifyBy;
            /**
             * @description a function a developer can use to implement custom matching for the autocomplete
             * @name matchingFn
             */
            this.matchingFn = defaults.dropdown.matchingFn;
            /**
             * @name appendToBody
             */
            this.appendToBody = defaults.dropdown.appendToBody;
            /**
             * @name keepOpen
             * @description option to leave dropdown open when adding a new item
             */
            this.keepOpen = defaults.dropdown.keepOpen;
            /**
             * @name dynamicUpdate
             */
            this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
            /**
            * @name zIndex
             */
            this.zIndex = defaults.dropdown.zIndex;
            /**
             * list of items that match the current value of the input (for autocomplete)
             * @name items
             */
            this.items = [];
            /**
             * @name tagInput
             */
            this.tagInput = this.injector.get(TagInputComponent);
            /**
             * @name _autocompleteItems
             */
            this._autocompleteItems = [];
            /**
             *
             * @name show
             */
            this.show = () => {
                const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
                const value = this.getFormValue();
                const hasMinimumText = value.trim().length >= this.minimumTextLength;
                const position = this.calculatePosition();
                const items = this.getMatchingItems(value);
                const hasItems = items.length > 0;
                const isHidden = this.isVisible === false;
                const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
                const isDisabled = this.tagInput.disable;
                const shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
                const shouldHide = this.isVisible && !hasItems;
                if (this.autocompleteObservable && hasMinimumText) {
                    return this.getItemsFromObservable(value);
                }
                if ((!this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                    return this.dropdown.hide();
                }
                this.setItems(items);
                if (shouldShow) {
                    this.dropdown.show(position);
                }
                else if (shouldHide) {
                    this.hide();
                }
            };
            /**
             * @name requestAdding
             * @param item {Ng2MenuItem}
             */
            this.requestAdding = (item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const tag = this.createTagModel(item);
                yield this.tagInput.onAddingRequested(true, tag).catch(() => { });
            });
            /**
             * @name resetItems
             */
            this.resetItems = () => {
                this.items = [];
            };
            /**
             * @name getItemsFromObservable
             * @param text
             */
            this.getItemsFromObservable = (text) => {
                this.setLoadingState(true);
                const subscribeFn = (data) => {
                    // hide loading animation
                    this.setLoadingState(false)
                        // add items
                        .populateItems(data);
                    this.setItems(this.getMatchingItems(text));
                    if (this.items.length) {
                        this.dropdown.show(this.calculatePosition());
                    }
                    else {
                        this.dropdown.hide();
                    }
                };
                this.autocompleteObservable(text)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(subscribeFn, () => this.setLoadingState(false));
            };
        }
        /**
         * @name autocompleteItems
         * @param items
         */
        set autocompleteItems(items) {
            this._autocompleteItems = items;
        }
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        get autocompleteItems() {
            const items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map((item) => {
                return typeof item === 'string' ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                } : item;
            });
        }
        /**
         * @name ngAfterviewInit
         */
        ngAfterViewInit() {
            this.onItemClicked().subscribe((item) => {
                this.requestAdding(item);
            });
            // reset itemsMatching array when the dropdown is hidden
            this.onHide().subscribe(this.resetItems);
            const DEBOUNCE_TIME = 200;
            const KEEP_OPEN = this.keepOpen;
            this.tagInput
                .onTextChange
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((value) => {
                if (KEEP_OPEN === false) {
                    return value.length > 0;
                }
                return true;
            }))
                .subscribe(this.show);
        }
        /**
         * @name updatePosition
         */
        updatePosition() {
            const position = this.tagInput.inputForm.getElementPosition();
            this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
        }
        /**
         * @name isVisible
         */
        get isVisible() {
            return this.dropdown.menu.state.menuState.isVisible;
        }
        /**
         * @name onHide
         */
        onHide() {
            return this.dropdown.onHide;
        }
        /**
         * @name onItemClicked
         */
        onItemClicked() {
            return this.dropdown.onItemClicked;
        }
        /**
         * @name selectedItem
         */
        get selectedItem() {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        }
        /**
         * @name state
         */
        get state() {
            return this.dropdown.menu.state;
        }
        /**
         * @name hide
         */
        hide() {
            this.resetItems();
            this.dropdown.hide();
        }
        /**
         * @name scrollListener
         */
        scrollListener() {
            if (!this.isVisible || !this.dynamicUpdate) {
                return;
            }
            this.updatePosition();
        }
        /**
         * @name onWindowBlur
         */
        onWindowBlur() {
            this.dropdown.hide();
        }
        /**
         * @name getFormValue
         */
        getFormValue() {
            const formValue = this.tagInput.formValue;
            return formValue ? formValue.toString().trim() : '';
        }
        /**
         * @name calculatePosition
         */
        calculatePosition() {
            return this.tagInput.inputForm.getElementPosition();
        }
        /**
         * @name createTagModel
         * @param item
         */
        createTagModel(item) {
            const display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
            const value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
            return Object.assign({}, item.value, { [this.tagInput.displayBy]: display, [this.tagInput.identifyBy]: value });
        }
        /**
         *
         * @param value {string}
         */
        getMatchingItems(value) {
            if (!value && !this.showDropdownIfEmpty) {
                return [];
            }
            const dupesAllowed = this.tagInput.allowDupes;
            return this.autocompleteItems.filter((item) => {
                const hasValue = dupesAllowed ? false : this.tagInput.tags.some(tag => {
                    const identifyBy = this.tagInput.identifyBy;
                    const model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                    return model === item[this.identifyBy];
                });
                return this.matchingFn(value, item) && (hasValue === false);
            });
        }
        /**
         * @name setItems
         */
        setItems(items) {
            this.items = items.slice(0, this.limitItemsTo || items.length);
        }
        /**
         * @name populateItems
         * @param data
         */
        populateItems(data) {
            this.autocompleteItems = data.map(item => {
                return typeof item === 'string' ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                } : item;
            });
            return this;
        }
        /**
         * @name setLoadingState
         * @param state
         */
        setLoadingState(state) {
            this.tagInput.isLoading = state;
            return this;
        }
    };
    return TagInputDropdown;
})();
// angular universal hacks
/* tslint:disable-next-line */
const DragEvent = window.DragEvent;
const CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TagInputComponent),
    multi: true
};
let TagInputComponent = /*@__PURE__*/ (() => {
    let TagInputComponent = class TagInputComponent extends TagInputAccessor {
        constructor(renderer, dragProvider) {
            super();
            this.renderer = renderer;
            this.dragProvider = dragProvider;
            /**
             * @name separatorKeys
             * @desc keyboard keys with which a user can separate items
             */
            this.separatorKeys = defaults.tagInput.separatorKeys;
            /**
             * @name separatorKeyCodes
             * @desc keyboard key codes with which a user can separate items
             */
            this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
            /**
             * @name placeholder
             * @desc the placeholder of the input text
             */
            this.placeholder = defaults.tagInput.placeholder;
            /**
             * @name secondaryPlaceholder
             * @desc placeholder to appear when the input is empty
             */
            this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
            /**
             * @name maxItems
             * @desc maximum number of items that can be added
             */
            this.maxItems = defaults.tagInput.maxItems;
            /**
             * @name validators
             * @desc array of Validators that are used to validate the tag before it gets appended to the list
             */
            this.validators = defaults.tagInput.validators;
            /**
             * @name asyncValidators
             * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
             */
            this.asyncValidators = defaults.tagInput.asyncValidators;
            /**
            * - if set to true, it will only possible to add items from the autocomplete
            * @name onlyFromAutocomplete
            */
            this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
            /**
             * @name errorMessages
             */
            this.errorMessages = defaults.tagInput.errorMessages;
            /**
             * @name theme
             */
            this.theme = defaults.tagInput.theme;
            /**
             * @name onTextChangeDebounce
             */
            this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
            /**
             * - custom id assigned to the input
             * @name id
             */
            this.inputId = defaults.tagInput.inputId;
            /**
             * - custom class assigned to the input
             */
            this.inputClass = defaults.tagInput.inputClass;
            /**
             * - option to clear text input when the form is blurred
             * @name clearOnBlur
             */
            this.clearOnBlur = defaults.tagInput.clearOnBlur;
            /**
             * - hideForm
             * @name clearOnBlur
             */
            this.hideForm = defaults.tagInput.hideForm;
            /**
             * @name addOnBlur
             */
            this.addOnBlur = defaults.tagInput.addOnBlur;
            /**
             * @name addOnPaste
             */
            this.addOnPaste = defaults.tagInput.addOnPaste;
            /**
             * - pattern used with the native method split() to separate patterns in the string pasted
             * @name pasteSplitPattern
             */
            this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
            /**
             * @name blinkIfDupe
             */
            this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
            /**
             * @name removable
             */
            this.removable = defaults.tagInput.removable;
            /**
             * @name editable
             */
            this.editable = defaults.tagInput.editable;
            /**
             * @name allowDupes
             */
            this.allowDupes = defaults.tagInput.allowDupes;
            /**
             * @description if set to true, the newly added tags will be added as strings, and not objects
             * @name modelAsStrings
             */
            this.modelAsStrings = defaults.tagInput.modelAsStrings;
            /**
             * @name trimTags
             */
            this.trimTags = defaults.tagInput.trimTags;
            /**
             * @name ripple
             */
            this.ripple = defaults.tagInput.ripple;
            /**
             * @name tabindex
             * @desc pass through the specified tabindex to the input
             */
            this.tabindex = defaults.tagInput.tabIndex;
            /**
             * @name disable
             */
            this.disable = defaults.tagInput.disable;
            /**
             * @name dragZone
             */
            this.dragZone = defaults.tagInput.dragZone;
            /**
             * @name onRemoving
             */
            this.onRemoving = defaults.tagInput.onRemoving;
            /**
             * @name onAdding
             */
            this.onAdding = defaults.tagInput.onAdding;
            /**
             * @name animationDuration
             */
            this.animationDuration = defaults.tagInput.animationDuration;
            /**
             * @name onAdd
             * @desc event emitted when adding a new item
             */
            this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onRemove
             * @desc event emitted when removing an existing item
             */
            this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onSelect
             * @desc event emitted when selecting an item
             */
            this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onFocus
             * @desc event emitted when the input is focused
             */
            this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onFocus
             * @desc event emitted when the input is blurred
             */
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name onTextChange
             * @desc event emitted when the input value changes
             */
            this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * - output triggered when text is pasted in the form
             * @name onPaste
             */
            this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * - output triggered when tag entered is not valid
             * @name onValidationError
             */
            this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * - output triggered when tag is edited
             * @name onTagEdited
             */
            this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @name isLoading
             */
            this.isLoading = false;
            /**
             * @name listeners
             * @desc array of events that get fired using @fireEvents
             */
            this.listeners = {
                [KEYDOWN]: [],
                [KEYUP]: []
            };
            /**
             * @description emitter for the 2-way data binding inputText value
             * @name inputTextChange
             */
            this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * @description private variable to bind get/set
             * @name inputTextValue
             */
            this.inputTextValue = '';
            this.errors = [];
            /**
             * @name appendTag
             * @param tag {TagModel}
             */
            this.appendTag = (tag, index = this.items.length) => {
                const items = this.items;
                const model = this.modelAsStrings ? tag[this.identifyBy] : tag;
                this.items = [
                    ...items.slice(0, index),
                    model,
                    ...items.slice(index, items.length)
                ];
            };
            /**
             * @name createTag
             * @param model
             */
            this.createTag = (model) => {
                const trim = (val, key) => {
                    return typeof val === 'string' ? val.trim() : val[key];
                };
                return Object.assign({}, typeof model !== 'string' ? model : {}, { [this.displayBy]: this.trimTags ? trim(model, this.displayBy) : model, [this.identifyBy]: this.trimTags ? trim(model, this.identifyBy) : model });
            };
            /**
             *
             * @param tag
             * @param isFromAutocomplete
             */
            this.isTagValid = (tag, fromAutocomplete = false) => {
                const selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
                const value = this.getItemDisplay(tag).trim();
                if (selectedItem && !fromAutocomplete || !value) {
                    return false;
                }
                const dupe = this.findDupe(tag, fromAutocomplete);
                // if so, give a visual cue and return false
                if (!this.allowDupes && dupe && this.blinkIfDupe) {
                    const model = this.tags.find(item => {
                        return this.getItemValue(item.model) === this.getItemValue(dupe);
                    });
                    if (model) {
                        model.blink();
                    }
                }
                const isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
                const assertions = [
                    // 1. there must be no dupe OR dupes are allowed
                    !dupe || this.allowDupes,
                    // 2. check max items has not been reached
                    !this.maxItemsReached,
                    // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                    ((isFromAutocomplete) || !this.onlyFromAutocomplete)
                ];
                return assertions.filter(Boolean).length === assertions.length;
            };
            /**
             * @name onPasteCallback
             * @param data
             */
            this.onPasteCallback = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const getText = () => {
                    const isIE = Boolean(window.clipboardData);
                    const clipboardData = isIE ? (window.clipboardData) : data.clipboardData;
                    const type = isIE ? 'Text' : 'text/plain';
                    return clipboardData === null ? '' : clipboardData.getData(type) || '';
                };
                const text = getText();
                const requests = text
                    .split(this.pasteSplitPattern)
                    .map(item => {
                    const tag = this.createTag(item);
                    this.setInputValue(tag[this.displayBy]);
                    return this.onAddingRequested(false, tag);
                });
                const resetInput = () => setTimeout(() => this.setInputValue(''), 50);
                Promise.all(requests).then(() => {
                    this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
            });
        }
        /**
         * @name inputText
         */
        get inputText() {
            return this.inputTextValue;
        }
        /**
         * @name inputText
         * @param text
         */
        set inputText(text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        }
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */
        get tabindexAttr() {
            return this.tabindex !== '' ? '-1' : '';
        }
        /**
         * @name ngAfterViewInit
         */
        ngAfterViewInit() {
            // set up listeners
            this.setUpKeypressListeners();
            this.setupSeparatorKeysListener();
            this.setUpInputKeydownListeners();
            if (this.onTextChange.observers.length) {
                this.setUpTextChangeSubscriber();
            }
            // if clear on blur is set to true, subscribe to the event and clear the text's form
            if (this.clearOnBlur || this.addOnBlur) {
                this.setUpOnBlurSubscriber();
            }
            // if addOnPaste is set to true, register the handler and add items
            if (this.addOnPaste) {
                this.setUpOnPasteListener();
            }
            const statusChanges$ = this.inputForm.form.statusChanges;
            statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((status) => status !== 'PENDING')).subscribe(() => {
                this.errors = this.inputForm.getErrorMessages(this.errorMessages);
            });
            this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((status) => {
                return status === 'PENDING' || this.isLoading;
            }));
            // if hideForm is set to true, remove the input
            if (this.hideForm) {
                this.inputForm.destroy();
            }
        }
        /**
         * @name ngOnInit
         */
        ngOnInit() {
            // if the number of items specified in the model is > of the value of maxItems
            // degrade gracefully and let the max number of items to be the number of items in the model
            // though, warn the user.
            const hasReachedMaxItems = this.maxItems !== undefined &&
                this.items &&
                this.items.length > this.maxItems;
            if (hasReachedMaxItems) {
                this.maxItems = this.items.length;
                console.warn(MAX_ITEMS_WARNING);
            }
            // Setting editable to false to fix problem with tags in IE still being editable when
            // onlyFromAutocomplete is true
            this.editable = this.onlyFromAutocomplete ? false : this.editable;
            this.setAnimationMetadata();
        }
        /**
         * @name onRemoveRequested
         * @param tag
         * @param index
         */
        onRemoveRequested(tag, index) {
            return new Promise(resolve => {
                const subscribeFn = (model) => {
                    this.removeItem(model, index);
                    resolve(tag);
                };
                this.onRemoving ?
                    this.onRemoving(tag)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                        .subscribe(subscribeFn) : subscribeFn(tag);
            });
        }
        /**
         * @name onAddingRequested
         * @param fromAutocomplete {boolean}
         * @param tag {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */
        onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
            return new Promise((resolve, reject) => {
                const subscribeFn = (model) => {
                    return this
                        .addItem(fromAutocomplete, model, index, giveupFocus)
                        .then(resolve)
                        .catch(reject);
                };
                return this.onAdding ?
                    this.onAdding(tag)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                        .subscribe(subscribeFn, reject) : subscribeFn(tag);
            });
        }
        /**
         * @name selectItem
         * @desc selects item passed as parameter as the selected tag
         * @param item
         * @param emit
         */
        selectItem(item, emit = true) {
            const isReadonly = item && typeof item !== 'string' && item.readonly;
            if (isReadonly || this.selectedTag === item) {
                return;
            }
            this.selectedTag = item;
            if (emit) {
                this.onSelect.emit(item);
            }
        }
        /**
         * @name fireEvents
         * @desc goes through the list of the events for a given eventName, and fires each of them
         * @param eventName
         * @param $event
         */
        fireEvents(eventName, $event) {
            this.listeners[eventName].forEach(listener => listener.call(this, $event));
        }
        /**
         * @name handleKeydown
         * @desc handles action when the user hits a keyboard key
         * @param data
         */
        handleKeydown(data) {
            const event = data.event;
            const key = event.keyCode || event.which;
            const shiftKey = event.shiftKey || false;
            switch (KEY_PRESS_ACTIONS[key]) {
                case ACTIONS_KEYS.DELETE:
                    if (this.selectedTag && this.removable) {
                        const index = this.items.indexOf(this.selectedTag);
                        this.onRemoveRequested(this.selectedTag, index);
                    }
                    break;
                case ACTIONS_KEYS.SWITCH_PREV:
                    this.moveToTag(data.model, PREV);
                    break;
                case ACTIONS_KEYS.SWITCH_NEXT:
                    this.moveToTag(data.model, NEXT);
                    break;
                case ACTIONS_KEYS.TAB:
                    if (shiftKey) {
                        if (this.isFirstTag(data.model)) {
                            return;
                        }
                        this.moveToTag(data.model, PREV);
                    }
                    else {
                        if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                            return;
                        }
                        this.moveToTag(data.model, NEXT);
                    }
                    break;
                default:
                    return;
            }
            // prevent default behaviour
            event.preventDefault();
        }
        onFormSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.onAddingRequested(false, this.formValue);
                }
                catch (_a) {
                    return;
                }
            });
        }
        /**
         * @name setInputValue
         * @param value
         */
        setInputValue(value, emitEvent = true) {
            const control = this.getControl();
            // update form value with the transformed item
            control.setValue(value, { emitEvent });
        }
        /**
         * @name getControl
         */
        getControl() {
            return this.inputForm.value;
        }
        /**
         * @name focus
         * @param applyFocus
         * @param displayAutocomplete
         */
        focus(applyFocus = false, displayAutocomplete = false) {
            if (this.dragProvider.getState('dragging')) {
                return;
            }
            this.selectItem(undefined, false);
            if (applyFocus) {
                this.inputForm.focus();
                this.onFocus.emit(this.formValue);
            }
        }
        /**
         * @name blur
         */
        blur() {
            this.onTouched();
            this.onBlur.emit(this.formValue);
        }
        /**
         * @name hasErrors
         */
        hasErrors() {
            return !!this.inputForm && this.inputForm.hasErrors();
        }
        /**
         * @name isInputFocused
         */
        isInputFocused() {
            return !!this.inputForm && this.inputForm.isInputFocused();
        }
        /**
         * - this is the one way I found to tell if the template has been passed and it is not
         * the template for the menu item
         * @name hasCustomTemplate
         */
        hasCustomTemplate() {
            const template = this.templates ? this.templates.first : undefined;
            const menuTemplate = this.dropdown && this.dropdown.templates ?
                this.dropdown.templates.first : undefined;
            return Boolean(template && template !== menuTemplate);
        }
        /**
         * @name maxItemsReached
         */
        get maxItemsReached() {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        }
        /**
         * @name formValue
         */
        get formValue() {
            const form = this.inputForm.value;
            return form ? form.value : '';
        }
        /**3
         * @name onDragStarted
         * @param event
         * @param index
         */
        onDragStarted(event, tag, index) {
            event.stopPropagation();
            const item = { zone: this.dragZone, tag, index };
            this.dragProvider.setSender(this);
            this.dragProvider.setDraggedItem(event, item);
            this.dragProvider.setState({ dragging: true, index });
        }
        /**
         * @name onDragOver
         * @param event
         */
        onDragOver(event, index) {
            this.dragProvider.setState({ dropping: true });
            this.dragProvider.setReceiver(this);
            event.preventDefault();
        }
        /**
         * @name onTagDropped
         * @param event
         * @param index
         */
        onTagDropped(event, index) {
            const item = this.dragProvider.getDraggedItem(event);
            if (!item || item.zone !== this.dragZone) {
                return;
            }
            this.dragProvider.onTagDropped(item.tag, item.index, index);
            event.preventDefault();
            event.stopPropagation();
        }
        /**
         * @name isDropping
         */
        isDropping() {
            const isReceiver = this.dragProvider.receiver === this;
            const isDropping = this.dragProvider.getState('dropping');
            return Boolean(isReceiver && isDropping);
        }
        /**
         * @name onTagBlurred
         * @param changedElement {TagModel}
         * @param index {number}
         */
        onTagBlurred(changedElement, index) {
            this.items[index] = changedElement;
            this.blur();
        }
        /**
         * @name trackBy
         * @param items
         */
        trackBy(index, item) {
            return item[this.identifyBy];
        }
        /**
         * @name updateEditedTag
         * @param tag
         */
        updateEditedTag({ tag, index }) {
            this.onTagEdited.emit(tag);
        }
        /**
         * @name moveToTag
         * @param item
         * @param direction
         */
        moveToTag(item, direction) {
            const isLast = this.isLastTag(item);
            const isFirst = this.isFirstTag(item);
            const stopSwitch = (direction === NEXT && isLast) ||
                (direction === PREV && isFirst);
            if (stopSwitch) {
                this.focus(true);
                return;
            }
            const offset = direction === NEXT ? 1 : -1;
            const index = this.getTagIndex(item) + offset;
            const tag = this.getTagAtIndex(index);
            return tag.select.call(tag);
        }
        /**
         * @name isFirstTag
         * @param item {TagModel}
         */
        isFirstTag(item) {
            return this.tags.first.model === item;
        }
        /**
         * @name isLastTag
         * @param item {TagModel}
         */
        isLastTag(item) {
            return this.tags.last.model === item;
        }
        /**
         * @name getTagIndex
         * @param item
         */
        getTagIndex(item) {
            const tags = this.tags.toArray();
            return tags.findIndex(tag => tag.model === item);
        }
        /**
         * @name getTagAtIndex
         * @param index
         */
        getTagAtIndex(index) {
            const tags = this.tags.toArray();
            return tags[index];
        }
        /**
         * @name removeItem
         * @desc removes an item from the array of the model
         * @param tag {TagModel}
         * @param index {number}
         */
        removeItem(tag, index) {
            this.items = this.getItemsWithout(index);
            // if the removed tag was selected, set it as undefined
            if (this.selectedTag === tag) {
                this.selectItem(undefined, false);
            }
            // focus input
            this.focus(true, false);
            // emit remove event
            this.onRemove.emit(tag);
        }
        /**
         * @name addItem
         * @desc adds the current text model to the items array
         * @param fromAutocomplete {boolean}
         * @param item {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */
        addItem(fromAutocomplete = false, item, index, giveupFocus) {
            const display = this.getItemDisplay(item);
            const tag = this.createTag(item);
            if (fromAutocomplete) {
                this.setInputValue(this.getItemValue(item, true));
            }
            return new Promise((resolve, reject) => {
                /**
                 * @name reset
                 */
                const reset = () => {
                    // reset control and focus input
                    this.setInputValue('');
                    if (giveupFocus) {
                        this.focus(false, false);
                    }
                    else {
                        // focus input
                        this.focus(true, false);
                    }
                    resolve(display);
                };
                const appendItem = () => {
                    this.appendTag(tag, index);
                    // emit event
                    this.onAdd.emit(tag);
                    if (!this.dropdown) {
                        return;
                    }
                    this.dropdown.hide();
                    if (this.dropdown.showDropdownIfEmpty) {
                        this.dropdown.show();
                    }
                };
                const status = this.inputForm.form.status;
                const isTagValid = this.isTagValid(tag, fromAutocomplete);
                const onValidationError = () => {
                    this.onValidationError.emit(tag);
                    return reject();
                };
                if (status === 'VALID' && isTagValid) {
                    appendItem();
                    return reset();
                }
                if (status === 'INVALID' || !isTagValid) {
                    reset();
                    return onValidationError();
                }
                if (status === 'PENDING') {
                    const statusUpdate$ = this.inputForm.form.statusChanges;
                    return statusUpdate$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(statusUpdate => statusUpdate !== 'PENDING'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                        .subscribe((statusUpdate) => {
                        if (statusUpdate === 'VALID' && isTagValid) {
                            appendItem();
                            resolve();
                        }
                        else {
                            onValidationError();
                        }
                    });
                }
            });
        }
        /**
         * @name setupSeparatorKeysListener
         */
        setupSeparatorKeysListener() {
            const useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
            const listener = ($event) => {
                const hasKeyCode = this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
                const hasKey = this.separatorKeys.indexOf($event.key) >= 0;
                // the keyCode of keydown event is 229 when IME is processing the key event.
                const isIMEProcessing = $event.keyCode === 229;
                if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                    $event.preventDefault();
                    this.onAddingRequested(false, this.formValue)
                        .catch(() => { });
                }
            };
            listen.call(this, KEYDOWN, listener, useSeparatorKeys);
        }
        /**
         * @name setUpKeypressListeners
         */
        setUpKeypressListeners() {
            const listener = ($event) => {
                const isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
                if (isCorrectKey &&
                    !this.formValue &&
                    this.items.length) {
                    this.tags.last.select.call(this.tags.last);
                }
            };
            // setting up the keypress listeners
            listen.call(this, KEYDOWN, listener);
        }
        /**
         * @name setUpKeydownListeners
         */
        setUpInputKeydownListeners() {
            this.inputForm.onKeydown.subscribe(event => {
                this.fireEvents('keydown', event);
                if (event.key === 'Backspace' && this.formValue.trim() === '') {
                    event.preventDefault();
                }
            });
        }
        /**
         * @name setUpOnPasteListener
         */
        setUpOnPasteListener() {
            const input = this.inputForm.input.nativeElement;
            // attach listener to input
            this.renderer.listen(input, 'paste', (event) => {
                this.onPasteCallback(event);
                event.preventDefault();
                return true;
            });
        }
        /**
         * @name setUpTextChangeSubscriber
         */
        setUpTextChangeSubscriber() {
            this.inputForm.form
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.onTextChangeDebounce))
                .subscribe((value) => {
                this.onTextChange.emit(value.item);
            });
        }
        /**
         * @name setUpOnBlurSubscriber
         */
        setUpOnBlurSubscriber() {
            const filterFn = () => {
                const isVisible = this.dropdown && this.dropdown.isVisible;
                return !isVisible && !!this.formValue;
            };
            this.inputForm
                .onBlur
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFn))
                .subscribe(() => {
                const reset = () => this.setInputValue('');
                if (this.addOnBlur) {
                    return this
                        .onAddingRequested(false, this.formValue, undefined, true)
                        .then(reset)
                        .catch(reset);
                }
                reset();
            });
        }
        /**
         * @name findDupe
         * @param tag
         * @param isFromAutocomplete
         */
        findDupe(tag, isFromAutocomplete) {
            const identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
            const id = tag[identifyBy];
            return this.items.find(item => this.getItemValue(item) === id);
        }
        /**
         * @name setAnimationMetadata
         */
        setAnimationMetadata() {
            this.animationMetadata = {
                value: 'in',
                params: Object.assign({}, this.animationDuration)
            };
        }
    };
    return TagInputComponent;
})();
let DeleteIconComponent = /*@__PURE__*/ (() => {
    let DeleteIconComponent = class DeleteIconComponent {
    };
    return DeleteIconComponent;
})();
const optionsProvider = new OptionsProvider();
let TagInputModule = /*@__PURE__*/ (() => {
    let TagInputModule = class TagInputModule {
        /**
         * @name withDefaults
         * @param options {Options}
         */
        static withDefaults(options) {
            optionsProvider.setOptions(options);
        }
    };
    return TagInputModule;
})();
/**
 * Generated bundle index. Do not edit.
 */






/***/ })

}]);
//# sourceMappingURL=0-es2015.39e5be5076a2b7220a3d.js.map