(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ng-stack/forms/fesm5/ng-stack-forms.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-stack/forms/fesm5/ng-stack-forms.js ***!
  \**************************************************************/
/*! exports provided: FormArray, FormBuilder, FormControl, FormGroup, InputFileDirective, NgStackFormsModule, Validators, ValidatorsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileDirective", function() { return InputFileDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStackFormsModule", function() { return NgStackFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsModel", function() { return ValidatorsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormBuilder = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormBuilder, _super);
    function FormBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * - `validators`: A synchronous validator function, or an array of validator functions
     * - `asyncValidators`: A single async validator or array of async validator functions
     * - `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * - `validator`: A synchronous validator function, or an array of validator functions
     * - `asyncValidator`: A single async validator or array of async validator functions
     */
    FormBuilder.prototype.group = function (controlsConfig, options) {
        if (options === void 0) {
            options = null;
        }
        return _super.prototype.group.call(this, controlsConfig, options);
    };
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
  ```ts
  import {Component, Inject} from '@angular/core';
  import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
  // ...
  @Component({
    selector: 'app-disabled-form-control',
    template: `
      <input [formControl]="control" placeholder="First">
    `
  })
  export class DisabledFormControlComponent {
    control: FormControl;
  
    constructor(private fb: FormBuilder) {
      this.control = fb.control({value: 'my val', disabled: true});
    }
  }
  ```
     */
    FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) {
            formState = null;
        }
        return _super.prototype.control.call(this, formState, validatorOrOpts, asyncValidator);
    };
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */
    FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
        return _super.prototype.array.call(this, controlsConfig, validatorOrOpts, asyncValidator);
    };
    return FormBuilder;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
