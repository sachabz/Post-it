<template>
  <div class="tc-note">
    <div class="tc-note-header"></div>
    <div class="tc-note-title" @click="EditTitle" @mouseleave="closeEditTitle">
      <textarea
        cols="18"
        rows="2"
        v-model="notecontentTitle"
        v-if="awesomeTitle"
      />
      <p v-else>{{ note.title }}</p>
    </div>
    <div class="tc-note-body">
      <textarea cols="20" rows="6" v-model="notecontent" v-if="awesome" />
      <p v-else>{{ note.body }}</p>
    </div>
    <div class="viewNote"></div>
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
  methods: {},
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
  min-height: 400px;
  height: auto;
  width: 480px;
  margin: 0 10px 20px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  .tc-note-header {
    padding: 1px 1px 0;
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
    p {
      overflow-wrap: break-word;
      width: 480px;
    }
  }
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>