<template>
  <div class="styled">{{text}}</div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style>
.styled {
  color: red;
}
</style>