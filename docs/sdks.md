# Language SDKs

Rust can use the core scaffold directly. An experimental C ABI is present.
Python, Go, .NET, and Java bindings are planned; no packages are published.

All bindings will share the native engine, format profiles, policy, and test
corpus. Packages will declare their compatible ABI and report schemas. A missing
native library or unsupported schema must produce an explicit error.

See the [binding plan](https://github.com/open-ari/open-ari-core/blob/main/bindings/README.md).

## Independent camera capture

[OpenARI Capture](capture.md) is a separate SDK research repository for creating
and verifying independent capture evidence. Its initial scaffold has no signing
or verification implementation. Future capture bindings will be optional and
will use distinct profiles and trust policy from Apple ARI.
