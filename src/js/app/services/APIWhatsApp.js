export class APIWhatsApp{

  static enviaMensagem(mensagem){
    alert('SYSTEMA DE MODULOS');
    window.open(`https://api.whatsapp.com/send?phone=5511961435069&text=${mensagem}`, '_blank');
  }
}