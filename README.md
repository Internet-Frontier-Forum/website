## 環境構築手順

### 事前準備
1. GitHubアカウントの取得する。
1. 下記のrepositoryをforkする。
`https://github.com/Internet-Frontier-Forum/website`
1. マークダウン編集用のソフトを準備する。

### 環境構築手順

1. [Node JS](https://nodejs.org/en/) (10.14.1 LTS)をダウンロードし、インストールする。

1. ForkされたrepositoryをPCにcloneする。

1. ウェブサイトのcloneしたフォルダに移動する。
`cd {{clone先}}\website`

1. 下記のコマンドを実行して必要なcomponentsをインストールする。
`npm install`

## 記事アップ手順  

### 概要

テンプレートエンジンはEJSを用いて、Gulpでビルドしています。　　
CSSフレームワークはBulmaを用いて、webpackでビルドしています。　　

`npm run gulp`

でHTMLが生成され  

`npm run build`

でCSSが生成されます。  

HTMLは `docs` フォルダ内に生成されるため、githubのmasterブランチに反映されたら、自動的にウェブサイトも更新されます。

### 記事追加手順
1. `_page/story` フォルダに `sample.ejs` を参考に新規ファイルを作成（ファイル名を abc.ejs にした場合、URLは /story/abc.html になります。）
1. マークダウン記法で記事を作成してください。
1. 画像は `_resources/image` 配下に配置してください。
1. `$ npm run gulp` を実行すると、ウェブサイトとしてHTMLが `docs` フォルダに構築されます。

### スタイル変更手順（通用は行いません）
1. スタイル変更も行いたい場合は、`_style/mystyles.scss` を更新
1. `$ npm run build` を実行

### ローカルでのウェブサイト確認
1. 下記のコマンドでhttp-serverをインストールする。
`npm install http-server -g`

1 `docs` フォルダに移動。

1. 下記のコマンドを実行してウェブサイトを確認する。
`http-server`

        > http-server
        Starting up http-server, serving ./docs
        Available on:
          http://127.0.0.1:8080
        Hit CTRL-C to stop the server

1. 上記の表示の場合は、http://127.0.0.1:8080 にブラウザからアクセスすれば、ローカルでウェブサイトを確認できます。

### 本番反映手順（初心者向け）
1. `git diff` でファイルが意図通りに変更されているか確認。
1. `git add -A` で変更ファイルをコミット対象にする。
1. `git commit` を実行。
1. コミットメッセージを記入。（コミットメッセージは公開されます）
1. `git push origin master` でアップロード。
1. 数分で本番に反映されます。


