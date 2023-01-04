<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @click="test" msg="Welcome to Your Vue.js App" :boo="this.boo" />
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" get-container="body">内容</van-popup>
    <div v-if="getTestBoolean">123</div>
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
      show: false,
    }
  },
  computed: {
    getTestBoolean() {
      console.log('test->' + this.$store.state.testBoolean)
      return true
    }
  },
  methods: {
    test() {
      this.boo = !this.boo
    },
    showPopup() {
      this.show = true;
    },
  },
  components: {
    HelloWorld
  }
}
</script>
