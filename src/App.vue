<template>
  <div id="app">
    <h1>Random Snowflake Generator</h1>

    <div class="demo">
      <div v-for="size in demoSizes">
        <snowflake :size="size"></snowflake>
      </div>
    </div>
  </div>
</template>

<script>
  import Snowflake from './components/Snowflake.vue';

  export default {
    name: 'app',
    data () {
      return {
        demoSizes: [16, 32, 64],
      }
    },
    components: {
      'snowflake': Snowflake,
    }
  }
</script>

<style lang="scss">
  .demo {
    display: flex;
    flex-flow: row wrap;
  }

  .snowflake {
    margin: 20px;
  }
</style>
