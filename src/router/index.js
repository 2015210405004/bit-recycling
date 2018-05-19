import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/page/Category'
import Signin from '@/page/Signin'
import Verification from '@/page/Verification'
import Personal from '@/page/Personal'
import Login from '@/page/Login'
import Index from '@/page/Index'
import Price from '@/page/Price/index'
import CompanyDetail from '@/page/CompanyDetail'
import UserHome from '@/page/UserHome/index'
import Basket from '@/page/Basket'
import Leaderboard from '@/page/Leaderboard'
import TradingHall from '@/page/TradingHall'
import Charity from '@/page/Charity'
import FillOrder from '@/page/FillOrder'
import Address from '@/page/Address'
import Addaddr from '@/page/Addaddr'
import ThemeDay from '@/page/ThemeDay'
import OrderList from '@/page/OrderList'
import Evaluation from '@/page/Evaluation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserHome',
      component: UserHome,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/companyDetail',
      name: 'CompanyDetail',
      component: CompanyDetail
    },
    {
      path: '/userHome',
      name: 'UserHome',
      component: UserHome
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/tradingHall',
      name: 'TradingHall',
      component: TradingHall
    },
    {
      path: '/charity',
      name: 'Charity',
      component: Charity
    },
    {
      path: '/fillOrder/:id',
      name: 'FillOrder',
      component: FillOrder
    },
    {
      path: '/themeDay',
      name: 'ThemeDay',
      component: ThemeDay
    },
    ,
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    }
    ,
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    }
    ,
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
    ,
    {
      path: '/addaddr',
      name: 'Addaddr',
      component: Addaddr
    }
  ]
})
