(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js ***!
  \**********************************************************************/
/*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
function supportsAutomaticRotation() {
    return new Promise(( /**
     * @param {?} resolve
     * @return {?}
     */(resolve) => {
        /** @type {?} */
        const img = new Image();
        img.onload = ( /**
         * @return {?}
         */() => {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            const supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2: return { rotate: 0, flip: true };
        case 3: return { rotate: 2, flip: false };
        case 4: return { rotate: 2, flip: true };
        case 5: return { rotate: 1, flip: true };
        case 6: return { rotate: 1, flip: false };
        case 7: return { rotate: 3, flip: true };
        case 8: return { rotate: 3, flip: false };
        default: return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    const length = view.byteLength;
    /** @type {?} */
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    const binaryString = atob(imageBase64);
    /** @type {?} */
    const len = binaryString.length;
    /** @type {?} */
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    const width_source = canvas.width;
    /** @type {?} */
    const height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    const ratio_w = width_source / width;
    /** @type {?} */
    const ratio_h = height_source / height;
    /** @type {?} */
    const ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    const ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    const ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        const img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        const img2 = ctx.createImageData(width, height);
        /** @type {?} */
        const data = img.data;
        /** @type {?} */
        const data2 = img2.data;
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                /** @type {?} */
                const x2 = (i + j * width) * 4;
                /** @type {?} */
                const center_y = j * ratio_h;
                /** @type {?} */
                let weight = 0;
                /** @type {?} */
                let weights = 0;
                /** @type {?} */
                let weights_alpha = 0;
                /** @type {?} */
                let gx_r = 0;
                /** @type {?} */
                let gx_g = 0;
                /** @type {?} */
                let gx_b = 0;
                /** @type {?} */
                let gx_a = 0;
                /** @type {?} */
                const xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                const yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                let xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                let yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (let yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    const dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    const center_x = i * ratio_w;
                    /** @type {?} */
                    const w0 = dy * dy;
                    for (let xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        const dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        const w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        const pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MoveStart() { }
if (false) {}
/** @enum {string} */
const MoveTypes = {
    Move: 'move',
    Resize: 'resize',
    Pinch: 'pinch',
};
let ImageCropperComponent = /*@__PURE__*/ (() => {
    class ImageCropperComponent {
        /**
         * @param {?} sanitizer
         * @param {?} cd
         */
        constructor(sanitizer, cd) {
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.Hammer = typeof window !== 'undefined'
                ? ( /** @type {?} */((( /** @type {?} */(window))).Hammer))
                : null;
            this.setImageMaxSizeRetries = 0;
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
            this.exifTransform = { rotate: 0, flip: false };
            this.autoRotateSupported = supportsAutomaticRotation();
            this.stepSize = 3;
            this.marginLeft = '0px';
            this.imageVisible = false;
            this.moveTypes = MoveTypes;
            this.format = 'png';
            this.maintainAspectRatio = true;
            this.transform = {};
            this.aspectRatio = 1;
            this.resizeToWidth = 0;
            this.resizeToHeight = 0;
            this.cropperMinWidth = 0;
            this.cropperMinHeight = 0;
            this.canvasRotation = 0;
            this.initialStepSize = 3;
            this.roundCropper = false;
            this.onlyScaleDown = false;
            this.imageQuality = 92;
            this.autoCrop = true;
            this.containWithinAspectRatio = false;
            this.hideResizeSquares = false;
            this.cropper = {
                x1: -100,
                y1: -100,
                x2: 10000,
                y2: 10000
            };
            this.alignImage = 'center';
            this.disabled = false;
            this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.initCropper();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            this.onChangesInputImage(changes);
            if (this.originalImage && this.originalImage.complete && this.exifTransform
                && (changes.containWithinAspectRatio || changes.canvasRotation)) {
                this.transformOriginalImage();
            }
            if (changes.cropper) {
                this.setMaxSize();
                this.setCropperScaledMinSize();
                this.checkCropperPosition(false);
                this.doAutoCrop();
                this.cd.markForCheck();
            }
            if (changes.aspectRatio && this.imageVisible) {
                this.resetCropperPosition();
            }
            if (changes.transform) {
                this.transform = this.transform || {};
                this.setCssTransform();
                this.doAutoCrop();
            }
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        onChangesInputImage(changes) {
            if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
                this.initCropper();
            }
            if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
                this.loadImageFile(this.imageChangedEvent.target.files[0]);
            }
            if (changes.imageURL && this.imageURL) {
                this.loadImageFromURL(this.imageURL);
            }
            if (changes.imageBase64 && this.imageBase64) {
                this.loadBase64Image(this.imageBase64);
            }
            if (changes.imageFile && this.imageFile) {
                this.loadImageFile(this.imageFile);
            }
        }
        /**
         * @private
         * @return {?}
         */
        isValidImageChangedEvent() {
            return this.imageChangedEvent
                && this.imageChangedEvent.target
                && this.imageChangedEvent.target.files
                && this.imageChangedEvent.target.files.length > 0;
        }
        /**
         * @private
         * @return {?}
         */
        setCssTransform() {
            this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
                'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
                'rotate(' + (this.transform.rotate || 0) + 'deg)');
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this.stepSize = this.initialStepSize;
            this.activatePinchGesture();
        }
        /**
         * @private
         * @return {?}
         */
        initCropper() {
            this.imageVisible = false;
            this.transformedImage = null;
            this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
                + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
                + 'AAarVyFEAAAAASUVORK5CYII=';
            this.moveStart = {
                active: false,
                type: null,
                position: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                clientX: 0,
                clientY: 0
            };
            this.maxSize = {
                width: 0,
                height: 0
            };
            this.originalSize = {
                width: 0,
                height: 0
            };
            this.transformedSize = {
                width: 0,
                height: 0
            };
            this.cropper.x1 = -100;
            this.cropper.y1 = -100;
            this.cropper.x2 = 10000;
            this.cropper.y2 = 10000;
        }
        /**
         * @private
         * @param {?} imageBase64
         * @param {?} imageType
         * @return {?}
         */
        loadImage(imageBase64, imageType) {
            if (this.isValidImageType(imageType)) {
                this.loadBase64Image(imageBase64);
            }
            else {
                this.loadImageFailed.emit();
            }
        }
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        loadImageFile(file) {
            /** @type {?} */
            const fileReader = new FileReader();
            fileReader.onload = ( /**
             * @param {?} event
             * @return {?}
             */(event) => this.loadImage(event.target.result, file.type));
            fileReader.readAsDataURL(file);
        }
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        isValidImageType(type) {
            return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
        }
        /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */
        loadBase64Image(imageBase64) {
            this.autoRotateSupported
                .then(( /**
         * @param {?} supported
         * @return {?}
         */(supported) => this.checkExifAndLoadBase64Image(imageBase64, supported)))
                .then(( /**
         * @return {?}
         */() => this.transformOriginalImage()))
                .catch(( /**
         * @param {?} error
         * @return {?}
         */(error) => {
                this.loadImageFailed.emit();
                this.originalImage = null;
                this.originalBase64 = null;
                console.error(error);
            }));
        }
        /**
         * @private
         * @param {?} imageBase64
         * @param {?} autoRotateSupported
         * @return {?}
         */
        checkExifAndLoadBase64Image(imageBase64, autoRotateSupported) {
            return new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */(resolve, reject) => {
                this.originalImage = new Image();
                this.originalImage.onload = ( /**
                 * @return {?}
                 */() => {
                    this.originalBase64 = imageBase64;
                    this.exifTransform = getTransformationsFromExifData(autoRotateSupported ? -1 : imageBase64);
                    this.originalSize.width = this.originalImage.naturalWidth;
                    this.originalSize.height = this.originalImage.naturalHeight;
                    resolve();
                });
                this.originalImage.onerror = reject;
                this.originalImage.src = imageBase64;
            }));
        }
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        loadImageFromURL(url) {
            /** @type {?} */
            const img = new Image();
            img.onerror = ( /**
             * @return {?}
             */() => this.loadImageFailed.emit());
            img.onload = ( /**
             * @return {?}
             */() => {
                /** @type {?} */
                const canvas = document.createElement('canvas');
                /** @type {?} */
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                this.loadBase64Image(canvas.toDataURL());
            });
            img.crossOrigin = 'anonymous';
            img.src = url;
        }
        /**
         * @private
         * @return {?}
         */
        getTransformedSize() {
            /** @type {?} */
            const canvasRotation = this.canvasRotation + this.exifTransform.rotate;
            if (this.containWithinAspectRatio) {
                if (canvasRotation % 2) {
                    /** @type {?} */
                    const minWidthToContain = this.originalSize.width * this.aspectRatio;
                    /** @type {?} */
                    const minHeightToContain = this.originalSize.height / this.aspectRatio;
                    return {
                        width: Math.max(this.originalSize.height, minWidthToContain),
                        height: Math.max(this.originalSize.width, minHeightToContain),
                    };
                }
                else {
                    /** @type {?} */
                    const minWidthToContain = this.originalSize.height * this.aspectRatio;
                    /** @type {?} */
                    const minHeightToContain = this.originalSize.width / this.aspectRatio;
                    return {
                        width: Math.max(this.originalSize.width, minWidthToContain),
                        height: Math.max(this.originalSize.height, minHeightToContain),
                    };
                }
            }
            if (canvasRotation % 2) {
                return {
                    height: this.originalSize.width,
                    width: this.originalSize.height,
                };
            }
            return {
                width: this.originalSize.width,
                height: this.originalSize.height,
            };
        }
        /**
         * @private
         * @return {?}
         */
        transformOriginalImage() {
            if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
                return Promise.reject(new Error('No image loaded'));
            }
            /** @type {?} */
            const transformedBase64 = this.transformImageBase64();
            return this.setTransformedImage(transformedBase64);
        }
        /**
         * @private
         * @return {?}
         */
        transformImageBase64() {
            /** @type {?} */
            const canvasRotation = this.canvasRotation + this.exifTransform.rotate;
            /** @type {?} */
            const transformedSize = this.getTransformedSize();
            /** @type {?} */
            const canvas = document.createElement('canvas');
            canvas.width = transformedSize.width;
            canvas.height = transformedSize.height;
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI * (canvasRotation / 2));
            ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
            return canvas.toDataURL();
        }
        /**
         * @private
         * @param {?} transformedBase64
         * @return {?}
         */
        setTransformedImage(transformedBase64) {
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */(resolve) => {
                this.transformedBase64 = transformedBase64;
                this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
                this.transformedImage = new Image();
                this.transformedImage.onload = ( /**
                 * @return {?}
                 */() => {
                    this.transformedSize.width = this.transformedImage.naturalWidth;
                    this.transformedSize.height = this.transformedImage.naturalHeight;
                    this.cd.markForCheck();
                    resolve();
                });
                this.transformedImage.src = this.transformedBase64;
            }));
        }
        /**
         * @return {?}
         */
        imageLoadedInView() {
            if (this.transformedImage != null) {
                this.imageLoaded.emit();
                this.setImageMaxSizeRetries = 0;
                setTimeout(( /**
                 * @return {?}
                 */() => this.checkImageMaxSizeRecursively()));
            }
        }
        /**
         * @private
         * @return {?}
         */
        checkImageMaxSizeRecursively() {
            if (this.setImageMaxSizeRetries > 40) {
                this.loadImageFailed.emit();
            }
            else if (this.sourceImageLoaded()) {
                this.setMaxSize();
                this.setCropperScaledMinSize();
                this.resetCropperPosition();
                this.cropperReady.emit(Object.assign({}, this.maxSize));
                this.cd.markForCheck();
            }
            else {
                this.setImageMaxSizeRetries++;
                setTimeout(( /**
                 * @return {?}
                 */() => this.checkImageMaxSizeRecursively()), 50);
            }
        }
        /**
         * @private
         * @return {?}
         */
        sourceImageLoaded() {
            return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
        }
        /**
         * @return {?}
         */
        onResize() {
            this.resizeCropperPosition();
            this.setMaxSize();
            this.setCropperScaledMinSize();
        }
        /**
         * @private
         * @return {?}
         */
        activatePinchGesture() {
            if (this.Hammer) {
                /** @type {?} */
                const hammer = new this.Hammer(this.wrapper.nativeElement);
                hammer.get('pinch').set({ enable: true });
            }
            else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
            }
        }
        /**
         * @private
         * @return {?}
         */
        resizeCropperPosition() {
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
                this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
                this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
                this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
                this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
            }
        }
        /**
         * @return {?}
         */
        resetCropperPosition() {
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            if (!this.maintainAspectRatio) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
            }
            else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                /** @type {?} */
                const cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
                this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
                this.cropper.y2 = this.cropper.y1 + cropperHeight;
            }
            else {
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
                /** @type {?} */
                const cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
                this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
                this.cropper.x2 = this.cropper.x1 + cropperWidth;
            }
            this.doAutoCrop();
            this.imageVisible = true;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        keyboardAccess(event) {
            this.changeKeyboardStepSize(event);
            this.keyboardMoveCropper(event);
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        changeKeyboardStepSize(event) {
            if (event.key >= '1' && event.key <= '9') {
                this.stepSize = +event.key;
                return;
            }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        keyboardMoveCropper(event) {
            /** @type {?} */
            const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
            if (!(keyboardWhiteList.includes(event.key))) {
                return;
            }
            /** @type {?} */
            const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
            /** @type {?} */
            const position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
            /** @type {?} */
            const moveEvent = this.getEventForKey(event.key, this.stepSize);
            event.preventDefault();
            event.stopPropagation();
            this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
            this.moveImg(moveEvent);
            this.moveStop();
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        getPositionForKey(key) {
            switch (key) {
                case 'ArrowUp':
                    return 'top';
                case 'ArrowRight':
                    return 'right';
                case 'ArrowDown':
                    return 'bottom';
                case 'ArrowLeft':
                default:
                    return 'left';
            }
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        getInvertedPositionForKey(key) {
            switch (key) {
                case 'ArrowUp':
                    return 'bottom';
                case 'ArrowRight':
                    return 'left';
                case 'ArrowDown':
                    return 'top';
                case 'ArrowLeft':
                default:
                    return 'right';
            }
        }
        /**
         * @private
         * @param {?} key
         * @param {?} stepSize
         * @return {?}
         */
        getEventForKey(key, stepSize) {
            switch (key) {
                case 'ArrowUp':
                    return { clientX: 0, clientY: stepSize * -1 };
                case 'ArrowRight':
                    return { clientX: stepSize, clientY: 0 };
                case 'ArrowDown':
                    return { clientX: 0, clientY: stepSize };
                case 'ArrowLeft':
                default:
                    return { clientX: stepSize * -1, clientY: 0 };
            }
        }
        /**
         * @param {?} event
         * @param {?} moveType
         * @param {?=} position
         * @return {?}
         */
        startMove(event, moveType, position = null) {
            if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
                return;
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            this.moveStart = Object.assign({ active: true, type: moveType, position, clientX: this.getClientX(event), clientY: this.getClientY(event) }, this.cropper);
        }
        /**
         * @param {?} event
         * @return {?}
         */
        startPinch(event) {
            if (!this.safeImgDataUrl) {
                return;
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            this.moveStart = Object.assign({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
        }
        /**
         * @param {?} event
         * @return {?}
         */
        moveImg(event) {
            if (this.moveStart.active) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
                if (this.moveStart.type === MoveTypes.Move) {
                    this.move(event);
                    this.checkCropperPosition(true);
                }
                else if (this.moveStart.type === MoveTypes.Resize) {
                    this.resize(event);
                    this.checkCropperPosition(false);
                }
                this.cd.detectChanges();
            }
        }
        /**
         * @param {?} event
         * @return {?}
         */
        onPinch(event) {
            if (this.moveStart.active) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
                if (this.moveStart.type === MoveTypes.Pinch) {
                    this.resize(event);
                    this.checkCropperPosition(false);
                }
                this.cd.detectChanges();
            }
        }
        /**
         * @private
         * @return {?}
         */
        setMaxSize() {
            if (this.sourceImage) {
                /** @type {?} */
                const sourceImageElement = this.sourceImage.nativeElement;
                this.maxSize.width = sourceImageElement.offsetWidth;
                this.maxSize.height = sourceImageElement.offsetHeight;
                this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
            }
        }
        /**
         * @private
         * @return {?}
         */
        setCropperScaledMinSize() {
            if (this.transformedImage) {
                this.setCropperScaledMinWidth();
                this.setCropperScaledMinHeight();
            }
            else {
                this.cropperScaledMinWidth = 20;
                this.cropperScaledMinHeight = 20;
            }
        }
        /**
         * @private
         * @return {?}
         */
        setCropperScaledMinWidth() {
            this.cropperScaledMinWidth = this.cropperMinWidth > 0
                ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width)
                : 20;
        }
        /**
         * @private
         * @return {?}
         */
        setCropperScaledMinHeight() {
            if (this.maintainAspectRatio) {
                this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
            }
            else if (this.cropperMinHeight > 0) {
                this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
            }
            else {
                this.cropperScaledMinHeight = 20;
            }
        }
        /**
         * @private
         * @param {?=} maintainSize
         * @return {?}
         */
        checkCropperPosition(maintainSize = false) {
            if (this.cropper.x1 < 0) {
                this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
                this.cropper.x1 = 0;
            }
            if (this.cropper.y1 < 0) {
                this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
                this.cropper.y1 = 0;
            }
            if (this.cropper.x2 > this.maxSize.width) {
                this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
                this.cropper.x2 = this.maxSize.width;
            }
            if (this.cropper.y2 > this.maxSize.height) {
                this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
                this.cropper.y2 = this.maxSize.height;
            }
        }
        /**
         * @return {?}
         */
        moveStop() {
            if (this.moveStart.active) {
                this.moveStart.active = false;
                this.doAutoCrop();
            }
        }
        /**
         * @return {?}
         */
        pinchStop() {
            if (this.moveStart.active) {
                this.moveStart.active = false;
                this.doAutoCrop();
            }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        move(event) {
            /** @type {?} */
            const diffX = this.getClientX(event) - this.moveStart.clientX;
            /** @type {?} */
            const diffY = this.getClientY(event) - this.moveStart.clientY;
            this.cropper.x1 = this.moveStart.x1 + diffX;
            this.cropper.y1 = this.moveStart.y1 + diffY;
            this.cropper.x2 = this.moveStart.x2 + diffX;
            this.cropper.y2 = this.moveStart.y2 + diffY;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        resize(event) {
            /** @type {?} */
            const diffX = this.getClientX(event) - this.moveStart.clientX;
            /** @type {?} */
            const diffY = this.getClientY(event) - this.moveStart.clientY;
            switch (this.moveStart.position) {
                case 'left':
                    this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                    break;
                case 'topleft':
                    this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                    this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                    break;
                case 'top':
                    this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                    break;
                case 'topright':
                    this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                    this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                    break;
                case 'right':
                    this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                    break;
                case 'bottomright':
                    this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                    this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                    break;
                case 'bottom':
                    this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                    break;
                case 'bottomleft':
                    this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                    this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                    break;
                case 'center':
                    /** @type {?} */
                    const scale = event.scale;
                    /** @type {?} */
                    const newWidth = (Math.abs(this.moveStart.x2 - this.moveStart.x1)) * scale;
                    /** @type {?} */
                    const newHeight = (Math.abs(this.moveStart.y2 - this.moveStart.y1)) * scale;
                    /** @type {?} */
                    const x1 = this.cropper.x1;
                    /** @type {?} */
                    const y1 = this.cropper.y1;
                    this.cropper.x1 = Math.min(this.moveStart.clientX - (newWidth / 2), this.cropper.x2 - this.cropperScaledMinWidth);
                    this.cropper.y1 = Math.min(this.moveStart.clientY - (newHeight / 2), this.cropper.y2 - this.cropperScaledMinHeight);
                    this.cropper.x2 = Math.max(this.moveStart.clientX + (newWidth / 2), x1 + this.cropperScaledMinWidth);
                    this.cropper.y2 = Math.max(this.moveStart.clientY + (newHeight / 2), y1 + this.cropperScaledMinHeight);
                    break;
            }
            if (this.maintainAspectRatio) {
                this.checkAspectRatio();
            }
        }
        /**
         * @private
         * @return {?}
         */
        checkAspectRatio() {
            /** @type {?} */
            let overflowX = 0;
            /** @type {?} */
            let overflowY = 0;
            switch (this.moveStart.position) {
                case 'top':
                    this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                    overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                    overflowY = Math.max(0 - this.cropper.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                    }
                    break;
                case 'bottom':
                    this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                    overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                    overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                    }
                    break;
                case 'topleft':
                    this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                    overflowX = Math.max(0 - this.cropper.x1, 0);
                    overflowY = Math.max(0 - this.cropper.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                    }
                    break;
                case 'topright':
                    this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                    overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                    overflowY = Math.max(0 - this.cropper.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                    }
                    break;
                case 'right':
                case 'bottomright':
                    this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                    overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                    overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                    }
                    break;
                case 'left':
                case 'bottomleft':
                    this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                    overflowX = Math.max(0 - this.cropper.x1, 0);
                    overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                        this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                    }
                    break;
                case 'center':
                    this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                    this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                    /** @type {?} */
                    const overflowX1 = Math.max(0 - this.cropper.x1, 0);
                    /** @type {?} */
                    const overflowX2 = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                    /** @type {?} */
                    const overflowY1 = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                    /** @type {?} */
                    const overflowY2 = Math.max(0 - this.cropper.y1, 0);
                    if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                        this.cropper.x1 += (overflowY1 * this.aspectRatio) > overflowX1 ? (overflowY1 * this.aspectRatio) : overflowX1;
                        this.cropper.x2 -= (overflowY2 * this.aspectRatio) > overflowX2 ? (overflowY2 * this.aspectRatio) : overflowX2;
                        this.cropper.y1 += (overflowY2 * this.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / this.aspectRatio;
                        this.cropper.y2 -= (overflowY1 * this.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / this.aspectRatio;
                    }
                    break;
            }
        }
        /**
         * @private
         * @return {?}
         */
        doAutoCrop() {
            if (this.autoCrop) {
                this.crop();
            }
        }
        /**
         * @return {?}
         */
        crop() {
            if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
                this.startCropImage.emit();
                /** @type {?} */
                const imagePosition = this.getImagePosition();
                /** @type {?} */
                const width = imagePosition.x2 - imagePosition.x1;
                /** @type {?} */
                const height = imagePosition.y2 - imagePosition.y1;
                /** @type {?} */
                const cropCanvas = ( /** @type {?} */(document.createElement('canvas')));
                cropCanvas.width = width;
                cropCanvas.height = height;
                /** @type {?} */
                const ctx = cropCanvas.getContext('2d');
                if (ctx) {
                    if (this.backgroundColor != null) {
                        ctx.fillStyle = this.backgroundColor;
                        ctx.fillRect(0, 0, width, height);
                    }
                    /** @type {?} */
                    const scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
                    /** @type {?} */
                    const scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
                    ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
                    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
                    ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
                    ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
                    /** @type {?} */
                    const output = {
                        width, height,
                        imagePosition,
                        cropperPosition: Object.assign({}, this.cropper)
                    };
                    if (this.containWithinAspectRatio) {
                        output.offsetImagePosition = this.getOffsetImagePosition();
                    }
                    /** @type {?} */
                    const resizeRatio = this.getResizeRatio(width, height);
                    if (resizeRatio !== 1) {
                        output.width = Math.round(width * resizeRatio);
                        output.height = this.maintainAspectRatio
                            ? Math.round(output.width / this.aspectRatio)
                            : Math.round(height * resizeRatio);
                        resizeCanvas(cropCanvas, output.width, output.height);
                    }
                    output.base64 = this.cropToBase64(cropCanvas);
                    this.imageCropped.emit(output);
                    return output;
                }
            }
            return null;
        }
        /**
         * @private
         * @return {?}
         */
        getImagePosition() {
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            /** @type {?} */
            const ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            /** @type {?} */
            const out = {
                x1: Math.round(this.cropper.x1 * ratio),
                y1: Math.round(this.cropper.y1 * ratio),
                x2: Math.round(this.cropper.x2 * ratio),
                y2: Math.round(this.cropper.y2 * ratio)
            };
            if (!this.containWithinAspectRatio) {
                out.x1 = Math.max(out.x1, 0);
                out.y1 = Math.max(out.y1, 0);
                out.x2 = Math.min(out.x2, this.transformedSize.width);
                out.y2 = Math.min(out.y2, this.transformedSize.height);
            }
            return out;
        }
        /**
         * @private
         * @return {?}
         */
        getOffsetImagePosition() {
            /** @type {?} */
            const canvasRotation = this.canvasRotation + this.exifTransform.rotate;
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            /** @type {?} */
            const ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            /** @type {?} */
            let offsetX;
            /** @type {?} */
            let offsetY;
            if (canvasRotation % 2) {
                offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
                offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
            }
            else {
                offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
                offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
            }
            /** @type {?} */
            const out = {
                x1: Math.round(this.cropper.x1 * ratio) - offsetX,
                y1: Math.round(this.cropper.y1 * ratio) - offsetY,
                x2: Math.round(this.cropper.x2 * ratio) - offsetX,
                y2: Math.round(this.cropper.y2 * ratio) - offsetY
            };
            if (!this.containWithinAspectRatio) {
                out.x1 = Math.max(out.x1, 0);
                out.y1 = Math.max(out.y1, 0);
                out.x2 = Math.min(out.x2, this.transformedSize.width);
                out.y2 = Math.min(out.y2, this.transformedSize.height);
            }
            return out;
        }
        /**
         * @private
         * @param {?} cropCanvas
         * @return {?}
         */
        cropToBase64(cropCanvas) {
            return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        }
        /**
         * @private
         * @return {?}
         */
        getQuality() {
            return Math.min(1, Math.max(0, this.imageQuality / 100));
        }
        /**
         * @private
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        getResizeRatio(width, height) {
            if (this.resizeToWidth > 0) {
                if (!this.onlyScaleDown || width > this.resizeToWidth) {
                    return this.resizeToWidth / width;
                }
            }
            else if (this.resizeToHeight > 0) {
                if (!this.onlyScaleDown || height > this.resizeToHeight) {
                    return this.resizeToHeight / height;
                }
            }
            return 1;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        getClientX(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        getClientY(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
        }
    }
    return ImageCropperComponent;
})();
if (false) {}
let ImageCropperModule = /*@__PURE__*/ (() => {
    class ImageCropperModule {
    }
    return ImageCropperModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    const split = base64Image.split(',');
    /** @type {?} */
    const type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    const byteString = atob(split[1]);
    /** @type {?} */
    const ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=ngx-image-cropper.js.map


/***/ }),

/***/ "./node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: ImageCropperModuleNgFactory, RenderType_ImageCropperComponent, View_ImageCropperComponent_0, View_ImageCropperComponent_Host_0, ImageCropperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModuleNgFactory", function() { return ImageCropperModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ImageCropperComponent", function() { return RenderType_ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImageCropperComponent_0", function() { return View_ImageCropperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImageCropperComponent_Host_0", function() { return View_ImageCropperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponentNgFactory", function() { return ImageCropperComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




var ImageCropperModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperModule"], [])]); });

var styles_ImageCropperComponent = ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:#fff solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"];
var RenderType_ImageCropperComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ImageCropperComponent, data: {} });

function View_ImageCropperComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["sourceImage", 1]], null, 0, "img", [["class", "source-image"]], [[8, "src", 4], [4, "visibility", null], [4, "transform", null]], [[null, "load"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("load" === en)) {
                var pd_0 = (_co.imageLoadedInView() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.safeImgDataUrl; var currVal_1 = (_co.imageVisible ? "visible" : "hidden"); var currVal_2 = _co.safeTransformStyle; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); });
}
function View_ImageCropperComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "resize topleft"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "topleft") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "topleft") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "resize top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [["class", "resize topright"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "topright") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "topright") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "span", [["class", "resize right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "span", [["class", "resize bottomright"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "bottomright") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "bottomright") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "span", [["class", "resize bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "span", [["class", "resize bottomleft"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "bottomleft") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "bottomleft") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [["class", "resize left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "span", [["class", "square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "span", [["class", "resize-bar top"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "top") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "top") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "span", [["class", "resize-bar right"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "right") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "right") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "span", [["class", "resize-bar bottom"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "bottom") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "bottom") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "span", [["class", "resize-bar left"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Resize, "left") !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Resize, "left") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_ImageCropperComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "cropper"], ["tabindex", "0"]], [[2, "rounded", null], [4, "top", "px"], [4, "left", "px"], [4, "width", "px"], [4, "height", "px"], [4, "margin-left", null], [4, "visibility", null]], [[null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_co.keyboardAccess($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "div", [["class", "move"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.startMove($event, _co.moveTypes.Move) !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.startMove($event, _co.moveTypes.Move) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ImageCropperComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = !_co.hideResizeSquares; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.roundCropper; var currVal_1 = _co.cropper.y1; var currVal_2 = _co.cropper.x1; var currVal_3 = (_co.cropper.x2 - _co.cropper.x1); var currVal_4 = (_co.cropper.y2 - _co.cropper.y1); var currVal_5 = ((_co.alignImage === "center") ? _co.marginLeft : null); var currVal_6 = (_co.imageVisible ? "visible" : "hidden"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
}
function View_ImageCropperComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { wrapper: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, { sourceImage: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, [[1, 0], ["wrapper", 1]], null, 5, "div", [], [[4, "background", null]], [[null, "pinchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pinchstart" === en)) {
                var pd_0 = (_co.startPinch($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ImageCropperComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "div", [["class", "overlay"]], [[4, "width", "px"], [4, "height", "px"], [4, "margin-left", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ImageCropperComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.safeImgDataUrl; _ck(_v, 4, 0, currVal_1); var currVal_5 = _co.imageVisible; _ck(_v, 7, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.imageVisible && _co.backgroundColor); _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.maxSize.width; var currVal_3 = _co.maxSize.height; var currVal_4 = ((_co.alignImage === "center") ? _co.marginLeft : null); _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); });
}
function View_ImageCropperComponent_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "image-cropper", [], [[4, "text-align", null], [2, "disabled", null]], [["window", "resize"], ["document", "mousemove"], ["document", "touchmove"], ["document", "pinchmove"], ["document", "mouseup"], ["document", "touchend"], ["document", "pinchend"]], function (_v, en, $event) {
            var ad = true;
            if (("window:resize" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onResize() !== false);
                ad = (pd_0 && ad);
            }
            if (("document:mousemove" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).moveImg($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("document:touchmove" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).moveImg($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("document:pinchmove" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onPinch($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("document:mouseup" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).moveStop() !== false);
                ad = (pd_4 && ad);
            }
            if (("document:touchend" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).moveStop() !== false);
                ad = (pd_5 && ad);
            }
            if (("document:pinchend" === en)) {
                var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).pinchStop() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, View_ImageCropperComponent_0, RenderType_ImageCropperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).alignImage; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
var ImageCropperComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("image-cropper", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"], View_ImageCropperComponent_Host_0, { imageChangedEvent: "imageChangedEvent", imageURL: "imageURL", imageBase64: "imageBase64", imageFile: "imageFile", format: "format", maintainAspectRatio: "maintainAspectRatio", transform: "transform", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", resizeToHeight: "resizeToHeight", cropperMinWidth: "cropperMinWidth", cropperMinHeight: "cropperMinHeight", canvasRotation: "canvasRotation", initialStepSize: "initialStepSize", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", backgroundColor: "backgroundColor", containWithinAspectRatio: "containWithinAspectRatio", hideResizeSquares: "hideResizeSquares", cropper: "cropper", alignImage: "alignImage", disabled: "disabled" }, { imageCropped: "imageCropped", startCropImage: "startCropImage", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, []);



/***/ }),

/***/ "./src/app/panel/clients/add/add.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/panel/clients/add/add.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ClientAddComponent, View_ClientAddComponent_0, View_ClientAddComponent_Host_0, ClientAddComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientAddComponent", function() { return RenderType_ClientAddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientAddComponent_0", function() { return View_ClientAddComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientAddComponent_Host_0", function() { return View_ClientAddComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddComponentNgFactory", function() { return ClientAddComponentNgFactory; });
/* harmony import */ var _add_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.component.scss.ngstyle */ "./src/app/panel/clients/add/add.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory */ "./node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add.component */ "./src/app/panel/clients/add/add.component.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/* harmony import */ var _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/settings/settings.service */ "./src/app/core/settings/settings.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */





















var styles_ClientAddComponent = [_add_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientAddComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_ClientAddComponent, data: {} });

function View_ClientAddComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientAddComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientAddComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientAddComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientAddComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "input", [["autocomplete", "client-logoUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.logoUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.model.logoUri; _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.logoUri-tooltip")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_ClientAddComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-lg-3 col-md-12 justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-thumbnail"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "col-lg-9 col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "image-cropper", [["format", "png"], ["outputType", "base64"]], [[4, "text-align", null], [2, "disabled", null]], [[null, "imageCropped"], [null, "imageLoaded"], [null, "loadImageFailed"], ["window", "resize"], ["document", "mousemove"], ["document", "touchmove"], ["document", "pinchmove"], ["document", "mouseup"], ["document", "touchend"], ["document", "pinchend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("window:resize" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onResize() !== false);
                ad = (pd_0 && ad);
            }
            if (("document:mousemove" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveImg($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("document:touchmove" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveImg($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("document:pinchmove" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onPinch($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("document:mouseup" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveStop() !== false);
                ad = (pd_4 && ad);
            }
            if (("document:touchend" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveStop() !== false);
                ad = (pd_5 && ad);
            }
            if (("document:pinchend" === en)) {
                var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).pinchStop() !== false);
                ad = (pd_6 && ad);
            }
            if (("imageCropped" === en)) {
                var pd_7 = (_co.imageCropped($event) !== false);
                ad = (pd_7 && ad);
            }
            if (("imageLoaded" === en)) {
                var pd_8 = (_co.imageLoaded() !== false);
                ad = (pd_8 && ad);
            }
            if (("loadImageFailed" === en)) {
                var pd_9 = (_co.loadImageFailed() !== false);
                ad = (pd_9 && ad);
            }
            return ad;
        }, _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ImageCropperComponent_0"], _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ImageCropperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_11__["ImageCropperComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { imageChangedEvent: [0, "imageChangedEvent"], format: [1, "format"], maintainAspectRatio: [2, "maintainAspectRatio"] }, { imageCropped: "imageCropped", imageLoaded: "imageLoaded", loadImageFailed: "loadImageFailed" })], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.imageChangedEvent; var currVal_4 = "png"; var currVal_5 = false; _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.croppedImage; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).alignImage; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled; _ck(_v, 4, 0, currVal_1, currVal_2); });
}
function View_ClientAddComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "input", [["autocomplete", "client-logoUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.logoUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.model.logoUri; _ck(_v, 3, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("client.details.logoUri-tooltip")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_ClientAddComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "input-group mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "label", [["class", "file-upload"], ["for", "image-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload Image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "input", [["id", "image-input"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.fileChangeEvent($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showCropper; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.showCropper; _ck(_v, 6, 0, currVal_1); }, null);
}
function View_ClientAddComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-oval btn-secondary text-success btn-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null))], null, null); }
function View_ClientAddComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientAddComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientAddComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientAddComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 194, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 183, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 91, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 5, "input", [["autocomplete", "client-id"], ["class", "form-control"], ["placeholder", "ClientId"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
                var pd_4 = ((_co.model.clientId = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "input", [["autocomplete", "client-name"], ["class", "form-control"], ["placeholder", "Name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](62, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 6, "input", [["autocomplete", "client-description"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.description = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 6, "input", [["autocomplete", "client-clientUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](94, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 6, "input", [["autocomplete", "client-postLogoutRedirectUris"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.postLogoutRedirectUris = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 12, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 11, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](110, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 4, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 90, "div", [["class", "col-xl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 12, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 11, "div", [["class", "card bg-primary pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(0) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 10, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDDCB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](126, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Default"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 11, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 10, "div", [["class", "card bg-info pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(1) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 9, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDDA5\uFE0F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Web App - Server Side (MVC)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Authorization Code Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 11, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 10, "div", [["class", "card bg-warning pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(2) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 9, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDDA5\uFE0F\uFE0F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Web App - Server Side (MVC)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hybrid Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](156, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 38, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 11, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 10, "div", [["class", "card bg-success pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(3) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 9, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDCBB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SPA - Single Page Application (e.g Angular, Blazor)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Authorization Code Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 13, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 12, "div", [["class", "card bg-purple pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(4) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 11, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDCF1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Native Application - Mobile / Desktop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Authorization Code Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 11, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 10, "div", [["class", "card bg-yellow-dark pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(5) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 9, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, null, 0, "i", [["class", "fa fa-server"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Server"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Client Credentials flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](195, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, null, 11, "div", [["class", "col-md-4 offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 10, "div", [["class", "card bg-dark pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectClient(6) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, null, 9, "div", [["class", "card-body text-center text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 1, "div", [["class", "text-lg m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\uD83D\uDCFA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Devices - TVs, gaming consoles, printers, cash registers, audio appliances etc"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Device Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 0, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](208, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 213).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](213, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](214, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientAddComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](217, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](219, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_16__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _ck(_v, 14, 0, "/clients"); _ck(_v, 13, 0, currVal_5); var currVal_7 = (_co.errors.length > 0); _ck(_v, 18, 0, currVal_7); var currVal_8 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 20, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("client.details.clientId-tooltip")); var currVal_11 = "top"; _ck(_v, 30, 0, currVal_10, currVal_11); var currVal_20 = _co.model.clientId; _ck(_v, 39, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).transform("client.details.name-tooltip")); var currVal_22 = "top"; _ck(_v, 45, 0, currVal_21, currVal_22); var currVal_31 = _co.model.clientName; _ck(_v, 54, 0, currVal_31); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).transform("client.details.description-tooltip")); var currVal_33 = "top"; _ck(_v, 60, 0, currVal_32, currVal_33); var currVal_43 = _co.model.description; _ck(_v, 69, 0, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 76, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).transform("client.details.clientUri-tooltip")); var currVal_45 = "top"; _ck(_v, 76, 0, currVal_44, currVal_45); var currVal_55 = _co.model.clientUri; _ck(_v, 85, 0, currVal_55); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 92, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).transform("client.details.postLogoutRedirectUris-tooltip")); var currVal_57 = "top"; _ck(_v, 92, 0, currVal_56, currVal_57); var currVal_67 = _co.model.postLogoutRedirectUris; _ck(_v, 101, 0, currVal_67); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 108, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).transform("client.details.logoUri-tooltip")); var currVal_69 = "top"; _ck(_v, 108, 0, currVal_68, currVal_69); var currVal_71 = _co.settings.lightVersion; _ck(_v, 115, 0, currVal_71); var currVal_72 = !_co.settings.lightVersion; _ck(_v, 117, 0, currVal_72); var currVal_74 = (_co.model.clientType == 0); _ck(_v, 132, 0, currVal_74); var currVal_75 = (_co.model.clientType == 1); _ck(_v, 144, 0, currVal_75); var currVal_76 = (_co.model.clientType == 2); _ck(_v, 156, 0, currVal_76); var currVal_77 = (_co.model.clientType == 3); _ck(_v, 169, 0, currVal_77); var currVal_78 = (_co.model.clientType == 4); _ck(_v, 183, 0, currVal_78); var currVal_79 = (_co.model.clientType == 5); _ck(_v, 195, 0, currVal_79); var currVal_80 = (_co.model.clientType == 6); _ck(_v, 208, 0, currVal_80); var currVal_83 = _ck(_v, 214, 0, "/clients"); _ck(_v, 213, 0, currVal_83); var currVal_84 = (_co.errors.length > 0); _ck(_v, 217, 0, currVal_84); var currVal_85 = _co.toasterconfig; _ck(_v, 219, 0, currVal_85); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("general.add")); _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("client.ClientDescription")); _ck(_v, 8, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform("general.goback")); _ck(_v, 15, 0, currVal_6); var currVal_9 = _co.client; _ck(_v, 24, 0, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).transform("client.details.clientId")); _ck(_v, 32, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 47, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).transform("client.details.name")); _ck(_v, 47, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassUntouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassTouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPristine; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassDirty; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassValid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassInvalid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPending; _ck(_v, 51, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).transform("client.details.description")); _ck(_v, 62, 0, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).transform("client.details.description-tooltip")); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassUntouched; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassTouched; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassPristine; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassDirty; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassValid; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassInvalid; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassPending; _ck(_v, 66, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).transform("client.details.clientUri")); _ck(_v, 78, 0, currVal_46); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 82, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).transform("client.details.clientUri-tooltip")); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassUntouched; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassTouched; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassPristine; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassDirty; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassValid; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassInvalid; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassPending; _ck(_v, 82, 0, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 94, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).transform("client.details.postLogoutRedirectUris")); _ck(_v, 94, 0, currVal_58); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 98, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).transform("client.details.postLogoutRedirectUris-tooltip")); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassUntouched; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassTouched; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassPristine; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassDirty; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassValid; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassInvalid; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).ngClassPending; _ck(_v, 98, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 110, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).transform("client.details.logoUri")); _ck(_v, 110, 0, currVal_70); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 126, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).transform("general.empty")); _ck(_v, 126, 0, currVal_73); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 213).target; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 213).href; _ck(_v, 212, 0, currVal_81, currVal_82); });
}
function View_ClientAddComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-add", [], null, null, null, View_ClientAddComponent_0, RenderType_ClientAddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_component__WEBPACK_IMPORTED_MODULE_18__["ClientAddComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_19__["ClientService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"], _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_20__["SettingsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientAddComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-add", _add_component__WEBPACK_IMPORTED_MODULE_18__["ClientAddComponent"], View_ClientAddComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/add/add.component.scss.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/panel/clients/add/add.component.scss.ngstyle.js ***!
  \*****************************************************************/
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
var styles = [".pointer {\n  cursor: pointer;\n}\n\n.pointer:hover {\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  \n}"];



/***/ }),

