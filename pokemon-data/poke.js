
// const template = require('./template');



// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const  baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const rowContainer = document.createElement('div');
rowContainer.className = 'row';

for(let i = 1; i <= 151; i++) {

    const apiResponse = async () => {
        const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const data = await res.json()
        characterName.innerText = `No${i}:` + data.name;
        }
     
     apiResponse();
     
     const pokemon = document.createElement('div');
     pokemon.classList.add('pokemon',  'card', 'col-lg-2');
     
     const newImg = document.createElement('img');
     newImg.src = `${baseUrl}${i}.png`;
     pokemon.appendChild(newImg);
     
     const cardDiv = document.createElement('div');
     cardDiv.className = 'card-body';

     const characterName = document.createElement('h5');
     characterName.className = 'card-title';

     const form = document.createElement('form');
     form.className = 'getForm';
     form.action = `http://localhost:3000/pokemon/${i}`;
     const Button = document.createElement('button');
     Button.className = 'btn btn-primary';
     Button.innerText = '詳細';
     
     
     pokemon.appendChild(newImg);
     pokemon.appendChild(characterName);
     form.appendChild(Button);
     pokemon.appendChild(form);
     rowContainer.appendChild(pokemon);
     container.appendChild(rowContainer);

       }

     
     
    
    