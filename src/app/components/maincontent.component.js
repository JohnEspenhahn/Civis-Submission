"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MainContentComponent = (function () {
    function MainContentComponent(af) {
        this.af = af;
        this.urls = af.database.list('/urls');
        this.urls.subscribe(function (url) {
            console.log(url.child("/stars"));
        });
        this.state = 'posts';
    }
    MainContentComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    MainContentComponent.prototype.newPost = function () {
    };
    MainContentComponent = __decorate([
        core_1.Component({
            selector: 'maincontent',
            templateUrl: './maincontent.component.html'
        })
    ], MainContentComponent);
    return MainContentComponent;
}());
exports.MainContentComponent = MainContentComponent;
