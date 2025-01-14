const container=document.querySelector(".pokemon-container");

function dispalayPokemoon(data){
    const pokemonList=data.results;
    pokemonList.forEach((pokemon,index) => {
        const id=index+1;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
        const pokemonCard=document.createElement("div");
        pokemonCard.className="pokemon-card ";
        pokemonCard.innerHTML=`
        <p>#${id}</p>
        <img src="${imageUrl}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        `;

        container.appendChild(pokemonCard);
    });
}

dispalayPokemoon(data)