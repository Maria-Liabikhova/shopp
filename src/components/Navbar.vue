<template>
  <div>
    <v-navigation-drawer app  temporary v-model="sideNav" >
       <v-list>
        <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        @click="onLogout"
        v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>mdi-account-arrow-right-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'Logout'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar dense  :class="[isMobile]">
        <v-app-bar-nav-icon color="#9c0202" @click="sideNav = !sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">
          <router-link
          to='/'
          class="pointer"
          tag="span"
          :class="[isMobile]"
          >
            Online Store
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="#9c0202"
        v-for="(link, i) in links"
        :key="i"
        :to="link.url"
        class="hidden-sm-and-down"
        >
          <v-icon color="#9c0202" left>{{link.icon}}</v-icon>{{ link.title }}
        </v-btn>
        <v-btn text color="#9c0202"
        @click="onLogout"
        v-if="isUserLoggedIn"
        >
          <v-icon color="#9c0202">mdi-account-arrow-right-outline</v-icon>Logout
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    },
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Cart', icon: 'mdi-cart', url: '/checkout'},
          { title: 'New Product', icon: 'mdi-cart-plus', url: '/new'},
          { title: 'My Product', icon: 'mdi-playlist-edit', url: '/list'}
        ]
      }
      return [
        { title: 'login', icon: 'mdi-account-box', url: '/login'},
        { title: 'Register', icon: 'mdi-face', url: '/registern'}
      ]
    },
    isMobile() {
      return this.$store.getters.isMobile
    },
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>