<template>
  <a
    href=""
    dir="auto"
    contenteditable="true"
    placeholder="placeholderValue"
    v-text="textValue"
    @keydown.enter.prevent
    @blur="newValueAdded($event)"
  ></a>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"],
  methods: {
    newValueAdded($event) {
      this.$emit("addValue", $event);
    }
  }
};
</script>

<style></style>
