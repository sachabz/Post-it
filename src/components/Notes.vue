<template>
  <div class="tc-notes-wrapper">
    <h4>Local storage :</h4>
    <AddNewButton @addNote="addNote" />
    <h4>On line :</h4>
    <AddNewButton @saveNoteOnline="saveNoteOnline" />
    <div class="tc-notes">
      <Note
        v-for="(note, index) in notes"
        v-bind:key="index"
        :note="note"
        v-on:close-edit="note.body = $event"
        v-on:close-edit-title="note.title = $event"
        @deleteNote="deleteNote"
        @deleteNoteOnline="deleteNoteOnline"
      />
    </div>
  </div>
</template>

<script>
import AddNewButton from "./AddNewButton.vue";
import Note from "./Note.vue";
export default {
  name: "Notes",
  components: { Note, AddNewButton },
  data() {
    return {
      notes: [],
      newNote: null,
      awesome: false,
      awesomeTitle: false,
      notecontent: "",
      notecontentTitle: "",
    };
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      try {
        this.notes = JSON.parse(localStorage.getItem("notes"));
      } catch (e) {
        localStorage.removeItem("notes");
      }
    }
    fetch("http://5.135.119.239:3090/notes")
      .then((res) => res.json())
      .then((data) => {
        const apiNotes = data.notes;
        const result = apiNotes.map((element) => {
          const object = {
            id: element._id,
            title: element.title,
            body: element.content.join(". "),
          };
          return object;
        });
        this.notes = result;
      })
      .catch((err) => console.log(err.message));
  },
  watch: {
    notes: {
      handler(newNotes) {
        localStorage.notes = JSON.stringify(newNotes);
      },
      deep: true,
    },
  },
  methods: {
    saveNotesOnline() {
      console.log(123);
      fetch("http://5.135.119.239:3090/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test sacha",
          content: ["Description"],
        }),
      });
    },
    deleteNoteOnline() {
      fetch("http://5.135.119.239:3090/notes/" + this.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    addNote() {
      let id = this.notes.length;
      const newNote = { id: id, title: "Title", body: "Description" };
      this.notes.unshift(newNote);
      this.saveNotes();
    },
    deleteNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1);
      this.saveNotes();
    },
    closeEdit(value) {
      this.note.body = value;
      this.saveNotes();
    },
    closeEditTitle(value) {
      this.note.title = value;
      this.saveNotes();
    },
    saveNotes() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem("notes", parsed);
    },
  },
};
</script>

<!--
    AddNewButton Add "scoped" attribute to limit CSS to this component only -->
// <style lang="scss" scoped>
.tc-notes-wrapper {
  .new-note-btn {
    width: 200px;
    display: block;
    margin: 0 auto 20px;
    background-color: #fff;
    padding: 10px 32px;
    border: 1px solid #e0e0e0;
    font-size: 26px;
    outline: 0;
    transition: all 0.3s;
    cursor: pointer;
    font-family: "Caveat", cursive;
    &:hover {
      box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
    }
    &:active {
      position: relative;
      top: 1px;
    }
  }
  .tc-notes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
</style>