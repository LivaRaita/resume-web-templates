<template>
  <a
    href=""
    dir="auto"
    contenteditable="true"
    placeholder="placeholderValue"
    v-text="textValue"
    @keydown.enter.prevent
    @blur="newValueAdded($event.target.innerText)"
  ></a>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"],
  methods: {
    newValueAdded(text) {
      this.$emit("addValue", { text });
    }
  }
};
</script>

<style></style>
