(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ng-stack/forms/fesm2015/ng-stack-forms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ng-stack/forms/fesm2015/ng-stack-forms.js ***!
  \*****************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let FormBuilder = class FormBuilder extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] {
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
    group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
    }
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
    control(formState = null, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
    }
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
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
    }
};
FormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FormBuilder);

var InputFileDirective_1;
let InputFileDirective = InputFileDirective_1 = class InputFileDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    /**
     * Callback function that should be called when
     * the control's value changes in the UI.
     */
    callOnChange(event) {
        this.onTouched();
        const files = Array.from(this.elementRef.nativeElement.files);
        const formData = new FormData();
        let formInputName = this.elementRef.nativeElement.name || 'uploadFile';
        if (this.multiple !== undefined && this.multiple !== false && this.multiple !== 'false') {
            formInputName += '[]';
        }
        files.forEach(file => formData.append(formInputName, file));
        this.onChange(formData);
        this.select.next(files);
        event.target.value = null;
    }
    /**
     * Writes a new value to the element.
     * This method will be called by the forms API to write
     * to the view when programmatic (model -> view) changes are requested.
     *
     * See: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor#members)
     */
    writeValue(fileList) {
        if (fileList && !(fileList instanceof FileList)) {
            throw new TypeError('Value for input[type=file] must be an instance of FileList');
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'files', fileList);
    }
    /**
     * Registers a callback function that should be called when
     * the control's value changes in the UI.
     *
     * This is called by the forms API on initialization so it can update
     * the form model when values propagate from the view (view -> model).
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Registers a callback function that should be called when the control receives a change event.
     * This is called by the forms API on initialization so it can update the form model on change.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
InputFileDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], InputFileDirective.prototype, "multiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], InputFileDirective.prototype, "select", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], InputFileDirective.prototype, "callOnChange", null);
InputFileDirective = InputFileDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: `
  input[type=file][ngModel],
  input[type=file][formControl],
  input[type=file][formControlName]`,
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputFileDirective_1), multi: true }],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], InputFileDirective);

let NgStackFormsModule = class NgStackFormsModule {
};
NgStackFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [InputFileDirective],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], InputFileDirective],
        providers: [FormBuilder],
    })
], NgStackFormsModule);

class FormArray extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] {
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
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(controls, validatorOrOpts, asyncValidator);
        this.controls = controls;
    }
    /**
     * Get the Control at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    at(index) {
        return super.at(index);
    }
    /**
     * Insert a new Control at the end of the array.
     *
     * @param control Form control to be inserted
     */
    push(control) {
        return super.push(control);
    }
    /**
     * Insert a new Control at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    insert(index, control) {
        return super.insert(index, control);
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The Control control to replace the existing control
     */
    setControl(index, control) {
        return super.setControl(index, control);
    }
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
    setValue(value, options = {}) {
        return super.setValue(value, options);
    }
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
    patchValue(value, options = {}) {
        return super.patchValue(value, options);
    }
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
    reset(value = [], options = {}) {
        return super.reset(value, options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    getRawValue() {
        return super.getRawValue();
    }
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    setValidators(newValidator) {
        return super.setValidators(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    setAsyncValidators(newValidator) {
        return super.setAsyncValidators(newValidator);
    }
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
    setErrors(errors, opts = {}) {
        return super.setErrors(errors, opts);
    }
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
    getError(errorCode, controlName) {
        return super.getError(errorCode, controlName);
    }
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
    hasError(errorCode, controlName) {
        return super.hasError(errorCode, controlName);
    }
}

class FormControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] {
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
    constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(formState, validatorOrOpts, asyncValidator);
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
    setValue(value, options = {}) {
        return super.setValue(value, options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as [setValue](https://angular.io/api/forms/FormControl#setValue) at this level.
     * It exists for symmetry with [patchValue](https://angular.io/api/forms/FormGroup#patchValue) on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * See also: `setValue` for options
     */
    patchValue(value, options = {}) {
        return super.patchValue(value, options);
    }
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
    reset(formState = null, options = {}) {
        return super.reset(formState, options);
    }
    /**
     * In `FormControl`, this method always returns `null`.
     */
    get() {
        return null;
    }
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    setValidators(newValidator) {
        return super.setValidators(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    setAsyncValidators(newValidator) {
        return super.setAsyncValidators(newValidator);
    }
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
    setErrors(errors, opts = {}) {
        return super.setErrors(errors, opts);
    }
    /**
     * Reports error data for the current control.
     *
     * @param errorCode The code of the error to check.
     *
     * @returns error data for that particular error. If an error is not present,
     * null is returned.
     */
    getError(errorCode) {
        return super.getError(errorCode);
    }
    /**
     * Reports whether the current control has the error specified.
     *
     * @param errorCode The code of the error to check.
     *
     * @returns whether the given error is present in the current control.
     *
     * If an error is not present, false is returned.
     */
    hasError(errorCode) {
        return super.hasError(errorCode);
    }
}

class FormGroup extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] {
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
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(controls, validatorOrOpts, asyncValidator);
        this.controls = controls;
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
    registerControl(name, control) {
        return super.registerControl(name, control);
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    addControl(name, control) {
        return super.addControl(name, control);
    }
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    removeControl(name) {
        return super.removeControl(name);
    }
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    setControl(name, control) {
        return super.setControl(name, control);
    }
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
    contains(name) {
        return super.contains(name);
    }
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
    setValue(value, options = {}) {
        return super.setValue(value, options);
    }
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
    patchValue(value, options = {}) {
        return super.patchValue(value, options);
    }
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
    reset(value = {}, options = {}) {
        return super.reset(value, options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    getRawValue() {
        return super.getRawValue();
    }
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
    get(controlName) {
        return super.get(controlName);
    }
    /**
     * Sets the synchronous validators that are active on this control. Calling
     * this overwrites any existing sync validators.
     */
    setValidators(newValidator) {
        return super.setValidators(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    setAsyncValidators(newValidator) {
        return super.setAsyncValidators(newValidator);
    }
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
    setErrors(errors, opts = {}) {
        return super.setErrors(errors, opts);
    }
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
    getError(errorCode, controlName) {
        return super.getError(errorCode, controlName);
    }
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
    hasError(errorCode, controlName) {
        return super.hasError(errorCode, controlName);
    }
}

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
class Validators extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"] {
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
    static min(min) {
        return super.min(min);
    }
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
    static max(max) {
        return super.max(max);
    }
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
    static required(control) {
        return super.required(control);
    }
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
    static requiredTrue(control) {
        return super.requiredTrue(control);
    }
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
    static email(control) {
        return super.email(control);
    }
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
    static minLength(minLength) {
        return super.minLength(minLength);
    }
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
    static maxLength(maxLength) {
        return super.maxLength(maxLength);
    }
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
    static pattern(pattern) {
        return super.pattern(pattern);
    }
    /**
     * Validator that performs no operation.
     */
    static nullValidator(control) {
        return null;
    }
    static compose(validators) {
        return super.compose(validators);
    }
    /**
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    static composeAsync(validators) {
        return super.composeAsync(validators);
    }
    /**
     * At least one file should be.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    static fileRequired(formControl) {
        if (!(formControl.value instanceof FormData)) {
            return { fileRequired: true };
        }
        const files = [];
        formControl.value.forEach((file) => files.push(file));
        for (const file of files) {
            if (file instanceof File) {
                return null;
            }
        }
        return { fileRequired: true };
    }
    /**
     * Minimal number of files.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    static filesMinLength(minLength) {
        return (formControl) => {
            const value = formControl.value;
            if (minLength < 1) {
                return null;
            }
            if (!value || !(value instanceof FormData)) {
                return { filesMinLength: { requiredLength: minLength, actualLength: 0 } };
            }
            const files = [];
            value.forEach((file) => files.push(file));
            const len = files.length;
            if (len < minLength) {
                return { filesMinLength: { requiredLength: minLength, actualLength: len } };
            }
            return null;
        };
    }
    /**
     * Maximal number of files.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    static filesMaxLength(maxLength) {
        return (formControl) => {
            if (!(formControl.value instanceof FormData)) {
                return null;
            }
            const files = [];
            formControl.value.forEach((file) => files.push(file));
            const len = files.length;
            if (len > maxLength) {
                return { filesMaxLength: { requiredLength: maxLength, actualLength: len } };
            }
            return null;
        };
    }
    /**
     * Maximal size of a file.
     *
     * **Note**: use this validator when `formControl.value` is an instance of `FormData` only.
     */
    static fileMaxSize(maxSize) {
        return (formControl) => {
            if (!(formControl.value instanceof FormData)) {
                return null;
            }
            const files = [];
            formControl.value.forEach((file) => files.push(file));
            for (const file of files) {
                if (file instanceof File && file.size > maxSize) {
                    return { fileMaxSize: { requiredSize: maxSize, actualSize: file.size, file } };
                }
            }
            return null;
        };
    }
}

const sym = Symbol();
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
class ValidatorsModel {
}

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-validation */ "./src/app/shared/components/input-validation/input-validation.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_InputValidationComponent = [];
var RenderType_InputValidationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_InputValidationComponent, data: {} });

function View_InputValidationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMsgs[_v.context.$implicit]; _ck(_v, 2, 0, currVal_0); }); }
function View_InputValidationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputValidationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ObjectKeys(_co.control.errors); _ck(_v, 2, 0, currVal_0); }, null); }
function View_InputValidationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputValidationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorValidation(_co.control); _ck(_v, 1, 0, currVal_0); }, null); }
function View_InputValidationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-input-validation", [], null, null, null, View_InputValidationComponent_0, RenderType_InputValidationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _input_validation__WEBPACK_IMPORTED_MODULE_2__["InputValidationComponent"], [], null, null)], null, null); }
var InputValidationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-input-validation", _input_validation__WEBPACK_IMPORTED_MODULE_2__["InputValidationComponent"], View_InputValidationComponent_Host_0, { control: "control", errorMsgs: "errorMsgs", errorValidation: "errorValidation" }, {}, []);



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

