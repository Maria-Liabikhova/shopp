<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-row>
        <CrmUserSidebar v-bind:filter="filter" v-bind:items="items"/>
      <!-- !!!!!! -->
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
  import CrmUserSidebar from './CrmUserSidebar.vue'
  export default {
     created() {
      console.log("фильтр:")
    },
    components: {CrmUserSidebar},
    data() { 
      return {
        filter: "All users",
        items: [
          { title: 'All users' },
          { title: 'Admin' },
          { title: 'Editor' },
          { title: 'Client' },
          { title: 'Guest' },
        ],
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
      },
    },
  }
</script>

<style scoped>
  .dropdown{
    background-color: rgb(65, 217, 255);
  }
  .dropdown:hover{
    background-color: rgb(15 102 231);
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
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    padding-left: 50px;
  }
</style>