import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('pv-button', Button);
app.use(i18n);

app.mount('#app');
