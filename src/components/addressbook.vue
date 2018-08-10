<template>
  <div class="addressbook-page">
    <div class="search-wrpaaer">
      <div class="search-input">
        <input type="text" class="search" :class="{'input': search}" placeholder="搜索" v-model="search">
        <div class="search-icon">
          <svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M992.256 871.40352l-242.54464-206.29504c-25.06752-22.56896-51.89632-32.93184-73.54368-31.92832 57.26208-67.072 91.83232-154.07104 91.83232-249.18016 0-212.0704-171.9296-384-384-384s-384 171.9296-384 384 171.9296 384 384 384c95.08864 0 182.10816-34.59072 249.18016-91.8528-1.00352 21.66784 9.35936 48.47616 31.92832 73.54368l206.29504 242.54464c35.328 39.23968 93.02016 42.55744 128.22528 7.35232s31.88736-92.89728-7.35232-128.22528zM384 640c-141.39392 0-256-114.60608-256-256s114.60608-256 256-256 256 114.60608 256 256-114.60608 256-256 256z"></path>
          </svg>
        </div>
        <div class="clear-icon" v-if="search">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 64C264.64 64 64 264.576 64 512c0 247.36 200.64 448 448 448 247.488 0 448-200.64 448-448C960 264.576 759.488 64 512 64zM698.24 640.128c16.64 16.64 17.152 43.2 1.024 59.264-16 16.128-42.496 15.552-59.136-1.088L512 570.176 383.872 698.24c-16.64 16.704-43.264 17.216-59.264 1.216-16-16.064-15.488-42.624 1.28-59.328l128-128L325.76 384C308.992 367.232 308.608 340.736 324.608 324.672 340.608 308.544 367.232 309.12 383.872 325.76l128.192 128.128 128.064-128.064c16.512-16.768 43.264-17.216 59.264-1.152 16 16 15.616 42.56-1.152 59.264L570.112 512 698.24 640.128z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="group-items">
      <div class="item" v-for="i in 4">
        <div class="img-wrapper"></div>
        <p>浙江省检察院</p>
      </div>
    </div>
    <div class="person-items">
      <div class="item" v-for="i in 99">
        <div class="img-wrapper"></div>
        <p>张三</p>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from '@/libs/ajax.js';

  export default {
    name: 'addressbook',
    data () {
      return {
        search: ''
      };
    },
    methods: {
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .addressbook-page {
    .search-wrpaaer {
      padding: 10px;
    }
    .search-input {
      position: relative;
      font-size: 14px;
      color: #000;
      border: 1px solid #eee;
      background: #fff;
      border-radius: 4px;
      padding: 4px 7px;
    }
    .search-icon {
      position: absolute;
      top: 3px;
      left: 50%;
      transform: translate(-2.5em);
      color: #bbb;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .clear-icon {
      position: absolute;
      top: 3px;
      right: 5px;
      color: #bbb;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .search {
      width: 100%;
      line-height: 1;
      caret-color: #4465bd;
      text-align: center;
      &.input,
      &:focus {
        text-align: left;
        padding-left: 1.5em;
        + .search-icon {
          left: 3em;
        }
      }
    }
    .person-items,
    .group-items {
      background: #fff;
      margin-bottom: 15px;
      .item {
        line-height: 2;
        padding: .5em 0;
        border-top: 1px solid #eee;
        text-align: left;
        &:first-child {
          border: 0;
        }
        > p {
          overflow: hidden;
        }
      }
      .img-wrapper {
        width: 2em;
        height: 2em;
        border-radius: 3px;
        margin: 0 15px;
        background: #eee;
        float: left;
      }
    }
  }
</style>
