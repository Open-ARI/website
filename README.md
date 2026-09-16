# OpenARI.org

Documentation for the OpenARI project. Built with VitePress. No custom icons or
images are included. The site describes current limits as well as planned work.

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
