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
            <input type="text" />
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h3 class="group-heading">Websites & Social Links</h3>
        <div class="section-outline">
          <div class="section-top">
            <h2>(Not specified)</h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </div>
          <div class="row">
            <div class="form-group">
              <label for="">Label</label>
              <input type="text" />
            </div>
            <div class="form-group">
              <label for="">Link</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview">
      <div class="resume-peview-wrapper">
        <div class="resume-preview">
          <div class="resume-content">
            <h1>{{ fullName }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: ""
    };
  }
};
</script>

<style>
.wrapper {
  display: flex;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  max-width: 700px;
}
.section-top h2 {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
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
}

.section-outline {
  border: 1px solid #dddbda;
  border-radius: 4px;
  padding: 16px;
}

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
/* .resume-peview-wapper {
 
} */

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
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}
</style>
