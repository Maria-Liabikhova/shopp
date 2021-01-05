<template>
  <v-container fluid>
    <v-row>
      <v-col xs='12' sm='6' offset-sm='3'>
        <h1 class="text-secondary mb-3" :class="{mobile:isMobile}">Create new product</h1>
        <v-form ref="form" v-model="valid">
          <v-text-field 
          name="title" 
          label="Title" 
          type="text"
          v-model="title"
          :rules="[v => !!v || 'Title is require']"
          required
          >
          </v-text-field>
          <v-text-field 
          name="vendor" 
          label="Vendor product" 
          type="text"
          v-model="vendor"
          >
          </v-text-field>
          <v-text-field 
          name="color" 
          label="Color product" 
          type="text"
          v-model="color"
          >
          </v-text-field>
          <v-text-field 
          name="material" 
          label="Material product" 
          type="text"
          v-model="material"
          >
          </v-text-field>
          <v-text-field 
          name="price" 
          label="Price product" 
          type="text"
          v-model="price"
          required
           :rules="[v => !!v || 'Price is require']"
          >
          </v-text-field>
          <v-textarea
          name="description" 
          label="Description product" 
          type="text"
          v-model="description"
          >
          </v-textarea>
        </v-form>
        <v-row  class="mb-3">
          <v-col xs='12'>
            <v-btn
            @click="upload"
            color="warning"
            >
              Upload
              <v-icon right dark >mdi-cloud-upload</v-icon>
            </v-btn>
            <input 
              ref="fileInput" 
              type="file" 
              style="display: none" 
              accept="image/*"
              @change="onFileChange"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col xs='12'>
            <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-col>
        </v-row>
        <v-row>
          <v-col xs='12'>
            <v-switch
            color="success"
            v-model="promo"
            label="Add to promo?"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs='12'>
            <v-spacer></v-spacer>
            <v-btn
            :loading="loading"
            :disabled="!valid || !image || loading"
            class="succrss"
            @click="createProduct"
            >Create product</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    title: '',
    vendor: '',
    color: '',
    material: '',
    price: '0',
    description: '',
    promo: false,
    valid: false,
    image: null,
    imageSrc: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    isMobile() {
      return this.$store.getters.isMobile
    }
  },
  methods: {
    createProduct(){
      if (this.$refs.form.validate() && this.image) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo:  this.promo,
          image: this.image,
        }
        this.$store.dispatch('createProduct', product)
        .then(()=> {
          this.$router.push('/list')
        })
        .catch(() => {})
      }
    },
    upload () {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
  }
}
</script>

<style scoped>
  .mobile {
    font-family: cursive;
  }
</style>