"use strict";
console.log("WORKER: executing.");
var version = "v003::",
    offlineFundamentals = [
        '/',
        '/favicon.ico',
        '/css/style.css',
        '/fonts/jacksilver-webfont.woff',
        '/fonts/jacksilver-webfont.woff2',
        '/fonts/notoserif-bold-webfont.woff',
        '/fonts/notoserif-bold-webfont.woff2',
        '/fonts/notoserif-regular-webfont.woff',
        '/fonts/notoserif-regular-webfont.woff2',
        '/fonts/sourcesanspro-regular-webfont.woff',
        '/fonts/sourcesanspro-regular-webfont.woff2',
        "/scripts/pauseButton.js",
        "/scripts/carouselItem.js",
        "/scripts/carouselButtons.js",
        "/scripts/carousel.js"
    ];
self.addEventListener("install", function (e) {
    console.log("WORKER: install event in progress."),
    e.waitUntil(caches.open(version + "fundamentals").then(function (e) {
        return e.addAll(offlineFundamentals)
    }).then(function () {
        console.log("WORKER: install completed")
    }))
}),
self.addEventListener("fetch", function (e) {
    console.log("WORKER: fetch event in progress."),
    "GET" === e.request.method
        ? e.respondWith(caches.match(e.request).then(function (t) {
            var n = fetch(e.request).then(function (t) {
                var n = t.clone();
                return console.log("WORKER: fetch response from network.", e.request.url),
                caches
                    .open(version + "pages")
                    .then(function (t) {
                        t.put(e.request, n)
                    })
                    .then(function () {
                        console.log("WORKER: fetch response stored in cache.", e.request.url)
                    }),
                t
            }, s).catch(s);
            return console.log("WORKER: fetch event", t
                ? "(cached)"
                : "(network)", e.request.url),
            t || n;
            function s() {
                return console.log("WORKER: fetch request failed in both cache and network."),
                new Response("<h1>Service Unavailable</h1>", {
                    status: 503,
                    statusText: "Service Unavailable",
                    headers: new Headers({"Content-Type": "text/html"})
                })
            }
        }))
        : console.log("WORKER: fetch event ignored.", e.request.method, e.request.url)
}),
self.addEventListener("activate", function (e) {
    console.log("WORKER: activate event in progress."),
    e.waitUntil(caches.keys().then(function (e) {
        return Promise.all(e.filter(function (e) {
            return !e.startsWith(version)
        }).map(function (e) {
            return caches.delete(e)
        }))
    }).then(function () {
        console.log("WORKER: activate completed.")
    }))
});