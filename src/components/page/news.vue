<template>
  <div class="news-page">
    <div class="title" v-text="title"></div>
    <div class="info">
      <span class="author" v-text="author"></span>
      <span class="date" v-text="date"></span>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';

  export default {
    name: 'news',
    data () {
      return {
        title: '',
        author: '',
        date: '',
        content: ''
      };
    },
    props: ['nid'],
    methods: {
      loadData() {
        $.get('iccp-cms-rest/v1/cms/content/newsView/' + this.nid, data => {
          console.log(data);
          this.title = data.contentExt.title;
          this.author = data.contentExt.author;
          this.date = data.contentExt.createDate;
          this.content = data.contentTxt.txt;
        });
      }
    },
    computed: {
    },
    mounted() {
      this.loadData();
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .news-page {
    padding: 20px 16px 12px;
    text-align: left;
    .title {
      font-size: 22px;
      line-height: 1.4;
      color: #444;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: .5em;
    }
    .info {
      margin-bottom: 1em;
    }
    .author {
      color: #576b95;
      font-size: 14px;
    }
    .date {
      font-size: 14px;
      color: #888;
    }
    .content {
      * {
        background-color: transparent !important;
      }
    }
  }
</style>
