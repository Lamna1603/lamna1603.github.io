<script setup>

import { ref, onMounted } from 'vue';

const props = defineProps({
    pokemon: Object
})

defineEmits(['close'])


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


const description = ref("")
const evolution = ref("")
const loading = ref(null)

const getPokemonDescription = async (speciesUrl) => {

    loading.value = true

    try {
        const data = await fetchAPI(speciesUrl)

        if (data) {
            const flavor = data.flavor_text_entries.find(
                (entry) => entry.language.name === "en"
            )
            description.value = flavor ? flavor.flavor_text : "No description available."

            const evolutionData = await fetchAPI(data.evolution_chain.url)
            if (evolutionData) {
                evolution.value = parseEvolutionChain(evolutionData.chain)
            }
        }

    } catch (error) {
        console.log("Loi khi fetchDetail: ", error)
        description.value = "Failed to load description."

    } finally {
        loading.value = false
    }
}

const parseEvolutionChain = (chain) => {
    let evolutions = []
    let current = chain

    while(current){
        evolutions.push({
            name: current.species.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(current.species.url)}.png`
        })
        current = current.evolves_to.length ? current.evolves_to[0] : null
    }

    return evolutions
}

const getPokemonIdFromUrl = (url) => {
    const parts = url.split("/")
    return parts[parts.length - 2]
}
onMounted(() => {

    if (props.pokemon.species) {
        getPokemonDescription(props.pokemon.species.url)
    }
})

</script>

<template>

    <p v-if="loading" class="loading">Getting data from PokéDex...</p>


    <div v-else class="container">


        <button class="back-btn" @click="$emit('close')">> Back</button>

        <div class="wrapper">
            <div class="col-full">
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
                    class="img">
                <div class="types">
                    <span v-for="(type, index) in pokemon.types" :key="index" :class="`type ${type.type.name}`">
                        {{ type.type.name }}
                    </span>
                </div>
                <h2 class="name">{{ pokemon.name }}</h2>
                <p class="entry">{{ description }}</p>
                <div class="detail__wrap">
                    <div>
                        <h3 class="label">Height</h3>
                        <div class="detail-tag">{{ pokemon.height }}</div>
                    </div>
                    <div>
                        <h3 class="label">Weight</h3>
                        <div class="detail-tag">{{ pokemon.weight }}</div>
                    </div>
                </div>
                <div class="ability">
                    <h3 class="label">Abilities</h3>
                    <div class="detail__wrap">
                        <div v-for="(ability, index) in pokemon.abilities" :key="index" :class="`detail-tag`">
                            {{ ability.ability.name }}
                        </div>
                    </div>
                </div>

                <div class="stats">
                    <h3 class="label">Stats</h3>
                    <div class="detail__wrap">
                        <div v-for="(stat, index) in pokemon.stats" :key="index" class="tag">
                            <div class="tag__label" :class="stat.stat.name">{{ stat.stat.name }}</div>
                            <div class="tag__detail" data-v-7347d555="">{{ stat.base_stat }} </div>

                        </div>

                    </div>
                </div>
                <div class="evolution">
                    <h3 class="label">Evolution</h3>


                    <div class="evolution__wrap">
                        <div v-for="(evo,index) in evolution" :key="index" class="evolution" >
                            <div class="form" >
                                <h4 class="name">{{ evo.name }}</h4>
                                <img :src="evo.image" :alt="evo.name">
                            </div>
                        </div>
                        <div v-if="index < evolution.length - 1" class="divider">&gt;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: x-large;
}

.back-btn {
    display: block;
    position: fixed;
    top: 5%;
    left: 5%;
    border-radius: 30px;
    padding: 5px 10px;
    box-shadow: #63636333 0 4px 8px;
    z-index: 999;
}

.name {
    white-space: nowrap;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
}

.img {
    width: 200px;
    height: 200px;
    margin: auto;
    background-size: cover;
    padding-top: 0;
}

.types {
    display: flex;
    justify-content: center;
}

.entry {
    margin-bottom: 10px;
}

.detail__wrap {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
}

.label {
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
}

.detail-tag {
    width: 100px;
    margin: 5px;
    padding: 2px;
    border-radius: 30px;
    background-color: #f6f8fc;
    text-align: center;
    text-transform: capitalize;
}

.tag {
    margin: 5px;
    padding: 5px;
    background-color: #f6f8fc;
    border-radius: 30px;
    box-shadow: #63636333 0 2px 8px;
}

.tag__label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.tag__detail {
    text-align: center;
}

.hp {
    background-color: #df2140
}

.attack {
    background-color: #ff994d
}

.defense {
    background-color: #eecd3d
}

.special-attack {
    background-color: #85ddff
}

.special-defense {
    background-color: #96da83
}

.speed {
    background-color: #fb94a8
}


.evolution__wrap {
    display: flex;
    justify-content: center;
}


@media (min-width: 768px) {
    .evolution[data-v-ddf19879] {
        flex-direction: row;
    }
}

.evolution[data-v-ddf19879],
.divider[data-v-ddf19879],
.form[data-v-ddf19879] {
    display: flex;
    justify-content: space-around;
}

.divider[data-v-ddf19879] {
    align-items: center;
    font-weight: 700;
    margin-right: 10px;
}


.form[data-v-ddf19879] {
    align-items: center;
}

.evolution .name[data-v-ddf19879] {
    white-space: nowrap;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
}
</style>
