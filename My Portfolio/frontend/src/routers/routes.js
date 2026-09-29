import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    // Добавляем параметры в путь через двоеточие
    path: '/error/:errorCode/:errorMessage/:missingData',
    name: 'ErrorData',
    component: () => import('../components/errors/ApiError.vue'),
    props: true // Это автоматически прокинет параметры пути в props компонента
  },
]

export default routes