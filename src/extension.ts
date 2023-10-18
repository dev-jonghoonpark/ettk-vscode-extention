// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as ETTKConverter from "./util/converter";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ettk" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const engTypeToKorCommand = vscode.commands.registerCommand(
    "ettk.engTypeToKor",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selectedText = editor.document.getText(editor.selection);
        editor.edit((builder) => {
          builder.replace(
            editor.selection,
            ETTKConverter.engTypeToKor(selectedText)
          );
        });
      }
    }
  );
  context.subscriptions.push(engTypeToKorCommand);

  const korTypeToEngCommand = vscode.commands.registerCommand(
    "ettk.korTypeToEng",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selectedText = editor.document.getText(editor.selection);
        editor.edit((builder) => {
          builder.replace(
            editor.selection,
            ETTKConverter.korTypeToEng(selectedText)
          );
        });
      }
    }
  );
  context.subscriptions.push(korTypeToEngCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
