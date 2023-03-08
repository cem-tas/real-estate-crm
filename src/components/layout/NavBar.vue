<template>
  <div>
    <div class="side-nav">
      <button class="nav-header" @click="store.toggleNavBody1">
        <h3>Projeler</h3>
        <i :class="['fa', store.isNavBodyOpen1 ? 'fa-caret-down' : 'fa-caret-right']"></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen1 }">
        <RouterLink class="nav-button" to="/">İncele</RouterLink>
        <RouterLink class="nav-button" to="/">Ekle</RouterLink>
        <RouterLink class="nav-button" to="/">Düzenle</RouterLink>
      </div>
      <button class="nav-header" @click="store.toggleNavBody2">
        <h3>Kullanıcılar</h3>
        <i :class="['fa', store.isNavBodyOpen2 ? 'fa-caret-down' : 'fa-caret-right']"></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen2 }">
        <RouterLink class="nav-button" to="/">Kullanıcı Ekle</RouterLink>
        <RouterLink class="nav-button" to="/">Kullanıcıları Düzenle</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from '@/stores/navbar.js'
import { useUserStore } from '@/stores/user.js'

const store = useNavStore()
const userStore = useUserStore()
</script>

<style>
.side-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}

.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  cursor: pointer;
}

.nav-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.nav-header i {
  font-size: 1.2rem;
  transform: rotate(90deg);
  transition: all 0.3s;
}

.nav-header.active i {
  transform: rotate(0deg);
}

.nav-body {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;
  padding: 0 2rem;
}

.nav-body.active {
  max-height: 500px;
  padding: 1rem 2rem;
}

.nav-button {
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
  text-decoration: none;
  color: #333;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #f7f7f7;
}
</style>
