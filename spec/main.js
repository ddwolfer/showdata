	var _on_work = 0;
	var _out_work = 0;
	var _Leave_work = 0;
	var total_people =150;
	show_people_data();

	function on_work() {
		if (total_people > 0) {
			_on_work = _on_work + 1 ;
			show_people_data();
		}
	}
	function off_work() {
		if (_on_work > 0) {
			_on_work = _on_work - 1 ;
			show_people_data();
		}
	}
	function out_work() {
		//公司有人才允許外出
		if (_on_work > 0) {
			_on_work = _on_work - 1 ;
			_out_work = _out_work + 1 ;
			show_people_data();
		}
	}
	function Leave_work() {
		if (total_people > 0) {
			_Leave_work =  _Leave_work + 1 ;
		 	show_people_data();
		}
	}

	function show_people_data() {
		//假定資料設定
		var data_count = 4;
		var value_of_peoele = [_on_work,_Leave_work,_out_work,total_people-_on_work-_Leave_work-_out_work]; 
		var Item_name = ["廠內人數","請假人數","外出人數","下班人數"];
		var circle_color = [ 
			['#DDDDDD', '#00DDDD'],
			['#DDDDDD', '#66DD00'],
			['#DDDDDD', '#FF5511'],
			['#DDDDDD', '#FF3333'] 
		];	
		//顯示總人數欄位
		document.getElementById('show_people').innerHTML=total_people;
		//跑3個圈圈
		for (var i = 0; i < data_count; i++) {
			//設定DIV名稱及顯示文字
			var divName = "circle_"+(data_count-i);
			var text_str = "<br><br>"+value_of_peoele[i]+"<br>"+Item_name[i];
			var myCircle = Circles.create({
			    id:                  divName, //顯示區塊名稱
			    radius:              80, //圓圈半徑
			    value:               value_of_peoele[i], //數值
			    maxValue:            total_people,//最大值
			    width:               5,  //圓圈粗度
		  		
			    text:    			text_str,           
			    // function(value){
			    // 	var str = "<br><br>" + value + "<br>" + Item_name[i];
			    // 	return str;
			    // }, //顯示文字
			    colors:              circle_color[i], //圈圈顏色[max-value,value]
			    duration:            0,//從0%跑到目標%的動畫速度,預設500,0不跑,越小越快
			    wrpClass:            'circles-wrp',
			    textClass:           'circles-text',
			    valueStrokeClass:    'circles-valueStroke',
			    maxValueStrokeClass: 'circles-maxValueStroke',
			    styleWrapper:        true,//要不要把文字放在圈圈內
			    styleText:           true //要不要把文字放在圈圈內
			});
		}
	}
