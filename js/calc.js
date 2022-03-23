let display = document.getElementById('display');
let min = document.getElementById('min');
let seg = document.getElementById('seg');
let start = document.getElementById('start');
let cronseg, interval, minAtual, segAtual;

				for(let i = 0; i <= 60; i++) {
					min.innerHTML+='<option value="'+i+'">'+i+'</option>';
				}
				for(let i = 1; i <= 60; i++) {
					seg.innerHTML+='<option value="'+i+'">'+i+'</option>';
				}
				start.addEventListener('click',function(){
					minAtual = min.value;
					segAtual = seg.value;
					display.childNodes[1].innerHTML = minAtual + ":"+segAtual;
				
					interval = setInterval(function(){
							segAtual--;
							if (segAtual <= 0) {
								if (minAtual > 0) {
									minAtual--;
									segAtual = 59;
								}else{
									document.getElementById("sound").play();
									alert("Acabou!!");
									clearInterval(interval);
								}
							}
					display.childNodes[1].innerHTML = minAtual + ":"+segAtual;
						},1000);
					})


