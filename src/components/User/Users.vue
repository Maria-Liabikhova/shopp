<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-row>
        <v-col cols="4" xs='4' sm='4' md='3'>
          <v-card
          class="mx-auto"
            height="100%"
          >
            <v-navigation-drawer
              absolute
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
              width="100%"
              permanent
            >
              <div class="text-center menu">
                <v-menu offset-y open-on-hover>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      
                    >
                      Choose users
                    </v-btn>
                  </template>
                  <v-list >
                    <v-list-item
                      class="dropdown"
                      v-for="(item, index) in items"
                      :key="index"
                      @click="filter = item.title"
                    >
                      <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="8" xs='8' sm='8' md='9'
        >
          <v-row>
            <v-col  cols="6" xs='6' sm='6' md='4'
              v-for="crmUser in filteredList"
              :key="crmUser.id"
              >
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  :src="crmUser.imgSrc"
                  height="300px"
                ></v-img>
                <v-card-title>
                  <p class="card__subtitle">Name: <span class="card__name">{{crmUser.name}} {{crmUser.surname}}</span></p>
                </v-card-title>
                <v-card-subtitle>
                  <p class="card__subtitle">Id: <span class="card__describe">{{crmUser.id}}</span></p>
                  <p class="card__subtitle">Gender: <span class="card__describe">{{crmUser.gender}}</span></p>
                  <p class="card__subtitle">Role: <span class="card__describe">{{crmUser.role}}</span></p>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
  export default {
    data() { 
      return {
        items: [
          { title: 'All users' },
          { title: 'Admin' },
          { title: 'Editor' },
          { title: 'Client' },
          { title: 'Guest' },
        ],
        filter: "All users"
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      },
      crmUsers() {
        return this.$store.getters.crmUsers
      },
      filteredList () {
        if (this.filter === 'All users') {return this.crmUsers}
        if (this.filter === 'Admin') {return this.crmUsers.filter(t => t.role === 'Admin')}
        if (this.filter === 'Editor') {return this.crmUsers.filter(t => t.role === 'Editor')}
        if (this.filter === 'Client') {return this.crmUsers.filter(t => t.role === 'Client')}
        return this.crmUsers.filter(t => t.role === 'Guest')
      }
    },
  }
</script>

<style scoped>
  .dropdown{
    background-color: coral;
  }
  .dropdown:hover{
    background-color: darksalmon;
    cursor: pointer;
  }
  .card__name {
    color: black;
    font-weight: bold;
    font-size: 25px;
    word-break: keep-all
  }
  .card__subtitle {
    font-weight: bold;
    color: rgb(116, 116, 116);
    font-size: 20px;
    margin-bottom: 7px;
  }
  .card__describe {
    color: black;
    font-size: 16px;
  }
  .v-list {
    padding: 0;
  }
  .menu {
    padding-top: 50px;
  }
</style>