(async function () {
    const input = document.querySelector('input')
    const button = document.querySelector("button");
    const container = document.querySelector(".pokemon-container");
    let counter = 0;
    let limit = 36;
    let filteredPokemons = [];
    async function FetchAPI(URL) {
        try {
            const response = await fetch(URL);
            const promise = await response.json();
            return promise;
        } catch (error) {
            container.innerHTML = `<div class="error">Error: ${error}</div>`;
        }
    }

    const { results: pokemons } = await FetchAPI(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898"
    );
    filteredPokemons = pokemons;

    function createPromiseList() {
        const pokePromises = [];
        for (; counter < limit; counter++) {
            const pokemon = filteredPokemons[counter];
            if (!pokemon) {
                button.style.display = "none";
                break;
            } else {
                button.style.display = "block";
            }

            const promise = FetchAPI(pokemon.url);
            pokePromises.push(promise);
        }

        return pokePromises;
    }

    function createPokemonCard(pokemon) {
        const pokemonCard = document.createElement("div");
        pokemonCard.className = "pokemon-card";
        pokemonCard.innerHTML = `
                <p class="id" > #${pokemon.id}</p>
                <div class="img" style =" background-image: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id
            }.png); " ></div>
            <h3 class="name" > ${capitalize(pokemon.name)} </h3>
                <div class="lable" >${createPokemonType(pokemon.types)}</div>
            `;
        return pokemonCard;
    }

    function createPokemonType(types) {
        return types
            .map(function (type) {
                return `<span class= " type ${type.type.name}"> ${type.type.name}</span> `;
            })
            .join("");
    }

    async function render() {
        const pokeData = await Promise.all(createPromiseList());

        pokeData.forEach(function (pokemon) {
            const element = createPokemonCard(pokemon);
            container.appendChild(element);
        });

        limit += 36;
    }

    container.innerHTML = "";
    render();

    button.addEventListener("click", render);

    input.addEventListener("input", function () {
        
        filteredPokemons = pokemons.filter(function (pokemon) {
            return pokemon.name.includes(input.value);
        });

        container.innerHTML = "";
        counter = 0
        limit = 36
        render();
    });

    function capitalize(word) {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
})();
