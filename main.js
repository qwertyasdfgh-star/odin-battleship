/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Audiowide&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Base Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Variables */
:root {
    --primary-dark: #111111;
    --secondary-dark: #242124;
    --accent-green: #228B22;
    --hover-green: #03C03C;
    --text-light: #ffffff;
    --hit-color: #FF0800;
    --miss-color: #00B9E8;
    --ship-color: #55DD33;
    --cell-size: 35px;
    --glow-color: #FFBF00   ;
    --glow-spread-color: #FF4F00;
}

/* Base Styles */
body {
    background-color: var(--primary-dark);
    color: var(--text-light);
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Homepage Styles */
.homepage {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.homepage-content {
    background-color: var(--secondary-dark);
    padding: 3rem;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.homepage .title {
    color: var(--accent-green);
    font: 3.9em "Audiowide", serif;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 0 0 10px rgba(2, 255, 10, 0.317);
}

.homepage .subtitle {
    color: var(--text-light);
    font-size: 1.2em;
    margin-bottom: 2rem;
}

#name-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

#player-name {
    padding: 12px;
    font-size: 1.1em;
    background-color: var(--primary-dark);
    border: 2px solid var(--accent-green);
    border-radius: 5px;
    color: var(--text-light);
    width: 100%;
    transition: all 0.3s ease;
}

#player-name:focus {
    outline: none;
    border-color: var(--hover-green);
    box-shadow: 0 0 15px rgba(2, 255, 10, 0.317);
}

#player-name::placeholder {
    color: #848482;
}

/* Game Container */
#game-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
}

/* Header */
header {
    text-align: center;
    margin-bottom: 1rem;
}

h1 {
    color: var(--accent-green);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: Audiowide, sans-serif;
}

.status {
    background-color: var(--secondary-dark);
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem 0;
    font: 1em sans-serif;
}

/* Controls */
.controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0.5rem 0;
}

.btn {
    padding: 10px 20px;
    background-color: var(--accent-green);
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
}

.btn:hover {
    transform: scale(1.05);
}

.btn:hover:not(:disabled) {
    background-color: var(--hover-green);
}

.btn:disabled {
    background-color: #666;
    cursor: not-allowed;
}

/* Main Game Area */
.main-game-area {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;
}

/* Boards Layout */
.boards {
    display: flex;
    gap: 4rem;
    justify-content: center;
    flex-wrap: nowrap;
    min-height: 400px;
}

.board-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.board-section h2 {
    color: var(--text-light);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

/* Game Board */
.board {
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, var(--cell-size));
    grid-template-rows: repeat(10, var(--cell-size));
    gap: 2px;
    padding: 10px;
    background-color: var(--secondary-dark);
    border-radius: 5px;
    z-index: 1;
    overflow: visible; 
}

/* Cells */
.cell {
    width: var(--cell-size);
    height: var(--cell-size);
    background-color: var(--primary-dark);
    border: 1px solid var(--accent-green);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
}

.cell:hover:not(.hit):not(.miss) {
    background-color: var(--hover-green);
    opacity: 0.7;
}

.cell.ship {
    background-color: var(--ship-color);
}

.cell.hit {
    background-color: var(--hit-color);
    cursor: not-allowed;
}

.cell.hit::after {
    content: '×';
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}

.cell.miss {
    background-color: var(--miss-color);
    cursor: not-allowed;
}

.cell.miss::after {
    content: '•';
    color: white;
    font-size: 1.5em;
}

.cell.sunk {
    background-color: #f44336; 
    border-color: var(--glow-color);
    position: relative;
    z-index: 10;
    animation: intenseGlow 1.5s infinite ease-in-out;
}

@keyframes intenseGlow {
    0% {
        box-shadow: 0 0 5px var(--glow-color), 
                    inset 0 0 5px var(--glow-color);
    }
    50% {
        box-shadow: 0 0 20px var(--glow-color), 
                    inset 0 0 10px var(--glow-color);
    }
    100% {
        box-shadow: 0 0 5px var(--glow-color), 
                    inset 0 0 5px var(--glow-color);
    }
}

.cell.hit.sunk::after {
    content: '×';
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    text-shadow: 0 0 10px var(--sunk-glow);
    position: relative;
    z-index: 3;
}

/* Ship Placement */
.placement-ui {
    width: 220px;
    min-width: 220px;
    background-color: var(--secondary-dark);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    margin-right: 2rem;
    flex-shrink: 0;
}

.ship-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
}

.ship-piece {
    height: var(--cell-size);
    background-color: var(--ship-color);
    border-radius: 3px;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    user-select: none;
}

/* Ship sizes */
.ship-piece[data-length="5"] { width: calc(5 * var(--cell-size)); }
.ship-piece[data-length="4"] { width: calc(4 * var(--cell-size)); }
.ship-piece[data-length="3"] { width: calc(3 * var(--cell-size)); }
.ship-piece[data-length="2"] { width: calc(2 * var(--cell-size)); }

.ship-piece span {
    color: black;
    font-size: 1em;
    font-weight: bold;
}

.ship-piece.vertical {
    transform-origin: top left;
}

.ship-piece:not(.placed):hover {
    transform: translateX(5px);
}

