webstorageinfo
==============

###Summary
The webstorageinfo is JavaScript library which is MIT Lisence.
This library show WebStorage's data like Developer Tools.
So, this lirary ease your debug. Especially You are debugging with IE.
This library correspond jQuery gt 2.1.1.And based on WebStorage W3C Recommendation

###サマリー
webstorageinfooはMITライセンスで提供しているクラスライブラリです。
Google Chromeなどに実装されている開発者ツールのように、WebStorageが保持している
オブジェクトストアのデータを表示してくれます。IEなど開発者ツールでIndexedDBのデータが見れない
環境でWebStorageの実装やデバッグをする際に役立つでしょう。

###Usage
You should prepare jQuery Library and webstorageinfo.
And, call $().webStorageInfo() method.
That's  all.

###使い方
jQueryライブラリとwebstorageinfoを用意して
$().webStorageInfo() を呼び出すだけです。

###install（インストール）
now under construction

```
npm install webstorageinfo
```

###Sample（サンプル）

```javascript
<script src="jquery-2.1.1.js"></script>
<script src="webstorageinfo.js"></script>
<script>$().webStorageInfo();</script>
```