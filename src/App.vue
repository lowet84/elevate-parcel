<template>
  <div>
    <demo v-for="(text,index) in texts" :text="text" :key="index"></demo>
  </div>
</template>

<script lang="ts">
import { texts } from "./texts";

export default {
  data(): { texts: string[] } {
    return { texts };
  }
};
</script>

<style></style>