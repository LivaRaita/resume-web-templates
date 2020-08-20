<template>
  <div class="section-wrapper">
    <span class="handle"></span>
    <div class="section-outline">
      <div class="section-top" @click="showPanel = !showPanel">
        <h2 placeholder="(Not specified)">{{ item.label }}</h2>
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
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </div>
      </div>
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
  }
};
</script>

<style>
.section-wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 12px;
}

.handle {
  margin-top: 1rem;
  width: 24px;
  height: 28px;
  background-color: red;
  visibility: hidden;
  cursor: grab;
}

.section-wrapper:hover > .handle {
  visibility: visible;
}

.section-outline {
  border: 1px solid #dddbda;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
}

[placeholder]:empty::before {
  content: attr(placeholder);
  color: #000;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  max-width: 700px;
}

.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.section-top h2 {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 12px;
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
  hight: 20px;
  color: black;
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.05);
}

.rotate {
  transform: rotate(180deg);
}

.arrow-icon {
  transition: all 200ms ease-out;
}
</style>
