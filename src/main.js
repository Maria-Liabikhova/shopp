import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyCRs8kqrm4C2kS56QnfSqKJDjrvtElbYEs',
      authDomain: 'shopp-bd4ed.firebaseapp.com',
      projectId: 'shopp-bd4ed',
      storageBucket: 'shopp-bd4ed.appspot.com',
      messagingSenderId: '140581163183',
      appId: '1:140581163183:web:b0acef7a38882c4400045a',
      measurementId: 'G-Q4450Q9M30'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig),
    // firebase.analytics()
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    }),
    this.$store.dispatch('fetchProducts')
  }
})
.$mount('#app');
