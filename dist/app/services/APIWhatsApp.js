"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var APIWhatsApp;

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
      _export("APIWhatsApp", APIWhatsApp = function () {
        function APIWhatsApp() {
          _classCallCheck(this, APIWhatsApp);
        }

        _createClass(APIWhatsApp, null, [{
          key: "enviaMensagem",
          value: function enviaMensagem(mensagem) {
            alert('SYSTEMA DE MODULOS');
            window.open("https://api.whatsapp.com/send?phone=5511961435069&text=".concat(mensagem), '_blank');
          }
        }]);

        return APIWhatsApp;
      }());

      _export("APIWhatsApp", APIWhatsApp);
    }
  };
});
//# sourceMappingURL=APIWhatsApp.js.map