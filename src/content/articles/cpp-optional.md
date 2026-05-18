---
title: std::optional<T> を Rust・Scala と比較する
date: 2026-05-18
description: C++17で新たに追加されたstd::optional<T>をRust・ScalaのOptionと比較して解説します
tags: ["cpp", "optional", "Rust"]
draft: false
lang: ja
---

# std::optional\<T\> を Rust・Scala と比較する

## はじめに

C++17 から `std::optional` というクラステンプレートが追加されました。
`std::optional<T>` は、「`T` 型の値があるかもしれないし、ないかもしれない」ことを表す型です。

今回はこの `std::optional` を、Rust・Scala の `Option` 型と比較しながら、どのように安全でわかりやすいコードを書くかについて説明します。

---

## 既存のコードとの比較

`std::optional` の利点は大きく 2 つに分けられます。

1. オブジェクトの初期化タイミングを遅延させられる
2. 番兵値（`-1`、`nullptr` など）に頼らず、値の不在を型で表せる

それぞれ、`std::optional` を使わない場合と使う場合を見ていきましょう。

---

### オブジェクトの初期化タイミングの遅延
`Config` クラスを条件付きで初期化して利用する次のような関数について考えてみます。

```cpp
class Config {
public:
    bool debug = false;

    Config(const std::string& path) {
        std::cout << "Config loaded from: " << path << std::endl;
    }

    void print() const {
        std::cout << "Config::print()" << std::endl;
    }
};

// std::unique_ptr で済ませるパターン
void use_config_with_ptr(bool should_load) {
    std::unique_ptr<Config> config;

    if (should_load) {
        config = std::make_unique<Config>("config.json");
    }

    if (config) {
        config->print();
    }
}

// std::optional を使ったパターン
void use_config_with_optional(bool should_load) {
    std::optional<Config> config;

    if (should_load) {
        config.emplace("config.json");
    }

    if (config) {
        config->print();
    }
}
```

`std::optional` には `emplace()` 関数があり、内部の型 `T` のコンストラクタを呼び出して有効値を保持するようにする関数です。

`std::optional` を使う利点は 3 つあります。

1. **ヒープ確保が不要**
    - `std::unique_ptr` ではヒープに実体が確保される
    - ヒープ確保はコストが高く、実行時間も読みにくい
2. **意図が明確である**
    - `std::unique_ptr` では値がないことを `nullptr` で代用する
    - `std::optional` では `std::nullopt` で値の不在を明示できる
3. **コピーできる**
    - `std::unique_ptr` は所有権の都合でコピーできないが、`std::optional` はコピー可能

`std::optional<T>` は `nullopt` の状態でも `T` を格納する領域を内部に持っており、`emplace()` を呼ぶ前後でサイズが変わりません。このためスタック領域やグローバル変数領域にも置けます。ヒープ確保が不要なことは、ヒープが存在しない・断片化しやすい低レイヤのコードでは特に重要な利点です。

---

### 番兵値に頼らない書き方

```cpp
// optional 型を使わない場合
int find_user_age(const std::string& name) {
    if (name == "Alice") return 20;
    if (name == "Bob")   return 25;

    // 見つからなかったことを -1 で表す（番兵値）
    return -1;
}

// optional 型を使う場合
[[nodiscard]]
std::optional<int> find_user_age(const std::string& name) {
    if (name == "Alice") return 20;
    if (name == "Bob")   return 25;

    // 値が存在しないことを型で表す
    return std::nullopt;
}
```

番兵値 `-1` の場合、この関数がエラーを返しうるかどうかは一見わかりません。ドキュメントを読まなければエラーハンドリングの必要性に気づけず、処理を書き忘れるリスクが高いです。

`std::optional` を使えば、返り値の型を見るだけで「失敗しうる関数だ」とわかります。`[[nodiscard]]` 属性も合わせて付けると、返り値を無視するとコンパイラが警告を出してくれるので、エラーの握りつぶしをさらに防げます。

> **注意**: `std::optional` はエラーの理由を返すことはできません。失敗理由も伝えたい場合は、C++23 で追加された `std::expected<T, E>` の使用を強く推奨します。

---

## Rust・Scala との比較

Rust・Scala にも似たような `Option` 型がありますが、`std::optional` とはいくつかの重要な違いがあります。

