import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from '../views/WeatherWidget.vue';
import Tugas1 from '../views/Tugas1.vue';
import Tugas2 from '../views/Tugas2.vue';
import Tugas3 from '../views/Tugas3.vue';
import Tugas4 from '../views/Tugas4.vue';
import Tugas5 from '../views/Tugas5.vue';
import Tugas6 from '../views/Tugas6.vue';
import Tugas7 from '../views/Tugas7.vue';

const routes = [
  { 
    path: '/', 
    name : 'WeatherWidget',
    component: WeatherWidget
  },
  { 
    path: '/tugas1', 
    name : 'tugas1', 
    component: Tugas1
  },
  { 
    path: '/tugas2',
    name : 'tugas2',
    component: Tugas2
  },
  { 
    path: '/tugas3',
    name : 'tugas3', 
    component: Tugas3
  },
  { 
    path: '/tugas4', 
    name : 'tugas4',
    component: Tugas4
  },
  { 
    path: '/tugas5', 
    name : 'tugas5',
    component: Tugas5
  },
  { 
    path: '/tugas6', 
    name : 'tugas6',
    component: Tugas6
  },
  { path: '/tugas7', 
    name : 'tugas7',
    component: Tugas7
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
