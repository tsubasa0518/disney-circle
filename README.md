# Disney Circle Mouse

一橋・津田塾ディズニー同好会 Mouse の活動紹介と、東京ディズニーリゾート関連のイベント情報をわかりやすく届けるための非公式ファンサイトです。

公開サイト:
https://circle-mouse.com/

GitHubリポジトリ:
https://github.com/tsubasa0518/disney-circle

---

## 1. このサイトの目的

このサイトは、一橋・津田塾ディズニー同好会 Mouse の活動内容、イベント情報、入会希望者向け情報、Q&A、チケット情報などを整理して掲載することを目的としています。

主な目的は以下の通りです。

- サークルの雰囲気や活動内容を初めて見る人にも分かりやすく伝える
- 入会希望者が必要な情報へ迷わずアクセスできるようにする
- 東京ディズニーリゾート関連のイベント情報を整理して掲載する
- スマートフォンでも見やすいレスポンシブ対応のサイトとして運用する
- GitHub Pages によって静的サイトとして安全に公開する

このサイトは、東京ディズニーリゾートおよび関連企業の公式サイトではありません。

---

## 2. 公開URL

現在の公開URLは以下です。

```text
https://circle-mouse.com/
```

GitHub Pages により `main` ブランチの内容が公開されます。
通常の修正作業では、`main` に直接commitせず、必ず作業ブランチを作成してPR経由で反映します。

---

## 3. 使用技術

このサイトは、基本的に静的HTML / CSS / JavaScriptで構成されています。

主な使用技術は以下です。

```text
HTML
CSS
JavaScript
SVG
GitHub Pages
GitHub Actions
```

現時点では、Astro、Jekyll、React、Vue、Next.js などのフレームワークは使用していません。
GitHub Pagesで安全に公開できる静的構成を優先しています。

---

## 4. ディレクトリ構成

主なファイル構成は以下です。

```text
.
├── CNAME
├── README.md
├── index.html
├── events.html
├── news.html
├── faq.html
├── developer.html
├── afternoon-tea-login.html
├── afternoon-tea.html
├── css/
│   ├── style.css
│   └── afternoon-tea.css
├── js/
│   ├── main.js
│   ├── sparkle.js
│   └── afternoon-tea.js
└── images/
```

---

## 5. 主なページ

### `index.html`

サイトのトップページです。

主な内容:

- サイトのメインビジュアル
- サークル紹介
- 活動内容
- 年間スケジュール
- 入会方法
- SNS・外部リンク
- 共通フッター

### `events.html`

イベント情報ページです。

主な内容:

- サークル関連イベント
- 東京ディズニーリゾート関連イベント
- イベントカード
- 共通フッター

### `news.html`

最新情報ページです。

主な内容:

- 現在は作成中ページ
- 英語文言による簡易表示
- 共通フッター

### `faq.html`

入会希望者向けのQ&Aページです。

主な内容:

- 入会に関する質問
- 活動内容に関する質問
- 費用・参加に関する質問
- 初心者向けの質問
- 当日の注意点
- 連絡手段・SNSに関する質問
- 共通フッター

### `developer.html`

サイト開発者ページです。

主な内容:

- Developer 1 のプロフィール
- 大学・所属情報
- 経歴
- サークル情報
- 関連リンク

Developer 1 内の「サークル」項目には以下を掲載しています。

```text
1. 慶應AIC
2. 慶應料理サークル
   （kettle）
3. 東大料理同好会
   （カラメルビター）
4. アフヌン同好会
```

`4. アフヌン同好会` は `afternoon-tea-login.html` へ遷移します。

### `afternoon-tea-login.html`

アフヌン同好会ページへ入るためのパスワード入力ページです。

主な内容:

- テンキー形式のパスワード入力UI
- パスワード認証
- 誤入力時のロック処理
- 認証成功後に `afternoon-tea.html` へ遷移

このページの認証処理は `js/afternoon-tea.js` で管理しています。

### `afternoon-tea.html`

アフヌン同好会の本体ページです。

主な内容:

- アフタヌーンティー記録
- 写真グリッド
- モーダル表示
- メンバー向けコンテンツ

---

## 6. CSS構成

### `css/style.css`

サイト全体で使用する共通CSSです。

主な対象:

- 全体レイアウト
- ヘッダー
- ナビゲーション
- フッター
- カードUI
- レスポンシブ対応
- 各ページ共通の見た目

### `css/afternoon-tea.css`

アフヌン同好会関連ページ専用のCSSです。

主な対象:

- `afternoon-tea-login.html`
- `afternoon-tea.html`
- パスワード入力UI
- 写真グリッド
- モーダル
- 装飾アニメーション

---

## 7. JavaScript構成

### `js/main.js`

サイト全体で使う共通JavaScriptです。

主な用途:

- ナビゲーション操作
- スクロール関連処理
- ページ共通の動的処理

### `js/sparkle.js`

装飾用のJavaScriptです。

主な用途:

- キラキラ演出
- ページ上の装飾効果

