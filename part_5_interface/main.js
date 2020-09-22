"use strict";
exports.__esModule = true;
var hennessey_1 = require("./classes/hennessey");
var bugatti_1 = require("./classes/bugatti");
var koenigsegg_1 = require("./classes/koenigsegg");
var mcLaren_1 = require("./classes/mcLaren");
var competition_1 = require("./classes/competition");
var aventador_1 = require("./classes/aventador");
var venom = new hennessey_1.Hennessey(270, 1200000, 'Venom GT');
var agera = new koenigsegg_1.Koenigsegg(273, 2500000, 'Agera RS');
var chiron = new bugatti_1.Bugatti(304, 3800000, 'Chiron Super Sport 300+');
var speedtail = new mcLaren_1.McLaren(250, 2200000, 'Speedtail');
var aventador = new aventador_1.Aventador('Aventador SVJ Roadster', 218, 650000);
// venom.move();
// agera.move();
// chiron.move();
// speedtail.move();
var cars = [venom, agera, chiron, speedtail, aventador];
var competition = new competition_1.Competition(cars, 1200);
// competition.getCars();
competition.race();
competition.winner();