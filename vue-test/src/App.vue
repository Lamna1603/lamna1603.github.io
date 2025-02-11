<script setup>

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

</script>

<template>
<div id="app">
        <div class="container">
            <div class="wrapper header-wrap">
                <div class="heading">
                    <h2>Pokemon API</h2>
                </div>
                <div class="search__wrap">
                    <input class="search" type="text" placeholder="Search some Pokemon...">
                </div>
            </div>

            <div class="wrapper pokemon-container">
            </div>
            
            <div class="wrapper">
                <div class="col-full">
                    <button class="btn">Load More</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

/* base */


*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    position: relative;
    font-weight: 4000; 
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.container {
    max-width: 1200px;
    margin: 50px auto;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
}


.pokemon-card{

--width: 50%;
--offset: 10px;
max-width: calc(var(--width) - calc(var(--offset)));
flex-basis: calc(var(--width) - calc(var(--offset)));
text-align: center;
margin: 0 calc(var(--offset) / 2);
margin-bottom: var(--offset);
padding: 10px;
border-radius: 15px;
box-shadow: #0000001a 0 4px 12px;
transition: all .25s cubic-bezier(.02,.01,.47,1);
transform: translateZ(0);
cursor: pointer;

}

.pokemon-card:hover{
    box-shadow: 0 5px 11px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 0, 0, 0.1),
                -5px 0 10px rgba(0, 0, 0, 0.1), 5px 0 10px rgba(0, 0, 0, 0.1);

}
@media (min-width: 768px) {
    .pokemon-card {
        --width: 33.33%;
        --offset: 10px;
    }
}


@media (min-width: 960px) {
    .pokemon-card {
        --width: 25%;
        --offset: 10px;
    }
}
@media (min-width: 1200px) {
    .pokemon-card {
        --width: 16.66%;
        --offset: 10px;
    }
}



.header-wrap {
    flex-direction: column;
    align-items: center;
}

.heading {
    font-size: 25px;
    margin-bottom: 50px;
}

.search__wrap {
    max-width: 500px;
    width: 100%;
    margin: 0 15px 50px;
}

.search {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 30px;
    outline: 1px solid #00000036;
    box-shadow: #64646f33 0 7px 29px;
    font-size: 16px;
    transition: all .2s ease;
}

input:focus {
    border: 1px solid black; /* Màu xanh lá khi tập trung */
    outline: none; /* Xóa viền mặc định của trình duyệt */
  }

.col-full {
    display: flex;
    padding-top: 50px;
    width: 100%;
    text-align: center;
    justify-content: center;
}

.btn {
    cursor: pointer;
    padding: 20px 25px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #ff4d4f;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    -webkit-transition: all .25s cubic-bezier(.02,.01,.47,1);
}

.btn:hover {
    background-color: #ff7875
}

.btn:active {
    background-color: #d9363e
}

.img {
    padding-top: 100%;
    background-size: contain;
}



.type {
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px,#00000014 0 0 0 1px
}

.normal {
    background-color: #a8a77a
}

.fighting {
    background-color: #c22e28
}

.flying {
    background-color: #a98ff3
}

.poison {
    background-color: #a33ea1
}

.ground {
    background-color: #e2bf65
}

.rock {
    background-color: #b6a136
}

.bug{
    background-color: #a6b91a
}

.ghost {
    background-color: #735797
}

.steel {
    background-color: #b7b7ce
}

.fire {
    background-color: #ff421c
}

.water{
    background-color: #6390f0
}

.grass {
    background-color: #78cd54
}

.electric{
    background-color: #f7d02c
}

.psychic {
    background-color: #f95587
}

.ice {
    background-color: #96d9d6
}

.dragon {
    background-color: #6f35fc
}

.dark {
    background-color: #705746
}

.fairy {
    background-color: #d685ad
}

.unknow {
    background-color: #68a090
}

.shadow {
    background-color: #735797
}
</style>
