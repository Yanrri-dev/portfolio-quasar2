<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ project.name }}</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-section>
      {{ project.description }}
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
</template>
