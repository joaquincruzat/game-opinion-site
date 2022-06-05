<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: { NavBar },
  methods: { ...mapActions(['getGames']) },
  mounted() {
    this.getGames()
  }
}
</script>
