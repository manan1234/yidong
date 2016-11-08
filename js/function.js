// getClass(classname，range) 获取指定类名的元素
// classname是你指定要获取元素的classname
// range 指定的范围  是一个具体的对象
// 思路：
// 1、判断浏览器是否支持
      // document.getElementsByClassName
// 2、获取所有的元素
// 3、元素的类名是否等于指定的类名
// 4、符合条件用数组来存储。
// 5、返回数组
function getclass(classname,range){
  range=range||document;
  // 三元表达式的方法
  // range=range?range:document;
  // range=range==undefined?document:range;
	if (document.getElementsByClassName) {
        // w3c使用
        return range.getElementsByClassName(classname);
	}
	else{
       var a=range.getElementsByTagName('*');
       var arr=[];
       for (var i =0; i<a.length; i++) {
        // 当前元素的className中是否包含指定的类名
       	if (checkclass(a[i].className,classname)) {
       	arr.push(a[i]);
       }
   }
   return arr;
	}
}
function checkclass(classStr,classname){
  var arr=classStr.split(" ");
   for (var i = 0; i <arr.length; i++) {
       if (arr[i]==classname) {
        return true;
       }
   }
   return false;
}
// *****************************************************
// $函数
// 1、初始化范围
// 2、selecter去空
// 3、判断第一个字符
// 4、获取元素
// 5、创建一个元素节点
// $(function(){})
function $(selecter,range){
 
  if (typeof selecter=="function") {
        window.onload=function(){
          selecter();
        }
  }else if(typeof selecter=="string"){
     range=range?range:document;
  // selecter=selecter.trim();
  if (selecter.charAt(0)==".") {
    return getclass(selecter.substring(1),range);
  }
  else if (selecter.charAt(0)=="#") {
    return range.getElementById(selecter.substring(1))
  }
  else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
    return range.getElementsByTagName(selecter);
  }
  else if (/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)) {
    return document.createElement(selecter.slice(1,-1));
  }
}
}
//设置或者获取文本
// getContent(obj,value)
// obj指定对象 value 设置的文本
// 1、判断获取与设置
//       参数个数
//       value
// 2、获取
//      判断浏览器是否支持属性
  //      return obj.innerText
  //      return obj.textContent 
// 3、设置
//    判断浏览器是否支持属性
//        IE obj.innerText=value
//        w3c obj.textContent=value;
function getContent(obj,value){
  if (value) {
        if (obj.innerText) {
             obj.innerText=value;
        }
        else{
              obj.textContent=value;
        }
  }
  else{
       if (obj.innerText) {
            return obj.innerText;
        }
        else{
            return obj.textContent;
        }
  }
}
// *********************************************************************
// getStyle(obj,attr) 获取指定元素的样式
  // obj指定对象 attr样式属性
  // 1、判断浏览器是否支持
  // 2、返回属性值
function getStyle(obj,attr){
  if (window.getComputedStyle) {
    return getComputedStyle(obj,null)[attr];
  }
   else {
    return obj.currentStyle[attr];
   }
}


//getChilds(obj,type) 获取指定对象的子元素集合
//obj指定的对象
// 获取子元素节点的类型
   // true 获取的是元素节点 
   // false 获取元素节点和有意义的文本
//1、先获取所有子元素
//2、节点类型1
function getChilds(obj,type){
  type=type==undefined?true:type;
  var childs=obj.childNodes;
  var arr=[];
  if(type){
  for (var i = 0; i<childs.length; i++) {
    if (childs[i].nodeType==1) {
      arr.push(childs[i]);
    }
  }
}else{
  for (var i = 0; i<childs.length; i++) {
    if (childs[i].nodeType==1||(childs[i].nodeType==3&&
      childs[i].nodeValue.replace(/^\s*|\s*$/g,""))) {
      arr.push(childs[i]);
    }
  }
}
  return arr; 
}

function firstChild(obj){
   return  getChilds(obj)[0];
}
function lastChild(obj){
   return  getChilds(obj)[getChilds(obj).length-1];
}
function randomChild(obj,i){
  return getChilds(obj)[i];
}
// getNext（obj）获取obj的下一个元素节点和下一个有意义的文本节点
// 1、先获取其兄弟节点next 如果没有返回false
// 2、如果有 判断其兄弟节点nodeType！=1
//   next=next.Sibling;
// next==null false
     // 重复步骤2
     // nodeType==1 返回next
function getNext(obj,type) {
  type=type==undefined?true:type;
  if (type) {
           var next=obj.nextSibling;
           if(next==null)
           {
            return false;
           }
         else{
           while(!(next.nodeType==1))
           {
            next=next.nextSibling;
             if(next==null)
               {
            return false;
               }
           }
           return next;
          }
        }
        else if(type==false){
          var next=obj.nextSibling;
           if(next==null){
            return false;
           }
         else{
           while(!(next.nodeType==1||(next.nodeType==3&&
      next.nodeValue.replace(/^\s*|\s*$/g,"")))){
            next=next.nextSibling;
             if(next==null)
               {
            return false;
               }
           }
           return next;
          }
        }
    }
// getPrevious(obj)获取obj的上一个元素节点和上一个有意义的文本
  function getPrevious(obj,type){
    if (type) {
    var previous=obj.previousSibling;
    if (previous==null) {
      return false;
    }
    while(previous.nodeType==3||previous.nodeType==8)
    {
      previous=previous.previousSibling;
      if (previous==null) {
        return false;
      }
      return previous;
    }
  }
  else{
     var previous=obj.previousSibling;
    if (previous==null) {
      return false;
    }
    while(!(previous.nodeType==1||(previous.nodeType==3&&
      previous.nodeValue.replace(/^\s*|\s*$/g,"")))){
      previous=previous.previousSibling;
      if (previous==null) {
        return false;
      }
      return previous;
    }
  }
  }
// insertAfter(obj,obj1)将0bj插入到obj1的后面
// type类型
//    true 元素节点
//    false 有意义的文本
// 1、获取其父元素
// 2、获取obj的兄弟元素
// 3、next 如果为false 直接调用parent.appendChild(obj)
// 4、next 不是false 调用parent.insertBefore(obj,getNext(obj1))
      
    function insertAfter(obj,obj1,type){
      var parent=obj1.parentNode;
      var next=getNext(obj1,type)
      if(next)
      {
          parent.insertBefore(obj,next)
      }
      else
      {
           parent.appendChild(obj);
      }
    }
// 在obj1的前边一个元素的前边插入obj
    function insertprevious(obj,obj1,type){
      var parent=obj1.parentNode;
      var previous=getPrevious(obj1,type)
      if(previous)
      {
          parent.insertBefore(obj,previous)
      }
      else
      {
           parent.appendChild(obj);
      }
    }
    // // appendTo 扩张到原型上