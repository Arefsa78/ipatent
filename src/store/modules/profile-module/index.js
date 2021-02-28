const state = {
    user: {},
};

const mutations = {
    setUser(state, item) {
        state.user = item;
    }
};

const actions = {
    getUser(context,) {
        let user = {
            ideas: [
                {
                    name: "اختراع جدید",
                    date: "1399/9/9",
                    step: 7,
                    levelStats: [
                        {
                            name: "ارزیابی",
                            time: "1398/2/3"
                        },
                        {
                            name: "proposal",
                            time: "1398/2/3"
                        },
                        {
                            name: "ارزیابی تکمیلی",
                            time: "1398/2/3"
                        },
                        {
                            name: "آزمایش",
                            time: "1398/2/3"
                        },
                        {
                            name: "مقاله نویسی",
                            time: "1398/2/3"
                        },
                        {
                            name: "آزمایش",
                            time: "1398/2/3"
                        },
                        {
                            name: "مقاله نویسی",
                            time: "1398/2/3"
                        }
                    ]
                },
                {
                    name: "ایده‌ی اول",
                    date: "1399/9/9",
                    step: 5,
                    levelStats: [
                        {
                            name: "ارزیابی",
                            time: "1398/2/3"
                        },
                        {
                            name: "proposal",
                            time: "1398/2/3"
                        },
                        {
                            name: "ارزیابی تکمیلی",
                            time: "1398/2/3"
                        },
                        {
                            name: "آزمایش",
                            time: "1398/2/3"
                        },
                        {
                            name: "مقاله نویسی",
                            time: "1398/2/3"
                        }
                    ]
                },
                // {
                //     name: "ایده‌ی دوم",
                //     date: "1399/9/9",
                //     step: 3,
                //     levelStats: [
                //         {
                //             name: "ارزیابی",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "proposal",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "ارزیابی تکمیلی",
                //             time: "1398/2/3"
                //         },
                //     ]
                //
                // },
                // {
                //     name: "ایده‌ی اول",
                //     date: "1399/9/9",
                //     step: 5,
                //     levelStats: [
                //         {
                //             name: "ارزیابی",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "proposal",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "ارزیابی تکمیلی",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "آزمایش",
                //             time: "1398/2/3"
                //         },
                //         {
                //             name: "مقاله نویسی",
                //             time: "1398/2/3"
                //         }
                //     ]
                // },
                {
                    name: "ایده‌ی دوم",
                    date: "1399/9/9",
                    step: 3,
                    levelStats: [
                        {
                            name: "ارزیابی",
                            time: "1398/2/3"
                        },
                        {
                            name: "proposal",
                            time: "1398/2/3"
                        },
                        {
                            name: "ارزیابی تکمیلی",
                            time: "1398/2/3"
                        },
                    ]

                },
            ]
        }
        // let response = await axios.get(GET_PRESENTATION_TEAM);
        context.commit('setUser', user);
    },
};

const getters = {
    user: (state) => state.user,
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}