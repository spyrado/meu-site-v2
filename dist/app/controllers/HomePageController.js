"use strict";

System.register(["../services/APIWhatsApp.js"], function (_export, _context) {
  "use strict";

  var APIWhatsApp, HomePageController;

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
    setters: [function (_servicesAPIWhatsAppJs) {
      APIWhatsApp = _servicesAPIWhatsAppJs.APIWhatsApp;
    }],
    execute: function () {
      _export("HomePageController", HomePageController = function () {
        function HomePageController() {
          _classCallCheck(this, HomePageController);
        }

        _createClass(HomePageController, [{
          key: "enviaMensagemWhatsApp",
          value: function enviaMensagemWhatsApp(formulario) {
            event.preventDefault();
            APIWhatsApp.enviaMensagem(formulario.mensagem.value);
          }
        }]);

        return HomePageController;
      }());

      _export("HomePageController", HomePageController);
    }
  };
});
//# sourceMappingURL=HomePageController.js.map