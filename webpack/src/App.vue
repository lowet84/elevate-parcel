<template>
  <div class="presentation container">
    <div class="title">
      {{ slide.title }}
    </div>
    <div class="sub-title" v-for="(line,index) in slide.body" :key="index">
      {{line}}
    </div>
  </div>
</template>

<script>
import { slides } from './slides'

export default {
  data () {
    return {
      slide: slides[1]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
