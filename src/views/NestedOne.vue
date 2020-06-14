<template>
  <div class="about">
    <h1>This is the Nested One page</h1>
    <p>Initialized at: {{ (new Date()).toISOString() }}</p>
    <p>Route Params: {{ this.queryData }}</p>
    <router-link :to="{ name: 'nested.dialog' }" class="btn">Open Dialog</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    queryData() {
      return localStorage.getItem('queryData') || 'not yet defined, so find an adequade default'
    }
  }
}
</script>
