# How it works

Apple describes a capture and development process that produces signed reference
images. OpenARI's planned role is to inspect and verify the resulting evidence.
It cannot issue Apple capture attestations or reproduce Apple's private services.

The planned verifier selects a confirmed format profile, extracts the exact
signed bytes, validates the complete cryptographic evidence, and evaluates trust
and revocation under an explicit policy. It records which evidence and policy
produced the result. Unsupported versions remain unsupported.

A valid reference image does not authenticate an edited preview or establish
that a photographed scene is truthful. Applications must identify what was verified.

Read [Apple's announcement](https://security.apple.com/blog/apple-reference-image)
and the [OpenARI architecture](https://github.com/open-ari/open-ari-core/blob/main/docs/architecture.md).
