<template>
  <div class="snowflake">
    <div v-for="row in snowflake">
      <div v-for="col in row"
           class="cell"
           :class="{ 'cell--fill': col }">
      </div>
    </div>
  </div>
</template>

<script>
  import Snowflake from '../services/snowflake';

  export default {
    props: ['size'],
    data() {
      return {
        snowflake: new Snowflake(this.size).grid,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .snowflake {
    display: flex;
    flex-flow: row wrap;
  }

  .cell {
    /*border: 1px solid red;*/
    height: 10px;
    width: 10px;
  }

  .cell--fill {
    background: black;
  }
</style>