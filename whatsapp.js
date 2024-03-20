function sendToWhatsapp(){
	
	let name = document.getElementById('name').value;
	let number2 = document.getElementById('number2').value;
	let pages = document.getElementById('page').value;
	let refcode = document.getElementById('ref').value;
	let select = document.getElementById('selectedOption').value;
	let select2 = document.getElementById('argb').value;
	let select3 = document.getElementById('argb2').value;
	let name2 = document.getElementById('name2').value;
	let totalcost = pages*select3;
	
	var url = "https://wa.me/" +"+91"+ number2 + "?text="
	+"*Customer Invoice*"+ "%0a"
	+ "*Refrence Code:*"+" "+refcode
	+ "%0a"+ "%0a"
	+"*Welcome to Quill Dynamics,Think precision, Think Quill Dynamics.*"+ "%0a" +"*Thank you for choosing our copywriting services!*"+ "%0a"
	+ "%0a"	
	+ "*Name :*" +" "+name+" "+ "%0a"
	+ "*Phone Number :*" +" "+number2+" "+ "%0a"
	+ "*Service Type:*" +" "+select+" "+ "%0a"
	+"*Total pages :*" +" "+pages+" "+ "%0a"	
	+ "*Outlets Available For Pickup and Drop*" +" "+select2+" "+ "%0a"
	+ "*Submission Day:*" +" "+name2+" "+ "%0a"
	+ "*Rate Per Page:*" +" "+select3+"Rs/Side"+" "+ "%0a"
	+ "*Total Cost:*" +" "+totalcost+" "+ "%0a"
	+ "%0a"
	+ "*For any issues feel free to contact us at: 8549013115 or 7892848358*" + "%0a"
	window.open(url, '_blank').focus();
}