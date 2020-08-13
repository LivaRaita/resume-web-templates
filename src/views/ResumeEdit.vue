<template>
  <div class="container">
    <div class="resume-section">
      <h3 class="group-heading">Personal Details</h3>
      <div class="row">
        <div class="form-group">
          <label for="">Full Name</label>
          <input type="text" />
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
</template>

<script>
export default {};
</script>

<style>
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
</style>
