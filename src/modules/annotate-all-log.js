const vscode = require('vscode');

const annotateAllLog = vscode.commands.registerTextEditorCommand('js-console.annotateAllLog', function () {
	const editor = vscode.window.activeTextEditor;
	const document = editor.document;
	const documentText = document.getText();

	editor.edit(editBuilder => {
		const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
		editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), documentText.replace(/console/g, '// console'));
	});
});


module.exports = annotateAllLog;
