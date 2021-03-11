import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _423ed59c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _1c4cc3d1 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6d83feb7 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _14b40512 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5059c215 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _366ffbdf = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _471f7e78 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _423ed59c,
    children: [{
      path: "",
      component: _1c4cc3d1,
      name: "home"
    }, {
      path: "/login",
      component: _6d83feb7,
      name: "login"
    }, {
      path: "/register",
      component: _6d83feb7,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _14b40512,
      name: "profile"
    }, {
      path: "/settings",
      component: _5059c215,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _366ffbdf,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _471f7e78,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
