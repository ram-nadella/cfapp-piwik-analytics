# Miniature Hipster:
## A Piwik App for CloudFlare -- cfapp_piwik_analytics

  * [Piwik Analytics](https://www.cloudflare.com/apps/piwik_analytics) CloudFlare App.

**Miniature Hipster** is the 'random' new project name provided by [Github](https://github.com/new). I enjoy it, although may change it. But it's kind of interesting.

  * HTTPS Repository URL  [Piwik Analytics App for Cloudflare](https://github.com/px/cfapp-piwik-analytics.git/)

This CloudFlare App aims to improve upon the available Analytics &amp; Tracking options available to users. It is written primarily in [CoffeeScript](http://coffeescript.org/), and compiled into Javascript.

### Initially this App aims to
  * Utililse " use stict;" when possible
  * Be asynchronous in loading
  * Work with your own Piwik Analytics installation, or maybe a hosted solution,
  * Support a single Piwik Site ID
  * Support a single Piwik tracker/receiver
  * Utilise [cdnjs](http://cdnjs.com/#piwik) for serving piwik.js quickly if enabled, or the parameters are left unsupplied by the user.


### TODO
* Support:
  * provide &lt;noscript&gt; tag for recording visitors without Javascript using a 1x1 gif pixel
  * [cookie configuration for domains and sub-domains](http://piwik.org/docs/javascript-tracking/#toc-cookie-configuration-for-domains-and-subdomains)
  * goals, tracking, 5 per site id, maybe more.
  * eventually support [all methods available in the Tracking API](http://piwik.org/docs/javascript-tracking/#toc-list-of-all-methods-available-in-the-tracking-api)
* Validation:
  * automatically validate, check, and minify .js files
  * automatically validate and check cloudflare.json &amp; other json files with jsonlint
* Describe the [test app](./test) better, and it's individual files.


Contributing
------------

1. Fork it on Github.
2. Clone to your local machine. SSH: (`git clone "git@github.com:px/cfapp-piwik-analytics.git"`) HTTPS: (`git clone "https://github.com/px/cfapp-piwik-analytics.git"`)
3. Checkout and create a new branch (`git checkout -b my_new_feature`)
4. Commit your changes, preferably one commit per file. (`git commit -am "Added my new feature"`)
5. Push to the branch (`git push origin my_new_feature`)
6. Open a Pull Request
7. Enjoy a refreshing glass of water and wait



### Piwik Documentation
 * [Online Videos about Piwik](https://piwik.org/blog/category/videos/)
 * [Piwik Javascript Tracking](http://piwik.org/docs/javascript-tracking/)

CloudFlare's Apps platform enables developers to create and publish web applications for use by website owners on CloudFlare's network. See the [full list](https://www.cloudflare.com/apps).



### Other stuff

* [jsonlint](https://github.com/zaach/jsonlint)
    npm install jsonlint -g


#### My tracking pixels
![Tracking Pixel](https://piwik-ssl.ns1.net/piwik.php?idSite=26&rec=1)
![Tracking Pixel](https://piwik-ssl.ns1.net/piwik.php?idSite=27&rec=1)
