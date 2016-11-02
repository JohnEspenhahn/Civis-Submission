"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var splashscreen_component_1 = require('./components/splashscreen.component');
var maincontent_component_1 = require('./components/maincontent.component');
var newurl_component_1 = require('./components/newurl.component');
var angularfire2_1 = require('angularfire2');
// Must export the config
exports.firebaseConfig = {
    apiKey: 'AIzaSyCJIe5yiXfaUWMVnxe2g7WwFdecuaaXLIk',
    authDomain: 'project-1-631b3.firebaseapp.com',
    databaseURL: 'https://project-1-631b3.firebaseio.com',
    storageBucket: 'project-1-631b3.appspot.com',
    messagingSenderId: "91552396547"
};
var myFirebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Google,
    method: angularfire2_1.AuthMethods.Redirect
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig, myFirebaseAuthConfig)
            ],
            declarations: [
                app_component_1.AppComponent,
                splashscreen_component_1.SplashScreenComponent,
                maincontent_component_1.MainContentComponent,
                newurl_component_1.NewUrlComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
