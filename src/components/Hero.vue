<template>
  <div>
    <section class="hero is-primary is-fullheight" :style="'background-image:url('+bg+'); background-size: cover; background-position: center center; background-attachment: fixed'">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            NATIONAL SEMINAR
          </h1>
          <h2 class="subtitle">
            Technocorner 2020
          </h2>
          <h3 class="heading">
            Presented by. Grab
          </h3>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-centered is-fullwidth">
          <div class="container">
            <ul>
              <router-link to="/">
              <li class="navitem">
                <a>
                  <h1 class="navitem alata">
                    Tentang Semnas
                  </h1>
                </a>
              </li>
              </router-link>
              <router-link to="/Daftar">
              <li>
                <a>
                  <h1 class="navitem alata">
                    Daftar
                  </h1>
                </a>
              </li>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import bg from '../assets/background.png'
import tc from '../assets/fonts/CorporationGames.otf'
export default {
  data(){
    return {
      bg: bg,
      tc: tc,
    }
  }
}
</script>

<style>

</style>
