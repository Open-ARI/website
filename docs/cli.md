# openari CLI

Build from [open-ari-core](https://github.com/open-ari/open-ari-core). No production
release or package is available yet.

The executable is named `openari`; its Rust package is `openari-cli`.

```sh
cargo run -p openari-cli -- capabilities
cargo run -p openari-cli -- inspect photo.jpg
cargo run -p openari-cli -- structure photo.jpg
cargo run -p openari-cli -- verify photo.jpg
```

Commands output JSON. `inspect` reports a prefix hint only. `structure` lists
JPEG segments, TIFF/DNG directories, or ISOBMFF/HEIC boxes and items with byte
offsets, lengths, and SHA-256 digests, plus findings such as truncation or
trailing data. It helps locate unknown payloads; it does not identify ARI data.
Its output can include camera make, model, and other metadata, so treat it as
sensitive. `verify` always emits an indeterminate report and exits 3. Exit 2 covers usage, input, and execution
errors. Exit 0 for inspection or capabilities only means the command completed.
The CLI limits input to 64 MiB and does not upload files.
