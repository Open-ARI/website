# Version support

Apple format revisions, OpenARI package releases, C ABI, report schemas, policies,
trust-data generations, and cryptographic profiles have separate versions. The
structure report (schema 1) is versioned separately from the verification
report (schema 1). The composite signature primitive follows IETF draft
revision 13; a later draft or RFC would be a new profile. The project does not assign
Apple version numbers before the format defines them.

Future confirmed revisions can coexist in the engine. Detection selects an exact
profile. Unknown versions and critical extensions cannot fall back to an older
verifier. A supported profile may be disabled by policy after a security finding.

Consumers must check report-schema support and treat unknown decisions as
unsupported. Cached results include the policy and trust-data context and must
expire when that evidence becomes stale.

See the [versioning contract](https://github.com/open-ari/open-ari-core/blob/main/docs/versioning.md).
