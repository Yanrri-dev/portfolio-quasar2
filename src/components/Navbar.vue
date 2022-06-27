<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-header
    bordered
    :class="
      $q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-blue-grey-8'
    "
  >
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
        class="lt-sm"
      />

      <q-btn
        stretch
        dense
        to="/"
        flat
        :ripple="{ color: 'green' }"
        :text-color="$q.dark.isActive ? 'white' : 'blue-grey-8'"
      >
        Portfolio
      </q-btn>

      <q-space />

      <q-tabs class="gt-xs text-center" indicator-color="green-13">
        <q-route-tab
          :ripple="{ color: 'green' }"
          to="/projects"
          name="projects"
          label="Projects"
        />
        <q-route-tab
          :ripple="{ color: 'green' }"
          to="/about"
          name="about"
          label="About Me"
        />
        <q-route-tab
          :ripple="{ color: 'green' }"
          to="/contact"
          name="contact"
          label="Contact"
        />
      </q-tabs>

      <q-space />

      <q-btn
        dense
        flat
        round
        @click="$q.dark.toggle()"
        :icon="
          $q.dark.isActive ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        "
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
