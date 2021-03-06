<template>
  <div class="o-message" :class="{'open': !isClose, 'full': full}">
    <div>
      <div class="o-message-content" :class="type">
        <span class="message-icon" v-if="icon" :class="icon">
          <o-svg :type="icon"></o-svg>
        </span>
        <span v-html="message"></span>
      </div>
    </div>
  </div>
</template>

<script>
  const icons = {
    success: 'ok',
    warning: 'warn',
    error: 'error',
    loading: 'loading'
  };

  export default {
    data() {
      return {
        type: '',
        message: '',
        closed: null,
        duration: 3000,
        isClose: true,
        icon: '',
        full: false
      };
    },
    methods: {
      close() {
        this.isClose = true;
        if (typeof this.closed === 'function') {
          this.closed();
        }
        setTimeout(() => {
          this.$destroy();
        }, 500);
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.isClose) {
            this.close();
          }
        }
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.isClose) {
              this.close();
            }
          }, this.duration);
        }
      }
    },
    mounted() {
      this.startTimer();
      if(this.type && !this.icon) {
        this.icon = icons[this.type];
      }
      document.addEventListener('keydown', this.keydown);
      this.$nextTick(() => {
        setTimeout(() => {
          this.isClose = false;
        }, 14);
      });
    },
    beforeDestroy() {
      this.$el.parentNode.removeChild(this.$el);
      document.removeEventListener('keydown', this.keydown);
    }
  };
</script>

<style lang="scss">
  .o-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 210;
    pointer-events: none;
    font-size: .14rem;
    opacity: 0;
    transition: all .34s;
    > div {
      margin: auto;
      text-align: center;
    }
    .o-message-content {
      padding: 10px 16px;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,.15);
      background: #fff;
      display: inline-block;
      transform: translate3d(0,-150%,0);
      transition: all .34s;
      pointer-events: all;
      > span {
        line-height: 1.5;
        display: inline-block;
      }
    }
    .message-icon {
      position: relative;
      top: -2px;
      width: 1.5em;
      height: 1.5em;
      &.ok {color: #52c41a; }
      &.warn {color: #faad14; }
      &.error{color: #f5222d; }
    }
    &.open {
      top: .16rem;
      opacity: 1;
      .o-message-content {
        transform: translate3d(0,0,0);
      }
    }
    &.full {
      top: 0;
      height: 100%;
      pointer-events: all;
      > div {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translate(0 ,-70%);
      }
      .o-message-content {
        width: 30%;
        padding: 0;
        background: hsla(0, 0%, 0%, .7);
        color: #fff;
        &::before {
          content: '';
          display: block;
          width: 100%;
          padding: 15% 0;
        }
        &::after {
          content: '';
          display: block;
          width: 100%;
          padding: 10% 0;
        }
        .message-icon {
          display: block;
          margin: auto;
          width: 2.5em;
          height: 2.5em;
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>