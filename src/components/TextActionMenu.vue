<template>
  <div
    class="container"
    @mouseover="keepShowingTextActionMenu(true, $event)"
    @mouseleave="keepShowingTextActionMenu(false, $event)"
  >
    <div class="text-action-menu">
      <button>Delete</button>
      <button>Link</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    keepShowingTextActionMenu(value) {
      this.$emit("hoverOnMenu", { value });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 12px;
  display: flex;
  position: absolute;
  z-index: 1;
  height: 40px;
  border: 1px solid red;
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
