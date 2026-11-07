# Google Search Console and Bing setup

The code is ready for ownership verification. No verification token, analytics tag, account, DNS record, or search-engine submission has been created by this implementation. Ownership and indexing status require the business owner's accounts.

## Google Search Console

1. Sign in to [Google Search Console](https://search.google.com/search-console/) with the Google account that should own Kitchen Up's search reporting.
2. Open the property selector, choose **Add property**, choose **Domain**, enter `getkitchenup.com` (without a protocol or path), and continue. A Domain property covers HTTP/HTTPS and subdomains.
3. Choose DNS verification and copy the exact TXT value Google provides. Do not use a made-up verification value.
4. In the Cloudflare account that manages the domain's authoritative DNS, select **getkitchenup.com > DNS > Records > Add record**. Choose **TXT**, use **@** for the root name, paste Google's exact value into **Content**, and leave TTL at **Auto**. Save. Do not replace an existing TXT record or change A, AAAA, CNAME, nameserver, proxy, or redirect settings. If Cloudflare is not the authoritative DNS provider, add the record at the actual provider instead.
5. Return to Search Console and click **Verify**. If Google cannot see the TXT record yet, confirm the root name and exact value and retry after DNS propagation. Keep the record after verification.
6. Select the verified Domain property. In **Sitemaps**, submit `https://getkitchenup.com/sitemap.xml`. It should contain only `https://getkitchenup.com/` and `https://getkitchenup.com/privacy-policy/`. Review the processing result and discovered URLs.
7. In the top **URL Inspection** field, enter `https://getkitchenup.com/`. Read the indexed-page report, then choose **Test live URL**. Check crawl access, HTTP success, rendered content, and the declared canonical. If the live test is eligible and the page is new or updated, use **Request indexing** once.
8. Repeat URL Inspection and the live test for `https://getkitchenup.com/privacy-policy/`. Confirm that the rendered policy appears, the canonical matches that URL, and no noindex directive is reported. Request indexing where appropriate.
9. To check current indexing, use the indexed-version result in URL Inspection and the **Page indexing** report. Compare Google's selected canonical with the user-declared canonical. A `site:getkitchenup.com` search can be a supplementary spot check; it is not a complete indexing report.
10. Monitor **Sitemaps**, **Page indexing**, **Core Web Vitals**, **HTTPS**, **Security issues**, and **Manual actions** as data becomes available. Use live tests to diagnose failures; after a real fix, use the relevant validation option. Avoid repeatedly submitting unchanged URLs. Review **Performance > Search results** for impressions and clicks when available.

Google decides whether and when to crawl, index, and rank a URL. Successful verification, a valid sitemap, or a successful live test does not guarantee inclusion or a ranking position. Crawl/index reports may take time to update.

## Bing Webmaster Tools

1. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters/) with the account that should own Kitchen Up's reporting.
2. Prefer **Import from Google Search Console** after Google verification. Select the verified Kitchen Up property, review the permissions requested by Bing, and authorize the import yourself. Check that the intended site and sitemap imported.
3. Alternatively, add `https://getkitchenup.com/` manually and follow Bing's offered ownership method. If using DNS, copy Bing's exact record type, name, and target/value into the domain's DNS provider; do not guess them or replace existing site records. If using an XML verification file, put the exact downloaded file in this repository's `public/` directory and deploy it before verifying. A token must come from the real account.
4. In **Sitemaps**, confirm or submit `https://getkitchenup.com/sitemap.xml`. Check that Bing can fetch it and discovers the two actual canonical URLs.
5. Use **URL Inspection** for the homepage and Privacy Policy. Review the index, crawl/live-test, SEO, and markup results offered by the account. Request indexing/URL submission where available and appropriate.
6. Monitor sitemap status, indexing/crawl errors, and search performance. Resolve reported technical problems before resubmitting. Bing also decides whether and when a page is indexed.

## Canonical domain and hosting

The canonical domain is `https://getkitchenup.com`. At the initial Phase 3 audit, HTTP, `https://www.getkitchenup.com/`, and the old GitHub Pages repository URL already redirected to the HTTPS non-www homepage. No DNS or Cloudflare settings were changed.

If those redirects stop working, first inspect the actual response and GitHub **Settings > Pages** custom domain and **Enforce HTTPS** settings. Keep `public/CNAME` set to `getkitchenup.com`. Any DNS or Cloudflare redirect repair must use the account's actual current configuration; it is not implemented by adding a client-side JavaScript redirect.

## Official instructions

- [Google property types](https://support.google.com/webmasters/answer/34592)
- [Google ownership verification](https://support.google.com/webmasters/answer/9008080)
- [Google URL Inspection](https://support.google.com/webmasters/answer/9012289)
- [Google recrawl requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Cloudflare DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Bing site verification](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b)
- [Bing URL Inspection](https://www.bing.com/webmasters/help/url-inspection-55a30305)
