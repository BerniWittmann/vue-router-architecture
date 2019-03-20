<template>
  <div class="about">
    <h1>This is the a deep nested page {{ this.$route.params.id }}</h1>
    <router-link :to="{ name: 'nested.two' }">Go back to Parent</router-link>
  </div>
</template>
