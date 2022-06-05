<template>
  <div class="card">
    <img class="card-img-top w-100" :src="game.background_image" />
    <div class="card-body">
      <h4 class="card-title text-capitalize">{{ game.name }}</h4>
      <hr />
      <p class="card-text">
        <b>Rating:</b>
        {{ game.rating }}
      </p>
      <hr />
      <p class="card-text">
        <b>Lanzamiento:</b>
        {{ game.released }}
      </p>
      <hr />
      <p class="card-text">
        <b>Actualizado:</b>
        {{ game.updated }}
      </p>
    </div>
    <div class="card-text mb-3">
      <div class="d-flex justify-content-around">
        <button class="btn btn-info text-white" @click="showModal = true">Opinar 💬</button>
        <ModalOpinion :show="showModal" @close="showModal = false"> </ModalOpinion>
      </div>
    </div>
  </div>
</template>

<script>
import ModalOpinion from './ModalOpinion.vue'
export default {
  data() {
    return {
      showModal: false
    }
  },
  name: 'GamesCards',
  props: ['game'],
  components: { ModalOpinion }
}
</script>
