<script lang="ts" setup>
import { ref } from 'vue'
import type { Candidate } from '../../models/index'

const props = defineProps({
  candidate: {
    type: Object as PropType<Candidate>,
    required: true
  }
})

const showPhone = ref<boolean>(false)

const handleDownloadData = (): void => {
  const json = JSON.stringify(props.candidate, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = props.candidate.surname
  link.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="candidate-info">
    <div class="candidate-info__img">
      <img
        src="/assets/avatar.png"
        :alt="candidate.image?.filename"
        class="avatar"
      >
    </div>
    <div class="candidate-info__wrapper">
      <div class="candidate-info__data">
        <span class="candidate-info__data--name">{{ candidate.name }} {{ candidate.surname }}</span>
        <span class="candidate-info__data--email">
          Email:
          <a
            :href="`mailto:${candidate.email}`"
            class="link"
          >
            {{ candidate.email }}
          </a>
        </span>
        <span class="candidate-info__data--phone">
          Number :
          {{ showPhone ? candidate.phone : `XXXXXX${candidate.phone.toString().slice(-3)}` }}
          <span
            class="blue-button"
            @click="showPhone = !showPhone"
          >
            {{ showPhone ? 'Ukryj telefon' : 'Pokaz telefon' }}
          </span>
        </span>
      </div>
    </div>
    <div class="candidate-info__wrapper">
      <div
        class="candidate-info__export blue-button"
        @click="handleDownloadData"
      >
        Pobierz dane uytkownika
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.candidate-info {
  width: 100%;
  background-color: $color-blue;
  color: $color-white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  box-shadow: 0px 19px 32px -17px $color-black;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: $breakpoint-sm) {
    border-radius: 30px;
    padding: 30px;
  }

  @media screen and (min-width: $breakpoint-md) {
    border-radius: 30px;
  }

  @media screen and (min-width: $breakpoint-xl) {
    flex-direction: row;
    min-height: 200px;
  }

  &__wrapper {
    display: flex;

    &:last-child {
      justify-content: flex-end;
    }
  }

  &__img {
    background-color: $color-light-blue;
    border: 5px solid $color-white;
    border-radius: 20px;
    position: absolute;
    left: 40px;
    top: -40px;
    display: none;

    @media screen and (min-width: $breakpoint-md) {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      width: 200px;
      height: 200px;
    }

    .avatar {
      width: 160px;
      height: 160px;
    }
  }

  &__data {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    font-size: $font-size-large;

    @media screen and (min-width: $breakpoint-md) {
      margin-left: 250px;
    }

    &--name {
      font-size: $font-size-title;
      font-weight: 700;
    }

    &--phone {
      cursor: pointer;

      .blue-button {
        margin-left: 6px;
      }
    }

    &--email {
      cursor: pointer;

      .link {
        color: $color-light-blue;
      }
    }
  }

  &__export {
    height: fit-content;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
