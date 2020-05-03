import Vue from 'vue'
import Vuetify from 'vuetify';
import '!style-loader!css-loader!vuetify/dist/vuetify.min.css'


const opts = {
    icon: {
        iconfont: 'mdi',
    }
};
Vue.use(Vuetify);

export default new Vuetify(opts);