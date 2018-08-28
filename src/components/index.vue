<template>
  <div class="index">
    <div class="item" v-for="i in list">
      <div class="img" style="background-image: url(http://www.saber.red/resource/bl01.jpg);"></div>
      <div class="title" v-text="i.title"></div>
      <div class="summary" v-text="i.summary"></div>
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
      // initSwiper() {
      //   this.swiper = new Swiper('.swiper-container', {
      //     autoplay: true,
      //     direction: 'horizontal',
      //     loop: true,
      //     // 如果需要分页器
      //     pagination: {
      //       el: '.swiper-pagination'
      //     }
      //   });
      // },
      loadList() {
        if(this._listload || this.list.length < this.page * this.pageSize) {return; }
        this._listload = true;
        $.get('iccp-cms-rest/v1/cms/content/pageList/157/' + (this.page + 1), {
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
      // this.initSwiper();
      this.loadList();
    },
    beforeDestroy() {
      // this.swiper.destroy();
    }
  }
</script>

<style lang="scss">
  .index {
    padding-top: 5px;
    .item {
      margin: 0 5px 5px;
      border-radius: 4px;
      background: #fff;
      box-shadow: 1px 1px 5px #999;
      overflow-x: hidden;
      .img {
        padding-top: 56%;
        background: no-repeat center / cover;
      }
      .title {
        font-weight: 600;
        margin-top: 1em;
        padding: 0 7px;
        font-size: 14px;
      }
      .summary {
        font-size: 12px;
        color: #666;
        padding: .5em 7px 1em;
      }
    }
  }
</style>
