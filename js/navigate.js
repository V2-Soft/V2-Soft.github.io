var pages = [
	{
		name: '首页',
		path: './',
		id: 'nav_mainpage',
	},
	{
		name: '下载',
		path: './download.html',
		id: 'nav_downpage',
	},
	// {
	// 	name: '文档',
	// 	path: './document.html',
	// 	id: 'nav_document',
	// },
	// {
	// 	name: '关于',
	// 	path: './about.html',
	// 	id: 'nav_aboutpage',
	// },
]
function writeNavigate(tag){
	document.write('<div class="nav">')
	document.write('<div class="nav-block-logo"><img src="./img/logo.png" alt="logo" height="49px" draggable="false"/></div>')
	for(var i = 0 ; i < pages.length; i++){
		let page = pages[i]
		if(page.id!=tag){
			document.write('<a href="' + page.path + '">')
		}
		document.write('<div class="nav-block" id="' + page.id + '"><label>' + page.name + '</label></div>')
		if(page.id!=tag){
			document.write('</a>')
		}
	}
	document.write('</div>')
	let taged = document.getElementById(tag)
	taged.classList.add('highlighted')
}

function doMainPage() {
	writeNavigate('nav_mainpage')
}
function doDownPage() {
	writeNavigate('nav_downpage')
}
function doDocPage() {
	writeNavigate('nav_document')
}
function doAboutPage() {
	writeNavigate('nav_aboutpage')
}
