import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _423ed59c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _1c4cc3d1 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6d83feb7 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _14b40512 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5059c215 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _366ffbdf = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _471f7e78 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
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

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
