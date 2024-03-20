function sendToWhatsapp(){
	
	let name = document.getElementById('name').value;
	let number2 = document.getElementById('number2').value;
	let pages = document.getElementById('page').value;
	let refcode = document.getElementById('ref').value;
	var select = document.getElementById('selectedOption').value;
	let select2 = document.getElementById('argb').value;
	var select3 = document.getElementById('argb2').value;
	let name2 = document.getElementById('name2').value;
	let totalcost = pages*select3;
	let length = select.length;

	if (length=26){
		rem=totalcost+60;
	}
	else if (length=30){
		rem=totalcost+40;
	}
	else{
		rem=totalcost+0;
	}

	

	
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
	+ "*Total Cost:*" +" "+rem+" "+ "%0a"
	+ "%0a"
	+ "*For any issues feel free to contact us at: 8549013115 or 7892848358*" + "%0a"
	window.open(url, '_blank').focus();
}

function Whatsapp(){

	let name = document.getElementById('name').value;
	let Rate_Writers = document.getElementById('Rate_Writers').value;
	let number2 = document.getElementById('number2').value;
	let pages = document.getElementById('page').value;
	let refcode = document.getElementById('ref').value;
	var select = document.getElementById('selectedOption').value;
	let select2 = document.getElementById('argb').value;
	let name2 = document.getElementById('name2').value;
	let total_writer = pages*Rate_Writers;
let length = select.length;


if (length=26){
	rem=total_writer+60;
}
else if (length=30){
	rem=total_writer+40;
}
else{
	rem=total_writer+0;
}
	var url = "https://wa.me/" +"+91" + number2 + "?text="
	+"*Writer's Listing!*"+ "%0a"+ "%0a"

	+"*Welcome to Quill Dynamics,Think precision, Think Quill Dynamics.*"+ "%0a" +"*New Order Details:*"+ "%0a" + "%0a"
	+ "*Refrence Code:*"+" "+refcode+ "%0a"
	+ "*Name :*" +" "+name+" "+ "%0a"
	
	+ "*Service Type:*" +" "+select+" "+ "%0a"

	+"*Total pages :*" +" "+pages+" "+ "%0a"	

	+ "*Submission Area:*" +" "+select2+" "+ "%0a"

	+ "*Deadline of Completion:*" +" "+name2+" "+ "%0a"

	+ "*Rate Per Page:*" +" "+Rate_Writers+"Rs/Side"+" "+ "%0a"

	+ "*Total Cost:*" +" "+rem+" "+ "%0a"
	+ "%0a"
	+ "*For any issues feel free to contact us at: 8549013115 or 7892848358*" + "%0a"
	window.open(url, '_blank').focus();
}///*