import {} from '../services/APIWhatsApp.js';
export class HomePageController{
  
  enviaMensagemWhatsApp(formulario){
    event.preventDefault();
    APIWhatsApp.enviaMensagem(formulario.mensagem.value);
  }
}