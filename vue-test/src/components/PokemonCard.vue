<script setup>

import { useRouter } from 'vue-router'

const props = defineProps({
    pokemon: Object
})

const router = useRouter()

function viewPokemonDetail (){
    console.log(props.pokemon)
    sessionStorage.setItem('selectpokemon',JSON.stringify(props.pokemon))
    router.push('/' + props.pokemon.name)
}
</script>

<template>

<div class="pokemon-card" @click="viewPokemonDetail" >
    <p class="id"> #{{ pokemon.id }}</p>

                        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
                            alt="imgAvt" />

                        <h3 class="name"> {{ (pokemon.name) }} </h3>
                        <div class="lable">
                            <span v-for="(type, index) in pokemon.types" :key="index" :class="`type ${type.type.name}`">
                                {{ type.type.name }}</span>

                        </div>

                    </div>
</template>


