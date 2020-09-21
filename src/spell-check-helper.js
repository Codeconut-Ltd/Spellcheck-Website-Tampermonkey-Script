class SpellCheckHelper {
  /**
   * @param {string} nodeSelector DOM nodes where spell check will be made available (as CSS selector).
   * @param {object} win window reference.
   */
  constructor(nodeSelector, win) {
    this.nodeSelector = nodeSelector;
    this.win = win;
    this.doc = win.document;

    this.bindEvents();
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
  static transformElements(element, _index) {
    // For all spell checking tools
    element.setAttribute('spellcheck', 'true');
    element.setAttribute('contenteditable', 'true');

    // Additionally needed by Grammarly
    element.setAttribute('tabindex', '0');
  }

  /**
   *
   */
  static bindEvents() {}
}

const spellCheckHelper = new SpellCheckHelper('h1, h2, h3, h4, h5, h6, p, li, span', document);

spellCheckHelper.enable();

/**
 * Public interface for manual triggering, if needed.
 */
window.ccCheckSpelling = () => {
  spellCheckHelper.enable();
};
