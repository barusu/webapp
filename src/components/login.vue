<template>
  <div class="login">
    <div class="logo">
      <o-svg type="neko"></o-svg>
    </div>
    <div class="form">
      <div class="filed">
        <o-svg type="user"></o-svg>
        <input type="text" class="name" v-model="uid" placeholder="用户名 / 邮箱" autoComplete="off">
      </div>
      <div class="filed">
        <o-svg type="lock"></o-svg>
        <input type="password" class="psw" v-model="psw" autoComplete="new-password">
      </div>
    </div>
    <div class="btn-fixed">
      <div class="btn" @click="login">登录</div>
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
        // $.post('http://122.224.144.76:8011/mock/5b67b1a88b2e004e4c872c4d/v1/user/appLogin', {
        $.post('iccp-pmo-rest/v1/user/appLogin', {
          userName: this.uid,
          password: this.psw
        }, data => {
          if(data.status) {
            data.person.token = data.token;
            auth.setUser(data.person);
            this.$router.push({name: 'index'});
          }
        });
      }
    },
    mounted() {
      document.body.className = 'bg01';
    }
  }
</script>

<style lang="scss">
  .login {
    position: relative;
    overflow: hidden;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: -1%; left: -2%;
    //   display: block;
    //   width: 104%;
    //   height: 102%;
    //   background: url('/static/bg01.jpg') center / cover;
    //   z-index: -1;
    //   filter: blur(3px);
    // }
    .logo {
      width: 50%;
      margin: 10% auto 0;
      color: #fff;
    }
    .form {
      padding: 5%;
      .filed {
        position: relative;
        border-bottom: 1px solid #fff;
        padding-left: 2.5em;
        margin-bottom: .7em;
        .svg-icon {
          position: absolute;
          left: .5em; top: .5em;
          width: 1.5em;
          color: #fff;
        }
      }
      input {
        display: block;
        width: 100%;
        font-size: 16px;
        line-height: 2.5;
        border: 0;
        padding: 0 .5em;
        background: transparent;
        -webkit-appearance: unset;
        color: #fff;
      }
      input::-webkit-input-placeholder {color: #fff; }
      input:-moz-placeholder {color: #fff; }
      input::-moz-placeholder {color: #fff; }
      input:-ms-input-placeholder {color: #fff; }
    }
    .btn-fixed {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 15px 5%;
      .btn {
        padding: 4px;
        line-height: 2;
        border-radius: 5px;
        border: 2px solid #fff;
        color: #fff;
        text-align: center;
        background: transparent;
      }
    }
  }
</style>
