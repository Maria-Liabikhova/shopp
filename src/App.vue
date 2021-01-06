<template>
  <v-app>
    <Navbar/>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn
          dark
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {Navbar},
  created() {
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onResize() {
      this.$store.dispatch('setMobile', this.isMobile= window.innerWidth > 991 ? true :  false);
    },
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
}
</script>

<style>
  .mobile {
    font-family: cursive;
    border: 1px solid rgb(162, 141, 70);
    background-color: green !important;
  }
  .desktop {
    background-color: salmon !important;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    font-family: fantasy;
    color: indigo 
  }
</style>
