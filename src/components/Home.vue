<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-row>
        <v-col  sm='12'>
          <!-- <v-carousel  :progress="true" :cycle="true" :interval=3000> -->
          <v-carousel>
            <v-carousel-item
            v-for="product in promoProducts"
            :key="product.id"
            :src="product.imageSrc"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col xs='12' sm='6' md='4'
        v-for="product in products"
        :key="product.id"
        >
          <v-card class="mx-auto">
            <router-link
            :to="'/product/'+ product.id"
            >
              <v-img
                :src="product.imageSrc"
                height="250px"
              >
              </v-img>
            </router-link>
            <v-card-title class="card__heading heading">
              {{product.title}}
            </v-card-title>
            <v-card-subtitle class="card__describe"> 
              <p class="subheading">{{product.description.substring(0,60)}}...</p>
              <p class="subheading card__price"><span class="title">Price: ${{product.price}}</span></p>
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text rounded outlined small :to="'/product/'+ product.id">Description</v-btn>
              <v-btn  color="green" small text outlined rounded>Add to card</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-col xs="12" class="text-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            indeterminate
            color="purple"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoProducts () {
      return this.$store.getters.promoProducts
    },
    products () {
      return this.$store.getters.products
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .card__heading {
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card__describe {
    margin-top: auto;
    padding-left: 1rem;
  }
  .card__price {
    color: rgb(137, 10, 10);
    font-size: 18px;
  }
</style>