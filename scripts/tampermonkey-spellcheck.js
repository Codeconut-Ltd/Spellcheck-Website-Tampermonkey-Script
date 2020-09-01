// ==UserScript==
// @name         Spell Checking toggle
// @description  Enable browser plugin spell checking within website content
// @author       Codeconut Ltd.
// @version      0.0.1
// @grant        none
// @namespace    CodeconutSpellCheck
// @include      http://example.com/*
// @include      http://localhost:1234/*
// ==/UserScript==
(function () {
  'use strict';

  document.body.contentEditable = true;
  document.designMode = 'on';

  window.ccCheckSpelling = () => {
    console.info('TAMPERMONKEY: window.ccCheckSpelling()');

    var nodeList = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span'); // a,abbr,pre,code

    Array.from(nodeList).map((element, _index) => {
      //element.setAttribute('class', 'notranslate');
      element.setAttribute('spellcheck', 'true');
      element.setAttribute('contenteditable', 'true');
      element.setAttribute('dir', 'ltr');
      element.setAttribute('tabindex', '0');
      element.setAttribute('aria-multiline', 'true');
      element.setAttribute('role', 'textbox');
    });
  };

  window.ccCheckSpelling();

})();

