"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var HomePage;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  return {
    setters: [],
    execute: function () {
      HomePage = function () {
        function HomePage(texto) {
          _classCallCheck(this, HomePage);

          this._texto = texo;
        }

        _createClass(HomePage, [{
          key: "texto",
          get: function get() {
            return this._texto;
          },
          set: function set(texto) {
            this._texto = texto;
          }
        }]);

        return HomePage;
      }();
    }
  };
});
//# sourceMappingURL=HomePage.js.map