var InputFileDirective = /** @class */ /*@__PURE__*/ (function () {
    function InputFileDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    InputFileDirective_1 = InputFileDirective;
    /**
     * Callback function that should be called when
     * the control's value changes in the UI.
     */
    InputFileDirective.prototype.callOnChange = function (event) {
        this.onTouched();
        var files = Array.from(this.elementRef.nativeElement.files);
        var formData = new FormData();
        var formInputName = this.elementRef.nativeElement.name || 'uploadFile';
        if (this.multiple !== undefined && this.multiple !== false && this.multiple !== 'false') {
            formInputName += '[]';
        }
        files.forEach(function (file) { return formData.append(formInputName, file); });
        this.onChange(formData);
        this.select.next(files);
        event.target.value = null;
    };
    /**
     * Writes a new value to the element.
     * This method will be called by the forms API to write
     * to the view when programmatic (model -> view) changes are requested.
     *
     * See: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor#members)
     */
    InputFileDirective.prototype.writeValue = function (fileList) {
        if (fileList && !(fileList instanceof FileList)) {
            throw new TypeError('Value for input[type=file] must be an instance of FileList');
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'files', fileList);
    };
    /**
     * Registers a callback function that should be called when
     * the control's value changes in the UI.
     *
     * This is called by the forms API on initialization so it can update
     * the form model when values propagate from the view (view -> model).
     */
    InputFileDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Registers a callback function that should be called when the control receives a change event.
     * This is called by the forms API on initialization so it can update the form model on change.
     */
    InputFileDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var InputFileDirective_1;
    return InputFileDirective;
}());
var NgStackFormsModule = /** @class */ /*@__PURE__*/ (function () {
    function NgStackFormsModule() {
    }
    return NgStackFormsModule;
}());
var FormArray = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArray, _super);
    /**
     * Creates a new `FormArray` instance.
     *
     * @param controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.controls = controls;
        return _this;
    }
    /**
     * Get the Control at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    FormArray.prototype.at = function (index) {
        return _super.prototype.at.call(this, index);
    };
    /**
     * Insert a new Control at the end of the array.
     *
     * @param control Form control to be inserted
     */
    FormArray.prototype.push = function (control) {
        return _super.prototype.push.call(this, control);
    };
    /**
     * Insert a new Control at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    FormArray.prototype.insert = function (index, control) {
        return _super.prototype.insert.call(this, index, control);
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The Control control to replace the existing control
     */
    FormArray.prototype.setControl = function (index, control) {
        return _super.prototype.setControl.call(this, index, control);
    };
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * ### Set the values for the controls in the form array
     *
  ```ts
  const arr = new FormArray([
    new FormControl(),
    new FormControl()
  ]);
  console.log(arr.value);   // [null, null]
  
  arr.setValue(['Nancy', 'Drew']);
  console.log(arr.value);   // ['Nancy', 'Drew']
  ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     */
    FormArray.prototype.setValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.setValue.call(this, value, options);
    };
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * ### Patch the values for controls in a form array
     *
  ```ts
  const arr = new FormArray([
     new FormControl(),
     new FormControl()
  ]);
  console.log(arr.value);   // [null, null]
  
  arr.patchValue(['Nancy']);
  console.log(arr.value);   // ['Nancy', null]
  ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     */
    FormArray.prototype.patchValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.patchValue.call(this, value, options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Reset the values in a form array
     *
  ```ts
  const arr = new FormArray([
     new FormControl(),
     new FormControl()
  ]);
  arr.reset(['name', 'last name']);
  
  console.log(this.arr.value);  // ['name', 'last name']
  ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
  ```
  this.arr.reset([
    {value: 'name', disabled: true},
    'last'
  ]);
  
  console.log(this.arr.value);  // ['name', 'last name']
  console.log(this.arr.get(0).status);  // 'DISABLED'
  ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) {
            value = [];
        }
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.reset.call(this, value, options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    FormArray.prototype.getRawValue = function () {
        return _super.prototype.getRawValue.call(this);
    };
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    FormArray.prototype.setValidators = function (newValidator) {
        return _super.prototype.setValidators.call(this, newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    FormArray.prototype.setAsyncValidators = function (newValidator) {
        return _super.prototype.setAsyncValidators.call(this, newValidator);
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * ### Manually set the errors for a control
     *
     * ```ts
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    FormArray.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) {
            opts = {};
        }
        return _super.prototype.setErrors.call(this, errors, opts);
    };
    /**
     * Reports error data for the control with the given controlName.
     *
     * @param errorCode The code of the error to check
     * @param controlName A control name that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * For example, for the following `FormGroup`:
     *
  ```ts
  form = new FormGroup({
    address: new FormGroup({ street: new FormControl() })
  });
  ```
     *
     * The controlName to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in combination with `get()` method:
     *
  ```ts
  form.get('address').getError('someErrorCode', 'street');
  ```
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    FormArray.prototype.getError = function (errorCode, controlName) {
        return _super.prototype.getError.call(this, errorCode, controlName);
    };
    /**
     * Reports whether the control with the given controlName has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param controlName A control name that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * For example, for the following `FormGroup`:
     *
  ```ts
  form = new FormGroup({
    address: new FormGroup({ street: new FormControl() })
  });
  ```
     *
     * The controlName to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in combination with `get()` method:
  ```ts
  form.get('address').hasError('someErrorCode', 'street');
  ```
     *
     * If no controlName is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given controlName.
     *
     * If the control is not present, false is returned.
     */
    FormArray.prototype.hasError = function (errorCode, controlName) {
        return _super.prototype.hasError.call(this, errorCode, controlName);
    };
    return FormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]));
var FormControl = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControl, _super);
    /**
     * Creates a new `FormControl` instance.
     *
     * @param formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) {
            formState = null;
        }
        return _super.call(this, formState, validatorOrOpts, asyncValidator) || this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    FormControl.prototype.setValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.setValue.call(this, value, options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as [setValue](https://angular.io/api/forms/FormControl#setValue) at this level.
     * It exists for symmetry with [patchValue](https://angular.io/api/forms/FormGroup#patchValue) on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * See also: `setValue` for options
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.patchValue.call(this, value, options);
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) {
            formState = null;
        }
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.reset.call(this, formState, options);
    };
    /**
     * In `FormControl`, this method always returns `null`.
     */
    FormControl.prototype.get = function () {
        return null;
    };
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    FormControl.prototype.setValidators = function (newValidator) {
        return _super.prototype.setValidators.call(this, newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    FormControl.prototype.setAsyncValidators = function (newValidator) {
        return _super.prototype.setAsyncValidators.call(this, newValidator);
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * ### Manually set the errors for a control
     *
     * ```ts
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    FormControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) {
            opts = {};
        }
        return _super.prototype.setErrors.call(this, errors, opts);
    };
    /**
     * Reports error data for the current control.
     *
     * @param errorCode The code of the error to check.
     *
     * @returns error data for that particular error. If an error is not present,
     * null is returned.
     */
    FormControl.prototype.getError = function (errorCode) {
        return _super.prototype.getError.call(this, errorCode);
    };
    /**
     * Reports whether the current control has the error specified.
     *
     * @param errorCode The code of the error to check.
     *
     * @returns whether the given error is present in the current control.
     *
     * If an error is not present, false is returned.
     */
    FormControl.prototype.hasError = function (errorCode) {
        return _super.prototype.hasError.call(this, errorCode);
    };
    return FormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]));
