document.write(
'<label id = "chek" style="color: red;"><input type="checkbox" name="category" value="同意" id="category" />我已知晓、同意并接受上述内容</label>'
)

function doCategory(){
	var check_text = document.getElementById('category');
	check_text.addEventListener("click", function () {
		if(check_text.checked) {
			check_text.disabled = true
			var div = document.getElementById('download')
			
			div.innerHTML =
			'<h3 style="text-align: center; margin-bottom: 16px;">相关下载</h3>'+
			'<table class="download-link">'+
				'<tr>'+
					'<td><strong>V2引擎 [20240916]</strong><br><label class="small-hint">名称</label></td>'+
					'<td><strong>487M</strong><br><label class="small-hint">大小</label></td>'+
					'<td><strong>永久免费</strong><br><label class="small-hint">无功能限制</label></td>'+
					'<td><a id="showDownloadLink" href="javascript:null"><button>点击下载</button></a></td>'+
				'</tr>'+
			'</table>'
			
			
			div.style.display = "block"
			
			var downloadModel = document.getElementById('downloadLinkModel')
			var downloadContent = document.getElementById('download_content')
			var readhint = document.getElementById('readhint')
			document.getElementById('showDownloadLink').onclick = function(){
				downloadModel.style.display = 'block';
				downloadModel.scrollTop = 0;
				readhint.innerText = '请先阅读下载须知...'
				downloadContent.innerHTML = '<a href="javascript:alert(\'请先阅读下载须知！\')" id="baidu_link"><button id="baidu_button" class="downbutton">百度网盘(提取码: ****)</button></a>'+
					'<a href="javascript:alert(\'请先阅读下载须知！\')" id="pan123_link"><button id="pan123_button" class="downbutton">123网盘(提取码: ****)</button></a>';
			}
			
			
			
			
			downloadModel.onscroll = function() {
				var scrollHeight = downloadModel.scrollHeight;
				var scrollTop = downloadModel.scrollTop;
				var clientHeight = downloadModel.clientHeight;
				var scrollBottom = scrollHeight - scrollTop - clientHeight;

				if (scrollBottom <= 0){
					
					readhint.innerText = "你已完成阅读."
					
					var refBaidu = document.getElementById('baidu_link')
					refBaidu.href = "https://pan.baidu.com/s/13s9Xde2IXkSWhN9ZNKSLaA?pwd=V2M2"
					refBaidu.target = "_blank"
					
					var refPan123 = document.getElementById('pan123_link')
					refPan123.href = "https://www.123pan.com/s/0qy2jv-0kQHd.html?提取码=vqNP"
					refPan123.target = "_blank"
					
					var baidu_button = document.getElementById('baidu_button')
					var pan123_button = document.getElementById('pan123_button')
					baidu_button.innerText = '百度网盘(提取码: V2M2)'
					pan123_button.innerText = '123网盘(提取码: vqNP)'
				}
			}
			
			//当用户点击关闭按钮时，关闭弹窗forgetpswModel
			var pswcloseBtn = document.getElementsByClassName("close")[0];
			pswcloseBtn.onclick = function() {
			    downloadModel.style.display = "none";
				downloadContent.innerHTML = '';
			}
			
			//当用户点击弹窗中间白框外任意位置时，关闭弹窗
			window.onclick = function(event) {
			    if(event.target == downloadModel) {
			        downloadModel.style.display = "none";
					downloadContent.innerHTML = '';
			    }
			}
			
		} else {
			var div = document.getElementById('download')
			div.innerHTML = ''
			// while (div.firstChild) { // 循环判断div是否有子元素
			//     div.removeChild(div.firstChild); // 移除子元素
			// }
			div.style.display = "none"
		}
	});
	
}