/***/ "./src/app/panel/clients/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/panel/clients/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: ClientAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddComponent", function() { return ClientAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/client.model */ "./src/app/shared/viewModel/client.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/file.model */ "./src/app/shared/viewModel/file.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");





class ClientAddComponent {
    constructor(router, translator, clientService, toasterService, settings) {
        this.router = router;
        this.translator = translator;
        this.clientService = clientService;
        this.toasterService = toasterService;
        this.settings = settings;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true
        });
        this.bsConfig = {
            containerClass: 'theme-angle'
        };
        // Image settings
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    ngOnInit() {
        this.errors = [];
        this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["NewClient"]();
        this.showButtonLoading = false;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    selectClient(type) {
        this.model.clientType = type;
    }
    save() {
        this.showButtonLoading = true;
        if (this.fileData != null) {
            this.model.logo = new _shared_viewModel_file_model__WEBPACK_IMPORTED_MODULE_3__["FileViewModel"](this.file.name, this.file.type, this.fileData.base64.split(',')[1]);
        }
        this.clientService.save(this.model).subscribe(registerResult => {
            if (registerResult) {
                this.showSuccessMessage();
                this.router.navigate(['/clients', this.model.clientId, 'edit']);
            }
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    fileChangeEvent(event) {
        if (event == null || event.target == null)
            return;
        const fileToUpload = event.target.files.item(0);
        this.file = fileToUpload;
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload);
        this.imageChangedEvent = event;
        this.showCropper = true;
    }
    imageCropped(event) {
        this.fileData = event;
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        this.showCropper = true;
    }
    loadImageFailed() {
        // show message
    }
}


/***/ }),

/***/ "./src/app/panel/clients/claims/claims.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/panel/clients/claims/claims.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ClientClaimsComponent, View_ClientClaimsComponent_0, View_ClientClaimsComponent_Host_0, ClientClaimsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientClaimsComponent", function() { return RenderType_ClientClaimsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientClaimsComponent_0", function() { return View_ClientClaimsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientClaimsComponent_Host_0", function() { return View_ClientClaimsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientClaimsComponentNgFactory", function() { return ClientClaimsComponentNgFactory; });
/* harmony import */ var _claims_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claims.component.scss.ngstyle */ "./src/app/panel/clients/claims/claims.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/scope.service */ "./src/app/shared/services/scope.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/* harmony import */ var _claims_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./claims.component */ "./src/app/panel/clients/claims/claims.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



















var styles_ClientClaimsComponent = [_claims_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientClaimsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_ClientClaimsComponent, data: {} });

function View_ClientClaimsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientClaimsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientClaimsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientClaimsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientClaimsComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "button", [["class", "btn btn-danger btn-xs"], ["placement", "top"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_co.remove(_v.context.$implicit) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform("general.remove")); var currVal_1 = "top"; _ck(_v, 3, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.type; _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.value; _ck(_v, 9, 0, currVal_3); });
}
function View_ClientClaimsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.claims; _ck(_v, 17, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.client; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("client.claims.type")); _ck(_v, 10, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("client.claims.value")); _ck(_v, 13, 0, currVal_2); }); }
function View_ClientClaimsComponent_6(_l) {
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
function View_ClientClaimsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientClaimsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientClaimsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientClaimsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claims"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 49, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 38, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 21, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 20, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "input", [["autocomplete", "claims-type"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 5, "div", [["class", "col-xl-9 offset-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sugestions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "input", [["autocomplete", "claims-value"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](70, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientClaimsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/clients", _co.client, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.claims && (_co.claims.length > 0)); _ck(_v, 21, 0, currVal_8); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("client.claims.type-tooltip")); var currVal_12 = "top"; _ck(_v, 33, 0, currVal_11, currVal_12); var currVal_21 = _co.model.type; _ck(_v, 39, 0, currVal_21); var currVal_22 = _co.standardClaims; _ck(_v, 48, 0, currVal_22); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).transform("client.claims.value-tooltip")); var currVal_25 = "top"; _ck(_v, 55, 0, currVal_24, currVal_25); var currVal_34 = _co.model.value; _ck(_v, 61, 0, currVal_34); var currVal_37 = _ck(_v, 70, 0, "/clients", _co.client, "edit"); _ck(_v, 69, 0, currVal_37); var currVal_38 = (_co.errors.length > 0); _ck(_v, 73, 0, currVal_38); var currVal_39 = _co.toasterconfig; _ck(_v, 75, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.ClaimDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_9 = _co.client; _ck(_v, 25, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("client.claims.type")); _ck(_v, 30, 0, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform("client.claims.type-tooltip")); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("client.claims.value")); _ck(_v, 52, 0, currVal_23); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).transform("client.claims.value-tooltip")); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 58, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).target; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).href; _ck(_v, 68, 0, currVal_35, currVal_36); });
}
function View_ClientClaimsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "app-client-claim", [], null, null, null, View_ClientClaimsComponent_0, RenderType_ClientClaimsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_15__["ScopeService"], _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_15__["ScopeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clients_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"], _clients_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _claims_component__WEBPACK_IMPORTED_MODULE_18__["ClientClaimsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var ClientClaimsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-claim", _claims_component__WEBPACK_IMPORTED_MODULE_18__["ClientClaimsComponent"], View_ClientClaimsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/claims/claims.component.scss.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/clients/claims/claims.component.scss.ngstyle.js ***!
  \***********************************************************************/
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
var styles = ["tag-input {\n  font-size: 12px !important;\n}"];



/***/ }),

/***/ "./src/app/panel/clients/claims/claims.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/panel/clients/claims/claims.component.ts ***!
  \**********************************************************/
/*! exports provided: ClientClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientClaimsComponent", function() { return ClientClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_clients_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/clients/clients.service */ "./src/app/panel/clients/clients.service.ts");
/* harmony import */ var _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/client.model */ "./src/app/shared/viewModel/client.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var _shared_viewModel_standard_claims_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/viewModel/standard-claims.model */ "./src/app/shared/viewModel/standard-claims.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class ClientClaimsComponent {
    constructor(route, router, translator, clientService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.clientService = clientService;
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
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(p => this.client = p["clientId"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(p => p["clientId"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(m => this.clientService.getClientClaims(m.toString()))).subscribe(result => this.claims = result);
        this.errors = [];
        this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_2__["ClientClaim"]();
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
    remove(claim) {
        this.showButtonLoading = true;
        this.errors = [];
        this.clientService.removeClaim(this.client, claim.type, claim.value).subscribe(() => {
            this.showSuccessMessage();
            this.loadClaims();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    loadClaims() {
        this.clientService.getClientClaims(this.client).subscribe(c => this.claims = c);
    }
    save() {
        this.showButtonLoading = true;
        this.errors = [];
        this.model.clientId = this.client;
        this.clientService.saveClaim(this.model).subscribe(claims => {
            this.showSuccessMessage();
            this.claims = claims;
            this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_2__["ClientClaim"]();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_3__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
}


/***/ }),

/***/ "./src/app/panel/clients/clients.module.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/panel/clients/clients.module.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: ClientsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModuleNgFactory", function() { return ClientsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clients_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.module */ "./src/app/panel/clients/clients.module.ts");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory */ "./node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory */ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js");
/* harmony import */ var _node_modules_ng2_tooltip_directive_ng2_tooltip_directive_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ng2-tooltip-directive/ng2-tooltip-directive.ngfactory */ "./node_modules/ng2-tooltip-directive/ng2-tooltip-directive.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_popover_ngx_bootstrap_popover_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/popover/ngx-bootstrap-popover.ngfactory */ "./node_modules/ngx-bootstrap/popover/ngx-bootstrap-popover.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_typeahead_ngx_bootstrap_typeahead_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/typeahead/ngx-bootstrap-typeahead.ngfactory */ "./node_modules/ngx-bootstrap/typeahead/ngx-bootstrap-typeahead.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_clients_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/clients-list.component.ngfactory */ "./src/app/panel/clients/list/clients-list.component.ngfactory.js");
/* harmony import */ var _edit_client_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/client-edit.component.ngfactory */ "./src/app/panel/clients/edit/client-edit.component.ngfactory.js");
/* harmony import */ var _secrets_secrets_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./secrets/secrets.component.ngfactory */ "./src/app/panel/clients/secrets/secrets.component.ngfactory.js");
/* harmony import */ var _properties_properties_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./properties/properties.component.ngfactory */ "./src/app/panel/clients/properties/properties.component.ngfactory.js");
/* harmony import */ var _claims_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./claims/claims.component.ngfactory */ "./src/app/panel/clients/claims/claims.component.ngfactory.js");
/* harmony import */ var _add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add/add.component.ngfactory */ "./src/app/panel/clients/add/add.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../shared/services/colors.service */ "./src/app/shared/services/colors.service.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./clients.service */ "./src/app/panel/clients/clients.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! angular2-toaster/src/toaster.module */ "./node_modules/angular2-toaster/src/toaster.module.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _list_clients_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./list/clients-list.component */ "./src/app/panel/clients/list/clients-list.component.ts");
/* harmony import */ var _edit_client_edit_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./edit/client-edit.component */ "./src/app/panel/clients/edit/client-edit.component.ts");
/* harmony import */ var _secrets_secrets_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./secrets/secrets.component */ "./src/app/panel/clients/secrets/secrets.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/panel/clients/properties/properties.component.ts");
/* harmony import */ var _claims_claims_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./claims/claims.component */ "./src/app/panel/clients/claims/claims.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add/add.component */ "./src/app/panel/clients/add/add.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */























































var ClientsModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_clients_module__WEBPACK_IMPORTED_MODULE_1__["ClientsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AlertComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDaterangepickerContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerInlineContainerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDaterangepickerInlineContainerComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_4__["BsDropdownContainerComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponentNgFactory"], _node_modules_ng2_tooltip_directive_ng2_tooltip_directive_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"], _node_modules_ngx_bootstrap_popover_ngx_bootstrap_popover_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PopoverContainerComponentNgFactory"], _node_modules_ngx_bootstrap_typeahead_ngx_bootstrap_typeahead_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TypeaheadContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_lNgFactory"], _list_clients_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ClientListComponentNgFactory"], _edit_client_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ClientEditComponentNgFactory"], _secrets_secrets_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ClientSecretsComponentNgFactory"], _properties_properties_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["ClientPropertiesComponentNgFactory"], _claims_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ClientClaimsComponentNgFactory"], _add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["ClientAddComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_19__["AccordionConfig"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_19__["AccordionConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_20__["AlertConfig"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_20__["AlertConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["DatepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["DatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_22__["PositioningService"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_22__["PositioningService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_23__["ComponentLoaderFactory"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_23__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_22__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵc"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵe"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerInlineConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerInlineConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerInlineConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerInlineConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵd"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵd"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["ɵe"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownState"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["BsModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_23__["ComponentLoaderFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_26__["PaginationConfig"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_26__["PaginationConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_27__["ProgressbarConfig"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_27__["ProgressbarConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_28__["RatingConfig"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_28__["RatingConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsetConfig"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsetConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerConfig"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerActions"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerActions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerStore"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_31__["PopoverConfig"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_31__["PopoverConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadConfig"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_33__["ColorsService"], _shared_services_colors_service__WEBPACK_IMPORTED_MODULE_33__["ColorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_34__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_34__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_36__["ToasterContainerComponent"], angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_36__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _clients_service__WEBPACK_IMPORTED_MODULE_37__["ClientService"], _clients_service__WEBPACK_IMPORTED_MODULE_37__["ClientService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_40__["CollapseModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_40__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_19__["AccordionModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_19__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_20__["AlertModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_20__["AlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_41__["ButtonsModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_41__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["DatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["ModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_26__["PaginationModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_26__["PaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_27__["ProgressbarModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_27__["ProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_28__["RatingModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_28__["RatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_42__["TooltipModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_42__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_31__["PopoverModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_31__["PopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_44__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_44__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_45__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_45__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_46__["ToasterModule"], angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_46__["ToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_47__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_47__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_34__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_34__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_48__["ImageCropperModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_48__["ImageCropperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clients_module__WEBPACK_IMPORTED_MODULE_1__["ClientsModule"], _clients_module__WEBPACK_IMPORTED_MODULE_1__["ClientsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownConfig"], { autoClose: true, insideClick: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_44__["ROUTES"], function () { return [[{ path: "", component: _list_clients_list_component__WEBPACK_IMPORTED_MODULE_49__["ClientListComponent"] }, { path: ":clientId/edit", component: _edit_client_edit_component__WEBPACK_IMPORTED_MODULE_50__["ClientEditComponent"] }, { path: ":clientId/secrets", component: _secrets_secrets_component__WEBPACK_IMPORTED_MODULE_51__["ClientSecretsComponent"] }, { path: ":clientId/properties", component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_52__["ClientPropertiesComponent"] }, { path: ":clientId/claims", component: _claims_claims_component__WEBPACK_IMPORTED_MODULE_53__["ClientClaimsComponent"] }, { path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_54__["ClientAddComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/panel/clients/clients.module.ts":
/*!*************************************************!*\
  !*** ./src/app/panel/clients/clients.module.ts ***!
  \*************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ "./src/app/panel/clients/add/add.component.ts");
/* harmony import */ var _claims_claims_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claims/claims.component */ "./src/app/panel/clients/claims/claims.component.ts");
/* harmony import */ var _edit_client_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/client-edit.component */ "./src/app/panel/clients/edit/client-edit.component.ts");
/* harmony import */ var _list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/clients-list.component */ "./src/app/panel/clients/list/clients-list.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/panel/clients/properties/properties.component.ts");
/* harmony import */ var _secrets_secrets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secrets/secrets.component */ "./src/app/panel/clients/secrets/secrets.component.ts");







const routes = [
    { path: "", component: _list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientListComponent"] },
    { path: ":clientId/edit", component: _edit_client_edit_component__WEBPACK_IMPORTED_MODULE_3__["ClientEditComponent"] },
    { path: ":clientId/secrets", component: _secrets_secrets_component__WEBPACK_IMPORTED_MODULE_6__["ClientSecretsComponent"] },
    { path: ":clientId/properties", component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_5__["ClientPropertiesComponent"] },
    { path: ":clientId/claims", component: _claims_claims_component__WEBPACK_IMPORTED_MODULE_2__["ClientClaimsComponent"] },
    { path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_1__["ClientAddComponent"] },
];
class ClientsModule {
}


/***/ }),

/***/ "./src/app/panel/clients/clients.service.ts":
/*!**************************************************!*\
  !*** ./src/app/panel/clients/clients.service.ts ***!
  \**************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");


class ClientService {
    constructor(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ResourceServer + "api/clients";
    }
    getClients() {
        return this.http.get(this.endpoint);
    }
    getClientDetails(clientId) {
        return this.http.get(`${this.endpoint}/${clientId}`);
    }
    save(model) {
        return this.http.post(this.endpoint, model);
    }
    update(client, model) {
        return this.http.put(`${this.endpoint}/${client}`, model);
    }
    partialUpdate(client, patch) {
        return this.http.patch(`${this.endpoint}/${client}`, patch);
    }
    copy(clientId) {
        const command = {};
        return this.http.post(`${this.endpoint}/${clientId}/copy`, command);
    }
    remove(clientId) {
        return this.http.delete(`${this.endpoint}/${clientId}`);
    }
    getClientSecrets(clientId) {
        return this.http.get(`${this.endpoint}/${clientId}/secrets`);
    }
    removeSecret(client, type, value) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('type', type)
            .set('value', encodeURIComponent(value));
        return this.http.delete(`${this.endpoint}/${client}/secrets`, { params });
    }
    saveSecret(model) {
        return this.http.post(`${this.endpoint}/${model.clientId}/secrets`, model);
    }
    getClientProperties(clientId) {
        return this.http.get(`${this.endpoint}/${clientId}/properties`);
    }
    removeProperty(client, key) {
        return this.http.delete(`${this.endpoint}/${client}/properties/${key}`);
    }
    saveProperty(model) {
        return this.http.post(`${this.endpoint}/${model.clientId}/properties`, model);
    }
    getClientClaims(clientId) {
        return this.http.get(`${this.endpoint}/${clientId}/claims`);
    }
    removeClaim(client, type, value) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('type', type)
            .set('value', value);
        return this.http.delete(`${this.endpoint}/${client}/claims`, { params });
    }
    saveClaim(model) {
        return this.http.post(`${this.endpoint}/${model.clientId}/claims`, model);
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/auth/auth.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/panel/clients/edit/auth/auth.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_ClientAuthComponent, View_ClientAuthComponent_0, View_ClientAuthComponent_Host_0, ClientAuthComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientAuthComponent", function() { return RenderType_ClientAuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientAuthComponent_0", function() { return View_ClientAuthComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientAuthComponent_Host_0", function() { return View_ClientAuthComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAuthComponentNgFactory", function() { return ClientAuthComponentNgFactory; });
/* harmony import */ var _auth_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/auth/auth.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-chips/ngx-chips.ngfactory */ "./node_modules/ngx-chips/ngx-chips.ngfactory.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/numberCheck/numbers-only.directive */ "./src/app/shared/directives/numberCheck/numbers-only.directive.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.component */ "./src/app/panel/clients/edit/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var styles_ClientAuthComponent = [_auth_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientAuthComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientAuthComponent, data: {} });

function View_ClientAuthComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 173, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 17, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "label", [["class", "col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.enableLocalLogin = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 36, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 35, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "auto"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 7, "tag-input", [["name", "identityProviderRestrictions"], ["placeholder", "+Grant"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.identityProviderRestrictions = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 15, "div", [["class", "col-xl-8 offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Options:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "button", [["class", "btn btn-brand btn-facebook"], ["style", "margin-bottom: 4px"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addIdentityProvidersRestrictions("Facebook") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "i", [["class", "fab fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Facebook"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 3, "button", [["class", "btn btn-brand btn-linkedin"], ["style", "margin-bottom: 4px"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addIdentityProvidersRestrictions("LinkedIn") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 0, "i", [["class", "fab fa-linkedin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LinkedIn"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 3, "button", [["class", "btn btn-brand btn-google-plus"], ["style", "margin-bottom: 4px"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addIdentityProvidersRestrictions("Google") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "i", [["class", "fab fa-google-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Google+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 17, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 16, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](62, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 9, "div", [["class", "col-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 8, "tag-input", [["name", "postLogoutRedirectUris"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.postLogoutRedirectUris = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 19, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 18, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](79, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 6, "input", [["autocomplete", "client-frontChannelLogoutUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.frontChannelLogoutUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](99, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.frontChannelLogoutSessionRequired = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 19, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 18, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](120, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 6, "input", [["autocomplete", "client-backChannelLogoutUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.backChannelLogoutUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](140, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_7__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.backChannelLogoutSessionRequired = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](153, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](155, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](160, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](162, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 7, "input", [["autocomplete", "client-userSsoLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 167)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 167).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 167)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 167)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.userSsoLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](167, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](171, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](172, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_10__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("client.details.enableLocalLogin-tooltip")); var currVal_1 = "top"; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_10 = _co.model.enableLocalLogin; _ck(_v, 16, 0, currVal_10); var currVal_12 = false; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).transform("client.details.identityProviderRestrictions-tooltip")); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).transform("client.details.identityProviderRestrictions")); var currVal_15 = "auto"; var currVal_16 = "body"; _ck(_v, 28, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_25 = "+Grant"; var currVal_26 = "bootstrap"; var currVal_27 = true; _ck(_v, 34, 0, currVal_25, currVal_26, currVal_27); var currVal_28 = "identityProviderRestrictions"; var currVal_29 = _co.model.identityProviderRestrictions; _ck(_v, 38, 0, currVal_28, currVal_29); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).transform("client.details.postLogoutRedirectUris-tooltip")); var currVal_31 = "top"; _ck(_v, 60, 0, currVal_30, currVal_31); var currVal_41 = ("+" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 67, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).transform("client.details.postLogoutRedirectUris"))); var currVal_42 = "bootstrap"; var currVal_43 = true; _ck(_v, 67, 0, currVal_41, currVal_42, currVal_43); var currVal_44 = "postLogoutRedirectUris"; var currVal_45 = _co.model.postLogoutRedirectUris; _ck(_v, 72, 0, currVal_44, currVal_45); var currVal_47 = false; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).transform("client.details.frontChannelLogoutUri-tooltip")); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).transform("client.details.frontChannelLogoutUri")); var currVal_50 = "top"; var currVal_51 = "body"; _ck(_v, 83, 0, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_60 = _co.model.frontChannelLogoutUri; _ck(_v, 91, 0, currVal_60); var currVal_62 = false; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 103, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).transform("client.details.frontChannelLogoutSessionRequired-tooltip")); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 103, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).transform("client.details.frontChannelLogoutSessionRequired")); var currVal_65 = "top"; var currVal_66 = "body"; _ck(_v, 103, 0, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66); var currVal_74 = _co.model.frontChannelLogoutSessionRequired; _ck(_v, 112, 0, currVal_74); var currVal_76 = false; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 124, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).transform("client.details.backChannelLogoutUri-tooltip")); var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 124, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).transform("client.details.backChannelLogoutUri")); var currVal_79 = "top"; var currVal_80 = "body"; _ck(_v, 124, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_89 = _co.model.backChannelLogoutUri; _ck(_v, 132, 0, currVal_89); var currVal_91 = false; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 144, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).transform("client.details.backChannelLogoutSessionRequired-tooltip")); var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 144, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).transform("client.details.backChannelLogoutSessionRequired")); var currVal_94 = "top"; var currVal_95 = "body"; _ck(_v, 144, 0, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95); var currVal_103 = _co.model.backChannelLogoutSessionRequired; _ck(_v, 153, 0, currVal_103); var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 160, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).transform("client.details.userSsoLifetime-tooltip")); var currVal_105 = "top"; _ck(_v, 160, 0, currVal_104, currVal_105); var currVal_115 = _co.model.userSsoLifetime; _ck(_v, 169, 0, currVal_115); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.details.enableLocalLogin")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).transform("client.details.identityProviderRestrictions")); _ck(_v, 24, 0, currVal_11); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).tabindexAttr; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending; _ck(_v, 33, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).transform("client.details.postLogoutRedirectUris")); _ck(_v, 62, 0, currVal_32); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).tabindexAttr; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPending; _ck(_v, 66, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 79, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).transform("client.details.frontChannelLogoutUri")); _ck(_v, 79, 0, currVal_46); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 88, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).transform("client.details.frontChannelLogoutUri-tooltip")); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassPending; _ck(_v, 88, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 99, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).transform("client.details.frontChannelLogoutSessionRequired")); _ck(_v, 99, 0, currVal_61); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassUntouched; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassTouched; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassPristine; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassDirty; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassValid; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassInvalid; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ngClassPending; _ck(_v, 109, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).transform("client.details.backChannelLogoutUri")); _ck(_v, 120, 0, currVal_75); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 129, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).transform("client.details.backChannelLogoutUri-tooltip")); var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassUntouched; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassTouched; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPristine; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassDirty; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassValid; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassInvalid; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPending; _ck(_v, 129, 0, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88); var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 140, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).transform("client.details.backChannelLogoutSessionRequired")); _ck(_v, 140, 0, currVal_90); var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassUntouched; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassTouched; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassPristine; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassDirty; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassValid; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassInvalid; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).ngClassPending; _ck(_v, 150, 0, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 162, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).transform("client.details.userSsoLifetime")); _ck(_v, 162, 0, currVal_106); var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 166, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).transform("client.details.userSsoLifetime-tooltip")); var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassUntouched; var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassTouched; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassPristine; var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassDirty; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassValid; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassInvalid; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassPending; _ck(_v, 166, 0, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114); });
}
function View_ClientAuthComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-auth", [], null, null, null, View_ClientAuthComponent_0, RenderType_ClientAuthComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _auth_component__WEBPACK_IMPORTED_MODULE_11__["ClientAuthComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_13__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientAuthComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-auth", _auth_component__WEBPACK_IMPORTED_MODULE_11__["ClientAuthComponent"], View_ClientAuthComponent_Host_0, { model: "model" }, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/auth/auth.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/clients/edit/auth/auth.component.scss.shim.ngstyle.js ***!
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
var styles = ["tag-input[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\n.btn-brand[_ngcontent-%COMP%] {\n  border: 0;\n  margin-right: 5px;\n}\n\n.btn-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2.0625rem;\n  margin: -0.375rem -0.95rem;\n  line-height: 2.0625rem;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n}\n\n.btn-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n\n.btn-brand.btn-lg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn-brand.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 2.640625rem;\n  margin: -0.5rem -1rem;\n  line-height: 2.640625rem;\n  border-radius: 0.3rem;\n}\n\n.btn-brand.btn-lg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn-brand.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n\n.btn-brand.btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn-brand.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.648438rem;\n  margin: -0.25rem -0.5rem;\n  line-height: 1.648438rem;\n  border-radius: 0.2rem;\n}\n\n.btn-brand.btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn-brand.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.btn-brand.btn-square[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.btn-facebook[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n\n.btn-facebook[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #30497c;\n  border-color: #2d4373;\n}\n\n.btn-facebook[_ngcontent-%COMP%]:focus, .btn-facebook.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5);\n}\n\n.btn-facebook.disabled[_ngcontent-%COMP%], .btn-facebook[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n\n.btn-facebook[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-facebook[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-facebook.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: #293e6a;\n}\n\n.btn-facebook[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-facebook[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-facebook.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(59, 89, 152, 0.5);\n}\n\n.btn-twitter[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00aced;\n  border-color: #00aced;\n}\n\n.btn-twitter[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0090c7;\n  border-color: #0087ba;\n}\n\n.btn-twitter[_ngcontent-%COMP%]:focus, .btn-twitter.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 172, 237, 0.5);\n}\n\n.btn-twitter.disabled[_ngcontent-%COMP%], .btn-twitter[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #00aced;\n  border-color: #00aced;\n}\n\n.btn-twitter[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-twitter[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-twitter.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0087ba;\n  border-color: #007ead;\n}\n\n.btn-twitter[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-twitter[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-twitter.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 172, 237, 0.5);\n}\n\n.btn-linkedin[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #4875b4;\n  border-color: #4875b4;\n}\n\n.btn-linkedin[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #3d6399;\n  border-color: #395d90;\n}\n\n.btn-linkedin[_ngcontent-%COMP%]:focus, .btn-linkedin.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(72, 117, 180, 0.5);\n}\n\n.btn-linkedin.disabled[_ngcontent-%COMP%], .btn-linkedin[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #4875b4;\n  border-color: #4875b4;\n}\n\n.btn-linkedin[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-linkedin[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-linkedin.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #395d90;\n  border-color: #365786;\n}\n\n.btn-linkedin[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-linkedin[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-linkedin.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 117, 180, 0.5);\n}\n\n.btn-google-plus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #d34836;\n  border-color: #d34836;\n}\n\n.btn-google-plus[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ba3929;\n  border-color: #b03626;\n}\n\n.btn-google-plus[_ngcontent-%COMP%]:focus, .btn-google-plus.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(211, 72, 54, 0.5);\n}\n\n.btn-google-plus.disabled[_ngcontent-%COMP%], .btn-google-plus[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #d34836;\n  border-color: #d34836;\n}\n\n.btn-google-plus[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-google-plus[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-google-plus.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #b03626;\n  border-color: #a53324;\n}\n\n.btn-google-plus[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-google-plus[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-google-plus.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(211, 72, 54, 0.5);\n}\n\n.btn-flickr[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff0084;\n  border-color: #ff0084;\n}\n\n.btn-flickr[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #d90070;\n  border-color: #cc006a;\n}\n\n.btn-flickr[_ngcontent-%COMP%]:focus, .btn-flickr.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5);\n}\n\n.btn-flickr.disabled[_ngcontent-%COMP%], .btn-flickr[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #ff0084;\n  border-color: #ff0084;\n}\n\n.btn-flickr[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-flickr[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-flickr.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: #bf0063;\n}\n\n.btn-flickr[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-flickr[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-flickr.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 0, 132, 0.5);\n}\n\n.btn-tumblr[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #32506d;\n  border-color: #32506d;\n}\n\n.btn-tumblr[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #263d53;\n  border-color: #22364a;\n}\n\n.btn-tumblr[_ngcontent-%COMP%]:focus, .btn-tumblr.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(50, 80, 109, 0.5);\n}\n\n.btn-tumblr.disabled[_ngcontent-%COMP%], .btn-tumblr[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #32506d;\n  border-color: #32506d;\n}\n\n.btn-tumblr[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-tumblr[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-tumblr.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #22364a;\n  border-color: #1e3041;\n}\n\n.btn-tumblr[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-tumblr[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-tumblr.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(50, 80, 109, 0.5);\n}\n\n.btn-xing[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #026466;\n  border-color: #026466;\n}\n\n.btn-xing[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #013f40;\n  border-color: #013334;\n}\n\n.btn-xing[_ngcontent-%COMP%]:focus, .btn-xing.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(2, 100, 102, 0.5);\n}\n\n.btn-xing.disabled[_ngcontent-%COMP%], .btn-xing[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #026466;\n  border-color: #026466;\n}\n\n.btn-xing[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-xing[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-xing.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #013334;\n  border-color: #012727;\n}\n\n.btn-xing[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-xing[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-xing.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(2, 100, 102, 0.5);\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #4183c4;\n  border-color: #4183c4;\n}\n\n.btn-github[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #3570aa;\n  border-color: #3269a0;\n}\n\n.btn-github[_ngcontent-%COMP%]:focus, .btn-github.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(65, 131, 196, 0.5);\n}\n\n.btn-github.disabled[_ngcontent-%COMP%], .btn-github[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #4183c4;\n  border-color: #4183c4;\n}\n\n.btn-github[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-github[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-github.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3269a0;\n  border-color: #2f6397;\n}\n\n.btn-github[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-github[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-github.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(65, 131, 196, 0.5);\n}\n\n.btn-html5[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e34f26;\n  border-color: #e34f26;\n}\n\n.btn-html5[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #c9401a;\n  border-color: #be3c18;\n}\n\n.btn-html5[_ngcontent-%COMP%]:focus, .btn-html5.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(227, 79, 38, 0.5);\n}\n\n.btn-html5.disabled[_ngcontent-%COMP%], .btn-html5[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #e34f26;\n  border-color: #e34f26;\n}\n\n.btn-html5[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-html5[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-html5.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #be3c18;\n  border-color: #b23917;\n}\n\n.btn-html5[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-html5[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-html5.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(227, 79, 38, 0.5);\n}\n\n.btn-openid[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #f78c40;\n  border-color: #f78c40;\n}\n\n.btn-openid[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f5761b;\n  border-color: #f56f0f;\n}\n\n.btn-openid[_ngcontent-%COMP%]:focus, .btn-openid.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(247, 140, 64, 0.5);\n}\n\n.btn-openid.disabled[_ngcontent-%COMP%], .btn-openid[_ngcontent-%COMP%]:disabled {\n  color: #23282c;\n  background-color: #f78c40;\n  border-color: #f78c40;\n}\n\n.btn-openid[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-openid[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-openid.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f56f0f;\n  border-color: #ed680a;\n}\n\n.btn-openid[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-openid[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-openid.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(247, 140, 64, 0.5);\n}\n\n.btn-stack-overflow[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fe7a15;\n  border-color: #fe7a15;\n}\n\n.btn-stack-overflow[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ec6701;\n  border-color: #df6101;\n}\n\n.btn-stack-overflow[_ngcontent-%COMP%]:focus, .btn-stack-overflow.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(254, 122, 21, 0.5);\n}\n\n.btn-stack-overflow.disabled[_ngcontent-%COMP%], .btn-stack-overflow[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #fe7a15;\n  border-color: #fe7a15;\n}\n\n.btn-stack-overflow[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-stack-overflow[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-stack-overflow.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #df6101;\n  border-color: #d25c01;\n}\n\n.btn-stack-overflow[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-stack-overflow[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-stack-overflow.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(254, 122, 21, 0.5);\n}\n\n.btn-youtube[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #b00;\n  border-color: #b00;\n}\n\n.btn-youtube[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #950000;\n  border-color: #880000;\n}\n\n.btn-youtube[_ngcontent-%COMP%]:focus, .btn-youtube.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(187, 0, 0, 0.5);\n}\n\n.btn-youtube.disabled[_ngcontent-%COMP%], .btn-youtube[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #b00;\n  border-color: #b00;\n}\n\n.btn-youtube[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-youtube[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-youtube.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #880000;\n  border-color: #7b0000;\n}\n\n.btn-youtube[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-youtube[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-youtube.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(187, 0, 0, 0.5);\n}\n\n.btn-css3[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0170ba;\n  border-color: #0170ba;\n}\n\n.btn-css3[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #015994;\n  border-color: #015187;\n}\n\n.btn-css3[_ngcontent-%COMP%]:focus, .btn-css3.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(1, 112, 186, 0.5);\n}\n\n.btn-css3.disabled[_ngcontent-%COMP%], .btn-css3[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #0170ba;\n  border-color: #0170ba;\n}\n\n.btn-css3[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-css3[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-css3.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #015187;\n  border-color: #014a7b;\n}\n\n.btn-css3[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-css3[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-css3.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(1, 112, 186, 0.5);\n}\n\n.btn-dribbble[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ea4c89;\n  border-color: #ea4c89;\n}\n\n.btn-dribbble[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #e62a72;\n  border-color: #e51e6b;\n}\n\n.btn-dribbble[_ngcontent-%COMP%]:focus, .btn-dribbble.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(234, 76, 137, 0.5);\n}\n\n.btn-dribbble.disabled[_ngcontent-%COMP%], .btn-dribbble[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #ea4c89;\n  border-color: #ea4c89;\n}\n\n.btn-dribbble[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-dribbble[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-dribbble.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e51e6b;\n  border-color: #dc1a65;\n}\n\n.btn-dribbble[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-dribbble[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-dribbble.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(234, 76, 137, 0.5);\n}\n\n.btn-instagram[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #517fa4;\n  border-color: #517fa4;\n}\n\n.btn-instagram[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #446b8a;\n  border-color: #406582;\n}\n\n.btn-instagram[_ngcontent-%COMP%]:focus, .btn-instagram.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(81, 127, 164, 0.5);\n}\n\n.btn-instagram.disabled[_ngcontent-%COMP%], .btn-instagram[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #517fa4;\n  border-color: #517fa4;\n}\n\n.btn-instagram[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-instagram[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-instagram.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #406582;\n  border-color: #3c5e79;\n}\n\n.btn-instagram[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-instagram[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-instagram.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(81, 127, 164, 0.5);\n}\n\n.btn-pinterest[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #cb2027;\n  border-color: #cb2027;\n}\n\n.btn-pinterest[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #aa1b21;\n  border-color: #9f191f;\n}\n\n.btn-pinterest[_ngcontent-%COMP%]:focus, .btn-pinterest.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5);\n}\n\n.btn-pinterest.disabled[_ngcontent-%COMP%], .btn-pinterest[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #cb2027;\n  border-color: #cb2027;\n}\n\n.btn-pinterest[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-pinterest[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-pinterest.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: #94171c;\n}\n\n.btn-pinterest[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-pinterest[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-pinterest.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(203, 32, 39, 0.5);\n}\n\n.btn-vk[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #45668e;\n  border-color: #45668e;\n}\n\n.btn-vk[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #385474;\n  border-color: #344d6c;\n}\n\n.btn-vk[_ngcontent-%COMP%]:focus, .btn-vk.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(69, 102, 142, 0.5);\n}\n\n.btn-vk.disabled[_ngcontent-%COMP%], .btn-vk[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #45668e;\n  border-color: #45668e;\n}\n\n.btn-vk[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-vk[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-vk.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #344d6c;\n  border-color: #304763;\n}\n\n.btn-vk[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-vk[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-vk.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(69, 102, 142, 0.5);\n}\n\n.btn-yahoo[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #400191;\n  border-color: #400191;\n}\n\n.btn-yahoo[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #2f016b;\n  border-color: #2a015e;\n}\n\n.btn-yahoo[_ngcontent-%COMP%]:focus, .btn-yahoo.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(64, 1, 145, 0.5);\n}\n\n.btn-yahoo.disabled[_ngcontent-%COMP%], .btn-yahoo[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #400191;\n  border-color: #400191;\n}\n\n.btn-yahoo[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-yahoo[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-yahoo.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #2a015e;\n  border-color: #240152;\n}\n\n.btn-yahoo[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-yahoo[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-yahoo.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 1, 145, 0.5);\n}\n\n.btn-behance[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1769ff;\n  border-color: #1769ff;\n}\n\n.btn-behance[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0055f0;\n  border-color: #0050e3;\n}\n\n.btn-behance[_ngcontent-%COMP%]:focus, .btn-behance.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 105, 255, 0.5);\n}\n\n.btn-behance.disabled[_ngcontent-%COMP%], .btn-behance[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #1769ff;\n  border-color: #1769ff;\n}\n\n.btn-behance[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-behance[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-behance.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0050e3;\n  border-color: #004cd6;\n}\n\n.btn-behance[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-behance[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-behance.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 105, 255, 0.5);\n}\n\n.btn-dropbox[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007ee5;\n  border-color: #007ee5;\n}\n\n.btn-dropbox[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0069bf;\n  border-color: #0062b2;\n}\n\n.btn-dropbox[_ngcontent-%COMP%]:focus, .btn-dropbox.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 126, 229, 0.5);\n}\n\n.btn-dropbox.disabled[_ngcontent-%COMP%], .btn-dropbox[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #007ee5;\n  border-color: #007ee5;\n}\n\n.btn-dropbox[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-dropbox[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-dropbox.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0062b2;\n  border-color: #005ba5;\n}\n\n.btn-dropbox[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-dropbox[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-dropbox.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 126, 229, 0.5);\n}\n\n.btn-reddit[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff4500;\n  border-color: #ff4500;\n}\n\n.btn-reddit[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #d93b00;\n  border-color: #cc3700;\n}\n\n.btn-reddit[_ngcontent-%COMP%]:focus, .btn-reddit.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 69, 0, 0.5);\n}\n\n.btn-reddit.disabled[_ngcontent-%COMP%], .btn-reddit[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #ff4500;\n  border-color: #ff4500;\n}\n\n.btn-reddit[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-reddit[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-reddit.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #cc3700;\n  border-color: #bf3400;\n}\n\n.btn-reddit[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-reddit[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-reddit.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 69, 0, 0.5);\n}\n\n.btn-spotify[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #7ab800;\n  border-color: #7ab800;\n}\n\n.btn-spotify[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #619200;\n  border-color: #588500;\n}\n\n.btn-spotify[_ngcontent-%COMP%]:focus, .btn-spotify.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(122, 184, 0, 0.5);\n}\n\n.btn-spotify.disabled[_ngcontent-%COMP%], .btn-spotify[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #7ab800;\n  border-color: #7ab800;\n}\n\n.btn-spotify[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-spotify[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-spotify.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #588500;\n  border-color: #507800;\n}\n\n.btn-spotify[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-spotify[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-spotify.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(122, 184, 0, 0.5);\n}\n\n.btn-vine[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00bf8f;\n  border-color: #00bf8f;\n}\n\n.btn-vine[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #009972;\n  border-color: #008c69;\n}\n\n.btn-vine[_ngcontent-%COMP%]:focus, .btn-vine.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 191, 143, 0.5);\n}\n\n.btn-vine.disabled[_ngcontent-%COMP%], .btn-vine[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #00bf8f;\n  border-color: #00bf8f;\n}\n\n.btn-vine[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-vine[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-vine.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #008c69;\n  border-color: #007f5f;\n}\n\n.btn-vine[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-vine[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-vine.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 191, 143, 0.5);\n}\n\n.btn-foursquare[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1073af;\n  border-color: #1073af;\n}\n\n.btn-foursquare[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0d5c8c;\n  border-color: #0c5480;\n}\n\n.btn-foursquare[_ngcontent-%COMP%]:focus, .btn-foursquare.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(16, 115, 175, 0.5);\n}\n\n.btn-foursquare.disabled[_ngcontent-%COMP%], .btn-foursquare[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #1073af;\n  border-color: #1073af;\n}\n\n.btn-foursquare[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-foursquare[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-foursquare.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0c5480;\n  border-color: #0b4d75;\n}\n\n.btn-foursquare[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-foursquare[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-foursquare.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(16, 115, 175, 0.5);\n}\n\n.btn-vimeo[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #aad450;\n  border-color: #aad450;\n}\n\n.btn-vimeo[_ngcontent-%COMP%]:hover {\n  color: #23282c;\n  background-color: #9bcc32;\n  border-color: #93c130;\n}\n\n.btn-vimeo[_ngcontent-%COMP%]:focus, .btn-vimeo.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(170, 212, 80, 0.5);\n}\n\n.btn-vimeo.disabled[_ngcontent-%COMP%], .btn-vimeo[_ngcontent-%COMP%]:disabled {\n  color: #23282c;\n  background-color: #aad450;\n  border-color: #aad450;\n}\n\n.btn-vimeo[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-vimeo[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-vimeo.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #93c130;\n  border-color: #8bb72d;\n}\n\n.btn-vimeo[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-vimeo[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-vimeo.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(170, 212, 80, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn-transparent[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn[_ngcontent-%COMP%]   [class^=icon-][_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]   [class*=\" icon-\"][_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n\n.btn-pill[_ngcontent-%COMP%] {\n  border-radius: 50em;\n}\n\n.btn-square[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.btn-ghost-primary[_ngcontent-%COMP%] {\n  color: #20a8d8;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #20a8d8;\n  border-color: #20a8d8;\n}\n\n.btn-ghost-primary[_ngcontent-%COMP%]:focus, .btn-ghost-primary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(32, 168, 216, 0.5);\n}\n\n.btn-ghost-primary.disabled[_ngcontent-%COMP%], .btn-ghost-primary[_ngcontent-%COMP%]:disabled {\n  color: #20a8d8;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #20a8d8;\n  border-color: #20a8d8;\n}\n\n.btn-ghost-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(32, 168, 216, 0.5);\n}\n\n.btn-ghost-secondary[_ngcontent-%COMP%] {\n  color: #c8ced3;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-secondary[_ngcontent-%COMP%]:hover {\n  color: #23282c;\n  background-color: #c8ced3;\n  border-color: #c8ced3;\n}\n\n.btn-ghost-secondary[_ngcontent-%COMP%]:focus, .btn-ghost-secondary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(200, 206, 211, 0.5);\n}\n\n.btn-ghost-secondary.disabled[_ngcontent-%COMP%], .btn-ghost-secondary[_ngcontent-%COMP%]:disabled {\n  color: #c8ced3;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #c8ced3;\n  border-color: #c8ced3;\n}\n\n.btn-ghost-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(200, 206, 211, 0.5);\n}\n\n.btn-ghost-success[_ngcontent-%COMP%] {\n  color: #4dbd74;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #4dbd74;\n  border-color: #4dbd74;\n}\n\n.btn-ghost-success[_ngcontent-%COMP%]:focus, .btn-ghost-success.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(77, 189, 116, 0.5);\n}\n\n.btn-ghost-success.disabled[_ngcontent-%COMP%], .btn-ghost-success[_ngcontent-%COMP%]:disabled {\n  color: #4dbd74;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-success.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #4dbd74;\n  border-color: #4dbd74;\n}\n\n.btn-ghost-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-success.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(77, 189, 116, 0.5);\n}\n\n.btn-ghost-info[_ngcontent-%COMP%] {\n  color: #63c2de;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-info[_ngcontent-%COMP%]:hover {\n  color: #23282c;\n  background-color: #63c2de;\n  border-color: #63c2de;\n}\n\n.btn-ghost-info[_ngcontent-%COMP%]:focus, .btn-ghost-info.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(99, 194, 222, 0.5);\n}\n\n.btn-ghost-info.disabled[_ngcontent-%COMP%], .btn-ghost-info[_ngcontent-%COMP%]:disabled {\n  color: #63c2de;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-info.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #63c2de;\n  border-color: #63c2de;\n}\n\n.btn-ghost-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-info.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(99, 194, 222, 0.5);\n}\n\n.btn-ghost-warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-warning[_ngcontent-%COMP%]:hover {\n  color: #23282c;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-ghost-warning[_ngcontent-%COMP%]:focus, .btn-ghost-warning.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-ghost-warning.disabled[_ngcontent-%COMP%], .btn-ghost-warning[_ngcontent-%COMP%]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-warning.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-ghost-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-warning.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-ghost-danger[_ngcontent-%COMP%] {\n  color: #f86c6b;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f86c6b;\n  border-color: #f86c6b;\n}\n\n.btn-ghost-danger[_ngcontent-%COMP%]:focus, .btn-ghost-danger.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 108, 107, 0.5);\n}\n\n.btn-ghost-danger.disabled[_ngcontent-%COMP%], .btn-ghost-danger[_ngcontent-%COMP%]:disabled {\n  color: #f86c6b;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-danger.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f86c6b;\n  border-color: #f86c6b;\n}\n\n.btn-ghost-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-danger.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 108, 107, 0.5);\n}\n\n.btn-ghost-light[_ngcontent-%COMP%] {\n  color: #f0f3f5;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-light[_ngcontent-%COMP%]:hover {\n  color: #23282c;\n  background-color: #f0f3f5;\n  border-color: #f0f3f5;\n}\n\n.btn-ghost-light[_ngcontent-%COMP%]:focus, .btn-ghost-light.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(240, 243, 245, 0.5);\n}\n\n.btn-ghost-light.disabled[_ngcontent-%COMP%], .btn-ghost-light[_ngcontent-%COMP%]:disabled {\n  color: #f0f3f5;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-light.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #23282c;\n  background-color: #f0f3f5;\n  border-color: #f0f3f5;\n}\n\n.btn-ghost-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-light.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(240, 243, 245, 0.5);\n}\n\n.btn-ghost-dark[_ngcontent-%COMP%] {\n  color: #2f353a;\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n}\n\n.btn-ghost-dark[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #2f353a;\n  border-color: #2f353a;\n}\n\n.btn-ghost-dark[_ngcontent-%COMP%]:focus, .btn-ghost-dark.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(47, 53, 58, 0.5);\n}\n\n.btn-ghost-dark.disabled[_ngcontent-%COMP%], .btn-ghost-dark[_ngcontent-%COMP%]:disabled {\n  color: #2f353a;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-ghost-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-ghost-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-ghost-dark.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #2f353a;\n  border-color: #2f353a;\n}\n\n.btn-ghost-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-ghost-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-ghost-dark.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(47, 53, 58, 0.5);\n}"];



/***/ }),

/***/ "./src/app/panel/clients/edit/auth/auth.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/panel/clients/edit/auth/auth.component.ts ***!
  \***********************************************************/
/*! exports provided: ClientAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAuthComponent", function() { return ClientAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ClientAuthComponent {
    constructor(route, translator) {
        this.route = route;
        this.translator = translator;
    }
    ngOnInit() {
    }
    addIdentityProvidersRestrictions(type) {
        if (this.model.identityProviderRestrictions.find(a => a == type) == null)
            this.model.identityProviderRestrictions.push(type);
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/basic/basic.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/clients/edit/basic/basic.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_ClientBasicComponent, View_ClientBasicComponent_0, View_ClientBasicComponent_Host_0, ClientBasicComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientBasicComponent", function() { return RenderType_ClientBasicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientBasicComponent_0", function() { return View_ClientBasicComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientBasicComponent_Host_0", function() { return View_ClientBasicComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientBasicComponentNgFactory", function() { return ClientBasicComponentNgFactory; });
/* harmony import */ var _basic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/basic/basic.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory */ "./node_modules/ngx-image-cropper/ngx-image-cropper.ngfactory.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-chips/ngx-chips.ngfactory */ "./node_modules/ngx-chips/ngx-chips.ngfactory.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic.component */ "./src/app/panel/clients/edit/basic/basic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/settings/settings.service */ "./src/app/core/settings/settings.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_ClientBasicComponent = [_basic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientBasicComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientBasicComponent, data: {} });

function View_ClientBasicComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "input", [["autocomplete", "client-logoUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.logoUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.model.logoUri; _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.logoUri-tooltip")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_ClientBasicComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-lg-3 col-md-12 justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-thumbnail"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "col-lg-9 col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "image-cropper", [["format", "png"], ["outputType", "base64"]], [[4, "text-align", null], [2, "disabled", null]], [[null, "imageCropped"], [null, "imageLoaded"], [null, "loadImageFailed"], ["window", "resize"], ["document", "mousemove"], ["document", "touchmove"], ["document", "pinchmove"], ["document", "mouseup"], ["document", "touchend"], ["document", "pinchend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("window:resize" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onResize() !== false);
                ad = (pd_0 && ad);
            }
            if (("document:mousemove" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveImg($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("document:touchmove" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveImg($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("document:pinchmove" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onPinch($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("document:mouseup" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveStop() !== false);
                ad = (pd_4 && ad);
            }
            if (("document:touchend" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).moveStop() !== false);
                ad = (pd_5 && ad);
            }
            if (("document:pinchend" === en)) {
                var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).pinchStop() !== false);
                ad = (pd_6 && ad);
            }
            if (("imageCropped" === en)) {
                var pd_7 = (_co.imageCropped($event) !== false);
                ad = (pd_7 && ad);
            }
            if (("imageLoaded" === en)) {
                var pd_8 = (_co.imageLoaded() !== false);
                ad = (pd_8 && ad);
            }
            if (("loadImageFailed" === en)) {
                var pd_9 = (_co.loadImageFailed() !== false);
                ad = (pd_9 && ad);
            }
            return ad;
        }, _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ImageCropperComponent_0"], _node_modules_ngx_image_cropper_ngx_image_cropper_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ImageCropperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { imageChangedEvent: [0, "imageChangedEvent"], format: [1, "format"], maintainAspectRatio: [2, "maintainAspectRatio"] }, { imageCropped: "imageCropped", imageLoaded: "imageLoaded", loadImageFailed: "loadImageFailed" })], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.imageChangedEvent; var currVal_4 = "png"; var currVal_5 = false; _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.croppedImage; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).alignImage; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled; _ck(_v, 4, 0, currVal_1, currVal_2); });
}
function View_ClientBasicComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "input", [["autocomplete", "client-logoUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.logoUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.model.logoUri; _ck(_v, 3, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("client.details.logoUri-tooltip")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_ClientBasicComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientBasicComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "input-group mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientBasicComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "label", [["class", "file-upload"], ["for", "image-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload Image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "input", [["id", "image-input"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.fileChangeEvent($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showCropper; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.showCropper; _ck(_v, 6, 0, currVal_1); }, null);
}
function View_ClientBasicComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 93, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "input", [["autocomplete", "client-id"], ["class", "form-control"], ["placeholder", "ClientId"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientId = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 14, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "input", [["autocomplete", "client-name"], ["class", "form-control"], ["placeholder", "Name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "input", [["autocomplete", "client-description"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.description = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 6, "input", [["autocomplete", "client-clientUri"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientUri = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 12, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 11, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](68, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 4, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientBasicComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientBasicComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 17, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 16, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](81, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 9, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 8, "tag-input", [["name", "allowedCorsOrigins"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.allowedCorsOrigins = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_10__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("client.details.clientId-tooltip")); var currVal_1 = "top"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_10 = _co.model.clientId; _ck(_v, 13, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("client.details.name-tooltip")); var currVal_12 = "top"; _ck(_v, 19, 0, currVal_11, currVal_12); var currVal_21 = _co.model.clientName; _ck(_v, 28, 0, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 34, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).transform("client.details.description-tooltip")); var currVal_23 = "top"; _ck(_v, 34, 0, currVal_22, currVal_23); var currVal_33 = _co.model.description; _ck(_v, 43, 0, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 50, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).transform("client.details.clientUri-tooltip")); var currVal_35 = "top"; _ck(_v, 50, 0, currVal_34, currVal_35); var currVal_45 = _co.model.clientUri; _ck(_v, 59, 0, currVal_45); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).transform("client.details.logoUri-tooltip")); var currVal_47 = "top"; _ck(_v, 66, 0, currVal_46, currVal_47); var currVal_49 = _co.settings.lightVersion; _ck(_v, 73, 0, currVal_49); var currVal_50 = !_co.settings.lightVersion; _ck(_v, 75, 0, currVal_50); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 79, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).transform("client.details.allowedCorsOrigins-tooltip")); var currVal_52 = "top"; _ck(_v, 79, 0, currVal_51, currVal_52); var currVal_62 = ("+" + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 86, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).transform("client.details.allowedCorsOrigins"))); var currVal_63 = "bootstrap"; var currVal_64 = true; _ck(_v, 86, 0, currVal_62, currVal_63, currVal_64); var currVal_65 = "allowedCorsOrigins"; var currVal_66 = _co.model.allowedCorsOrigins; _ck(_v, 91, 0, currVal_65, currVal_66); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.clientId")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("client.details.name")); _ck(_v, 21, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 25, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).transform("client.details.description")); _ck(_v, 36, 0, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).transform("client.details.description-tooltip")); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 40, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("client.details.clientUri")); _ck(_v, 52, 0, currVal_36); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 56, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).transform("client.details.clientUri-tooltip")); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassUntouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassTouched; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPristine; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassDirty; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassValid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassInvalid; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 56, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 68, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).transform("client.details.logoUri")); _ck(_v, 68, 0, currVal_48); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 81, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).transform("client.details.allowedCorsOrigins")); _ck(_v, 81, 0, currVal_53); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).tabindexAttr; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassUntouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassTouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassPristine; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassDirty; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassValid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassInvalid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ngClassPending; _ck(_v, 85, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); });
}
function View_ClientBasicComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-basic", [], null, null, null, View_ClientBasicComponent_0, RenderType_ClientBasicComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _basic_component__WEBPACK_IMPORTED_MODULE_11__["ClientBasicComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_13__["TranslatorService"], _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientBasicComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-basic", _basic_component__WEBPACK_IMPORTED_MODULE_11__["ClientBasicComponent"], View_ClientBasicComponent_Host_0, { model: "model" }, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/basic/basic.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/clients/edit/basic/basic.component.scss.shim.ngstyle.js ***!
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

/***/ "./src/app/panel/clients/edit/basic/basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/clients/edit/basic/basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientBasicComponent", function() { return ClientBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_file_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/file.model */ "./src/app/shared/viewModel/file.model.ts");


class ClientBasicComponent {
    constructor(route, translator, settings) {
        this.route = route;
        this.translator = translator;
        this.settings = settings;
        // Image settings
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    ngOnInit() {
    }
    fileChangeEvent(event) {
        if (event == null || event.target == null)
            return;
        const fileToUpload = event.target.files.item(0);
        this.file = fileToUpload;
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload);
        this.imageChangedEvent = event;
        this.showCropper = true;
    }
    imageCropped(event) {
        this.model.logo = new _shared_viewModel_file_model__WEBPACK_IMPORTED_MODULE_1__["FileViewModel"](this.file.name, this.file.type, event.base64.split(',')[1]);
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        this.showCropper = true;
    }
    loadImageFailed() {
        // show message
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/client-edit.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/clients/edit/client-edit.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_ClientEditComponent, View_ClientEditComponent_0, View_ClientEditComponent_Host_0, ClientEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientEditComponent", function() { return RenderType_ClientEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientEditComponent_0", function() { return View_ClientEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientEditComponent_Host_0", function() { return View_ClientEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponentNgFactory", function() { return ClientEditComponentNgFactory; });
/* harmony import */ var _client_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-edit.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/client-edit.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory */ "./node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert.ngfactory.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _basic_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/basic.component.ngfactory */ "./src/app/panel/clients/edit/basic/basic.component.ngfactory.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/panel/clients/edit/basic/basic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/settings/settings.service */ "./src/app/core/settings/settings.service.ts");
/* harmony import */ var _settings_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component.ngfactory */ "./src/app/panel/clients/edit/settings/settings.component.ngfactory.js");
/* harmony import */ var _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/scope.service */ "./src/app/shared/services/scope.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/panel/clients/edit/settings/settings.component.ts");
/* harmony import */ var _auth_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.component.ngfactory */ "./src/app/panel/clients/edit/auth/auth.component.ngfactory.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/panel/clients/edit/auth/auth.component.ts");
/* harmony import */ var _token_token_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./token/token.component.ngfactory */ "./src/app/panel/clients/edit/token/token.component.ngfactory.js");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./token/token.component */ "./src/app/panel/clients/edit/token/token.component.ts");
/* harmony import */ var _device_flow_device_flow_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./device-flow/device-flow.component.ngfactory */ "./src/app/panel/clients/edit/device-flow/device-flow.component.ngfactory.js");
/* harmony import */ var _device_flow_device_flow_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./device-flow/device-flow.component */ "./src/app/panel/clients/edit/device-flow/device-flow.component.ts");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _client_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./client-edit.component */ "./src/app/panel/clients/edit/client-edit.component.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






























var styles_ClientEditComponent = [_client_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientEditComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientEditComponent, data: {} });

