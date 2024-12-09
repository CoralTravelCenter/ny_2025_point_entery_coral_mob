import {notAuth} from "./not-auth/not-auth.js";
import {auth} from "./auth/auth.js";
import {appendOnce, hostReactAppReady} from "./usefuls.js";
import Cookies from 'js-cookie'
import MicroModal from 'micromodal';
import './not-auth/not-auth.scss'
import './auth/auth.scss'
import 'animate.css';
import './modal.css'

const gamePage = 'https://www.coral.ru/games/new-year/?banner_on_site=main-teaser-ny'
const placeToInsert = document.body
const root = document.createElement('div');
const modalId = 'sled-overlay';
root.classList.add('ny_notauth_colba')
MicroModal.init();

hostReactAppReady().then(() => {
	if (location.origin.includes('backoffice')) return
	if (Cookies.get('next-auth.session-token')) {
		appendOnce(placeToInsert, auth(root, modalId, gamePage));
		console.log('auth')
	} else {
		appendOnce(placeToInsert, notAuth(root, modalId, gamePage));
		console.log('not-auth')
	}
})