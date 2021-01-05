const state = {
    process: {},
};

const mutations = {
    setProcess(state, item) {
        state.process = item;
    }
};

const actions = {
    getProcessUser(context,) {
        let process = {
            levelStats: {
                1: {
                    ideaTitle: "یه ایده‌ی جالب",
                    content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
                },
                2: {
                    ideaTitle: "یه ایده‌ی جالب",
                    content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
                },
                3: {
                    ideaTitle: "یه ایده‌ی جالب",
                    content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
                },
                4: {
                    ideaTitle: "یه ایده‌ی جالب",
                    content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
                }
            },
            level: 2
        }
        // let response = await axios.get(GET_PRESENTATION_TEAM);
        context.commit('setProcess', process);
    },
};

const getters = {
    process: (state) => state.process,
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}