function View_ClientEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientEditComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientEditComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientEditComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientEditComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["width", "150"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.logoUri; _ck(_v, 0, 0, currVal_0); }); }
function View_ClientEditComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 41, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientEditComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\u00A0", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 28, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 27, "tabset", [], [[2, "tab-container", null]], null, null, _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TabsetComponent_0"], _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 4, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { heading: [0, "heading"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "app-client-basic", [], null, null, null, _basic_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ClientBasicComponent_0"], _basic_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ClientBasicComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, _basic_basic_component__WEBPACK_IMPORTED_MODULE_12__["ClientBasicComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"]], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 5, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { heading: [0, "heading"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "app-client-settings", [], null, null, null, _settings_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_ClientSettingsComponent_0"], _settings_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_ClientSettingsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_16__["ScopeService"], _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_16__["ScopeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 114688, null, 0, _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["ClientSettingsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_16__["ScopeService"]], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 4, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { heading: [0, "heading"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "app-client-auth", [], null, null, null, _auth_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_ClientAuthComponent_0"], _auth_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_ClientAuthComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, null, 0, _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__["ClientAuthComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 4, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { heading: [0, "heading"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "app-client-token", [], null, null, null, _token_token_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ClientTokenComponent_0"], _token_token_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ClientTokenComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, null, 0, _token_token_component__WEBPACK_IMPORTED_MODULE_22__["ClientTokenComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 4, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { heading: [0, "heading"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "app-client-device-flow", [], null, null, null, _device_flow_device_flow_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_ClientDeviceFlowComponent_0"], _device_flow_device_flow_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_ClientDeviceFlowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 114688, null, 0, _device_flow_device_flow_component__WEBPACK_IMPORTED_MODULE_24__["ClientDeviceFlowComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.update() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](40, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.logoUri; _ck(_v, 4, 0, currVal_0); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("client.details.basic")); _ck(_v, 10, 0, currVal_8); var currVal_9 = _co.model; _ck(_v, 13, 0, currVal_9); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform("client.details.settings")); _ck(_v, 15, 0, currVal_15); var currVal_16 = _co.model; _ck(_v, 19, 0, currVal_16); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("client.details.auth")); _ck(_v, 21, 0, currVal_22); var currVal_23 = _co.model; _ck(_v, 24, 0, currVal_23); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).transform("client.details.token")); _ck(_v, 26, 0, currVal_29); var currVal_30 = _co.model; _ck(_v, 29, 0, currVal_30); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transform("client.details.deviceFlow")); _ck(_v, 31, 0, currVal_36); var currVal_37 = _co.model; _ck(_v, 34, 0, currVal_37); var currVal_40 = _ck(_v, 40, 0, "/clients"); _ck(_v, 39, 0, currVal_40); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.model.clientName; _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).clazz; _ck(_v, 7, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).id; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).active; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).addClass; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).role; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ariaLabelledby; _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).addClass; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).role; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ariaLabelledby; _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).active; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).addClass; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).role; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ariaLabelledby; _ck(_v, 20, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).id; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).active; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).addClass; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).role; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ariaLabelledby; _ck(_v, 25, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).active; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).addClass; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).role; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ariaLabelledby; _ck(_v, 30, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).target; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).href; _ck(_v, 38, 0, currVal_38, currVal_39); });
}
function View_ClientEditComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientEditComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientEditComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientEditComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientEditComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientEditComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_26__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 11, 0, currVal_2); var currVal_3 = (_co.errors.length > 0); _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.model; _ck(_v, 15, 0, currVal_4); var currVal_5 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_5); var currVal_6 = _co.toasterconfig; _ck(_v, 19, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("client.ClientDescription")); _ck(_v, 8, 0, currVal_1); }); }
function View_ClientEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-edit", [], null, null, null, View_ClientEditComponent_0, RenderType_ClientEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _client_edit_component__WEBPACK_IMPORTED_MODULE_28__["ClientEditComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_29__["ClientService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientEditComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-edit", _client_edit_component__WEBPACK_IMPORTED_MODULE_28__["ClientEditComponent"], View_ClientEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/client-edit.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/clients/edit/client-edit.component.scss.shim.ngstyle.js ***!
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

/***/ "./src/app/panel/clients/edit/client-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/clients/edit/client-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/client.model */ "./src/app/shared/viewModel/client.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-json-patch */ "./node_modules/fast-json-patch/index.mjs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class ClientEditComponent {
    constructor(route, router, translator, clientService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.clientService = clientService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            showCloseButton: true,
            timeout: 2000
        });
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(p => this.clientId = p["clientId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(p => this.clientService.getClientDetails(p["clientId"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(client => this.patchObserver = fast_json_patch__WEBPACK_IMPORTED_MODULE_4__["observe"](client)))
            .subscribe(result => this.model = result);
        this.errors = [];
        this.showButtonLoading = false;
    }
    update() {
        if (!_shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["Client"].isValid(this.model, this.errors))
            return;
        this.showButtonLoading = true;
        this.errors = [];
        this.clientService.update(this.clientId, this.model).subscribe(() => {
            this.updateCurrentClientId();
            this.showSuccessMessage();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    updateCurrentClientId() {
        this.clientId = this.model.clientId;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/device-flow/device-flow.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/panel/clients/edit/device-flow/device-flow.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_ClientDeviceFlowComponent, View_ClientDeviceFlowComponent_0, View_ClientDeviceFlowComponent_Host_0, ClientDeviceFlowComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientDeviceFlowComponent", function() { return RenderType_ClientDeviceFlowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientDeviceFlowComponent_0", function() { return View_ClientDeviceFlowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientDeviceFlowComponent_Host_0", function() { return View_ClientDeviceFlowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDeviceFlowComponentNgFactory", function() { return ClientDeviceFlowComponentNgFactory; });
/* harmony import */ var _device_flow_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-flow.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/device-flow/device-flow.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/numberCheck/numbers-only.directive */ "./src/app/shared/directives/numberCheck/numbers-only.directive.ts");
/* harmony import */ var _device_flow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-flow.component */ "./src/app/panel/clients/edit/device-flow/device-flow.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */









var styles_ClientDeviceFlowComponent = [_device_flow_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientDeviceFlowComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientDeviceFlowComponent, data: {} });

function View_ClientDeviceFlowComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "input", [["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.userCodeType = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 8, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "input", [["autocomplete", "client-deviceCodeLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.deviceCodeLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("client.details.userCodeType-tooltip")); var currVal_1 = "top"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_11 = _co.model.userCodeType; _ck(_v, 13, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("client.details.deviceCodeLifetime-tooltip")); var currVal_13 = "top"; _ck(_v, 20, 0, currVal_12, currVal_13); var currVal_23 = _co.model.deviceCodeLifetime; _ck(_v, 29, 0, currVal_23); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.userCodeType")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform("client.details.userCodeType-tooltip")); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).transform("client.details.deviceCodeLifetime")); _ck(_v, 22, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).transform("client.details.deviceCodeLifetime-tooltip")); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending; _ck(_v, 26, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); });
}
function View_ClientDeviceFlowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-device-flow", [], null, null, null, View_ClientDeviceFlowComponent_0, RenderType_ClientDeviceFlowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _device_flow_component__WEBPACK_IMPORTED_MODULE_6__["ClientDeviceFlowComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_8__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientDeviceFlowComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-device-flow", _device_flow_component__WEBPACK_IMPORTED_MODULE_6__["ClientDeviceFlowComponent"], View_ClientDeviceFlowComponent_Host_0, { model: "model" }, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/device-flow/device-flow.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/panel/clients/edit/device-flow/device-flow.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
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

/***/ "./src/app/panel/clients/edit/device-flow/device-flow.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/clients/edit/device-flow/device-flow.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientDeviceFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDeviceFlowComponent", function() { return ClientDeviceFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ClientDeviceFlowComponent {
    constructor(route, translator) {
        this.route = route;
        this.translator = translator;
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/settings/settings.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/clients/edit/settings/settings.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ClientSettingsComponent, View_ClientSettingsComponent_0, View_ClientSettingsComponent_Host_0, ClientSettingsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientSettingsComponent", function() { return RenderType_ClientSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientSettingsComponent_0", function() { return View_ClientSettingsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientSettingsComponent_Host_0", function() { return View_ClientSettingsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSettingsComponentNgFactory", function() { return ClientSettingsComponentNgFactory; });
/* harmony import */ var _settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/settings/settings.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-chips/ngx-chips.ngfactory */ "./node_modules/ngx-chips/ngx-chips.ngfactory.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/scope.service */ "./src/app/shared/services/scope.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings.component */ "./src/app/panel/clients/edit/settings/settings.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


















var styles_ClientSettingsComponent = [_settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientSettingsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientSettingsComponent, data: {} });

function View_ClientSettingsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 279, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.enabled = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 19, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 18, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 11, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 10, "tag-input", [["name", "allowedScopes"], ["placeholder", "+Scope"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.allowedScopes = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 2, "tag-input-dropdown", [], null, [["window", "scroll"], ["window", "blur"]], function (_v, en, $event) {
            var ad = true;
            if (("window:scroll" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).scrollListener() !== false);
                ad = (pd_0 && ad);
            }
            if (("window:blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onWindowBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TagInputDropdown_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TagInputDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 4243456, [[1, 4]], 1, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { autocompleteObservable: [0, "autocompleteObservable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { templates: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 7, "tag-input", [["name", "redirectUris"], ["placeholder", "+Url"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.redirectUris = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](66, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](67, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 44, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 43, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "auto"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_10__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_11__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 7, "tag-input", [["name", "allowedGrantTypes"], ["placeholder", "+Grant"], ["theme", "bootstrap"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.model.allowedGrantTypes = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"]], { placeholder: [0, "placeholder"], theme: [1, "theme"], modelAsStrings: [2, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 23, "div", [["class", "col-xl-8 offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Options:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "button", [["class", "btn btn-oval btn-sm btn-info mb-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addGrantType("implicit") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["implicit\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 2, "button", [["class", "btn btn-oval btn-sm btn-info mb-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addGrantType("hybrid") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hybrid\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 2, "button", [["class", "btn btn-oval btn-sm btn-info mb-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addGrantType("client_credentials") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["client_credentials\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 2, "button", [["class", "btn btn-oval btn-sm btn-info mb-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addGrantType("authorization_code") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["authorization_code\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 2, "button", [["class", "btn btn-oval btn-sm btn-info mb-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addGrantType("password") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["password\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](119, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.requireConsent = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](136, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.allowRememberConsent = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](153, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.allowOfflineAccess = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](168, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](170, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.requireClientSecret = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](187, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 20, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 19, "ng-select", [["placeholder", "ProtocolType"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.protocolType = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](193, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵs"]], { placeholder: [0, "placeholder"], items: [1, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](206, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](208, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](210, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](216, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.requirePkce = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](224, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](226, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 231).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 231).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 231).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 231).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 231).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](231, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](233, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.allowPlainTextPkce = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](239, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](241, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](243, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](245, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](249, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "auto"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](253, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_10__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_11__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](259, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 260).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 260).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.allowAccessTokensViaBrowser = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](260, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](262, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](264, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](269, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](271, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 276).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](276, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](277, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](278, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("client.details.enabled-tooltip")); var currVal_1 = "top"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_10 = _co.model.enabled; _ck(_v, 14, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("client.details.allowedScopes-tooltip")); var currVal_12 = "top"; _ck(_v, 21, 0, currVal_11, currVal_12); var currVal_22 = "+Scope"; var currVal_23 = "bootstrap"; var currVal_24 = true; _ck(_v, 28, 0, currVal_22, currVal_23, currVal_24); var currVal_25 = "allowedScopes"; var currVal_26 = _co.model.allowedScopes; _ck(_v, 32, 0, currVal_25, currVal_26); var currVal_27 = _co.requestScopeItems; _ck(_v, 36, 0, currVal_27); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform("client.details.redirectUris-tooltip")); var currVal_29 = "top"; _ck(_v, 41, 0, currVal_28, currVal_29); var currVal_39 = "+Url"; var currVal_40 = "bootstrap"; var currVal_41 = true; _ck(_v, 48, 0, currVal_39, currVal_40, currVal_41); var currVal_42 = "redirectUris"; var currVal_43 = _co.model.redirectUris; _ck(_v, 52, 0, currVal_42, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).transform("client.details.clientSecrets-tooltip")); var currVal_45 = "top"; _ck(_v, 58, 0, currVal_44, currVal_45); var currVal_49 = _ck(_v, 66, 0, "/clients", _co.model.clientId, "secrets"); _ck(_v, 65, 0, currVal_49); var currVal_52 = false; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).transform("client.details.allowedGrantTypes-tooltip")); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).transform("client.details.allowedGrantTypes")); var currVal_55 = "auto"; var currVal_56 = "body"; _ck(_v, 77, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_65 = "+Grant"; var currVal_66 = "bootstrap"; var currVal_67 = true; _ck(_v, 83, 0, currVal_65, currVal_66, currVal_67); var currVal_68 = "allowedGrantTypes"; var currVal_69 = _co.model.allowedGrantTypes; _ck(_v, 87, 0, currVal_68, currVal_69); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 117, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).transform("client.details.requireConsent-tooltip")); var currVal_71 = "top"; _ck(_v, 117, 0, currVal_70, currVal_71); var currVal_80 = _co.model.requireConsent; _ck(_v, 127, 0, currVal_80); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 134, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).transform("client.details.allowRememberConsent-tooltip")); var currVal_82 = "top"; _ck(_v, 134, 0, currVal_81, currVal_82); var currVal_91 = _co.model.allowRememberConsent; _ck(_v, 144, 0, currVal_91); var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 151, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).transform("client.details.allowOfflineAccess-tooltip")); var currVal_93 = "top"; _ck(_v, 151, 0, currVal_92, currVal_93); var currVal_102 = _co.model.allowOfflineAccess; _ck(_v, 161, 0, currVal_102); var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 168, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).transform("client.details.requireClientSecret-tooltip")); var currVal_104 = "top"; _ck(_v, 168, 0, currVal_103, currVal_104); var currVal_113 = _co.model.requireClientSecret; _ck(_v, 178, 0, currVal_113); var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 185, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).transform("client.details.protocolType-tooltip")); var currVal_115 = "top"; _ck(_v, 185, 0, currVal_114, currVal_115); var currVal_134 = "ProtocolType"; var currVal_135 = _ck(_v, 206, 0, _co.model.protocolType); _ck(_v, 193, 0, currVal_134, currVal_135); var currVal_136 = _co.model.protocolType; _ck(_v, 208, 0, currVal_136); var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 214, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).transform("client.details.requirePkce-tooltip")); var currVal_138 = "top"; _ck(_v, 214, 0, currVal_137, currVal_138); var currVal_147 = _co.model.requirePkce; _ck(_v, 224, 0, currVal_147); var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 231, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).transform("client.details.allowPlainTextPkce-tooltip")); var currVal_149 = "top"; _ck(_v, 231, 0, currVal_148, currVal_149); var currVal_158 = _co.model.allowPlainTextPkce; _ck(_v, 241, 0, currVal_158); var currVal_160 = false; var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 253, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).transform("client.details.allowAccessTokensViaBrowser-tooltip")); var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 253, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).transform("client.details.allowAccessTokensViaBrowser")); var currVal_163 = "auto"; var currVal_164 = "body"; _ck(_v, 253, 0, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164); var currVal_172 = _co.model.allowAccessTokensViaBrowser; _ck(_v, 262, 0, currVal_172); var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 269, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 270).transform("client.details.properties-tooltip")); var currVal_174 = "top"; _ck(_v, 269, 0, currVal_173, currVal_174); var currVal_178 = _ck(_v, 277, 0, "/clients", _co.model.clientId, "properties"); _ck(_v, 276, 0, currVal_178); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.enabled")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transform("client.details.allowedScopes")); _ck(_v, 23, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).tabindexAttr; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 27, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).transform("client.details.redirectUris")); _ck(_v, 43, 0, currVal_30); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).tabindexAttr; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending; _ck(_v, 47, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).transform("client.details.clientSecrets")); _ck(_v, 60, 0, currVal_46); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).target; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).href; _ck(_v, 64, 0, currVal_47, currVal_48); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 67, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).transform("client.details.clientSecrets")); _ck(_v, 67, 0, currVal_50); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).transform("client.details.allowedGrantTypes")); _ck(_v, 73, 0, currVal_51); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).tabindexAttr; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassUntouched; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassTouched; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPristine; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassDirty; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassValid; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassInvalid; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 82, 0, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 119, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).transform("client.details.requireConsent")); _ck(_v, 119, 0, currVal_72); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassUntouched; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassTouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassPristine; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassDirty; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassValid; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassInvalid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassPending; _ck(_v, 124, 0, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 136, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).transform("client.details.allowRememberConsent")); _ck(_v, 136, 0, currVal_83); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassUntouched; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassTouched; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassPristine; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassDirty; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassValid; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassInvalid; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).ngClassPending; _ck(_v, 141, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90); var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 153, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).transform("client.details.allowOfflineAccess")); _ck(_v, 153, 0, currVal_94); var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassUntouched; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassTouched; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassPristine; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassDirty; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassValid; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassInvalid; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).ngClassPending; _ck(_v, 158, 0, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101); var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 170, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).transform("client.details.requireClientSecret")); _ck(_v, 170, 0, currVal_105); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassUntouched; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassTouched; var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassPristine; var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassDirty; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassValid; var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassInvalid; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassPending; _ck(_v, 175, 0, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112); var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 187, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 188).transform("client.details.protocolType")); _ck(_v, 187, 0, currVal_116); var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).useDefaultClass; var currVal_118 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).multiple; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).typeahead; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).multiple; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).addTag; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).searchable; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).clearable; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).isOpen; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).disabled; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).filtered; var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassUntouched; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassTouched; var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassPristine; var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassDirty; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassValid; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassInvalid; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).ngClassPending; _ck(_v, 191, 1, [currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133]); var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 216, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 217).transform("client.details.requirePkce")); _ck(_v, 216, 0, currVal_139); var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassUntouched; var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassTouched; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassPristine; var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassDirty; var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassValid; var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassInvalid; var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassPending; _ck(_v, 221, 0, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146); var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 233, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 234).transform("client.details.allowPlainTextPkce")); _ck(_v, 233, 0, currVal_150); var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassUntouched; var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassTouched; var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassPristine; var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassDirty; var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassValid; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassInvalid; var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).ngClassPending; _ck(_v, 238, 0, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157); var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 249, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 250).transform("client.details.allowAccessTokensViaBrowser")); _ck(_v, 249, 0, currVal_159); var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassUntouched; var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassTouched; var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassPristine; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassDirty; var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassValid; var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassInvalid; var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).ngClassPending; _ck(_v, 259, 0, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171); var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 271, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).transform("client.details.properties")); _ck(_v, 271, 0, currVal_175); var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 276).target; var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 276).href; _ck(_v, 275, 0, currVal_176, currVal_177); var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 278, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).transform("client.details.properties")); _ck(_v, 278, 0, currVal_179); });
}
function View_ClientSettingsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-client-settings", [], null, null, null, View_ClientSettingsComponent_0, RenderType_ClientSettingsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_14__["ScopeService"], _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_14__["ScopeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _settings_component__WEBPACK_IMPORTED_MODULE_16__["ClientSettingsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_17__["TranslatorService"], _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_14__["ScopeService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var ClientSettingsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-settings", _settings_component__WEBPACK_IMPORTED_MODULE_16__["ClientSettingsComponent"], View_ClientSettingsComponent_Host_0, { model: "model" }, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/settings/settings.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/panel/clients/edit/settings/settings.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
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

/***/ "./src/app/panel/clients/edit/settings/settings.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/panel/clients/edit/settings/settings.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSettingsComponent", function() { return ClientSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_scope_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/scope.service */ "./src/app/shared/services/scope.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class ClientSettingsComponent {
    constructor(route, translator, scopeService) {
        this.route = route;
        this.translator = translator;
        this.scopeService = scopeService;
        this.requestScopeItems = (text) => {
            return this.scopeService.getScopes(text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(a => a));
        };
    }
    addGrantType(type) {
        if (this.model.allowedGrantTypes.find(a => a == type) == null)
            this.model.allowedGrantTypes.push(type);
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/panel/clients/edit/token/token.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/panel/clients/edit/token/token.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_ClientTokenComponent, View_ClientTokenComponent_0, View_ClientTokenComponent_Host_0, ClientTokenComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientTokenComponent", function() { return RenderType_ClientTokenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientTokenComponent_0", function() { return View_ClientTokenComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientTokenComponent_Host_0", function() { return View_ClientTokenComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTokenComponentNgFactory", function() { return ClientTokenComponentNgFactory; });
/* harmony import */ var _token_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.component.scss.shim.ngstyle */ "./src/app/panel/clients/edit/token/token.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/numberCheck/numbers-only.directive */ "./src/app/shared/directives/numberCheck/numbers-only.directive.ts");
/* harmony import */ var _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _token_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token.component */ "./src/app/panel/clients/edit/token/token.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_ClientTokenComponent = [_token_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientTokenComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientTokenComponent, data: {} });

function View_ClientTokenComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 294, "div", [["class", "form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "input", [["autocomplete", "client-identityTokenLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.identityTokenLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 7, "input", [["autocomplete", "client-accessTokenLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.accessTokenLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 20, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 19, "ng-select", [["bindLabel", "text"], ["bindValue", "id"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.accessTokenType = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵs"]], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], placeholder: [2, "placeholder"], items: [3, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 7, "input", [["autocomplete", "client-authorizationCodeLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.authorizationCodeLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](86, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 7, "input", [["autocomplete", "client-absoluteRefreshTokenLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.absoluteRefreshTokenLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](103, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 7, "input", [["autocomplete", "client-slidingRefreshTokenLifetime"], ["class", "form-control"], ["numbersOnly", ""]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).onInputChange($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_5 = ((_co.model.slidingRefreshTokenLifetime = $event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, null, 0, _shared_directives_numberCheck_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](120, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 20, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 19, "ng-select", [["bindLabel", "text"], ["bindValue", "id"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.refreshTokenUsage = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵs"]], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], placeholder: [2, "placeholder"], items: [3, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 32, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 31, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](148, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_10__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 20, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 19, "ng-select", [["bindLabel", "text"], ["bindValue", "id"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.refreshTokenExpiration = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵs"]], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], placeholder: [2, "placeholder"], items: [3, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](174, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](182, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 188).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 188).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.updateAccessTokenClaimsOnRefresh = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](188, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](192, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](197, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](199, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 205).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 205).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.includeJwtId = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 16, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](216, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.alwaysSendClientClaims = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](224, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](226, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 20, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 19, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 9, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](232, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 16777216, null, null, 4, "button", [["class", "btn btn-xs btn-info"], ["container", "body"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](236, 212992, null, 0, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverDirective"], [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_10__["PositioningService"]], { adaptivePosition: [0, "adaptivePosition"], popover: [1, "popover"], popoverTitle: [2, "popoverTitle"], placement: [3, "placement"], container: [4, "container"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 8, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](241, 0, null, null, 7, "label", [["class", "switch m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.model.alwaysIncludeUserClaimsInIdToken = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](243, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](245, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](247, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 252).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 252).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 252).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 252).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 252).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](252, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](254, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 6, "input", [["autocomplete", "client-pairWiseSubjectSalt"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 259)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 259).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 259)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 259)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.pairWiseSubjectSalt = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](259, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](261, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](263, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](268, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](270, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 7, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 6, "input", [["autocomplete", "client-clientClaimsPrefix"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 275)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 275).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 275)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 275)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.clientClaimsPrefix = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](275, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](277, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](279, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 5, "label", [["class", "col-xl-4 col-form-label"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 284).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 284).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 284).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 284).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 284).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](284, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](286, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](288, 0, null, null, 0, "i", [["class", "fa fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](289, 0, null, null, 5, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](290, 0, null, null, 4, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 291).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](291, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](292, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](293, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("client.details.identityTokenLifetime-tooltip")); var currVal_1 = "top"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_11 = _co.model.identityTokenLifetime; _ck(_v, 13, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("client.details.accessTokenLifetime-tooltip")); var currVal_13 = "top"; _ck(_v, 21, 0, currVal_12, currVal_13); var currVal_23 = _co.model.accessTokenLifetime; _ck(_v, 30, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).transform("client.details.accessTokenTypes-tooltip")); var currVal_25 = "top"; _ck(_v, 38, 0, currVal_24, currVal_25); var currVal_44 = "text"; var currVal_45 = "id"; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 46, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).transform("client.details.accessTokenTypes")); var currVal_47 = _co.accessTokenTypes; _ck(_v, 46, 0, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_48 = _co.model.accessTokenType; _ck(_v, 61, 0, currVal_48); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 67, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).transform("client.details.authorizationCodeLifetime-tooltip")); var currVal_50 = "top"; _ck(_v, 67, 0, currVal_49, currVal_50); var currVal_60 = _co.model.authorizationCodeLifetime; _ck(_v, 76, 0, currVal_60); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).transform("client.details.absoluteRefreshTokenLifetime-tooltip")); var currVal_62 = "top"; _ck(_v, 84, 0, currVal_61, currVal_62); var currVal_72 = _co.model.absoluteRefreshTokenLifetime; _ck(_v, 93, 0, currVal_72); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 101, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).transform("client.details.slidingRefreshTokenLifetime-tooltip")); var currVal_74 = "top"; _ck(_v, 101, 0, currVal_73, currVal_74); var currVal_84 = _co.model.slidingRefreshTokenLifetime; _ck(_v, 110, 0, currVal_84); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 118, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).transform("client.details.refreshTokenUsage-tooltip")); var currVal_86 = "top"; _ck(_v, 118, 0, currVal_85, currVal_86); var currVal_105 = "text"; var currVal_106 = "id"; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 126, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 139).transform("client.details.refreshTokenUsage-tooltip")); var currVal_108 = _co.refreshTokenUsages; _ck(_v, 126, 0, currVal_105, currVal_106, currVal_107, currVal_108); var currVal_109 = _co.model.refreshTokenUsage; _ck(_v, 141, 0, currVal_109); var currVal_111 = false; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 152, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 153).transform("client.details.refreshTokenExpiration-tooltip")); var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 152, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).transform("client.details.refreshTokenExpiration")); var currVal_114 = "top"; var currVal_115 = "body"; _ck(_v, 152, 0, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115); var currVal_133 = "text"; var currVal_134 = "id"; var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 159, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).transform("client.details.refreshTokenExpiration-tooltip")); var currVal_136 = _co.tokenExpirations; _ck(_v, 159, 0, currVal_133, currVal_134, currVal_135, currVal_136); var currVal_137 = _co.model.refreshTokenExpiration; _ck(_v, 174, 0, currVal_137); var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 180, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).transform("client.details.updateAccessTokenClaimsOnRefresh-tooltip")); var currVal_139 = "top"; _ck(_v, 180, 0, currVal_138, currVal_139); var currVal_148 = _co.model.updateAccessTokenClaimsOnRefresh; _ck(_v, 190, 0, currVal_148); var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 197, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).transform("client.details.includeJwtId-tooltip")); var currVal_150 = "top"; _ck(_v, 197, 0, currVal_149, currVal_150); var currVal_159 = _co.model.includeJwtId; _ck(_v, 207, 0, currVal_159); var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 214, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).transform("client.details.alwaysSendClientClaims-tooltip")); var currVal_161 = "top"; _ck(_v, 214, 0, currVal_160, currVal_161); var currVal_170 = _co.model.alwaysSendClientClaims; _ck(_v, 224, 0, currVal_170); var currVal_172 = false; var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 236, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 237).transform("client.details.alwaysIncludeUserClaimsInIdToken-tooltip")); var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 236, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 238).transform("client.details.alwaysIncludeUserClaimsInIdToken")); var currVal_175 = "top"; var currVal_176 = "body"; _ck(_v, 236, 0, currVal_172, currVal_173, currVal_174, currVal_175, currVal_176); var currVal_184 = _co.model.alwaysIncludeUserClaimsInIdToken; _ck(_v, 245, 0, currVal_184); var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 252, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 253).transform("client.details.pairWiseSubjectSalt-tooltip")); var currVal_186 = "top"; _ck(_v, 252, 0, currVal_185, currVal_186); var currVal_196 = _co.model.pairWiseSubjectSalt; _ck(_v, 261, 0, currVal_196); var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 268, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 269).transform("client.details.clientClaimsPrefix-tooltip")); var currVal_198 = "top"; _ck(_v, 268, 0, currVal_197, currVal_198); var currVal_208 = _co.model.clientClaimsPrefix; _ck(_v, 277, 0, currVal_208); var currVal_209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 284, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 285).transform("client.details.claims-tooltip")); var currVal_210 = "top"; _ck(_v, 284, 0, currVal_209, currVal_210); var currVal_214 = _ck(_v, 292, 0, "/clients", _co.model.clientId, "claims"); _ck(_v, 291, 0, currVal_214); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.details.identityTokenLifetime")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).transform("client.details.identityTokenLifetime-tooltip")); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transform("client.details.accessTokenLifetime")); _ck(_v, 23, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("client.details.accessTokenLifetime-tooltip")); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 27, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).transform("client.details.accessTokenTypes")); _ck(_v, 40, 0, currVal_26); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).useDefaultClass; var currVal_28 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).multiple; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).typeahead; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).multiple; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).addTag; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).searchable; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).clearable; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).isOpen; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).filtered; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 44, 1, [currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).transform("client.details.authorizationCodeLifetime")); _ck(_v, 69, 0, currVal_51); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).transform("client.details.authorizationCodeLifetime-tooltip")); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPending; _ck(_v, 73, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 86, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).transform("client.details.absoluteRefreshTokenLifetime")); _ck(_v, 86, 0, currVal_63); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 90, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).transform("client.details.absoluteRefreshTokenLifetime-tooltip")); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassUntouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassTouched; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassPristine; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassDirty; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassValid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassInvalid; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassPending; _ck(_v, 90, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 103, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).transform("client.details.slidingRefreshTokenLifetime")); _ck(_v, 103, 0, currVal_75); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 107, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).transform("client.details.slidingRefreshTokenLifetime-tooltip")); var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassUntouched; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassTouched; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassPristine; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassDirty; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassValid; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassInvalid; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassPending; _ck(_v, 107, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).transform("client.details.refreshTokenUsage")); _ck(_v, 120, 0, currVal_87); var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).useDefaultClass; var currVal_89 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).multiple; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).typeahead; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).multiple; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).addTag; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).searchable; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).clearable; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).isOpen; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).disabled; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).filtered; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassUntouched; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassTouched; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassPristine; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassDirty; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassValid; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassInvalid; var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassPending; _ck(_v, 124, 1, [currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104]); var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 148, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 149).transform("client.details.refreshTokenExpiration")); _ck(_v, 148, 0, currVal_110); var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).useDefaultClass; var currVal_117 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).multiple; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).typeahead; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).multiple; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).addTag; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).searchable; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).clearable; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).isOpen; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).disabled; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).filtered; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassUntouched; var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassTouched; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassPristine; var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassDirty; var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassValid; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassInvalid; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassPending; _ck(_v, 157, 1, [currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132]); var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 182, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).transform("client.details.updateAccessTokenClaimsOnRefresh")); _ck(_v, 182, 0, currVal_140); var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassUntouched; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassTouched; var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassPristine; var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassDirty; var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassValid; var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassInvalid; var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 192).ngClassPending; _ck(_v, 187, 0, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147); var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 199, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 200).transform("client.details.includeJwtId")); _ck(_v, 199, 0, currVal_151); var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassUntouched; var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassTouched; var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassPristine; var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassDirty; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassValid; var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassInvalid; var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassPending; _ck(_v, 204, 0, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158); var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 216, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 217).transform("client.details.alwaysSendClientClaims")); _ck(_v, 216, 0, currVal_162); var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassUntouched; var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassTouched; var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassPristine; var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassDirty; var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassValid; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassInvalid; var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ngClassPending; _ck(_v, 221, 0, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169); var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 232, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 233).transform("client.details.alwaysIncludeUserClaimsInIdToken")); _ck(_v, 232, 0, currVal_171); var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassUntouched; var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassTouched; var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassPristine; var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassDirty; var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassValid; var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassInvalid; var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassPending; _ck(_v, 242, 0, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183); var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 254, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).transform("client.details.pairWiseSubjectSalt")); _ck(_v, 254, 0, currVal_187); var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 258, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 264).transform("client.details.pairWiseSubjectSalt-tooltip")); var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassUntouched; var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassTouched; var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassPristine; var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassDirty; var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassValid; var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassInvalid; var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).ngClassPending; _ck(_v, 258, 0, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195); var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 270, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 271).transform("client.details.clientClaimsPrefix")); _ck(_v, 270, 0, currVal_199); var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 274, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 280).transform("client.details.clientClaimsPrefix-tooltip")); var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassUntouched; var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassTouched; var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassPristine; var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassDirty; var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassValid; var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassInvalid; var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).ngClassPending; _ck(_v, 274, 0, currVal_200, currVal_201, currVal_202, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207); var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 286, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 287).transform("client.details.claims")); _ck(_v, 286, 0, currVal_211); var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 291).target; var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 291).href; _ck(_v, 290, 0, currVal_212, currVal_213); var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 293, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 294).transform("client.details.claims")); _ck(_v, 293, 0, currVal_215); });
}
function View_ClientTokenComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-token", [], null, null, null, View_ClientTokenComponent_0, RenderType_ClientTokenComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _token_component__WEBPACK_IMPORTED_MODULE_13__["ClientTokenComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_14__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientTokenComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-token", _token_component__WEBPACK_IMPORTED_MODULE_13__["ClientTokenComponent"], View_ClientTokenComponent_Host_0, { model: "model" }, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/edit/token/token.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/clients/edit/token/token.component.scss.shim.ngstyle.js ***!
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