var FormGroup = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroup, _super);
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     * @todo Chechout how to respect optional and require properties modifyers for the controls.
     */
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.controls = controls;
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use [addControl](https://angular.io/api/forms/FormGroup#addControl) instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.registerControl = function (name, control) {
        return _super.prototype.registerControl.call(this, name, control);
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.addControl = function (name, control) {
        return _super.prototype.addControl.call(this, name, control);
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    FormGroup.prototype.removeControl = function (name) {
        return _super.prototype.removeControl.call(this, name);
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.setControl = function (name, control) {
        return _super.prototype.setControl.call(this, name, control);
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use [get](https://angular.io/api/forms/AbstractControl#get) instead.
     *
     * @param name The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    FormGroup.prototype.contains = function (name) {
        return _super.prototype.contains.call(this, name);
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * ### Set the complete value for the form group
     *
  ```ts
  const form = new FormGroup({
    first: new FormControl(),
    last: new FormControl()
  });
  
  console.log(form.value);   // {first: null, last: null}
  
  form.setValue({first: 'Nancy', last: 'Drew'});
  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
  ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    FormGroup.prototype.setValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.setValue.call(this, value, options);
    };
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * ### Patch the value for a form group
     *
  ```ts
  const form = new FormGroup({
     first: new FormControl(),
     last: new FormControl()
  });
  console.log(form.value);   // {first: null, last: null}
  
  form.patchValue({first: 'Nancy'});
  console.log(form.value);   // {first: 'Nancy', last: null}
  ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     */
    FormGroup.prototype.patchValue = function (value, options) {
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.patchValue.call(this, value, options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the
     * [updateValueAndValidity](https://angular.io/api/forms/AbstractControl#updateValueAndValidity) method.
     *
     *
     * ### Reset the form group values
     *
  ```ts
  const form = new FormGroup({
    first: new FormControl('first name'),
    last: new FormControl('last name')
  });
  
  console.log(form.value);  // {first: 'first name', last: 'last name'}
  
  form.reset({ first: 'name', last: 'last name' });
  
  console.log(form.value);  // {first: 'name', last: 'last name'}
  ```
     *
     * ### Reset the form group values and disabled status
     *
  ```ts
  const form = new FormGroup({
    first: new FormControl('first name'),
    last: new FormControl('last name')
  });
  
  form.reset({
    first: {value: 'name', disabled: true},
    last: 'last'
  });
  
  console.log(this.form.value);  // {first: 'name', last: 'last name'}
  console.log(this.form.get('first').status);  // 'DISABLED'
  ```
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) {
            value = {};
        }
        if (options === void 0) {
            options = {};
        }
        return _super.prototype.reset.call(this, value, options);
    };
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    FormGroup.prototype.getRawValue = function () {
        return _super.prototype.getRawValue.call(this);
    };
    /**
     * Retrieves a child control given the control's name.
     *
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
  ```ts
  this.form.get('person').get('name');
  ```
     */
    FormGroup.prototype.get = function (controlName) {
        return _super.prototype.get.call(this, controlName);
    };
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    FormGroup.prototype.setValidators = function (newValidator) {
        return _super.prototype.setValidators.call(this, newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    FormGroup.prototype.setAsyncValidators = function (newValidator) {
        return _super.prototype.setAsyncValidators.call(this, newValidator);
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * ### Manually set the errors for a control
     *
     * ```ts
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    FormGroup.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) {
            opts = {};
        }
        return _super.prototype.setErrors.call(this, errors, opts);
    };
    /**
     * Reports error data for the control with the given controlName.
     *
     * @param errorCode The code of the error to check
     * @param controlName A control name that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * For example, for the following `FormGroup`:
     *
  ```ts
  form = new FormGroup({
    address: new FormGroup({ street: new FormControl() })
  });
  ```
     *
     * The controlName to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in combination with `get()` method:
     *
  ```ts
  form.get('address').getError('someErrorCode', 'street');
  ```
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    FormGroup.prototype.getError = function (errorCode, controlName) {
        return _super.prototype.getError.call(this, errorCode, controlName);
    };
    /**
     * Reports whether the control with the given controlName has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param controlName A control name that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * For example, for the following `FormGroup`:
     *
  ```ts
  form = new FormGroup({
    address: new FormGroup({ street: new FormControl() })
  });
  ```
     *
     * The controlName to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in combination with `get()` method:
  ```ts
  form.get('address').hasError('someErrorCode', 'street');
  ```
     *
     * If no controlName is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given controlName.
     *
     * If the control is not present, false is returned.
     */
    FormGroup.prototype.hasError = function (errorCode, controlName) {
        return _super.prototype.hasError.call(this, errorCode, controlName);
    };
    return FormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]));
// Next flag used because of this https://github.com/ng-packagr/ng-packagr/issues/696#issuecomment-373487183
// @dynamic
/**
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * See also [Form Validation](https://angular.io/guide/form-validation).
 */
var Validators = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Validators, _super);
    function Validators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * ### Validate against a minimum of 3
     *
     * ```ts
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.min = function (min) {
        return _super.min.call(this, min);
    };
    /**
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * ### Validate against a maximum of 15
     *
     * ```ts
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.max = function (max) {
        return _super.max.call(this, max);
    };
    /**
     * Validator that requires the control have a non-empty value.
     *
     * ### Validate that the field is non-empty
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (control) {
        return _super.required.call(this, control);
    };
    /**
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     */
    Validators.requiredTrue = function (control) {
        return _super.requiredTrue.call(this, control);
    };
    /**
     * Validator that requires the control's value pass an email validation test.
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        return _super.email.call(this, control);
    };
    /**
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.minLength = function (minLength) {
        return _super.minLength.call(this, minLength);
    };
    /**
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     */
    Validators.maxLength = function (maxLength) {
        return _super.maxLength.call(this, maxLength);
    };
    /**
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * Note that if a Regexp is provided, the Regexp is used as is to test the values. On the other
     * hand, if a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     */
    Validators.pattern = function (pattern) {
        return _super.pattern.call(this, pattern);
    };
    /**
     * Validator that performs no operation.
     */
    Validators.nullValidator = function (control) {
        return null;
    };
    Validators.compose = function (validators) {
        return _super.compose.call(this, validators);
    };
    /**
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    Validators.composeAsync = function (validators) {
        return _super.composeAsync.call(this, validators);
    };
    /**
     * At least one file should be.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    Validators.fileRequired = function (formControl) {
        var e_1, _a;
        if (!(formControl.value instanceof FormData)) {
            return { fileRequired: true };
        }
        var files = [];
        formControl.value.forEach(function (file) { return files.push(file); });
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                if (file instanceof File) {
                    return null;
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return))
                    _a.call(files_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        return { fileRequired: true };
    };
    /**
     * Minimal number of files.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    Validators.filesMinLength = function (minLength) {
        return function (formControl) {
            var value = formControl.value;
            if (minLength < 1) {
                return null;
            }
            if (!value || !(value instanceof FormData)) {
                return { filesMinLength: { requiredLength: minLength, actualLength: 0 } };
            }
            var files = [];
            value.forEach(function (file) { return files.push(file); });
            var len = files.length;
            if (len < minLength) {
                return { filesMinLength: { requiredLength: minLength, actualLength: len } };
            }
            return null;
        };
    };
    /**
     * Maximal number of files.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    Validators.filesMaxLength = function (maxLength) {
        return function (formControl) {
            if (!(formControl.value instanceof FormData)) {
                return null;
            }
            var files = [];
            formControl.value.forEach(function (file) { return files.push(file); });
            var len = files.length;
            if (len > maxLength) {
                return { filesMaxLength: { requiredLength: maxLength, actualLength: len } };
            }
            return null;
        };
    };
    /**
     * Maximal size of a file.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    Validators.fileMaxSize = function (maxSize) {
        return function (formControl) {
            var e_2, _a;
            if (!(formControl.value instanceof FormData)) {
                return null;
            }
            var files = [];
            formControl.value.forEach(function (file) { return files.push(file); });
            try {
                for (var files_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_2_1 = files_2.next(); !files_2_1.done; files_2_1 = files_2.next()) {
                    var file = files_2_1.value;
                    if (file instanceof File && file.size > maxSize) {
                        return { fileMaxSize: { requiredSize: maxSize, actualSize: file.size, file: file } };
                    }
                }
            }
            catch (e_2_1) {
                e_2 = { error: e_2_1 };
            }
            finally {
                try {
                    if (files_2_1 && !files_2_1.done && (_a = files_2.return))
                        _a.call(files_2);
                }
                finally {
                    if (e_2)
                        throw e_2.error;
                }
            }
            return null;
        };
    };
    return Validators;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"]));
var sym = Symbol();
/**
 * The default validators model, it includes almost all properties of `typeof Validators`,
 * excludes: `prototype`, `compose`, `composeAsync` and `nullValidator`.
 *
 * ### Usage
 *
```ts
const formControl = new FormControl<string, ValidatorsModel>('some value');
// OR
const formGroup = new FormGroup<any, ValidatorsModel>({});
// OR
const formArray = new FormArray<any, ValidatorsModel>([]);
```
 */
var ValidatorsModel = /** @class */ /*@__PURE__*/ (function () {
    function ValidatorsModel() {
    }
    return ValidatorsModel;
}());
/*
 * Public API Surface of forms
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-stack-forms.js.map


/***/ }),

/***/ "./src/app/shared/components/input-validation/input-validation.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/input-validation/input-validation.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_InputValidationComponent, View_InputValidationComponent_0, View_InputValidationComponent_Host_0, InputValidationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InputValidationComponent", function() { return RenderType_InputValidationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputValidationComponent_0", function() { return View_InputValidationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputValidationComponent_Host_0", function() { return View_InputValidationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidationComponentNgFactory", function() { return InputValidationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-validation */ "./src/app/shared/components/input-validation/input-validation.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_InputValidationComponent = [];
var RenderType_InputValidationComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_InputValidationComponent, data: {} });

function View_InputValidationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMsgs[_v.context.$implicit]; _ck(_v, 2, 0, currVal_0); }); }
function View_InputValidationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputValidationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ObjectKeys(_co.control.errors); _ck(_v, 2, 0, currVal_0); }, null); }
function View_InputValidationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputValidationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorValidation(_co.control); _ck(_v, 1, 0, currVal_0); }, null); }
function View_InputValidationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-input-validation", [], null, null, null, View_InputValidationComponent_0, RenderType_InputValidationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _input_validation__WEBPACK_IMPORTED_MODULE_2__["InputValidationComponent"], [], null, null)], null, null); }
var InputValidationComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-input-validation", _input_validation__WEBPACK_IMPORTED_MODULE_2__["InputValidationComponent"], View_InputValidationComponent_Host_0, { control: "control", errorMsgs: "errorMsgs", errorValidation: "errorValidation" }, {}, []);



