export function generateModal(string) {
	const root = document.createElement('div')
	string && root.classList.add('is-authorised')
	root.id = 'sled-overlay';
	root.classList.add('modal', 'micromodal-slide')
	root.setAttribute('aria-hidden', true)
	root.innerHTML = `
		 <div class="modal__overlay" tabindex="-1" data-micromodal-close>
<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
			<button class="modal__close" aria-label="Close modal" data-micromodal-close>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22707 6.22703C6.51996 5.93414 6.99484 5.93414 7.28773 6.22703L12 10.9393L16.7124 6.22703C17.0052 5.93414 17.4801 5.93414 17.773 6.22703C18.0659 6.51992 18.0659 6.9948 17.773 7.28769L13.0607 12L17.773 16.7123C18.0659 17.0052 18.0659 17.4801 17.773 17.773C17.4801 18.0659 17.0052 18.0659 16.7124 17.773L12 13.0607L7.28773 17.773C6.99484 18.0659 6.51996 18.0659 6.22707 17.773C5.93418 17.4801 5.93418 17.0052 6.22707 16.7123L10.9394 12L6.22707 7.28769C5.93418 6.9948 5.93418 6.51992 6.22707 6.22703Z" fill="#535353"/>
</svg>
			</button>
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
						Разыгрываем<br> путешествие
          </h2>
        </header>

        <footer class="modal__footer">
          <button class="modal__btn">Начать</button>
        </footer>
      </div>
    </div>
	`;
	return root
}