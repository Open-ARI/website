<p align="center">
  <a href="https://openari.org"><img src="docs/public/brand/openari-avatar.png" alt="OpenARI mosaic logo" width="128" height="128"></a>
</p>

<h1 align="center">OpenARI.org</h1>

<p align="center">
  Documentation for the OpenARI project.
</p>

<p align="center">
  <a href="https://github.com/open-ari/website/actions/workflows/ci.yml"><img src="https://github.com/open-ari/website/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI status"></a>
  <a href="https://github.com/open-ari/website/actions/workflows/pages.yml"><img src="https://github.com/open-ari/website/actions/workflows/pages.yml/badge.svg?branch=main" alt="GitHub Pages deployment status"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/open-ari/website" alt="Apache 2.0 license"></a>
  <a href="https://openari.org"><img src="https://img.shields.io/badge/docs-openari.org-007D79" alt="OpenARI documentation"></a>
  <a href="https://github.com/sponsors/shoon"><img src="https://img.shields.io/badge/Sponsor-shoon-EA4AAA?logo=githubsponsors&amp;logoColor=white" alt="Sponsor shoon on GitHub"></a>
</p>

The site is built with VitePress and describes current limits as well as planned work.

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
