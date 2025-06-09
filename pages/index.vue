<script lang="ts" setup>
import CandidateInfo from '../components/candidate/CandidateInfo.vue'
import CandidateDescription from '../components/candidate/CandidateDescription.vue'
import type { Candidate, ResponseCandidate } from '../models/index.ts'

const {
  data: candidates,
  error,
  status
} = await useFetch<ResponseCandidate>('https://webwizards.home.pl/jacek/frontend-task/api/user/', {
  lazy: true
})

const candidatesList = computed<Candidate[] | []>(() => {
  const data = candidates.value?.data

  if (Array.isArray(data)) {
    return data
  }
  if (data) {
    return [data]
  }
  return []
})
</script>

<template>
  <div class="candidate-card">
    <div
      v-if="status === 'pending'"
      class="loader"
    />
    <div v-else-if="error">
      Coś poszło nie tak. Spróbuj ponownie.
    </div>
    <div
      v-else
      class="candidate-card__wrapper"
    >
      <div
        v-for="candiate in candidatesList"
        :key="candiate.id"
      >
        <CandidateInfo :candidate="candiate" />
        <CandidateDescription :description="candiate.about" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.candidate-card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0px;
  background-color: $color-gray;
  min-height: 460px;

  @media screen and (min-width: $breakpoint-sm) {
    padding: 60px 30px;
  }

  @media screen and (min-width: $breakpoint-md) {
    padding: 80px 40px;
    border-radius: 30px;
  }

  &__wrapper {
    max-width: 1344px;
    width: 100%;
  }
}
</style>
