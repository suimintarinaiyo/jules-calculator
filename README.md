# jules-calculator

Julesで電卓を作ってみるためのリポジトリーです。Node.jsとReactを使用しています。

## 実行環境の構築手順

このアプリケーションを実行するには、以下の手順に従ってください。

### 1. リポジトリのクローン

まず、このリポジトリをローカルマシンにクローンします。

```bash
git clone https://github.com/suimintarinaiyo/jules-calculator.git
cd jules-calculator
```

### 2. サーバーのセットアップ

バックエンドサーバーの依存関係をインストールします。

```bash
cd server
npm install
```

### 3. クライアントのセットアップ

クライアント（Reactアプリケーション）の依存関係をインストールします。

```bash
cd ../client
npm install
```

### 4. クライアントのビルド

本番用の静的ファイルを生成するために、Reactアプリケーションをビルドします。

```bash
npm run build
```

これにより、`client`ディレクトリ内に`build`ディレクトリが作成されます。

### 5. アプリケーションの実行

プロジェクトのルートディレクトリに戻り、Node.jsサーバーを起動します。

```bash
cd ..
node server/index.js
```

サーバーが起動すると、コンソールに `Server is listening on port 3001` と表示されます。

### 6. ブラウザで確認

ウェブブラウザを開き、以下のURLにアクセスしてください。

[http://localhost:3001](http://localhost:3001)

電卓アプリケーションが表示されれば、セットアップは完了です。
