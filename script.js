function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle('light');

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir img
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/light.jpg');
  }else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'assets/black.jpg');
  }
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

}