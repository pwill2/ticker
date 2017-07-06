var INTERVAL = 1; // in seconds
var START_VALUE = 0; // initial value when it's the start date
var secondsInYear = 31536000; // Seconds in a year

// 2015 Revenues
var androidRevenue = 31000000000;
var amazonRevenue =  107000000000;
var appleRevenue = 233715000000;
//var dellRevenue = 54900000000;
var facebookRevenue = 17930000000;
var geRevenue = 140400000000;
var googleRevenue = 74540000000;
var linkedinRevenue = 3000000000;
var microsoftRevenue = 85320000000;
//var nikeRevenue = 30600000000;
var paypalRevenue = 9240000000;
//var samsungRevenue = 45230000000;
var tripadvisorRevenue = 1492000000;
var twitterRevenue = 2218000000;
// /var sonyRevenue = 73040000000;
//var uberRevenue = 1500000000;
var walmartRevenue = 482100000000;

var androidCount = 0;
var androidIncrement = androidRevenue / secondsInYear; //increae per tick
var amazonCount = 0;
var amazonIncrement = amazonRevenue / secondsInYear; // increase per tick
var appleCount = 0;
var appleIncrement = appleRevenue / secondsInYear; // increase per tick
//var dellCount = 0;
//var dellIncrement = dellRevenue / secondsInYear; // increase per tick
var facebookCount = 0;
var facebookIncrement = facebookRevenue / secondsInYear; // increase per tick
var geCount = 0;
var geIncrement = geRevenue / secondsInYear; // increase per tick
var googleCount = 0;
var googleIncrement = googleRevenue / secondsInYear; // increase per tick
var linkedinCount = 0;
var linkedinIncrement = linkedinRevenue / secondsInYear; // increase per tick
var microsoftCount = 0;
var microsoftIncrement = microsoftRevenue / secondsInYear; // increase per tick
//var nikeCount = 0;
//var nikeIncrement = nikeRevenue / secondsInYear; // increase per tick
var paypalCount = 0;
var paypalIncrement = paypalRevenue / secondsInYear; // increse per tick
//var samsungCount = 0;
//var samsungIncrement = samsungRevenue / secondsInYear; // increase per tick
var tripadvisorCount = 0;
var tripadvisorIncrement = tripadvisorRevenue / secondsInYear; // increase per tick
var twitterCount = 0;
var twitterIncrement = twitterRevenue / secondsInYear; // increase per tick
//var sonyCount = 0;
//var sonyIncrement = sonyRevenue / secondsInYear; // increase per tick
//var uberCount = 0;
//var uberIncrement = uberRevenue / secondsInYear; // increase per tick
var walmartCount = 0;
var walmartIncrement = walmartRevenue / secondsInYear; // increase per tick

var startBtnClicked = false

document.getElementById("start-btn").onclick = function() {myFunction()};

