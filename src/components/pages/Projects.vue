<template>
  <div>
    <table class="zebra-table">
      <thead>
        <tr>
          <th @click="store.sortBy('projectName')">Proje</th>
          <th @click="store.sortBy('landlordName')">Ev Sahibi</th>
          <th @click="store.sortBy('tenantName')">Kiracı</th>
          <th @click="store.sortBy('rentPrice')">Kira Bedeli</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in store.sortedProjects"
          :key="index"
          :class="index % 2 === 0 ? 'even' : 'odd'"
        >
          <td>{{ project.projectName }}</td>
          <td>{{ project.landlordName }}</td>
          <td>{{ project.tenant.tenantName }}</td>
          <td>{{ project.rentPrice + " " + project.rentCurrency }}</td>
          <td><button @click="store.loadProjects">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useProjectsStore } from "@/stores/projects.js";
import { onBeforeMount } from "vue";

const store = useProjectsStore();

// function editStudent(std) {
//     this should contain edit student logic.
// }
onBeforeMount(() => {
  store.loadProjects();
});
</script>

<style scoped>
.zebra-table {
  border-collapse: collapse;
  width: 100%;
}

.zebra-table th,
.zebra-table td {
  border: 1px solid #ddd;
  padding: 1px;
  text-align: left;
}

.zebra-table th {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  background-color: #f2f2f2;
}

.zebra-table th:hover {
  cursor: pointer;
  background-color: #ddd;
}

.zebra-table .odd {
  background-color: #f9f9f9;
}
</style>
