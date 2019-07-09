<template>
  <!-- CSS 控制类，再去添加对应的样式（改变元素的展示顺序） -->
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <!--  拆分icon组件  -->
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
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
  export default {
    // props: ['icon', 'iconPosition'], iconPosition 不传值得话为undefined
    props: {
      icon: {},
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
<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em; /* 不固定宽度,左右padding和字体大小相关 */
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; /* 使内联元素上下对齐 */

    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .content { order: 2; }
    > .icon { order: 1; margin-right: .3em; }

    &.icon-right {
      > .content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .3em; }
    }
  }

</style>