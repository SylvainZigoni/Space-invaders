// ton code ici

// On récupère l'endroit ou seront crées les 8 lignes
const container = document.querySelector('#invader');

// On fait une boucle pour créer les 8 lignes
for(let i = 1; i <= 8; i++) {
    // On déclare la constante line dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
    console.log("Je suis dans la boucle");
    console.log(i);
    const line = document.createElement('p');
    line.classList.add('ligne');
    container.append(line);
    // On fait une boucle pour créer les 8 pixels
    for(let j = 1; j <= 8; j++) {
            // On déclare la constante pixel dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        line.append(pixel);
    }
}
// On récupère l'ensemble des éléments pixel avec querySelectorAll
const pixels = document.querySelectorAll('.pixel');

// On fait une boucle sur l'ensemble des pixel de notre tableau pixels. (Ca permet de ne pas utiliser forEach)
for (const pixelElt of pixels) {
    pixelElt.addEventListener("click", () => {
        console.dir(pixelElt);
        // Comme notre pixel a 2 classes dans le if pour voir s'il a le nom black pixel, il faut bien mettre class1 + class2.
        if(pixelElt.className == "pixel black-pixel") {
            console.log(pixelElt);
            pixelElt.classList.remove("black-pixel");
        } else {
            pixelElt.classList.add("black-pixel");
        }
    });
}




