
<template>
  <q-layout view="lHh lpR fFf">

    <Navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script setup>
import Navbar from 'src/components/Navbar.vue';
import Footer from '../components/Footer.vue';

</script>
