// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./App.vue";
// import "./assets/base.css";

// import { createWebHistory, createRouter } from "vue-router";

// import HomeView from "./views/HomeView.vue";
// import pokemonDetail from "./components/pokemonDetail.vue";
// createApp(App).mount("#app");

// const routers = [
//   {
//     path: "/",
//     component: HomeView,
//   },
//   {
//     path: "/pikachu",
//     component: pokemonDetail,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routers,
// });

// createApp(App).use(router).mount("#app");

// // ajax
// //state
// //hoisting
// //v-modle ==> su ly form
// //slots
// //props
// //lifecycle hooks
// //solid
// //kiss


import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import PokemonDetail from './components/pokemonDetail.vue' // Sửa tên đúng


import "./assets/base.css";


const routes = [  // Đổi từ 'routers' thành 'routes'
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/:id',
        component: PokemonDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // Đổi 'routers' thành 'routes'
})

const app = createApp(App)
app.use(router)
app.mount("#app") // Chỉ mount một lần

//sessionStorage
//navigation
