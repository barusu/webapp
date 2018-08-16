<template>
  <div class="vacation-page">
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
        <input class="input" v-model="EndTime" type="datetime-local">
      </label>
      <!-- <p class="rs-wrapper">
        <span>时长（天）</span>
        <span class="placeholder" v-text="Duration"></span>
      </p> -->
    </div>
    <div class="group">
      <label class="textarea-wrapper">
        <span>请假事由</span>
        <textarea rows="3" v-model="cause" placeholder="请输入请假事由"></textarea>
      </label>
    </div>
    <div class="submit">
      <span class="btn" @click="submit"> 提交 </span>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';
  import auth from '@/libs/relic.js';

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
      submit() {
        if(this.type && this.startTime && this.endTime && this.cause) {
          var model = this.$msg({
            type: 'loading',
            full: true,
            duration: 100000
          });
          $.post('v1/leaveApply/addFromApp', {
            applyPersonId: auth.id,
            type: this.type,
            startTime: this.startTime + ':00.000+0000',
            endTime: this.endTime + ':00.000+0000',
            cause: this.cause
          }, data => {
            if(data && data.code === 0) {
              model.close();
              this.$router.replace({name: 'result', params: {msg: data.message}})
            }
          });
        }
      }
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
          if(v == this.endTime) {this.$forceUpdate(); }
          else {this.endTime = v; }
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
  .vacation-page {
    padding-top: 1px;
    padding-bottom: 70px;
    .group {
      margin: 15px 0 0;
    }
  }
</style>
