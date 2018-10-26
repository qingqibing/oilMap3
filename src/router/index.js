import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      component: Map
    }
  ]
})
