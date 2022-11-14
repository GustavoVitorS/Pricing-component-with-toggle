const annuallyMonthlyText = document.querySelectorAll('.top__selection p');
const check = document.getElementById('toggle');

const priceYear = document.querySelectorAll('.cards__yearly');
const priceMonth = document.querySelectorAll('.cards__monthly');

check.addEventListener('click', () => {
	if (check.checked) {

		annuallyMonthlyText[0].classList.remove('top__dark');
		annuallyMonthlyText[1].classList.add('top__dark');

		priceYear.forEach(function (i) {
			i.classList.add('hide');
		});
		priceMonth.forEach(function (i) {
			i.classList.remove('hide');
		});
	} else {
		annuallyMonthlyText[0].classList.add('top__dark');

		annuallyMonthlyText[1].classList.remove('top__dark');

		priceYear.forEach(function (i) {

			i.classList.remove('hide');

		});
		priceMonth.forEach(function (i) {

			i.classList.add('hide');

		});
	}
});


if (check) {

	check.checked = false;

}