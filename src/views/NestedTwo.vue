<template>
  <div class="about">
    <h1>This is the Nested Two page</h1>
    <p>It has sub components</p>
    <div id="nav">
      <router-link :to="{ name: 'nested.deep', params: { id: '1' } }">Sub Route 1</router-link> |
      <router-link :to="{ name: 'nested.deep', params: { id: '2' } }">Sub Route 2</router-link> |
      <router-link :to="{ name: 'nested.deep', params: { id: '3' } }">Sub Route 3</router-link> |
      <router-link :to="{ name: 'nested.deep', params: { id: '4' } }">Sub Route 4</router-link>
    </div>
  </div>
</template>
