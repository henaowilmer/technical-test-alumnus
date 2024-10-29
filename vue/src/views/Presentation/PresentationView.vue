<template>
  <header class="header-container col-12 d-flex align-items-center justify-content-between py-3">
    <div class="logo d-flex align-items-center">
      <img src="@/assets/img/LOGO-ALUMNUS-05.png" alt="Logo" class="logo-img" />
      <h1 class="site-title ms-3">Desarrollo en VueJS</h1>
    </div>
    <nav class="nav">
      <ul class="nav-list d-flex">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link" @click="handleOpenModalNav">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link" @click="handleOpenModalNav">Contact</a></li>
      </ul>
    </nav>
  </header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-4">
    <PresentationInformation @open-modal="handleOpenModal" />
  </div>
  <DefaultFooter />
  <div v-if="isModalOpen" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">
            {{ selectedUser ? selectedUser.name : '' }}
          </h5>
          <MaterialButton
            color="none"
            class="btn-close"
            @click="closeModal"
            aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">
          <p><strong>Email:</strong> {{ selectedUser.email }}</p>
          <p><strong>Phone:</strong> {{ selectedUser.phone }}</p>
          <p><strong>Website:</strong> {{ selectedUser.website }}</p>
          <p><strong>Address:</strong> {{ selectedUser.address.street }}, {{ selectedUser.address.suite }}, {{ selectedUser.address.city }}</p>
          <p><strong>Company:</strong> {{ selectedUser.company.name }}</p>
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            @click="closeModal">
            Close
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isModalOpenNav" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">
            Alumnus
          </h5>
          <MaterialButton
            color="none"
            class="btn-close"
            @click="closeModal"
            aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">
          <p>Prueba tecnica VueJS, Wilmer Henao, Desarrollador de Software</p>
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            @click="closeModal">
            Close
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import MaterialButton from "@/components/MaterialButton.vue";

const selectedUser = ref(null);
const isModalOpen = ref(false);
const selectedNav = ref(null);
const isModalOpenNav = ref(false);

const handleOpenModal = (user) => {
  selectedUser.value = user;
  isModalOpen.value = true;
};

const handleOpenModalNav = () => {
  isModalOpenNav.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedUser.value = null;
  isModalOpenNav.value = false;
};

// hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>