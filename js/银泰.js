// head  微信下拉框

window.onload=function(){
  // var app=$(".head-app");
  // var wechat=$(".head-wechat");
  // wechat.onmouseover=function(){
  //     app.style.display="black";
  // }   


 
  // wechat.onmouseout=function(){
  // 	app.style.display="none"
  // }



//搜索框文字

   var mini=$('.minicart')[0];   
   mini.onfocus=function(){
   	   mini.style.display="none"
   }


// 左测的消失栏
    var    focusss=$(".menu-all");
    var    focus111=$(".submenu");
    for (var i=0;i<focusss.length;i++){
      focusss[i].index=i;
      focusss[i].onmouseover=function(){
        for(var j=0;j<focus111.length;j++){
          focus111[j].style.display="none";
      }
          focus111[this.index].style.display="block";
      

      }
      focusss[i].onmouseout=function(){
        focus111[this.index].style.display="none";
      }
    }

// banner 动画

    var box=$(".banner")[0];
	var imgs = $(".banner-ltu");
	var imgss=$(".banner-wtu");
	var circle = $(".square");
	var n = 0;
	var right = $(".banner-right")[0];
	var left = $(".banner-left")[0];
	var t=setInterval(move, 2000)
	function move(type) {
		var type=type||"r";//判断type初始值
			if (type=="r") {
				n++;
			    if (n>=circle.length) {
				    n=0;
			    }
			}else{
				n--;
				if (n<0) {
					n=circle.length-1;
				};

			}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0},400)
			animate(imgss[i],{opacity:0},400)
			circle[i].style.background = "#333333";
		}
		animate(imgs[n],{opacity:1},400)
		animate(imgss[n],{opacity:1},400)
		circle[n].style.background = "#C9406E";
	}
	box.onmouseover = function() {
		clearInterval(t)
	}
	box.onmouseout = function() {
		t = setInterval(move, 2000)
	}
	for (var i = 0; i < circle.length; i++) {
		circle[i].index = i;
		circle[i].onmouseover = function() {
			for (var i = 0; i < circle.length; i++) {
				circle[i].style.background = "#333333"
				animate(imgs[i],{opacity:0},400)
				animate(imgss[i],{opacity:0},400)
			}
			circle[this.index].style.background = "#C9406E"
			animate(imgs[this.index],{opacity:1},400)
			animate(imgss[this.index],{opacity:1},400)
		}
	}
	right.onclick = function() {
		move("r")
	}
	left.onclick = function() {
		move("l")
	}

// 超值选项卡
    var lis=$(".brand-chao")
    var imgs1=$(".imgs1")
    for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      lis[i].onmouseover=function(){
        for(var j=0;j<imgs1.length;j++){
          imgs1[j].style.zIndex=0;
        }
        imgs1[this.index].style.zIndex=1;

      }
    }

//百货选项卡
    var ztj=$(".btj");
    var baiyui=$(".baiyui");
    // console.log(baiyui.length)
    for (var i=0;i<ztj.length;i++){
    	ztj[i].index=i;
    	ztj[i].onmouseover=function(){
    		for(j=0;j<baiyui.length;j++){
    			baiyui[j].style.zIndex=0;
    		}
    		    baiyui[this.index].style.zIndex=1;
    	}
    }
  //一楼小轮播
  //    var floorimgs = $(".floor-lunbo"); 
	// var right1 = $(".floor-right")[0]; 
	// var left1 = $(".floor-left")[0]; 
	// var flag1 = true;
	// var t = setInterval(dong, 2000) //时间函数

	// 	function dong() {
	// 		if (!flag1) {     //开关
	// 			return;
	// 		}
	// 		flag1 = false;
	// 		var imgf = getFirst(floorimgs); //获取第一张图片
	// 		animate(floorimgs, {left1: -740}, 1000, function() {
	// 			floorimgs.appendChild(imgf); //图片放在框最后
	// 			floorimgs.style.left = 0; //将框拉回
	// 			flag1=true;
	// 		})
	// 	}

	// 	function dong1() {
	// 		if (!flag1) {
	// 			return;
	// 		}
	// 		flag = false;
	// 		var imgf= getFirst(floorimgs); //第一张图片
	// 		var img1 = getLast(floorimgs); //最后一张图片
	// 		// insertBefore(img1, imgf); 
	// 		imgs.style.left = -740 + "px"; //图片框的向左移动
	// 		animate(floorimgs, {left1: 0}, 1000,function  () {
	// 			flag1=true;
	// 		}) //恢复图片框的位置
	// 	}
  // 小轮播结束

