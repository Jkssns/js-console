
const vscode = require('vscode');

const formatStrList = [];
/* 
	1 大写 A
	2 下划线 _
	3 横线 -
*/
const keyBinds = {
	1: {from: '1', to: '2', toFlag: '_',},
	2: {from: '1', to: '3', toFlag: '-',},
	3: {from: '2', to: '1', toFlag: '',},
	4: {from: '2', to: '3', toFlag: '-',},
	5: {from: '3', to: '1', toFlag: '',},
	6: {from: '3', to: '2', toFlag: '_',},
}

const regMap = {
	1: /([A-Z])/g,
	2: /(_)([a-z])/g,
	3: /(-)([a-z])/g,
}

const handleFormat = (editor, i) => {
	const document = editor.document;
	const varSelection = editor.selection;
	const insertSection = editor.selection;
	const logOption = vscode.workspace.getConfiguration('js-console');
	const word = document.getText(varSelection);
	let keyBindItem = keyBinds[i];
	if (i === 7) {
		const fixed = logOption.FixedFormatString.match(/\d/g);
		for (let i in keyBinds) {
			let item = keyBinds[i]
			if (item.from == fixed[0] && item.to == fixed[1]) {
				keyBindItem = item;
				break;
			}
		}
	}
	const { from, to, toFlag } = keyBindItem;

	editor.edit(editBuilder => {
		editBuilder.replace(
			new vscode.Range(insertSection.start, insertSection.end), 
			word.replace(
				regMap[from],
				(matchStr, str1, str2) => {
					if (from === '1') {
						return toFlag + str1.toLowerCase();
					}
					if (to === '1') {
						return str2.toUpperCase();
					} else {
						return toFlag + str2;
					}
				}
			)
		)
	});

}

for (let i=1; i<=7; i++) {
	const obj = vscode.commands.registerTextEditorCommand('js-console.formatStr' + i, (editor) => {
		handleFormat(editor, i)
	});
	formatStrList.push(obj);
}

module.exports = formatStrList;
