const vscode = require('vscode');

const FunPictures = vscode.commands.registerCommand('js-console.funPictures', function () {
	const webview = vscode.window.createWebviewPanel('imgPreview', 'Fun-Pictures', { viewColumn: vscode.ViewColumn.Active }, {
		enableScripts: true, // 允许js
		retainContextWhenHidden: true, // 切换视图时保留内容
	});

	webview.webview.html = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<style>
				body, #imgDom {
					margin: 0;
					padding: 0;
				}
				body {
					overflow-x: auto;
				}
	
				#imgDom {
					position: absolute;
					width: auto;
					height: 100%;
				}
			</style>
		</head>
		<body>
			<p id="tip" style="margin: 10px">Sorry, the service has been suspended.</p>
			<img id='imgDom' draggable="false" src>
		</body>
		<script>
			const dom = document.querySelector('#imgDom');
			const tipDom = document.querySelector('#tip');
			const getImg = (callback) => {
				fetch('https://oss.grass.starxw.com/service/image').then(response => {
					response.arrayBuffer().then(res=> {
						let type = "image/*";
						let blob = new Blob([res], {type: type});
						dom.src = window.URL.createObjectURL(blob);
						callback();
					})
				})
			}
	
			dom.onclick = () => {
				dom.src = '';
				tipDom.style.display = 'block';
				getImg(() => {
					dom.onload = () => {
						tipDom.style.display = 'none';
					}
				})
			}
	
			dom.onclick();
	
			let pressCtrl = false;
			document.addEventListener('keydown', (e) => {
				if (e.key.toLowerCase() === 'control' || e.key.toLowerCase() === 'command') {
					pressCtrl = true;
				}
				if (pressCtrl && e.key === '0') {
					dom.style.height = '100%';
				}
			})
			document.addEventListener('keyup', (e) => {
				if (e.key.toLowerCase() === 'control' || e.key.toLowerCase() === 'command') {
					pressCtrl = false;
				}
			})
			
			let wheelData = 0;
			document.onwheel = (e) => {
				if (pressCtrl) {
					const oldData = wheelData;
					wheelData += (0 - e.deltaY / 10);
					if (wheelData < -70 || wheelData === 0) {
						wheelData = oldData;
						return;
					}
					dom.style.height = 100 + wheelData + '%';;
				}
			}
		  </script>
	</html>
`
});

module.exports = FunPictures;
