function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  const getMessages = () => {
    let count = 0;

    let span = document.querySelectorAll('.navigation-list-item--badgeCount');

    if (span.length === 0) {
      span = document.querySelectorAll(
        '.navigation-list-item--badgeCount-minimized',
      );
    }

    if (span.length > 0) {
      count = Ferdium.safeParseInt(span[0].textContent);
    }

    Ferdium.setBadge(count);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
