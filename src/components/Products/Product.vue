<template>
  <v-container>
    <section class="product mt-3 elevation-10" v-if="!loading">
      <v-row wrap>
        <v-col xs="12" lg="6">
          <v-img :src="product.imageSrc" class="product_img"></v-img>
        </v-col>
        <v-col xs="12" lg="6">
          <div class="product_info">
            <h5 class="product_title display-1 mb-3 mt-3">{{product.title}}</h5>
            <p class="product_category ">
              <span class="product_title">Vendor:</span>
              {{product.vendor.charAt(0).toUppercase + product.vendor.substr(1)}}
            </p>
            <p class="product_price ">
              <span class="product_title">Price:</span>
              $ {{product.price}}
            </p>
            <p class="product_color ">
              <span class="product_title">Color:</span>
              <span
              :title="product.color"
              :style="{backgroundColor: product.color}"
              class="product_color__bg ml-2" ></span>
            </p>
            <p>
              <span class="product_title">Material:</span>
              {{product.material.charAt(0).toUppercase + product.material.substr(1)}}
            <div class=" mb-5">
              <p class="product_title mb-2">Discription</p>
              {{product.description}}
            </div>
            <!-- <v-btn color="success" class="headline" >Edit</v-btn> -->
            <EditProduct :product="product" v-if="isOwner"/>
            <v-btn color="success" class="headline ml-3">Buy</v-btn>
          </div>
        </v-col>
      </v-row>
    </section>
    <section v-else class="text-center">
      <v-progress-circular
        :size="100"
        :width="4"
        indeterminate
        color="purple"
      ></v-progress-circular>
    </section>
  </v-container>
</template>

<script>
import EditProduct from './EditProduct'
export default {
  props: ['id'],
  computed: {
    product () {
      const id = this.id
      return this.$store.getters.productById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.product.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    EditProduct
  }
}
</script>

<style scoped>
.product{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid green;
  padding: 30px;
  margin-bottom: 100px;
}
.product_img{
  height: 100%;
  width: 550px;
}
.product_info {
  margin-left: 50px;
}
.product_title {
  font-size: 1rem;
  font-weight: bold;
  color: green;
  margin-bottom: 0;
}
.product_price{
  color: red;
}
.product_color__bg{
  display: inline-block;
  height: 15px;
  width: 40px;
  border-radius: 10px;
  transform: translateY(25%);
}
</style>