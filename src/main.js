import { createApp } from 'vue'
import layout from './layouts/default.vue'
import {router, store} from "./plugins";
createApp(layout)
    .use(store)
    .use(router)
    .mount('#app')