/***/ "./src/app/panel/clients/edit/token/token.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/clients/edit/token/token.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTokenComponent", function() { return ClientTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ClientTokenComponent {
    constructor(route, translator) {
        this.route = route;
        this.translator = translator;
    }
    ngOnInit() {
        this.accessTokenTypes = [{ id: 0, text: "Jwt" }, { id: 1, text: "Reference" }];
        this.refreshTokenUsages = [{ id: 0, text: "ReUse" }, { id: 1, text: "One Time Only" }];
        this.tokenExpirations = [{ id: 0, text: "Sliding" }, { id: 1, text: "Absolute" }];
    }
}


/***/ }),

/***/ "./src/app/panel/clients/list/clients-list.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/panel/clients/list/clients-list.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ClientListComponent, View_ClientListComponent_0, View_ClientListComponent_Host_0, ClientListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientListComponent", function() { return RenderType_ClientListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientListComponent_0", function() { return View_ClientListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientListComponent_Host_0", function() { return View_ClientListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponentNgFactory", function() { return ClientListComponentNgFactory; });
/* harmony import */ var _clients_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-list.component.scss.shim.ngstyle */ "./src/app/panel/clients/list/clients-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component.ngfactory */ "./src/app/shared/components/spinners/spinners.component.ngfactory.js");
/* harmony import */ var _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/spinners/spinners.component */ "./src/app/shared/components/spinners/spinners.component.ts");
/* harmony import */ var _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/translator/translator.service */ "./src/app/core/translator/translator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _clients_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients-list.component */ "./src/app/panel/clients/list/clients-list.component.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











var styles_ClientListComponent = [_clients_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientListComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ClientListComponent, data: {} });

