<template>
  <form @submit.prevent="editButton" class="container mt-5">
    <div class="form-group">
      <h2>{{}}</h2>
      <label>Nombre</label>
      <input
        v-model="nombreOpinion"
        :placeholder="opinionUser[$route.params.id].nombre"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label>Opiniones</label>
      <textarea
        v-model="textoOpinion"
        :placeholder="opinionUser[$route.params.id].opinion"
        class="form-control"
        rows="3"
        required
      ></textarea>
    </div>
    <button type="submit" class="ml-2 btn btn-primary">Editar</button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    nameUser: '',
    opinion: ''
  }),
  methods: {
    ...mapActions('opinionUser', ['editOpinion']),
    editarOpinionBoton() {
      this.editarOpinion([
        { id: this.$route.params.id },
        {
          // titulo: this.opiniones[this.$route.params.id].titulo,
          nombre: this.nameUser,
          opinion: this.opinion
        }
      ])
      this.$router.push(`/administracion/`)
    }
  },
  computed: {
    ...mapState('opinionUsers', {
      opinionUsers: (state) => state.listado
    })
  }
}
</script>

<style></style>