// 一楼大轮播
	// var dalun=$(".floor-yui")[0];
	// var imgsss=$(".floor-yuitu");
	// var yuan=$(".yuan");
	// var oneright=$(".floor-right")[0];
	// var oneleft=$(".floor-left")[0];
	// var onewidth=imgsss[0].offsetWidth;
	// doubleSubscript(dalun,imgsss,yuan,oneleft,oneright,onewidth)


// 楼层的轮播
       function floMove(obj){
       var box=$(".lunbo-da",obj)[0];
       var imgss=$(".one-img",obj);
       var dianss=$(".yuan",obj);
       var left1=$(".one-left",obj)[0];
       var right1=$(".one-right",obj)[0];
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
   var  alllunbo=$(".lunbo-da");
   for(var i=0;i<alllunbo.length;i++){  	 
   	   	   floMove(alllunbo[i])
        
   }

// l楼梯效果
//楼梯


  		var floor=$(".diantitu");
		var lis=$(".floor-dian");
		var box=$(".btntu")[0];
		var xiaoshi=$(".floor-cen")[0];
		var dianflo=$(".dian-floor")

		var cw=document.documentElement.clientWidth;     //浏览器窗口宽高
		var ch=document.documentElement.clientHeight;
		var bh=box.offsetHeight;                         //窗口高度
		var sign=true;
		// box.style.top=(ch-bh)/2+"px";                     //box定位
		
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;

			lis[i].onmouseover=function(){
				sign=false;
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
					// lis[i].innerHTML=i+1+"F";
				}
				var aa=lis[this.index].getAttribute("aa");
				lis[this.index].innerHTML=aa;
				lis[this.index].style.color="#fff";
				lis[this.index].style.background="red"
			}
            
            lis[i].onmouseout=function(){
				sign=false;
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
		
				}
	       	 
            }


			lis[i].onclick=function(){
			sign=false;
			var obj1=document.documentElement.scrollTop?document.documentElement:document.body;   //判断，兼容性问题
		    
			var top=floor[this.index].offsetTop; 
			 //获取出现楼层到body的距离
				 animate(obj1,{scrollTop:top},1000,function(){
					sign=true;
				});        //浮动条到顶的距离
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
				}
				var aa=lis[this.index].getAttribute("aa");
				lis[this.index].innerHTML=aa;
				lis[this.index].style.color="#fff";
				lis[this.index].style.background="red"
			}
                dianflo.onclick=function(){
            animate(dianflo,{scrollTop:0},1000,function(){}); 
            }
		}

	var flag=true;															//开关设置
	var flag1=true;	
	window.onscroll = function() {                       //滚动条事件
		if(!sign){
			return;
		}
		var obj1 = document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i = 0; i < floor.length; i++) {
			if (obj1.scrollTop >= floor[i].offsetTop - ch+300) {            //滚轮长度与楼层长度的比较
				for (var j = 0; j < floor.length; j++) {
					lis[j].style.color = "transparent"								//达到条件后左边变色
					lis[j].style.background = "transparent";
					// lis[j].innerHTML=j+1+"F";
				}
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				lis[i].style.color = "#fff";
				lis[i].style.background = "red"
				// var imgs=$("img",floor[i]);				//按需加载
				// for(var j=0;j<imgs.length;j++){
				// 	var aa=imgs[j].getAttribute("aa");
				// 	imgs[j].src=aa;
				// }
			}
		}
		if (obj1.scrollTop >= (floor[0].offsetTop - ch)){
			if(flag){
				flag=false;
		
			animate(xiaoshi,{opacity:1},300,function(){
				flag1=true;
			})
		    }
		}else{
			if(flag1){
				flag1=false;
		
			animate(xiaoshi,{opacity:0},300,function(){
				flag=true;
			})
		    }
		}
	}

	
}

