<template lang="pug">
  .line
    <svg width="1584" height="181" viewBox="0 0 1584 181" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 3C1.59531 3 171.201 3 302.624 3C350.092 3 369.66 63.8157 331.157 91.5787V91.5787C293.81 118.509 312.861 177.5 358.905 177.5H1583.5" stroke="#AF944D" stroke-width="6"/>
    </svg>
</template>

<script>
  // import XXX from "@/components/XXX.vue";
  export default {
    name: 'LineSvg',
    components: {},
    props: {},
    data: () => ({}),
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  //Project Specific
  .line {
    svg {
      width: 320px;
      @include breakpoint(sm) {
        width: 800px;
      }
      @include breakpoint(md) {
        width: 1320px;
      }
    }
  }


</style>
