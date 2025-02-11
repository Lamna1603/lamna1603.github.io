// (
//     async function () {
//         const app = document.querySelector('#app')
//         const button = document.querySelector('button')
//         const input = document.querySelector('input')
//         let counter = 0
//         let limit = 20
//         let filteredPokemons = []

//         function createPokemonType(types) {
//             return types.map(function (type) {
//                 return <div class="${type.type.name}">${type.type.name}</div>
//             }).join('')
//         }

//         function createPokemonElement(pokemon) {
//             const pokemonElement = document.createElement("div");
//             pokemonElement.classList.add("pokemon");

//             pokemonElement.innerHTML = `
//                 <div class="id">#${pokemon.id}</div>
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
//                 <div class="type">
//                     ${createPokemonType(pokemon.types)}
//                 </div>
//                 <div class="name">${pokemon.name}</div>
//             `;
//             return pokemonElement;
//         }

//         async function cFetch(URL) {
//             try {
//                 const response = await fetch(URL);
//                 const promise = await response.json();
//                 return promise;
//             }
//             catch (error) {
//                 app.innerHTML = <div class="error">Error: ${error}</div>
//             }
//         }

//         function createPromiseList() {
//             const pokePromises = []
//             for (; counter < limit; counter++) {
//                 const pokemon = filteredPokemons[counter]
//                 if (!pokemon) {
//                     button.style.display = 'none'
//                     break
//                 }

//                 const promise = cFetch(pokemon.url)
//                 pokePromises.push(promise)
//             }
//             return pokePromises
//         }

//         const { results: pokemons } = await cFetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");
//         filteredPokemons = pokemons

//         async function render() {
//             button.style.display = 'block'
//             const pokeData = await Promise.all(createPromiseList())

//             pokeData.forEach(function (pokemon) {
//                 const element = createPokemonElement(pokemon)
//                 app.appendChild(element)
//             })

//             limit += 20
//         }

//         app.innerHTML = ''
//         render()

//         button.addEventListener('click', render)

//         input.addEventListener('input', function () {
//             filteredPokemons = pokemons.filter(function (pokemon) {
//                 return pokemon.name.includes(input.value)
//             })

//             app.innerHTML = ''
//             counter = 0
//             limit = 20
//             render()
//         })
//     }
// )()




// // const app= document.querySelector('#app')
// // const button=document.querySelector('button')
// // const input=document.querySelector('input')
// // const container=document.querySelector(".pokemon-container");

// // //ham lay api
// // function fetchPromise(URL){
// //     return new Promise(
// //         function(resolve){//ẩn của hàm callback , thnahf công thì gọi hàm sau .then
// //             fetch(URL)
// //             .then(
// //                 function(responsive){
// //                     const promise=responsive.json()
// //                     resolve(promise)//thành ccoong thì gọi hàm .then của cái sau/ tương tự bắt lỗi thì .catchcatch
// //                 }
// //             )
// //             .catch(function(error){
// //                 console.log(error)
// //                 app.innerHTML='Oh no! Some thing went wrong.'
// //             }
// //             )
// //         }
// //     )
// // }

// // let offset=0
// // const limit=36

// // let pokemons=JSON.parse(localStorage.getItem('pokemonsData'))
// // let filteredPokemon=pokemons
// // let pokemonType=[]

// // if(pokemons&& Array.isArray(pokemons)&& pokemons.length){
// //     render()
// // }
// // else{
// //     fetchPromise(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
// //         .then(
// //             function(value){
// //                 container.innerHTML=''
// //                 pokemons=value.results
// //                 filteredPokemon = value.results

// //                 localStorage.setItem('pokemonsData',JSON.stringify(pokemons))

// //                 pokemonType = pokemons.map(pokemon=>
// //                     fetchPromise(pokemon.url)
// //                 )
// //                 return Promise.all(pokemonType)
// //             }
// //         )
// //         .then(results => {
// //             // Thêm chi tiết vào mỗi Pokémon
// //         results.forEach((details, index) => {
// //             pokemons[index].details = {
// //                 types: details.types.map(type => type.type.name),
// //                 id: details.id,
// //             };
// //         });
// //         filteredPokemon = pokemons; // Cập nhật bộ lọc
// //         render();
// //             render();
// //         })
// // }

// // function render(){
// //     const renderLimit=offset+limit
// //     for(;offset<renderLimit;offset++){
// //         const pokemon=filteredPokemon[offset]
// //         if(!pokemon){
// //             button.style.display='none'
// //         }
// //         else{
// //             button.style.display='block'
// //         }

// //         // const div=document.createElement('div')
// //         // div.innerText=pokemon.name
// //         // app.appendChild(div)

