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
          @start="onStart"
          @end="onDragEnd"
          ghost-class="ghost"
          filter=".ignore-draggable"
          :forceFallback="true"
          :preventOnFilter="false"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <WebsitesSocialLinks
              v-for="(item, index) in websitesSocialLinks"
              :key="index"
              :item="item"
              :drag="drag"
              @removeItem="removeItem(item)"
              @updateLabel="updateLabel(item.label)"
              @updateLink="updateLink(item.link)"
            ></WebsitesSocialLinks>
          </transition-group>
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
      drag: false
    };
  },
  mounted() {
    if (localStorage.getItem("websitesSocialLinks")) {
      try {
        this.websitesSocialLinks = JSON.parse(
          localStorage.getItem("websitesSocialLinks")
        );
      } catch (err) {
        localStorage.removeItem("websitesSocialLinks");
      }
    }
  },
  methods: {
    addLink() {
      this.websitesSocialLinks.push({
        // id: this.nextItemId++,
        label: "",
        link: ""
      });
      this.saveLinks();
    },
    updateLabel(value) {
      this.websitesSocialLinks.label = value;
      this.saveLinks();
    },
    updateLink(value) {
      this.websitesSocialLinks.link = value;
      this.saveLinks();
    },
    removeItem(item) {
      this.websitesSocialLinks.splice(
        this.websitesSocialLinks.indexOf(item),
        1
      );
      this.saveLinks();
    },
    saveLinks() {
      const parsed = JSON.stringify(this.websitesSocialLinks);
      localStorage.setItem("websitesSocialLinks", parsed);
    },
    onDragEnd: function() {
      this.drag = false;
      const className = "grabbing";
      const html = document.getElementsByTagName("html").item(0);
      if (html && new RegExp(className).test(html.className) === true) {
        // Remove className with the added space (from setClassToHTMLElement)
        html.className = html.className.replace(
          new RegExp(" " + className),
          ""
        );
        // Remove className without added space (just in case)
        html.className = html.className.replace(new RegExp(className), "");
      }
    },
    onStart: function() {
      this.drag = true;
      const className = "grabbing";
      const html = document.getElementsByTagName("html").item(0);
      if (html && new RegExp(className).test(html.className) === false) {
        html.className += " " + className; // use a space in case there are other classNames
      }
    }
  },
  watch: {
    websitesSocialLinks(val) {
      this.saveLinks(val);
    }
  },
  components: {
    WebsitesSocialLinks,
    draggable
  }
};
</script>

<style>
.grabbing * {
  cursor: grabbing !important;
}

.wrapper {
  display: flex;
  flex-direction: row;
}

@media (max-width: 1245px) {
  .preview {
    display: none;
  }
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

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
