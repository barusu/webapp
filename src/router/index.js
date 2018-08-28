import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Page from '@/components/page'
import Login from '@/components/login'

import Index from '@/components/index'
import Manage from '@/components/manage'
import User from '@/components/user'
import Component from '@/components/component'
import AddressBook from '@/components/addressbook'

import Meet from '@/components/page/meet'
import Vacation from '@/components/page/vacation'
import News from '@/components/page/news'
import Result from '@/components/page/result'
import Record from '@/components/page/record'
import Auditing from '@/components/page/auditing'
import BusinessTrip from '@/components/page/businesstrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      meta: {requiresAuth: true},
      children: [{
        path: '',
        name: 'index',
        meta: {title: '首页'},
        component: Index
      }, {
        path: 'manage',
        name: 'manage',
        meta: {title: '首页'},
        component: Manage
      }, {
        path: 'user',
        name: 'user',
        meta: {title: '我的'},
        component: User
      }, {
        path: 'component',
        name: 'component',
        meta: {title: '组件'},
        component: Component
      }, {
        path: 'addressbook',
        name: 'addressbook',
        meta: {title: '通讯录'},
        component: AddressBook
      }]
    }, {
      path: '/page',
      component: Page,
      meta: {requiresAuth: true},
      children: [{
        path: 'meet',
        name: 'meet',
        component: Meet
      }, {
        path: 'vacation',
        name: 'vacation',
        component: Vacation
      }, {
        path: 'news/:nid',
        name: 'news',
        props: true,
        component: News
      }, {
        path: 'record',
        name: 'record',
        component: Record
      }, {
        path: 'auditing',
        name: 'auditing',
        component: Auditing
      }, {
        path: 'businesstrip',
        name: 'businesstrip',
        component: BusinessTrip
      }, {
        path: 'result',
        name: 'result',
        props: true,
        component: Result
      }]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
