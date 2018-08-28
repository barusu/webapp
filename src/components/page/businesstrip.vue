<template>
  <div class="businesstrip-page">
    <div class="group">
      <label class="input-wrapper">
        <span>出差地点</span>
        <input type="text" v-model="address" placeholder="请输入出差地点">
      </label>
    </div>
    <div class="group">
      <label class="date-wrapper">
        <span>开始时间</span>
        <input class="input" v-model="startTime" type="date">
      </label>
      <label class="date-wrapper">
        <span>结束时间</span>
        <input class="input" v-model="endTime" type="date">
      </label>
    </div>
    <div class="group">
      <label class="input-wrapper">
        <span>出差备注说明</span>
        <input type="text" v-model="mark" placeholder="请输入出差备注说明">
      </label>
      <label class="textarea-wrapper">
        <span>出差申请说明</span>
        <textarea rows="3" v-model="applyDescription" placeholder="请输入出差申请说明"></textarea>
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
    name: 'businesstrip',
    data () {
      return {
        address: '',
        startTime: null,
        endTime: null,
        mark: '',
        applyDescription: ''
      };
    },
    methods: {
      submit() {
        if(this.address && this.startTime && this.endTime && this.applyDescription) {
          var model = this.$msg({
            type: 'loading',
            full: true,
            duration: 100000
          });
          $.post('iccp-pmo-rest/v1/businessTrip/addFromApp', {
            applyPersonId: auth.id,
            tripAddress: this.type,
            tripStartTime: this.startTime + 'T00:00:00.000+0000',
            tripStopTime: this.endTime + 'T00:00:00.000+0000',
            mark: this.mark,
            applyDescription: this.applyDescription
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
      // StartTime: {
      //   set(v) {
      //     v = v.split(':');
      //     v[1] = v[1] < '30' ? '00' : '30';
      //     v = v.join(':');
      //     if(v == this.startTime) this.$forceUpdate();
      //     else this.startTime = v;
      //   },
      //   get() {
      //     return this.startTime;
      //   }
      // },
      // EndTime: {
      //   set(v) {
      //     v = v.split(':');
      //     v[1] = v[1] < '30' ? '00' : '30';
      //     v = v.join(':');
      //     if(v == this.endTime) this.$forceUpdate();
      //     else this.endTime = v;
      //   },
      //   get() {
      //     return this.endTime;
      //   }
      // }
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
  .businesstrip-page {
    padding-top: 1px;
    padding-bottom: 70px;
    .group {
      margin: 15px 0 0;
    }
  }
</style>
