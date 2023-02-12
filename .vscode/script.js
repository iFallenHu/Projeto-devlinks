function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /*uma unica linha de código para fazer a condição a cima*/
  //html.classList.toggle('light')
}
