import { defineStore } from 'pinia';
import axios from "axios";

export const useProjectStore = defineStore('project', {
    state: () => ({
      projects: [],
    }),
    getters: {
      getProjects: (state) => state.projects,
    },
    actions: {
      async fetchProjects() {
        await axios.get('projects.json')
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.projects;
        })
        .catch (function(error) {
          alert(error)
          console.log(error)
        });
      },
    },
  });