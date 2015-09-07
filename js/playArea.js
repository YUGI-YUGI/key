{

	window.addEventListener("load", function() {

		
		document.getElementById("playArea").addEventListener('c_KeyPressed',
				removeHtml);

		document.getElementById("playArea").addEventListener("ele_added",
				function(e) {
					var playArea = document.getElementById("container");
					playArea.appendChild(_helpCreateEl(current[e.src]));
				});

		document.getElementById("playArea").addEventListener('ele_removed',
				removeHtmlElent);

		
		document.getElementById("btn_start").addEventListener('click',
				startGame);		

	});
	
	
	function removeHtml(e){
		
		if(e.type == "c_KeyPressed"){
			yourScore=document.getElementById("yourScore").innerHTML;
			
				document.getElementById("yourScore").innerHTML=parseInt(yourScore)+1
			
		}
		if(document.getElementById("ele_" + e.src.val))
		       document.getElementById("ele_" + e.src.val).remove();
	}
	
	
	var timer1;
	function timer(){
		timer1 =setInterval(function(){ 	
			var time=document.getElementById("timer").innerHTML;
			var second=parseInt(time.split(":")[1]);
			var min=parseInt(time.split(":")[0]);
			if(second == 60 || second > 60){
				min =min+1;
				second=second-59;
			}else{
				second++;
			}
			document.getElementById("timer").innerHTML=min+":"+second;
		}, 1000);
	}
		
	
	
	///stop and pause events
	function startGame(e) {

		document.getElementsByClassName("gameSetting")[0].classList.toggle("fadeOut");
		document.getElementsByClassName("t_model")[0].classList.toggle("none");
		if (document.getElementById("btn_start").text == "Start") {
			var event = new Event('game_start');
			event.src = e;
			document.getElementById("playArea").dispatchEvent(event);
			document.getElementById("btn_start").text = "Stop";
			timer();
				
		} else {
			var event = new Event('game_stop');
			event.src = e;
			document.getElementById("playArea").dispatchEvent(event);
			document.getElementById("btn_start").text = "Start";
		}

	}
	
	var po = 20;
	
	function removeHtmlElent(e) {
		if(e.type == "ele_removed"){
			curentScore=document.getElementById("remaingLife").innerHTML;
			if(parseInt(curentScore)-1){
				document.getElementById("remaingLife").innerHTML=	parseInt(curentScore) - 1
				
			}else{
				startGame();
			}
		}
		if(document.getElementById("ele_" + current[e.src]))
			document.getElementById("ele_" + current[e.src]).remove();
		if (e.src)
			delete current[e.src];
	}
	
	function _helpCreateEl(val) {

		var ele = document.createElement("div");
		ele.setAttribute("class", "ele");
		ele.setAttribute("id", "ele_" + val);
		var drop = document.createElement("div");
		drop.setAttribute("class", "drop");
		var text = document.createElement("span");
		text.innerHTML = val

		var puddle = document.createElement("div");
		puddle.setAttribute("class", "puddle");
		var sink1 = document.createElement("div");
		sink1.setAttribute("class", "sink");
		var sink2 = document.createElement("div");
		sink2.setAttribute("class", "sink");
		var ripple1 = document.createElement("div");
		ripple1.setAttribute("class", "ripple");
		var ripple2 = document.createElement("div");
		ripple2.setAttribute("class", "ripple");
		var ripple3 = document.createElement("div");
		ripple3.setAttribute("class", "ripple");
		var ripple4 = document.createElement("div");
		ripple4.setAttribute("class", "ripple");
		puddle.appendChild(sink1);
		puddle.appendChild(ripple1);
		puddle.appendChild(ripple2);
		puddle.appendChild(ripple3);
		puddle.appendChild(sink2);
		puddle.appendChild(ripple3);

		drop.appendChild(text);
		ele.appendChild(drop);
		ele.appendChild(puddle);
		drop.style.marginLeft = po + "%"

		sink1.style.marginLeft = po + 2 + "%"
		sink2.style.marginLeft = po + 2 + "%"
		ripple1.style.marginLeft = po + 1 + "%"
		ripple2.style.marginLeft = po - 1 + "%"
		ripple3.style.marginLeft = po + 1 + "%"
		ripple4.style.marginLeft = po - 1 + "%"

		po = po + 3;
		if (po > 90) {
			po = 10;
		}
		return ele;
	}
	

}