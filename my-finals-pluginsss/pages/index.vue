<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>

      <v-card class="mt-4">
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js.</p>
          <!-- Location Section -->
          <hr class="my-3">
          <h3>📍 My Location</h3>
          <v-btn @click="getLocation" color="success">Get Current Location</v-btn>
          <p v-if="location" class="mt-2">
            <strong>Latitude:</strong> {{ location.lat }}<br>
            <strong>Longitude:</strong> {{ location.lng }}
          </p>
          <p v-if="error" style="color: red">{{ error }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      location: null,
      error: ''
    }
  },
  methods: {
    async getLocation() {
      try {
        const pos = await this.$getLocation()
        this.location = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
        this.error = ''
      } catch (err) {
        this.error = err.message || 'Failed to get location.'
      }
    }
  }
}
</script>
