<template>
  <div class="dialog">
    <div class="dialog__inner">
      <h3>My Dialog</h3>
      <p>Content</p>
      <br>
      <a class="btn" @click="close">Close</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.dialog {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(#333, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    padding: 30px;
    margin-top: 50px; // just so that rest of the page is not overlapped
    width: 300px;
  }
}
</style>
