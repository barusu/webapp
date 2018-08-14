<template>
  <div class="cacation-page">
    <div class="group">
      <label class="select-wrapper">
        <span>请假类型</span>
        <select name="type" class="select" v-model="type">
          <option value="" disabled="disabled"></option>
          <option value="事假">事假</option>
          <option value="病假">病假</option>
          <option value="年假">年假</option>
          <option value="婚假">婚假</option>
          <option value="产假">产假</option>
          <option value="陪产假">陪产假</option>
          <option value="丧假">丧假</option>
          <option value="公假">公假</option>
          <option value="工伤假">工伤假</option>
        </select>
        <span class="placeholder" v-show="!type">请选择 &gt;</span>
      </label>
    </div>
    <div class="group">
      <label class="date-wrapper">
        <span>开始时间</span>
        <input class="input" v-model="StartTime" type="datetime-local">
      </label>
      <label class="date-wrapper">
        <span>结束时间</span>
        <input class="input" v-model="endTime" type="datetime-local">
      </label>
      <!-- <p class="rs-wrapper">
        <span>时长（天）</span>
        <span class="placeholder" v-text="Duration"></span>
      </p> -->
    </div>
    <div class="group">
      <label class="textarea-wrapper">
        <span>请假事由</span>
        <textarea rows="3" placeholder="请输入请假事由"></textarea>
      </label>
    </div>
    <div class="submit">
      <span class="btn"> 提交 </span>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';

  export default {
    name: 'vacation',
    data () {
      return {
        type: '',
        startTime: null,
        endTime: null,
        cause: ''
      };
    },
    methods: {
    },
    computed: {
      StartTime: {
        set(v) {
          v = v.split(':');
          v[1] = v[1] < '30' ? '00' : '30';
          v = v.join(':');
          if(v == this.startTime) this.$forceUpdate();
          else this.startTime = v;
        },
        get() {
          return this.startTime;
        }
      },
      EndTime: {
        set(v) {
          v = v.split(':');
          v[1] = v[1] < '30' ? '00' : '30';
          v = v.join(':');
          if(v == this.endTime) this.$forceUpdate();
          else this.endTime = v;
        },
        get() {
          return this.endTime;
        }
      }
      // Duration() {
      //   if(this.startTime && this.endTime) {
      //     var d = new Date(this.endTime) - new Date(this.startTime);
      //     return d;
      //   }
      //   return '';
      // }
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .cacation-page {
    padding-top: 5px;
    .group {
      margin: 10px 0 5px;
    }
  }
  .textarea-wrapper {
    position: relative;
    display: block;
    text-align: left;
    background: #fff;
    padding: 14px 15px;
    span {
      display: block;
    }
    textarea {
      width: 100%;
      resize: none;
      margin-top: 10px;
    }
  }
  .rs-wrapper,
  .date-wrapper,
  .select-wrapper {
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    border: 0;
    font-size: 16px;
    line-height: 1;
    padding: 14px 15px;
    text-align: left;
    margin-bottom: 1px;
    input,
    select {
      position: absolute;
      top: 0; right: 0;
      border: 0;
      outline: none;
      background: #fff;
      font-size: inherit;
      height: 100%;
      -webkit-appearance: unset;
    }
    .placeholder {
      position: absolute;
      top: 0; right: 0;
      line-height: 1;
      padding: 14px;
      pointer-events: none;
      color: #888;
    }
  }
  .rs-wrapper {
    .placeholder {
      color: #444;
    }
  }
  .btn {
    display: block;
    border-radius: 3px;
    line-height: 3;
    background: #3a98f8;
    color: #fff;
  }
  .submit {
    position: fixed;
    bottom: 0;
    padding: 10px 15px;
    width: 100%;
    background: #fff;
  }
</style>
