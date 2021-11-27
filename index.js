function showTime() {
	const date = new Date();

	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
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

showTime();

