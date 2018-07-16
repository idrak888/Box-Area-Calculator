let width = document.querySelector('#width');
let height = document.querySelector('#height');
let btn = document.querySelector('button');

btn.addEventListener('click', () =>{
	let box = document.querySelector('.box');
	let widthVal = width.value + 'px';
	let heightVal = height.value + 'px';
	let area = width.value*height.value;
	let err = document.querySelector('.err');

	if (width.value > 1000 || height.value > 1000) {
		err.innerHTML = 'Maximum values exceeded*';
		err.style.color = 'red';
	}
	else {
		err.innerHTML = 'Maximum values are 1000px*';
		err.style.color = 'black';
		document.querySelector('h2').innerHTML = 'area: ' + '';
		document.querySelector('h2').innerHTML += area;
		box.style.width = widthVal;
		box.style.height = heightVal;
	}
});