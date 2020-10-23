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

  class SpellCheckHelper {
    /**
     * Pass dependencies and bind public interface to manually trigger spell check.
     *
     * @param {string} nodeSelector DOM nodes where spell check will be made available (as CSS selector).
     * @param {object} win window reference.
     */
    constructor(nodeSelector, win) {
      this.nodeSelector = nodeSelector;
      this.win = win;
      this.doc = win.document;

      window.ccSpellCheck = () => {
        this.enable();
      };
    }

    /**
     * Enable spell checking support.
     * Freshly check for currently available DOM elements.
     */
    enable() {
      const nodeList = document.querySelectorAll(this.nodes);

      Array.from(nodeList).map(this.transformElements);

      this.transformBody();
    }

    /**
     *
     */
    transformBody() {
      this.doc.body.contentEditable = true;
      this.doc.designMode = 'on';
    }

    /**
     * Modify desired HTML elements to make them spell-check compatible.
     */
    // eslint-disable-next-line no-unused-vars
    transformElements(element, _index) {
      // For all spell checking tools
      element.setAttribute('spellcheck', 'true');
      element.setAttribute('contenteditable', 'true');

      // Additionally needed by Grammarly
      element.setAttribute('tabindex', '0');
    }
  }

  // Run
  const spellCheckHelper = new SpellCheckHelper('h1, h2, h3, h4, h5, h6, p, li, span', window);

  spellCheckHelper.enable();
})();
