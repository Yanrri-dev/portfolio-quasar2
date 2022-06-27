<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const isDarkmode = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

watch(isDarkmode, (isDarkmode) => {
  $q.dark.set(isDarkmode);
});
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
        class="lt-sm"
      />

      <q-btn to="/" flat> Portfolio </q-btn>

      <q-space />

      <q-tabs class="gt-xs text-center">
        <q-route-tab to="/projects" name="projects" label="Projects" />
        <q-route-tab to="/about" name="about" label="About Me" />
        <q-route-tab to="/contact" name="contact" label="Contact" />
      </q-tabs>

      <q-space />

      <q-btn
        dense
        flat
        round
        @click="isDarkmode = !isDarkmode"
        :icon="isDarkmode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      >
      </q-btn>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    elevated
  >
    <!-- drawer content -->
  </q-drawer>
</template>
