function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  //pegar a tag img
  const img = document.querySelector('#profile img');

  //substituir a imagem
  if (html.classList.contains('light')) {
    //se tiver light mode, colocar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Imagem de Letícia Calixter usando oculos de sol e biquini');
  } else {
    //se tiver dark mode, colocar a imagem padrão
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Imagem de Letícia Calixter vestindo uma blusa estampada preta com folhas azuis e amarelas');
  }

}