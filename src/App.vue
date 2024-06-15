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
  --s: 50px; /* control the size */
  --t: 6px; /* control the thickness */
  --c1: #084c7f;
  --c2: #fef5e9;

  --_c: #0000 calc(98% - var(--t)), var(--c1) calc(100% - var(--t)) 98%, #0000;
  --_s: calc(2 * var(--s)) calc(5 * var(--s) / 2);
  --_r0: /var(--_s) radial-gradient(calc(var(--s) / 2) at 0 20%, var(--_c));
  --_r1: /var(--_s) radial-gradient(calc(var(--s) / 2) at 100% 20%, var(--_c));
  background: 0 0 var(--_r0),
    calc(-1 * var(--s)) calc(5 * var(--s) / 4) var(--_r0), var(--s) 0 var(--_r1),
    0 calc(5 * var(--s) / 4) var(--_r1),
    conic-gradient(at var(--t) calc(20% + 2 * var(--t)), #0000 75%, var(--c1) 0)
      calc(var(--t) / -2) calc(var(--s) - var(--t)) / var(--s)
      calc(5 * var(--s) / 4),
    repeating-conic-gradient(var(--c2) 0 25%, #0000 0 50%) var(--s)
      calc(var(--s) / -8) / var(--_s),
    conic-gradient(from 90deg at var(--t) var(--t), var(--c2) 25%, var(--c1) 0)
      calc((var(--s) - var(--t)) / 2) calc((var(--s) - var(--t)) / 2) / var(--s)
      calc(5 * var(--s) / 4);
}
</style>
