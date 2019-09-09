<template>
  <div class="presentation container">
    <div class="title">{{ slide.title }}</div>
    <div class="sub-title" v-for="(line,index) in slide.body" :key="index">{{line}}</div>
  </div>
</template>

<script>
import slides from '../../parcel/src/slides.json'

const slideNames = ['alternative', 'parcel']
const selected = 0

export default {
  data() {
    return {
      slide: slides[slideNames[selected]]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