/***/ }),

/***/ "./src/app/shared/components/input-validation/input-validation.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/input-validation/input-validation.ts ***!
  \************************************************************************/
/*! exports provided: InputValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidationComponent", function() { return InputValidationComponent; });
/* harmony import */ var _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/validators/form.utils */ "./src/app/shared/validators/form.utils.ts");

var InputValidationComponent = /** @class */ /*@__PURE__*/ (function () {
    function InputValidationComponent() {
        this.errorMsgs = {};
        this.errorValidation = _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtil"].errorValidation;
        this.ObjectKeys = Object.keys;
    }
    return InputValidationComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/numberCheck/numbers-only.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/directives/numberCheck/numbers-only.directive.ts ***!
  \*************************************************************************/
/*! exports provided: NumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NumberDirective = /** @class */ /*@__PURE__*/ (function () {
    function NumberDirective(_el) {
        this._el = _el;
    }
    NumberDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    return NumberDirective;
}());



/***/ }),

/***/ "./src/app/shared/validators/form.utils.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/validators/form.utils.ts ***!
  \*************************************************/
/*! exports provided: FormUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtil", function() { return FormUtil; });
/* harmony import */ var _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-stack/forms */ "./node_modules/@ng-stack/forms/fesm5/ng-stack-forms.js");

