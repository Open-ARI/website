# Roadmap

1. Establish the workspace, policies, CI, website, and experimental interfaces.
2. Obtain authoritative profiles and redistributable conformance samples.
3. Implement bounded inspection and exact format dispatch.
4. Implement offline verification with explicit trust and revocation evidence.
5. Stabilize SDKs and publish tested upload integration examples.
6. Add authenticated updates, measured acceleration, and production release review.
7. Consider a local sidecar and separately specified operator-signed receipts.

As of 2026-10-31, step 1 is complete. Step 2 is blocked on Apple publishing a
format profile and samples. Work on steps 3 and 4 has started with structure
listings and a composite signature primitive that do not depend on Apple data.

Dates depend on evidence and review. See the [detailed milestones and acceptance
criteria](https://github.com/open-ari/open-ari-core/blob/main/docs/roadmap.md).

## Independent capture research

[OpenARI Capture](capture.md) has its own
[milestones and issues](https://github.com/open-ari/open-ari-capture/milestones)
covering profile design, a software-asserted Pi experiment, manufacturer hardware,
optional CLI/SDK integration, and release review. It does not generate Apple ARI
attestations and is not a dependency of the Apple verification roadmap.
