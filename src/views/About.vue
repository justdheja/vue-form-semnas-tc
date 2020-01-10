<template>
  <div class="about">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <img class="poster" :src="poster" alt="">
            </div>
            <div class="column">
              <div class="card deskripsi">
                <div class="card-content">
                  <p class="montserrat">
                    Technocorner 2020 mengadakan sebuah seminar bertaraf nasional dengan tema <br> " Conforming Technology for a Better Nation". <br> Sosialisasi adalah suksesor bagi sebuah teknologi. Oleh sebab itu, dibutuhkan Seminar Nasional untuk memahamkan kepada ahli dan masyarakat luas bahwa integrasi teknologi bukan sekadar fiksi. <br> Semuanya kembali pada tujuan awal dibentuknya teknologi, yakni untuk memudahkan kerja manusia disetiap inci dan memajukan sebuah negeri. <br> Seminar Nasional ini bertujuan untuk mengenalkan kepada ahli dan masyarakat luas akan pentingnya integrasi teknologi di masa sekarang dan yang akan datang, demi mewujudkan efektivitas teknologi yang lebih maju. <br> Dengan integrasi teknologi yang baik, kehidupan akan menjadi lebih mudah, efisien, dan fleksibel.
                    <br>
                    <br>
                    <strong>Tanggal : </strong> 14 Maret 2020 <br>
                    <strong>Waktu  : </strong> 07.00 - 15.30 <br>
                    <strong>Tempat  : </strong> MM FEB UGM <br>
                  </p>

                    <br>
                    <div class="">
                      <router-link to="/Daftar">
                      <button class="button is-primary"
                          >
                          <span>Daftar di sini!</span>
                      </button>
                      </router-link>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poster from '../assets/poster.png'
export default {
  name: 'HelloWorld',
  data () {
    return {
      poster: poster
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    padding-left: 8%;
    padding-right: 8%;
  }
  .about{
    padding: 5%;
    background-color: #3f0a57;
  }
  .poster{
    /* width: 40%; */
    position: center;
  }
  .deskripsi{
    padding-right: 10%;
  }
</style>
