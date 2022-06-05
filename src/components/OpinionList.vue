<template>
  <div>
    <div v-if="opinionUser == false" class="alert alert-danger mt-5" role="alert">
      Aún no hay opiniones ingresadas en el sitio
    </div>
    <div v-else class="alert alert-primary mt-5" role="alert">
      Hay nuevas opiniones ingresadas en el sitio
    </div>
    <table class="table" v-for="(opinion, index) in opinionUser" :key="index">
      <thead>
        <tr>
          <th scope="col">Título del Juego</th>
          <th scope="col">Nombre de Usuario</th>
          <th scope="col">Opinión</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Por definir</td>
          <td>{{ opinion.nameUser }}</td>
          <td>{{ opinion.opinion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['nameUser', 'name', 'opinion'],
  computed: {
    ...mapState('opinionUser', {
      opinionUser: (state) => state.opinionList
    })
  }
}
</script>

<style></style>
