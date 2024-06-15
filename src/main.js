import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import App from './App.vue';
import router from './router'; // Import router configuration


const myApp = createApp(App);


myApp.use(Quasar, {
  plugins: {}, // Import Quasar plugins and add here
});

myApp.use(router); // Use the router configuration

myApp.mount('#app');


