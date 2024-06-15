<!-- File: App.vue -->
<template>
 <q-layout>
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header 
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  --color1: rgb(108, 231, 221);
  --color2: rgb(250, 255, 178);
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}
</style>
