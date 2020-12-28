<template >
  <v-dialog width="400px" v-model="dialog" >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" class="headline" v-bind="attrs" v-on="on" > Edit</v-btn>
    </template>
    <v-card  >
      <v-container>
        <v-row>
          <v-col xs="12">
            <v-card-title>
              <h1 class="text--primary">Edit product</h1>
            </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs="12">
            <v-card-text>
              <v-text-field 
                name="title" 
                label="Title" 
                type="text"
                v-model="editedTitle"
                >
              </v-text-field>
              <v-textarea 
                name="description" 
                label="Description" 
                type="text"
                v-model="editedDescription"
                >
              </v-textarea>
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs="12">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" outlined @click="onCansel"> Cansel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onSave"> Save</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      dialog: false,
      editedTitle: this.product.title,
      editedDescription: this.product.description,
    }
  },
  methods: {
    onCansel () {
      this.editedTitle = this.product.title
      this.editedDescription = this.product.description
      this.dialog = false
    },
    onSave() {
      if(this.editedTitle !=='' && this.editedDescription !=='') {
        this.$store.dispatch('updateProduct', {
          title: this.editedTitle,
          description: this.editedTitle,
          id: this.product.id
        })
        this.dialog = false
      }
    }
  }
  
}
</script>