.ship-piece.placed {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Placement Feedback */
.valid-placement {
    background-color: rgba(76, 175, 80, 0.3);
}

.invalid-placement {
    background-color: rgba(244, 67, 54, 0.3);
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: var(--secondary-dark);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
    .homepage-content {
        padding: 2rem;
    }

    .homepage .title {
        font-size: 2.5em;
    }

    .homepage .subtitle {
        font-size: 1em;
    }

    .boards {
        flex-direction: column;
        align-items: center;
    }

    .placement-ui {
        margin-right: 0;
        margin-bottom: 2rem;
        width: 100%;
        max-width: 300px;
    }

    .cell {
        width: 30px;
        height: 30px;
    }

    .board {
        grid-template-columns: repeat(10, 30px);
        grid-template-rows: repeat(10, 30px);
    }

    h1 {
        font-size: 2rem;
    }
}

/* Win Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: var(--secondary-dark);
    padding: 2rem 3rem;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    border: 1px solid var(--accent-green);
}

.modal-content h2 {
    color: var(--accent-green);
    font-size: 2.5em;
    margin-bottom: 1rem;
}

.modal-content p {
    font-size: 1.2em;
    margin-bottom: 2rem;
}

.modal-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}`, "",{"version":3,"sources":["webpack://./public/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');\r\n\r\n/* Base Reset */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Variables */\r\n:root {\r\n    --primary-dark: #111111;\r\n    --secondary-dark: #242124;\r\n    --accent-green: #228B22;\r\n    --hover-green: #03C03C;\r\n    --text-light: #ffffff;\r\n    --hit-color: #FF0800;\r\n    --miss-color: #00B9E8;\r\n    --ship-color: #55DD33;\r\n    --cell-size: 35px;\r\n    --glow-color: #FFBF00   ;\r\n    --glow-spread-color: #FF4F00;\r\n}\r\n\r\n/* Base Styles */\r\nbody {\r\n    background-color: var(--primary-dark);\r\n    color: var(--text-light);\r\n    font-family: Arial, sans-serif;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* Homepage Styles */\r\n.homepage {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: var(--primary-dark);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.homepage-content {\r\n    background-color: var(--secondary-dark);\r\n    padding: 3rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 500px;\r\n    width: 90%;\r\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.homepage .title {\r\n    color: var(--accent-green);\r\n    font: 3.9em \"Audiowide\", serif;\r\n    margin-bottom: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4px;\r\n    text-shadow: 0 0 10px rgba(2, 255, 10, 0.317);\r\n}\r\n\r\n.homepage .subtitle {\r\n    color: var(--text-light);\r\n    font-size: 1.2em;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#name-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#player-name {\r\n    padding: 12px;\r\n    font-size: 1.1em;\r\n    background-color: var(--primary-dark);\r\n    border: 2px solid var(--accent-green);\r\n    border-radius: 5px;\r\n    color: var(--text-light);\r\n    width: 100%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n#player-name:focus {\r\n    outline: none;\r\n    border-color: var(--hover-green);\r\n    box-shadow: 0 0 15px rgba(2, 255, 10, 0.317);\r\n}\r\n\r\n#player-name::placeholder {\r\n    color: #848482;\r\n}\r\n\r\n/* Game Container */\r\n#game-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    width: 100%;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh1 {\r\n    color: var(--accent-green);\r\n    font-size: 2.5rem;\r\n    margin-bottom: 1rem;\r\n    font-family: Audiowide, sans-serif;\r\n}\r\n\r\n.status {\r\n    background-color: var(--secondary-dark);\r\n    padding: 1rem;\r\n    border-radius: 5px;\r\n    margin: 1rem 0;\r\n    font: 1em sans-serif;\r\n}\r\n\r\n/* Controls */\r\n.controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    margin: 0.5rem 0;\r\n}\r\n\r\n.btn {\r\n    padding: 10px 20px;\r\n    background-color: var(--accent-green);\r\n    color: black;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    transition: background-color 0.2s ease;\r\n}\r\n\r\n.btn:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.btn:hover:not(:disabled) {\r\n    background-color: var(--hover-green);\r\n}\r\n\r\n.btn:disabled {\r\n    background-color: #666;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/* Main Game Area */\r\n.main-game-area {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    margin-top: 2rem;\r\n    padding: 0 1rem;\r\n}\r\n\r\n/* Boards Layout */\r\n.boards {\r\n    display: flex;\r\n    gap: 4rem;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n    min-height: 400px;\r\n}\r\n\r\n.board-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.board-section h2 {\r\n    color: var(--text-light);\r\n    font-size: 1.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n/* Game Board */\r\n.board {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, var(--cell-size));\r\n    grid-template-rows: repeat(10, var(--cell-size));\r\n    gap: 2px;\r\n    padding: 10px;\r\n    background-color: var(--secondary-dark);\r\n    border-radius: 5px;\r\n    z-index: 1;\r\n    overflow: visible; \r\n}\r\n\r\n/* Cells */\r\n.cell {\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    background-color: var(--primary-dark);\r\n    border: 1px solid var(--accent-green);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.cell:hover:not(.hit):not(.miss) {\r\n    background-color: var(--hover-green);\r\n    opacity: 0.7;\r\n}\r\n\r\n.cell.ship {\r\n    background-color: var(--ship-color);\r\n}\r\n\r\n.cell.hit {\r\n    background-color: var(--hit-color);\r\n    cursor: not-allowed;\r\n}\r\n\r\n.cell.hit::after {\r\n    content: '×';\r\n    color: white;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.cell.miss {\r\n    background-color: var(--miss-color);\r\n    cursor: not-allowed;\r\n}\r\n\r\n.cell.miss::after {\r\n    content: '•';\r\n    color: white;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.cell.sunk {\r\n    background-color: #f44336; \r\n    border-color: var(--glow-color);\r\n    position: relative;\r\n    z-index: 10;\r\n    animation: intenseGlow 1.5s infinite ease-in-out;\r\n}\r\n\r\n@keyframes intenseGlow {\r\n    0% {\r\n        box-shadow: 0 0 5px var(--glow-color), \r\n                    inset 0 0 5px var(--glow-color);\r\n    }\r\n    50% {\r\n        box-shadow: 0 0 20px var(--glow-color), \r\n                    inset 0 0 10px var(--glow-color);\r\n    }\r\n    100% {\r\n        box-shadow: 0 0 5px var(--glow-color), \r\n                    inset 0 0 5px var(--glow-color);\r\n    }\r\n}\r\n\r\n.cell.hit.sunk::after {\r\n    content: '×';\r\n    color: white;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n    text-shadow: 0 0 10px var(--sunk-glow);\r\n    position: relative;\r\n    z-index: 3;\r\n}\r\n\r\n/* Ship Placement */\r\n.placement-ui {\r\n    width: 220px;\r\n    min-width: 220px;\r\n    background-color: var(--secondary-dark);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\r\n    margin-right: 2rem;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.ship-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.ship-piece {\r\n    height: var(--cell-size);\r\n    background-color: var(--ship-color);\r\n    border-radius: 3px;\r\n    cursor: grab;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: transform 0.2s ease;\r\n    user-select: none;\r\n}\r\n\r\n/* Ship sizes */\r\n.ship-piece[data-length=\"5\"] { width: calc(5 * var(--cell-size)); }\r\n.ship-piece[data-length=\"4\"] { width: calc(4 * var(--cell-size)); }\r\n.ship-piece[data-length=\"3\"] { width: calc(3 * var(--cell-size)); }\r\n.ship-piece[data-length=\"2\"] { width: calc(2 * var(--cell-size)); }\r\n\r\n.ship-piece span {\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.ship-piece.vertical {\r\n    transform-origin: top left;\r\n}\r\n\r\n.ship-piece:not(.placed):hover {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.ship-piece.placed {\r\n    opacity: 0.5;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/* Placement Feedback */\r\n.valid-placement {\r\n    background-color: rgba(76, 175, 80, 0.3);\r\n}\r\n\r\n.invalid-placement {\r\n    background-color: rgba(244, 67, 54, 0.3);\r\n}\r\n\r\n/* Modal Styles */\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal-content {\r\n    background-color: var(--secondary-dark);\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 500px;\r\n    width: 90%;\r\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n    .homepage-content {\r\n        padding: 2rem;\r\n    }\r\n\r\n    .homepage .title {\r\n        font-size: 2.5em;\r\n    }\r\n\r\n    .homepage .subtitle {\r\n        font-size: 1em;\r\n    }\r\n\r\n    .boards {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .placement-ui {\r\n        margin-right: 0;\r\n        margin-bottom: 2rem;\r\n        width: 100%;\r\n        max-width: 300px;\r\n    }\r\n\r\n    .cell {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n\r\n    .board {\r\n        grid-template-columns: repeat(10, 30px);\r\n        grid-template-rows: repeat(10, 30px);\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n/* Win Modal Styles */\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal-content {\r\n    background-color: var(--secondary-dark);\r\n    padding: 2rem 3rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 500px;\r\n    width: 90%;\r\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\r\n    border: 1px solid var(--accent-green);\r\n}\r\n\r\n.modal-content h2 {\r\n    color: var(--accent-green);\r\n    font-size: 2.5em;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.modal-content p {\r\n    font-size: 1.2em;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.modal-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./public/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGameboards: () => (/* binding */ renderGameboards),
/* harmony export */   setupUI: () => (/* binding */ setupUI),
/* harmony export */   showWinModal: () => (/* binding */ showWinModal),
/* harmony export */   updatePlacementStatus: () => (/* binding */ updatePlacementStatus)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


// --- STATE ---
let draggedShip = null;

// --- CONSTANTS ---
const SHIP_TYPES = [
    { id: 'carrier', length: 5, name: 'Carrier' },
    { id: 'battleship', length: 4, name: 'Battleship' },
    { id: 'cruiser', length: 3, name: 'Cruiser' },
    { id: 'submarine', length: 3, name: 'Submarine' },
    { id: 'destroyer', length: 2, name: 'Destroyer' }
];

// --- UI INITIALIZATION ---
function setupUI() {
    const container = document.createElement('div');
    container.id = 'game-container';
    document.body.appendChild(container);

    container.innerHTML = `
        <header>
            <h1>Battleship</h1>
            <div id="status" class="status">Place your ships or click Randomize</div>
        </header>
        <div class="controls">
            <button id="randomize-btn" class="btn">Randomize Fleet</button>
            <button id="start-btn" class="btn" disabled>Start Battle!</button>
        </div>
        <div class="main-game-area">
            <div id="ship-sidebar" class="placement-ui">
                <h3>Your Ships</h3>
                <p>Drag ships to place. Right-click to rotate.</p>
                <div class="ship-container"></div>
            </div>
            <div class="boards">
                <div id="human-board-section" class="board-section">
                    <h2>Your Fleet</h2>
                    <div id="human-board" class="board"></div>
                </div>
                <div id="computer-board-section" class="board-section">
                    <h2>Enemy Waters</h2>
                    <div id="computer-board" class="board"></div>
                </div>
            </div>
        </div>
    `;

    // Setup all interactive parts of the UI
    createDraggableShips();
    setupDragAndDrop();
    setupControlListeners();
    setupAttackListener();
    renderGameboards();
}

// --- EVENT LISTENER SETUP ---
function setupControlListeners() {
    const randomizeBtn = document.getElementById('randomize-btn');
    const startBtn = document.getElementById('start-btn');

    randomizeBtn?.addEventListener('click', () => {
        if ((0,_game_js__WEBPACK_IMPORTED_MODULE_0__.handleRandomize)()) {
            document.querySelectorAll('.ship-piece').forEach(ship => {
                ship.classList.add('placed');
                ship.draggable = false;
            });
            startBtn.disabled = false;
            renderGameboards();
        }
    });

    startBtn?.addEventListener('click', () => {
        if (_game_js__WEBPACK_IMPORTED_MODULE_0__.players[0]?.gameboard?.ships?.length === _game_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTHS.length) {
            (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();
            renderGameboards();
            document.getElementById('ship-sidebar')?.style.setProperty('display', 'none');
            startBtn.disabled = true;
            randomizeBtn.disabled = true;
        }
    });
}

function setupAttackListener() {
    const computerBoard = document.getElementById('computer-board');
    computerBoard?.addEventListener('click', (e) => {
        if (_game_js__WEBPACK_IMPORTED_MODULE_0__.placementMode || _game_js__WEBPACK_IMPORTED_MODULE_0__.gameOverFlag || _game_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer?.type !== 'human') {
            return; // Block clicks if not the player's turn
        }
        const cell = e.target.closest('.cell');
        if (cell && !cell.classList.contains('hit') && !cell.classList.contains('miss')) {
            const row = parseInt(cell.dataset.row, 10);
            const col = parseInt(cell.dataset.col, 10);
            (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.handlePlayerAttack)([row, col]);
        }
    });
}

// --- DRAG AND DROP LOGIC ---
function createDraggableShips() {
    const container = document.querySelector('.ship-container');
    if (!container) return;
    container.innerHTML = '';
    
    SHIP_TYPES.forEach(({ id, length, name }) => {
        const ship = document.createElement('div');
        ship.className = 'ship-piece';
        ship.draggable = true;
        ship.dataset.id = id;
        ship.dataset.length = length;
        ship.innerHTML = `<span>${name}</span>`;
        
        ship.addEventListener('dragstart', (e) => {
            if (ship.classList.contains('placed')) {
                e.preventDefault();
                return;
            }
            draggedShip = { element: ship, length, isVertical: ship.classList.contains('vertical') };
            e.dataTransfer.setData('text/plain', id); // Necessary for Firefox
        });

        ship.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            ship.classList.toggle('vertical');
            ship.style.width = ship.classList.contains('vertical') ? 'var(--cell-size)' : `calc(${length} * var(--cell-size))`;
            ship.style.height = ship.classList.contains('vertical') ? `calc(${length} * var(--cell-size))` : 'var(--cell-size)';
        });
        container.appendChild(ship);
    });
}

function setupDragAndDrop() {
    const humanBoard = document.getElementById('human-board');
    if (!humanBoard) return;

    humanBoard.addEventListener('dragover', (e) => {
        e.preventDefault(); // This is essential for 'drop' to work
    });

    humanBoard.addEventListener('drop', (e) => {
        e.preventDefault();
        const cell = e.target.closest('.cell');
        if (!cell || !draggedShip) return;

        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);
        const coordinates = calculateShipCoordinates(row, col, draggedShip.length, draggedShip.isVertical);

        if ((0,_game_js__WEBPACK_IMPORTED_MODULE_0__.handleShipPlacement)(draggedShip.length, coordinates)) {
            draggedShip.element.classList.add('placed');
            draggedShip.element.draggable = false;
            if (_game_js__WEBPACK_IMPORTED_MODULE_0__.players[0]?.gameboard?.ships.length === _game_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTHS.length) {
                document.getElementById('start-btn').disabled = false;
            }
            renderGameboards();
        }
        draggedShip = null;
    });
}

