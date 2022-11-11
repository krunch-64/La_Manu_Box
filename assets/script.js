window.onload = function(){
	let motsClefs = [
		'maxime',
		'rodson',
		'K',
		'simpon',
		'Bob',
		'Boby',
		'Bobu',
		'you are'
	];
	
	let form = document.getElementById("all-object");
	let input = form.search;
	
	let list = document.createElement("ul");
	list.className = "suggestions";
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		let txt = this.value;
		if(!txt){
			list.style.display = "none";
		    return;
		}
		
		let suggestions = 0;
		let frag = document.createDocumentFragment();
		
		for(let i = 0, c = motsClefs.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(motsClefs[i])){
				let word = document.createElement("li");
				frag.appendChild(word);
				word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = motsClefs[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";	
	};
};