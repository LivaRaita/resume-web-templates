<template>
  <div class="wrapper">
    <div class="form-container">
      <div class="resume-section">
        <h3 class="group-heading">Personal Details</h3>
        <div class="row">
          <div class="form-group">
            <label for="">Full Name</label>
            <input type="text" v-model="fullName" />
          </div>
          <div class="form-group">
            <label for="">Job Title</label>
            <input type="text" v-model="jobTitle" />
          </div>
        </div>
      </div>
      <!-- Resume sections -->
      <div class="resume-section">
        <h3 class="group-heading">Websites & Social Links</h3>
        <draggable
          v-model="websitesSocialLinks"
          @start="drag = true"
          @end="drag = false"
        >
          <WebsitesSocialLinks
            v-for="item in websitesSocialLinks"
            :key="item.id"
            :item="item"
            @removeItem="removeItem(item)"
          ></WebsitesSocialLinks>
        </draggable>
        <button class="add-item-button" @click="addLink">+ Add link</button>
      </div>
    </div>
    <!-- Preview -->
    <div class="preview">
      <div class="resume-peview-wrapper">
        <div class="resume-preview">
          <div class="resume-content">
            <h1>{{ fullName }}</h1>
            <h2>{{ jobTitle }}</h2>
            <ul v-if="websitesSocialLinks.length > 0">
              <li v-for="(link, index) in websitesSocialLinks" :key="index"
                ><a :href="link.link">{{ link.label }}</a></li
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import WebsitesSocialLinks from "../components/WebsitesSocialLinks.vue";

export default {
  data() {
    return {
      showPanel: false,
      fullName: "",
      jobTitle: "",
      websitesSocialLinks: [],
      nextItemId: 0
    };
  },
  methods: {
    addLink() {
      this.websitesSocialLinks.push({
        id: this.nextItemId++,
        label: "",
        link: ""
      });
    },
    removeItem(item) {
      this.websitesSocialLinks.splice(
        this.websitesSocialLinks.indexOf(item),
        1
      );
    }
  },
  components: {
    WebsitesSocialLinks,
    draggable
  }
};
</script>

<style>
[placeholder]:empty::before {
  content: attr(placeholder);
  color: #000;
}

.wrapper {
  display: flex;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  max-width: 700px;
  margin: 48px;
}

.resume-section {
  margin-bottom: 32px;
}
.group-heading {
  margin-bottom: 16px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
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

/* .section-outline {
  border: 1px solid #dddbda;
  border-radius: 4px;
  padding: 16px;
} */

.preview {
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #dadada;
  box-shadow: inset 0px 4px 24px rgba(0, 0, 0, 0.2);
  padding: 22px;
  overflow-y: scroll;
}

.resume-preview {
  position: relative;
  width: 100%;
  padding-top: 129%;
  background-color: white;
  border-radius: 2px;
  margin-right: 22px;
  margin-bottom: 24px;
}

.resume-content {
  position: absolute;
  top: 45px;
  left: 44px;
}

.resume-content h1 {
  font-size: calc(1.3vw + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}
.resume-content h2 {
  font-size: calc(0.5vw + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}

.rotate {
  transform: rotate(180deg);
}

.arrow-icon {
  transition: all 200ms ease-out;
}

.resume-section .add-item-button {
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  border: none;
  background: none;
  color: #2f80ed;
  cursor: pointer;
  padding: 6px 16px;
  width: 100%;
}

.resume-section .add-item-button:hover {
  background-color: #f4f6f9;
  border-radius: 4px;
}
</style>
