<template>
  <div class="section-wrapper section-outline">
    <div class="section-top-wrapper">
      <div class="section-top" @click="showPanel = !showPanel">
        <div>
          <h2 placeholder="(Not specified)">{{ item.label }}</h2>
          <p v-show="item.link">{{ item.link }}</p>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="showPanel ? 'rotate' : ''"
            class="arrow-icon"
          >
            <path
              d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
            />
          </svg>
        </div>
      </div>

      <div class="handle-wrapper"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          class="drag-indicator-icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          /></svg
      ></div>
      <button class="delete-button" @click="deleteItem(item)"
        ><div
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="delete-icon"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
            /></svg></div
      ></button>
    </div>

    <div class="">
      <div class="row" v-if="showPanel">
        <div class="form-group">
          <label for="">Label</label>
          <input type="text" v-model="item.label" />
        </div>
        <div class="form-group">
          <label for="">Link</label>
          <input type="text" v-model="item.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      showPanel: false
    };
  },
  methods: {
    deleteItem(item) {
      this.$emit("removeItem", { item });
    }
  }
};
</script>

<style>
.section-wrapper {
  position: relative;
  display: block;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
}

.section-outline {
  border: 1px solid #dddbda;
  border-radius: 4px;
  /* width: 100%; */
}

.section-top-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
}

.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  width: 100%;
}

.section-top h2 {
  font-size: 14px;
  line-height: 20px;
  margin: 0px 0px 4px 0px;
}

.section-top p {
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  color: #646464;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 12px;
  padding: 0px 16px 16px 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  line-height: 18px;
  color: #3e3e3c;
  margin-bottom: 2px;
}
.form-group input {
  border: 1px solid #dddbda;
  border-radius: 4px;
  height: 20px;
  color: black;
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.05);
}

.arrow-icon {
  transition: all 200ms ease-out;
  fill: black;
  fill-opacity: 0.54;
}

.rotate {
  transform: rotate(180deg);
}

/* Grab & Drag */

.handle-wrapper {
  position: absolute;
  display: block;
  visibility: hidden;
  width: 24px;
  height: 24px;
  right: 100%;
  margin-right: 8px;
  cursor: grab;
}

.handle-wrapper:before {
  visibility: visible;
  content: "";
  position: absolute;
  left: -8px;
  right: -8px;
  top: -8px;
  bottom: -8px;
}

.handle-wrapper:before:hover .handle-wrapper {
  visibility: visible;
}

.section-top-wrapper:hover .handle-wrapper {
  visibility: visible;
}

.drag-indicator-icon {
  fill: black;
  fill-opacity: 0.54;
  cursor: grab;
}

/* Delete */

.delete-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  width: 24px;
  height: 24px;
  left: 100%;
  margin-left: 8px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.delete-button:before {
  visibility: visible;
  content: "";
  position: absolute;
  left: -8px;
  right: -8px;
  top: -8px;
  bottom: -8px;
}

.delete-button:before:hover .delete-button {
  visibility: visible;
}

.section-top-wrapper:hover .delete-button {
  visibility: visible;
}

/* .delete-button-wrapper button {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
} */

.delete-icon {
  fill: black;
  fill-opacity: 0.54;
  height: 24px;
  width: 24px;
}
</style>
