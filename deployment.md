# Deployment

The intended custom domain is openari.org. DNS ownership and GitHub Pages domain
verification must be completed in the organization and registrar settings.

1. Verify openari.org for the open-ari organization using GitHub's TXT challenge.
2. Enable Pages with GitHub Actions as the source in this repository.
3. Configure openari.org as the Pages custom domain. Follow GitHub's current
   apex A/AAAA or ALIAS guidance at the DNS provider. Point www to the Pages host
   only if a www redirect is wanted; avoid wildcard DNS.
4. Wait for DNS validation and certificate issuance, then enforce HTTPS.
5. Dispatch the Pages workflow with custom_domain=true. It builds with base `/`.
   For the fallback repository URL, leave custom_domain=false for `/website/`.

Domain ownership does not grant this repository access to the registrar. Do not
claim the site is live until the domain returns the intended HTTPS content.

See https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
for current configuration instructions. The site accepts no uploads and has no analytics.
