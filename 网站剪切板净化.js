// ==UserScript==
// @name         去除各种网站的复制后缀，比如：CSDN，简书
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  自用脚本，在pf kong作者的源码基础上，修改成支持去除各种网站的复制后缀，比如：CSDN，简书，知乎
// @author       Louis
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function addLink(e) {
        e.preventDefault();
        var copytext = window.getSelection();
        var clipdata = e.clipboardData || window.clipboardData;
        if (clipdata) {
            clipdata.setData('Text', copytext);
        }
    }
    document.addEventListener('copy', addLink);
})();
