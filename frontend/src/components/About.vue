<template>
  <div class="about">
    <h1>Kriss Kringle</h1>
    <p>About kriss kringle or secret animal...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>