function View_ClientListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_3__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["height", "33"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.logoUri; _ck(_v, 0, 0, currVal_0); }); }
function View_ClientListComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "a", [["class", "btn btn-primary btn-xs"], ["placement", "top"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (("focusin" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseEnter() !== false);
                ad = (pd_2 && ad);
            }
            if (("focusout" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseLeave() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "button", [["class", "btn btn-outline-info btn-xs"], ["placement", "top"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick() !== false);
                ad = (pd_4 && ad);
            }
            if (("click" === en)) {
                var pd_5 = (_co.copy(_v.context.$implicit.clientId) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["class", "fa fa-copy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "button", [["class", "btn btn-danger btn-xs"], ["placement", "top"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
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
            if (("click" === en)) {
                var pd_5 = (_co.remove(_v.context.$implicit.clientId) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/clients", _v.context.$implicit.clientId, "edit"); _ck(_v, 3, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("general.edit")); var currVal_4 = "top"; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("general.copy")); var currVal_6 = "top"; _ck(_v, 10, 0, currVal_5, currVal_6); var currVal_7 = _v.context.$implicit.logoUri; _ck(_v, 15, 0, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("general.remove")); var currVal_10 = "top"; _ck(_v, 20, 0, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_8 = _v.context.$implicit.clientName; _ck(_v, 17, 0, currVal_8); });
}
function View_ClientListComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "a", [["class", "btn btn-outline-primary mb-3"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 15, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 13, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 5, 0, "/clients/add"); _ck(_v, 4, 0, currVal_2); var currVal_7 = _v.context.ngIf; _ck(_v, 25, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("general.add")); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("general.clients")); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).transform("client.Image")); _ck(_v, 17, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("client.TableClientName")); _ck(_v, 20, 0, currVal_6); });
}
function View_ClientListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["loading", 2]], null, 0, null, View_ClientListComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ClientListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform(_co.clientList$)); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8); _ck(_v, 10, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform("client.ClientDescription")); _ck(_v, 6, 0, currVal_1); }); }
function View_ClientListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-clients-list", [], null, null, null, View_ClientListComponent_0, RenderType_ClientListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _clients_list_component__WEBPACK_IMPORTED_MODULE_9__["ClientListComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_4__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientListComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-clients-list", _clients_list_component__WEBPACK_IMPORTED_MODULE_9__["ClientListComponent"], View_ClientListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/list/clients-list.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/panel/clients/list/clients-list.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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

