<script setup>
import { ref, onMounted, computed } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
// import pokemonDetail from './components/pokemonDetail.vue'


const fetchAPI = async (URL) => {
    try {
        const response = await fetch(URL)


        const result = await response.json()
        return result
    }
    catch (error) {
        console.log("Error in fetchAPI", error);

    }
}


let pokemons = []
const offset = ref(0)
const limit = 12
const pokemonList = ref([])
const renderPokemons = computed(() => pokemonList.value.slice(0, offset.value + limit))
const selectpokemon = ref(null);

const fetchPokemon = async () => {
    const data = await fetchAPI("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898")
    if (data && data.results) {

        for (const pokemon of data.results) {
            const pokemonData = await fetchAPI(pokemon.url)
            pokemonList.value.push(pokemonData)
            pokemons.push(pokemonData)
        }
    }
}
// fetchPokemon()
const loadMore = () => {
    offset.value += limit
}

const search = (event) => {
    pokemonList.value = pokemons.filter((pokemon) => {
        return pokemon.name.includes(event.target.value)
    })

    offset.value = 0
}


const handelPokemon = (pokemon) => {
    selectpokemon.value = pokemon
}

const closeDetail = () => {
    selectpokemon.value = null
}

onMounted(() => {
    fetchPokemon()
})

//design pattter
//js reactivity


</script>

<template>

    <div>


        <div id="app">
            <div class="container">

                <pokemonDetail v-if="selectpokemon" :pokemon="selectpokemon" @close="closeDetail" />

                <template v-else>


                    <div class="wrapper header-wrap">
                        <div class="heading">
                            <h2>Pokemon API</h2>
                        </div>
                        <div class="search__wrap">
                            <input class="search" type="text" placeholder="Search some Pokemon..." @input="search">
                        </div>
                    </div>

                    <div class="wrapper pokemon-container">
                        <PokemonCard v-for="(pokemon, index) in renderPokemons" :key="index" :pokemon="pokemon"
                            @selectpokemon="handelPokemon(pokemon)" />
                    </div>

                    <div class="wrapper">
                        <div class="col-full">
                            <button v-show="pokemonList.length > limit" class="btn" @click="loadMore">Load More</button>
                        </div>
                    </div>

                </template>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* base */

</style>
