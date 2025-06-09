<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  description: {
    type: String,
    required: true
  }
})

const showFullDescription = ref<boolean>(false)

const firstParagraph = computed<string>(() => {
  return props.description?.split('\n\n')[0]
})
</script>

<template>
  <div class="candidate-description">
    <div class="candidate-description__content">
      {{ showFullDescription ? description : firstParagraph }}
    </div>
    <div class="candidate-description__expand">
      <span
        class="blue-button"
        @click="showFullDescription = !showFullDescription"
      >
        {{ showFullDescription ? 'Ukryj' : 'Rozwiń' }} opis
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.candidate-description {
  background-color: $color-light-blue;
  color: $color-white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  padding: 30px 20px;
  box-shadow: 0px 19px 32px -17px $color-black;

  @media screen and (min-width: $breakpoint-sm) {
    margin: 0 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  @media screen and (min-width: $breakpoint-md) {
    margin: 0 30px;
    padding: 60px 40px 40px;
  }

  &__content {
    padding-left: 10px;
    color: $color-black;
  }
}
</style>
