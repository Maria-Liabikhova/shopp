<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-24">
          <v-toolbar dark color="#9c0202">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field 
                prepend-icon="mdi-email" 
                name="email" 
                label="Email" 
                type="email"
                v-model="email"
                :rules="emailRules"
                required
                >
              </v-text-field>
              <v-text-field 
                prepend-icon="mdi-lock" 
                name="password" 
                label="Password" 
                type="password"
                :rules="passwordRules"
                :counter="6"
                v-model="password"
                required
                >
                </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn dark  color="#9c0202"
            @click="onSubmit"
            :loading="loading"
            :disabled="!valid || loading"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be equal or than  than 6 characters',
      ],
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user ={
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
        .then(()=> {
          this.$router.push('/')
        })
        .catch(() => {})
      }
    }
  },
  created () {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError', 'Please, log in')
    }
  }
}
</script>