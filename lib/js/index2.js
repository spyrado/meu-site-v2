"use strict";

document.querySelector('.envia-msg-whatsapp').addEventListener('submit', function (event) {
  event.preventDefault();
  let mensagem = document.querySelector('#msg-whatsapp').value;
  window.open("https://api.whatsapp.com/send?phone=5511961435069&text=".concat(mensagem), '_blank');
});