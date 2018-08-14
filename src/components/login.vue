<template>
  <div class="login">
    <div class="logo">
      <o-svg type="apple"></o-svg>
    </div>
    <div class="form">
      <input type="text" class="name" v-model="uid" autoComplete="off">
      <input type="password" class="psw" v-model="psw" autoComplete="new-password">
      <div class="login" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
  import auth from '@/libs/relic';
  import $ from '@/libs/ajax';

  export default {
    data () {
      return {
        uid: 'admin',
        psw: '123456'
      }
    },
    methods: {
      login() {
        $.post('v1/user/appLogin', {
          name: this.uid,
          password: this.psw
        }, data => {
          if(data.status) {
            data.person.token = data.token;
            auth.setUser(data.person);
            this.$router.push({name: 'index'});
          }
        });
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
        -webkit-appearance: unset;
      }
      .login {
        padding: 4px;
        line-height: 2;
        border-radius: 5px;
        background: #09bb07;
        color: #fff;
      }
    }
  }
</style>
