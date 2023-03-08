<template>
  <div class="parent">
    <the-header class="div1" />
    <login class="login-div" v-if="store.isLoggedIn === false" />
    <nav-bar class="div2" v-else-if="store.isLoggedIn === true" />

    <RouterView class="div3" v-else-if="store.isLoggedIn === true" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import TheHeader from '@/components/ui/TheHeader.vue'
import NavBar from '@/components/layout/NavBar.vue'
import Login from '@/components/auth/Login.vue'

const store = useUserStore()
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.parent {
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 13; }
.div2 { grid-area: 2 / 1 / 8 / 3; }
.div3 { grid-area: 2 / 3 / 8 / 13; }
.login-div { grid-area: 3 / 5 / 7 / 9; }

</style>