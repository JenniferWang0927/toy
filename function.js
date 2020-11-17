//helper function
var $ = function (id) {
    return document.getElementById(id); 
};

//define variables
var clicktimes=0;
var timeoutclock;


//preload pictures
function preloadpic() {
	var sheepjump = new Image();
	var sheepsleep = new Image();
	var sheeptired = new Image();
	
	
	sheepjump.src = "images/sheepjump.jpg";
	sheepsleep.src = "images/sheepsleep.jpg";
	sheeptired.src = "images/sheeptired.jpg";
	
    console.log("All pictures are loaded");	//make sure all the pictures are loaded
}

//when sheep jump, change corresponding style values
function sheepjump() {
	var jumpsheep=$('jumpjpg');
	jumpsheep.style.bottom = "200px";
	if (jumpsheep.style.left == "680px") {
	    jumpsheep.style.left = "780px";}
	else {jumpsheep.style.left = "680px";}
	setTimeout(() => { jumpsheep.style.bottom = "340px"; }, 200);
}

//click the button to jump, if too many clicks then rest
function clicktojump() {
	clicktimes=clicktimes+1;
	
	if (clicktimes<=10) {
		//jump
		sheepjump();
	}
	else {//show tired sheep
	    $('jump').style.display="none";
		$('tired').style.display="block";
		setTimeout(tiredtojump, 5000); //switch back to normal sheep after 5s
	}
}

//switch from tired sheep to jump sheep
function tiredtojump() {
	$('tired').style.display="none";
	$('jump').style.display="block";
	clicktimes=0; //clear the click times
}

//show up the sleep sheep
function showsleep() {
	$('tired').style.display="none";
	$('jump').style.display="none";
	$('sleep').style.display="block";
}

//wake the sheep
function sleeptojump() {
	$('sleep').style.display="none";
	$('jump').style.display="block";
	clicktimes=0;
	window.clearTimeout(timeoutclock);
	starttimer();
}
	
function starttimer() {
    timeoutclock = window.setTimeout(showsleep, 15000);	
}

function resettimer() {
	window.clearTimeout(timeoutclock);
	starttimer();
}

//whenever there is any movement on the website, reset the timer
function setuptimer() {
	document.addEventListener("mousemove", resettimer, false);
    document.addEventListener("mousedown", resettimer, false);
    document.addEventListener("keypress", resettimer, false);
    document.addEventListener("touchmove", resettimer, false);
     
    starttimer();
}

	

window.onload=function(){
	preloadpic();
	
	setuptimer(); //when the page is loaded, start timer
	
}
