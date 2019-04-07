window.onload= function(){
    var way_res=[];
    var btn_txt=document.getElementsByClassName("btn");
    var txt=document.getElementsByClassName("txt")[0];
    var btn_way=document.getElementsByClassName("btn_click"); 
    for(var i=0;i<btn_way.length;i++){
         //Ac归零
        btn_way[i].onclick=function(){
            if(this.value=="AC"){
                way_res=[];
               txt.value="";
            }
            else {
            //Del删除键
                 txt.value=txt.value.substr(0,txt.value.length-1);
            }
        }
    }
    for(var i= 0;i<btn_txt.length;i++){
        //自动小数点
        btn_txt[i].onclick=function(){
            if(txt.value=="" && this.value=="."){
               txt.value="0.";
            }     
            else{
            //拼接小数
                if(!isNaN(this.value)||this.value=="."){
                   if(txt.value.indexOf(".")!=-1){
                      if(this.value!="."){
                         txt.value+=this.value;
                     }
                }
                else{
                   txt.value+=this.value;
                }
         }
                else{
                    if(this.value!="="){
                        way_res[way_res.length]=txt.value;
                        way_res[way_res.length]=this.value;
                        txt.value="";
                    }
                    else{
                        //计算
                        way_res[way_res.length]=txt.value;
                        txt.value=eval( way_res.join(""));
                        way_res=[];                 
                    }
                }
            }
        }
    }
}

