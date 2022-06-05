<template>
  <div>
    <body>
      <div class="container">
        <div class="row py-5">
          <div class="col-12 col-sm-3 mb-4" v-for="(game, index) in games" :key="index">
            <GamesCards :game="game" />
          </div>
        </div>
      </div>
    </body>
    <router-view />
  </div>
</template>

<script>
import GamesCards from '../components/GamesCards'
import { mapState } from 'vuex'
export default {
  name: 'homeView',
  components: { GamesCards },
  computed: {
    ...mapState(['games'])
  }
}
</script>
<style>
/* .cards {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  vertical-align: top;
  align-items: flex-start;
} */
</style>
