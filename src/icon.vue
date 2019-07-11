<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    props: ['name']
  }
</script>
<style lang="scss">
  /* 宽高都是1：1，用em和字体关联 */
  .g-icon {
    width: 1em;
    height: 1em
  }
</style>