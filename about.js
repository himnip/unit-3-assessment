console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been successfully submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = image.querySelector('img#https://nordot-res.cloudinary.com/c_limit,w_800,f_auto,q_auto:eco/ch/images/679160425876358241/origin_1.jpg');

img.addEventListener('mouseover', ()=> {
	alert("Isn't it so cute?")
});