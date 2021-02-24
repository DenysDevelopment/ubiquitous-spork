document.addEventListener('scroll', () => {
	if (window.pageYOffset > 200) {
		document.querySelector('.events__texts').classList.add('animation-left');
		document.querySelector('.events__img').classList.add('animation-right');
	}

	document.querySelector('.grid__line-track').style.height = `${window.pageYOffset - 2400}px`;
});
