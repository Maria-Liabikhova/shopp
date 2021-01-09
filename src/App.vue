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
      function isSize() {
        if (window.innerWidth < 600) return "xs"
        if (window.innerWidth >= 600  && window.innerWidth < 960 ) return "sm"
        if (window.innerWidth >=  960 && window.innerWidth < 1264) return "md"
        if (window.innerWidth >= 1264 && window.innerWidth < 1904) return "lg"
        return "xl"
      }
      this.$store.dispatch('setMobile', isSize())
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
  .xs {
    font-family: cursive;
    border: 1px solid rgb(162, 141, 70);
    background-color: green !important;
  }
  .sm {
    background-color: salmon !important;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    font-family: fantasy;
    color: indigo 
  }
  .md {
    background-color: rgb(114, 168, 250) !important;
    border: 5px dashed rgb(201, 113, 111);
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(130, 0, 39) 
  }
  .lg {
    background-color: rgb(144, 27, 173) !important;
    border: 2px solid rgb(199, 22, 60);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgb(108, 215, 242) 
  }
  .xl {
    background-color: rgb(243, 189, 183) !important;
    border-bottom: 3px dashed rgb(104, 50, 205);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: aliceblue ;
  }
</style>
