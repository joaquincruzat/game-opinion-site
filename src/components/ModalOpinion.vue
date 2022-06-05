<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" :id="index">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h5>Ingresa una opinión sobre el juego: {{ pordefinir }}</h5>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="form-group">
                <label for="name">Nombre:</label>
                <input
                  class="w-100"
                  type="text"
                  placeholder="Ingrese su nombre"
                  v-model="nameUser"
                />
              </div>
              <div class="form-group">
                <label for="textarea">Opiniones:</label>
                <textarea
                  placeholder="Escriba su opinión aquí"
                  name="opinion"
                  id=""
                  class="w-100"
                  cols="40"
                  rows="10"
                  v-model="opinion"
                ></textarea>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button btn btn-secondary" @click="$emit('close')">
                Cerrar
              </button>
              <button
                class="modal-default-button btn btn-primary"
                @click="addOpinionModal"
                type="button"
              >
                Enviar
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ModalOpinion',
  data: () => ({
    nameUser: ' ',
    opinion: ' '
  }),
  props: { show: Boolean, id: Object },
  computed: {
    ...mapGetters(['gameByID']),
    game() {
      const { id } = this
      return this.gameByID(id)
    }
  },
  methods: {
    ...mapActions('opinionUser', ['addOpinion']),
    addOpinionModal() {
      this.addOpinion({
        nameUser: this.nameUser,
        opinion: this.opinion
      })
      ;(this.nameUser = ''), (this.opinion = ''), this.$emit('close')
    }
  }
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