| 観点 | C++ `std::optional<T>` | Rust `Option<T>` | Scala `Option[A]` |
| --- | --- | --- | --- |
| 導入 | C++17 | Rust 標準 | Scala 標準 |
| 値あり | `std::optional<T>{value}` | `Some(value)` | `Some(value)` |
| 値なし | `std::nullopt` | `None` | `None` |
| 型の性質 | 値を直接保持するクラス | `enum` | `sealed abstract class` |
| アクセス失敗 | nulloptへの `*opt`、`opt->` は**UB** | `unwrap()` は panic | `get` は例外 |
| 網羅性チェック | ほぼなし | `match` 非網羅はコンパイルエラー | 非網羅 `match` は warning |
| モナド的操作 | C++23 から可能 | 可能 | 可能 |

---

### アクセス失敗時の挙動

> **ここが最も注意すべき差異です。** Rust では `unwrap()` を書かない限りコンパイラが値の取り出しを強制しますが、**C++ では `*opt` や `opt->` を何の検査もなしに書けてしまいます**。安全性の担保はコンパイラではなくプログラマの責任です。

Rust では値を取り出すには明示的に `unwrap()` や `match` を使う必要があります。一方 C++ の `std::optional` では、`*opt` や `opt->` で内部の値に直接アクセスできてしまい、`nullopt` のときに呼び出すと**未定義動作(UB)**を引き起こします。

安全にアクセスするには次のいずれかを使ってください。

```cpp
std::optional<Config> config = load_config("config.json");

// 方法1: has_value() で検査してからアクセス
if (config.has_value()) {
    config->print();  // ここは安全
}

// 方法2: value() を使う（nullopt なら std::bad_optional_access 例外が飛ぶ）
try {
    config.value().print();
} catch (const std::bad_optional_access& e) {
    std::cerr << "値がありません: " << e.what() << std::endl;
}

// 方法3: value_or() でデフォルト値を使う
// （Config がデフォルト構築可能な場合）
// config.value_or(Config{"default.json"}).print();
```

---

### モナド的操作

C++23 より、`std::optional` にモナド的操作が追加されました。

| やりたいこと | C++ `std::optional<T>` | Rust `Option<T>` | 説明 |
| --- | --- | --- | --- |
| 値があるときだけ変換する | `transform` | `map` | 中身の値に関数を適用する |
| 値があるときだけ次の optional に進む | `and_then` | `and_then` | 関数の返り値も optional 系の型になる |
| 値がないときの代替処理を書く | `or_else` | `or_else` | 値がない場合だけ別の処理を実行する |
| 値がないときのデフォルト値を使う | `value_or` | `unwrap_or` | optional から通常の値を取り出す |

これにより、チェーンを使ったすっきりした書き方ができます。

```cpp
std::optional<Config> load_config(const std::string& path);
std::optional<Config> validate_config(const Config& config);
Config enable_debug(const Config& config);

// モナド的操作を使わない場合
std::optional<Config> setup_config() {
    auto config = load_config("config.json");
    if (!config) return std::nullopt;

    auto validated = validate_config(*config);
    if (!validated) return std::nullopt;

    return enable_debug(*validated);
}

// モナド的操作を使う場合（C++23）
std::optional<Config> setup_config_with_monad() {
    return load_config("config.json")
        .and_then(validate_config)
        .transform(enable_debug);
}
```

---

## まとめ

`std::optional` は「値がないかもしれない」を型で表す C++17 の機能です。

- 番兵値（`-1`、`nullptr`）による暗黙のエラー表現を型レベルで置き換えられる
- スタック上に収まるためヒープ確保が不要で、遅延初期化にも使える
- Rust・Scala の `Option` と発想は同じだが、**nullopt 時の未定義動作**に注意が必要
- C++23 からはモナド的操作（`transform`、`and_then`、`or_else`）も使えるようになった

Rust の `Option<T>` に慣れた方は、`std::optional` も同じ直感で使えますが、コンパイラによる安全網が薄い分だけ `has_value()` や `value()` を意識的に使う習慣をつけることが重要です。

---

## 参考文献

- [cpprefjp - std::optional](https://cpprefjp.github.io/reference/optional/optional.html)
- [cpprefjp - std::optional](https://cpprefjp.github.io/reference/optional/optional.html)
- [cpprefjp - std::expected](https://cpprefjp.github.io/reference/expected/expected.html)