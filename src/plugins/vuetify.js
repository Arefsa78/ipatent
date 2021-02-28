import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from "vuetify/lib/locale/fa";


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#054a91',
                success: '#64D039',
                background: '#fff952',
                secondary: '#ffce22',
                error: '#e71d36'
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
