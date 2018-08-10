<template>
  <div class="login">
    <div class="logo">
      <o-svg type="apple"></o-svg>
    </div>
    <div class="form">
      <input type="text" class="name">
      <input type="password" class="psw">
      <div class="submit" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    login() {
      this.$router.push({name: 'index'});
    }
  }
}
</script>

<style lang="scss">
  .login {
    .logo {
      width: 30%;
      margin: 20% auto 5%;
    }
    .form {
      padding: 15px;
      input {
        display: block;
        width: 100%;
        font-size: 16px;
        line-height: 1;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 5px;
      }
      .submit {
        padding: 4px;
        line-height: 2;
        border-radius: 5px;
        background: #09bb07;
        color: #fff;
      }
    }
  }
</style>
