export function div(className) {
  const div = document.createElement('div');
  div.className = className;
  return div;
}
var proto = typeof Element !== 'undefined' ? Element.prototype : null;
var elMatches = proto.matches
|| proto.matchesSelector
|| proto.webkitMatchesSelector
|| proto.mozMatchesSelector
|| proto.msMatchesSelector
|| proto.oMatchesSelector;

export function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

export function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

export function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, child =>
    matches(child, selector)
  );
}
