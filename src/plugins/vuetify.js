import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from "vuetify/lib/locale/fa";


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#006e90',
                success: '#f18f01',
                background: '#adcad6',
                secondary: '#fb5607',
            },
        },
    },
    rtl: true,
    icons: {
        iconfont: 'md'
    },
    lang: {
        current: 'fa',
        locales: {fa}
    },
});
