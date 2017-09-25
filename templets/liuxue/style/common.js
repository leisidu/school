function checkbox(className, obj){
	if(jQuery(obj)[0].checked){	
		jQuery("." + className).each(function(){
			if(jQuery(this)[0].checked){
				jQuery(this)[0].checked = false;
			}else{
				jQuery(this)[0].checked = true;
			}
		});	
		jQuery(obj)[0].checked = true;
	}else{
		jQuery("." + className).each(function(){
			if(jQuery(this)[0].checked){
				jQuery(this)[0].checked = false;
			}else{
				jQuery(this)[0].checked = true;
			}
		});			
		jQuery(obj)[0].checked = false;
	}
}

function CheckAll(form){
	var ifcheck = null;
	for (var i=0;i<form.elements.length-1;i++){
		var e = form.elements[i];
		if(e.type=='checkbox'){
			if (ifcheck === null) ifcheck = !e.checked;
			e.checked = ifcheck;
			if (typeof e.onclick == 'function') e.onclick();
		}
	}
	return ifcheck;
}

function getObj(domid){
	return document.getElementById(domid);
}

//选择所有的记录
function checkAll() {
	var objs = document.getElementsByTagName("input");
	for(var i=0; i<objs.length; i++) {
		if(objs[i].type.toLowerCase() == "checkbox" ){
			if(objs[i].checked) objs[i].checked = false;
			else  objs[i].checked = true;
		}	    
	}
}

function isSelect(form){
	var flag=false;
	for (var i=0;i<form.elements.length;i++){
		var e = form.elements[i];
		if(e.checked == true){
			flag=true;
			break;
		}
    }
    return flag;	
}

//电话号码检测
function checkTel(obj){	
	//电话号码验证					
	var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$)/; 
	if(pattern.test(obj.value)){ 
		return true; 
	}else{ 
		alert("电话号码填写不正确！");
		return false; 
	} 
}

//邮箱地址验证
function checkEmail(obj){ 
	var str = obj.value; 
	//在JavaScript中，正 则 表达式只能使用"/"开头和结束，不能使用双引号 
	var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
	var objExp = new RegExp(re); 
	if(objExp.test(str) == true){ 
		return true; 
	}else{ 
		alert("邮箱地址不正确！");
		return false; 
	} 
} 

//保留一位小数点
function returnFloat1(value) {    
	value = Math.round(parseFloat(value) * 10) / 10;
	if (value.toString().indexOf(".") < 0)
 		value = value.toString() + ".0";
	return value;
}

function docollectthispage(){var sURL=window.location.href;var sTitle=$('title').html();try{window.external.addFavorite(sURL,'');}catch(e){try{window.sidebar.addPanel(sTitle,sURL,"");}catch (e){alert("您的浏览器不支持此功能，请使用Ctrl+D进行添加");}}}
			
Date.prototype.addDays = function(days) {
  this.setDate( this.getDate()  + days);
  return this;
};

//unicode转中文
function unicode2chinese(str){
	return unescape(str.replace(/\\u/g,'%u'));
}

//更新帐户资料
function saveProfile(){
	if(jQuery("#old_password").val() != ""){
		if(jQuery("#password").val() == ""){
			alert("请填写密码！");
			jQuery("#password").focus();
			return false;
		}
		if(jQuery("#password").val() != jQuery("#password2").val()){
			alert("两次输入密码不一致！");
			jQuery("#password2").focus();
			return false;
		}
	}
	if(jQuery("#tel").val() == ""){
		alert("请填写联系电话！");
		jQuery("#tel").focus();
		return false;
	}
	var options = {
		url: "/ask/index.php?action=saveProfile",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){			
			var ret = parseInt(msg);
			if(ret == -1){
				alert("请登录！");
				return false;
			}else if(ret == -2){
				alert("旧密码不正确！");
				return false;			
			}else{
				alert("修改成功！");	
			}
		}
	};
    $('#profileForm').ajaxSubmit(options);
	
    return false;
}

//更换头像
function changeAvatar(){
	
	jQuery("#changeAvatarForm").submit();
	
}

function rememberMe(obj){
	if(jQuery(obj).attr("checked")==true){
		jQuery("#remember").val("86400");
	}else{
		jQuery("#remember").val("3600");
	}
}

