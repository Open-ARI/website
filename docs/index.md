<script setup>
import { withBase } from 'vitepress'
</script>

# OpenARI

<img class="openari-logo" :src="withBase('/brand/openari-logo-web.png')" alt="OpenARI mosaic logo: overlapping photo and filmstrip with a checkmark" width="582" height="496" fetchpriority="high">

Independent open-source tools for Apple Reference Image.

OpenARI is building a common verification engine for image upload services,
forensic tools, and language libraries. Applications should be able to verify
supported evidence locally, with explicit trust policy and resource limits.

**Current status:** development scaffold. No Apple ARI revision is supported.
The CLI can report preliminary container hints; it cannot authenticate images.

Start with [compatibility and status](status.md), the [CLI](cli.md), or the
[implementation roadmap](roadmap.md).

OpenARI is maintained by Shaun Murphy. [Support development](https://github.com/sponsors/shoon).
