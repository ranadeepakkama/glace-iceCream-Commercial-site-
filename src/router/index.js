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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: HomeView},
    {path:'/login',name:'Login',component:LoginView},
    {path:'/about', name:'about',component: AboutView},
    {path:'/blog', name:'blog',component: BlogView},
    {path:'/contact', name:'contact',component: ContactView},
    {path:'/menu', name:'menu',component: MenuView},
    {path:'/iceCreamFlavour', name:'flavours',component: IceCreamFlavour},
    {path:'/deleveries', name:'delivery',component: Delivery},
    {path:'/customOrders', name:'customOrder',component: CustomOrders},
    {path:'/communityEvent', name:'communityEvent',component: CommunityEvent},
    {path:'/seasonalSpecials', name:'seasonSpecial',component: SeasonSpecial},
  ],
})

export default router
