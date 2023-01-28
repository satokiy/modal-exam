"use strict";
exports.__esModule = true;
/**
 * サイト側の実装を用意する
 * 必要なのはボタンとコールバック
 */
var openButton_js_1 = require("./src/components/openButton.js");
var exApp_js_1 = require("./src/exApp.js");
var openButton = (0, openButton_js_1.openButtonEl)();
var app = document.getElementById('app');
app.appendChild(openButton);
// open modal
openButton.addEventListener("click", function () {
    (0, exApp_js_1.start)();
});
(0, exApp_js_1.config)({
    cancel: function () {
        console.log("cancel!!!");
        window.location.href = "thanks.html";
    },
    goOther: function (url) {
        console.log("go other!!!");
        if (url) {
            console.log(url);
            window.location.href = url;
        }
    }
});
