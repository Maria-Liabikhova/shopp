<template>
  <div>
    <v-navigation-drawer app  temporary><h1>HELLO</h1></v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar dense color="green">
        <v-app-bar-nav-icon color="#9c0202"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">Online Store</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="#9c0202">mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon color="#9c0202">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#9c0202">mdi-dots-vertical</v-icon>
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
  
}
</script>