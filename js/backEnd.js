{
	
	
var keys={};
keys[1]= "a";
keys[2]="b";
keys[3]="c";
keys[4]="d";
keys[5]="e";
keys[6]="f";
keys[7]="g";
keys[8]="h";
keys[9]="i";
keys[10]="j";
keys[11]="k";
keys[12]="l";
keys[13]="m";
keys[14]="n";
keys[15]="o";
keys[16]="p";
keys[17]="q";
keys[18]="r";
keys[19]="s";
keys[20]="t";
keys[21]="v";
keys[22]="u";
keys[23]="w";
keys[24]="x";
keys[25]="y";
keys[26]="z";


var current={};

var aTimer=4000;
var rTimer=5000;
var interVal;
var that=this;

window.addEventListener("load",function(){
	
	document.getElementById("playArea").addEventListener('game_start',
	function(e){
		interVal=setInterval(function(){ 	
			addElent(that.generateKey())
		}, aTimer);

	});
	
	
	document.getElementById("playArea").addEventListener('game_stop',
			function(e){
		 clearInterval(interVal);
		 var container=document.getElementById("container");
		 while (container.firstChild) {
			 container.removeChild(container.firstChild);
			}
		 current={};

			});	
});

function addElent(e){
	console.log("element added "+keys[e]);
	current[e]=keys[e];
	console.log("element added event fired ");
	var event = new Event('ele_added');
	event.src=e;
	document.getElementById("playArea").dispatchEvent(event);
	setTimeout(function(){
		var event = new Event('ele_removed');
		event.src=e;
		document.getElementById("playArea").dispatchEvent(event);
		//console.log("remove event trigger "+keys[e]);
		
	},rTimer); 
}



that.generateKey = function(){	
	var getKey=Math.floor(Math.random() * 26) + 1 ;
	while(current[getKey] !== undefined ){
		return generateKey();
	}
	console.log(getKey)
	return getKey;
 }

//initial the list 
var l=0
while(l>3){
	
	addElent(that.generateKey())
}

}