import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ListBook from '@/components/Book/ListBook.vue';
import EditBook from '@/components/Book/EditBook.vue';
import DeleteBook from '@/components/Book/DeleteBook.vue';
import CreateBook from '@/components/Book/CreateBook.vue';

Vue.use(VueRouter);
Vue.use(ListBook);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/books/',
    name: 'list-book',
    component: ListBook,
  },
  {
    path: '/books/create/',
    name: 'create-book',
    component: CreateBook,
  },
  {
    path: '/books/:bookID/edit/',
    name: 'edit-book',
    component: EditBook,
  },
  {
    path: '/books/:bookID/delete/',
    name: 'delete-book',
    component: DeleteBook,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
