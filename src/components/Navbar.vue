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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar dense color="green">
        <v-app-bar-nav-icon color="#9c0202" @click="sideNav = !sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">
          <router-link
          to="/"
          class="pointer"
          tag="span"
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
      links: [
        { title: 'login', icon: 'mdi-account-box', url: '/login'},
        { title: 'Register', icon: 'mdi-face', url: '/registern'},
        { title: 'Cart', icon: 'mdi-cart', url: '/checkout'},
        { title: 'New Product', icon: 'mdi-cart-plus', url: '/new'},
        { title: 'My Product', icon: 'mdi-playlist-edit', url: '/list'},
      ]
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>