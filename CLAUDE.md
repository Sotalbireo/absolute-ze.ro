# Claude Local Rules

## Command Execution

このプロジェクトは DevContainer として Docker コンテナ内で動作している。
コマンドは常に起動中の DevContainer 内で実行すること。ホスト環境（Windows）で直接実行してはならない。

### 原則

- `node`・`yarn`・`nuxt` 等のランタイムはコンテナ内にのみ存在する前提とする
- ホストの PowerShell / Bash でランタイム系コマンドを直接叩いてはならない
- ファイルの読み書き（Read / Write / Edit / Glob / Grep）はホスト側ツールをそのまま使ってよい

### CLI の選択（docker / podman）

Podman の npipe が存在する場合は `podman` を使う。存在しない場合は `docker` にフォールバックする:

```powershell
$cli = if (Test-Path "//./pipe/podman-machine-default") { "podman" } else { "docker" }
```

### コンテナの特定とコマンド実行

起動中のコンテナ ID を取得する:

```powershell
$cli = if (Test-Path "//./pipe/podman-machine-default") { "podman" } else { "docker" }
$cid = & $cli ps --filter "label=devcontainer.local_folder=$PWD" --format "{{.ID}}"
```

コマンドをコンテナ内で実行する（例）:

```powershell
$cli = if (Test-Path "//./pipe/podman-machine-default") { "podman" } else { "docker" }
$cid = & $cli ps --filter "label=devcontainer.local_folder=$PWD" --format "{{.ID}}"
& $cli exec $cid yarn generate
```

コンテナが見つからない場合はユーザーに DevContainer の起動を促すこと。
