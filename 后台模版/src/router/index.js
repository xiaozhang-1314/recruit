import { createRouter, createWebHashHistory } from 'vue-router'
import { getInfo } from '../utils/optInfo'

const Home = () => import('../views/Home/Home.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const ChatList = () => import('../views/ChatList/ChatList.vue')
const Login = () => import('../views/Login/Login.vue')
const PerfectInfo = () => import('../views/PerfectInfo/PerfectInfo.vue')
const ChatDetail = () => import('../views/ChatDetail/ChatDetail.vue')
const OtherProfile = () => import('../views/OtherProfile/OtherProfile.vue')
const Search = () => import('../views/Search/Search.vue')
const BackEnd = () => import('../views/BackEnd/BackEnd.vue')
const BackUser = () => import('../views/BackEnd/ChildViews/BackUser.vue')
const BackChat = () => import('../views/BackEnd/ChildViews/BackChat.vue')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showTab: true
    }
  },
  {
    path: '/chatList',
    component: ChatList,
    meta: {
      showTab: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/perfectInfo/:_id',
    component: PerfectInfo
  },
  {
    path: '/chatDetail/:chat_id',
    component: ChatDetail
  },
  {
    path: '/otherProfile/:_id',
    component: OtherProfile
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/backEnd',
    component: BackEnd,
    children: [
      {
        path: '/backEnd',
        redirect: '/backEnd/user'
      },
      {
        path: '/backEnd/user',
        component: BackUser
      },
      {
        path: '/backEnd/chats',
        component: BackChat
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const type = getInfo('__user__').type
  if(type) {
    if(to.path === '/login') {
      return next(from.path)
    }
    if(from.path.includes('/backEnd') && !to.path.includes('/backEnd')) {
      return next(from.path)
    }
    if(type != 'admin' && to.path.includes('/backEnd') || to.path.includes('/backend')) {
      return next(from.path)
    }
  } else {
    if(to.path.includes('/backEnd') || to.path.includes('/backend')) {
      return next(from.path)
    }
  }
  next()
})

export default router
