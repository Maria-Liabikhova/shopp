<template>
  <v-container>
    <v-row v-if="!loading && myProducts.length !== 0">
      <v-col cols="12" sm='8' offset-sm='2' m='6' offset-m='3'>
        <h1 class="text--secondary mb3">My products</h1>
        <v-card class="elevation-10 mb-2"
        v-for="product in myProducts"
        :key="product.id"
        >
          <v-container>
            <v-row>
              <v-col cols="4" >
                <v-img class="product__img" :src="product.imageSrc" height="250px"></v-img>
              </v-col> 
              <v-col cols="8">
                <v-card-text>
                  <h2 class="text--primary">{{product.title}}</h2>
                  <p>{{ product.description}} </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer>
                    <v-btn  color="success" class="info"
                    :to="'/product/' + product.id"
                    >Open</v-btn>
                  </v-spacer>
                </v-card-actions>
              </v-col> 
            </v-row>
          </v-container>  
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="!loading && myProducts.length ===0">
      <v-col xs="12" class="text-center">
        <h1 class="text-primary">You have no products</h1>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col xs="12" class="text-center">
        <section class="text-center">
          <v-progress-circular
            :size="100"
            :width="4"
            indeterminate
            color="purple"
          ></v-progress-circular>
    </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myProducts() {
      return this.$store.getters.myProducts
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
</style>