function myFunction() {
	if(startBtnClicked == false) {
		var msInterval = INTERVAL * 1000;

		androidCount = androidCount + START_VALUE;
		amazonCount = amazonCount + START_VALUE;
		appleCount = appleCount + START_VALUE;
		//dellCount = dellCount + START_VALUE;
		facebookCount = facebookCount + START_VALUE;
		googleCount = googleCount + START_VALUE;
		geCount = geCount + START_VALUE;
		linkedinCount = linkedinCount + START_VALUE;
		microsoftCount = microsoftCount + START_VALUE;
		//nikeCount = nikeCount + START_VALUE;
		paypalCount = paypalCount + START_VALUE;
		//samsungCount = samsungCount + START_VALUE;
		tripadvisorCount = tripadvisorCount + START_VALUE;
		twitterCount = twitterCount + START_VALUE
		//sonyCount = sonyCount + START_VALUE;
		//uberCount = uberCount + START_VALUE;
		walmartCount = walmartCount + START_VALUE;

		document.getElementById('android').innerHTML = androidCount;
		document.getElementById('amazon').innerHTML = amazonCount;
		document.getElementById('apple').innerHTML = appleCount;
		//document.getElementById('dell').innerHTML = dellCount;
		document.getElementById('facebook').innerHTML = facebookCount;
		document.getElementById('google').innerHTML = googleCount;
		document.getElementById('ge').innerHTML = geCount;
		document.getElementById('linkedin').innerHTML = linkedinCount;
		document.getElementById('microsoft').innerHTML = microsoftCount;
		//document.getElementById('nike').innerHTML = nikeCount;
		document.getElementById('paypal').innerHTML = paypalCount;
		//document.getElementById('samsung').innerHTML = samsungCount;
		document.getElementById('tripadvisor').innerHTML = tripadvisorCount;
		document.getElementById('twitter').innerHTML = twitterCount;
		//document.getElementById('sony').innerHTML = sonyCount;
		//document.getElementById('uber').innerHTML = uberCount;
		document.getElementById('walmart').innerHTML = walmartCount;

		setInterval("androidCount += androidIncrement; document.getElementById('android').innerHTML = numberWithCommas(androidCount.toFixed(2));", msInterval);
		setInterval("amazonCount += amazonIncrement; document.getElementById('amazon').innerHTML = numberWithCommas(amazonCount.toFixed(2));", msInterval);
		setInterval("appleCount += appleIncrement; document.getElementById('apple').innerHTML = numberWithCommas(appleCount.toFixed(2));", msInterval);
		//setInterval("dellCount += dellIncrement; document.getElementById('dell').innerHTML = numberWithCommas(dellCount.toFixed(2));", msInterval);
		setInterval("facebookCount += facebookIncrement; document.getElementById('facebook').innerHTML = numberWithCommas(facebookCount.toFixed(2));", msInterval);
		setInterval("googleCount += googleIncrement; document.getElementById('google').innerHTML = numberWithCommas(googleCount.toFixed(2));", msInterval);
		setInterval("geCount += geIncrement; document.getElementById('ge').innerHTML = numberWithCommas(geCount.toFixed(2));", msInterval);
		setInterval("linkedinCount += linkedinIncrement; document.getElementById('linkedin').innerHTML = numberWithCommas(linkedinCount.toFixed(2));", msInterval);
		setInterval("microsoftCount += microsoftIncrement; document.getElementById('microsoft').innerHTML = numberWithCommas(microsoftCount.toFixed(2));", msInterval);
		//setInterval("nikeCount += nikeIncrement; document.getElementById('nike').innerHTML = numberWithCommas(nikeCount.toFixed(2));", msInterval);
		setInterval("paypalCount += paypalIncrement; document.getElementById('paypal').innerHTML = numberWithCommas(paypalCount.toFixed(2));", msInterval);
		//setInterval("samsungCount += samsungIncrement; document.getElementById('samsung').innerHTML = numberWithCommas(samsungCount.toFixed(2));", msInterval);
		setInterval("tripadvisorCount += tripadvisorIncrement; document.getElementById('tripadvisor').innerHTML = numberWithCommas(tripadvisorCount.toFixed(2));", msInterval);
		setInterval("twitterCount += twitterIncrement; document.getElementById('twitter').innerHTML = numberWithCommas(twitterCount.toFixed(2));", msInterval);
		//setInterval("sonyCount += sonyIncrement; document.getElementById('sony').innerHTML = numberWithCommas(sonyCount.toFixed(2));", msInterval);
		//setInterval("uberCount += uberIncrement; document.getElementById('uber').innerHTML = numberWithCommas(uberCount.toFixed(2));", msInterval);
		setInterval("walmartCount += walmartIncrement; document.getElementById('walmart').innerHTML = numberWithCommas(walmartCount.toFixed(2));", msInterval);

		var startTime = Date.now();

		// var interval = setInterval(function() {
		// var elapsedTime = Date.now() - startTime;
		// document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(1) + " seconds";
		// 	}, 100);
		upTime(startTime);
		
		startBtnClicked = true
	}
	else {
		return;
	}
}

//works
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

function upTime(startTime) {
	now = Date.now();
	difference = (now-startTime);

	days=Math.floor(difference/(60*60*1000*24)*1);
	years=Math.floor(days / 365);

	if(years > 1) { 
		days = days - (years * 365)
	};

	hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

	document.getElementById('years').firstChild.nodeValue = years;
	document.getElementById('days').firstChild.nodeValue = days;
	document.getElementById('hours').firstChild.nodeValue = hours;
	document.getElementById('minutes').firstChild.nodeValue = mins;
	document.getElementById('seconds').firstChild.nodeValue = secs;

	clearTimeout(upTime.to);
	upTime.to=setTimeout(function(){ upTime(startTime); },1000);
}