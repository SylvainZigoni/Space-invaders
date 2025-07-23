// ton code ici
const container = document.querySelector('#invader');

for(let i = 1; i <= 8; i++) {
    console.log("Je suis dans la boucle");
    console.log(i);
    const line = document.createElement('p');
    line.classList.add('ligne');
    container.append(line);
    for(let j = 1; j <= 8; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        line.append(pixel);
    }
}



// const pixel = document.createElement('div');


