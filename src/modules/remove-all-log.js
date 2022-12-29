const vscode = require('vscode');

const removeAllLog = vscode.commands.registerTextEditorCommand('js-console.removeAllLog', function () {
	const editor = vscode.window.activeTextEditor;
	const document = editor.document;
	const documentText = document.getText();
	const logOption = vscode.workspace.getConfiguration('js-console');
	const reg = logOption.ShowLogSemicolon ? /console.+?;/g : /console.+?\)/g;
	
	editor.edit(editBuilder => {
		const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
		editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), documentText.replace(reg, ''));
	});
});


module.exports = removeAllLog;
