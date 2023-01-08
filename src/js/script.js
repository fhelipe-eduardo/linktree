function toggleMode () {
    const html = document.documentElement;

    // if(html.classList.contains("light")) {
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }

    html.classList.toggle("light");

    //1.pegar a tag img
    //2.substituir a img
    //com light mode - add img-light
    //sem light mode - manter img normal

    const imagem = document.querySelector("#profile img")
    
    if(html.classList.contains("light")) {
        imagem.setAttribute("src", "assets/avatar-light.png")
    } else {
        imagem.setAttribute("src", "assets/avatar.png")
    }
};