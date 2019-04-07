"use strict";

class APIWhatsApp {
  static enviaMensagem(mensagem) {
    window.open("https://api.whatsapp.com/send?phone=5511961435069&text=".concat(mensagem), '_blank');
  }

}