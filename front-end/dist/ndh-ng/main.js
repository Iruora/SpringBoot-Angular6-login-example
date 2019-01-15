(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spring boot and angular 6 secure authentication';
    }
    AppComponent.API_URL = 'http://localhost:3000';
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./urlPermission/url.permissions */ "./src/app/urlPermission/url.permissions.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"],
                _urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_12__["UrlPermission"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlPermission/url.permissions */ "./src/app/urlPermission/url.permissions.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");







var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_4__["UrlPermission"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    // otherwise redirect to profile
    { path: '**', redirectTo: '/not-found' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(16, 138, 252));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      <form name=\"form-signin\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-success btn-block\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticate(this.user, function (e) {
            _this.router.navigateByUrl('/profile');
            console.log(e);
            var resp;
            resp = e.principal;
            // this.user.fullName = 'ndh';
            if (resp) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(resp));
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(0, 245, 0));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"alert alert-info text-center\" role=\"alert\">\n    We are glad having you among us, see you soon !\n  </div>\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      <form name=\"form-signin\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-success btn-block\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticate(this.user, function (e) {
            _this.router.navigateByUrl('/profile');
            console.log(e);
            var resp;
            resp = e.principal;
            // this.user.fullName = 'ndh';
            if (resp) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(resp));
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\nbody {\r\n\r\n\r\n  background-color:#395D6D;\r\n  margin:auto;\r\n}\r\n\r\n.container {\r\n\r\n  margin:auto;\r\n  width:80%;\r\n  text-align: center;\r\n  position:relative;\r\n  height:100vh;\r\n\r\n}\r\n\r\n.text {\r\n\r\n\r\n  width:30%;\r\n  text-align: center;\r\n  z-index: 0;\r\n  position:absolute;\r\n  background-color:white;\r\n  padding-bottom:3rem;\r\n  padding-top:3rem;\r\n  padding-left:3rem;\r\n  padding-right:3rem;\r\n  left:0;\r\n  right:0;\r\n  margin-right:auto;\r\n  margin-left:auto;\r\n  top:30%;\r\n  box-shadow: 7px 7px 10px #27414C;\r\n  justify-content: space-around;\r\n  align-items:center;\r\n  flex-wrap:wrap;\r\n\r\n}\r\n\r\nh1 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  font-size:2rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  color:#395D6D;\r\n  letter-spacing: .10rem;\r\n  padding-bottom:.5rem;\r\n}\r\n\r\nh2 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400;\r\n  font-size:1rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  color:#395D6D;\r\n  letter-spacing: .10rem;\r\n  padding-bottom: 2rem;\r\n\r\n}\r\n\r\nh3 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  font-size:.8rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  letter-spacing: .10rem;\r\n}\r\n\r\n.button {\r\n\r\n  width:6rem;\r\n  border:3px solid #FCA671;\r\n  margin:auto;\r\n  text-align:center;\r\n  padding:.5rem;\r\n  color:#FCA671;\r\n}\r\n\r\n#home:hover {\r\n  background-color:#FCA671;\r\n  color:white;\r\n}\r\n\r\nsvg {\r\n  text-align: center;\r\n  position: absolute;\r\n  left:0;\r\n  right:0;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  height:100%;\r\n\r\n}\r\n\r\n#hotel-top {\r\n\r\n  -webkit-animation: fall-8 8s ease-in infinite;\r\n  opacity: .5;\r\n}\r\n\r\n#left-martini-page {\r\n\r\n-webkit-animation: fall-8 8s ease-in infinite;\r\nopacity: .5;\r\n\r\n\r\n}\r\n\r\n#top-spa {\r\n\r\n  -webkit-animation: fall-7 7s ease-in infinite;\r\n  opacity:.75;\r\n\r\n\r\n}\r\n\r\n#chemistry-big {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n}\r\n\r\n#comp-big {\r\n\r\n  -webkit-animation: fall-13 13s ease-in infinite;\r\n\r\n          animation: fall-13 13s ease-in infinite;\r\n  opacity: .5;\r\n}\r\n\r\n#martini-bottom {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n          animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n\r\n}\r\n\r\n#spa-bottom {\r\n\r\n -webkit-animation: fall-10 10s ease-in infinite;\r\n\r\n         animation: fall-10 10s ease-in infinite;\r\n\r\n}\r\n\r\n#hotel-bottom {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n  opacity:.25;\r\n\r\n}\r\n\r\n#chemistry-little {\r\n\r\n  -webkit-animation: fall-8 8s ease-in infinite;\r\n\r\n}\r\n\r\n#hotel-tiny {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n}\r\n\r\n#chemistry-top-right {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n\r\n}\r\n\r\n#comp-little {\r\n\r\n  -webkit-animation: fall-7 7s ease-in infinite;\r\n\r\n}\r\n\r\n.page-fall2 {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n\r\n}\r\n\r\n.page-fall3 {\r\n\r\n  -webkit-animation: fall-13 13s ease-in infinite;\r\n  opacity: .5;\r\n\r\n}\r\n\r\n@-webkit-keyframes fall-13 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-7 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-8 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-10 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-12 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"795.9\" height=\"433\" viewBox=\"0 0 795.9 433\">\n\n    <style>\n\n      .white_page\n        {fill:#fff;}\n\n      .dark_gray_page\n        {fill:#a9a9a9;}\n\n      .medium_gray\n        {fill:#ccc;}\n\n      .light_orange\n        {fill:#fca671;}\n\n      .orange\n        {fill:#e96019;}\n\n      .top-martini\n        {fill:#fdd2b8;}\n\n      .dark_navy\n        {fill:#1b2c3d;}\n\n      .green\n        {fill:#a48801;}\n\n      .med-blue\n        {fill:#395d6d;}\n\n      .light-blue\n        {fill:#e8eaec;}\n\n      .extra-light-o\n        {fill:#fce7dc;}\n\n      .extra2-light-o\n        {fill:#fff2ea;}\n\n      .navy-light\n        {fill:#495664;}\n\n      .light-green\n        {fill:#bfac4d;}\n\n      .light-bubbles\n        {fill:#e1e7e9;}\n    </style>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M0 377.8h60.9s9.330.2 3.3 55.1H0v-55.1z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <path class=\"dark_gray_page fade8\" d=\"M3.9 292.3l51-28.5s5 20.5 0 46-7.5 58.5-7.5 58.5l-24.5 25s-10-24-11.5-62-7.5-39-7.5-39z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M11.4 174.3s11.3-19.5-11.4-70v-29l22.4-20s26 61 19.5 98.5l-30.5 20.5z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"dark_gray_page fade7\" d=\"M48.4 106.9l31-46.1s26-25 41.5-12.5l-19 27.5c0 .1-29-5.8-53.5 31.1zM236.2 429l51.5-21.5s-6.5-74-51.5-87.5l-33.5 33.5s29 37.5 33.5 75.5z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <path class=\"white_page fade8\" d=\"M297.5 421.6l32-21.5s9-13.5 0-33l37-33.8s14 21.2 0 40.2c0 .1-58.5 48.6-69 48.1z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <g class=\"fade8\">\n        <path class=\"dark_gray_page\" d=\"M392.4 165.6l63 68.5s-50.5 48-63 71.5l-45.5-71.5s-8-21 45.5-68.5z\"/>\n\n        <path class=\"white_page\" d=\"M403.9 333.1s-7-1-10.5-5.5-46.5-93.5-46.5-93.5 6.5 6.5 32 4l25 95zM510.4 433s-1.5-39.1-3-41.1c0 0 64.5-9.5 87 11.5l6 29.6h-90z\"/>\n      </g>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"dark_gray_page fade7\" d=\"M486.9 274l49.2-49s52.4 49 47.5 76l-70.1 15c-.1 0-10.8-22.5-26.6-42z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M501.5 319.5l11.9 11.1 65.7-28.6zM603.5 260.8l83.3 8.5s22.7 53.2 15.3 102.5h-86.7c.1 0 .1-86.6-11.9-111z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\"\n      d=\"M502 129.2l61.5 19.3s-3.7 12.7 0 16c3.7 3.3 1.7 28 0 31.3h-67c0 .1 2.3-62.6 5.5-66.6zM749.5 296.8l3.3 99s20-8.3 43-6.1v-92.9c.1 0-18.9-3.6-46.3 0z\"/>\n    </g>\n\n\n    <g id=\"left-martini-page\">\n      <g class=\"fade5\">\n        <path class=\"medium_gray\" d=\"M135.8 329.2s64-66.5 72-91.5l63 32.5s-37.5 74.5-67.5 101c0 0-51.5-40.5-67.5-42z\"/>\n\n        <ellipse transform=\"rotate(-52.468 180.18 333.917)\" class=\"light_orange\" cx=\"180.2\" cy=\"333.9\" rx=\"2.7\" ry=\"17.1\"/>\n\n        <path class=\"orange\" d=\"M186.2 333.7c.2 1.6 2.7 6.2 2.4 6.1-4.3-1.2-15.5-11.2-16.5-12.1.7.5 4.8.8 6.4.7 1.7-.2 3-.7 5.9-3.3 12.4-11.6 20.5-28.8 20.5-28.8l5.8 4.4s-14.6 11.6-22.6 26.5c-2 3.4-2.1 4.8-1.9 6.5z\"/>\n\n        <path class=\"top-martini\" d=\"M248.1 289.4l-8.8 2.7v-.1L205 265.7v-9.4z\"/>\n\n        <path class=\"dark_navy\" d=\"M225.4 288.3c-.1-.1-.2-.2-.3-.4-.2-.5.1-1 .5-1.2l30-10.9c.5-.2 1 .1 1.2.5.2.5-.1 1-.5 1.2l-30 10.9c-.3.1-.6 0-.9-.1z\"/>\n\n        <ellipse transform=\"rotate(-61.387 246.644 279.667)\" class=\"green\" cx=\"246.6\" cy=\"279.7\" rx=\"4.7\" ry=\"4.7\"/><path class=\"dark_navy\" d=\"M239.3 292.1l-28.8 8.6-5.7-4.4.2-30.6 34.3 26.3z\"/>\n      </g>\n    </g>\n\n    <g id=\"hotel-top\">\n\n      <g class=\"fade8\">\n        <path class=\"medium_gray\" d=\"M249.8 28.7s37.3 144.7 35.3 160c0 0 91.4-30.7 107.7-41.3C409.1 136.7 367.3 2 367.3 2L249.8 28.7z\"/>\n\n        <path transform=\"rotate(-19.377 320.51 103.564)\" class=\"dark_navy\" d=\"M305.8 73.5h29.6v60.1h-29.6z\"/>\n\n        <path transform=\"rotate(-19.377 327.877 124.515)\" class=\"med-blue\" d=\"M322.1 116.7h11.7v15.6h-11.7z\"/>\n\n        <path transform=\"rotate(-19.377 307.358 83.63)\" class=\"light-blue\" d=\"M303.7 79.9h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 318.288 79.786)\" class=\"light-blue\" d=\"M314.6 76.1h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 310.821 93.478)\" class=\"light-blue\" d=\"M307.1 89.7h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 321.75 89.634)\" class=\"light-blue\" d=\"M318.1 85.9h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 314.284 103.325)\" class=\"light-blue\" d=\"M310.6 99.6h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 325.214 99.482)\" class=\"light-blue\" d=\"M321.5 95.8h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 317.747 113.173)\" class=\"light-blue\" d=\"M314.1 109.4h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 328.677 109.33)\" class=\"light-blue\" d=\"M325 105.6h7.5v7.5H325z\"/>\n\n        <path transform=\"rotate(-19.377 310.27 74.448)\" class=\"med-blue\" d=\"M293 73.6h34.6v1.7H293z\"/>\n\n        <path transform=\"rotate(-19.377 309.652 72.69)\" class=\"martini-stick\" d=\"M290.1 71.5h39.1v2.3h-39.1z\"/>\n\n        <path transform=\"rotate(-19.377 353.367 103.529)\" class=\"orange\" d=\"M337.2 84.4h32.5v38.3h-32.5z\"/>\n\n        <path transform=\"rotate(-19.377 344.165 77.359)\" class=\"light_orange\" d=\"M331.5 68.8h25.4V86h-25.4z\"/>\n\n        <g>\n          <path transform=\"rotate(-19.377 363.922 111.062)\" class=\"light_orange\" d=\"M359.9 102.5h8.2v17.1h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 342.739 95.79)\" class=\"extra-light-o\" d=\"M338.7 91.7h8.2v8.2h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 346.634 106.865)\" class=\"extra-light-o\" d=\"M342.6 102.8h8.2v8.2h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 350.342 117.41)\" class=\"extra-light-o\" d=\"M346.3 113.3h8.2v8.2h-8.2z\"/><path transform=\"rotate(-19.377 356.798 90.803)\" class=\"extra-light-o\" d=\"M352.7 86.7h8.2v8.2h-8.2z\"/>\n        </g>\n\n\n        <path transform=\"rotate(-19.377 341.078 68.58)\" class=\"orange\" d=\"M326.9 67.9h28.5v1.5h-28.5z\"/>\n\n        <g>\n          <path transform=\"rotate(-19.377 338.561 79.33)\" class=\"extra2-light-o\" d=\"M335.1 75.9h7v7h-7z\"/>\n\n          <path transform=\"rotate(-19.377 349.768 75.389)\" class=\"extra2-light-o\" d=\"M346.3 71.9h7v7h-7z\"/>\n        </g>\n\n\n        <path class=\"green\" d=\"M285.9 62l2.3 2.4 3.3-.7-1.5 3 1.6 2.9-3.2-.5-2.3 2.4-.6-3.2-3-1.4 3-1.6zM296.8 51l2.3 2.4 3.3-.7-1.5 3 1.6 2.9-3.2-.5-2.3 2.5-.6-3.3-3-1.4 3-1.6zM312.1 43.9l2.4 2.3 3.2-.6-1.5 2.9 1.7 2.9-3.3-.4-2.3 2.4-.5-3.3-3.1-1.4 3-1.5zM327.4 40.3l2.3 2.3 3.3-.6-1.5 3 1.6 2.9-3.3-.5-2.2 2.4-.6-3.3-3-1.4 3-1.5zM343.7 42l2.4 2.3 3.3-.6-1.5 2.9 1.6 2.9-3.3-.4-2.2 2.4-.6-3.3-3-1.4 2.9-1.5z\"/>\n      </g>\n    </g>\n    <g id=\"spa-bottom\">\n      <g class=\"fade6\">\n        <path class=\"medium_gray\" d=\"M276.9 274.8s21.3 54 26.7 58.3l57.1-54-40.1-47.3-43.7 43z\"/>\n\n        <path class=\"st6\" d=\"M325.2 303c-2.9 1.4-8-2.4-15.7-12.7-7.8-10.5-4.9-17.9-4.2-18.5.1-.1.3-.2.5-.2 2.3-.8 8.8 2.4 13.9 10.5 1.2 1.9 9.1 18 6.3 20.5-.3.1-.5.2-.8.4z\" id=\"XMLID_48_\"/>\n\n        <path class=\"navy-light\" d=\"M324.5 292.6s-.1 0 0 0c-1.9-1.6-4-4.2-6-6.9-.8-1.2-1.7-2.4-2.4-3.6-2.2-3.5-4.1-7.3-5.3-10.4-1.1-2.9-1.5-5.1-.9-5.9.4-.5 1-.8 1.9-.6 1.2.3 2.8 1.3 5.1 3.6 1.8 1.8 3.9 4.4 6.4 8 0 0 4 5.8 5.8 10.6.4 1.2.7 2.3.9 3.2.1 1.1 0 2-.5 2.6-1.1 1.7-3 1.1-5-.6z\" id=\"XMLID_47_\"/>\n\n        <path class=\"st6\" d=\"M330.2 283.3c-.1.1-.3.2-.6.2-1.2.1-4-.9-8-7.5-3.4-5.7-4.6-8.1-4.8-9.2-.1-.7.2-1 .7-1.3.4-.3 1.5-.5 2.9-.2.9.2 1.9.5 3 1.1 2.1 1.1 4.5 3.2 6.6 6.7 3.1 5.2 2.1 8 1.1 9.3-.3.5-.7.8-.9.9z\" id=\"XMLID_46_\"/>\n\n        <path class=\"navy-light\" d=\"M333.1 278.1s0-.1 0 0c-1-.6-2-1.8-2.9-3-.4-.5-.7-1.1-1.1-1.6-1-1.7-1.7-3.5-2-5-.3-1.4-.3-2.6.2-3.1.3-.3.7-.5 1.3-.6.7 0 1.6.3 2.8 1.3.9.8 1.9 1.9 3.1 3.5 0 0 1.8 2.6 2.3 5.1.1.6.2 1.1.1 1.7-.1.6-.3 1.1-.7 1.5-.8.9-2 .8-3.1.2z\" id=\"XMLID_45_\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.4 272.2s4.4.9 4.6 3.4c0 .6-1.5.5-1.7.4-.2 0-1.4-.5-2.1-2.2-.6-1.4-.8-1.6-.8-1.6z\"/>\n\n        <path class=\"extra-light-o\" d=\"M330.1 270.8s2.2-1.8 3.1-.6c.4.5-.9 1.9-1.3 2.1-.8.3-2.6.4-3.4-.2l1.6-1.3z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.2 271.9s2.3-.6 2.1-2.3c-.2-1.7-1.3-2.1-1.3-2.1s-2 2.2-.8 4.4z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.2 271.8s-2.3-2.3-4.1-.5c-.6.6 2.5 2 3.8 1.2.4-.1.3-.7.3-.7z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.3 271.9l.4 1.3s0 3.2-1.8 3.7c-.9.3-.4-2.5-.2-3 .2-.3 1.5-1.3 1.6-2z\"/>\n\n        <path class=\"orange\" d=\"M328.3 271.6s.4-.9.3-1c0-.1.4.9.4.9s1 .1 1 0c.1-.1-.8.5-.8.5-.1 0 .4.8.4.8l-.9-.6-.4.5-.1-.7-.5-.3.6-.1z\"/>\n\n        <g>\n          <g id=\"XMLID_44_\">\n            <path class=\"green\" d=\"M300.8 274.8c-.1-.1-.1-.1 0 0 0-.1 0-.1 0 0zM305.6 283.6c-.1-.2-.2-.3-.3-.5.1.2.2.4.3.5z\"/>\n          </g>\n\n          <g id=\"XMLID_43_\">\n            <path class=\"green\" d=\"M320.3 304.9s-7-8.6-7.5-9.7l-.3-.4c0-.1-.5-.9-.5-.9-1.1-1.9-2.7-3.5-5.3-7.5-.4-.6-.9-1.4-1.4-1.9-.2-.2-.5-.4-.7-.7-.9-.9-1.8-2-2.6-3.2-2.4-3.5-4.2-7.8-4-9.8 0 0 1.3 1.8 2.4 3.5.1.1.2.3.3.4v.1c.7 1 1.3 1.8 1.5 2.1.3.4 1.4 3 2.2 4.7.2.4.3.7.4.9.1.2.2.4.4.6 0 0 0 .1.1.1.1.2.2.3.3.5v.1c.3.4.6.9 1 1.4.6.8 1.2 1.5 1.8 2.2.8.9 3.8 5.4 4.2 5.9.1.1.4.7.9 1.4 1 1.6 6.7 9.4 7.5 9.8l-.7.4z\"/>\n\n            <path class=\"light-green\" d=\"M306.6 285.1c-.3-.5-.7-.9-1-1.4v-.1c-.1-.2-.2-.3-.3-.5 0 0 0-.1-.1-.1-.1-.2-.3-.4-.4-.6-.1-.2-.3-.6-.4-.9-.8-1.7-1.9-4.3-2.2-4.7-.2-.3-.8-1.1-1.5-2.1v-.7-.8-1.7c0-.7 0-1.4-.1-1.8v-.9c.1-.5-.2-3.6 0-3.9 0 0 .3 3.3 1.1 4.9.1.3.3.5.5.6.6.5 2.8 3.6 4.2 6.6.4.9.3 1.9.1 2.7-.2.7-.4 1.3-.5 1.8v.2c0 .3.2 1.3.3 2.3.2.4.2.8.3 1.1z\"/>\n\n          </g>\n        </g>\n\n        <g>\n          <path class=\"extra-light-o\" d=\"M321.6 291.3s5.8-1.7 7.6 1.2c.4.7-1.5 1.5-1.8 1.6-.3.1-2 .2-3.9-1.3-1.5-1.3-1.9-1.5-1.9-1.5z\"/>\n\n          <path class=\"extra-light-o\" d=\"M322.8 288.6s1.5-3.6 3.3-2.7c.8.4.2 2.8-.3 3.4-.8.8-2.8 2.1-4.2 1.9l1.2-2.6z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.2 291.1s2.4-2.1 1.1-4c-1.4-1.9-2.9-1.7-2.9-1.7s-1 3.9 1.8 5.7z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.3 291s-4.2-1.3-5.2 2c-.3 1.1 4.2.8 5.3-.9.3-.5-.1-1.1-.1-1.1z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.3 291.1l1.3 1.2s2 3.8.2 5.6c-.9.9-2.1-2.8-2.1-3.5.1-.4 1-2.5.6-3.3z\"/>\n\n          <path class=\"orange\" d=\"M321.2 290.7s-.1-1.3-.2-1.4c-.1-.1 1.1.8 1.1.8 0 .1 1.2-.5 1.2-.7 0-.2-.6 1.1-.7 1.2-.1.1 1 .8 1 .8l-1.5-.1-.1.9-.5-.8h-.8l.5-.7z\"/>\n\n        </g>\n      </g>\n    </g>\n\n    <g id=\"chemistry-big\">\n\n      <path class=\"white_page\" d=\"M134.1 236.5l128.4-40.7s-5.7 10.5-11.6 12.7c-5.9 2.2-92.7 34.8-92.7 34.8s-14.9-2.1-24.1-6.8z\"/>\n\n      <path class=\"dark_gray_page\" d=\"M125.3 145.8l58.9-85.3s128 102 66.7 148l-76 28s28.1-24-49.6-90.7z\"/>\n\n      <path class=\"orange\" d=\"M214.8 131.6c.4.6.3 1.4-.3 1.9l-10 7c-.6.4-1.4.3-1.9-.4l-.2-.2c-.4-.6-.3-1.4.3-1.9l10-7c.6-.4 1.4-.3 1.9.4l.2.2z\"/>\n\n      <g id=\"XMLID_50_\">\n        <path class=\"dark_navy\" d=\"M222.4 144.2c4.9 7.1 11 15.7 13.8 19.7 1.8 2.6 1.5 6-1.7 8.3l-.5.3c-3.1 2.2-6.5 1.4-8.3-1.2-2.7-3.9-8.4-12-13.2-18.9 0 0 1.1-4.7 4.5-5.6 4.1-1.2 5.4-2.6 5.4-2.6z\"/>\n\n        <path class=\"light_orange\" d=\"M214.7 133.3s3.4 4.9 7.6 10.9c0 0-1.3 1.4-5.4 2.6-3.4 1-4.5 5.6-4.5 5.6-4.5-6.4-8.2-11.8-8.2-11.8l10.5-7.3z\"/>\n\n      </g>\n\n      <g>\n        <path class=\"orange\" d=\"M187.5 133.4c.4.6.2 1.4-.4 1.8l-14.5 10.2c-.6.4-1.4.3-1.8-.2l-.1-.1c-.4-.6-.2-1.4.4-1.8l14.5-10.2c.6-.4 1.4-.3 1.8.2l.1.1z\"/>\n\n        <g id=\"XMLID_49_\">\n\n\n          <path class=\"med-blue\" d=\"M230.5 169.3s4.1 2.6.2 5.3l-35.8 25.1c-3.9 2.7-5-2-5-2l-3.4-24.6s3.1-6.3 8.7-8.5c7.8-3.1 7.1-10.1 7.1-10.2l28.2 14.9z\"/>\n\n          <path class=\"light_orange\" d=\"M202.3 154.5c0 .1.8 7.1-7.1 10.2-5.6 2.2-8.7 8.5-8.7 8.5l-1.5-11.3-11.8-16.9 13.4-9.4 11.8 16.9 3.9 2z\"/>\n\n        </g>\n\n        <ellipse transform=\"rotate(-35.011 198.16 185.684)\" class=\"light-bubbles\" cx=\"198.2\" cy=\"185.7\" rx=\"5\" ry=\"5\"/>\n\n        <ellipse transform=\"rotate(-35.011 199.115 174.96)\" class=\"light-bubbles\" cx=\"199.1\" cy=\"175\" rx=\"2.9\" ry=\"2.9\"/>\n\n        <ellipse transform=\"rotate(-35.011 205.544 179.716)\" class=\"light-bubbles\" cx=\"205.5\" cy=\"179.7\" rx=\"2.1\" ry=\"2.1\"/>\n\n      </g>\n    </g>\n\n\n    <g id=\"comp-big\">\n\n      <g class=\"fade8\">\n\n        <path class=\"medium_gray\" d=\"M600.1 231.8l10.8-130.7 130.7 9.3s-28.7 160-34.7 165.3l-106.8-43.9z\"/>\n\n        <path class=\"da\" d=\"M699.1 200.3c-.2 1.1-1.2 1.9-2.2 1.6l-62.5-13.5c-1-.2-1.6-1.3-1.4-2.4l10.1-46.5c.2-1.1 1.2-1.9 2.2-1.6l62.5 13.5c1 .2 1.6 1.3 1.4 2.4l-10.1 46.5z\"/>\n\n        <path transform=\"rotate(-77.79 671.109 169.92)\" class=\"light-blue\" d=\"M649.5 139.9h43.3v60h-43.3z\"/>\n\n        <path class=\"med-blue\" d=\"M695.7 200.6l14.2 3.1-.8 3.8s-3 1.8-4.6 1.5l-80.9-17.5c-1.6-.3-3.6-3.2-3.6-3.2l.8-3.8 14.2 3.1 60.7 13z\"/>\n\n        <g>\n\n          <path class=\"light-green\" d=\"M665.7 161c-.2.4-.5.7-.7 1.1l-5.3-1.1c.3-.4.6-.7 1-1.1l5 1.1zM671.6 162.3l-.3 1.2-5-1.1c.2-.4.5-.8.7-1.1l4.6 1zM677.2 164.8l-4.6-1 .3-1.2 4.2.9c0 .4.1.8.1 1.3zM684.2 166.3l-5.7-1.2c0-.5-.1-.9-.1-1.3l5.4 1.2c.1.3.3.8.4 1.3z\"/>\n\n          <g>\n            <path class=\"light-green\" d=\"M662.2 176.1l-4.8-1c-.2-.5-.3-.9-.4-1.4l5.2 1.1c-.1.4 0 .8 0 1.3zM668.6 176.2l-.3 1.2-4.8-1c-.1-.4-.1-.9-.2-1.3l5.3 1.1zM669.9 176.4l4.8 1c-.2.4-.4.8-.7 1.1l-4.4-1 .3-1.1zM681.6 179c-.3.4-.6.7-1 1.1l-5.3-1.1c.2-.4.4-.8.7-1.1l5.6 1.1z\"/>\n\n          </g>\n\n          <g>\n\n            <path class=\"light-green\" d=\"M662.5 168.9l-5.8-1.3c0-.2.1-.4.1-.6 0-.2.1-.4.1-.6l5.9 1.3-.3 1.2zM670.1 169.3l-.3 1.2-6.1-1.3.3-1.2 6.1 1.3zM676.8 172l-5.7-1.2.3-1.2 5.7 1.2-.3 1.2zM684.4 173c0 .2-.1.4-.1.6l-6.3-1.4c.1-.4.2-.8.2-1.2l6.3 1.4c0 .2 0 .4-.1.6z\"/>\n          </g>\n\n          <g>\n\n            <path class=\"green\" d=\"M673.9 155c-8.3-1.8-16.5 3.5-18.3 11.8s3.5 16.5 11.8 18.3c8.3 1.8 16.5-3.5 18.3-11.8s-3.5-16.5-11.8-18.3zm-16.5 20c-.2-.5-.3-.9-.4-1.4-.5-1.9-.6-3.9-.3-6 0-.2.1-.4.1-.6 0-.2.1-.4.1-.6.5-2.1 1.5-3.9 2.8-5.5.3-.4.6-.7 1-1.1 2.4-2.3 5.6-3.8 9-4-1 1-2.6 2.7-4 5.1-.2.4-.5.7-.7 1.1-.1.2-.3.5-.4.8-.7 1.4-1.4 3-1.9 4.8l-.3 1.2c-.4 1.8-.5 3.7-.4 5.8 0 .4.1.9.1 1.3.2 2 .8 4.2 1.7 6.4-2.9-1.4-5.2-4.1-6.4-7.3zm9.6 8.7c-.5-.1-.9-.3-1.3-.4-1.1-2.3-1.8-4.6-2.1-6.9-.1-.4-.1-.9-.2-1.3-.2-2 0-3.9.4-5.8l.3-1.2c.4-1.5 1-3 1.7-4.5.2-.4.4-.7.6-1.1.2-.4.5-.8.7-1.1 1.9-2.9 3.9-4.8 4.5-5.3.5 0 .9.1 1.4.2l-6 27.4zm1.2.3l6-27.6.9.3c.3.6 1.4 3.2 2 6.8.1.4.1.9.2 1.3 0 .4.1.8.1 1.2.1 1.7 0 3.3-.3 4.8-.1.4-.1.8-.2 1.2-.4 1.9-1.1 3.7-2.1 5.5-.2.4-.4.8-.7 1.1-1.3 2-2.9 3.8-4.9 5.5-.4 0-.7-.1-1-.1zm13.4-5c-.3.4-.6.7-1 1.1-2.5 2.5-6 4-9.6 4.1 1.8-1.7 3.3-3.5 4.3-5.3.2-.4.4-.8.7-1.1 1-1.9 1.6-3.7 2-5.5.1-.4.2-.8.2-1.2.3-1.9.4-3.6.3-5.2 0-.3 0-.6-.1-.8 0-.5-.1-.9-.1-1.3-.4-2.8-1.1-5.1-1.6-6.4 3.3 1.6 5.7 4.3 7 7.6.2.5.3.9.5 1.4.5 1.9.7 4 .3 6.1 0 .2-.1.4-.1.6 0 .2-.1.4-.1.6-.6 1.9-1.5 3.7-2.7 5.3z\"/>\n\n          </g>\n\n        </g>\n      </g>\n    </g>\n\n  <g id=\"top-spa\">\n    <g class=\"fade4\">\n        <path class=\"dark_gray_page\" d=\"M560.5 42l62.4-29.5s32.5 72.5 34 73.5-74.5 9-74.5 9l-21.9-53z\"/>\n\n        <path class=\"white_page\" d=\"M582.4 95.3l3.5-13 67.7 4.8z\"/>\n\n        <path class=\"dark_navy\" d=\"M629.1 55.9c.6 3.3-4.4 7.2-16.5 12.1-12.3 5-18.8.3-19.2-.6-.1-.2-.1-.3-.1-.5-.2-2.5 4.6-8 13.8-10.9 2.2-.7 20-4.4 21.7-1l.3.9z\" id=\"XMLID_56_\"/>\n\n        <path class=\"navy-light\" d=\"M618.7 54c-2.1 1.5-5.1 2.9-8.3 4.1-1.4.5-2.8 1-4.1 1.4-4.1 1.3-8.3 2.2-11.6 2.5-3.1.3-5.4.1-6-.6-.4-.5-.5-1.2 0-2 .5-1.1 2-2.5 4.8-4.1 2.2-1.3 5.3-2.7 9.5-4.3 0 0 6.7-2.5 11.9-3 1.2-.1 2.4-.2 3.4 0 1.1.2 2 .5 2.5 1.2 1.2 1.5.1 3.2-2.1 4.8z\" id=\"XMLID_55_\"/>\n\n        <path class=\"dark_navy\" d=\"M611 45.9c.1.1.1.3 0 .6-.2 1.2-1.8 3.7-9.4 5.9-6.5 1.9-9.1 2.5-10.3 2.4-.8-.1-.9-.5-1.1-1-.2-.5-.1-1.6.5-2.9.4-.8 1-1.7 1.8-2.7 1.6-1.8 4.3-3.6 8.3-4.8 5.9-1.8 8.4 0 9.4 1.3.6.6.8 1.1.8 1.2z\" id=\"XMLID_54_\"/>\n\n        <path class=\"navy-light\" d=\"M606.6 41.8c-.9.9-2.2 1.6-3.7 2.1-.6.2-1.3.5-1.9.6-1.9.5-3.8.8-5.4.7-1.5-.1-2.6-.4-3-1-.2-.4-.3-.9-.2-1.4.2-.7.7-1.5 2-2.4 1-.7 2.3-1.4 4.3-2.1 0 0 3-1.1 5.6-1 .6 0 1.2.1 1.7.3.6.2 1 .5 1.3 1 .6 1.2.3 2.3-.7 3.2z\" id=\"XMLID_53_\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.6 45s2-4.1 4.5-3.6c.6.1.1 1.6 0 1.8-.1.2-.9 1.2-2.7 1.5-1.5.1-1.8.3-1.8.3z\"/>\n\n        <path class=\"extra-light-o\" d=\"M598.7 42.9s-1.2-2.7.2-3.2c.6-.2 1.7 1.3 1.7 1.9.1.8-.2 2.6-1.1 3.3l-.8-2z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.4 45.1s0-2.4-1.7-2.6c-1.7-.2-2.4.7-2.4.7s1.6 2.5 4.1 1.9z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.3 45s-2.8 1.7-1.5 3.9c.5.8 2.6-1.9 2.2-3.4-.2-.4-.7-.5-.7-.5z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.4 45l1.3-.1s3.1.8 3.2 2.7c0 .9-2.6-.2-3-.6-.2-.2-.9-1.7-1.5-2z\"/>\n\n        <path class=\"orange\" d=\"M599.1 44.9s-.8-.6-.9-.6c-.1 0 1-.2 1-.2s.3-.9.3-1c-.1-.1.3.9.3 1 0 .1.9-.1.9-.1l-.8.8.4.5-.7-.1-.4.4-.1-.7z\"/>\n\n        <g>\n          <g id=\"XMLID_52_\">\n            <path class=\"green\" d=\"M595.2 72.7c-.1 0-.1 0 0 0-.1 0 0 0 0 0zM605.1 70.2s0 .1 0 0c-.2.1-.4.1-.6.2.2 0 .4-.1.6-.2z\"/>\n          </g>\n\n          <g id=\"XMLID_51_\">\n            <path class=\"green\" d=\"M629.7 61.2s-10.3 4.7-11.4 4.9l-.5.2c-.1 0-1 .3-1 .3-2.2.6-4.1 1.7-8.7 3.3-.7.2-1.6.5-2.2.9-.3.2-.5.3-.8.5-1.1.6-2.4 1.2-3.8 1.7-4.1 1.4-8.7 2.2-10.7 1.4 0 0 2.1-.8 4.1-1.5.2-.1.3-.1.5-.2h.1c1.1-.4 2.1-.8 2.4-.9.4-.2 3.3-.6 5.1-.9.4-.1.7-.1 1-.2.2-.1.5-.1.7-.2h.1c.2 0 .4-.1.5-.1h.1c.5-.2 1.1-.4 1.6-.6.9-.4 1.8-.8 2.6-1.2 1.1-.6 6.3-2.4 6.8-2.6.2-.1.8-.3 1.6-.5 1.8-.6 10.9-4.2 11.6-4.9l.3.6z\"/>\n\n            <path class=\"light-green\" d=\"M606.8 69.6c-.5.2-1.1.4-1.6.6h-.1c-.2 0-.4.1-.5.1h-.1c-.3.1-.5.1-.7.2-.3.1-.6.1-1 .2-1.9.3-4.7.7-5.1.9-.4.2-1.3.5-2.4.9-.2-.1-.5-.1-.7-.2-.3-.1-.5-.2-.8-.2-.6-.2-1.1-.3-1.6-.4-.7-.2-1.4-.3-1.8-.4-.5-.1-.8-.2-.9-.2-.5-.2-3.6-.7-3.8-1 0 0 3.3.6 5.1.2.3-.1.6-.2.8-.3.6-.5 4.2-1.8 7.6-2.4 1-.2 1.9.2 2.7.6.7.4 1.2.7 1.6.9.1 0 .1 0 .2.1.3.1 1.3.2 2.3.2.1.2.5.2.8.2z\"/>\n\n          </g>\n        </g>\n\n        <g>\n          <path class=\"extra-light-o\" d=\"M616.7 56.5s-.1-6.2 3.1-7.2c.8-.3 1.1 1.9 1.1 2.2 0 .3-.3 2-2.3 3.5-1.6 1.1-1.9 1.5-1.9 1.5z\"/>\n\n          <path class=\"extra-light-o\" d=\"M614.4 54.6s-3.1-2.4-1.8-3.9c.6-.7 2.8.5 3.2 1.1.6.9 1.4 3.3.8 4.6l-2.2-1.8z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.5 56.8s-1.5-2.9-3.7-2.1c-2.2.9-2.4 2.4-2.4 2.4s3.5 2 6.1-.3z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.3 56.7s-2.3 3.8.6 5.6c1 .6 1.9-3.9.4-5.5-.3-.3-1-.1-1-.1z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.4 56.7l1.5-1s4.2-1 5.5 1.2c.6 1.1-3.2 1.4-4 1.2-.3-.1-2.1-1.5-3-1.4z\"/>\n\n          <path class=\"orange\" d=\"M616 56.7s-1.3-.2-1.4-.1c-.1.1 1-.8 1.1-.8.1 0-.2-1.3-.3-1.4-.2-.1.9.9 1 1 .1.1 1-.7 1-.7l-.5 1.4.8.3-.9.3-.2.8-.6-.8z\"/>\n        </g>\n      </g>\n    </g>\n    <g id=\"martini-bottom\">\n      <path class=\"dark_gray_page\" d=\"M631.5 282.5s-28.6 127.1-31.2 132.4c-2.6 5.3 15.6 18 15.6 18l106.2.1s-10-43.1-10-49.1 2.7-79.3 10-83.3l-90.6-18.1z\"/>\n\n      <ellipse transform=\"rotate(-81.118 659.418 401.146)\" class=\"light_orange\" cx=\"659.4\" cy=\"401.1\" rx=\"2.7\" ry=\"17.1\"/>\n\n      <path class=\"orange\" d=\"M664.6 398.1c1 1.3 5.4 4.1 5 4.2-4.3 1-19-2.3-20.3-2.6.9.1 4.6-1.6 5.9-2.5 1.4-1 2.3-2 3.5-5.7 5.3-16.1 4.2-35.1 4.2-35.1l7.2 1.1s-7.3 17.2-7.1 34.1c0 3.8.6 5.1 1.6 6.5z\"/>\n\n      <path class=\"top-martini\" d=\"M697.7 329.5l-6.5 6.6v-.1l-42.8-6.6-4.5-8.3z\"/>\n\n      <path class=\"st6\" d=\"M677.2 339.4c-.2 0-.3-.1-.5-.2-.4-.3-.4-.9-.1-1.3l21.1-23.9c.3-.4.9-.4 1.3-.1.4.3.4.9.1 1.3L678 339.1c-.2.2-.5.3-.8.3z\"/>\n\n      <circle class=\"green\" cx=\"691.7\" cy=\"321.7\" r=\"4.7\"/><path class=\"st6\" d=\"M691.2 336.1l-21.1 21.3-7.2-1.1-14.5-26.9 42.8 6.6z\"/>\n\n    </g>\n\n    <g id=\"comp-little\">\n      <g class=\"fade5\">\n        <path class=\"medium_gray\" d=\"M66.2 310.3l45.2-35.5s27.5 52.5 22 98l-52 32.6s6.6-58.1-15.2-95.1z\"/>\n\n        <path class=\"st6\" d=\"M122.8 329.7c.2.5.1 1.1-.4 1.3l-28.2 13.7c-.4.2-1 0-1.3-.5l-10.2-21c-.2-.5-.1-1.1.4-1.3l28.2-13.7c.4-.2 1 0 1.3.5l10.2 21z\"/>\n\n        <path transform=\"rotate(-25.822 102.79 326.375)\" class=\"light-blue\" d=\"M88.1 315.8h29.4v21.3H88.1z\"/>\n\n        <path class=\"med-blue\" d=\"M121.6 330.8l6.4-3.1.8 1.7s-.6 1.6-1.3 1.9L91 349c-.7.3-2.3-.2-2.3-.2l-.8-1.7 6.4-3.1 27.3-13.2z\"/>\n\n        <g>\n\n          <path class=\"light-green\" d=\"M98 324.6c0 .2.1.4.1.6l-2.4 1.2c0-.2 0-.5.1-.7l2.2-1.1zM100.7 323.3l.3.6-2.3 1.1c0-.2-.1-.4-.1-.6l2.1-1.1zM103.6 322.6l-2.1 1-.3-.6 1.9-.9.5.5zM106.8 321l-2.6 1.3c-.1-.2-.3-.3-.4-.5l2.4-1.2c.2.2.4.3.6.4z\"/>\n\n          <g>\n\n            <path class=\"light-green\" d=\"M101.2 331.5l-2.2 1.1c-.2-.1-.4-.3-.6-.4l2.3-1.1c.2 0 .4.2.5.4zM103.7 329.6l.3.6-2.2 1.1-.5-.5 2.4-1.2zM104.3 329.3l2.2-1.1c0 .2.1.4.1.6l-2 1-.3-.5zM109.6 326.7c0 .2 0 .5-.1.7l-2.4 1.2c0-.2-.1-.4-.1-.6l2.6-1.3z\"/>\n          </g>\n\n          <g>\n            <path class=\"light-green\" d=\"M99.2 328.6l-2.6 1.3c0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3L99 328c0 .2.1.4.2.6zM102.2 326.5l.3.6-2.8 1.3-.3-.6 2.8-1.3zM105.6 325.5l-2.6 1.2-.3-.6 2.6-1.2.3.6zM108.9 323.6c0 .1.1.2.1.3l-2.8 1.4-.3-.6 2.8-1.4c.1.1.1.2.2.3z\"/>\n          </g>\n\n          <g>\n            <path class=\"green\" d=\"M99.3 319.8c-3.7 1.8-5.3 6.3-3.5 10.1 1.8 3.7 6.3 5.3 10.1 3.5 3.7-1.8 5.3-6.3 3.5-10.1-1.8-3.7-6.3-5.3-10.1-3.5zm-.3 12.7c-.2-.1-.4-.3-.6-.4-.8-.6-1.4-1.3-1.9-2.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3-.4-1-.6-2-.6-3 0-.2 0-.5.1-.7.2-1.6 1-3.1 2.3-4.2-.1.7-.2 1.8 0 3.2 0 .2.1.4.1.6 0 .1 0 .3.1.4.1.7.4 1.6.7 2.4l.3.6c.4.8.9 1.6 1.6 2.4.1.2.3.3.4.5.7.7 1.6 1.4 2.6 2-1.7.2-3.4-.1-4.9-1zm6.4.5c-.2.1-.4.2-.7.2-1.1-.6-2.1-1.2-2.9-2l-.5-.5c-.7-.7-1.2-1.5-1.6-2.4l-.3-.6c-.3-.7-.5-1.5-.7-2.3 0-.2-.1-.4-.1-.6 0-.2-.1-.4-.1-.6-.2-1.7.1-3 .1-3.4.2-.1.4-.2.6-.4l6.2 12.6zm.5-.3l-6-12.5c.1-.1.3-.1.4-.2.3.2 1.5.8 2.8 2 .2.1.3.3.5.5l.4.4c.5.6 1 1.3 1.4 2 .1.2.2.4.3.5.4.9.7 1.8.8 2.7 0 .2.1.4.1.6.1 1.1 0 2.3-.2 3.6-.2.2-.3.3-.5.4zm3.7-6c0 .2 0 .5-.1.7-.2 1.7-1.1 3.4-2.5 4.5.2-1.2.2-2.3.1-3.3 0-.2-.1-.4-.1-.6-.2-1-.5-1.9-.9-2.7l-.3-.6c-.4-.8-.9-1.5-1.4-2.1l-.3-.3c-.1-.2-.3-.3-.4-.5-1-1-1.9-1.6-2.6-2 1.7-.4 3.5-.1 5 .8.2.1.4.3.6.4.8.6 1.5 1.4 2 2.3 0 .1.1.2.1.3 0 .1.1.2.1.3.5.9.7 1.9.7 2.8z\"/>\n          </g>\n        </g>\n      </g>\n    </g>\n\n    <g id=\"hotel-bottom\">\n      <g class=\"fade6\">\n        <path class=\"medium_gray\" d=\"M392.9 433l17.5-114.2 76.5 11.5-14.5 102.5z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 13.513 791.913)\" class=\"st6\" d=\"M410.4 378.7h40.7v20h-40.7z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 -2.429 804.88)\" class=\"med-blue\" d=\"M424.4 399.8H435v8h-10.6z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 26.76 774.228)\" class=\"light-blue\" d=\"M425.4 370.3h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 33.525 782.544)\" class=\"light-blue\" d=\"M433.2 370.8h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 19.267 780.323)\" class=\"light-blue\" d=\"M424.9 377.3h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 26.031 788.639)\" class=\"light-blue\" d=\"M432.7 377.8h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 11.774 786.418)\" class=\"light-blue\" d=\"M424.4 384.4h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 18.538 794.734)\" class=\"light-blue\" d=\"M432.2 384.9h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 4.28 792.512)\" class=\"light-blue\" d=\"M423.9 391.4h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 11.045 800.828)\" class=\"light-blue\" d=\"M431.8 392h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 35.667 773.893)\" class=\"med-blue\" d=\"M431.6 356.1h1.1v23.4h-1.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 37.004 772.806)\" class=\"dark_navy\" d=\"M431.5 353.3h1.6v26.5h-1.6z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 23.817 820.515)\" class=\"orange\" d=\"M438.2 386.5h26v22h-26z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 43.729 804.32)\" class=\"light_orange\" d=\"M446.7 370.1h11.6v17.2h-11.6z\"/>\n\n        <g>\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 20.557 832.063)\" class=\"light_orange\" d=\"M450 402.2h11.6v5.6H450z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 27.233 808.84)\" class=\"extra-light-o\" d=\"M443.9 387.1h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 18.806 815.696)\" class=\"extra-light-o\" d=\"M443.4 395h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 10.783 822.221)\" class=\"extra-light-o\" d=\"M442.8 402.6h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 35.971 819.525)\" class=\"extra-light-o\" d=\"M454 387.7h5.6v5.6H454z\"/>\n        </g>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 50.409 798.887)\" class=\"orange\" d=\"M452.4 362.8h1v19.3h-1z\"/>\n\n        <g>\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 40.26 800.056)\" class=\"extra2-light-o\" d=\"M446.1 376.1h4.7v4.7h-4.7z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 47.197 808.583)\" class=\"extra2-light-o\" d=\"M454.2 376.7h4.7v4.7h-4.7z\"/>\n        </g>\n\n        <path class=\"green\" d=\"M420.3 353.6l.8 2 2.2.5-1.7 1.5.3 2.2-2-1.2-2 .9.5-2.1-1.5-1.7 2.3-.2zM430 349.7l.9 2 2.2.5-1.7 1.5.2 2.2-1.9-1.2-2.1.9.5-2.2-1.5-1.6 2.3-.2zM441.5 349.3l.8 2.1 2.2.4-1.7 1.5.2 2.2-1.9-1.1-2 .9.5-2.2-1.5-1.7 2.2-.2zM451.9 351.2l.9 2 2.2.5-1.7 1.5.2 2.2-1.9-1.2-2.1.9.6-2.2-1.5-1.6 2.2-.2zM461.7 356.6l.8 2.1 2.2.5-1.7 1.4.3 2.3-2-1.2-2 .9.5-2.2-1.5-1.7 2.3-.2z\"/>\n      </g>\n    </g>\n\n    <g id=\"chemistry-little\">\n\n      <g class=\"fade5\">\n\n        <path class=\"dark_gray_page\" d=\"M413 148.6l58 13.5 14-74.5-58-14.5s-15.3 67.8-14 75.5z\"/>\n\n        <path class=\"orange\" d=\"M470.5 111.3c-.1.5-.6.8-1.1.8l-8.2-1.6c-.5-.1-.8-.6-.7-1.1v-.2c.1-.5.6-.8 1.1-.7l8.2 1.6c.5.1.8.6.7 1.1v.1z\"/>\n\n        <g id=\"XMLID_42_\">\n          <path class=\"st6\" d=\"M468 121.1c-1.1 5.8-2.4 12.9-3.1 16.3-.4 2.1-2.3 3.6-4.9 3.1l-.4-.1c-2.6-.5-3.8-2.6-3.4-4.7.6-3.2 1.9-9.9 2.9-15.5 0 0 2.8-1.7 4.9-.5 2.6 1.4 4 1.4 4 1.4z\"/>\n\n          <path class=\"light_orange\" d=\"M469.7 112.1s-.8 4-1.7 9c0 0-1.3 0-3.8-1.4-2.1-1.2-4.9.5-4.9.5 1-5.3 1.8-9.7 1.8-9.7l8.6 1.6z\"/>\n\n        </g>\n\n        <g>\n          <path class=\"orange\" d=\"M456.6 98.8c-.1.5-.6.8-1.1.7l-11.9-2.3c-.5-.1-.8-.5-.8-1v-.1c.1-.5.6-.8 1.1-.7l11.9 2.3c.5.1.8.5.8 1v.1z\"/>\n\n          <g id=\"XMLID_41_\">\n            <path class=\"med-blue\" d=\"M459.5 137.1s.7 3.3-2.5 2.7l-29.5-5.6c-3.2-.6-1.4-3.4-1.4-3.4l10.5-13.4s4.6-1.5 8.4.2c5.3 2.4 8.3-1.3 8.4-1.4l6.1 20.9z\"/>\n\n            <path class=\"light_orange\" d=\"M453.3 116.2c0 .1-3.1 3.8-8.4 1.4-3.8-1.7-8.4-.2-8.4-.2l4.8-6.2 2.6-13.9 11.1 2.1-2.6 13.9.9 2.9z\"/>\n\n          </g>\n\n          <ellipse transform=\"rotate(-79.281 435.947 129.034)\" class=\"light-bubbles\" cx=\"436\" cy=\"129\" rx=\"3.4\" ry=\"3.4\"/>\n\n          <ellipse transform=\"rotate(-79.281 441.673 124.368)\" class=\"light-bubbles\" cx=\"441.7\" cy=\"124.4\" rx=\"2\" ry=\"2\"/>\n\n          <ellipse transform=\"rotate(-79.281 442.416 129.804)\" class=\"light-bubbles\" cx=\"442.4\" cy=\"129.8\" rx=\"1.4\" ry=\"1.4\"/>\n\n        </g>\n      </g>\n    </g>\n\n    <g id=\"hotel-tiny\">\n      <g class=\"fade6\">\n        <path class=\"white_page\" d=\"M34.5 230.8l6.7 55s55.3-26.5 56.8-37l-4.5-53s-29.5 26.5-59 35z\"/>\n\n        <path transform=\"rotate(-20.024 61.852 239.887)\" class=\"dark_navy\" d=\"M49.4 233.7h25V246h-25z\"/>\n\n        <path transform=\"rotate(-20.024 53.176 243.048)\" class=\"med-blue\" d=\"M49.9 240.6h6.5v4.9h-6.5z\"/>\n\n        <path transform=\"rotate(-20.024 70.078 234.325)\" class=\"light-blue\" d=\"M68.5 232.8h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 71.727 238.85)\" class=\"light-blue\" d=\"M70.2 237.3h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 66 235.811)\" class=\"light-blue\" d=\"M64.4 234.2h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 67.65 240.337)\" class=\"light-blue\" d=\"M66.1 238.8h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 61.922 237.297)\" class=\"light-blue\" d=\"M60.4 235.7h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 63.571 241.823)\" class=\"light-blue\" d=\"M62 240.3h3.1v3.1H62z\"/>\n\n        <path transform=\"rotate(-20.024 57.844 238.784)\" class=\"light-blue\" d=\"M56.3 237.2h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 59.493 243.31)\" class=\"light-blue\" d=\"M57.9 241.7H61v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 73.909 235.492)\" class=\"med-blue\" d=\"M73.6 228.3h.7v14.4h-.7z\"/>\n\n        <path transform=\"rotate(-20.024 74.636 235.227)\" class=\"dark_navy\" d=\"M74.1 227.1h1v16.3h-1z\"/>\n\n        <path transform=\"rotate(-20.024 62.022 253.547)\" class=\"orange\" d=\"M54 246.8h15.9v13.5H54z\"/>\n\n        <path transform=\"rotate(-20.024 72.858 249.598)\" class=\"light_orange\" d=\"M69.3 244.3h7.1v10.5h-7.1z\"/>\n\n        <g>\n          <path transform=\"rotate(-20.024 58.94 257.971)\" class=\"light_orange\" d=\"M55.4 256.2h7.1v3.4h-7.1z\"/>\n\n          <path transform=\"rotate(-20.024 65.19 249.092)\" class=\"extra-light-o\" d=\"M63.5 247.4h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 60.603 250.763)\" class=\"extra-light-o\" d=\"M58.9 249h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 56.236 252.355)\" class=\"extra-light-o\" d=\"M54.5 250.6h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 67.329 254.914)\" class=\"extra-light-o\" d=\"M65.6 253.2H69v3.4h-3.4z\"/>\n        </g>\n\n        <path transform=\"rotate(-20.024 76.493 248.273)\" class=\"orange\" d=\"M76.2 242.3h.6v11.8h-.6z\"/>\n\n        <g>\n          <path transform=\"rotate(-20.024 72.013 247.277)\" class=\"extra2-light-o\" d=\"M70.6 245.8h2.9v2.9h-2.9z\"/>\n\n          <path transform=\"rotate(-20.024 73.704 251.918)\" class=\"extra2-light-o\" d=\"M72.3 250.5h2.9v2.9h-2.9z\"/>\n\n        </g>\n\n        <path class=\"green\" d=\"M79 225.3l-1 1 .3 1.3-1.3-.6-1.2.7.2-1.4-1-.9 1.4-.3.5-1.2.7 1.2zM83.6 229.7l-1 1 .3 1.4-1.2-.6-1.2.7.1-1.4-1-.9 1.4-.3.5-1.2.7 1.2zM86.6 236.1l-.9 1 .2 1.3-1.2-.6-1.2.7.2-1.4-1-.9 1.3-.2.6-1.3.7 1.2zM88.2 242.4l-1 1 .3 1.3-1.2-.6-1.2.7.2-1.3-1.1-1 1.4-.2.6-1.3.6 1.2zM87.6 249.2l-1 1 .3 1.4-1.3-.6-1.2.7.2-1.4-1-.9 1.4-.3.5-1.2.7 1.2z\"/>\n      </g>\n    </g>\n\n    <g id=\"chemistry-top-right\">\n      <g class=\"fade6\">\n        <path class=\"white_page\" d=\"M682.4 75.5l58 13.5 14-74.5-58-14.5s-15.3 67.7-14 75.5z\"/>\n\n        <path class=\"orange\" d=\"M739.3 37.8c-.1.5-.6.8-1.1.8L730 37c-.5-.1-.8-.6-.7-1.1v-.2c.1-.5.6-.8 1.1-.7l8.2 1.6c.5.1.8.6.7 1.1v.1z\"/>\n\n        <g id=\"XMLID_40_\">\n          <path class=\"st6\" d=\"M736.8 47.6c-1.1 5.8-2.4 12.9-3.1 16.3-.4 2.1-2.3 3.6-4.9 3.1l-.4-.1c-2.6-.5-3.8-2.6-3.4-4.7.6-3.2 1.9-9.9 2.9-15.5 0 0 2.8-1.7 4.9-.5 2.7 1.4 4 1.4 4 1.4z\"/>\n\n          <path class=\"light_orange\" d=\"M738.5 38.6s-.8 4-1.7 9c0 0-1.3 0-3.8-1.4-2.1-1.2-4.9.5-4.9.5 1-5.3 1.8-9.7 1.8-9.7l8.6 1.6z\"/>\n        </g>\n\n        <g>\n          <path class=\"orange\" d=\"M725.4 25.3c-.1.5-.6.8-1.1.7l-11.9-2.3c-.5-.1-.8-.5-.8-1v-.1c.1-.5.6-.8 1.1-.7l11.9 2.3c.5.1.8.5.8 1v.1z\"/>\n\n          <g id=\"XMLID_39_\">\n            <path class=\"med-blue\" d=\"M728.3 63.6s.7 3.3-2.5 2.7l-29.5-5.6c-3.2-.6-1.4-3.4-1.4-3.4l10.5-13.4s4.6-1.5 8.4.2c5.3 2.4 8.3-1.3 8.4-1.4l6.1 20.9z\"/>\n\n            <path class=\"light-orange\" d=\"M722.1 42.7c0 .1-3.1 3.8-8.4 1.4-3.8-1.7-8.4-.2-8.4-.2l4.8-6.2 2.6-13.9 11.1 2.1-2.6 13.9.9 2.9z\"/>\n          </g>\n\n          <ellipse transform=\"rotate(-79.281 704.754 55.572)\" class=\"light-bubbles\" cx=\"704.8\" cy=\"55.6\" rx=\"3.4\" ry=\"3.4\"/>\n\n          <ellipse transform=\"rotate(-79.281 710.48 50.906)\" class=\"light-bubbles\" cx=\"710.5\" cy=\"50.9\" rx=\"2\" ry=\"2\"/>\n\n          <ellipse transform=\"rotate(-79.281 711.223 56.342)\" class=\"light-bubbles\" cx=\"711.3\" cy=\"56.3\" rx=\"1.4\" ry=\"1.4\"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"text\">\n    <div class=\"text-inner\">\n      <h1> Oh no. </h1>\n\n      <h2> It seems that the page you are     looking for is lost. </h2>\n\n      <div id=\"home\" class=\"button\" [routerLink]=\"['/']\">\n        <h3> HOME </h3>\n      </div>\n    </div>\n\n  </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { padding: 2em; }\r\n\r\n\r\n/* Shared */\r\n\r\n\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n\r\n\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image:none;\r\n  padding: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email : {{currentUser.username}}</a></li>\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n\n      <li><button class=\"glyphicon glyphicon-log-in btn btn-danger\" (click)=\"logOut()\"> LogOut</button></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <!-- Jumbotron Header -->\n  <header class=\"jumbotron my-4\">\n    <h1 class=\"display-3\">  <strong>{{currentUser.fullName}}</strong>, Welcome to your app </h1>\n    <p class=\"lead\"> welcome to your profile\n    </p>\n    <div class=\"row\">\n\n\n\n\n    </div>\n  </header>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log('currentUser', this.currentUser);
    };
    // login out from the app
    ProfileComponent.prototype.logOut = function () {
        // this.authService.logOut();
        // localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/logout']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(196, 1, 255), rgb(252, 11, 31));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin,.btn-cancel {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-cancel {\r\n  background-color: rgb(255, 34, 24);\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Full Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Email Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n          <div *ngIf=\"username.errors.required\">\n            Email is required.\n          </div>\n          <div *ngIf=\"username.errors.pattern\">\n            A valid email address is required\n          </div>\n\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"[(ngModel)]=\"user.password\" #password=\"ngModel\" required minlength=\"4\" />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n\n          <div *ngIf=\"password.errors.required\">\n            password is required.\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            password must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create Account</button>\n      <button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\n\n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.createAccount(this.user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/model/model.user.ts":
/*!*************************************!*\
  !*** ./src/app/model/model.user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
        this.fullName = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.createAccount = function (user) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/account/register', user);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.errorMessage = '';
        this.authenticated = false;
    }
    AuthService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].API_URL + '/account/login', { headers: headers })
            .subscribe(function (response) {
            var data;
            data = response;
            var u = data.principal;
            if (response['fullName']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback(data);
        });
    };
    AuthService.prototype.logIn = function (user) {
        console.log(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Accept', 'application/json');
        // creating base64 encoded String from user name and password
        var base64Credential = btoa(user.username + ':' + user.password);
        headers.set('Authorization', 'Basic ' + base64Credential);
        console.log(headers);
        // const options = new RequestOptions();
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].API_URL + '/account/login', { headers: headers });
    };
    AuthService.prototype.logOut = function () {
        // remove user from local storage to log user out
        // return this.http.post(AppComponent.API_URL + 'logout', {})
        // .subscribe((response) => {
        // console.log('Response_logout : ' + response);
        // let u = localStorage.getItem('currentUser');
        // console.log(u);
        // localStorage.removeItem('currentUser');
        // this.router.navigate(['/logout']);
        // },
        // error => {
        // });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/urlPermission/url.permissions.ts":
/*!**************************************************!*\
  !*** ./src/app/urlPermission/url.permissions.ts ***!
  \**************************************************/
/*! exports provided: UrlPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPermission", function() { return UrlPermission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlPermission = /** @class */ (function () {
    function UrlPermission(router) {
        this.router = router;
    }
    UrlPermission.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    UrlPermission = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UrlPermission);
    return UrlPermission;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nidhal\Desktop\spring-boot-angular4-authentication\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map