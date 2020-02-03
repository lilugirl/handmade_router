import {
  Router
} from './router.js'

const router = new Router()
router.mode = 'hash'
router.root = 'http://localhost:8080'
router.add({
  name: 'home',
  path: '/home',
  handler: () => console.log('handler to home')
})

router.add({
  name: 'about',
  path: '/about',
  handler: () => console.log('handler to about')
})

router.add({
  name: 'contact',
  path: '/contact',
  handler: () => console.log('handler to contact')
})

router.add({
  name: 'user',
  path: '/user/:id/:action',
  handler: (params) => console.log('user handler params')
})

const activeRoutes = Array.from(document.querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
  e.preventDefault();
  router.navigate(e.target.getAttribute('route'))
}, false))
