<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>

      <div class="mt-5">
        <h2>📍 My Location</h2>
        <v-btn color="primary" @click="getLocation">Get Current Location</v-btn>

        <div v-if="location">
          <p><strong>Latitude:</strong> {{ location.lat }}</p>
          <p><strong>Longitude:</strong> {{ location.lng }}</p>
        </div>

        <p v-if="error" style="color: red">{{ error }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      location: null,
      error: ''
    }
  },
  methods: {
    async getLocation() {
      try {
        const pos = await this.$geo.getCurrentPosition()
        this.location = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
        this.error = ''
      } catch (err) {
        this.error = err.message
      }
    }
  }
}
</script>

