<template>
  <div>
    <div class="blockExampleBpro">
      <div class="textInsideBlock">
        Hello Deep !
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blockExampleBpro {
  color: black;
  background-color: green;
  border: 1px dashed black;
  width: 250px;
  height: 250px;
  text-align: center;
  margin: auto;
  position: relative
}
.textInsideBlock{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size:25px;
  font-weight: 600;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}
</style>
