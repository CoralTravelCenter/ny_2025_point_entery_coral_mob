import MicroModal from 'micromodal';
import {generateModal} from "../modal.js";

export function notAuth(root, modalId, gamePage) {
	const colbaContainer = document.createElement('div');
	colbaContainer.classList.add('ny_notauth_colba__container')

	const colbaImg = document.createElement('img')
	colbaImg.classList.add('ny_notauth_colba__img')
	colbaImg.src = 'https://b2ccdn.coral.ru/content/ny_colba_desk_not_auth.gif';

	const closeButton = document.createElement('button')
	closeButton.classList.add('close-btn')

	colbaContainer.addEventListener('click', () => {
		ym(96674199, 'reachGoal', 'NY-game-channel', {'type': 'sled-overlay', 'details': 'not-authorised'})
		MicroModal.show(modalId)
	})
	colbaContainer.append(colbaImg)
	root.append(colbaContainer)
	root.setAttribute('data-auth', false)

	document.body.append(generateModal())

	const actionButton = document.querySelector('[data-micromodal-close]');
	actionButton.addEventListener('click', () => {
		window.open(gamePage, '_blank')
		MicroModal.close(modalId)
	})

	return root
}

