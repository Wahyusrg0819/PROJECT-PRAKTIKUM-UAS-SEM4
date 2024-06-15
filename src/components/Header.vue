<template>
  <div class="Header">
    <nav >
      <q-dropdown>
        <q-btn flat label="Pilih Tugas" icon="menu" color="white">
          <q-menu >
            <q-list>
              <q-item
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                active-class="active"
                @click="selectMenuItem(item.name)"
                
              >
                {{ item.label }}
                
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-dropdown>
      
      <ul class="nav-links" >
        <li>
          <router-link to="/" class="nav-link" :class="{ 'active': selectedMenu === 'WeatherWidget' }">
            <span>Pencari cuaca</span>
          </router-link>
        </li>
        <li v-for="item in menuItems" :key="item.path"  >
          <router-link :to="item.path" class="nav-link" :class="{ 'active': selectedMenu === item.name }">
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selectedMenu = ref('WeatherWidget');
    // Define your menu items
    const menuItems = [
      { path: '/tugas1', name: 'Tugas 1', label: 'Tugas 1' },
      { path: '/tugas2', name: 'Tugas 2', label: 'Tugas 2' },
      { path: '/tugas3', name: 'Tugas 3', label: 'Tugas 3' },
      { path: '/tugas4', name: 'Tugas 4', label: 'Tugas 4' },
      { path: '/tugas5', name: 'Tugas 5', label: 'Tugas 5' },
      { path: '/tugas6', name: 'Tugas 6', label: 'Tugas 6' },
      { path: '/tugas7', name: 'Tugas 7', label: 'Tugas 7' }
    ];

    const selectMenuItem = (itemName) => {
      selectedMenu.value = itemName;
    };

    return {
      selectedMenu,
      menuItems,
      selectMenuItem
    };
  }
};
</script>
<style scoped>
.Header {
  background-color:darkslateblue; /* Background color for the header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for the header */
  padding: 10px 20px; /* Padding around the header content */
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.nav-links li {
  margin-right: 15px;
}

.nav-link {
  text-decoration: none;
  color: #333333; /* Default text color for links */
  transition: color 0.3s ease;
}

.nav-link.active {
  color: #007bff; /* Active link text color */
  font-weight: bold; /* Bold font for active link */
}

.nav-link span {
  padding: 8px 12px; /* Padding inside each link */
  display: inline-block;
}

.nav-link:hover {
  color: #0056b3; /* Hover color for links */
}
</style>
