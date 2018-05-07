var str_check_keyboard_input="";

document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && (e.keyCode==48 || e.keyCode==96) ){ // 按 0
		str_check_keyboard_input +='0';
	}   
	if(e && (e.keyCode==49 || e.keyCode==97) ){ // 按 1
		str_check_keyboard_input +='1';
	}  
	if(e && (e.keyCode==50 || e.keyCode==98) ) { // 按 2
		str_check_keyboard_input +='2';
	}  
	if(e && (e.keyCode==51 || e.keyCode==99) ){ // 按 3
		str_check_keyboard_input +='3';
	}  
	if(e && (e.keyCode==52 || e.keyCode==100) ){ // 按 4
		str_check_keyboard_input +='4';
	}  
	if(e && (e.keyCode==53 || e.keyCode==101) ){ // 按 5
		str_check_keyboard_input +='5';
	}  
	if(e && (e.keyCode==54 || e.keyCode==102) ){ // 按 6
		str_check_keyboard_input +='6';
	}  
	if(e && (e.keyCode==55 || e.keyCode==103) ){ // 按 7
		str_check_keyboard_input +='7';
	}  
	if(e && (e.keyCode==56 || e.keyCode==104) ){ // 按 8
		str_check_keyboard_input +='8';
	}  
	if(e && (e.keyCode==57 || e.keyCode==105) ){ // 按 9
		str_check_keyboard_input +='9';
	}     
	if( e && e.keyCode == 13){
	    alert(str_check_keyboard_input);
	    str_check_keyboard_input ="";
	}
}; 
//ket code list url
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes 