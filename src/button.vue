<template>
  <!-- CSS 控制类，再去添加对应的样式（改变元素的展示顺序） -->
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <!--  拆分icon组件  -->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
  <!--  代码重复的问题
  <button class="g-button" v-if="!iconPosition || iconPosition === 'left'">
    用户只需要传入相关参数即可使用，这里是实现逻辑
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
  <button class="g-button" v-else>
    <slot></slot>
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
  </button>
  -->
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'GuluButton',
    components: {
      'g-icon': Icon
    },
    // props: ['icon', 'iconPosition'], iconPosition 不传值得话为undefined
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        // 防错处理，如果传的不是right和left就报错
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em; /* 不固定宽度,左右padding和字体大小相关 */
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center; /* flex盒子内的元素居中 */
    align-items: center;
    vertical-align: middle; /* 使内联元素（外部元素）上下对齐 */

    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .g-button-content { order: 2; }
    > .icon { order: 1; margin-right: .1em; }

    &.icon-right {
      > .g-button-content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em; }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }

</style>