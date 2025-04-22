/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nlet age = 20;\nif (age < 50)\n    age += 10;\nlet sale = 123_456_789;\nlet course = 'TypeScript';\nlet levet = true;\nlet level;\nfunction render(document) {\n    console.log(document);\n}\nlet numbers = [1, 2, 3];\nlet nnumbers = [1, 2, 3, 4];\nlet nnnumbers = [];\nnumbers.forEach(n => n.toExponential);\nlet user = [1, 'Quaker'];\nvar Size;\n(function (Size) {\n    Size[Size[\"small\"] = 5] = \"small\";\n    Size[Size[\"medium\"] = 6] = \"medium\";\n    Size[Size[\"large\"] = 7] = \"large\";\n})(Size || (Size = {}));\n;\nlet mySize = Size.medium;\nconsole.log(mySize);\nconst mySpam = document.getElementById('msg-welcome');\nmySpam.textContent = \"Hello World\";\nconsole.log(mySpam);\nlet someValue;\nsomeValue = 234;\nsomeValue = \"Hello Ravn!\";\nlet basicString;\nlet nullableString;\nlet mysteryString;\nlet value = 5;\nlet fixedString = value.toFixed(4);\nconsole.log(fixedString);\nlet fixedStringg = value.toFixed(4);\nconsole.log(fixedString);\nfunction startGame() {\n    let playerName = 'John';\n    logPlayer(playerName);\n}\nfunction logPlayer(name) {\n    console.log(`new player ${name}`);\n}\nstartGame();\nfunction greeting(greeting = \"Good morning!\") {\n    console.log(`${greeting}`);\n}\nfunction sum(a, b) {\n    return a + b;\n}\nfunction division(c, d) {\n    return value.toFixed(4);\n}\nconsole.log(division(3, 4));\n\n\n//# sourceURL=webpack://getting-started-with-typescript/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;