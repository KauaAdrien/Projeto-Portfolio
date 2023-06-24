function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-dark mode.png")
    // se tiver sem light mode, manter a imagem
  } else {
    img.setAttribute("src", "./assets/avatar light mode.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Frame do personagem Toge Inumaki de Jujutsu Kaisen"
    )
  } else {
    img.setAttribute(
      "alt",
      "Frame do filme animado do Homem Aranha No Aranahverso onde o Peter B. Parker está deitado em uma poltrona de um ônibus"
    )
  }
}
