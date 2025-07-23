//On créer notre tableau de couleurs et on l'incorpore au body
const colors = ["plain", "empty", "light", "highlight"];
const colorsContainer = document.createElement("div");
colorsContainer.classList.add("colors-container");
document.querySelector("body").appendChild(colorsContainer);
//On fait une boucle pour créer chaque rond de couleurs
for (let i = 0; i < colors.length; i++) {
    const colorBubble = document.createElement("div");
    colorBubble.classList.add(colors[i], "petitRond");
    colorsContainer.appendChild(colorBubble);
}
//On fait une boucle pour récupérer la couleur du rond selectionné et on stock la classe dans la variable paintingColor
let paintingColor = "";
const handleColors = document.querySelectorAll(".petitRond");
for (const petitRond of handleColors) {
    // Mise en place d'une boucle pour modifier la taille de l'element selectionné
    petitRond.addEventListener("click", () => {
        // Mise en place d'une boucle dans la boucle pour remettre tous les petits ronds à la taille initiale
        for (const petitRond2 of handleColors) {
            petitRond2.style.height = "30px";
            petitRond2.style.width = "30px";
        }
        paintingColor = petitRond.classList.value;
        petitRond.style.height = "40px";
        petitRond.style.width = "40px";
        return paintingColor;
    });
}

// On récupère l'endroit ou seront crées les 8 lignes
const container = document.querySelector("#invader");

// On fait une boucle pour créer les 8 lignes
for (let i = 1; i <= 8; i++) {
    // On déclare la constante line dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
    const line = document.createElement("p");
    line.classList.add("ligne");
    container.append(line);
    // On fait une boucle pour créer les 8 pixels
    for (let j = 1; j <= 8; j++) {
        // On déclare la constante pixel dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        line.append(pixel);
    }
}

function handlePixel() {
    // On récupère l'ensemble des éléments pixel avec querySelectorAll
    const pixels = document.querySelectorAll(".pixel");
    return pixels;
}

function handleClass() {
    // On execute handlepixel pour mettre en variable le tableau de tous nos pixels de la feuille    pixels = handlePixel();
    const pixels = handlePixel();
    // On fait une boucle sur l'ensemble des pixel de notre tableau pixels. (Ca permet de ne pas utiliser forEach)
    for (const pixelElt of pixels) {
        pixelElt.addEventListener("click", () => {
            //On écrase les classes existantes pour les remplacer par celle de paintingColor
            pixelElt.setAttribute("class", paintingColor);
            //On retire la classe petitRond
            pixelElt.classList.remove("petitRond");
            //On ajoute la class pixel
            pixelElt.classList.add("pixel");
            // Comme notre pixel a 2 classes dans le if pour voir s'il a le nom black pixel, il faut bien mettre class1 + class2.
            // if (pixelElt.className == "pixel black-pixel") {
            //     pixelElt.classList.remove("black-pixel");
            // } else {
            //     pixelElt.classList.add("black-pixel");
            // }
        });
    }
}

handleClass();

// On créé les élements dans le document et ensuite on les ajoute (append) dans le parent
const formulaire = document.querySelector(".configuration");
const sizeFormElt = document.createElement("input");
const sizePixelElt = document.createElement("input");
const buttonElt = document.createElement("button");
formulaire.appendChild(sizeFormElt);
formulaire.appendChild(sizePixelElt);
formulaire.appendChild(buttonElt);

sizeFormElt.setAttribute("placeholder", "Taille de la grille");
sizePixelElt.setAttribute("placeholder", "Taille des pixels, minimum 5");
buttonElt.textContent = "Valider";

sizeFormElt.classList.add("form-grille");
sizePixelElt.classList.add("form-pixel");
buttonElt.classList.add("form-button");

// Créer une fonction qui efface l'existant quand on appuie sur le bouton valider
const removeAll = () => {
    pixels = handlePixel();
    for (let pixel of pixels) {
        pixel.remove();
    }
};

//Faire en sorte qu'appuyer sur le bouton valider ne rafraichisse pas la page

formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
});

//Récupérer la taille de la grille

function userInputSize() {
    const userSize = sizeFormElt.value;
    return userSize;
}

//Récupérer la taille des pixels

function userInputPixel() {
    const userPixel = sizePixelElt.value;
    return userPixel;
}

//Créer une fonction pour ajouter une ligne

function addUserInput() {
    //On appelle les fonctions qui ont demandées à l'utilisateur une taille de grille et un nombre de pixel
    //Et on récupère les valeurs indiquées dans des variables
    const numero = userInputSize();
    const size = userInputPixel();
    //Si les valeurs ne sont pas des numéros ou sont des valeurs trop petites on retourne un message d'erreur
    //Et on sort de la fonction
    if (isNaN(numero) || isNaN(size) || numero < 1 || size < 4) {
        alert("Mauvaise saisie.");
        return;
        //Sinon on modifie notre grille en fonction des paramètres donnés par l'utilisateur
    } else {
        removeAll();
        for (let i = 1; i <= numero; i++) {
            // On déclare la constante line dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
            const line = document.createElement("p");
            line.classList.add("ligne");
            container.append(line);
            // On fait une boucle pour créer les 8 pixels
            for (let j = 1; j <= numero; j++) {
                // On déclare la constante pixel dans la boucle pour ne pas qu'elle s'écrase et se crée toujours au meme endroit
                const pixel = document.createElement("div");
                pixel.classList.add("pixel");
                //On modifie la taille du pixel en changeant le style en fonction de la valeur donnée par l'utilisateur
                pixel.style.height = size + "px";
                pixel.style.width = size + "px";
                line.append(pixel);
            }
        }
        //On appelle la fonction qui gère le changement de couleur des pixels
        handleClass();
    }
}

//On execute la fonction qui modifie la grille grace aux données demandées par l'utilisateuren cliquant sur le bouton
buttonElt.addEventListener("click", addUserInput);
