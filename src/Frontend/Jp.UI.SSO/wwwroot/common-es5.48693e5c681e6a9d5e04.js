(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/role.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");

var RoleService = /** @class */ /*@__PURE__*/ (function () {
    function RoleService(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "roles";
    }
    RoleService.prototype.getAvailableRoles = function () {
        return this.http.get("" + this.endpoint);
    };
    RoleService.prototype.remove = function (name) {
        return this.http.delete(this.endpoint + "/" + name);
    };
    RoleService.prototype.getRoleDetails = function (name) {
        return this.http.get(this.endpoint + "/" + name);
    };
    RoleService.prototype.update = function (name, model) {
        return this.http.put(this.endpoint + "/" + name, model);
    };
    RoleService.prototype.removeUserFromRole = function (user, role) {
        return this.http.delete(this.endpoint + "/" + role + "/" + user);
    };
    RoleService.prototype.save = function (model) {
        return this.http.post("" + this.endpoint, model);
    };
    RoleService.prototype.getUsersFromRole = function (role) {
        return this.http.get(this.endpoint + "/" + role + "/users");
    };
    return RoleService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");

var UserService = /** @class */ /*@__PURE__*/ (function () {
    function UserService(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "admin/users";
        this.endpointSignUp = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "sign-up";
    }
    UserService.prototype.getUsers = function (quantity, page) {
        return this.http.get(this.endpoint + "?limit=" + quantity + "&offset=" + (page - 1) * quantity);
    };
    UserService.prototype.findUsers = function (text, quantity, page) {
        return this.http.get(this.endpoint + "?limit=" + quantity + "&offset=" + (page - 1) * quantity + "&search=" + encodeURI(text));
    };
    UserService.prototype.getDetails = function (username) {
        return this.http.get(this.endpoint + "/" + username);
    };
    UserService.prototype.update = function (username, updateCommand) {
        return this.http.put(this.endpoint + "/" + username, updateCommand);
    };
    UserService.prototype.patch = function (username, patch) {
        return this.http.patch(this.endpoint + "/" + username, patch);
    };
    UserService.prototype.save = function (model) {
        return this.http.post("" + this.endpoint, model);
    };
    UserService.prototype.remove = function (username) {
        return this.http.delete(this.endpoint + "/" + username);
    };
    UserService.prototype.getUserClaims = function (userName) {
        return this.http.get(this.endpoint + "/" + userName + "/claims");
    };
    UserService.prototype.removeClaim = function (username, type) {
        return this.http.delete(this.endpoint + "/" + username + "/claims/" + type);
    };
    UserService.prototype.saveClaim = function (username, model) {
        return this.http.post(this.endpoint + "/" + username + "/claims", model);
    };
    UserService.prototype.getUserRoles = function (userName) {
        return this.http.get(this.endpoint + "/" + userName + "/roles");
    };
    UserService.prototype.removeRole = function (username, role) {
        return this.http.delete(this.endpoint + "/" + username + "/roles/" + role);
    };
    UserService.prototype.saveRole = function (username, model) {
        return this.http.post(this.endpoint + "/" + username + "/roles", model);
    };
    UserService.prototype.getUserLogins = function (username) {
        return this.http.get(this.endpoint + "/" + username + "/logins");
    };
    UserService.prototype.removeLogin = function (userName, loginProvider, providerKey) {
        return this.http.delete(this.endpoint + "/" + userName + "/logins?loginProvider=" + loginProvider + "&providerKey=" + providerKey);
    };
    UserService.prototype.checkUserName = function (userName) {
        return this.http.get(this.endpointSignUp + "/check-username/" + userName);
    };
    UserService.prototype.checkEmail = function (email) {
        return this.http.get(this.endpointSignUp + "/check-email/" + email);
    };
    UserService.prototype.resetPassword = function (username, resetPassword) {
        return this.http.put(this.endpoint + "/" + username + "/password", resetPassword);
    };
    UserService.prototype.showEvents = function (username, quantity, page) {
        return this.http.get(this.endpoint + "/" + username + "/logs?limit=" + quantity + "&offset=" + (page - 1) * quantity);
    };
    UserService.prototype.searchEvents = function (username, text, quantity, page) {
        return this.http.get(this.endpoint + "/" + username + "/logs?limit=" + quantity + "&offset=" + (page - 1) * quantity + "&search=" + encodeURI(text));
    };
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/viewModel/claim.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/viewModel/claim.model.ts ***!
  \*************************************************/
/*! exports provided: Claim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Claim", function() { return Claim; });
var Claim = /** @class */ /*@__PURE__*/ (function () {
    function Claim() {
    }
    return Claim;
}());



/***/ }),

/***/ "./src/app/shared/viewModel/role.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/viewModel/role.model.ts ***!
  \************************************************/
/*! exports provided: Role, SaveRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveRole", function() { return SaveRole; });
var Role = /** @class */ /*@__PURE__*/ (function () {
    function Role() {
    }
    return Role;
}());

var SaveRole = /** @class */ /*@__PURE__*/ (function () {
    function SaveRole() {
    }
    return SaveRole;
}());



/***/ })

}]);