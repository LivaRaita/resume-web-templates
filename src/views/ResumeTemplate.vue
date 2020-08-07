<template>
  <div class="container">
    <section class="header">
      <h1
        contenteditable="true"
        :placeholder="cvTemplate.fullName.placeholder"
        dir="auto"
        v-text="cvTemplate.fullName.text"
        @keydown.enter.prevent
        @blur="
          updateContentItemText(cvTemplate.fullName, $event.target.innerText)
        "
      ></h1>
      <h2
        contenteditable="true"
        :placeholder="cvTemplate.title.placeholder"
        dir="auto"
        v-text="cvTemplate.title.text"
        @keydown.enter.prevent
        @blur="updateContentItemText(cvTemplate.title, $event.target.innerText)"
      ></h2>
      <div class="contacts">
        <ContactDetails
          v-for="detail in cvTemplate.contactDetails"
          :key="detail.id"
          :placeholderValue="detail.placeholder"
          :textValue="detail.text"
          @addValue="updateContentItemText(detail, $event.text)"
          @deleteItem="deleteContentItem(detail, cvTemplate.contactDetails)"
        ></ContactDetails>
        <button
          class="addElement"
          @click="addContactDetails"
          aria-label="Add contact info"
          >+</button
        >
      </div>
    </section>
    <hr />
    <div class="content">
      <div class="affiliations">
        <p
          class="short-description"
          contenteditable="true"
          placeholder="Add a short description (5-10 sentences) focusing on your experience and the
				future carrier direction you're aiming for."
        ></p>
        <div class="experience">
          <h2>Experience</h2>
          <div class="position-wrapper">
            <div class="position-header">
              <h3>
                <span contenteditable="true" placeholder="Position"></span> at
                <span contenteditable="true" placeholder="Company"></span>
              </h3>
              <p class="date-location">
                <span contenteditable="true" placeholder="Start Date"></span>
                - <span contenteditable="true" placeholder="End Date"></span>,
                <span contenteditable="true" placeholder="Location"></span>
              </p>
            </div>
            <p
              class="position-description"
              contenteditable="true"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni"
            ></p>
          </div>
          <div class="position-wrapper">
            <div class="position-header">
              <h3>
                <span contenteditable="true" placeholder="Position"></span> at
                <span contenteditable="true" placeholder="Company"></span>
              </h3>
              <p class="date-location">
                <span contenteditable="true" placeholder="Start Date"></span>
                - <span contenteditable="true" placeholder="End Date"></span>,
                <span contenteditable="true" placeholder="Location"></span>
              </p>
            </div>
            <p
              class="position-description"
              contenteditable="true"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni"
            ></p>
          </div>
          <div class="position-wrapper">
            <div class="position-header">
              <h3>
                <span contenteditable="true" placeholder="Position"></span> at
                <span contenteditable="true" placeholder="Company"></span>
              </h3>
              <p class="date-location">
                <span contenteditable="true" placeholder="Start Date"></span>
                - <span contenteditable="true" placeholder="End Date"></span>,
                <span contenteditable="true" placeholder="Location"></span>
              </p>
            </div>
            <p
              class="position-description"
              contenteditable="true"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni"
            ></p>
          </div>
        </div>
        <div class="education">
          <h2>Education</h2>
          <div class="position-wrapper">
            <div class="position-header">
              <h3>
                <span
                  contenteditable="true"
                  placeholder="University, Courses, Certifications etc."
                ></span>
                at
              </h3>
              <p class="date-location">
                <span
                  contenteditable="true"
                  placeholder="Graduation Date"
                ></span
                >,
                <span contenteditable="true" placeholder="Location"></span>
              </p>
            </div>
            <p
              class="position-description"
              contenteditable="true"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni"
            ></p>
          </div>
        </div>
      </div>
      <div class="skills">
        <h2>Skills</h2>
        <div class="category">
          <h3 contenteditable="true" placeholder="Category One"></h3>
          <div class="skill-groups">
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="First skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Second skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Third skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Fourth skill"
            ></span>
          </div>
        </div>
        <div class="category">
          <h3 contenteditable="true" placeholder="Category Two"></h3>
          <div class="skill-groups">
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="First skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Second skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Third skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Fourth skill"
            ></span>
          </div>
        </div>
        <div class="category">
          <h3 contenteditable="true" placeholder="Category Three"></h3>
          <div class="skill-groups">
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="First skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Second skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Third skill"
            ></span>
            <span
              class="skill-group"
              contenteditable="true"
              placeholder="Fourth skill"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactDetails from "../components/ContactDetails";

export default {
  name: "ResumeTemplate",
  components: {
    ContactDetails
  },
  data() {
    return {
      cvTemplate: {
        fullName: {
          text: "",
          placeholder: "Full Name"
        },
        title: {
          text: "",
          placeholder: "Title"
        },
        contactDetails: [
          {
            type: "website",
            text: "",
            href: "",
            placeholder: "website"
          },
          {
            type: "email",
            text: "",
            href: "",
            placeholder: "email"
          },
          {
            type: "phone",
            text: "",
            placeholder: "phone"
          }
        ]
      }
    };
  },
  methods: {
    updateContentItemText(contentItem, text) {
      contentItem.text = text;
    },
    addContactDetails() {
      const contactInfo = {
        type: "contact info",
        text: "",
        placeholder: "contact info"
      };
      this.cvTemplate.contactDetails.push(contactInfo);
    },
    deleteContentItem(item, array) {
      array.splice(array.indexOf(item), 1);
      // const newArray = array.filter(()=> {
      //   return
      // })
    }
  }
};
</script>
<style scoped>
.addElemet {
  border: 2px solid #2d9cdb;
  padding: 2px 8px;
  background-color: transparent;
  opacity: 70%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  color: #2d9cdb;
  cursor: pointer;
}

.addElement:hover {
  opacity: 100%;
}
</style>
