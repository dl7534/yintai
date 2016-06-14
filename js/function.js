  function getInner(obj,value){
    // 判断是否有该方法
     if(obj.textContent){
      // 判断value是否赋值
         if(value==undefined){
          // 如果没有赋值获取内容
            return obj.textContent;
         }else{
          // 如果赋值显示输入内容
           obj.textContent=value;
         }
     }else{
      // IE浏览器
           if(value==undefined){
            return obj.innerText;
           }else{
           obj.innerText=value;
         }
     }
}





  function getStyle(obj,style){
      if(obj.currentStyle){
         return obj.currentStyle[style];
      }else{
        return getComputedStyle(obj,null)[style]
      }




  }




function $(search,obj){
  var obj=obj||document;
  // 如果要寻找的第一个字符是#，通过Id获取
  // 判断第一个字符
  if(typeof(search)=="string"){
      if(search.charAt(0)=="#"){
    // 截取除第一个字符之外的所有
    return document.getEle

    mentById(search.substr(1));
    // 第一个字符为.则是类名
  }else if(search.charAt(0)=="."){
    // 截取除第一个字符之外的所有
        return getClass(search.substr(1),obj);
  }else{
    // 其余情况为通过标签名来获取所需元素
    return obj.getElementsByTagName(search);
  }
}else if(typeof(search)=="function"){
  window.onload=function(){
    search();
  }
}

}

function addEvent(obj,event,fun){
    if(obj.attachEvent){
       obj.attachEvent("on"+event,fun);
    }else if(obj.addEventListener){
      obj.addEventListener(event,fun,false)
    }
}

function removeEvent(obj,event,fun){
     if(obj.detachEvent){
       obj.detachEvent("on"+event,fun);
    }else if(obj.removeEventListener){
       obj.removeEventListener(event,fun,false)
      }
}




// 创建函数  需要获取的类名 方法
function getClass(className,obj){
  // 方法若传入obj参数则为输入值，否则为document
     var obj=obj||document;  
     // 判断是否有获取方法      
     if(obj.getElementsByClassName){
      // 若有则返回该方法
      return obj.getElementsByClassName(className);
     }else{
      // 获取所有的对象 建立空数组
      var arr=[];
      var alls=obj.getElementsByTagName("*"); 
        // 类数组形式           
        for(var i=0;i<alls.length;i++){
          // 判断alls中的类名是否和所需相等 
          // 调用checkClass函数判断是否相等  
          if(checkClass(alls[i].className,className)){
            // 若等放入空数组当中
            arr.push(alls[i]);
          }
        }
        return arr;
     }
}





// 类名可能有多个，需要将类名都放入数组当中与所需类名进行逐个比较
function checkClass(search,match){
  // 将类名以空格分割成数组
       var brr=search.split(" ");
       // 进行比较
       for(var i=0;i<brr.length;i++){
        if(brr[i]==match){
          return true;
        }
       }
       return false;
}



//a 只元素   b 文本和元素
function getChilds(obj,type){
     var type=type||"a";
     var arr=[];
     var all=obj.childNodes;
     for(var i=0;i<all.length;i++){
          if(type=="a"){
            if(all[i].nodeType==1){
                arr.push(all[i]);
            }
          }else if(type=="b"){
            if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g)))
            {
              arr.push(all[i]);
            }

           }
     }
   return arr;
}


// 获取第一个
function  getFirst(obj){
  return getChilds(obj)[0];
}


//获取最后一个
function getLast(obj){
  var nub=getChilds(obj);
  return getChilds(obj)[nub.length-1];
}



