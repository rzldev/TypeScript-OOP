"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    Car.prototype.setName = function (brand) {
        this.brand = brand;
    };
    ;
    Car.prototype.getName = function () {
        return this.brand;
    };
    ;
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    ;
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    Car.prototype.setPrice = function (price) {
        this.price = price;
    };
    ;
    Car.prototype.getPrice = function () {
        console.log(this.brand + " berjalan");
        return this.price;
    };
    Car.prototype.move = function () {
        console.log(this.brand + " berjalan dengan kencang");
    };
    ;
    return Car;
}());
exports.Car = Car;
