var str= document.getElementById("display").innerHTML;
var pre;
var iscomefromequal=false;
function sin(){
    iscomefromequal=false;
    str+="sin(";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function cos(){
    iscomefromequal=false;
    str+="cos(";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function tan(){
    iscomefromequal=false;
    str+="tan(";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function log(){
    iscomefromequal=false;
    str+="log10(";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function forwardbracket(){
    iscomefromequal=false;
    str+="(";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function backwordbracket(){
    iscomefromequal=false;
    str+=")";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function pie(){
    iscomefromequal=false;
    str+="PI";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function comma(){
    iscomefromequal=false;
    str+=",";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function AC(){
    iscomefromequal=false;
    str="";
    pre=str;
    document.getElementById("display").innerHTML=str;
}
function DEL(){
    if(iscomefromequal){
        str=pre;
    }
    iscomefromequal=false;
    str=str.toString();
    let len = str.length;
    str=str.substring(0,len-1);
    document.getElementById("display").innerHTML=str;
}
function xy(){
    iscomefromequal=false;
    str+="pow(";
    document.getElementById("display").innerHTML=str;
}
function divide(){
    iscomefromequal=false;
    str+="/";
    document.getElementById("display").innerHTML=str;
}
function seven(){
    iscomefromequal=false;
    str+="7";
    document.getElementById("display").innerHTML=str;
}
function eight(){
    iscomefromequal=false;
    str+="8";
    document.getElementById("display").innerHTML=str;
}
function nine(){
    iscomefromequal=false;
    str+="9";
    document.getElementById("display").innerHTML=str;
}
function multiply(){
    iscomefromequal=false;
    str+="*";
    document.getElementById("display").innerHTML=str;
}
function four(){
    iscomefromequal=false;
    str+="4";
    document.getElementById("display").innerHTML=str;
}
function five(){
    iscomefromequal=false;
    str+="5";
    document.getElementById("display").innerHTML=str;
}
function six(){
    iscomefromequal=false;
    str+="6";
    document.getElementById("display").innerHTML=str;
}
function minus(){
    iscomefromequal=false;
    str+="-";
    document.getElementById("display").innerHTML=str;
}
function one(){
    iscomefromequal=false;
    str+="1";
    document.getElementById("display").innerHTML=str;
}
function two(){
    iscomefromequal=false;
    str+="2";
    document.getElementById("display").innerHTML=str;
}
function three(){
    iscomefromequal=false;
    str+="3";
    document.getElementById("display").innerHTML=str;
}
function add(){
    iscomefromequal=false;
    str+= "+";
    document.getElementById("display").innerHTML=str;
}
function mode(){
    iscomefromequal=false;
    str+="%";
    document.getElementById("display").innerHTML=str;
}
function zero(){
    iscomefromequal=false;
    str+="0";
    document.getElementById("display").innerHTML=str;
}
function decimal(){
    iscomefromequal=false;
    str+=".";
    document.getElementById("display").innerHTML=str;
}
function equal(){
    iscomefromequal=true;
    str=str.replace("sin","Math.sin");
    str=str.replace("cos","Math.cos");
    str=str.replace("tan","Math.tan");
    str=str.replace("log10","Math.log10");
    str=str.replace("pow","Math.pow");
    str=str.replace("PI","Math.PI");
    try {
        if(eval(str)==undefined){
            str="Syntax Error";
            document.getElementById("display").innerHTML=str; 
            str="";
        }
        else{
        str=Math.round(eval(str) * 10000000000) / 10000000000;
        document.getElementById("display").innerHTML=str; 
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            str="Syntax Error";
            document.getElementById("display").innerHTML=str; 
            str="";
        }
    }
}