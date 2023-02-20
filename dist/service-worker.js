/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7c0b8c88adbd7a5f0bbe674fbbf442e"
  },
  {
    "url": "assets/css/0.styles.78e809a4.css",
    "revision": "7d2cb2d6d963de3fcd4e034d87d6eec9"
  },
  {
    "url": "assets/img/bg.svg",
    "revision": "9ac85aeb7971101cae1ec0e4efd24647"
  },
  {
    "url": "assets/img/charts-css-anatomy-0-9-0.jpg",
    "revision": "3fc0c17964b4f51debb402229bf40c88"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/lana.jpg",
    "revision": "67e986cb584e02fe12284d13b098ac94"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "e052684fdfc0872caa2a1138cdb17fda"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "3324ec97eb94cee3e419b48fccf7f516"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "bd28dd87f8e967fc3f42bec7df8ea8d0"
  },
  {
    "url": "assets/img/rami.jpg",
    "revision": "3256e82bfcb52c1eb0bce07cb4373e0b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d57c1a58.js",
    "revision": "63bae5ce252dd815afabe69460cf745e"
  },
  {
    "url": "assets/js/11.71231bfb.js",
    "revision": "f3b79f0623ae9ad3565b4a5a0aadf0f6"
  },
  {
    "url": "assets/js/12.651971a6.js",
    "revision": "a79b32acc50360bc3801f5211dd8d806"
  },
  {
    "url": "assets/js/13.01e1d5ce.js",
    "revision": "d1aea5db65ba446b048afc3979a398c3"
  },
  {
    "url": "assets/js/14.1766cb1f.js",
    "revision": "f3844ab0d35c327c845c0bec22bcd5d4"
  },
  {
    "url": "assets/js/15.06da530e.js",
    "revision": "834ff9d055b311eea1431801751a8c95"
  },
  {
    "url": "assets/js/16.c30b34a5.js",
    "revision": "f42531a3de31ace501912268d076fb81"
  },
  {
    "url": "assets/js/17.dd19429c.js",
    "revision": "82dc682bcb1150b7700dec81e8b645a0"
  },
  {
    "url": "assets/js/18.59790d78.js",
    "revision": "0473dcbd0ce034b1ca3c5cf0387d5b90"
  },
  {
    "url": "assets/js/19.1cbe2f27.js",
    "revision": "f4f73716e5ae696a502011a385ec80e4"
  },
  {
    "url": "assets/js/2.86b2ecd0.js",
    "revision": "a4ffb45e05de2fafaf7eaa43f8aa406d"
  },
  {
    "url": "assets/js/20.e9d38ab0.js",
    "revision": "3e4f007734438e59a69b6f455e13c1f1"
  },
  {
    "url": "assets/js/21.7e0e350f.js",
    "revision": "95a64fb23882a275c4016ee40b1a2562"
  },
  {
    "url": "assets/js/22.98845609.js",
    "revision": "9a13fca56369be12f5ca275277601f9a"
  },
  {
    "url": "assets/js/23.3e8b4fb8.js",
    "revision": "a93f4794993eaec343c4bb18960a247e"
  },
  {
    "url": "assets/js/24.981c7223.js",
    "revision": "5203e98c6b3a7928dfbabbc3a1de2c5f"
  },
  {
    "url": "assets/js/25.0bb87baa.js",
    "revision": "978361a9968f22f444c6a3e146504263"
  },
  {
    "url": "assets/js/26.97286bae.js",
    "revision": "0ddef5449e16ba23649c3e8b162a4d91"
  },
  {
    "url": "assets/js/27.a02cac18.js",
    "revision": "d58b1f5e6688e0b7f1cf8be6937f12d9"
  },
  {
    "url": "assets/js/28.bba25db4.js",
    "revision": "31f8d5028f3b2f0dc6a074252bc719c6"
  },
  {
    "url": "assets/js/29.ee5a6cb0.js",
    "revision": "734f7f2b3967596ef1e02ea74d1c4376"
  },
  {
    "url": "assets/js/3.9962ecfc.js",
    "revision": "de3f6d9fe739cf647550b59e9766a01a"
  },
  {
    "url": "assets/js/30.3a2201a7.js",
    "revision": "ab444bf9006fc83698b7f5e5a8b03543"
  },
  {
    "url": "assets/js/31.7411a8dc.js",
    "revision": "9d20fc7a9f7a8a939b67fc659c9ee860"
  },
  {
    "url": "assets/js/32.984e7c33.js",
    "revision": "1891b73b20d8b16b7d235f1147035253"
  },
  {
    "url": "assets/js/33.1044e7ca.js",
    "revision": "a5568bd0509b5448189207384d310960"
  },
  {
    "url": "assets/js/34.88f1ae53.js",
    "revision": "ac0d3b4b4fafa43685369429755eb5bd"
  },
  {
    "url": "assets/js/35.8fa0f3fb.js",
    "revision": "e8faaadd5c80bf14270eb62045efbd91"
  },
  {
    "url": "assets/js/36.22d9e607.js",
    "revision": "cb5fbb4942b816c596c6c2c23cc36d99"
  },
  {
    "url": "assets/js/37.4af42137.js",
    "revision": "4badbb3176cc173976b1d30c0a92b3e6"
  },
  {
    "url": "assets/js/38.311d7466.js",
    "revision": "8f60b418d65c52ac449cd830b9b9f05a"
  },
  {
    "url": "assets/js/39.9bb57cfb.js",
    "revision": "a53993b2dc3e2d142b6075f23e4fb3b6"
  },
  {
    "url": "assets/js/4.d3ddd571.js",
    "revision": "61d0d1fffa99e350c3e237e6c09c62c3"
  },
  {
    "url": "assets/js/40.f5bc41b4.js",
    "revision": "350147824d6cb1329b64fb05791f3d34"
  },
  {
    "url": "assets/js/41.ab4043a2.js",
    "revision": "0b8080d60cb8d0b71a0757e10253e801"
  },
  {
    "url": "assets/js/42.aaa4cfaa.js",
    "revision": "faec701fef7075a423c302746801a76b"
  },
  {
    "url": "assets/js/43.2def363e.js",
    "revision": "abccea800c7c715b3f99747b666fe361"
  },
  {
    "url": "assets/js/44.45a227fd.js",
    "revision": "232d822aef525224a9c7ab4e185d729b"
  },
  {
    "url": "assets/js/45.e464ebec.js",
    "revision": "60bb7bd21fbad903b673315ff8900376"
  },
  {
    "url": "assets/js/46.25ff48aa.js",
    "revision": "3c8067281a6fff765243f73daff72f84"
  },
  {
    "url": "assets/js/47.f934888a.js",
    "revision": "f6ff09a043cb423fc60d2cb389ca3adb"
  },
  {
    "url": "assets/js/48.7c8f680f.js",
    "revision": "d51a73ed23fcff327a8fd3cbb801bf1c"
  },
  {
    "url": "assets/js/49.b3ae2be1.js",
    "revision": "ea622132e21b49ab94b3ea30f5f1a43a"
  },
  {
    "url": "assets/js/5.04354424.js",
    "revision": "85d0ab3c826c7f806f13c370ef883a8a"
  },
  {
    "url": "assets/js/50.a2ffae2c.js",
    "revision": "b5b111ccd66ed002932debbc03c99dca"
  },
  {
    "url": "assets/js/51.f171ff91.js",
    "revision": "2d3543a4c9c2791e7ce3afb50c071223"
  },
  {
    "url": "assets/js/52.999dbad1.js",
    "revision": "f80279998ac705cc32fdc9fbffa9f7a7"
  },
  {
    "url": "assets/js/53.2a551f4e.js",
    "revision": "f64909634c0d01f1eabaf548b0e58e96"
  },
  {
    "url": "assets/js/54.cb0c63e4.js",
    "revision": "5d71e798a34a42b8503267a0e442ecbc"
  },
  {
    "url": "assets/js/55.f4d59f43.js",
    "revision": "f393c96659305eca07961f8c6c55386a"
  },
  {
    "url": "assets/js/56.90c3881b.js",
    "revision": "806139b6e66276307d91d3773ac59a9e"
  },
  {
    "url": "assets/js/57.4ad09961.js",
    "revision": "c7eac3c3a58697f77e92e1e5b9b4b01a"
  },
  {
    "url": "assets/js/58.ec60cf22.js",
    "revision": "de5e735b1618a0743a44e87714779a50"
  },
  {
    "url": "assets/js/59.b752641c.js",
    "revision": "352942c1c3cadbf72cde4fe91f6c302b"
  },
  {
    "url": "assets/js/6.ae64bf7f.js",
    "revision": "2c9e14effe671a552b67e15d8fd3df1d"
  },
  {
    "url": "assets/js/60.1dafd3d2.js",
    "revision": "740c627a31d5f847a8b8045b13321cac"
  },
  {
    "url": "assets/js/61.a73951f0.js",
    "revision": "b520fd712eeee7548b1d84f2a4775a0f"
  },
  {
    "url": "assets/js/62.0a8faff3.js",
    "revision": "d9de65f3deb200a34db73ae4aa837732"
  },
  {
    "url": "assets/js/63.c307c610.js",
    "revision": "25edb11b5f7ad1c483011d333b0d457d"
  },
  {
    "url": "assets/js/64.df593066.js",
    "revision": "4b357be04ec46390676d6caaa1420701"
  },
  {
    "url": "assets/js/65.151e5b28.js",
    "revision": "fae9804a619cd46dace91b78bdce7aba"
  },
  {
    "url": "assets/js/7.692149ab.js",
    "revision": "b6d1b093abcd003e6f7f44dfe99252c1"
  },
  {
    "url": "assets/js/8.629c1ec4.js",
    "revision": "da66c5bf1837a7296438fdde2cabb246"
  },
  {
    "url": "assets/js/9.a3bd23d6.js",
    "revision": "2839bbcd011a9f6a9a440f4c9d2ce6ef"
  },
  {
    "url": "assets/js/app.10d27411.js",
    "revision": "55c78af137aad36c5f1bb2cec2ec8a0d"
  },
  {
    "url": "charts/area/index.html",
    "revision": "cb80d348cc9440689451e8016dddc17e"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "50d1e2ff2111b82735e234450e0af607"
  },
  {
    "url": "charts/column/index.html",
    "revision": "b0deb01fa60e6044c86c61b85b170e38"
  },
  {
    "url": "charts/index.html",
    "revision": "fa8698fa93594313a3cecc40a767ba74"
  },
  {
    "url": "charts/line/index.html",
    "revision": "49386dfef1bedcf5e4d4c094206b91c8"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "e2f6df574448f8ce05a90d4fad5dd25c"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "5c9ed3d4cae6338669b67c3ca209a0e9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "a034373255bb64db4bf10782833efc8e"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "41a1457fbc370b58ac1561ad37058108"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "6043ee026819784f2e4cafaceac4318f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "6483528f67feaebe80f61f59b73f69f8"
  },
  {
    "url": "components/colors/index.html",
    "revision": "30c06a28f09cb8df5fe78cd6e35edda0"
  },
  {
    "url": "components/data/index.html",
    "revision": "a647031633d216e52af33fccc8591952"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2ca18e7bc86ef8228e7e594be4d07f28"
  },
  {
    "url": "components/heading/index.html",
    "revision": "6aba99795d11420f555a1c014a346446"
  },
  {
    "url": "components/index.html",
    "revision": "74153ce19238ed0ded1d8bc9625065d6"
  },
  {
    "url": "components/labels/index.html",
    "revision": "005039f9e6996f42c1e06a1b6cbfe633"
  },
  {
    "url": "components/legend/index.html",
    "revision": "4cb90596c1659f22d16fc1f8a93e4408"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "8b792e8c56a3175b75ad607293b97a20"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "431dfa1ecbb3a219c3fcd32f2b73e802"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "7e39b5dd01d0bf78caed4d4fc02ed708"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "b4f80251c7f3a39071421e07bf057f5c"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "01f8ffd2a380fcab99d6f705032e31f1"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "322bd8fb363cd6958c30dfd7c9c7c69f"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "df69451c0a314f49fd3c477de1f79787"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "a6e680936ba208417d1d21a4ade54c8a"
  },
  {
    "url": "customization/index.html",
    "revision": "8b572450299882e9fddca044e208d755"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "687f65bb3087473c3cba19cbcf591eab"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "7d731156e00d9ff6b21977da82abd0bc"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "8d9dfb1e4d44b601dc50e835a615f98e"
  },
  {
    "url": "development/index.html",
    "revision": "a08f38e293ef3fc8e4b0f4e49a2fb219"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "225f81086a9a861c6a794fe85bff6df3"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "de8fa247212ffe03f867c7e6def3d2d0"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "5cffcb7e1a5b61af25c40d3a32cb54aa"
  },
  {
    "url": "docs/index.html",
    "revision": "6b0cc4528dc76ebb3be46b6dbfa9d1df"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "ef156e64c798664dd1711caea0c6fef1"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "56f20fa7411865f28d35b36b903add5c"
  },
  {
    "url": "examples/area/index.html",
    "revision": "d843aa6e5282f07979af9b8a8c18eb12"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "4fe23afeb4307e8c56474f932a51d571"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "443b3eb157bd7100af9e202ed6918070"
  },
  {
    "url": "examples/column/index.html",
    "revision": "772b37916f48c019dc6a26ee4e612b5f"
  },
  {
    "url": "examples/index.html",
    "revision": "2d412cb76ce1ef315be5fc68d893c36b"
  },
  {
    "url": "examples/line/index.html",
    "revision": "1313c1111539dad0847c39b754a62253"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "16a3da7fb17ca19b0826f8bad736099a"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "b0b8e39145f4cd6c48546ab2287649ef"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "ab117c7cff8db3c17d8d8ea4c16b35b3"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "a02533cfa62e2294a46722094f0328ad"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "96c9bcd1a03bd75d5db7af49473be2f4"
  },
  {
    "url": "index.html",
    "revision": "9a4011bff94f06eb36c5e45e60034e1a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
