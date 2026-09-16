# Compatibility and status

Last reviewed: 2026-09-16.

| Capability | Available |
| --- | --- |
| Preliminary JPEG/TIFF prefix hints | Yes; not structural validation |
| Versioned JSON reports | Experimental schema 1 |
| C interface | Experimental ABI 1 |
| Apple ARI revision detection | No |
| Cryptographic verification | No |
| Trust and revocation validation | No |
| Published language packages | No |
| Hardware acceleration | Planned; no benchmark claims |

The engine reports `indeterminate` for every verification request. Missing
specifications or evidence must not become a successful authenticity verdict.
See the [format evidence register](https://github.com/open-ari/open-ari-core/blob/main/docs/format-status.md).
