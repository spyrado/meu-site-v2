"use strict";

class HomePageController {
  enviaMensagemWhatsApp(formulario) {
    event.preventDefault();
    APIWhatsApp.enviaMensagem(formulario.mensagem.value);
  }

}