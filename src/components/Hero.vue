<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Technocorner 2020
          </h1>
          <h2 class="subtitle">
            Semnas
          </h2>
          <h3 class="heading">
            Presented by. Sponsornya
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
                  <h1 class="navitem">
                    Tentang Semnas
                  </h1>
                </a>
              </li>
              </router-link>
              <router-link to="/Daftar">
              <li>
                <a>
                  <h1 class="navitem">
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

<style>
  .hero{
    margin-bottom: 10%;
  }
</style>
