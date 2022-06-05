<template>
  <div>
    <div v-if="opinionUser == false" class="alert alert-danger mt-5" role="alert">
      Aún no hay opiniones para administrar
    </div>
    <div v-else class="alert alert-primary mt-5" role="alert">
      Hay nuevas opiniones para administrar
    </div>
    <table class="table" v-for="(opinion, index) in opinionUser" :key="index">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título del Juego</th>
          <th scope="col">Nombre de Usuario</th>
          <th scope="col">Opinión</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>Por definir</td>
          <td>{{ opinion.nameUser }}</td>
          <td>{{ opinion.opinion }}</td>
          <td>
            <button class="btn btn-primary" @click="redirectEdition(index)">Editar</button>
            <button class="btn btn-danger boton-eliminar" @click="opinionUser.splice(index, 1)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('opinionUser', {
      opinionUser: (state) => state.opinionList
    }),
    methods: {
      ...mapActions('opinionUser', ['removeOpinion']),
      redirectEdition(index) {
        this.$router.push(`/administracion/${index}`)
      }
    }
  }
}
</script>

<style>
.boton-eliminar {
  margin-left: 5px;
}
</style>
