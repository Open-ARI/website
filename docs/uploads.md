# Image uploads

OpenARI cannot authenticate uploads yet. The intended integration is a reusable
local verifier with explicit limits and trust snapshots.

Bound the request before buffering it. Verify immutable bytes in a bounded worker
queue, then bind the report to the stored object's digest. Accept only an explicit
verified decision under the intended policy. Reject or quarantine indeterminate
results. Keep malware scanning and safe image decoding as separate checks.

The core will not make network requests or send photographs to OpenARI. A future
updater will refresh trust data outside the upload request path.

Read the [upload integration plan](https://github.com/open-ari/open-ari-core/blob/main/docs/upload-integration.md).
