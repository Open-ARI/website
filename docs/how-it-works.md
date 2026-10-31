# How it works

Apple describes a capture and development process that produces signed reference
images. OpenARI's planned role is to inspect and verify the resulting evidence.
It cannot issue Apple capture attestations or reproduce Apple's private services.

## Apple's process

1. **Capture.** In Reference mode the camera sensor signs the pixels with a
   per-sensor ECDSA P-256 key certified at the factory. The Secure Enclave signs
   lens and exposure metadata. RFC 3161 timestamps give a lower and upper bound
   on capture time. Everything is stored as a DNG "secure digital negative".
2. **Development.** The phone uploads the negative to Private Cloud Compute,
   which checks the certificate chains, renders and compresses a JPEG, and
   hashes it. Apple's signing service signs that hash with a composite
   ML-DSA-87 and RSA-3072 signature, which is embedded in the JPEG.
3. **Viewing.** Apple devices verify the signature and check the photo's GUID
   against a revocation list stored on the device.

The developed reference image carries Apple's signature, not a device or
photographer credential. An undeveloped negative carries device-specific
certificates and may include the serial number.

## OpenARI's role

The planned verifier selects a confirmed format profile, extracts the exact
signed bytes, validates the complete cryptographic evidence, and evaluates trust
and revocation under an explicit policy. It records which evidence and policy
produced the result. Unsupported versions remain unsupported.

A valid reference image does not authenticate an edited preview or establish
that a photographed scene is truthful. Applications must identify what was verified.

Read [Apple's announcement](https://security.apple.com/blog/apple-reference-image)
and the [OpenARI architecture](https://github.com/open-ari/open-ari-core/blob/main/docs/architecture.md).
