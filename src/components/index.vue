<template>
  <div class="index">
    <div class="index-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content" @scroll="scroll">
      <div class="items">
        <router-link class="item" tag="div" :to="{name: 'news', params: {nid: i.id}}" v-for="i in list" :key="i.id">
          <div class="img-wrapper">
            <div class="img" style="background-image: url('./static/demo.jpg');"></div>
          </div>
          <div class="body">
            <p class="title" v-text="i.title"></p>
            <p class="info">
              <span class="author" v-text="i.author"></span>
              <span class="date" v-text="i.date"></span>
            </p>
            <p class="summary" v-text="i.summary"></p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';

  export default {
    name: 'index',
    data () {
      return {
        swiper: null,
        page: 0,
        pageSize: 10,
        list: []
      };
    },
    methods: {
      initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
          autoplay: true,
          direction: 'horizontal',
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        });
      },
      loadList() {
        if(this._listload || this.list.length < this.page * this.pageSize) {return; }
        this._listload = true;
        $.get('http://192.68.68.105:8080/iccp-cms-rest/v1/cms/content/pageList/157/' + (this.page + 1), {
          pageSize: this.pageSize
        }, data => {
          this._listload = false;
          this.page = data.pageNum;
          this.pageSize = data.pageSize;
          this.list = this.list.concat(data.list.map(i => {
            return {
              id: i.id,
              title: i.title,
              summary: i.summary,
              author: i.author,
              date: i.createDate.split(' ')[0]
            };
          }));
        });
      },
      scroll() {
        var el = event.target;
        if(el.scrollHeight - el.scrollTop - el.clientHeight < 75) {
          this.loadList();
        }
      }
    },
    mounted() {
      this.initSwiper();
      this.loadList();
    },
    beforeDestroy() {
      this.swiper.destroy();
    }
  }
</script>

<style lang="scss">
  .index {
    padding-top: 180px;
    .swiper-container {
      height: 100%;
    }
    .content {
      height: 100%;
      overflow: auto;
      .items {
        margin: 15px 0;
      }
      .item {
        background: #fff;
        margin-bottom: 10px;
      }
    }
    .item {
      .img-wrapper {
        position: relative;
        height: 100px;
        padding: 28% 0;
      }
      .img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center center / cover;
      }
      .body {
        overflow: hidden;
        height: 100%;
        padding: 15px 10px 10px;
      }
      .info {
        font-size: 12px;
        text-align: left;
        position: relative;
        color: #aaa;
      }
      .date {
        margin-left: 2em;
      }
      .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        font-size: 18px;
        line-height: 1;
        color: #000;
      }
      .summary {
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
        color: #666;
      }
    }
  }
  .index-swiper {
    position: absolute;
    top: 0;
    height: 180px;
    width: 100%;
    .swipe {
      height: 100%;
      width: 100%;
      background: #fff center center / cover;
    }
  }
</style>