// 获取下一个兄弟元素
 function getNext(obj){
  var type=type||"a"
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
    else if(type=="b"){
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
     return next;
    }
 }



 // 获取上一个兄弟元素  
 function  getPrevious(obj){
     var previous=obj.previousSibling;
     if(previous=="null"){
      return false;
     }
     while(previous.nodeType==3||previous.nodeType==8){
      previous=previous.previousSibling;
      if(previous==null){
        return false;
      }
     }
     return   previous;
 }

 //插入到队形元素之前
 function  innertBefore(obj,before){
  var parent = before.parentNode;
  parent.insertBefore(obj,before);

 }


 //插入到对象之后
 function insertAfter(obj,after){
  var next = getNext(obj,"b");
  var parent=after.parentNode;
  if(next){     //真
    insertBefore(obj,next);
  }else{
    parent.appendChild(obj);
  }

 }


// 鼠标的滚动调用
 function mouseWheel(obj,funUp,funDown){
    if(obj.attachEvent){
      obj.attachEvent("onmouseWheel",scroll);
    }else if(obj.addEventListener){
      obj.addEventListener("mousewheel",scroll,false);
      obj.addEventListener("DOMMouseScroll",scroll,false);
    }
    function scroll(e){
            var ev=e||window.event;
            var d=ev.wheelDelta||ev.detail;
            if(obj.attachEvent){
              ev.returnValue=false;
            }else if(obj.addEventListener){
              ev.preventDefault();
            }

            if(d==-120||d==3){
              if(funUp){
                funUp();
              }
              
            }else if(d==120||d==-3){
              if(funDown){
                  funDown();
              }
            
            }
    }

 }
   // 传单个对象的双下标
       function floMove(obj){
       var box=$(".fashion-middle",obj)[0];
       var imgss=$(".middle-img",obj);
       var dianss=$(".circle",obj);
       var left1=$(".faL",obj)[0];
       var right1=$(".faR",obj)[0];
       var width1=parseInt(getStyle(imgss[0],"width"));
       var a=0;
       var b=0;
       var move3=function (){
        b=a+1;
       if(b>=imgss.length){
          b=0;
       }
       imgss[b].style.left=width1+"px";
       animate(imgss[a],{left:-width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
       var move4=function (){
        b=a-1;
       if(b<0){
        b=imgss.length-1;
       }
       imgss[b].style.left=-width1+"px";
       animate(imgss[a],{left:width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
       box.onmouseover=function(){
        left1.style.display="block";
        right1.style.display="block";
       }
       box.onmouseout=function(){
         left1.style.display="none";
        right1.style.display="none";
       }
      for(var i=0;i<dianss.length;i++){
        dianss[i].index=i;
        dianss[i].onclick=function(){
          if(this.index>a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=width1+"px";
         animate(imgss[a],{left:-width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else if(this.index<a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=-width1+"px";
         animate(imgss[a],{left:width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else{
          return;
        }
      }
       left1.onmouseover=function(){
      left1.style.background="#E5004F";
    }
    left1.onmouseout=function(){
      left1.style.background="#333";
      left1.style.opacity=0.8;
    }
     right1.onmouseover=function(){
      right1.style.background="#E5004F";
    }
    right1.onmouseout=function(){
      right1.style.background="#333";
      right1.style.opacity=0.8;
    }
        left1.onclick=function(){
          move4();
        }
        right1.onclick=function(){
          move3();
        }
      }
   }




 //双下标轮播
//img_box 为存放图片的父元素
//imgs 为多张图片
//dians 为多个小圆点
//leftbtn 左按钮(点击图片向左滚动)
//rightbtn 右按钮（点击图片向右滚动）
//width 图片的宽度
function doubleSubscript(img_box,imgs,dians,leftbtn,rightbtn,width)
  {
      leftbtn.style.display="none"
      rightbtn.style.display="none"
      imgs[0].style.zIndex=1
      dians[0].style.background="red"
      var z=5
      var next=0
      var n=0
      var flag=true;
      function lunbo()
      {
        if(flag)
        {
          flag=false;
        next++
        if(next==imgs.length)
          {
            next=0;
          }
          dians[n].style.background="#3e3e3e"
          dians[next].style.background="red"
          imgs[next].style.left=width+"px"
          imgs[next].style.zIndex=z++
          animate(imgs[n],{left:-width})
          animate(imgs[next],{left:0},function(){
            flag=true;
          })
          n=next
        }
          
      }
      // var t=setInterval(lunbo,1500)
      for (var i = 0; i < dians.length; i++) 
      { 
        
          dians[i].index=i
          dians[i].onclick=function()
          {
            if(flag){
              flag=false;
              if(this.index>n)
              {
                imgs[this.index].style.left=width+"px"
                animate(imgs[n],{left:-width})
              }
              else if(this.index<n)
              {
                imgs[this.index].style.left=-width+"px"
                animate(imgs[n],{left:width})
              }
              dians[n].style.background="#3e3e3e"
              dians[this.index].style.background="red"
              imgs[this.index].style.zIndex=z++
              animate(imgs[this.index],{left:0},function(){
                flag=true;
              })
              next=this.index
              n=this.index
            }
          }
        
      };
      img_box.onmouseover=function()
      {
        clearInterval(t)
        leftbtn.style.display="block"
        rightbtn.style.display="block"
      }
      img_box.onmouseout=function()
      {
        t=setInterval(lunbo,1000)
        leftbtn.style.display="none"
        rightbtn.style.display="none"
      }
      leftbtn.onclick=function()
      { 
        if(flag){
          flag=false;
          next--
          if(next==-1)
            {
              next=imgs.length-1
            }
          dians[n].style.background="#3e3e3e"
          imgs[next].style.left=-width+"px"
          imgs[next].style.zIndex=z++
          dians[next].style.background="red"
          animate(imgs[n],{left:width})
          animate(imgs[next],{left:0},function(){
            flag=true;
          })
          n=next
        }
      }
      rightbtn.onclick=function()
      {
        lunbo()
      }
}
//  节点轮播
function jdlb(box,inner,btns,leftbtn,rightbtn){
    var num=1;
    btns[0].style.background="#000"
      btns[0].style.color="#fff"
    var t=setInterval(lunbo,2000)
      var flag=true;
      function lunbo(){
        if(flag){
        flag=false; 
        num++;
        if(num>=btns.length+1){
        animate(inner,{left:-num*600},1000,function(){
          num=1;
          inner.style.left="-600px"
          flag=true;
        })  
        for (var i = 0; i < btns.length; i++) {
        btns[i].style.background="#fff"
        btns[i].style.color="#000"
        };
        btns[0].style.background="#000"
        btns[0].style.color="#fff"
        }else if(num<=0){
        animate(inner,{left:-num*600},1000,function(){
          num=btns.length;
          inner.style.left="-3000px"
          flag=true
        })
         for (var i = 0; i < btns.length; i++) {
        btns[i].style.background="#fff"
        btns[i].style.color="#000"
        };
        btns[4].style.background="#000"
        btns[4].style.color="#fff"  
        }else{
        animate(inner,{left:-num*600},1000,function(){
          flag=true;
        })
         for (var i = 0; i < btns.length; i++) {
        btns[i].style.background="#fff"
        btns[i].style.color="#000"
        };
        btns[num-1].style.background="#000"
        btns[num-1].style.color="#fff"
        }
        }
     }
        box.onmouseover=function(){
          clearInterval(t)
        }
        box.onmouseout=function(){
          t=setInterval(lunbo,2000)
        }
        leftbtn.onclick=function(){
            if(flag){
            num-=2;
            }
            lunbo()
        }
        rightbtn.onclick=function(){
          lunbo()
        }
     var timeout;
     for (var i = 0; i < btns.length; i++) {
      btns[i].index=i;
      btns[i].onmouseover=function(){
      var that=this;
        clearTimeout(timeout)
      timeout=setTimeout(function(){
      for (var i = 0; i < btns.length; i++) {
        btns[i].style.background="#fff"
        btns[i].style.color="#000"
        };
        that.style.background="#000"
        that.style.color="#fff" 
        animate(inner,{left:(that.index+1)*-600})
      },200)
      }
      btns[i].onmouseout=function(){
       num=this.index+1;  
      }
     };
}