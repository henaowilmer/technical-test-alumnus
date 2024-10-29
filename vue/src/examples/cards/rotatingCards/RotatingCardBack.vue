<script setup>
  defineProps({
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    action: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  </script>
  
  <template>
    <div
      class="back back-background"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        width: '-webkit-fill-available',
      }"
    >
      <div class="card-body pt-7 text-center">
        <h3 class="text-white" v-html="title"></h3>
        <p class="text-white opacity-8">
          {{ description }}
        </p>
        <div class="buttons-group">
          <button
            v-for="({ click, color, label }, index) in action"
            :key="index"
            @click="click"
            type="button"
            class="btn btn-sm mt-3 inline-block ms-1"
            :class="`${color ? `btn-${color}` : 'btn-white'}`"
          >
            {{ label }}
          </button>
        </div>
      </div>
    </div>
  </template>
  