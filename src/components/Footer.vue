<template>
  <q-footer class="bg-dark text-white">
    <q-toolbar>
      <q-toolbar-title class="text-center">
        Designed & Built by Nicolás Rojas
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-md">
      <div class="text-center text-grey-5 q-gutter-md" style="font-size: 2em">
        <q-btn
          padding="none"
          dense
          round
          href="https://github.com/Yanrri-dev"
          icon="mdi-github"
          target="_blank"
          :ripple="{ color: 'green' }"
        />
        <q-btn
          flat
          padding="none"
          dense
          round
          href="https://www.linkedin.com/in/njrp/"
          icon="mdi-linkedin"
          target="_blank"
        />
        <q-btn
          padding="none"
          dense
          round
          href="https://www.instagram.com/nescondido/"
          icon="mdi-instagram"
          target="_blank"
        />
      </div>
    </div>
  </q-footer>
</template>

<script setup></script>

<style>
.q-btn .q-focus-helper {
  background-color: green;
}
</style>
