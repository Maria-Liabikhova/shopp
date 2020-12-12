import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path:'',
    component: () => import('../components/Home.vue')
  },
  {
    path:'/login',
    component: () => import('../components/Auth/Login.vue')
  },
  {
    path: '/registern',
    component: () => import('../components/Auth/Register.vue')
  },
  {
    path: '/new',
    component: () => import('../components/Products/NewProduct.vue')
  },
  {
    path:'/product/:id',
    props: true,
    component: () => import('../components/Products/Product.vue')
  },
  {
    path:'/list',
    component: () => import('../components/Products/ProductList.vue')
  },
  {
    path:'/checkout',
    component: () => import('../components/User/Checkout.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  props: true,
  base: process.env.BASE_URL,
  routes
})

export default router;
