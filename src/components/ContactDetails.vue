<template>
  <div>
    <a
      href=""
      dir="auto"
      contenteditable="true"
      :placeholder="placeholderValue"
      v-text="textValue"
      @keydown.enter.prevent
      @blur="newValueAdded($event.target.innerText)"
    ></a>
    <TextActionMenu class="menu-position"></TextActionMenu>
  </div>
</template>

<script>
import TextActionMenu from "./TextActionMenu";

export default {
  props: ["placeholderValue", "textValue"],
  methods: {
    newValueAdded(text) {
      this.$emit("addValue", { text });
    }
  },
  components: {
    TextActionMenu
  }
};
</script>

<style scoped>
a {
  border: 1px solid red;
}

.menu-position {
  display: none;
  position: absolute;
  transform: translateY(-132%) translateX(-12px);
}

a:hover ~ .menu-position {
  display: flex;
}

.menu-position:hover {
  display: flex;
}
</style>
