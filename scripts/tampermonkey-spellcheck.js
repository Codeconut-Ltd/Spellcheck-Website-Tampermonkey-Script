// ==UserScript==
// @name         Spellcheck Website Content Helper
// @description  Enables browser plugin spell checking abilities within website content.
// @author       Codeconut Ltd.
// @version      0.0.3
// @grant        none
// @namespace    CodeconutSpellCheckHelper
// @include      http*://dev-*.test*
// @include      http*://localhost*
// @include      XXX http*://*
// ==/UserScript==
(() => {
  'use strict';

  class SpellCheckHelper {
    constructor (nodes, doc) {
      this.nodes = nodes;
      this.doc   = doc;
    }

    /**
     * Enable spell checking support.
     * Freshly check for currently available DOM elements.
     */
    enable () {
      const nodeList = document.querySelectorAll(this.nodes);

      Array.from(nodeList).map(this.#transformElements);

      this.#transformBody();
    }

    #transformBody () {
      document.body.contentEditable = true;
      document.designMode = 'on';
    }

    /**
     * Modify desired HTML elements to make them spell-check compatible.
     */
    #transformElements (element, _index) {
      // For all spell checking tools
      element.setAttribute('spellcheck', 'true');
      element.setAttribute('contenteditable', 'true');

      // Additionally needed by Grammarly
      element.setAttribute('tabindex', '0');
    }
  }

  const spellCheckHelper = new SpellCheckHelper('h1, h2, h3, h4, h5, h6, p, li, span', document);

    console.warn("trigger NOW");
  spellCheckHelper.enable();

  window.ccCheckSpelling = () => {
    console.warn("trigger on demand");
    spellCheckHelper.enable();
  };

})();

