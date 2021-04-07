<template>
  <h1>{{ msg }}</h1>
  <button @click="count++" class="btn btn-primary">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>


<style lang="scss" scoped>
h1 { font-size: 50px; }
</style>