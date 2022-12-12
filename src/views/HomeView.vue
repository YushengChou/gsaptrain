<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @click="test" msg="Welcome to Your Vue.js App" :boo="this.boo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      boo: true,
    }
  },
  computed: {
  },
  methods: {
    test() {
      this.boo = !this.boo
    }
  },
  components: {
    HelloWorld
  }
}
</script>
