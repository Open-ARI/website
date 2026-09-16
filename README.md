# OpenARI.org

<p><a href="https://openari.org"><img src="docs/public/brand/openari-avatar.png" alt="OpenARI mosaic logo" width="192" height="192"></a></p>

Documentation for the OpenARI project. Built with VitePress. The site describes
current limits as well as planned work.

The approved logo and editable CorelDRAW source live in `docs/public/brand/`.
See [logo and artwork](https://openari.org/brand) for downloads and licensing.

The build pins VitePress 2.0.0-alpha.20 because the current VitePress 1.x dependency
tree has unresolved advisories. This is a prerelease build tool; the lockfile,
dependency audit, and production build are checked in CI. Reassess the pin when
a suitable stable release is available.

```sh
npm ci
npm run docs:dev
npm run docs:build
```

CI builds on pushes and pull requests. The Pages workflow is manually dispatched.
Until the custom domain is configured, it can build for the repository Pages URL
with base `/website/`. Set the Pages custom domain and verify DNS before selecting
the custom-domain deployment input. See [deployment.md](deployment.md).

The architecture source of truth lives in
[open-ari-core/docs](https://github.com/open-ari/open-ari-core/tree/main/docs).
[Sponsor Shaun Murphy](https://github.com/sponsors/shoon).
