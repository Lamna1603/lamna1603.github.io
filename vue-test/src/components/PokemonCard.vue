<template>

<div class="pokemon-card">
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

<script setup>
defineProps({
    pokemon: Object
})
</script>

<style scoped>


.type {
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px
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

.bug {
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

.water {
    background-color: #6390f0
}

.grass {
    background-color: #78cd54
}

.electric {
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

