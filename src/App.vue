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
      function isMob() {
        let screen = window.innerWidth;
        if ( screen <= 319 ) return "mobile";
        else if ( screen > 319 && screen <= 767) return "small";
        else if ( screen > 767 && screen <= 991) return "middle";
        else return "large";
      }
      this.$store.dispatch('setMobile', this.isMobile= isMob())
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
  .small {
    background-color: salmon !important;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    font-family: fantasy;
    color: indigo 
  }
  .middle {
    background-color: rgb(144, 27, 173) !important;
    border: 2px solid rgb(199, 22, 60);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgb(108, 215, 242) 
  }
  .large {
    background-color: rgb(243, 189, 183) !important;
    border-bottom: 3px dashed rgb(104, 50, 205);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: aliceblue ;
  }
</style>