// --- RENDERING LOGIC ---
function renderGameboards() {
    const humanBoard = document.getElementById('human-board');
    const computerBoard = document.getElementById('computer-board');
    if (!humanBoard || !computerBoard) return;

    humanBoard.innerHTML = '';
    computerBoard.innerHTML = '';

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            humanBoard.appendChild(createCell('human', row, col));
            computerBoard.appendChild(createCell('computer', row, col));
        }
    }
}

function createCell(boardType, row, col) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.row = row;
    cell.dataset.col = col;
    updateCellState(cell, row, col, boardType);
    return cell;
}

function updateCellState(cell, row, col, boardType) {
    const player = (boardType === 'human') ? _game_js__WEBPACK_IMPORTED_MODULE_0__.players[0] : _game_js__WEBPACK_IMPORTED_MODULE_0__.players[1];
    if (!player) return;

    const coordStr = `${row},${col}`;
    if (boardType === 'human' && player.gameboard.hasShipAt(row, col)) {
        cell.classList.add('ship');
    }

    if (player.gameboard.hitAttacks.has(coordStr)) {
        cell.classList.add('hit');
        const shipInfo = player.gameboard.getShipAt(row, col);
        if (shipInfo && shipInfo.isSunk()) {
            cell.classList.add('sunk');
        }
    } else if (player.gameboard.missedAttacks.has(coordStr)) {
        cell.classList.add('miss');
    }
}

// --- UTILITY FUNCTIONS ---
function calculateShipCoordinates(row, col, length, isVertical) {
    const coordinates = [];
    for (let i = 0; i < length; i++) {
        coordinates.push(isVertical ? [row + i, col] : [row, col + i]);
    }
    return coordinates;
}

function updatePlacementStatus(message) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = message;
    }
}

function resetUI() {
    document.getElementById('ship-sidebar')?.style.setProperty('display', 'block');
    document.getElementById('randomize-btn').disabled = false;
    document.getElementById('start-btn').disabled = true; 
    document.querySelector('.modal')?.remove();

    createDraggableShips();
    renderGameboards();
}

function showWinModal(winner) {
    if (document.querySelector('.modal')) return;

    const modal = document.createElement('div');
    modal.className = 'modal';

    const isHumanWinner = winner.type === 'human';
    const title = isHumanWinner ? `Victory, ${winner.name}!` : 'Defeat!';
    const message = isHumanWinner ? 'You have conquered the enemy fleet.' : 'The enemy has destroyed your fleet.';

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            <p>${message}</p>
            <div class="modal-buttons">
                <button id="play-again-btn" class="btn">Play Again</button>
                <button id="home-btn" class="btn">Main Menu</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('play-again-btn').addEventListener('click', () => {
        (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.resetGame)(); 
        resetUI();  
    });



    document.getElementById('home-btn').addEventListener('click', () => {
        location.reload();
    });
}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHIP_LENGTHS: () => (/* binding */ SHIP_LENGTHS),
/* harmony export */   currentPlayer: () => (/* binding */ currentPlayer),
/* harmony export */   gameOverFlag: () => (/* binding */ gameOverFlag),
/* harmony export */   handlePlayerAttack: () => (/* binding */ handlePlayerAttack),
/* harmony export */   handleRandomize: () => (/* binding */ handleRandomize),
/* harmony export */   handleShipPlacement: () => (/* binding */ handleShipPlacement),
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   placementMode: () => (/* binding */ placementMode),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   resetGame: () => (/* binding */ resetGame),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



// --- GAME STATE (Exported for dom.js to read) ---
let players = [];
let currentPlayer = null;
let gameOverFlag = false;
let placementMode = true;

// --- CONSTANTS ---
const SHIP_LENGTHS = [5, 4, 3, 3, 2];
const COMPUTER_ATTACK_DELAY = 800;

// --- INITIALIZATION ---
function initGame(playerName = 'Admiral') {
    const human = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player('human', playerName);
    const computer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player('computer');
    human.opponent = computer;
    computer.opponent = human;

    players = [human, computer];
    currentPlayer = human;
    gameOverFlag = false;
    placementMode = true;

    computer.gameboard.placeShipsRandomly(SHIP_LENGTHS);
    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('Place your ships or click Randomize.');
}

// --- CORE GAME ACTIONS (Called from dom.js) ---
function handleShipPlacement(length, coordinates) {
    if (!placementMode) return false;
    const success = players[0].gameboard.placeShip(length, coordinates);
    if (success && players[0].gameboard.ships.length === SHIP_LENGTHS.length) {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('All ships placed. Ready to start!');
    }
    return success;
}

function handleRandomize() {
    if (!placementMode) return false;
    const success = players[0].gameboard.placeShipsRandomly(SHIP_LENGTHS);
    if (success) {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('Fleet randomized. Ready to start!');
    }
    return success;
}

function startGame() {
    if (players[0].gameboard.ships.length !== SHIP_LENGTHS.length) return;
    
    placementMode = false; 
    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)(`Your turn, ${players[0].name}. Attack the enemy waters!`);
}

function handlePlayerAttack(coord) {
    if (gameOverFlag || placementMode || currentPlayer.type !== 'human') return;

    const result = currentPlayer.opponent.gameboard.receiveAttack(coord);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderGameboards)(); // Re-render to show the hit/miss/sunk state.

    if (checkGameEnd()) return;
    switch (result) {
        case 'sunk':
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('You sunk an enemy ship! Attack again.');
            break;
        case 'hit':
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('A direct hit! Attack again.');
            break;
        case 'miss':
            currentPlayer = players[1]; // Switch to computer.
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)("You missed. Computer's turn...");
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY);
            break;
    }
}

// --- COMPUTER LOGIC ---
function computerTurn() {
    if (gameOverFlag) return;

    const { coord, result } = players[1].attackOpponent();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderGameboards)(); // Re-render to show computer's hit/miss/sunk.

    if (checkGameEnd()) return;
    switch (result) {
        case 'sunk':
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)(`The enemy sunk your ship at [${coord}]! It will attack again.`);
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY); // Sinking a ship grants another turn.
            break;
        case 'hit':
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)(`Computer hit your fleet at [${coord}]! It will attack again.`);
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY); // Hitting grants another turn.
            break;
        case 'miss':
            currentPlayer = players[0]; // Switch back to human.
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)(`Computer missed at [${coord}]. Your turn!`);
            break;
    }
}

function checkGameEnd() {
    const humanLost = players[0].gameboard.allShipsSunk();
    const computerLost = players[1].gameboard.allShipsSunk();

    if (humanLost || computerLost) {
        gameOverFlag = true;
        const winner = humanLost ? players[1] : players[0];
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)(`Game Over! ${winner.name} is victorious!`);
        
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showWinModal)(winner); 

        return true;
    }
    return false;
}

function resetGame() {
    gameOverFlag = false;
    placementMode = true;
    currentPlayer = players[0];

    players.forEach(p => p.gameboard.reset());
    players[1].gameboard.placeShipsRandomly(SHIP_LENGTHS);

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacementStatus)('Place your ships or click Randomize.');
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


// --- GAMEBOARD CLASS ---
class Gameboard {
  constructor() {
    this.reset();
  }

  reset() {
    this.ships = [];  
    this.missedAttacks = new Set();  
    this.hitAttacks = new Set();     
    this.sunkShips = new Set();      
  }

  isValidCoordinate(row, col) {
    return row >= 0 && row < 10 && col >= 0 && col < 10;
  }

  hasShipAt(row, col) {
    const coordKey = `${row},${col}`;
    return this.ships.some(({coordinates}) => 
      coordinates.some(([r, c]) => `${r},${c}` === coordKey)
    );
  }

