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
                                // background: "rgba(255, 255, 255, 0.5)"
                                background: "rgba(18, 18, 27, 0.8)",
                                borderColor: "#3f3f46"
                            }
                        },
                        dark: {
                            root: {
                                background: "rgba(18, 18, 27, 0.8)"
                            }
                        }
                    }
                },
                inputtext: {
                    colorScheme: {
                        light: {
                            root: {
                                background: "#09090b",
                                borderColor: "#52525b"
                            }
                        }
                    }
                },
                floatlabel: {
                    colorScheme: {
                        light: {
                            // @ts-ignore
                            root: {
                                color: "#a1a1aa"
                            }
                        }
                    }
                }
            }
        })
    }
});

app.mount('#app');