// //         const id = pokemon.details?.id || 'Unknown';  
// //         const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

// //         const pokemonCard=document.createElement("div");
// //         pokemonCard.className="pokemon-card ";
// //         pokemonCard.innerHTML=`
// //         <p>#${id}</p>
// //         <img src="${imageUrl}" alt="${pokemon.name}">
// //         <h2>${pokemon.name}</h2>
// //         <div class="types">
// //         ${pokemon.details?.types
// //         .map(type => `<span class="type ${type}">${type}</span>`)
// //         .join('') || ''}
// // </div>

// //         `;

// //         container.appendChild(pokemonCard);
// //     }
// //     button.style.display = offset < filteredPokemon.length ? 'block' : 'none';

// // }

// // button.addEventListener('click',render)

// // input.addEventListener('input',function(){
// //     offset=0
// //     container.innerHTML=''
// //     filteredPokemon=pokemons.filter(
// //         function(pokemon){
// //             return pokemon.name.toLowerCase().includes(input.value.toLowerCase())
// //         }
// //     )
// //     render()
// // })









// // const app = document.querySelector('#app')
// // const button = document.querySelector('button')
// // const input = document.querySelector('input')
// // const container = document.querySelector(".pokemon-container");


// // function fetchPromise(URL) {
// //     return new Promise(
// //         function (resolve) {
// //             fetch(URL)
// //                 .then(
// //                     // function(response) {
// //                     //     const promise = response.json()
// //                     //     resolve(promise)
// //                     // }
// //                     response => response.json()
// //                 )
// //                 .then(data => resolve(data))
// //                 .catch(function (error) {
// //                     console.log(error)
// //                     app.innerHTML = 'Oh no! Some thing went wrong.'
// //                 })
// //         }
// //     )
// // }

// // let offset = 0
// // const limit = 36
// // let pokemons = JSON.parse(localStorage.getItem('pokemonsData'))
// // let filteredPokemon = pokemons
// // let pokemonType = []

// // if (pokemons && Array.isArray(pokemons) && pokemons.length) {
// //     render()
// // } else {
// //     fetchPromise(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
// //         .then(
// //             function (value) {
// //                 container.innerHTML = ''
// //                 pokemons = value.results
// //                 filteredPokemon = value.results

// //                 localStorage.setItem('pokemonsData', JSON.stringify(pokemons))

// //                 // return Promise.all(pokemonType)
// //             }
// //         )
// //         .then(results => {
// //             // DO SOMETHING TO RESULT

// //             render()
// //         })
// // }

// // function render() {
// //     const renderLimit = offset + limit
// //     const currentPokemonPromises = []; // Lưu các Promise chỉ cho lần render hiện tại

// //     for (; offset < renderLimit; offset++) {
// //         const pokemon = filteredPokemon[offset]
// //         if (!pokemon) {
// //             button.style.display = 'none'
// //             break
// //         } else {
// //             button.style.display = 'block'
// //         }
// //         // pokemonType.push(
// //         //     fetchPromise(pokemon.url)
// //         // )

// //         const promise = fetchPromise(pokemon.url)
// //         currentPokemonPromises.push(promise)//luu vao mang hien tai
// //         pokemonType.push(promise)//luu tat ca promise vao pokemonType
// //     }

// //     Promise.all(currentPokemonPromises)
// //         .then(result => {
// //             result.forEach(pokemonData => {
// //                 const id = pokemonData.id
// //                 const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
// //                 const pokemonCard = document.createElement("div");
// //                 pokemonCard.className = "pokemon-card ";
// //                 pokemonCard.innerHTML = `
// //                 <p>#${id}</p>
// //                 <div class="img" style="background-image: url(${imageUrl});></div>
// //                 <h2>${capitalize(pokemonData.name)}</h2>
// //                 <div class="types">
// //                 ${pokemonData.types
// //                         .map(types => `<span class="type ${types.type.name}">${capitalize( types.type.name)}</span>`)
// //                         .join('') || ''}
// //                 </div>
// //                 `;
// //                 container.appendChild(pokemonCard);

// //             })
// //         })
// //         .catch(error => {
// //             console.error("loi tai pokemon: ",error)
// //         })
// //     // const div = document.createElement('div')
// //     // div.innerText = pokemon.name
// //     // container.appendChild(div)

// // }

// // button.addEventListener('click', render)


// // input.addEventListener('input', function () {
// //     offset = 0
// //     container.innerHTML = ''
// //     filteredPokemon = pokemons.filter(
// //         function (pokemon) {
// //             return pokemon.name.includes(input.value)
// //         }
// //     )
// //     render()
// // })

// // function capitalize(word){
// //     if(!word) return ''
// //     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// // }
