function performOperation(e,l,t){switch(t){case"+":result=e+l;break;case"-":result=e-l;break;case"*":result=e*l;break;case"/":result=e/l}return result}function printingInLabelVal(e){label.value+=e}var result=0,query="",label=document.getElementById("result"),last_operation;elements=document.getElementsByTagName("button");for(var i=0;i<16;i++)elements[i].onclick=function(){if("c"==this.value)result=0,label.value="";else if(isNaN(Number(this.value))){var e=Number(label.value);label.value="",0===result?result=e:(result=Math.floor(performOperation(result,e,last_operation)),"="==this.value&&(label.value=result)),last_operation=this.value}else printingInLabelVal(this.value)};