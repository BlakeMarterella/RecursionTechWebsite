import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './style.css'

import App from './App.vue'

library.add(faPhone, faEnvelope);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
