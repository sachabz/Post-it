<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};

fetch("http://5.135.119.239:3090/notes")
  .then((res) => res.json())
  .then((data) => (this.notes = data))
  .catch((err) => console.log(err.message));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
