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
      this.isMobile = window.innerWidth > 991 ? false : true;
      this.$store.dispatch('setMobile', this.isMobile)
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
}
</script>