  placeShip(length, coordinates, ship = null) {
    if (coordinates.length !== length) return false;

    // Validate coordinates
    if (!coordinates.every(([row, col]) => 
        this.isValidCoordinate(row, col) && !this.hasShipAt(row, col))) {
      return false;
    }

    // Create or use provided ship
    this.ships.push({ 
      coordinates, 
      ship: ship || new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length) 
    });
    return true;
  }

  placeShipsRandomly(shipLengths) {
    this.reset();

    for (const length of shipLengths) {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;

      while (!placed && attempts < maxAttempts) {
        attempts++;
        const isVertical = Math.random() > 0.5;
        const coordinates = this.generateRandomCoordinates(length, isVertical);
        placed = this.placeShip(length, coordinates);
      }

      if (!placed) return false;
    }

    return true;
  }

  generateRandomCoordinates(length, isVertical) {
    if (isVertical) {
      const col = Math.floor(Math.random() * 10);
      const startRow = Math.floor(Math.random() * (11 - length));
      return Array.from({length}, (_, i) => [startRow + i, col]);
    } else {
      const row = Math.floor(Math.random() * 10);
      const startCol = Math.floor(Math.random() * (11 - length));
      return Array.from({length}, (_, i) => [row, startCol + i]);
    }
  }

  receiveAttack([row, col]) {
    const coordKey = `${row},${col}`;

    if (!this.isValidCoordinate(row, col)) return 'invalid';
    if (this.hitAttacks.has(coordKey) || this.missedAttacks.has(coordKey)) {
      return 'already attacked';
    }

    const shipIndex = this.ships.findIndex(({coordinates}) =>
      coordinates.some(([r, c]) => r === row && c === col)
    );

    if (shipIndex !== -1) {
      const { ship } = this.ships[shipIndex];
      ship.hit();
      this.hitAttacks.add(coordKey);
      
      if (ship.isSunk()) {
        this.sunkShips.add(shipIndex);
        return 'sunk';
      }
      return 'hit';
    }

    this.missedAttacks.add(coordKey);
    return 'miss';
  }

  allShipsSunk() {
    return this.ships.length > 0 && 
           this.ships.every(({ship}) => ship.isSunk());
  }

  getShipAt(row, col) {
    const placement = this.ships.find(({coordinates}) =>
      coordinates.some(([r, c]) => r === row && c === col)
    );
    return placement?.ship || null;
  }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


// --- PLAYER CLASS ---
class Player {
  constructor(type, name = 'Player') {
    this.type = type; 
    this.name = name;  
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.opponent = null;  
    this.previousAttacks = new Set();
    this.huntTargets = [];
  }

  placeShips(shipsData) {
    shipsData.forEach(({ length, coordinates }) => {
      this.gameboard.placeShip(length, coordinates);
    });
  }

  attack(opponentCoord) {
    return this.opponent.gameboard.receiveAttack(opponentCoord);
  }

  randomAttack() {
    let coord;
    do {
      coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } while (this.previousAttacks.has(`${coord[0]},${coord[1]}`));
    this.previousAttacks.add(`${coord[0]},${coord[1]}`);
    return coord;
  }

  // Enhanced AI: If hit recently, target adjacent
  smartAttack() {
    while (this.huntTargets.length > 0) {
      const target = this.huntTargets.shift();
      if (!this.previousAttacks.has(target)) {
        this.previousAttacks.add(target);
        return target.split(',').map(Number);
      }
    }
    return this.randomAttack();
  }

  attackOpponent() {
    const coord = this.smartAttack();
    const result = this.opponent.gameboard.receiveAttack(coord);
    if (result === 'hit') {
      const [r, c] = coord;
      const adjacents = [
        [r-1, c], [r+1, c], [r, c-1], [r, c+1]
      ].filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10)
       .map(([x, y]) => `${x},${y}`);
      this.huntTargets.push(...adjacents);
    }
    return { coord, result };
  }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
// ship.js
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;  // Number of hits taken
  }

  hit() {
    this.hits += 1;
    console.log(`Ship hit! Total hits: ${this.hits}/${this.length}`);
    if (this.isSunk()) {
      console.log(`Ship sunk! (Length: ${this.length})`);
    }
    return this.hits;
  }

  isSunk() {
    return this.hits >= this.length;  // Sunk when all cells hit
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");




// --- DOM Elements ---
const homepage = document.getElementById('homepage');_game_js__WEBPACK_IMPORTED_MODULE_1__.initGame
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('player-name');

// --- Main Application Logic ---
function showGame() {
    if (homepage) {
        homepage.style.display = 'none';
    }
}

// This function starts the entire game process.
function launchGame(playerName) {

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.setupUI)();

    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.initGame)(playerName);

    showGame();
}

