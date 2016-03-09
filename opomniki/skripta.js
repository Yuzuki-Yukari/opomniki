window.addEventListener('load', function() {
	//stran nalozena
	
	// sign in stuff
	var signIn = function(event)
	{
		var username = document.querySelector('#uporabnisko_ime').value;
		document.querySelector('#uporabnik').innerHTML = username;
		document.querySelector('.pokrivalo').style.display = "none";
	}
	
	document.querySelector('#prijavniGumb').addEventListener('click', signIn);
	
	// reminder stuff
	var newReminder = function(event)
	{
		var name = document.querySelector("#naziv_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		var duration = document.querySelector("#cas_opomnika").value;
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik senca rob'> <div class='naziv_opomnika'>" + name + "</div><div class='cas_opomnika'> Opomnik čez <span>" + duration + "</span> sekund.</div></div>";
	}
	
	document.querySelector("#dodajGumb").addEventListener('click', newReminder)
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			if(cas == 0)
			{
				alert("Opomnik!\n\nZadolžitev " + opomnik + " je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			else
			{
				cas--;
				casovnik.innerHTML = cas;
			}
			
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});