var dots = document.querySelectorAll('.dot'); 
var images = document.querySelectorAll('.slide'); 
var prev_element = 0; 
var count = 0; 

for(var i = 0; i < dots.length; i++){
	dots[i].onclick = view;
};

function view(){	
	var button_id = this.getAttribute('id');	
	for(var i = 0; i < dots.length; i++){
		if(dots[i].getAttribute('id') === button_id){
			count = i;
			if(count > prev_element){
				for(var i = 0; i < count;){
				images[i].className = 'slide viewedRight';
				dots[i].className = 'dot';
				i++;			
				images[i].className = 'slide showed';
				};
			}
			else if(count < prev_element){
				for(var i = dots.length - 1; i > count;){
					images[i].className = 'slide viewedLeft'; 
					dots[i].className = 'dot'; 
					i--;
					images[i].className = 'slide showed';				
				};
			}
			dots[count].className = 'dot painted';
			break;			
		};
	};
	prev_element = count;
};