### `js/afternoon-tea.js`

アフヌン同好会関連ページのJavaScriptです。

主な用途:

- パスワード入力処理
- 認証成功時のページ遷移
- 誤入力時のロック処理
- 写真モーダルの制御

---

## 8. ローカルプレビュー方法

Codespaces またはローカル環境で、リポジトリ直下にいる状態で以下を実行します。

```bash
python3 -m http.server 8000
```

ブラウザで以下を開きます。

```text
http://localhost:8000/
```

Codespacesの場合は、Ports / Preview から `8000` を開きます。

確認後、サーバーを停止するにはターミナルで以下を押します。

```text
Control + C
```

---

## 9. 基本的な開発フロー

このリポジトリでは、`main` ブランチに直接commitしません。
必ず作業ブランチを作成し、Pull Request経由で `main` にmergeします。

基本フローは以下です。

```text
1. mainを最新化する
2. 作業ブランチを作成する
3. 修正する
4. ローカルで表示確認する
5. git diffで変更内容を確認する
6. commitする
7. pushする
8. Pull Requestを作成する
9. Files changedを確認する
10. ConversationタブでBotコメントを確認する
11. 問題がなければmergeする
12. Actions / Pagesの成功を確認する
13. 公開サイトを確認する
14. 不要なブランチを削除する
```

---

## 10. 作業開始前の確認コマンド

作業前には、現在の状態を必ず確認します。

```bash
pwd
git remote -v
git branch --show-current
git status
git fetch origin
git branch -vv
git log --oneline --decorate -5
ls
```

---

## 11. mainを最新化するコマンド

```bash
git checkout main
git pull origin main
git status
```

期待される状態:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

## 12. 作業ブランチ作成

例:

```bash
git checkout -b fix/example-change
git branch --show-current
git status
git push -u origin fix/example-change
git branch -vv
```

ブランチ名は作業内容に応じて分かりやすくします。

例:

```text
fix/sns-links
fix/mobile-layout
fix/footer-links
fix/developer-page-update
security/external-link-hardening
docs/update-readme
```

---

## 13. 差分確認コマンド

修正後は、commit前に必ず差分を確認します。

```bash
git status
git diff --name-only
git diff --stat
git diff
git diff --check
```

PR前には、`main` との差分も確認します。

```bash
git diff origin/main...HEAD --name-only
git diff origin/main...HEAD --stat
git diff origin/main...HEAD
git diff origin/main...HEAD --check
```

---

## 14. commit / push

変更内容を確認したら、必要なファイルだけをステージします。

例:

```bash
git add README.md
git commit -m "docs: update README"
git push origin docs/update-readme
```

複数ファイルをまとめて追加する場合も、不要なファイルが混ざっていないか確認してから `git add` します。

---

## 15. Pull Request作成時の確認

PR作成時は以下を確認します。

```text
base: main
compare: 作業ブランチ
```

PR作成後、必ず以下を確認します。

```text
Files changed
Conversation
Checks / Actions
```

### Files changedで見ること

- 変更対象外ファイルが混ざっていないか
- 差分が意図した内容だけか
- 画像やCSS、JSが不要に変更されていないか

### Conversationで見ること

- Codex Reviewの指摘があるか
- GitHub Botのコメントがあるか
- 表示崩れ、CSS、JavaScript、セキュリティ、アクセシビリティに関する指摘がないか

Botコメントがある場合は、対応方針が明確になるまでmergeしません。

---

## 16. merge前の注意

以下を確認するまで `Merge pull request` は押しません。

```text
Files changedに問題がない
Conversationタブに未対応のBotコメントがない
Codex Reviewの指摘がない、または対応方針が明確
Ready to mergeが表示されている
```

`Submit review` は通常押す必要はありません。

---

## 17. merge後の確認

PRをmergeしたら、GitHubのActionsタブを確認します。

確認項目:

```text
最新workflowがSuccessになっている
Pages deployがSuccessになっている
赤いFailedがない
```

`Node.js 20 actions are deprecated` のような警告が出る場合があります。
ただし、StatusがSuccessでbuild / deployが緑なら、公開自体は成功扱いで問題ありません。

---

## 18. 公開サイト確認

Actions / Pages が成功したら、公開サイトを確認します。

```text
https://circle-mouse.com/
```

確認時はブラウザキャッシュを避けるため、強制更新します。

```text
Windows: Ctrl + F5
Mac: Command + Shift + R
```

確認する内容:

- PC表示で崩れていないか
- スマホ表示で崩れていないか
- 修正対象ページが意図通り表示されているか
- リンク先が正しいか
- パスワード画面やJS動作を変更した場合は、遷移が正常か

---

## 19. 作業ブランチ削除

merge後、GitHub画面の `Delete branch` ボタンは使わず、Codespacesのターミナルで削除します。

```bash
git checkout main
git pull origin main
git push origin --delete 作業ブランチ名
git branch -d 作業ブランチ名
git fetch --prune
git branch -a
git status
```

期待される最終状態:

```text
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

## 20. サイト内リンクの方針

同じリポジトリ内のページへリンクする場合は、絶対URLではなく相対パスを使います。

良い例:

```html
<a href="events.html">イベント一覧</a>
<a href="faq.html">Q&A</a>
<a href="developer.html">サイト開発者</a>
<a href="afternoon-tea-login.html">アフヌン同好会</a>
```

避ける例:

```html
<a href="https://circle-mouse.com/events.html">イベント一覧</a>
```

画像、CSS、JavaScriptも相対パスを優先します。

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
<img src="images/example.webp" alt="">
```

外部サイトへのリンクには絶対URLを使用します。
`target="_blank"` を使う場合は、必ず `rel="noopener noreferrer"` を付けます。

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">外部リンク</a>
```

---

## 21. セキュリティ確認観点

通常修正とは別に、必要に応じてセキュリティ診断を行います。
セキュリティ修正は通常修正とは別ブランチ・別PRに分けます。

確認観点:

- `target="_blank"` に `rel="noopener noreferrer"` が付いているか
- `href="#"` や空リンクが不要に残っていないか
- 外部URLが不審なURLになっていないか
- SNSリンクが正しいか
- `innerHTML`、`document.write`、`eval`、`new Function` などの危険な処理がないか
- ユーザー入力をHTMLへ直接挿入していないか
- `.env`、APIキー、トークン、秘密情報が含まれていないか
- GitHub Actionsがある場合、過剰な権限や危険なworkflow設定がないか
- GitHub Pages公開に不要なファイルが含まれていないか
- 画像、QRコード、SNSリンクの参照先が正しいか

セキュリティ修正用ブランチ例:

```text
security/external-link-hardening
```

---

## 22. Codex Review / GitHub Botコメント対応方針

PR作成後にCodex ReviewやGitHub Botのコメントが出た場合は、merge前に必ず確認します。

指摘内容は以下の観点で分類します。

```text
表示崩れにつながる可能性がある
CSSの継承・スコープ・変数参照の問題
JavaScriptの実行時エラーにつながる可能性がある
セキュリティ上の問題
アクセシビリティ上の問題
単なる好み・リファクタリング提案
今回の修正範囲外の提案
```

表示崩れ、CSS継承、JavaScriptエラー、セキュリティ、アクセシビリティに関わる指摘は、P2やMedium程度でも対応を検討します。

merge前に対応する場合は、同じ作業ブランチに追加commitします。
merge後に気づいた場合は、最新mainから新しいブランチを作成して別PRで対応します。

---

## 23. 画像追加時の注意

画像を追加する場合は、必ず現在ブランチを確認してから行います。

```bash
git branch --show-current
git status
```

確認すること:

- `main` に直接追加していないか
- ファイル名がHTML/CSSの参照名と一致しているか
- 不要な重複画像がないか
- 画像サイズが用途に合っているか
- WebPまたは適切な圧縮形式になっているか

企画カード画像は、原則として16:9比率を使います。

推奨サイズ:

```text
800 × 450 px
```

---

## 24. よく使う確認コマンドまとめ

### 現在状態確認

```bash
pwd
git remote -v
git branch --show-current
git status
git branch -vv
git log --oneline --decorate -5
```

### 差分確認

```bash
git diff --name-only
git diff --stat
git diff
git diff --check
```

### mainとの差分確認

```bash
git diff origin/main...HEAD --name-only
git diff origin/main...HEAD --stat
git diff origin/main...HEAD
git diff origin/main...HEAD --check
```

### ローカルプレビュー

```bash
python3 -m http.server 8000
```

停止:

```text
Control + C
```

### 作業終了後の整理

```bash
git checkout main
git pull origin main
git push origin --delete 作業ブランチ名
git branch -d 作業ブランチ名
git fetch --prune
git branch -a
git status
```

---

## 25. 運用上の原則

このリポジトリでは、以下の原則を守ります。

```text
mainに直接commitしない
作業ブランチを使う
PRでFiles changedを確認する
ConversationタブでBotコメントを確認する
Actions / Pages成功後に公開サイトを確認する
不要ブランチはCodespacesのコマンドで削除する
サイト内リンクは相対パスを使う
外部リンクには必要に応じて rel="noopener noreferrer" を付ける
不要なライブラリやフレームワークを追加しない
GitHub Pagesで安全に公開できる静的構成を優先する
```

---

## 26. ライセンス

現時点で、このリポジトリには明示的なライセンスファイルは設定されていません。
第三者が利用・改変・再配布できる条件を明確にする場合は、別途 `LICENSE` ファイルの追加を検討してください。

---

## 27. 注意事項

このサイトは非公式ファンサイトです。
東京ディズニーリゾート、株式会社オリエンタルランド、Disneyその他関連企業の公式サイトではありません。

掲載内容は、サークル活動紹介および情報整理を目的としたものです。
公式情報が必要な場合は、必ず各公式サイトを確認してください。
