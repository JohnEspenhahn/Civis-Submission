"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NewUrlComponent = (function () {
    function NewUrlComponent(af) {
        var _this = this;
        this.af = af;
        this.onFinished = new core_1.EventEmitter();
        this.message = "";
        this.urls = af.database.list('/urls');
        this.af.auth.subscribe(function (state) {
            _this.username = state.auth.displayName;
        });
    }
    NewUrlComponent.prototype.addPost = function () {
        this.urls.push({
            upvotes: [],
            text: this.message,
            author: this.username
        });
        this.onFinished.emit();
    };
    __decorate([
        core_1.Output()
    ], NewUrlComponent.prototype, "onFinished");
    NewUrlComponent = __decorate([
        core_1.Component({
            selector: 'newurl',
            templateUrl: './newurl.component.html',
            styles: ["\n    .ng-valid[required], .ng-valid.required  {\n      padding-left: 2px;\n      border-left: 5px solid #42A948; /* green */\n    }\n\n    .ng-invalid:not(form)  {\n      padding-left: 2px;\n      border-left: 5px solid #a94442; /* red */\n    }\n  "]
        })
    ], NewUrlComponent);
    return NewUrlComponent;
}());
exports.NewUrlComponent = NewUrlComponent;
