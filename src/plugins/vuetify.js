import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from "vuetify/lib/locale/fa";


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F05E2D',
                success: '#64D039',
                background: '#D5E68D',
                secondary: '#fb5607',
                error: '#B10906'
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
