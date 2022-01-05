<template>
  <div class="tc-note">
    <div class="tc-note-header">
      <span @click="deleteNote" class="tc-note-close"> X </span>
      <span @click="deleteNoteOnline" class="tc-note-close"> @ </span>
    </div>
    <div class="tc-note-title" @click="EditTitle" @mouseleave="closeEditTitle">
      <textarea
        cols="18"
        rows="2"
        v-model="notecontentTitle"
        v-if="awesomeTitle"
      />
      <p v-else>{{ note.title }}</p>
    </div>
    <div
      class="tc-note-body"
      @ViewNote="ViewNote"
      @click="Edit"
      @mouseleave="closeEdit"
    >
      <textarea cols="20" rows="6" v-model="notecontent" v-if="awesome" />
      <p v-else-if="note.body.length > 82">
        {{ note.body.substring(0, 82) + " ..." }}
      </p>
      <p v-else>{{ note.body }}</p>
    </div>
    <div class="viewNote"></div>
    <router-link
      :to="{
        name: 'NoteView',
        params: { note: JSON.stringify(this.note), id: this.note.id },
      }"
      >See the note</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteNoteOnline() {
      this.$emit("deleteNoteOnline", this.note);
    },
    deleteNote() {
      this.$emit("deleteNote", this.note);
    },
    ViewNote() {
      this.$emit("ViewNote", this.note);
    },
    Edit($event) {
      console.log("Edit:", $event);
      this.awesome = true;
      this.notecontent = this.note.body;
    },
    closeEdit($event) {
      if (this.awesome == true) {
        console.log("closeEdit:", $event);
        this.awesome = false;
        this.$emit("close-edit", this.notecontent);
      }
    },
    EditTitle($event) {
      console.log("EditTitle:", $event);
      this.awesomeTitle = true;
      this.notecontentTitle = this.note.title;
    },
    closeEditTitle($event) {
      if (this.awesomeTitle == true) {
        console.log("closeEditTitle:", $event);
        this.awesomeTitle = false;
        this.$emit("close-edit-title", this.notecontentTitle);
      }
    },
  },
  data() {
    return {
      awesome: false,
      awesomeTitle: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tc-note {
  background-color: #f0c806;
  border-radius: 8px;
  width: 280px;
  margin: 0 10px 20px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Caveat", cursive;
  .tc-note-header {
    padding: 10px 16px 0;
    .tc-note-close {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      line-height: 24px;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      &:focus {
        box-shadow: inset 2px 3px 0px rgba(0, 0, 0, 0.8);
      }
    }
    .tc-note-close {
      float: right;
    }
  }
  .tc-note-title,
  .tc-note-body {
    outline: 0;
    overflow-wrap: break-word;
  }
  .tc-note-title {
    font-size: 24px;
    padding: 10px 16px;
    font-weight: bold;
  }
  .tc-note-body {
    font-size: 20px;
    padding: 10px 16px 16px;
  }
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>