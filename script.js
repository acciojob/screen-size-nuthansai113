//your JS code here. If required.
function getSize(){
	 const w = document.documentElement.clientWidth;
     const h = document.documentElement.clientHeight;

	const elem = document.getElementById('sizeInfo');
	elem.innerHTML="<h1> Width: "+w+" and Height: "+h+"</h1";
}