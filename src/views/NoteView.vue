<template>
  <button type="button" class="btn btn-secondary m-4">
    <router-link to="/" class="link-light text-decoration-none"
      >Close the note</router-link
    >
  </button>
  <div class="NoteView">
    <ViewNote :note="this.note" />
  </div>
</template>
<script>
//this.note = JSON.parse(this.$route.params.note);
import ViewNote from "@/components/ViewNote.vue";
// @ is an alias to /src
// import Note from "@/components/Note.vue";

export default {
  name: "NoteView",
  components: { ViewNote },
  data() {
    return {
      note: JSON.parse(this.$route.params.note),
    };
  },
};
console.log("ok");
</script>
<style lang="scss">
</style>

