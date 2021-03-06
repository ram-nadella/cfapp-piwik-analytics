var pkC = {
  "piwik_version" : "1.10.1",
  "use_cdnjs" : true,
  "piwik_js_default" : "https://cdnjs.cloudflare.com/ajax/libs/piwik/1.10.1/piwik.js",
  "cdnjs" : "//cdnjs.cloudflare.com/ajax/libs",
  // "our piwik host"
  "js_prot" : "https:",
  "js_schem" : "//",
  "js_host" : "piwik-ssl.ns1.net",
  "js_path" : "/",
  "js_file" : "piwik.js",
  "js_url" : "",
//  "js_url" : js_host+js_path+js_file,
  // Site id's
  "site_id" : {
    "a" : "26",
    "b" : "27" //,
//    "c" : "7"
  },
  // Trackers
  "tracker" : {
    "a" : "https://piwik-ssl.ns1.net/piwik.php",
    "b" : "https://piwik-ssl.ns1.net/piwik.php" //,
//    "c": "https://demo.piwik.org/piwik.php"
  },
  // Stuff to push into the array
  "paq_push" : {
    "a" : "['setLinkTrackingTimer',250],['disableCookies']",
    //"a" : "['setLinkTrackingTimer',250],['setHeartBeatTimer',15,30],['disableCookies']",
    "b" : "['setLinkTrackingTimer',250],['trackGoal',1,0],['killFrame']"
  },
 
  
  // obey browser do-not-track setting
  "set_do_not_track" : {
    "a" : "true",
    "b" : "false"
  },
  // link tracking timer for how long to wait
  "link_tracking_timer" :  {
    "a" : "500",
    "b" : "500"
  },
  // whether or not to track outlinks
  "link_tracking" : {
    "a" : "true",
    "b" : "true"
  },

/* TODO */
  
  // set the domains to track
  "set_domains" : { 
    "a" : "a",
    "b" : "b"
  },
  // set the cookie domain for each
  "set_cookie_domain" : {
    "a" : "a",
    "b" : "b"
  }/* 
  ,
   "goal": {

"a" : { "1" : "", "2" : "", "3" :"" },
"b" : { "1" : "", "2" : "", "3" :"" },

  } */
};


// can't "build" this in the above associative array
pkC.js_url = pkC.js_prot+pkC.js_schem+pkC.js_host+pkC.js_path+pkC.js_file;

// be lazy, copy it over from the short name to one that makes more sense.
window.piwikConfig = pkC;
