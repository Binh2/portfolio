// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import "./styles/global.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push(
    { charset: 'utf-8' },
    // { name: 'keywords', content: 'HTML,CSS,XML,JavaScript' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  )
}
