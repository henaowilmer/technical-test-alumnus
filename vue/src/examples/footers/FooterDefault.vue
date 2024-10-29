<script setup>
import logoDark from "@/assets/img/LOGO-ALUMNUS-05.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "",
      logo: logoDark,
      route: "/"
    })
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <a class="text-center" :href="brand.route">
          <img :src="brand.logo" style="max-width: -webkit-fill-available;"/>
        </a>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Contact Info
            </p>
            <p class="text-dark my-4 text-sm font-weight-normal">
              letstalk@alumnuslms.com
            </p>
            <p class="text-dark my-4 text-sm font-weight-normal">
              (+57) 3052537867
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              Alumnus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
