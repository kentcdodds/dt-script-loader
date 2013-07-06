Double Take Script Loader
==
This is a simple way to load a local copy of a library as a fallback to an external CDN.

But CDNs are awesome!?
--
Yes they are. There are actually [some people](http://www.sitepoint.com/7-reasons-not-to-use-a-cdn/ "7 Reasons not to use a CDN") who believe you should not use CDNs. If you do decide to use a CDN, you should know that they *can* fail (unlikely) or be [blocked](http://www.theinquirer.net/inquirer/news/2135522/opendns-blocked-googles-content-delivery-network "Google CDN Gets Blocked by OpenDNS") for certain countries (rare, but possible). If a CDN fails and your site depends on that libary, then your site could really suffer and your [bounce rate](http://lmgtfy.com/?q=bounce+rate "What is a bounce rate?") will go [to infinity and beyond](http://youtu.be/ejwrxGs_Y_I?t=5s "Buzz Lightyear Clip")!

How do I use this?
--
There are two ways to use this:

**1. Call DoubleTakeScriptLoader:** Call directly with an array of objects (or a single object) like so:

    DoubleTakeScriptLoader([
      {
        propName: '$', //Name of global object which would be loaded if the library loaded correctly
        localSource: 'js/jquery-1.10.2.min.js', //Location of local copy. What src would be if you're not using a CDN
        originalId: 'jQueryScript' //Optional: An id you give to the original script tag. Used to remove the old script tag.
      },
      { ... }
    ]);


**2. Add data attributes:** Add `data-prop-name` and `data-local-src` to script tags you wish to do a double take on. Like so:

    `<script src="http://cdn.example.com/underscore/1.4.4/underscore-min.js" data-prop-name="_" data-local-src="underscore-min.js"></script>`

With either method, you must add a script tag for the `dt-script-loader.js` file after the library script tags, but before you use the libraries. For an example of this, see `example.html`.

**Note:** `dt-script-loader.js` immediate calls `DoubleTakeScriptLoader()` with no arguments which will search the DOM for `script` tags which have the necessary `data` attributes. If this is a problem, just use method 2 (calling it directly). Or heck, it's not some sort of big library or anything, just remove the invocation yourself.

- - -

Disclaimer
--
I developed this quickly one Saturday afternoon. I imagine there could be some improvement to performance or something here. Feel free to leave comments to that effect :)