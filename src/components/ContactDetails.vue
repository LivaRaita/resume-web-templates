<template>
  <a
    href=""
    dir="auto"
    contenteditable="true"
    placeholder="placeholderValue"
    v-text="textValue"
    @keydown.enter.prevent
    @blur="newValueAdded($event.target.innerText)"
    @mouseover="hoverOnText(true, $event)"
    @mouseleave="hoverOnText(false, $event)"
  ></a>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"],
  methods: {
    newValueAdded(text) {
      this.$emit("addValue", { text });
    },
    hoverOnText(value, event) {
      this.$emit("hoverOnText", { value, event });
    }
  }
};
</script>

<style scoped>
a {
  border: 1px solid red;
}
</style>
