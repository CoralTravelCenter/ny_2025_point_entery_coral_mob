import {generateModal} from "../modal.js";
import MicroModal from 'micromodal'

export function auth(root, modalId, gamePage) {
	root.addEventListener('click', () => {
		ym(96674199, 'reachGoal', 'NY-game-channel', {'type': 'sled-overlay', 'details': 'not-authorised'})
		MicroModal.show(modalId)
	})

	root.setAttribute('data-auth', true)
	document.body.append(generateModal('is-authorised'))

	const actionButton = document.querySelector('[data-micromodal-close]');
	actionButton.addEventListener('click', () => {
		window.open(gamePage, '_blank')
		MicroModal.close(modalId)
	})
	return root
}

