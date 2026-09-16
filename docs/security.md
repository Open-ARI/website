# Cryptography and security

Cryptographic verification is not implemented. Provider selection depends on the
confirmed Apple profile, conformance evidence, security review, and platform tests.
No external audit has occurred.

Security work includes bounded parsing, exact signed-byte interpretation,
composite verification, explicit trust anchors, revocation freshness, downgrade
resistance, fuzzing, and release integrity. CPU acceleration must preserve the
same results as a portable implementation. GPU offload requires evidence of a
useful workload and a separate security review.

- [Threat model](https://github.com/open-ari/open-ari-core/blob/main/docs/threat-model.md)
- [Verification policy](https://github.com/open-ari/open-ari-core/blob/main/docs/verification-policy.md)
- [Performance plan](https://github.com/open-ari/open-ari-core/blob/main/docs/performance.md)
- [Report a vulnerability privately](https://github.com/open-ari/open-ari-core/security/advisories/new)
