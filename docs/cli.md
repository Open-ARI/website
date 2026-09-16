# arictl CLI

Build from [open-ari-core](https://github.com/open-ari/open-ari-core). No production
release or package is available yet.

```sh
cargo run -p arictl -- capabilities
cargo run -p arictl -- inspect photo.jpg
cargo run -p arictl -- verify photo.jpg
```

Commands output JSON. `inspect` reports a prefix hint only. `verify` always emits
an indeterminate report and exits 3. Exit 2 covers usage, input, and execution
errors. Exit 0 for inspection or capabilities only means the command completed.
The CLI limits input to 64 MiB and does not upload files.
