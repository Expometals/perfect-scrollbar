import * as CSS from './css';
import * as DOM from './dom';

export function toInt(x) {
  return parseInt(x, 10) || 0;
}

export function isEditable(el) {
  return (
    DOM.matches(el, 'input,[contenteditable]') ||
    DOM.matches(el, 'select,[contenteditable]') ||
    DOM.matches(el, 'textarea,[contenteditable]') ||
    DOM.matches(el, 'button,[contenteditable]')
  );
}

export function outerWidth(element) {
  const styles = CSS.get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

const _isWebKit =  typeof document !== 'undefined' ? 'WebkitAppearance' in document.documentElement.style : false;
const _supportsTouch = typeof window !== 'undefined' ? ('ontouchstart' in window ||
(window.DocumentTouch && document instanceof window.DocumentTouch)) : false;

export const env = {
  isWebKit: _isWebKit,
  supportsTouch: _supportsTouch,
};
