'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b78891d80d67a34db976d042a90f45d4",
"assets/assets/fonts/CroissantOne-Regular.ttf": "4fd8ae05fb72cbb445f3724c9c2ec43a",
"assets/assets/fonts/QanelasSoftMedium.woff": "511959d6757f920241589343bad2355d",
"assets/assets/fonts/QanelasSoftRegular.woff": "9d0ed771bbdff2fbcb29e41547ef90d5",
"assets/assets/image/apple.png": "00162b09769aaef086071cee8d79eb72",
"assets/assets/image/apple_logo.png": "a6a6f07e9593667130c6cac7b5abea71",
"assets/assets/image/apple_round.png": "11a7ede48323673b2e7bbb0c0050420d",
"assets/assets/image/award.png": "526b5499b6cd9f07b9d9ca2fc93a1b48",
"assets/assets/image/bg_circle.png": "62dc06c837f14e4c4b311beac03c36fd",
"assets/assets/image/category/art.png": "cf75f7b08c55e0e351ad9c0a68636ea5",
"assets/assets/image/category/bachelor.png": "1e11ac808560ab61a3e80e4a3cc4d298",
"assets/assets/image/category/computer.png": "0642692b4f322a10ee9d2c981c6e4064",
"assets/assets/image/category/design.png": "799db24b6662010acaa70f6204d3dada",
"assets/assets/image/category/dumbbells.png": "4dfc10e4930adc33e8ba3676904ab6c3",
"assets/assets/image/category/eco-lifestyle.png": "1c487c8ecbd699d01caf8b565255e743",
"assets/assets/image/category/eyeliner.png": "3facbc06ceedabaf89ad746f69cf5923",
"assets/assets/image/category/marketing.png": "017fd9421684d2295b7d728a5a8fe451",
"assets/assets/image/category/personal-development.png": "4cf321f49be41fa8d7abe1ab9fbea036",
"assets/assets/image/coffee.png": "8202d02aa34d6d48121ad106b3d14e5b",
"assets/assets/image/deleted_user.png": "449b257dedb7bf50d40895f8473de081",
"assets/assets/image/error.png": "026ffec7aaae7dc4715dc7fe528aa618",
"assets/assets/image/facebook.png": "4c50e295c4e6847de193b6019aa78738",
"assets/assets/image/facebook_logo.png": "85757aea4be362f5346dee40736202a4",
"assets/assets/image/facebook_round.png": "7e2a71e756287cff183a96784c827068",
"assets/assets/image/forgetmail.png": "b9cbf22b134ee304b1750b35cb3de3b9",
"assets/assets/image/g.png": "6d1e994a445b22f43bb1327a44448ce8",
"assets/assets/image/g1.png": "a4acb50aa47cd24cdbf69e124964dd10",
"assets/assets/image/gaccent.png": "5c90d252b0cc3502d126ff8e0a7b8eae",
"assets/assets/image/gigavuslogo.png": "b9d4f9f13dcb7d988e8cd9ae1f180a71",
"assets/assets/image/gigavuslogo_old.png": "e28d8bd65f7d78d5a731e2ac61c238d2",
"assets/assets/image/gigavus_logo_white.png": "bd3a68d24ed87ff1cb350f0c8111a957",
"assets/assets/image/google.png": "972190561bc9e22541321268559ead4a",
"assets/assets/image/google_logo.png": "abf44ce0324a8481d4442244abdf2157",
"assets/assets/image/google_round.png": "0b5358e008a290c95624544a719c8265",
"assets/assets/image/g_black.png": "ca2ae41a3e93b739c71fff8ec338b4ed",
"assets/assets/image/g_black1.png": "03881fc6911a84289e35d75fc086a381",
"assets/assets/image/instagram.png": "15713632b2c904e42b40e44f1f9b8a76",
"assets/assets/image/invoice_logo.png": "603b3a37c3912957efde5a122772ff80",
"assets/assets/image/linkedin.png": "e90e0a6a08f5e8aca1d30d5982b5d588",
"assets/assets/image/login_bg_top.png": "8fba63cf47bba50a9c5e782efa582ba3",
"assets/assets/image/login_bg_top1.png": "f3709e40458be79f95090d244e324259",
"assets/assets/image/paypal.png": "73a160d5c3d7730df72f8e3f42499d6a",
"assets/assets/image/pinterest.png": "7db26c5c55af7f4cf23c4f9fd47bbb62",
"assets/assets/image/playbutton.png": "a79812d8d00d6a1510c41a752f19f7eb",
"assets/assets/image/playbuttonred.png": "47406c7fc0b19539ed1e5742daf5a721",
"assets/assets/image/playbutton_old.png": "11b087d4306ea3d4c7b50489fe8fb0ae",
"assets/assets/image/playsecondary.png": "40b7dcd63d7323eac9987f6d8ca2dc50",
"assets/assets/image/profile_bg_dots.png": "8db720900394273f14a7d1f598d1f7a9",
"assets/assets/image/sample.png": "3c8c09523738cde5a2456c9a78f2ac5d",
"assets/assets/image/splashscreen.png": "d22be06c1c073e07b819f23d3dea1e8c",
"assets/assets/image/store/apple.png": "48b5a6c14602430ae5339f8a4fbaa298",
"assets/assets/image/store/google.png": "94e9f22374550b2643e3b3ce837781a9",
"assets/assets/image/success.png": "59064f240b93f4ab50ebbe44f3941142",
"assets/assets/image/success_2.png": "59064f240b93f4ab50ebbe44f3941142",
"assets/assets/image/svg/access_time.svg": "d0b223a3d88a4194dbb8560ea70f57e4",
"assets/assets/image/svg/add_square.svg": "c9297d2ba8119420515be7c311819628",
"assets/assets/image/svg/billing_info.svg": "9bff337752c9ae24d7669f10e2403311",
"assets/assets/image/svg/bookmark.svg": "c63b6b55cfe37373d2c31ddf06eb85d8",
"assets/assets/image/svg/bookmark_active.svg": "9d26071e7c334e6374ec1e52739d5e03",
"assets/assets/image/svg/comment.svg": "9d03940d7fe1c1bd28bcab6d8ef7c826",
"assets/assets/image/svg/fluent_ribbon_star.svg": "f33c7e2d8d013de4e177d2c1d53ef521",
"assets/assets/image/svg/follow.svg": "5690f4a20bb92da73b99100f648b53d8",
"assets/assets/image/svg/like.svg": "f3183f21d5f4236b4d06a062b62cab21",
"assets/assets/image/svg/notification.svg": "7f97c26e730e80729e2e8e5f0041f638",
"assets/assets/image/svg/privacy.svg": "72a8937d504f096fcb48f4c57cb85e52",
"assets/assets/image/svg/report.svg": "90ab6f630ce1511424ba2da8d7b0a625",
"assets/assets/image/svg/share.svg": "fadf48925c25e89ec00a53ff7b3c4fa3",
"assets/assets/image/svg/spot.svg": "8c9552a688f4b0e0fd2579cded40367e",
"assets/assets/image/svg/thumnail_image.svg": "12e0dca9d9dda4c6524f4f2b3f21fbae",
"assets/assets/image/svg/unlike.svg": "6f5657963c7f382ef429e7eb7ba09ce5",
"assets/assets/image/svg/video_upload_image.svg": "d216b61f4fdae05f27e767b2fd1a0870",
"assets/assets/image/svg/views.svg": "70a1383a292127e9f736704961f85980",
"assets/assets/image/tweet.png": "40e91e34a8763dd2063af1fce7d142e5",
"assets/assets/image/v1_0.png": "b93ef225366d699a87baa33e54f1c77c",
"assets/assets/image/v1_1.png": "f3c76ad9220cc40efd202d8e91978b99",
"assets/assets/image/v1_2.jpg": "3af3bdd2edb02925da62ff17b0eab9e9",
"assets/assets/image/v2_1.png": "d96e1e37a4adf3e39429cc2ca3dbfd35",
"assets/assets/image/v2_2.png": "0807a5505f17a6096faf5603f2936d3c",
"assets/assets/image/v2_3.png": "3d9a48abc8276ce0c1ae73e7c2f1a7b3",
"assets/assets/image/v2_4.png": "8638c114f667c7359a6c1bd2d606fe83",
"assets/assets/image/v2_5.png": "fa03b0fe6aee23a74b1266c5e56d13aa",
"assets/assets/image/v2_6.png": "6ffc5b9a2cc1e8b0d6f8ed424f2087ea",
"assets/assets/image/v2_7.png": "7dd9dd52cde4a5298caf9ae3c1e02b1e",
"assets/assets/image/v3_1.png": "427ff4968b3fa73de67c1f8e1d31b44b",
"assets/assets/image/v3_2.png": "69853517d7c30647da7ac02fd0fd013e",
"assets/assets/image/videoError.png": "bd557ea741378a82fc494eca01d945da",
"assets/assets/image/video_film_icon.png": "e466826fdc6990bdef42d6e14f7e9ddf",
"assets/assets/image/wizard_bg.png": "85a3e10351a624059af75321e61b4ac2",
"assets/assets/image/wt_1.png": "780f35fc4b16ff634bbbc52a51132866",
"assets/assets/image/wt_2.png": "b07ef75bc28cb7883f6f6bf2096b1ce9",
"assets/assets/image/wt_3.png": "fbe88d5d0a35e4d7b2d37454a2e7d172",
"assets/FontManifest.json": "47a5d5b07a5de5e89af0d1258f5d4698",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "80d2c7193b4153737acdb68145405d48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"assets/shaders/ink_sparkle.frag": "d073695f17547f733f5dd82c89b4d4d1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8f1477bab34f79342c04ba62025c64e",
"/": "d8f1477bab34f79342c04ba62025c64e",
"main.dart.js": "6501df83da0d3aa80ff2a4c2ec3fee59",
"manifest.json": "f5883796cdf1efbe5c305c68907988b3",
"version.json": "5b3fe1dc8ef13a5795985b131bdfe84f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
