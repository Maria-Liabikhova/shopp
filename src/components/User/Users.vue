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
              <!-- <v-list>
                <v-list-item
                  v-for="([icon, text], i) in items"
                  :key="i"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="8" xs='8' sm='8' md='9'
        >
          <v-row>
            <v-col  cols="6" xs='6' sm='6' md='4'
              v-for="crmUser in crmUsers"
              :key="crmUser.id">
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
          ['mdi-email', 'Inbox'],
          ['mdi-account-supervisor-circle', 'Supervisors'],
          ['mdi-clock-start', 'Clock-in'],
        ],
        crmUsers: [
          { 
            imgSrc:'https://putoclub.ru/wp-content/uploads/Genialnost-Leonardo-da-Vinchi..jpg',
            surname: 'DaVinchi',
            name: 'Leonardo',
            id: 1,
            gender: 'Male',
            role: 'Admin'
          },
          { 
            imgSrc:'https://vaidebolsa.com.br/wp-content/uploads/2019/11/mulheres.jpg',
            surname: 'Curie',
            name: 'Marie',
            id: 2,
            gender: 'Female',
            role: 'Editor'
          },
          { 
            imgSrc:'https://avatars.mds.yandex.net/get-zen_doc/1856956/pub_5de3625d5d636200b075b762_5de363401ee34f00afa7cab6/scale_1200',
            surname: 'Einstein',
            name: 'Albert',
            id: 3,
            gender: 'Male',
            role: 'Client'
          },
          { 
            imgSrc:'https://media.studomat.ba/2017/11/jung-tipovi-licnosti.jpg',
            surname: 'Jung',
            name: 'Carl Gustav',
            id: 4,
            gender: 'Male',
            role: 'Editor'
          },
          { 
            imgSrc:'https://cdn.ruposters.ru/newsbody/7/7f392408583379a8ecc9aff3ba4d7fd7.jpg',
            surname: 'Pavlov',
            name: 'Ivan Petrovich',
            id: 5,
            gender: 'Male',
            role: 'Admin'
          },
          { 
            imgSrc:'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRT4Lyn5E4RlJzI20uRJmtFA',
            surname: 'II',
            name: 'Ekaterina',
            id: 6,
            gender: 'Female',
            role: 'Guest'
          },
        ]
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>
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
</style>