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
  <q-card class="my-card" style="height: auto">
    <q-card-section>
      <!-- <div class="text-h6">{{ project.name }}</div> -->
      <!-- <div class="text-subtitle2">by John Doe</div> -->
      <q-img :src="imgURL" style="height: 245px">
        <div class="absolute-bottom text-h6">
          {{ project.name }}
        </div>
      </q-img>
    </q-card-section>

    <q-card-section style="height: 60px">
      {{ project.description }}
    </q-card-section>

    <q-card-section>
      <div class="q-gutter-md">
        <q-icon
          v-for="language in project.languagesIcons"
          :key="language"
          :name="'mdi-' + language"
          size="md"
        >
          <q-tooltip>{{ language }}</q-tooltip>
        </q-icon>
      </div>
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
