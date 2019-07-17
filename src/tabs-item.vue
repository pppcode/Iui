<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    inject: ['eventBus'],
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name)=> {
        this.active = name === this.name;
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style scoped lang="scss">
  $blue: blue;
  .tabs-item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    padding: 0 1em;
    cursor: pointer;
    &.active {
      color: $blue;
      font-weight: bold;
    }
  }
</style>