import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createVueSui} from "sffui.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import {definePreset} from "@primeuix/themes";

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
        preset: definePreset(Aura, {
            components: {
                panel: {
                    colorScheme: {
                        light: {
                            root: {
                                background: "rgba(255, 255, 255, 0.5)"
                            }
                        },
                        dark: {
                            root: {
                                background: "rgba(18, 18, 27, 0.8)"
                            }
                        }
                    }
                }
            }
        })
    }
});

app.mount('#app');