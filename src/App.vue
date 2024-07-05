<template>
  <div id="app" class="list2" style="margin-top:2em">
    <router-link style="margin-left:1em;color:white; text-decoration:none" to="/">Inicio</router-link>
    <br>
    <router-link style="margin-left:1em;color:white; text-decoration:none" to="/favorites">Favoritos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>


