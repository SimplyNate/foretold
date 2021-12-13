<template>
    <forza-telemetry />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForzaTelemetry from './components/ForzaTelemetry.vue';

export default defineComponent({
  name: 'App',
  components: {
    ForzaTelemetry,
  }
});
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    border: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: ghostwhite;
    margin: 0;
    padding: 0;
    background-color: #2a2a2a;
}
</style>
