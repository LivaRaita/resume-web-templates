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
    <div class="container">
      <div class="text-action-menu">
        <button>Link</button>
        <button @click="deleteItem">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"],
  methods: {
    newValueAdded(text) {
      this.$emit("addValue", { text });
    },
    deleteItem() {
      this.$emit("deleteItem");
    }
  },
  components: {}
};
</script>

<style scoped>
a {
  border: 1px solid red;
}

/* .menu-position {
  display: none;
  position: absolute;
  transform: translateY(-132%) translateX(-12px);
} */

a:hover ~ .container {
  display: flex;
}

.container:hover {
  display: flex;
}
.container {
  display: none;
  position: absolute;
  transform: translateY(-132%) translateX(-12px);
  padding: 12px;
  z-index: 1;
  height: 40px;
  border: 1px solid red;
  margin: 0;
}
.text-action-menu {
  display: flex;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.2), 0px 3px 6px rgba(0, 0, 0, 0.1),
    0px 0px 1px rgba(0, 0, 0, 0.005);
  border-radius: 3px;
}
</style>
