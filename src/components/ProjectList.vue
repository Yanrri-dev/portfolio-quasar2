<script setup>
import { computed } from "vue";
import { useProjectStore } from "../stores/project";
import ProjectCard from "../components/ProjectCard.vue";

const projectStore = useProjectStore();
projectStore.fetchProjects();

const projects = computed(() => {
  return projectStore.projects;
});
</script>

<template>
  <div class="row wrap justify-center">
    <div
      v-for="project in projects"
      :key="project.id"
      class="col-xs-10 col-sm-5 col-md-3 q-ma-sm"
    >
      <ProjectCard :project="project" />
    </div>
  </div>
</template>
