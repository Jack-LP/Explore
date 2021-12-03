function showTime() {
	const date = new Date();

	let hour = date.toLocaleString("pl", { hour: "2-digit" });
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"clock"
	).innerHTML = `${hour}:${minute}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

function countDownTime() {
	var countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();
	  
		// Find the distance between now and the count down date
		var distance = countDownDate - now;
	  
		// Time calculations for days, hours and minutes
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  
		// Display the result in the element with id="countDown"
		document.getElementById("countDown").innerHTML = "❄️" + days + "d " + hours + "h "
		+ minutes + "m ";
	  
		// If the count down is finished, write some text
		if (distance < 0) {
		  clearInterval(x);
		  document.getElementById("countDown").innerHTML = "Merry Christmas ☃️";
		}
	  }, 1000);
}

countDownTime();
showTime();
