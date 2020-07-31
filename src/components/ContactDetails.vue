<template>
  <a
    href=""
    dir="auto"
    contenteditable="true"
    placeholder="placeholderValue"
    v-text="textValue"
  ></a>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"]
};
</script>

<style></style>
