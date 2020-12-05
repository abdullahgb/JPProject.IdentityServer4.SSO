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

class RoleService {
    constructor(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "api/roles";
    }
    getAvailableRoles() {
        return this.http.get(`${this.endpoint}`);
    }
    remove(name) {
        return this.http.delete(`${this.endpoint}/${name}`);
    }
    getRoleDetails(name) {
        return this.http.get(`${this.endpoint}/${name}`);
    }
    update(name, model) {
        return this.http.put(`${this.endpoint}/${name}`, model);
    }
    removeUserFromRole(user, role) {
        return this.http.delete(`${this.endpoint}/${role}/${user}`);
    }
    save(model) {
        return this.http.post(`${this.endpoint}`, model);
    }
    getUsersFromRole(role) {
        return this.http.get(`${this.endpoint}/${role}/users`);
    }
}



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

class UserService {
    constructor(http) {
        this.http = http;
        this.endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "api/admin/users";
        this.endpointSignUp = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ResourceServer + "api/sign-up";
    }
    getUsers(quantity, page) {
        return this.http.get(`${this.endpoint}?limit=${quantity}&offset=${(page - 1) * quantity}`);
    }
    findUsers(text, quantity, page) {
        return this.http.get(`${this.endpoint}?limit=${quantity}&offset=${(page - 1) * quantity}&search=${encodeURI(text)}`);
    }
    getDetails(username) {
        return this.http.get(`${this.endpoint}/${username}`);
    }
    update(username, updateCommand) {
        return this.http.put(`${this.endpoint}/${username}`, updateCommand);
    }
    patch(username, patch) {
        return this.http.patch(`${this.endpoint}/${username}`, patch);
    }
    save(model) {
        return this.http.post(`${this.endpoint}`, model);
    }
    remove(username) {
        return this.http.delete(`${this.endpoint}/${username}`);
    }
    getUserClaims(userName) {
        return this.http.get(`${this.endpoint}/${userName}/claims`);
    }
    removeClaim(username, type) {
        return this.http.delete(`${this.endpoint}/${username}/claims/${type}`);
    }
    saveClaim(username, model) {
        return this.http.post(`${this.endpoint}/${username}/claims`, model);
    }
    getUserRoles(userName) {
        return this.http.get(`${this.endpoint}/${userName}/roles`);
    }
    removeRole(username, role) {
        return this.http.delete(`${this.endpoint}/${username}/roles/${role}`);
    }
    saveRole(username, model) {
        return this.http.post(`${this.endpoint}/${username}/roles`, model);
    }
    getUserLogins(username) {
        return this.http.get(`${this.endpoint}/${username}/logins`);
    }
    removeLogin(userName, loginProvider, providerKey) {
        return this.http.delete(`${this.endpoint}/${userName}/logins?loginProvider=${loginProvider}&providerKey=${providerKey}`);
    }
    checkUserName(userName) {
        return this.http.get(`${this.endpointSignUp}/check-username/${userName}`);
    }
    checkEmail(email) {
        return this.http.get(`${this.endpointSignUp}/check-email/${email}`);
    }
    resetPassword(username, resetPassword) {
        return this.http.put(`${this.endpoint}/${username}/password`, resetPassword);
    }
    showEvents(username, quantity, page) {
        return this.http.get(`${this.endpoint}/${username}/logs?limit=${quantity}&offset=${(page - 1) * quantity}`);
    }
    searchEvents(username, text, quantity, page) {
        return this.http.get(`${this.endpoint}/${username}/logs?limit=${quantity}&offset=${(page - 1) * quantity}&search=${encodeURI(text)}`);
    }
}



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
class Claim {
}



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
class Role {
}
class SaveRole {
}



/***/ })

}]);
//# sourceMappingURL=common-es2015.e7c02526f53a4242eb29.js.map