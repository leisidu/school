



















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
    var id ='',ids='0123456789abcdef';
    for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m8101.looyu.com/monitor',
chat:'http://looyuoms76.looyu.com/chat',
file:'http://static.soperson.com/131221',
compId:20000594,
confId:10049762,
vId:d_genId(),
lang:'',
fixFlash:0,
subComp:7879,
_mark:'3887d56b61baa384baa0ffd9cd940295d55e38e68682b973125714d9ad036de647a9cb9346b18253'
}

, monParam:{
index:-1,
preferConfig:0,

style:{mbg:'http://a.looyu.com/10002/04b41219b0ef4189ab6252bab6d183de.jpg',mh:266,mw:466,
elepos:'0 0 0 0 0 0 0 0 32 35 85 27 128 35 85 27 0 0 0 0',
mbabg:'',
mbdbg:'',
mbpbg:''},

title:'\u5728\u7ebf\u5ba2\u670d',
text:'\u5c0a\u656c\u7684\u5ba2\u6237\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u516c\u53f8\u7f51\u7ad9\uff01\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u503c\u73ed\u5ba2\u670d\uff0c\u70b9\u51fb\u201c\u5f00\u59cb\u4ea4\u8c08\u201d\u5373\u53ef\u4e0e\u6211\u5bf9\u8bdd\u3002',
auto:1,
group:'10054243',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:0,
loop:30,
autoHide:0,
hidePanel:1,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,3,5],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0
}


, panelParam:{
category:'icon',
preferConfig:0,
position:1,
vertical:150,
horizon:5


,mode:1,
target:'10054243',
online:'http://static.soperson.com/default/images/floaticon/on_line_1.gif?131127110427',
offline:'http://static.soperson.com/default/images/floaticon/off_line_1.gif?131127110427',
width:89,
height:139,
status:1,
closable:0,
regions:[],
collapse:0



}



};

if(typeof talk99Init == 'function'){
    talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){


document.write('<div id="doyoo_panel"></div>');


document.write('<div id="doyoo_monitor"></div>');


document.write('<div id="doyoo_share" style="display:none;"></div>');
document.write('<lin'+'k rel="stylesheet" type="text/css" href="http://static.soperson.com/131221/talk99.css?150728"></li'+'nk>');
document.write('<scr'+'ipt type="text/javascript" src="http://static.soperson.com/131221/talk99.js?160203" charset="utf-8"></scr'+'ipt>');

}
}
