const fixPopup = isOpen => {
    const scrollWidth = `${
		window.innerWidth - document.documentElement.clientWidth
	}px`
    const $body = document.querySelector('body')
    $body.style.overflow = isOpen ? 'hidden' : 'auto'
    $body.style.paddingRight = isOpen ? scrollWidth : '0'
}

export default fixPopup