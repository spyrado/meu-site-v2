  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
   'use strict';
   window.addEventListener('load', function() {
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.getElementsByClassName('needs-validation');
     // Loop over them and prevent submission
     var validation = Array.prototype.filter.call(forms, function(form) {
       form.addEventListener('submit', function(event) {
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }else{
            enviaMensagemWhatsApp();
         }
         form.classList.add('was-validated');
         
       }, false);
     });
   }, false);
 })();

function enviaMensagemWhatsApp(){
      let self = document.querySelector('.envia-msg-whatsapp')
      let nome = self.nome.value;
      let assunto = self.assunto.value;
      let mensagem = self.mensagem.value;
      window.open(`https://api.whatsapp.com/send?phone=5511961435069&text=Olá, prazer meu nome é *${nome}*
      ${mensagem}`, '_blank');
}