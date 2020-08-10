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
        <button class="link-button" @click="showLinkInputToggle">Link</button>
        <button @click="deleteItem">Delete</button>
      </div>
    </div>
    <div class="link-input-wrapper" v-if="displayLinkInput">
      <input
        type="text"
        placeholder="Paste your link, such as https://google.com..."
      />
      <button>Link</button>
      <button>Unlink</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholderValue", "textValue"],
  data() {
    return {
      displayLinkInput: false
    };
  },
  methods: {
    newValueAdded(text) {
      this.$emit("addValue", { text });
    },
    deleteItem() {
      this.$emit("deleteItem");
    },
    showLinkInputToggle() {
      this.displayLinkInput = !this.displayLinkInput;
      // implement clicking outside (or on other element) functionality to close the link input
    }
  },
  components: {}
};
</script>

<style scoped>
a {
  border: 1px solid red;
}

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

.link-input-wrapper {
  display: flex;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.2), 0px 3px 6px rgba(0, 0, 0, 0.1),
    0px 0px 1px rgba(0, 0, 0, 0.005);
  border-radius: 3px;
  padding: 12px;
}

.link-input-wrapper input {
  width: 320px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid #dadada;
  border-radius: 3px;
  font-size: 14px;
  margin-right: 8px;
  padding: 4px 10px;
}
.link-input-wrapper input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

.link-input-wrapper button {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  background: none;
  border: none;
}
.link-input-wrapper button:hover:active {
  color: black;
}
</style>
