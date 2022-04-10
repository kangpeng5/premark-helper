var str;
var num1 = 0;
var num2 = 0;	
    
//点击事件	//document.form的name值.input的name值.value
function jisuan(){
    str = document.getElementsByName('count');
    num1 = parseFloat(document.myform.number1.value);
    num2 = parseFloat(document.myform.number2.value);
    //判断文本框是否为空
    //注意此处文本框获取值时使用了parseFloat转换，所以当文本框为空时是NaN，并不是""和null，所以需要用到isNaN来判断。
    if(isNaN(num1) && isNaN(num2)){
        alert("请填写数据！");
    }
    else if(isNaN(num1)){
        alert("请填写操作数X！");
    }
    else if(isNaN(num2)){
        alert("请填写操作数Y！");
    }
    else{
        danxuankuang();
    }
    
    if(str[0].checked == true){
        document.myform.txtResult.value=-70+num1;
        document.myform.txtResult2.value=-70+num2;
    }
    if(str[1].checked == true){
        document.myform.txtResult.value=-80+num1;
        document.myform.txtResult2.value=-70+num2;
    }
    if(str[2].checked == true){
        document.myform.txtResult.value=-80+num1;
        document.myform.txtResult2.value=-80+num2;
    }
    if(str[3].checked == true){
        document.myform.txtResult.value=-70+num1;
        document.myform.txtResult2.value=-80+num2;
    }		
}

//判断单选框是否选中
function danxuankuang(){
    var a=5;//定义第三方变量，设定一个不在单选框值之内的值
    for(var i=0;i < str.length; i ++){
        if(str[i].checked == true){
            a=i;
            return a;
        }						
    }	
    if(a==0 || a==1 || a==2 || a==3){
        
    }else{
        alert("请先选择二维材料所在象限！");
    }		
}	