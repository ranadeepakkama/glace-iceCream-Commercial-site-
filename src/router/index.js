import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import MenuView from '@/views/MenuView.vue'
import IceCreamFlavour from '@/views/IceCreamFlavour.vue'
import CommunityEvent from '@/views/CommunityEvent.vue'
import CustomOrders from '@/views/CustomOrders.vue'
import Delivery from '@/views/Delivery.vue'
import SeasonSpecial from '@/views/SeasonSpecial.vue'
import IceCreamTypes from '@/views/IceCreamTypes.vue'
import FlavourItemView from '@/views/FlavourItemView.vue'

import { getAuth } from 'firebase/auth'


const routes = [{path: '/',name:'home',component: HomeView, meta: {requiresAuth: true}}, 
  {path:'/login',name:'Login',component:LoginView},
  {path:'/about', name:'about',component: AboutView, meta: {requiresAuth: true}},
  {path:'/blog', name:'blog',component: BlogView, meta: {requiresAuth: true}},
  {path:'/contact', name:'contact',component: ContactView, meta: {requiresAuth: true}},
  {path:'/menu', name:'menu',component: MenuView,meta: {requiresAuth: true}},
  {path:'/iceCreamFlavour', name:'flavours',component: IceCreamFlavour, meta: {requiresAuth: true}},
  {path:'/deleveries', name:'delivery',component: Delivery, meta: {requiresAuth: true}},
  {path:'/customOrders', name:'customOrder',component: CustomOrders, meta: {requiresAuth: true}},
  {path:'/communityEvent', name:'communityEvent',component: CommunityEvent, meta: {requiresAuth: true}},
  {path:'/seasonalSpecials', name:'seasonSpecial',component: SeasonSpecial, meta: {requiresAuth: true}},
  {path:'/iceCreamTypes', name:'iceCreamTypes',component:IceCreamTypes, meta: {requiresAuth: true}},
  {path:'/flavourItem', name:'flavourItem', component:FlavourItemView, meta: {requiresAuth:true}}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to,form,next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  if(requiresAuth && !user){
    next('/login')
  }
  else{
    next();
  }
})
 
export default router
