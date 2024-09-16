const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Davion Theme is active!')

  const disposable = vscode.commands.registerCommand(
    'daviontheme.helloWorld',
    function () {
      vscode.window.showInformationMessage('Hello World from DavionTheme!')
    }
  )

  context.subscriptions.push(disposable)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
