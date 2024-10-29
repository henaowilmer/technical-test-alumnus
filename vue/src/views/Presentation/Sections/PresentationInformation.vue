<template>
  <section class="my-5">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4"
          v-for="user in users"
          :key="user.id"
        >
          <RotatingCard>
            <RotatingCardFront
              image="/LOGO-ALUMNUS-05.png"
              icon="person"
              :title="user.name"
              :description="user.email"
            />
            <RotatingCardBack
              image="/Landing-home-ALUMNUS-FONDO5-25-scaled.jpg"
              :title="user.name"
              :description="`Email: ${user.email} \n Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}`"
              :action="[
                { label: 'See Detail', click: () => openModal(user) },
              ]"
            />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import axios from "axios";
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";

const emit = defineEmits(['open-modal']);
const users = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.value = response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
});

const openModal = (user) => {
  emit("open-modal", user);
};
</script>
