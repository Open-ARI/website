# Capture SDK research

[OpenARI Capture](https://github.com/open-ari/open-ari-capture) is a separate
research repository for capture signing on independent cameras and embedded
devices. The plan starts with a Raspberry Pi experiment and defines an
integration path for camera manufacturers.

**Current status: architecture-only scaffold.** No capture, signing, verification,
hardware attestation, or C2PA implementation is available. No SDK packages are
published. The project cannot issue Apple ARI attestations.

## Planned boundaries

The capture SDK will build evidence and use optional signing backends. A separate
capture verifier will evaluate that evidence offline with explicit trust policy,
without requiring camera drivers or private keys. Future CLI integration will
use optional commands in the existing openari application.

Independent capture profiles, version identifiers, and private/manufacturer trust
roots remain separate from Apple ARI. A self-signed credential only becomes
trusted through explicit enrollment; it is not trusted because an image includes it.

## What a signature establishes

A signature binds a key to bytes and assertions. Software can substitute pixels
before signing. A secure element can protect a key while still signing bytes
chosen by compromised host software. Sensor-origin claims therefore require
evidence about the protected capture path, not just a valid signature.

The first proposed Pi example will be labeled software-asserted capture. Stronger
manufacturer profiles require reviewed hardware and firmware assumptions,
provisioning, revocation, and adversarial tests. Sensor origin alone cannot prove
the truth of a scene or rule out photographing a screen.

## Follow the work

- [Architecture and integration](https://github.com/open-ari/open-ari-capture/blob/main/docs/architecture.md)
- [Trust and privacy](https://github.com/open-ari/open-ari-capture/blob/main/docs/trust-model.md)
- [Profile and API versioning](https://github.com/open-ari/open-ari-capture/blob/main/docs/versioning.md)
- [Raspberry Pi experiment](https://github.com/open-ari/open-ari-capture/blob/main/examples/raspberry-pi/README.md)
- [Manufacturer integration](https://github.com/open-ari/open-ari-capture/blob/main/docs/manufacturer-integration.md)
- [Implementation issues](https://github.com/open-ari/open-ari-capture/issues)
- [Milestones](https://github.com/open-ari/open-ari-capture/milestones)
