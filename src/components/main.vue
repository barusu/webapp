<template>
  <div class="main">
    <header>
      <span v-html="title"></span>
    </header>
    <router-view class="main-content"/>
    <div class="tabbar">
      <router-link class="tab" tag="div" :to="{name: 'manage'}">
        <div class="icon">
          <o-svg type="icon20"></o-svg>
        </div>
        <!-- <p>办公</p> -->
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'component'}">
        <div class="icon">
          <o-svg type="puzzle"></o-svg>
        </div>
        <!-- <p>办案</p> -->
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'index'}">
        <div class="icon">
          <o-svg type="neko"></o-svg>
        </div>
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'addressbook'}">
        <div class="icon">
          <svg class="svg-icon" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5,38.6590919c0,2.0446014,1.6574278,3.7020264,3.7020264,3.7020264h25.9141312c2.0446014,0,3.7020836-1.6574249,3.7020836-3.7020264V5.3409081c0-2.0445995-1.6574821-3.7020273-3.7020836-3.7020273H9.2020264C7.1574278,1.6388808,5.5,3.2963085,5.5,5.3409081v1.2339902" style="fill: none; stroke: currentColor; stroke-width: 3px; stroke-linecap: round; "></path>
            <path d="M7.5000014,13.777833H1.4999986C0.6715723,13.777833,0,13.1062613,0,12.2778349V12.277832c0-0.8284264,0.6715722-1.499999,1.4999986-1.499999h6.0000029C8.3284273,10.777833,9,11.4494057,9,12.277832v0.0000029C9,13.1062613,8.3284273,13.777833,7.5000014,13.777833z M7.5000014,23.527832H1.4999986C0.6715723,23.527832,0,22.8562603,0,22.0278339v-0.0000038c0-0.8284264,0.6715722-1.4999981,1.4999986-1.4999981h6.0000029C8.3284273,20.527832,9,21.1994038,9,22.0278301v0.0000038C9,22.8562603,8.3284273,23.527832,7.5000014,23.527832zM7.5000014,34.277832H1.4999986C0.6715723,34.277832,0,33.6062584,0,32.7778358V32.777832c0-0.8284283,0.6715722-1.5,1.4999986-1.5h6.0000029C8.3284273,31.277832,9,31.9494038,9,32.777832v0.0000038C9,33.6062584,8.3284273,34.277832,7.5000014,34.277832zM22.1875305,12.402812c2.7570095,0,5,2.2429895,5,4.999999s-2.2429905,5-5,5s-5-2.2429905-5-5S19.430521,12.402812,22.1875305,12.402812 M22.1875305,10.402812c-3.8659897,0-7.000001,3.1340103-7.000001,6.999999s3.1340113,7,7.000001,7s7-3.1340103,7-7S26.0535202,10.402812,22.1875305,10.402812L22.1875305,10.402812z"></path>
            <path d="M13.1875305,32.9027748c0-4.9705486,4.0294495-8.9999981,9-8.9999981s9,4.0294495,9,8.9999981" style="fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; "></path>
          </svg>
        </div>
        <!-- <p>通讯录</p> -->
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'user'}">
        <div class="icon">
          <o-svg type="icon40"></o-svg>
        </div>
        <!-- <p>我的</p> -->
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      };
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.title = this.$route.meta.title;
      }
    },
    mounted() {
      document.body.className = 'bg02';
      this.fetchData();
    }
  }
</script>

<style lang="scss">
  .main {
    padding: 2em 0 2.5em;
  }
  .main-content {
    position: relative;
  }
  .tabbar {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 2.5rem;
    color: #bbb;
    background: #eee;
    overflow: hidden;
    > div {
      flex: 1;
      padding: .5em 5px 0;
    }
    .icon {
      height: 1.5rem;
      text-align: center;
      > .svg-icon {
        height: 100%;
      }
    }
    img {
      height: 100%;
    }
    p {
      font-size: 12px;
      line-height: 2;
      text-align: center;
    }
    .router-link-exact-active {
      color: #333;
    }
  }
</style>
