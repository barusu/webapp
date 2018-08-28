// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/swiper.css'
import oo from '@/components/base/index.js';
import auth from '@/libs/relic.js';

Vue.use(oo);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.isLogin) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

// var overscroll = function(el) {
//   el.addEventListener('touchstart', function() {
//     var top = el.scrollTop;
//     var totalScroll = el.scrollHeight;
//     var currentScroll = top + el.offsetHeight;
//     if(top === 0) {
//       el.scrollTop = 1;
//     } else if(currentScroll === totalScroll) {
//       el.scrollTop = top - 1;
//     }
//   });
//   el.addEventListener('touchmove', function(evt) {
//     if(el.offsetHeight < el.scrollHeight)
//       evt._isScroller = true;
//   });
// }
// var slist = document.querySelectorAll('.scroll');
// for(var i = 0; i < slist.length; i++) {
//   overscroll(slist[i])
// }
// document.addEventListener('touchmove', function(event) {
//   if(!event._isScroller) {
//     event.preventDefault();
//   }
// }, false);