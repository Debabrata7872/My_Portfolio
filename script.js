document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.main-nav');

	if (!toggle || !nav) return;

	toggle.addEventListener('click', function () {
		const open = nav.classList.toggle('open');
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	// Close on Escape
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && nav.classList.contains('open')) {
			nav.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'false');
			toggle.focus();
		}
	});

	// Close when clicking outside on small screens
	document.addEventListener('click', function (e) {
		if (!nav.classList.contains('open')) return;
		const isClickInside = nav.contains(e.target) || toggle.contains(e.target);
		if (!isClickInside) {
			nav.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});
});

var typed = new Typed('.typed', {
	strings: ["Programmer","Developer","Photographer","Designer"],
	typeSpeed: 150,
	backSpeed: 150,
	loop: true
});
