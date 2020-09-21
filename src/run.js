const spellCheckHelper = new SpellCheckHelper('h1, h2, h3, h4, h5, h6, p, li, span', document);

spellCheckHelper.enable();

/**
 * Public interface for manual triggering, if needed.
 */
window.ccCheckSpelling = () => {
  spellCheckHelper.enable();
};
