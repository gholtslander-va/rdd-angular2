System.register(['angular2/core', './rubber-duck.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rubber_duck_service_1;
    var RubberDuckComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rubber_duck_service_1_1) {
                rubber_duck_service_1 = rubber_duck_service_1_1;
            }],
        execute: function() {
            RubberDuckComponent = (function () {
                function RubberDuckComponent(_duckMessages) {
                    this._duckMessages = _duckMessages;
                    this.messages = [];
                }
                RubberDuckComponent.prototype._getTimeSent = function () {
                    return new Date().toLocaleTimeString();
                };
                RubberDuckComponent.prototype.addMessage = function () {
                    if (this.duckTimeout) {
                        clearTimeout(this.duckTimeout);
                    }
                    this.messages.unshift("You: " + this.userMessage + " <small class='pull-right time-text'>" + this._getTimeSent() + "</small>");
                    this.userMessage = '';
                    this.duckTimeout = setTimeout(this.addDuckMessage.bind(this), 4000);
                };
                RubberDuckComponent.prototype.addDuckMessage = function () {
                    this.messages.unshift("Duck: " + this._duckMessages.getMessage() + " <small class='pull-right time-text'>" + this._getTimeSent() + "</small>");
                };
                RubberDuckComponent = __decorate([
                    core_1.Component({
                        selector: 'gh-rubber-duck',
                        templateUrl: 'app/rubber-duck/rubber-duck.component.html',
                        providers: [rubber_duck_service_1.RubberDuckMessageService]
                    }), 
                    __metadata('design:paramtypes', [rubber_duck_service_1.RubberDuckMessageService])
                ], RubberDuckComponent);
                return RubberDuckComponent;
            })();
            exports_1("RubberDuckComponent", RubberDuckComponent);
        }
    }
});
//# sourceMappingURL=rubber-duck.component.js.map