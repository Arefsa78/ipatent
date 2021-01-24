API = {
	LOGIN: "",
	SIGNUP: "",
	COMPELETE_USER_DATA: "",
	SUBMIT_IDEA: "",
	SUBMIT_PATENT: "",
	SUBMIT_IDEA_FORM: "", // by form id
	SUBMIT_PATENT_FORM: "", // by form id
	GET_USER_PATENTS: "",
	GET_ALL_PATENTS: "",
	GET_USER_INFO: "",
	CONFIRM_IDEA_FORM: "",
	CONFIRM_PATENT_FORM: "",
	GET_IDEA_FORMS: "",
	GET_PATENT_FORMS: "",
}

SIGNUP_BODY = {
	name: "",
	phone: "",
	password: "",
}

COMPELETE_USER_DATA_BODY = {
	codeMelli: "",
	email: "",
}

SUBMIT_IDEA_BODY = {
	title: "",
	informations: "",
	tags: []
}

GET_IDEA_FORMS_BODY = {
	title: ''
	currentLevel: 4,
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


}