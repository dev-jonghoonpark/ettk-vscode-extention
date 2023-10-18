import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

import * as ETTKConverter from "../../util/converter";

describe("converter 유틸", () => {
  describe("영어 입력을 변환기에 입력하면", () => {
    it("한글 키보드로 입력했을 때의 결과를 출력한다.", () => {
      assert.equal(
        ETTKConverter.engTypeToKor("gksrmfdmf duddj zlqhemfh dlqfurgoTdmf Eo"),
        "한글을 영어 키보드로 입력했을 때"
      );
    });
  });

  describe("한글 입력을 변환기에 입력하면", () => {
    it("영어 키보드로 입력했을 때의 결과를 출력한다.", () => {
      assert.equal(
        ETTKConverter.korTypeToEng("조두 쇼ㅔㄷ 두히ㅑ노 ㅑㅜ ㅏㅐㄱㄷ무 ㅏ됴ㅠㅐㅁㄱㅇ"),
        "when type english in korean keyboard"
      );
    });
  });
});
