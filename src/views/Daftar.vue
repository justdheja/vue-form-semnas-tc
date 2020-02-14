<template>
  <div class="daftar">
    <div class="container">
      <h1 class="title">Daftar</h1>
      <div class="form">
        <b-field label="Nama" :label-position="labelPosition">
            <b-input value="" placeholder="Masukkan Nama" v-model="namaPeserta"></b-input>
        </b-field>
      </div>
      <div class="form">
        <b-field label="Email" :label-position="labelPosition">
            <b-input type="email" value="" placeholder="Masukkan Email" v-model="emailPeserta"></b-input>
        </b-field>
      </div>
      <div class="form">
        <b-field label="Asal Institusi" :label-position="labelPosition">
            <b-input value="" placeholder="Masukkan Asal Institusi" v-model="asalPeserta"></b-input>
        </b-field>
      </div>
      <div class="form">
        <b-field label="No HP/ID Line" :label-position="labelPosition">
            <b-input value="" placeholder="Masukkan No HP/ID Line" v-model="kontakPeserta"></b-input>
        </b-field>
      </div>
      HTM: Rp 60.000,00
      <div class="form">
        <b-field label="Pembayaran Via">
          <div class="block">
            <b-radio v-model="pembayaranPeserta"
                  name="name"
                  native-value="Transfer">
                Transfer
            </b-radio>
            <b-radio v-model="pembayaranPeserta"
                  name="name"
                  native-value="Offline">
                Offline
            </b-radio>
          </div>
        </b-field>

      <p v-if="pembayaranPeserta == 'Transfer'">
        Silakan melakukan pembayaran ke rekening: <br>
        755222458 <strong>BNI</strong> <br>
        a.n Dimas Sofian Ashari
      </p>
      <p v-if="pembayaranPeserta == 'Offline'">
        Pembayaran offline akan dibuka di bulan Februari
      </p>
      </div>


      <div class="buttons">
        <router-link to="/Success">
        <button class="button is-success"
            @click="submitData()"
            >
            <b-icon pack="fas" icon="check"></b-icon>
            <span>Submit</span>
        </button>
        </router-link>

        <button class="button is-danger"
            @click="reset()"
            >
            <b-icon pack="fas" icon="trash"></b-icon>
            <span>Reset</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { pesertaCollection } from '../firebase'
export default {
  data(){
    return {
      labelPosition: 'on-border',
      namaPeserta:'',
      emailPeserta: '',
      asalPeserta: '',
      kontakPeserta: '',
      pembayaranPeserta: '',
      pesertas: []
    }
  },
  firestore(){
    return {
      pesertas: pesertaCollection.orderBy('RegisterAt')
    }
  },
  methods: {
    submitData(){
      if(this.namaPeserta != '' && this.emailPeserta != '' && this.asalPeserta != '' && this.kontakPeserta != '' && this.pembayaranPeserta != ''){
        pesertaCollection.add({
          Nama: this.namaPeserta,
          Email: this.emailPeserta,
          Asal: this.asalPeserta,
          Kontak: this.kontakPeserta,
          Pembayaran: this.pembayaranPeserta,
          Status: 'Unpaid',
          RegisterAt: new Date(),
          id: this.pesertas.length
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
        console.log(this.namaPeserta, this.emailPeserta, this.asalPeserta, this.pembayaranPeserta)
        this.success()
      } else {
        this.danger()
      }
    },
    danger() {
        this.$buefy.toast.open({
            duration: 5000,
            message: `Data tidak boleh kosong`,
            position: 'is-top',
            type: 'is-danger'
        })
    },
    reset(){
      this.namaPeserta = ''
      this.emailPeserta = ''
      this.asalPeserta = ''
      this.kontakPeserta = ''
      this.pembayaranPeserta = ''
      this.$buefy.toast.open('Data direset')
    },
    success(){
      this.namaPeserta = ''
      this.emailPeserta = ''
      this.asalPeserta = ''
      this.kontakPeserta = ''
      this.pembayaranPeserta = ''
      this.$buefy.toast.open({
        message: `Pendaftaran Berhasil`,
        position: 'is-top',
        type: 'is-success'
      })
    },
    toast() {
        this.$buefy.toast.open('Data direset')
    },
  }
}
</script>

<style>
  .daftar{
    padding: 10%;
  }
  .title{
    text-align: center;
  }
  .form{
    margin-bottom: 18px
  }
  .button{
    margin-right: 5px;
  }
</style>
