function toggleMode() {
  const html = document.documentElement //chamar o html
  html.classList.toggle("light") //realizar a troca das classes(lightmode/darkmode)

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  //condição: se tiver em light mode,
  //adicionar a imagem lighr
  //se tiver dark mode, manter a imagem
  //normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/makima.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
