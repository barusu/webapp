import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Page from '@/components/page'
import Login from '@/components/login'

import Index from '@/components/index'
import Manage from '@/components/manage'
import User from '@/components/user'
import Workbench from '@/components/workbench'
import AddressBook from '@/components/addressbook'

import Meet from '@/components/page/meet'
import Vacation from '@/components/page/vacation'
import News from '@/components/page/news'
import Result from '@/components/page/result'
import Record from '@/components/page/record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
        path: '',
        name: 'index',
        component: Index
      }, {
        path: 'manage',
        name: 'manage',
        component: Manage
      }, {
        path: 'user',
        name: 'user',
        component: User
      }, {
        path: 'workbench',
        name: 'workbench',
        component: Workbench
      }, {
        path: 'addressbook',
        name: 'addressbook',
        component: AddressBook
      }]
    }, {
      path: '/page',
      component: Page,
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
        props: true,
        component: Record
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
