import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createVueSui} from "sffui.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App);

app.use(createVueSui({
    dark: {
        border: "#9297FB",
        buttonBorder: "#9297FB",
        inputBorder: "#9297FB",
        fileInputBorder: "#9297FB"
    },
    light: {
        border: "#9297FB",
        buttonBorder: "#9297FB",
        inputBorder: "#9297FB",
        fileInputBorder: "#9297FB"
    }
}));

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app');