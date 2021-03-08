const API_PERFIX = "http://localhost/energy_project/src/Controller/mainController.php/"

export const API = {
	USER: API_PERFIX + 'User',
	LOGIN: API_PERFIX + "auth",
	SIGNUP: API_PERFIX + "User",
	REFRESH: API_PERFIX + "refresh",
	USER_IDEAS: API_PERFIX + "Idea",
	USER_PATENTS: API_PERFIX + "Patent",
	COMPELETE_USER_DATA: API_PERFIX + "",
	SUBMIT_IDEA: API_PERFIX + "Idea",
	SUBMIT_PATENT: API_PERFIX + "",
	SUBMIT_IDEA_FORM: API_PERFIX + "", // by form id
	SUBMIT_PATENT_FORM: API_PERFIX + "", // by form id
	GET_USER_PATENTS: API_PERFIX + "",
	GET_ALL_PATENTS: API_PERFIX + "",
	GET_USER_INFO: API_PERFIX + "",
	CONFIRM_IDEA_FORM: API_PERFIX + "",
	CONFIRM_PATENT_FORM: API_PERFIX + "",
	GET_IDEA_FORMS: API_PERFIX + "",
	GET_PATENT_FORMS: API_PERFIX + "",
}
// SIGNUP_BODY = {
// 	name: "",
// 	phone: "",
// 	password: "",
// }
//
// COMPELETE_USER_DATA_BODY = {
// 	codeMelli: "",
// 	email: "",
// }
//
// SUBMIT_IDEA_BODY = {
// 	title: "",
// 	informations: "",
// 	tags: []
// }
//
// GET_IDEA_FORMS_BODY = {
// 	title: ''
// 	currentLevel: 4,
// 	levelStats: {
//         1: {
//             ideaTitle: "یه ایده‌ی جالب",
//             content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
//         },
//         2: {
//             ideaTitle: "یه ایده‌ی جالب",
//             content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
//         },
//         3: {
//             ideaTitle: "یه ایده‌ی جالب",
//             content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
//         },
//         4: {
//             ideaTitle: "یه ایده‌ی جالب",
//             content: "این یک ایده خیلی جالب هست که قراره کل دنیا رو پشم ریزون کنه. حتی ممکنه چندتا کشته بدیم از شدت تعجب، خیلی نمیخوام راجب بهش صحبت کنم تا شما رو به خطر نندازم، فعلا."
//         }
//     },
//
//
// }