function login(){
	if(jQuery("#username").val() == ""){				
		alert("请输入登录帐号！");
		jQuery("#username").focus();
		return false;
	}
	if(jQuery("#password").val() == ""){
		alert("请输入登录密码！");
		jQuery("#password").focus();
		return false;
	}
	var options = {
		url: "/ask/index.php?action=loginCheck",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){	
			var ret = parseInt(msg);
			if(ret == -1){
				alert("请登录！");
				return false;
			}else if(ret == -2){
				alert("密码不正确！");
				return false;			
			}else{	
				if(forwardMethod){
					jQuery.unblockUI();
					eval(forwardMethod + "()");							
				}else{
					location.reload();
				}	
			}
		}
	};
   jQuery('#theform').ajaxSubmit(options);
}

function loadLoginAjax(fm){
	if(fm){		
		forwardMethod = fm;
	}
	if(user_id < 1){
		jQuery.ajax({
			url: "/ask/index.php?action=login",
			cache: false,
			dataType: "html",
			type:"get", 
			success: function(msg){			
							
				jQuery.blockUI({
					message: jQuery.trim(msg),
					fadeIn: 1000, 
					fadeOut: 700, 
					showOverlay: true, 
					centerY: false, 
					css: { 
						margin:0,
						padding:0,
						textAlign:'left',
						width: '570px', 
						top:'200px', 
						left:(jQuery(window).width() - 570) /2 + 'px',
						cursor:'default',
						border: 'none'
					}, 
	 
					// styles for the overlay 
					overlayCSS:  { 
						backgroundColor: '#000', 
						opacity:         0.6
					} 			 
					
				});	
				
				jQuery("#username").focus();
			}
		});		
	}else{		
		if(forwardMethod){
			jQuery.unblockUI();
			eval(forwardMethod + "()");							
		}else{
			location.reload();
		}	
	}
}

function checkAskForm(theform) {
	if(jQuery("#title").val() == "" || jQuery("#title").val() == ""){
		alert("问题不能为空");
		jQuery("#title").focus();
		return false;
	}
	var obj2 = document.getElementById("cid");
	if(obj2.selectedIndex<0) {
		alert("请选择问题分类");
		return false;
	}
	if(theform.title.value.length > 255) {
		alert("问题太长，请修改，并使用问题补充");
		theform.title.focus();
		return false;
	}
	if(theform.content.value.length > 1000 || theform.content.value.length < 5) {
		alert("问题内容不符合规定上，请修改");
		theform.content.focus();
		return false;			
	}
	return true;
}

function checkAnswerForm(f,des) {
	if(f.content.value=="") {
		alert("请输入您的"+des);
		f.content.focus();
		return false;
	}
}

function saveInvestigation(){
	if(jQuery("#name").val() == ""){				
		alert("请填写姓名！");
		jQuery("#name").focus();
		return false;
	}
	if(jQuery("#tel").val() == ""){
		alert("请填写电话！");
		jQuery("#tel").focus();
		return false;
	}
	if(jQuery("#email").val() == ""){
		alert("请填写邮箱！");
		jQuery("#email").focus();
		return false;
	}
	var options = {
		url: "/ask/index.php?action=saveInvestigation",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){	
			var ret = parseInt(msg);
			if(ret == -1){
				alert("请登录！");
				return false;			
			}else{	
				alert("保存成功！");
			}
		}
	};
	
	jQuery('#investigationForm').ajaxSubmit(options);	
}

//下载
function downloadAttachment(id){
	jQuery.unblockUI();
	jQuery("#download_id").val(id);
	jQuery.blockUI({
		message: jQuery("#download_box"),
		fadeIn: 1000, 
		fadeOut: 700, 
		showOverlay: true, 
		centerY: false, 
		css: { 
			width: '350px', 
			top:'300px', 
			left:(jQuery(window).width() - 350) /2 + 'px',
			right: '10px', 
			cursor:'default',
			border: '3px solid #981422'
		}, 

		// styles for the overlay 
		overlayCSS:  { 
			backgroundColor: '#000', 
			opacity:         0.3
		} 			 
		
	});	
}

function sendDownload(){
	
	if(jQuery("#download_email").val() == ""){
		alert("请填写邮箱！");
		jQuery("#download_email").focus();
		return false;
	}
	
	var str = jQuery("#download_email").val(); 
	//在JavaScript中，正 则 表达式只能使用"/"开头和结束，不能使用双引号 
	var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
	var objExp = new RegExp(re); 
	if(objExp.test(str) != true){ 
		alert("邮箱地址不正确！");
		return false; 
	} 
	
	var options = {
		url: "/post/download",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){	
			var ret = parseInt(msg);
			if(ret == 1){
				jQuery.unblockUI();
				alert("发送成功，请查收邮件！");
				return false;
			}else{	
				alert("发送失败！");
				return false;
			}
		}
	};
	
	jQuery('#downloadForm').ajaxSubmit(options);	
}

