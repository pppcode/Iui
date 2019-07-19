<template>
  <div class="collapse">
    <div>
      {{title}}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluCollapse"
  }
</script>

<style scoped lang=scss>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
    /*border-bottom: none;*/
  }

</style>