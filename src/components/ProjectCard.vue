<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const imgURL = "/img/" + props.project.img;
</script>

<template>
  <q-card class="my-card">
    <q-card-section>
      <!-- <div class="text-h6">{{ project.name }}</div> -->
      <!-- <div class="text-subtitle2">by John Doe</div> -->
      <q-img :src="imgURL">
        <div class="absolute-bottom text-h6">
          {{ project.name }}
        </div>
      </q-img>
    </q-card-section>

    <q-card-section>
      {{ project.description }}
      {{ project.img }}
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn
        :href="project.links.github"
        target="_blank"
        flat
        icon="mdi-github"
      ></q-btn>
      <q-btn
        :href="project.links.deployed"
        target="_blank"
        flat
        icon="mdi-web"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>