//评估
function switchApply(idx){
	if(idx == 1){
		jQuery("#apply_nav_1").addClass("liu_02");
		jQuery("#apply_nav_2").removeClass("liu_02");
		jQuery("#apply_1").show();
		jQuery("#apply_2").hide();
	}else{
		jQuery("#apply_nav_1").removeClass("liu_02");
		jQuery("#apply_nav_2").addClass("liu_02");
		jQuery("#apply_1").hide();
		jQuery("#apply_2").show();		
	}
}

function saveApp(){
	if(jQuery("#apply_name").val() == "" || jQuery("#apply_name").val() == "输入姓名"){
		alert("请输入姓名！");
		jQuery("#apply_name").focus();
		return false;
	}	
	if(jQuery("#apply_tel").val() == "" || jQuery("#apply_tel").val() == "输入电话"){
		alert("请输入电话！");
		jQuery("#apply_tel").focus();
		return false;
	}	
	var options = {
		url: "/enrol/saveApp",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){			
			if(msg.indexOf("succ") != -1){
				jQuery.unblockUI();
				alert("提交成功！");	
			}			
		}
	};
    $('#appForm').ajaxSubmit(options);
	
    return false;	
}

function saveApply(){
	if(jQuery("#name").val() == "" || jQuery("#name").val() == "姓名"){
		alert("请输入姓名！");
		jQuery("#name").focus();
		return false;
	}	
	if(jQuery("#tel").val() == "" || jQuery("#tel").val() == "电话"){
		alert("请输入电话！");
		jQuery("#tel").focus();
		return false;
	}		
	if(jQuery("#email").val() == "" || jQuery("#email").val() == "邮箱"){
		alert("请输入邮箱！");
		jQuery("#email").focus();
		return false;
	}	
	/*
	if(jQuery("#gpa").val() == "" || jQuery("#gpa").val() == "GPA"){
		alert("请输入GPA！");
		jQuery("#gpa").focus();
		return false;
	}		
	if(jQuery("#college").val() == "" || jQuery("#college").val() == "学校 & 年级"){
		alert("请输入学校及年级！");
		jQuery("#college").focus();
		return false;
	}
	*/
	var options = {
		url: "/enrol/saveApply",
		cache: false,
		type: 'post', 	
		dataType: 'html',	
		success: function(msg){			
			if(msg.indexOf("succ") != -1){
				//alert("提交成功！");		
				//jQuery("#applyBtn").attr("disabled",true);
				//$('#applyForm')[0].reset();	
				//jQuery("#applyBtn").hide();
			}			
		}
	};
	//jQuery("#applyBtn").hide();
    $('#applyForm').ajaxSubmit(options);
	
	for(var i=0;i<1000000;i++){
		
	}
	alert("提交成功！");
	$('#applyForm')[0].reset();	
	
    return false;	
}

function baomingForm(title, target_type, target_id){
	if(title == "" && target == ""){
		alert("无效请求！");
		return false;
	}	

	jQuery.ajax({
		url: "/travel/applyForm",
		cache: false,
		dataType: "html",
		type:"get", 
		success: function(msg){			
						
			jQuery.blockUI({
				message: jQuery.trim(msg),
				fadeIn: 1000, 
				fadeOut: 700, 
				showOverlay: true, 
				centerY: false, 
				css: { 
					margin:0,
					padding:0,
					textAlign:'left',
					width: '570px', 
					top:'200px', 
					left:(jQuery(window).width() - 570) /2 + 'px',
					cursor:'default',
					border: 'none'
				}, 
		
				// styles for the overlay 
				overlayCSS:  { 
					backgroundColor: '#000', 
					opacity:         0.6
				} 			 
				
			});	

			jQuery("#apply_title").focus();
	
			jQuery("#apply_title").val(title);
			jQuery("#apply_target_type").val(target_type);
			jQuery("#apply_target_id").val(target_id);
		}
	});					
}

jQuery(document).ready(function(){			
	jQuery("input[type=text], textarea").click(function(){
		jQuery(this).css('color','#000');
	}).focus(function(){
		jQuery(this).css('color','#000');
	});			   	
});





