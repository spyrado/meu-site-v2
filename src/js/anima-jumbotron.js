(() => {

  let $indicadorAnimado = $('.indicador-animado'),
    $animaJumbotron = $('.anima-jumbotron');

  function animaJumbotron() {

    return new Promise((resolve, reject) => {
      $('.card-perfil').addClass('col-md-6');
      // O tempo dessa funcao depende do tempo de transition de .card-perfil
      setTimeout(() => {
        $('.sobre-mim').addClass('anima-sobre-mim');
        resolve();
      }, 1000);
    });
  }
  
  function mudaIcone(){
      $indicadorAnimado.removeClass(['fa-arrow-right','infinite','animated']);
      $indicadorAnimado.addClass('fa-arrow-left');
  }
  
  $animaJumbotron.click(function(){
    animaJumbotron()
      .then(() => mudaIcone())
      .catch(erro => console.error(erro));
  });
})();