class InputValidationComponent {
    constructor() {
        this.errorMsgs = {};
        this.errorValidation = _shared_validators_form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtil"].errorValidation;
        this.ObjectKeys = Object.keys;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}


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
/* harmony import */ var _ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-stack/forms */ "./node_modules/@ng-stack/forms/fesm2015/ng-stack-forms.js");

class FormUtil {
    static errorValidation(formControl) {
        return formControl.invalid && formControl.touched;
    }
    static errorValidationDirty(formControl) {
        return formControl.invalid && formControl.touched && formControl.dirty;
    }
    static emptyOrNull(formControl) {
        return formControl.value === null || formControl.value === '';
    }
    static touchForm(form) {
        form.markAsTouched();
        Object.keys(form.controls).forEach(control => form.controls[control].markAsTouched());
    }
    static dirtyForm(form) {
        form.markAsDirty();
        Object.keys(form.controls).forEach(control => form.controls[control].markAsDirty());
    }
    static updateValidationInput(input) {
        input.updateValueAndValidity();
        input.markAsDirty();
        input.markAsTouched();
    }
    static requiredEnabled(control) {
        control.setValidators([_ng_stack_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        control.enable();
    }
    static notRequiredEnabled(control) {
        control.clearValidators();
        control.enable();
    }
    static notRequiredDisabled(control) {
        control.clearValidators();
        control.disable();
    }
    static isoDateStringToBrDateString(isoDate) {
        if (!isoDate || isoDate === '') {
            return '';
        }
        const dateMs = Date.parse(isoDate);
        const date = new Date(dateMs);
        return (date.getUTCDate().toString().padStart(2, '0') + '/' +
            (date.getUTCMonth() + 1).toString().padStart(2, '0') + '/' +
            date.getUTCFullYear().toString());
    }
    static brDateStringToIsoDateString(brDate) {
        const date = brDate.split('/');
        return date[2] + '-' + date[1] + '-' + date[0];
    }
    static validateForm(form) {
        FormUtil.touchForm(form);
        FormUtil.dirtyForm(form);
        return form.valid;
    }
    static resetValueAndValidators(control) {
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity();
    }
}


/***/ })

}]);
//# sourceMappingURL=8-es2015.779d7d093cd3fc869ab3.js.map