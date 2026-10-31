# Compatibility and status

Last reviewed: 2026-10-31.

| Capability | Available |
| --- | --- |
| Preliminary JPEG/TIFF prefix hints | Yes; not structural validation |
| JPEG, TIFF/DNG, and ISOBMFF/HEIC structure listing | Yes; bounded and fuzzed. Not ARI detection |
| Composite ML-DSA-87 + RSA-3072-PSS signature check | Yes, as a library primitive tested against IETF vectors. Not connected to verification |
| RFC 3161 timestamp token check (ECDSA P-256) | Yes, against a caller-supplied certificate. No path validation. Not connected to verification |
| Versioned JSON reports | Experimental: verification schema 1, structure schema 1 |
| C interface | Experimental ABI 1 |
| Apple ARI revision detection | No |
| Apple reference image verification | No |
| Trust and revocation validation | No |
| Published language packages | No |
| Hardware acceleration | Planned; no benchmark claims |

The engine reports `indeterminate` for every verification request. Missing
specifications or evidence must not become a successful authenticity verdict.

## What is blocking verification

Apple has [described the design](https://security.apple.com/blog/apple-reference-image/)
and documented how users capture, develop, and share reference images. It has
not published:

- the file format: where the signature sits and which bytes it covers;
- the signing certificates or trust anchors;
- the revocation list format or a way to obtain it;
- sample files that may be redistributed for testing.

Apple's third-party API on iOS, iPadOS, and macOS 27 detects reference image
data and shows Apple's viewer. It does not return a verification result.
A third-party site reports that Apple plans to publish cross-platform
verification documentation next year; OpenARI has not found an Apple source
for that.

## What is known

- The final signature is a composite of ML-DSA-87 and RSA-3072 RSASSA-PSS.
  Apple's Private Cloud Compute source release of 2026-10-23 names it
  `MLDSA87_RSA3072_PSS_SHA512_DR13`. OpenARI reads this as IETF composite
  signature draft revision 13, which gives a 5011-byte signature. Apple has
  not confirmed this reading.
- Capture time bounds are RFC 3161 timestamp tokens signed with ECDSA P-256.
- The photo GUID used for revocation is derived from the hash of the developed
  JPEG, so a published revocation list could be checked offline.

The [format evidence register](https://github.com/open-ari/open-ari-core/blob/main/docs/format-status.md)
lists every source with its date and confidence.
