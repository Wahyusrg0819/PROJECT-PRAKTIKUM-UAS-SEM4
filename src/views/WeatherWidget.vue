<template>
  <q-page>
    <q-card class="weather-widget">
      <q-card-section>
        <h1 class="text-h5">Weather Widget</h1>
        <q-input v-model="location" placeholder="Enter location..." dense outlined />
        <q-btn @click="searchWeather" color="primary" label="Search" />
      </q-card-section>

      <q-card-section v-if="loading">
        <q-spinner-hourglass size="48px" color="primary" />
        <p>Loading...</p>
      </q-card-section>

      <q-card-section v-else-if="weather">
        <p>Location: {{ weather.name }}</p>
        <p>Temperature: {{ weather.main.temp }} °C</p>
        <p>Condition: {{ weather.weather[0].description }}</p>
      </q-card-section>

      <q-card-section v-else>
        <p>No weather data available</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      location: '', // State to store user input location
      weather: null,
      loading: false
    };
  },
  methods: {
    async searchWeather() {
      if (!this.location) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Please enter a location'
        });
        return;
      }

      this.loading = true;

      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: this.location,
            appid: '0314e955a8b6f606913ad74d70dcf353',
            units: 'metric'
          }
        });
        this.weather = response.data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Error fetching weather data'
        });
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 5);
  margin-top: 10%;
  text-align: center;
  border:black solid;
}

.q-btn {
  margin-top: 10px;
  margin-bottom: 10px;
}
.q-card-section {
  margin-bottom: 10px;
}
</style>