/***/ "./src/app/panel/clients/list/clients-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/panel/clients/list/clients-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





class ClientListComponent {
    constructor(translator, clientService) {
        this.translator = translator;
        this.clientService = clientService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.clientList$ = this.refresh.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])("init"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(_ => this.clientService.getClients()));
    }
    loadClients() {
        this.refresh.next('refresh');
    }
    copy(clientId) {
        this.translator.translate.get('client.clone').subscribe(m => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: m['title'],
                text: m["text"],
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#b82d8',
                confirmButtonText: m["confirmButtonText"],
                cancelButtonText: m["cancelButtonText"],
            }).then(isConfirm => {
                if (isConfirm.value) {
                    this.clientService.copy(clientId).subscribe(updatedClient => {
                        this.loadClients();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cloned!", m["cloned"], 'success');
                    }, err => {
                        let errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__["ProblemDetails"].GetErrors(err).map(a => a.value);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Error!", errors[0], 'error');
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", m["cancelled"], 'info');
                }
            });
        });
    }
    remove(clientId) {
        this.translator.translate.get('client.remove').subscribe(m => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: m['title'],
                text: m["text"],
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: m["confirmButtonText"],
                cancelButtonText: m["cancelButtonText"]
            }).then(isConfirm => {
                if (isConfirm.value) {
                    this.clientService.remove(clientId).subscribe(() => {
                        this.loadClients();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", m["deleted"], 'success');
                    }, err => {
                        let errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_1__["ProblemDetails"].GetErrors(err).map(a => a.value);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Error!", errors[0], 'error');
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", m["cancelled"], 'error');
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/app/panel/clients/properties/properties.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/panel/clients/properties/properties.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_ClientPropertiesComponent, View_ClientPropertiesComponent_0, View_ClientPropertiesComponent_Host_0, ClientPropertiesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientPropertiesComponent", function() { return RenderType_ClientPropertiesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientPropertiesComponent_0", function() { return View_ClientPropertiesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientPropertiesComponent_Host_0", function() { return View_ClientPropertiesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropertiesComponentNgFactory", function() { return ClientPropertiesComponentNgFactory; });
/* harmony import */ var _properties_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.component.scss.ngstyle */ "./src/app/panel/clients/properties/properties.component.scss.ngstyle.js");
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
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./properties.component */ "./src/app/panel/clients/properties/properties.component.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */

















var styles_ClientPropertiesComponent = [_properties_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientPropertiesComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_ClientPropertiesComponent, data: {} });

function View_ClientPropertiesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientPropertiesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientPropertiesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientPropertiesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientPropertiesComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-danger"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.remove(_v.context.$implicit.key) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.key; _ck(_v, 5, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 7, 0, currVal_1); });
}
function View_ClientPropertiesComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientPropertiesComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.clientProperties; _ck(_v, 17, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.client; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("client.property.key")); _ck(_v, 10, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("client.property.value")); _ck(_v, 13, 0, currVal_2); }); }
function View_ClientPropertiesComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientPropertiesComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientPropertiesComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientPropertiesComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Properties"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientPropertiesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientPropertiesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientPropertiesComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 43, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 32, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "input", [["autocomplete", "property-value"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
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
                var pd_4 = ((_co.model.key = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 6, "input", [["autocomplete", "property-value"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.value = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](64, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientPropertiesComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/clients", _co.client, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = ((_co.model == null) || _co.showButtonLoading); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.clientProperties && (_co.clientProperties.length > 0)); _ck(_v, 21, 0, currVal_8); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("client.property.key-tooltip")); var currVal_12 = "top"; _ck(_v, 33, 0, currVal_11, currVal_12); var currVal_21 = _co.model.key; _ck(_v, 39, 0, currVal_21); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 49, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).transform("client.property.value-tooltip")); var currVal_24 = "top"; _ck(_v, 49, 0, currVal_23, currVal_24); var currVal_33 = _co.model.value; _ck(_v, 55, 0, currVal_33); var currVal_36 = _ck(_v, 64, 0, "/clients", _co.client, "edit"); _ck(_v, 63, 0, currVal_36); var currVal_37 = (_co.errors.length > 0); _ck(_v, 67, 0, currVal_37); var currVal_38 = _co.toasterconfig; _ck(_v, 69, 0, currVal_38); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.PropertiesDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_9 = _co.client; _ck(_v, 25, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("client.property.key")); _ck(_v, 30, 0, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform("client.property.key-tooltip")); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 46, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).transform("client.property.value")); _ck(_v, 46, 0, currVal_22); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).transform("client.property.value-tooltip")); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassPending; _ck(_v, 52, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).target; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).href; _ck(_v, 62, 0, currVal_34, currVal_35); });
}
function View_ClientPropertiesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-properties", [], null, null, null, View_ClientPropertiesComponent_0, RenderType_ClientPropertiesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _properties_component__WEBPACK_IMPORTED_MODULE_15__["ClientPropertiesComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_16__["ClientService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientPropertiesComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-properties", _properties_component__WEBPACK_IMPORTED_MODULE_15__["ClientPropertiesComponent"], View_ClientPropertiesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/properties/properties.component.scss.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/clients/properties/properties.component.scss.ngstyle.js ***!
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

/***/ "./src/app/panel/clients/properties/properties.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/panel/clients/properties/properties.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropertiesComponent", function() { return ClientPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/client.model */ "./src/app/shared/viewModel/client.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class ClientPropertiesComponent {
    constructor(route, router, translator, clientService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.clientService = clientService;
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
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(p => this.client = p["clientId"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(p => p["clientId"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(m => this.clientService.getClientProperties(m.toString())))
            .subscribe(result => this.clientProperties = result);
        this.errors = [];
        this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["ClientProperty"]();
        this.showButtonLoading = false;
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    remove(key) {
        this.showButtonLoading = true;
        this.clientService.removeProperty(this.client, key).subscribe(() => {
            this.showSuccessMessage();
            this.loadProperties();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    loadProperties() {
        this.clientService.getClientProperties(this.client).subscribe(c => this.clientProperties = c);
    }
    save() {
        this.showButtonLoading = true;
        this.model.clientId = this.client;
        this.clientService.saveProperty(this.model).subscribe(properties => {
            this.showSuccessMessage();
            this.clientProperties = properties;
            this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["ClientProperty"]();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
}


/***/ }),

/***/ "./src/app/panel/clients/secrets/secrets.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/panel/clients/secrets/secrets.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ClientSecretsComponent, View_ClientSecretsComponent_0, View_ClientSecretsComponent_Host_0, ClientSecretsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ClientSecretsComponent", function() { return RenderType_ClientSecretsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientSecretsComponent_0", function() { return View_ClientSecretsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ClientSecretsComponent_Host_0", function() { return View_ClientSecretsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSecretsComponentNgFactory", function() { return ClientSecretsComponentNgFactory; });
/* harmony import */ var _secrets_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secrets.component.scss.ngstyle */ "./src/app/panel/clients/secrets/secrets.component.scss.ngstyle.js");
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
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */ "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
/* harmony import */ var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-toaster/src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-toaster/src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony import */ var _secrets_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./secrets.component */ "./src/app/panel/clients/secrets/secrets.component.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../clients.service */ "./src/app/panel/clients/clients.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */





















var styles_ClientSecretsComponent = [_secrets_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ClientSecretsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_ClientSecretsComponent, data: {} });

function View_ClientSecretsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientSecretsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientSecretsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientSecretsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading", [], null, null, null, _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnersComponent_0"], _shared_components_spinners_spinners_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_6__["SpinnersComponent"], [_core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ClientSecretsComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-danger btn-xs"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.remove(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 5, 0, currVal_0); var currVal_1 = _v.context.$implicit.type; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.expiration; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.description; _ck(_v, 11, 0, currVal_3); });
}
function View_ClientSecretsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [["class", "card card-default"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 19, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 18, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 14, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientSecretsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.clientSecrets; _ck(_v, 23, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showButtonLoading; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.client; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("secrets.secretValue")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("secrets.secretType")); _ck(_v, 13, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).transform("secrets.expiration")); _ck(_v, 16, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("secrets.description")); _ck(_v, 19, 0, currVal_5); }); }
function View_ClientSecretsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_ClientSecretsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "alert", [["type", "danger"]], null, null, null, _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AlertComponent_0"], _node_modules_ngx_bootstrap_alert_ngx_bootstrap_alert_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClientSecretsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.errors; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ClientSecretsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "content-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" \uD83D\uDCBB ", " - "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Secrets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "card card-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", "btn btn-outline-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](13, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientSecretsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientSecretsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientSecretsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 115, "div", [["class", "card card-default"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 104, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 20, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 19, "ng-select", [["bindLabel", "text"], ["bindValue", "id"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.type = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵs"]], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], placeholder: [2, "placeholder"], items: [3, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](59, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 6, "input", [["autocomplete", "secret-value"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.value = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 28, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 27, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](75, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 20, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 19, "ng-select", [["bindLabel", "text"], ["bindValue", "id"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).handleKeyDown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.model.hashType = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵs"]], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], placeholder: [2, "placeholder"], items: [3, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 15, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 14, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 7, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 6, "input", [["autocomplete", "secret-description"], ["class", "form-control"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
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
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.model.description = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 13, "fieldset", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 12, "div", [["class", "form-group row mb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 5, "label", [["class", "col-xl-3 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](120, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 2, "i", [["class", "fa fa-comment-dots"], ["placement", "top"]], null, [[null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onMouseEnter() !== false);
                ad = (pd_0 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onMouseEnter() !== false);
                ad = (pd_1 && ad);
            }
            if (("focusout" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onMouseLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onClick() !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 737280, null, 0, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], [[2, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { tooltipValue: [0, "tooltipValue"], placement: [1, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 5, "div", [["class", "col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 16777216, null, null, 4, "input", [["bsDatepicker", ""], ["class", "form-control"], ["name", "dp-basic"], ["type", "text"]], null, [[null, "bsValueChange"], [null, "change"], [null, "keyup.esc"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).onChange($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.esc" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).hide() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).onBlur() !== false);
                ad = (pd_2 && ad);
            }
            if (("bsValueChange" === en)) {
                var pd_3 = ((_co.model.expiration = $event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 737280, [["dp", 4]], 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_15__["ComponentLoaderFactory"]], { bsValue: [0, "bsValue"], bsConfig: [1, "bsConfig"] }, { bsValueChange: "bsValueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 6, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "button", [["class", "mb-1 btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 3, "a", [["class", "mb-1 btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](135, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](136, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClientSecretsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_17__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_18__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { toasterconfig: [0, "toasterconfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 13, 0, "/clients", _co.client, "edit"); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_co.errors.length > 0); _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.showButtonLoading; _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.clientSecrets && (_co.clientSecrets.length > 0)); _ck(_v, 21, 0, currVal_8); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("secrets.secretType-tooltip")); var currVal_13 = "top"; _ck(_v, 33, 0, currVal_12, currVal_13); var currVal_31 = "text"; var currVal_32 = "id"; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).transform("secrets.secretType-tooltip")); var currVal_34 = _co.secretTypes; _ck(_v, 38, 0, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = _co.model.type; _ck(_v, 53, 0, currVal_35); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).transform("secrets.secretValue-tooltip")); var currVal_38 = "top"; _ck(_v, 62, 0, currVal_37, currVal_38); var currVal_47 = _co.model.value; _ck(_v, 68, 0, currVal_47); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).transform("secrets.hashType-tooltip")); var currVal_50 = "top"; _ck(_v, 78, 0, currVal_49, currVal_50); var currVal_68 = "text"; var currVal_69 = "id"; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).transform("secrets.hashType-tooltip")); var currVal_71 = _co.hashTypes; _ck(_v, 83, 0, currVal_68, currVal_69, currVal_70, currVal_71); var currVal_72 = _co.model.hashType; _ck(_v, 98, 0, currVal_72); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 107, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).transform("secrets.description-tooltip")); var currVal_75 = "top"; _ck(_v, 107, 0, currVal_74, currVal_75); var currVal_84 = _co.model.description; _ck(_v, 113, 0, currVal_84); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 123, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).transform("secrets.expiration-tooltip")); var currVal_87 = "top"; _ck(_v, 123, 0, currVal_86, currVal_87); var currVal_88 = _co.model.expiration; var currVal_89 = _co.bsConfig; _ck(_v, 129, 0, currVal_88, currVal_89); var currVal_92 = _ck(_v, 136, 0, "/clients", _co.client, "edit"); _ck(_v, 135, 0, currVal_92); var currVal_93 = (_co.errors.length > 0); _ck(_v, 139, 0, currVal_93); var currVal_94 = _co.toasterconfig; _ck(_v, 141, 0, currVal_94); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("general.clients")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform("client.SecretDescription")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("general.goback")); _ck(_v, 14, 0, currVal_5); var currVal_9 = _co.showButtonLoading; _ck(_v, 22, 0, currVal_9); var currVal_10 = _co.client; _ck(_v, 25, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("secrets.secretType")); _ck(_v, 30, 0, currVal_11); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).useDefaultClass; var currVal_15 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).multiple; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).typeahead; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).multiple; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).addTag; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).searchable; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).clearable; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isOpen; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).filtered; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending; _ck(_v, 36, 1, [currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).transform("secrets.secretValue")); _ck(_v, 59, 0, currVal_36); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 65, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).transform("secrets.secretValue-tooltip")); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassUntouched; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassTouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPristine; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassDirty; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassValid; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassInvalid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPending; _ck(_v, 65, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).transform("secrets.hashType")); _ck(_v, 75, 0, currVal_48); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).useDefaultClass; var currVal_52 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).multiple; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).typeahead; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).multiple; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).addTag; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).searchable; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).clearable; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).isOpen; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).filtered; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassUntouched; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassTouched; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassPristine; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassDirty; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassValid; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassInvalid; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).ngClassPending; _ck(_v, 81, 1, [currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67]); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 104, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).transform("secrets.description")); _ck(_v, 104, 0, currVal_73); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 110, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).transform("secrets.description-tooltip")); var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassUntouched; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassTouched; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassPristine; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassDirty; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassValid; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassInvalid; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).ngClassPending; _ck(_v, 110, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).transform("secrets.expiration")); _ck(_v, 120, 0, currVal_85); var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).target; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).href; _ck(_v, 134, 0, currVal_90, currVal_91); });
}
function View_ClientSecretsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-client-secrets", [], null, null, null, View_ClientSecretsComponent_0, RenderType_ClientSecretsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _secrets_component__WEBPACK_IMPORTED_MODULE_19__["ClientSecretsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_translator_translator_service__WEBPACK_IMPORTED_MODULE_7__["TranslatorService"], _clients_service__WEBPACK_IMPORTED_MODULE_20__["ClientService"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_18__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ClientSecretsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-client-secrets", _secrets_component__WEBPACK_IMPORTED_MODULE_19__["ClientSecretsComponent"], View_ClientSecretsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/panel/clients/secrets/secrets.component.scss.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/panel/clients/secrets/secrets.component.scss.ngstyle.js ***!
  \*************************************************************************/
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
var styles = ["\n.bs-datepicker {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  \n  \n  \n  \n  \n  \n  \n  \n   }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n     }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n     }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      \n       }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          \n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          -webkit-transition: 0s;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          -webkit-transition: 0.3s;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: -webkit-box;\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: -webkit-box;\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  -webkit-transition: 0s;\n  transition: 0s; }\n\n.bs-datepicker-head > bs-datepicker-navigation-view {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.theme-angle .bs-datepicker-head {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td span.selected, .theme-angle .bs-datepicker-body table td.selected span,\n.theme-angle .bs-datepicker-body table td span[class*=select-]:after, .theme-angle .bs-datepicker-body table td[class*=select-] span:after {\n  background-color: #23b7e5;\n}\n.theme-angle .bs-datepicker-body table td.week span {\n  color: #23b7e5;\n}"];



/***/ }),

