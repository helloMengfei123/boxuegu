define(['jquery', 'jqueryCookie', 'template'], function($, undefined, template) {
	(function(){
		/**
	 * 1、获取本地存储的用户信息
	 * 2、把用户信息解析为js对象方便使用
	 * 3、拼接用户信息模版字符串
	 * 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
	 * 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
	 * 6、最后把这个html替换到页面指定位置
	 * */
	
	// 1、获取本地存储的用户信息
	var userInfoStr = $.cookie('userInfo');//获取在主页设置的cookie

	var userInfoObj;//定义一个对象

	// 2.把用户信息解析为js对象,方便使用
	try{
		userInfoObj = JSON.parse(userInfostr);//把字符串变为一个对象,如果没有就会报错,所以这里是试验
	}catch(e){
		userInfoObj = {};//上面的没有就会运行这句
	}
	
	// 2、把用户信息解析为js对象方便使用
	// var userInfoObj = JSON.parse(userInfoStr);

	// 3、拼接用户信息模版字符串
	var prifileTpl = 
		'<div class="profile">' + 
        	'<div class="avatar img-circle">' +
            	'<img src={{ tc_avatar? tc_avatar: "/img/default.png" }}>' + 
        	'</div>' +
        	'<h4>{{ tc_name }}</h4>' +
    	'</div>';
    	
	// 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
	var userInfoRender = template.compile(prifileTpl);
	
	// 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
	var userInfoHTML = userInfoRender(userInfoObj);
	
	// 6、最后把这个html替换到页面指定位置
	$('.aside').prepend(userInfoHTML);
	})();
	
//下面是做一个下拉列表
	(function(){
		$('.navSlide').on('click',function(){
			$(this).next().slideToggle();
		})
	})();


(function(){
	// 手动设置子页面的链接
var pathHref = {
	'/html/teacher/teacher_add.html':'/html/teacher/teacher_list.html'//左边是讲师编辑网页链接,右边是讲师管理网页链接,左边是右边的子链接
};
var pathname = location.pathname;//获取当前链接"/html/teacher/teacher_add.html"

var aHref = pathHref[pathname]? pathHref[pathname]:pathname;//在pathHref对象里面查找链接
	$('.navs a').removeClass('active').filter('[href="'+aHref+'"]').addClass('active');//移除active,过滤找到'/html/teacher/teacher_list.html'链接,添加active

})();


});
