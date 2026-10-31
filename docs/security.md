# Cryptography and security

Apple reference image verification is not implemented. The `openari-crypto`
crate verifies composite ML-DSA-87 + RSA-3072-PSS-SHA512 signatures as defined
in IETF draft-ietf-lamps-pq-composite-sigs-13 and passes the IETF test vector.
It uses the RustCrypto `ml-dsa` and `rsa` crates and performs public-key
operations only. It is not connected to verification, because the bytes Apple
signs and its trust anchors are unpublished. The same crate verifies RFC 3161
timestamp tokens signed with ECDSA P-256 against a certificate the caller
supplies, which matches how Apple describes its capture-time evidence.
Certificate path validation is not implemented. No external audit has occurred.

Security work includes bounded parsing, exact signed-byte interpretation,
composite verification, explicit trust anchors, revocation freshness, downgrade
resistance, fuzzing, and release integrity. CPU acceleration must preserve the
same results as a portable implementation. GPU offload requires evidence of a
useful workload and a separate security review.

- [Threat model](https://github.com/open-ari/open-ari-core/blob/main/docs/threat-model.md)
- [Verification policy](https://github.com/open-ari/open-ari-core/blob/main/docs/verification-policy.md)
- [Performance plan](https://github.com/open-ari/open-ari-core/blob/main/docs/performance.md)
- [Dependency review](https://github.com/open-ari/open-ari-core/blob/main/docs/dependencies.md)
- [Report a vulnerability privately](https://github.com/open-ari/open-ari-core/security/advisories/new)