// --- Event Listener for the Homepage Form ---
document.addEventListener('DOMContentLoaded', () => {
    if (nameForm) {
        nameForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from reloading the page.
            const playerName = nameInput.value.trim() || 'Admiral';
            launchGame(playerName);
        });
    } else {
        // If there's no homepage/form, launch the game immediately.
        launchGame('Admiral');
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlGQUF5RixLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FB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QztBQUNBOzs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNFO0FBQ1A7QUFDOUI7QUFDQTtBQUNBLHFEQUFxRCw4Q0FBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDtBQUNBLElBQUksa0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3B1YmxpYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9wdWJsaWMvc3R5bGVzLmNzcz9lYTMzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUF1ZGlvd2lkZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJhc2UgUmVzZXQgKi9cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogVmFyaWFibGVzICovXHJcbjpyb290IHtcclxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMTExMTExO1xyXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzI0MjEyNDtcclxuICAgIC0tYWNjZW50LWdyZWVuOiAjMjI4QjIyO1xyXG4gICAgLS1ob3Zlci1ncmVlbjogIzAzQzAzQztcclxuICAgIC0tdGV4dC1saWdodDogI2ZmZmZmZjtcclxuICAgIC0taGl0LWNvbG9yOiAjRkYwODAwO1xyXG4gICAgLS1taXNzLWNvbG9yOiAjMDBCOUU4O1xyXG4gICAgLS1zaGlwLWNvbG9yOiAjNTVERDMzO1xyXG4gICAgLS1jZWxsLXNpemU6IDM1cHg7XHJcbiAgICAtLWdsb3ctY29sb3I6ICNGRkJGMDAgICA7XHJcbiAgICAtLWdsb3ctc3ByZWFkLWNvbG9yOiAjRkY0RjAwO1xyXG59XHJcblxyXG4vKiBCYXNlIFN0eWxlcyAqL1xyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBIb21lcGFnZSBTdHlsZXMgKi9cclxuLmhvbWVwYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5ob21lcGFnZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5ob21lcGFnZSAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XHJcbiAgICBmb250OiAzLjllbSBcIkF1ZGlvd2lkZVwiLCBzZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIsIDI1NSwgMTAsIDAuMzE3KTtcclxufVxyXG5cclxuLmhvbWVwYWdlIC5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI25hbWUtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI3BsYXllci1uYW1lIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1ncmVlbik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbiNwbGF5ZXItbmFtZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmVlbik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDIsIDI1NSwgMTAsIDAuMzE3KTtcclxufVxyXG5cclxuI3BsYXllci1uYW1lOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg0ODQ4MjtcclxufVxyXG5cclxuLyogR2FtZSBDb250YWluZXIgKi9cclxuI2dhbWUtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogQXVkaW93aWRlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBDb250cm9scyAqL1xyXG4uY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmVlbik7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8qIE1haW4gR2FtZSBBcmVhICovXHJcbi5tYWluLWdhbWUtYXJlYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi8qIEJvYXJkcyBMYXlvdXQgKi9cclxuLmJvYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYm9hcmQtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5ib2FyZC1zZWN0aW9uIGgyIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4vKiBHYW1lIEJvYXJkICovXHJcbi5ib2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xyXG4gICAgZ2FwOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyBcclxufVxyXG5cclxuLyogQ2VsbHMgKi9cclxuLmNlbGwge1xyXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWdyZWVuKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uY2VsbDpob3Zlcjpub3QoLmhpdCk6bm90KC5taXNzKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmVlbik7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jZWxsLnNoaXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsLmhpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmNlbGwuaGl0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnw5cnO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2VsbC5taXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmNlbGwubWlzczo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ+KAoic7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY2VsbC5zdW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nbG93LWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYW5pbWF0aW9uOiBpbnRlbnNlR2xvdyAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludGVuc2VHbG93IHtcclxuICAgIDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpLCBcclxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nbG93LWNvbG9yKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAwIDEwcHggdmFyKC0tZ2xvdy1jb2xvcik7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpLCBcclxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VsbC5oaXQuc3Vuazo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ8OXJztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1zdW5rLWdsb3cpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLyogU2hpcCBQbGFjZW1lbnQgKi9cclxuLnBsYWNlbWVudC11aSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc2hpcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc2hpcC1waWVjZSB7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNoaXAgc2l6ZXMgKi9cclxuLnNoaXAtcGllY2VbZGF0YS1sZW5ndGg9XCI1XCJdIHsgd2lkdGg6IGNhbGMoNSAqIHZhcigtLWNlbGwtc2l6ZSkpOyB9XHJcbi5zaGlwLXBpZWNlW2RhdGEtbGVuZ3RoPVwiNFwiXSB7IHdpZHRoOiBjYWxjKDQgKiB2YXIoLS1jZWxsLXNpemUpKTsgfVxyXG4uc2hpcC1waWVjZVtkYXRhLWxlbmd0aD1cIjNcIl0geyB3aWR0aDogY2FsYygzICogdmFyKC0tY2VsbC1zaXplKSk7IH1cclxuLnNoaXAtcGllY2VbZGF0YS1sZW5ndGg9XCIyXCJdIHsgd2lkdGg6IGNhbGMoMiAqIHZhcigtLWNlbGwtc2l6ZSkpOyB9XHJcblxyXG4uc2hpcC1waWVjZSBzcGFuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaGlwLXBpZWNlLnZlcnRpY2FsIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG59XHJcblxyXG4uc2hpcC1waWVjZTpub3QoLnBsYWNlZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5zaGlwLXBpZWNlLnBsYWNlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKiBQbGFjZW1lbnQgRmVlZGJhY2sgKi9cclxuLnZhbGlkLXBsYWNlbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG59XHJcblxyXG4uaW52YWxpZC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4zKTtcclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGVzICovXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaG9tZXBhZ2UtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZXBhZ2UgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lcGFnZSAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2FyZHMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2VtZW50LXVpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jZWxsIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvYXJkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFdpbiBNb2RhbCBTdHlsZXMgKi9cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcclxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1ncmVlbik7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsZUFBZTtBQUNmO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsd0JBQXdC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Q0FBdUM7UUFDdkMsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXVkaW93aWRlJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJhc2UgUmVzZXQgKi9cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWYXJpYWJsZXMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMTExMTExO1xcclxcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjQyMTI0O1xcclxcbiAgICAtLWFjY2VudC1ncmVlbjogIzIyOEIyMjtcXHJcXG4gICAgLS1ob3Zlci1ncmVlbjogIzAzQzAzQztcXHJcXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmZmZmO1xcclxcbiAgICAtLWhpdC1jb2xvcjogI0ZGMDgwMDtcXHJcXG4gICAgLS1taXNzLWNvbG9yOiAjMDBCOUU4O1xcclxcbiAgICAtLXNoaXAtY29sb3I6ICM1NUREMzM7XFxyXFxuICAgIC0tY2VsbC1zaXplOiAzNXB4O1xcclxcbiAgICAtLWdsb3ctY29sb3I6ICNGRkJGMDAgICA7XFxyXFxuICAgIC0tZ2xvdy1zcHJlYWQtY29sb3I6ICNGRjRGMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEJhc2UgU3R5bGVzICovXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZXBhZ2UgU3R5bGVzICovXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2UgLnRpdGxlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxyXFxuICAgIGZvbnQ6IDMuOWVtIFxcXCJBdWRpb3dpZGVcXFwiLCBzZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMiwgMjU1LCAxMCwgMC4zMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2UgLnN1YnRpdGxlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZS1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItbmFtZSB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1ncmVlbik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1uYW1lOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmVlbik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMiwgMjU1LCAxMCwgMC4zMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLW5hbWU6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICM4NDg0ODI7XFxyXFxufVxcclxcblxcclxcbi8qIEdhbWUgQ29udGFpbmVyICovXFxyXFxuI2dhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEF1ZGlvd2lkZSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgZm9udDogMWVtIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRyb2xzICovXFxyXFxuLmNvbnRyb2xzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpkaXNhYmxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gR2FtZSBBcmVhICovXFxyXFxuLm1haW4tZ2FtZS1hcmVhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm9hcmRzIExheW91dCAqL1xcclxcbi5ib2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtc2VjdGlvbiBoMiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FtZSBCb2FyZCAqL1xcclxcbi5ib2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBDZWxscyAqL1xcclxcbi5jZWxsIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWdyZWVuKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3Zlcjpub3QoLmhpdCk6bm90KC5taXNzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyZWVuKTtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnw5cnO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3M6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KAoic7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc3VuayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IFxcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsb3ctY29sb3IpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBhbmltYXRpb246IGludGVuc2VHbG93IDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW50ZW5zZUdsb3cge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMCA1cHggdmFyKC0tZ2xvdy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLWdsb3ctY29sb3IpLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMCAxMHB4IHZhcigtLWdsb3ctY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1nbG93LWNvbG9yKSwgXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgNXB4IHZhcigtLWdsb3ctY29sb3IpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdC5zdW5rOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICfDlyc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1zdW5rLWdsb3cpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi8qIFNoaXAgUGxhY2VtZW50ICovXFxyXFxuLnBsYWNlbWVudC11aSB7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1waWVjZSB7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNoaXAgc2l6ZXMgKi9cXHJcXG4uc2hpcC1waWVjZVtkYXRhLWxlbmd0aD1cXFwiNVxcXCJdIHsgd2lkdGg6IGNhbGMoNSAqIHZhcigtLWNlbGwtc2l6ZSkpOyB9XFxyXFxuLnNoaXAtcGllY2VbZGF0YS1sZW5ndGg9XFxcIjRcXFwiXSB7IHdpZHRoOiBjYWxjKDQgKiB2YXIoLS1jZWxsLXNpemUpKTsgfVxcclxcbi5zaGlwLXBpZWNlW2RhdGEtbGVuZ3RoPVxcXCIzXFxcIl0geyB3aWR0aDogY2FsYygzICogdmFyKC0tY2VsbC1zaXplKSk7IH1cXHJcXG4uc2hpcC1waWVjZVtkYXRhLWxlbmd0aD1cXFwiMlxcXCJdIHsgd2lkdGg6IGNhbGMoMiAqIHZhcigtLWNlbGwtc2l6ZSkpOyB9XFxyXFxuXFxyXFxuLnNoaXAtcGllY2Ugc3BhbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1waWVjZS52ZXJ0aWNhbCB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1waWVjZTpub3QoLnBsYWNlZCk6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGllY2UucGxhY2VkIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQbGFjZW1lbnQgRmVlZGJhY2sgKi9cXHJcXG4udmFsaWQtcGxhY2VtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQtcGxhY2VtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgU3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmhvbWVwYWdlLWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZXBhZ2UgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWVwYWdlIC5zdWJ0aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9hcmRzIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wbGFjZW1lbnQtdWkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2VsbCB7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9hcmQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBXaW4gTW9kYWwgU3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaDIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IFxyXG4gICAgc3RhcnRHYW1lLCBcclxuICAgIGhhbmRsZVBsYXllckF0dGFjaywgXHJcbiAgICBoYW5kbGVTaGlwUGxhY2VtZW50LFxyXG4gICAgaGFuZGxlUmFuZG9taXplLFxyXG4gICAgcGxheWVycyxcclxuICAgIHBsYWNlbWVudE1vZGUsIFxyXG4gICAgZ2FtZU92ZXJGbGFnLCBcclxuICAgIGN1cnJlbnRQbGF5ZXIsXHJcbiAgICBTSElQX0xFTkdUSFMsXHJcbiAgICByZXNldEdhbWVcclxufSBmcm9tICcuL2dhbWUuanMnO1xyXG5cclxuLy8gLS0tIFNUQVRFIC0tLVxyXG5sZXQgZHJhZ2dlZFNoaXAgPSBudWxsO1xyXG5cclxuLy8gLS0tIENPTlNUQU5UUyAtLS1cclxuY29uc3QgU0hJUF9UWVBFUyA9IFtcclxuICAgIHsgaWQ6ICdjYXJyaWVyJywgbGVuZ3RoOiA1LCBuYW1lOiAnQ2FycmllcicgfSxcclxuICAgIHsgaWQ6ICdiYXR0bGVzaGlwJywgbGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCcgfSxcclxuICAgIHsgaWQ6ICdjcnVpc2VyJywgbGVuZ3RoOiAzLCBuYW1lOiAnQ3J1aXNlcicgfSxcclxuICAgIHsgaWQ6ICdzdWJtYXJpbmUnLCBsZW5ndGg6IDMsIG5hbWU6ICdTdWJtYXJpbmUnIH0sXHJcbiAgICB7IGlkOiAnZGVzdHJveWVyJywgbGVuZ3RoOiAyLCBuYW1lOiAnRGVzdHJveWVyJyB9XHJcbl07XHJcblxyXG4vLyAtLS0gVUkgSU5JVElBTElaQVRJT04gLS0tXHJcbmZ1bmN0aW9uIHNldHVwVUkoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5pZCA9ICdnYW1lLWNvbnRhaW5lcic7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aDE+QmF0dGxlc2hpcDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGF0dXNcIiBjbGFzcz1cInN0YXR1c1wiPlBsYWNlIHlvdXIgc2hpcHMgb3IgY2xpY2sgUmFuZG9taXplPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyYW5kb21pemUtYnRuXCIgY2xhc3M9XCJidG5cIj5SYW5kb21pemUgRmxlZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWJ0blwiIGNsYXNzPVwiYnRuXCIgZGlzYWJsZWQ+U3RhcnQgQmF0dGxlITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWdhbWUtYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2hpcC1zaWRlYmFyXCIgY2xhc3M9XCJwbGFjZW1lbnQtdWlcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Zb3VyIFNoaXBzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkRyYWcgc2hpcHMgdG8gcGxhY2UuIFJpZ2h0LWNsaWNrIHRvIHJvdGF0ZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcC1jb250YWluZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJodW1hbi1ib2FyZC1zZWN0aW9uXCIgY2xhc3M9XCJib2FyZC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPllvdXIgRmxlZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJodW1hbi1ib2FyZFwiIGNsYXNzPVwiYm9hcmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbXB1dGVyLWJvYXJkLXNlY3Rpb25cIiBjbGFzcz1cImJvYXJkLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+RW5lbXkgV2F0ZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29tcHV0ZXItYm9hcmRcIiBjbGFzcz1cImJvYXJkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIC8vIFNldHVwIGFsbCBpbnRlcmFjdGl2ZSBwYXJ0cyBvZiB0aGUgVUlcclxuICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBzKCk7XHJcbiAgICBzZXR1cERyYWdBbmREcm9wKCk7XHJcbiAgICBzZXR1cENvbnRyb2xMaXN0ZW5lcnMoKTtcclxuICAgIHNldHVwQXR0YWNrTGlzdGVuZXIoKTtcclxuICAgIHJlbmRlckdhbWVib2FyZHMoKTtcclxufVxyXG5cclxuLy8gLS0tIEVWRU5UIExJU1RFTkVSIFNFVFVQIC0tLVxyXG5mdW5jdGlvbiBzZXR1cENvbnRyb2xMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCByYW5kb21pemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXplLWJ0bicpO1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJyk7XHJcblxyXG4gICAgcmFuZG9taXplQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoaGFuZGxlUmFuZG9taXplKCkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtcGllY2UnKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcclxuICAgICAgICAgICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZW5kZXJHYW1lYm9hcmRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RhcnRCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXJzWzBdPy5nYW1lYm9hcmQ/LnNoaXBzPy5sZW5ndGggPT09IFNISVBfTEVOR1RIUy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZHMoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtc2lkZWJhcicpPy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmFuZG9taXplQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBBdHRhY2tMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcclxuICAgIGNvbXB1dGVyQm9hcmQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAocGxhY2VtZW50TW9kZSB8fCBnYW1lT3ZlckZsYWcgfHwgY3VycmVudFBsYXllcj8udHlwZSAhPT0gJ2h1bWFuJykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIEJsb2NrIGNsaWNrcyBpZiBub3QgdGhlIHBsYXllcidzIHR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgICAgaWYgKGNlbGwgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93LCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wsIDEwKTtcclxuICAgICAgICAgICAgaGFuZGxlUGxheWVyQXR0YWNrKFtyb3csIGNvbF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyAtLS0gRFJBRyBBTkQgRFJPUCBMT0dJQyAtLS1cclxuZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcclxuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBcclxuICAgIFNISVBfVFlQRVMuZm9yRWFjaCgoeyBpZCwgbGVuZ3RoLCBuYW1lIH0pID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2hpcC5jbGFzc05hbWUgPSAnc2hpcC1waWVjZSc7XHJcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHNoaXAuZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgc2hpcC5pbm5lckhUTUwgPSBgPHNwYW4+JHtuYW1lfTwvc3Bhbj5gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwID0geyBlbGVtZW50OiBzaGlwLCBsZW5ndGgsIGlzVmVydGljYWw6IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpIH07XHJcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBpZCk7IC8vIE5lY2Vzc2FyeSBmb3IgRmlyZWZveFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSA/ICd2YXIoLS1jZWxsLXNpemUpJyA6IGBjYWxjKCR7bGVuZ3RofSAqIHZhcigtLWNlbGwtc2l6ZSkpYDtcclxuICAgICAgICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSA/IGBjYWxjKCR7bGVuZ3RofSAqIHZhcigtLWNlbGwtc2l6ZSkpYCA6ICd2YXIoLS1jZWxsLXNpemUpJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBEcmFnQW5kRHJvcCgpIHtcclxuICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tYm9hcmQnKTtcclxuICAgIGlmICghaHVtYW5Cb2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGh1bWFuQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gVGhpcyBpcyBlc3NlbnRpYWwgZm9yICdkcm9wJyB0byB3b3JrXHJcbiAgICB9KTtcclxuXHJcbiAgICBodW1hbkJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgICBpZiAoIWNlbGwgfHwgIWRyYWdnZWRTaGlwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3csIDEwKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sLCAxMCk7XHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVTaGlwQ29vcmRpbmF0ZXMocm93LCBjb2wsIGRyYWdnZWRTaGlwLmxlbmd0aCwgZHJhZ2dlZFNoaXAuaXNWZXJ0aWNhbCk7XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVTaGlwUGxhY2VtZW50KGRyYWdnZWRTaGlwLmxlbmd0aCwgY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJzWzBdPy5nYW1lYm9hcmQ/LnNoaXBzLmxlbmd0aCA9PT0gU0hJUF9MRU5HVEhTLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ0bicpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVyR2FtZWJvYXJkcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcmFnZ2VkU2hpcCA9IG51bGw7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gLS0tIFJFTkRFUklORyBMT0dJQyAtLS1cclxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkcygpIHtcclxuICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tYm9hcmQnKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcclxuICAgIGlmICghaHVtYW5Cb2FyZCB8fCAhY29tcHV0ZXJCb2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGh1bWFuQm9hcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb21wdXRlckJvYXJkLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICBodW1hbkJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUNlbGwoJ2h1bWFuJywgcm93LCBjb2wpKTtcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKCdjb21wdXRlcicsIHJvdywgY29sKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDZWxsKGJvYXJkVHlwZSwgcm93LCBjb2wpIHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcclxuICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XHJcbiAgICB1cGRhdGVDZWxsU3RhdGUoY2VsbCwgcm93LCBjb2wsIGJvYXJkVHlwZSk7XHJcbiAgICByZXR1cm4gY2VsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbFN0YXRlKGNlbGwsIHJvdywgY29sLCBib2FyZFR5cGUpIHtcclxuICAgIGNvbnN0IHBsYXllciA9IChib2FyZFR5cGUgPT09ICdodW1hbicpID8gcGxheWVyc1swXSA6IHBsYXllcnNbMV07XHJcbiAgICBpZiAoIXBsYXllcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkU3RyID0gYCR7cm93fSwke2NvbH1gO1xyXG4gICAgaWYgKGJvYXJkVHlwZSA9PT0gJ2h1bWFuJyAmJiBwbGF5ZXIuZ2FtZWJvYXJkLmhhc1NoaXBBdChyb3csIGNvbCkpIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5oaXRBdHRhY2tzLmhhcyhjb29yZFN0cikpIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBJbmZvID0gcGxheWVyLmdhbWVib2FyZC5nZXRTaGlwQXQocm93LCBjb2wpO1xyXG4gICAgICAgIGlmIChzaGlwSW5mbyAmJiBzaGlwSW5mby5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllci5nYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5oYXMoY29vcmRTdHIpKSB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBVVElMSVRZIEZVTkNUSU9OUyAtLS1cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2hpcENvb3JkaW5hdGVzKHJvdywgY29sLCBsZW5ndGgsIGlzVmVydGljYWwpIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChpc1ZlcnRpY2FsID8gW3JvdyArIGksIGNvbF0gOiBbcm93LCBjb2wgKyBpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBsYWNlbWVudFN0YXR1cyhtZXNzYWdlKSB7XHJcbiAgICBjb25zdCBzdGF0dXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xyXG4gICAgaWYgKHN0YXR1c0VsZW1lbnQpIHtcclxuICAgICAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRVSSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXNpZGViYXInKT8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtYnRuJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKS5kaXNhYmxlZCA9IHRydWU7IFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk/LnJlbW92ZSgpO1xyXG5cclxuICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBzKCk7XHJcbiAgICByZW5kZXJHYW1lYm9hcmRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dXaW5Nb2RhbCh3aW5uZXIpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xyXG5cclxuICAgIGNvbnN0IGlzSHVtYW5XaW5uZXIgPSB3aW5uZXIudHlwZSA9PT0gJ2h1bWFuJztcclxuICAgIGNvbnN0IHRpdGxlID0gaXNIdW1hbldpbm5lciA/IGBWaWN0b3J5LCAke3dpbm5lci5uYW1lfSFgIDogJ0RlZmVhdCEnO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGlzSHVtYW5XaW5uZXIgPyAnWW91IGhhdmUgY29ucXVlcmVkIHRoZSBlbmVteSBmbGVldC4nIDogJ1RoZSBlbmVteSBoYXMgZGVzdHJveWVkIHlvdXIgZmxlZXQuJztcclxuXHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyPiR7dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+JHttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbGF5LWFnYWluLWJ0blwiIGNsYXNzPVwiYnRuXCI+UGxheSBBZ2FpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhvbWUtYnRuXCIgY2xhc3M9XCJidG5cIj5NYWluIE1lbnU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWFnYWluLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0R2FtZSgpOyBcclxuICAgICAgICByZXNldFVJKCk7ICBcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0dXBVSSwgcmVuZGVyR2FtZWJvYXJkcywgdXBkYXRlUGxhY2VtZW50U3RhdHVzLCBzaG93V2luTW9kYWwgfTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckdhbWVib2FyZHMsIHVwZGF0ZVBsYWNlbWVudFN0YXR1cywgc2hvd1dpbk1vZGFsIH0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxuLy8gLS0tIEdBTUUgU1RBVEUgKEV4cG9ydGVkIGZvciBkb20uanMgdG8gcmVhZCkgLS0tXHJcbmV4cG9ydCBsZXQgcGxheWVycyA9IFtdO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRQbGF5ZXIgPSBudWxsO1xyXG5leHBvcnQgbGV0IGdhbWVPdmVyRmxhZyA9IGZhbHNlO1xyXG5leHBvcnQgbGV0IHBsYWNlbWVudE1vZGUgPSB0cnVlO1xyXG5cclxuLy8gLS0tIENPTlNUQU5UUyAtLS1cclxuZXhwb3J0IGNvbnN0IFNISVBfTEVOR1RIUyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuY29uc3QgQ09NUFVURVJfQVRUQUNLX0RFTEFZID0gODAwO1xyXG5cclxuLy8gLS0tIElOSVRJQUxJWkFUSU9OIC0tLVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUocGxheWVyTmFtZSA9ICdBZG1pcmFsJykge1xyXG4gICAgY29uc3QgaHVtYW4gPSBuZXcgUGxheWVyKCdodW1hbicsIHBsYXllck5hbWUpO1xyXG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdjb21wdXRlcicpO1xyXG4gICAgaHVtYW4ub3Bwb25lbnQgPSBjb21wdXRlcjtcclxuICAgIGNvbXB1dGVyLm9wcG9uZW50ID0gaHVtYW47XHJcblxyXG4gICAgcGxheWVycyA9IFtodW1hbiwgY29tcHV0ZXJdO1xyXG4gICAgY3VycmVudFBsYXllciA9IGh1bWFuO1xyXG4gICAgZ2FtZU92ZXJGbGFnID0gZmFsc2U7XHJcbiAgICBwbGFjZW1lbnRNb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KFNISVBfTEVOR1RIUyk7XHJcbiAgICBcclxuICAgIHVwZGF0ZVBsYWNlbWVudFN0YXR1cygnUGxhY2UgeW91ciBzaGlwcyBvciBjbGljayBSYW5kb21pemUuJyk7XHJcbn1cclxuXHJcbi8vIC0tLSBDT1JFIEdBTUUgQUNUSU9OUyAoQ2FsbGVkIGZyb20gZG9tLmpzKSAtLS1cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNoaXBQbGFjZW1lbnQobGVuZ3RoLCBjb29yZGluYXRlcykge1xyXG4gICAgaWYgKCFwbGFjZW1lbnRNb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gcGxheWVyc1swXS5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgY29vcmRpbmF0ZXMpO1xyXG4gICAgaWYgKHN1Y2Nlc3MgJiYgcGxheWVyc1swXS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoID09PSBTSElQX0xFTkdUSFMubGVuZ3RoKSB7XHJcbiAgICAgICAgdXBkYXRlUGxhY2VtZW50U3RhdHVzKCdBbGwgc2hpcHMgcGxhY2VkLiBSZWFkeSB0byBzdGFydCEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdWNjZXNzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmFuZG9taXplKCkge1xyXG4gICAgaWYgKCFwbGFjZW1lbnRNb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gcGxheWVyc1swXS5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KFNISVBfTEVOR1RIUyk7XHJcbiAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHVwZGF0ZVBsYWNlbWVudFN0YXR1cygnRmxlZXQgcmFuZG9taXplZC4gUmVhZHkgdG8gc3RhcnQhJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VjY2VzcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIGlmIChwbGF5ZXJzWzBdLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggIT09IFNISVBfTEVOR1RIUy5sZW5ndGgpIHJldHVybjtcclxuICAgIFxyXG4gICAgcGxhY2VtZW50TW9kZSA9IGZhbHNlOyBcclxuICAgIFxyXG4gICAgdXBkYXRlUGxhY2VtZW50U3RhdHVzKGBZb3VyIHR1cm4sICR7cGxheWVyc1swXS5uYW1lfS4gQXR0YWNrIHRoZSBlbmVteSB3YXRlcnMhYCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQbGF5ZXJBdHRhY2soY29vcmQpIHtcclxuICAgIGlmIChnYW1lT3ZlckZsYWcgfHwgcGxhY2VtZW50TW9kZSB8fCBjdXJyZW50UGxheWVyLnR5cGUgIT09ICdodW1hbicpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UGxheWVyLm9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcclxuICAgIHJlbmRlckdhbWVib2FyZHMoKTsgLy8gUmUtcmVuZGVyIHRvIHNob3cgdGhlIGhpdC9taXNzL3N1bmsgc3RhdGUuXHJcblxyXG4gICAgaWYgKGNoZWNrR2FtZUVuZCgpKSByZXR1cm47XHJcbiAgICBzd2l0Y2ggKHJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgJ3N1bmsnOlxyXG4gICAgICAgICAgICB1cGRhdGVQbGFjZW1lbnRTdGF0dXMoJ1lvdSBzdW5rIGFuIGVuZW15IHNoaXAhIEF0dGFjayBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaGl0JzpcclxuICAgICAgICAgICAgdXBkYXRlUGxhY2VtZW50U3RhdHVzKCdBIGRpcmVjdCBoaXQhIEF0dGFjayBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWlzcyc6XHJcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdOyAvLyBTd2l0Y2ggdG8gY29tcHV0ZXIuXHJcbiAgICAgICAgICAgIHVwZGF0ZVBsYWNlbWVudFN0YXR1cyhcIllvdSBtaXNzZWQuIENvbXB1dGVyJ3MgdHVybi4uLlwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChjb21wdXRlclR1cm4sIENPTVBVVEVSX0FUVEFDS19ERUxBWSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ09NUFVURVIgTE9HSUMgLS0tXHJcbmZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcclxuICAgIGlmIChnYW1lT3ZlckZsYWcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB7IGNvb3JkLCByZXN1bHQgfSA9IHBsYXllcnNbMV0uYXR0YWNrT3Bwb25lbnQoKTtcclxuICAgIHJlbmRlckdhbWVib2FyZHMoKTsgLy8gUmUtcmVuZGVyIHRvIHNob3cgY29tcHV0ZXIncyBoaXQvbWlzcy9zdW5rLlxyXG5cclxuICAgIGlmIChjaGVja0dhbWVFbmQoKSkgcmV0dXJuO1xyXG4gICAgc3dpdGNoIChyZXN1bHQpIHtcclxuICAgICAgICBjYXNlICdzdW5rJzpcclxuICAgICAgICAgICAgdXBkYXRlUGxhY2VtZW50U3RhdHVzKGBUaGUgZW5lbXkgc3VuayB5b3VyIHNoaXAgYXQgWyR7Y29vcmR9XSEgSXQgd2lsbCBhdHRhY2sgYWdhaW4uYCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCBDT01QVVRFUl9BVFRBQ0tfREVMQVkpOyAvLyBTaW5raW5nIGEgc2hpcCBncmFudHMgYW5vdGhlciB0dXJuLlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoaXQnOlxyXG4gICAgICAgICAgICB1cGRhdGVQbGFjZW1lbnRTdGF0dXMoYENvbXB1dGVyIGhpdCB5b3VyIGZsZWV0IGF0IFske2Nvb3JkfV0hIEl0IHdpbGwgYXR0YWNrIGFnYWluLmApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgQ09NUFVURVJfQVRUQUNLX0RFTEFZKTsgLy8gSGl0dGluZyBncmFudHMgYW5vdGhlciB0dXJuLlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtaXNzJzpcclxuICAgICAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF07IC8vIFN3aXRjaCBiYWNrIHRvIGh1bWFuLlxyXG4gICAgICAgICAgICB1cGRhdGVQbGFjZW1lbnRTdGF0dXMoYENvbXB1dGVyIG1pc3NlZCBhdCBbJHtjb29yZH1dLiBZb3VyIHR1cm4hYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0dhbWVFbmQoKSB7XHJcbiAgICBjb25zdCBodW1hbkxvc3QgPSBwbGF5ZXJzWzBdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyTG9zdCA9IHBsYXllcnNbMV0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG5cclxuICAgIGlmIChodW1hbkxvc3QgfHwgY29tcHV0ZXJMb3N0KSB7XHJcbiAgICAgICAgZ2FtZU92ZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBodW1hbkxvc3QgPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcclxuICAgICAgICB1cGRhdGVQbGFjZW1lbnRTdGF0dXMoYEdhbWUgT3ZlciEgJHt3aW5uZXIubmFtZX0gaXMgdmljdG9yaW91cyFgKTtcclxuICAgICAgICBcclxuICAgICAgICBzaG93V2luTW9kYWwod2lubmVyKTsgXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xyXG4gICAgZ2FtZU92ZXJGbGFnID0gZmFsc2U7XHJcbiAgICBwbGFjZW1lbnRNb2RlID0gdHJ1ZTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG5cclxuICAgIHBsYXllcnMuZm9yRWFjaChwID0+IHAuZ2FtZWJvYXJkLnJlc2V0KCkpO1xyXG4gICAgcGxheWVyc1sxXS5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KFNISVBfTEVOR1RIUyk7XHJcblxyXG4gICAgdXBkYXRlUGxhY2VtZW50U3RhdHVzKCdQbGFjZSB5b3VyIHNoaXBzIG9yIGNsaWNrIFJhbmRvbWl6ZS4nKTtcclxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuLy8gLS0tIEdBTUVCT0FSRCBDTEFTUyAtLS1cclxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTsgIFxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzID0gbmV3IFNldCgpOyAgXHJcbiAgICB0aGlzLmhpdEF0dGFja3MgPSBuZXcgU2V0KCk7ICAgICBcclxuICAgIHRoaXMuc3Vua1NoaXBzID0gbmV3IFNldCgpOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgaXNWYWxpZENvb3JkaW5hdGUocm93LCBjb2wpIHtcclxuICAgIHJldHVybiByb3cgPj0gMCAmJiByb3cgPCAxMCAmJiBjb2wgPj0gMCAmJiBjb2wgPCAxMDtcclxuICB9XHJcblxyXG4gIGhhc1NoaXBBdChyb3csIGNvbCkge1xyXG4gICAgY29uc3QgY29vcmRLZXkgPSBgJHtyb3d9LCR7Y29sfWA7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5zb21lKCh7Y29vcmRpbmF0ZXN9KSA9PiBcclxuICAgICAgY29vcmRpbmF0ZXMuc29tZSgoW3IsIGNdKSA9PiBgJHtyfSwke2N9YCA9PT0gY29vcmRLZXkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKGxlbmd0aCwgY29vcmRpbmF0ZXMsIHNoaXAgPSBudWxsKSB7XHJcbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBjb29yZGluYXRlc1xyXG4gICAgaWYgKCFjb29yZGluYXRlcy5ldmVyeSgoW3JvdywgY29sXSkgPT4gXHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShyb3csIGNvbCkgJiYgIXRoaXMuaGFzU2hpcEF0KHJvdywgY29sKSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBvciB1c2UgcHJvdmlkZWQgc2hpcFxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHsgXHJcbiAgICAgIGNvb3JkaW5hdGVzLCBcclxuICAgICAgc2hpcDogc2hpcCB8fCBuZXcgU2hpcChsZW5ndGgpIFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seShzaGlwTGVuZ3Rocykge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIHNoaXBMZW5ndGhzKSB7XHJcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcclxuICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAxMDA7XHJcblxyXG4gICAgICB3aGlsZSAoIXBsYWNlZCAmJiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyhsZW5ndGgsIGlzVmVydGljYWwpO1xyXG4gICAgICAgIHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKGxlbmd0aCwgY29vcmRpbmF0ZXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXBsYWNlZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyhsZW5ndGgsIGlzVmVydGljYWwpIHtcclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEgLSBsZW5ndGgpKTtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sIChfLCBpKSA9PiBbc3RhcnRSb3cgKyBpLCBjb2xdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEgLSBsZW5ndGgpKTtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sIChfLCBpKSA9PiBbcm93LCBzdGFydENvbCArIGldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soW3JvdywgY29sXSkge1xyXG4gICAgY29uc3QgY29vcmRLZXkgPSBgJHtyb3d9LCR7Y29sfWA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKHJvdywgY29sKSkgcmV0dXJuICdpbnZhbGlkJztcclxuICAgIGlmICh0aGlzLmhpdEF0dGFja3MuaGFzKGNvb3JkS2V5KSB8fCB0aGlzLm1pc3NlZEF0dGFja3MuaGFzKGNvb3JkS2V5KSkge1xyXG4gICAgICByZXR1cm4gJ2FscmVhZHkgYXR0YWNrZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoaXBJbmRleCA9IHRoaXMuc2hpcHMuZmluZEluZGV4KCh7Y29vcmRpbmF0ZXN9KSA9PlxyXG4gICAgICBjb29yZGluYXRlcy5zb21lKChbciwgY10pID0+IHIgPT09IHJvdyAmJiBjID09PSBjb2wpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChzaGlwSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHsgc2hpcCB9ID0gdGhpcy5zaGlwc1tzaGlwSW5kZXhdO1xyXG4gICAgICBzaGlwLmhpdCgpO1xyXG4gICAgICB0aGlzLmhpdEF0dGFja3MuYWRkKGNvb3JkS2V5KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMuYWRkKHNoaXBJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuICdzdW5rJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChjb29yZEtleSk7XHJcbiAgICByZXR1cm4gJ21pc3MnO1xyXG4gIH1cclxuXHJcbiAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMubGVuZ3RoID4gMCAmJiBcclxuICAgICAgICAgICB0aGlzLnNoaXBzLmV2ZXJ5KCh7c2hpcH0pID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2hpcEF0KHJvdywgY29sKSB7XHJcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLnNoaXBzLmZpbmQoKHtjb29yZGluYXRlc30pID0+XHJcbiAgICAgIGNvb3JkaW5hdGVzLnNvbWUoKFtyLCBjXSkgPT4gciA9PT0gcm93ICYmIGMgPT09IGNvbClcclxuICAgICk7XHJcbiAgICByZXR1cm4gcGxhY2VtZW50Py5zaGlwIHx8IG51bGw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xyXG5cclxuLy8gLS0tIFBMQVlFUiBDTEFTUyAtLS1cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IodHlwZSwgbmFtZSA9ICdQbGF5ZXInKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyBcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7ICBcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy5vcHBvbmVudCA9IG51bGw7ICBcclxuICAgIHRoaXMucHJldmlvdXNBdHRhY2tzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5odW50VGFyZ2V0cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwcyhzaGlwc0RhdGEpIHtcclxuICAgIHNoaXBzRGF0YS5mb3JFYWNoKCh7IGxlbmd0aCwgY29vcmRpbmF0ZXMgfSkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAobGVuZ3RoLCBjb29yZGluYXRlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGF0dGFjayhvcHBvbmVudENvb3JkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhvcHBvbmVudENvb3JkKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUF0dGFjaygpIHtcclxuICAgIGxldCBjb29yZDtcclxuICAgIGRvIHtcclxuICAgICAgY29vcmQgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG4gICAgfSB3aGlsZSAodGhpcy5wcmV2aW91c0F0dGFja3MuaGFzKGAke2Nvb3JkWzBdfSwke2Nvb3JkWzFdfWApKTtcclxuICAgIHRoaXMucHJldmlvdXNBdHRhY2tzLmFkZChgJHtjb29yZFswXX0sJHtjb29yZFsxXX1gKTtcclxuICAgIHJldHVybiBjb29yZDtcclxuICB9XHJcblxyXG4gIC8vIEVuaGFuY2VkIEFJOiBJZiBoaXQgcmVjZW50bHksIHRhcmdldCBhZGphY2VudFxyXG4gIHNtYXJ0QXR0YWNrKCkge1xyXG4gICAgd2hpbGUgKHRoaXMuaHVudFRhcmdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmh1bnRUYXJnZXRzLnNoaWZ0KCk7XHJcbiAgICAgIGlmICghdGhpcy5wcmV2aW91c0F0dGFja3MuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQXR0YWNrcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJhbmRvbUF0dGFjaygpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNrT3Bwb25lbnQoKSB7XHJcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuc21hcnRBdHRhY2soKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xyXG4gICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcclxuICAgICAgY29uc3QgW3IsIGNdID0gY29vcmQ7XHJcbiAgICAgIGNvbnN0IGFkamFjZW50cyA9IFtcclxuICAgICAgICBbci0xLCBjXSwgW3IrMSwgY10sIFtyLCBjLTFdLCBbciwgYysxXVxyXG4gICAgICBdLmZpbHRlcigoW3gsIHldKSA9PiB4ID49IDAgJiYgeCA8IDEwICYmIHkgPj0gMCAmJiB5IDwgMTApXHJcbiAgICAgICAubWFwKChbeCwgeV0pID0+IGAke3h9LCR7eX1gKTtcclxuICAgICAgdGhpcy5odW50VGFyZ2V0cy5wdXNoKC4uLmFkamFjZW50cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBjb29yZCwgcmVzdWx0IH07XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvLyBzaGlwLmpzXHJcbmV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gMDsgIC8vIE51bWJlciBvZiBoaXRzIHRha2VuXHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMgKz0gMTtcclxuICAgIGNvbnNvbGUubG9nKGBTaGlwIGhpdCEgVG90YWwgaGl0czogJHt0aGlzLmhpdHN9LyR7dGhpcy5sZW5ndGh9YCk7XHJcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCBzdW5rISAoTGVuZ3RoOiAke3RoaXMubGVuZ3RofSlgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmhpdHM7XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoOyAgLy8gU3VuayB3aGVuIGFsbCBjZWxscyBoaXRcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc2V0dXBVSSB9IGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tICcuL2dhbWUuanMnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMuY3NzJztcclxuXHJcbi8vIC0tLSBET00gRWxlbWVudHMgLS0tXHJcbmNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVwYWdlJyk7aW5pdEdhbWVcclxuY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1mb3JtJyk7XHJcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZScpO1xyXG5cclxuLy8gLS0tIE1haW4gQXBwbGljYXRpb24gTG9naWMgLS0tXHJcbmZ1bmN0aW9uIHNob3dHYW1lKCkge1xyXG4gICAgaWYgKGhvbWVwYWdlKSB7XHJcbiAgICAgICAgaG9tZXBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBzdGFydHMgdGhlIGVudGlyZSBnYW1lIHByb2Nlc3MuXHJcbmZ1bmN0aW9uIGxhdW5jaEdhbWUocGxheWVyTmFtZSkge1xyXG5cclxuICAgIHNldHVwVUkoKTtcclxuXHJcbiAgICBpbml0R2FtZShwbGF5ZXJOYW1lKTtcclxuXHJcbiAgICBzaG93R2FtZSgpO1xyXG59XHJcblxyXG4vLyAtLS0gRXZlbnQgTGlzdGVuZXIgZm9yIHRoZSBIb21lcGFnZSBGb3JtIC0tLVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgaWYgKG5hbWVGb3JtKSB7XHJcbiAgICAgICAgbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBTdG9wIHRoZSBmb3JtIGZyb20gcmVsb2FkaW5nIHRoZSBwYWdlLlxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKSB8fCAnQWRtaXJhbCc7XHJcbiAgICAgICAgICAgIGxhdW5jaEdhbWUocGxheWVyTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gaG9tZXBhZ2UvZm9ybSwgbGF1bmNoIHRoZSBnYW1lIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIGxhdW5jaEdhbWUoJ0FkbWlyYWwnKTtcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9