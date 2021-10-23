<template lang="pug">
.lines
  line-svg
  line-svg
  line-svg
  line-svg
  line-svg
</template>

<script>
// import XXX from "@/components/XXX.vue";
import LineSvg from './Line'
export default {
  name: 'LinesSvg',
  components: { LineSvg },
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
//Project Specific
.lines {
  max-width: 1140px;
  width: 100%;
  position: relative;
  @include breakpoint(lg) {
    top: 35vh;
  }
  &.is-animated {
    .line {
      svg {
        path {
          stroke-dasharray: 1800;
          opacity: 0;
          animation: fill 16s linear both infinite;
        }
      }
    }
  }
  .line {
    position: absolute;

    @for $n from 1 through 5 {
      &:nth-child(#{$n}) {
        $hue: 29 + ($n * 4);
        $saturation: 29% + ($n * 4);
        $lightness: 49% + $n;
        top: calc(#{$n} * 4vh);
        max-width: 1320px;
        overflow: hidden;
        svg {
          path {
            stroke: hsl($hue $saturation $lightness);
            animation-delay: (#{$n * 2}s);
          }
        }
      }
    }
  }
}
@keyframes fill {
  0% {
    stroke-dashoffset: 1800;
    opacity: 1;
  }
  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
  100% {
    opacity: 0;
    stroke-dashoffset: -1000;
  }
}
</style>