/***/ "./src/app/panel/clients/secrets/secrets.component.ts":
/*!************************************************************!*\
  !*** ./src/app/panel/clients/secrets/secrets.component.ts ***!
  \************************************************************/
/*! exports provided: ClientSecretsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSecretsComponent", function() { return ClientSecretsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/viewModel/client.model */ "./src/app/shared/viewModel/client.model.ts");
/* harmony import */ var _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/viewModel/default-response.model */ "./src/app/shared/viewModel/default-response.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class ClientSecretsComponent {
    constructor(route, router, translator, clientService, toasterService) {
        this.route = route;
        this.router = router;
        this.translator = translator;
        this.clientService = clientService;
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
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(p => this.client = p["clientId"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(p => p["clientId"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(m => this.clientService.getClientSecrets(m.toString())))
            .subscribe(result => this.clientSecrets = result);
        this.errors = [];
        this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["ClientSecret"]();
        this.showButtonLoading = false;
        this.hashTypes = [{ id: 0, text: "Sha256" }, { id: 1, text: "Sha512" }];
        this.secretTypes = [{ id: 'SharedSecret', text: "Shared Secret" }, { id: 'X509Thumbprint', text: "X509 Thumbprint" }, { id: 'X509Name', text: "X509 Name" }, { id: 'X509CertificateBase64', text: "X509 Certificate Base64" }];
    }
    showSuccessMessage() {
        this.translator.translate.get('toasterMessages').subscribe(a => {
            this.toasterService.pop("success", a["title-success"], a["message-success"]);
        });
    }
    remove(secret) {
        this.showButtonLoading = true;
        this.errors = [];
        this.clientService.removeSecret(this.client, secret.type, secret.value).subscribe(() => {
            this.showSuccessMessage();
            this.loadSecrets();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
    }
    loadSecrets() {
        this.clientService.getClientSecrets(this.client).subscribe(c => this.clientSecrets = c);
    }
    save() {
        this.showButtonLoading = true;
        this.errors = [];
        this.model.clientId = this.client;
        this.clientService.saveSecret(this.model).subscribe(registerResult => {
            this.showSuccessMessage();
            this.clientSecrets = registerResult;
            this.model = new _shared_viewModel_client_model__WEBPACK_IMPORTED_MODULE_1__["ClientSecret"]();
            this.showButtonLoading = false;
        }, err => {
            this.errors = _shared_viewModel_default_response_model__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"].GetErrors(err).map(a => a.value);
            this.showButtonLoading = false;
        });
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

/***/ "./src/app/shared/services/scope.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/scope.service.ts ***!
  \**************************************************/
/*! exports provided: ScopeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeService", function() { return ScopeService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");

class ScopeService {
    constructor(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "api/scopes";
    }
    getScopes(text) {
        return this.http.get(`${this.endpoint}/${text}`);
    }
}


/***/ }),

/***/ "./src/app/shared/viewModel/client.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/viewModel/client.model.ts ***!
  \**************************************************/
/*! exports provided: ClientSecret, Subject, ClientClaim, KeyValuePair, ClientProperty, NewClient, Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSecret", function() { return ClientSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientClaim", function() { return ClientClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePair", function() { return KeyValuePair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProperty", function() { return ClientProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClient", function() { return NewClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _claim_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim.model */ "./src/app/shared/viewModel/claim.model.ts");

class ClientSecret {
    constructor() {
        this.hashType = 0;
    }
}
class Subject {
}
class ClientClaim extends _claim_model__WEBPACK_IMPORTED_MODULE_0__["Claim"] {
}
class KeyValuePair {
}
class ClientProperty {
}
class NewClient {
}
class Client {
    static isValid(client, errors) {
        errors.length = 0;
        if (client.allowedGrantTypes == null || client.allowedGrantTypes.length <= 0) {
            errors.push("Invalid Grant Types");
        }
        // spaces are not allowed in grant types
        client.allowedGrantTypes.forEach(grant => {
            if (grant.indexOf(' ') >= 0) {
                errors.push("Grant types cannot contain spaces");
            }
        });
        // single grant type, seems to be fine
        if (client.allowedGrantTypes.length == 1)
            return true;
        // would allow response_type downgrade attack from code to token
        Client.findGrantTypes('implicit', 'authorization_code', client.allowedGrantTypes, errors);
        Client.findGrantTypes('implicit', 'hybrid', client.allowedGrantTypes, errors);
        Client.findGrantTypes('authorization_code', 'hybrid', client.allowedGrantTypes, errors);
        return errors.length <= 0;
    }
    static findGrantTypes(grantA, grantB, grants, errors) {
        if (grants.find(g => g == grantA) != null && grants.find(g => g == grantB) != null)
            errors.push(`Grant types list cannot contain both ${grantA} and ${grantB}`);
    }
}


/***/ }),

/***/ "./src/app/shared/viewModel/file.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/viewModel/file.model.ts ***!
  \************************************************/
/*! exports provided: FileViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileViewModel", function() { return FileViewModel; });
class FileViewModel {
    constructor(filename, fileType, value) {
        this.filename = filename;
        this.fileType = fileType;
        this.value = value;
    }
}


/***/ })

}]);