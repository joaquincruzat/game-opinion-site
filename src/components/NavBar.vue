<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{ name: 'home' }" class="navbar-brand" href="#"
        >🎮 Games Opinion</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">🏠 Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'OpinionesView' }" class="nav-link">🗣 Opiniones</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'AdministracionView' }" class="nav-link"
              >🖥 Administración</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
