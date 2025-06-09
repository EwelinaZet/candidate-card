<template>
  <div class="page">
    <div class="page__header">
      <header>
        <NuxtLink to="/">WEBWIZARDS</NuxtLink>
        <p>Przeglądaj Kandydatów</p>
      </header>
    </div>

    <div class="page__content">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.page {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 12px 22px -11px $color-dark-gray;
    -moz-box-shadow: 0px 12px 22px -11px $color-dark-gray;
    box-shadow: 0px 12px 22px -11px $color-dark-gray;
    background: #fff;

    > header {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  &__content {
    margin: 0;

    @media screen and (min-width: $breakpoint-md) {
      margin: 0 30px 30px;
    }

    @media screen and (min-width: $breakpoint-lg) {
      margin: 0 60px 60px;
    }
  }
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid $color-gray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.blue-button {
  background: $color-button;
  color: $color-white;
  padding: 4px 8px;
  cursor: pointer;
  font-size: $font-size-regular;
}
</style>