var FormUtil = /** @class */ /*@__PURE__*/ (function () {
    function FormUtil() {
    }
    FormUtil.errorValidation = function (formControl) {
        return formControl.invalid && formControl.touched;
    };
    FormUtil.errorValidationDirty = function (formControl) {
        return formControl.invalid && formControl.touched && formControl.dirty;
    };
    FormUtil.emptyOrNull = function (formControl) {
        return formControl.value === null || formControl.value === '';
    };
    FormUtil.touchForm = function (form) {
        form.markAsTouched();
        Object.keys(form.controls).forEach(function (control) { return form.controls[control].markAsTouched(); });
    };
    FormUtil.dirtyForm = function (form) {
        form.markAsDirty();
        Object.keys(form.controls).forEach(function (control) { return form.controls[control].markAsDirty(); });
    };
    FormUtil.updateValidationInput = function (input) {
        input.updateValueAndValidity();
        input.markAsDirty();
        input.markAsTouched();
    };
    FormUtil.requiredEnabled = function (control) {
        control.setValidators([_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        control.enable();
    };
    FormUtil.notRequiredEnabled = function (control) {
        control.clearValidators();
        control.enable();
    };
    FormUtil.notRequiredDisabled = function (control) {
        control.clearValidators();
        control.disable();
    };
    FormUtil.isoDateStringToBrDateString = function (isoDate) {
        if (!isoDate || isoDate === '') {
            return '';
        }
        var dateMs = Date.parse(isoDate);
        var date = new Date(dateMs);
        return (date.getUTCDate().toString().padStart(2, '0') + '/' +
            (date.getUTCMonth() + 1).toString().padStart(2, '0') + '/' +
            date.getUTCFullYear().toString());
    };
    FormUtil.brDateStringToIsoDateString = function (brDate) {
        var date = brDate.split('/');
        return date[2] + '-' + date[1] + '-' + date[0];
    };
    FormUtil.validateForm = function (form) {
        FormUtil.touchForm(form);
        FormUtil.dirtyForm(form);
        return form.valid;
    };
    FormUtil.resetValueAndValidators = function (control) {
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity();
    };
    return FormUtil;
}());



/***/ })

}]);