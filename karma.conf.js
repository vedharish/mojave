// Karma configuration
// Generated on Fri Jul 07 2017 16:49:19 GMT+0200 (CEST)

// region current browser versions
const CURRENT_CHROME = 64;
const CURRENT_FIREFOX = 58;
const CURRENT_EDGE = 16;
// endregion

// region Browser Config builder
function browser (os, osVersion, browser, browserVersion, browserVersionSuffix = 0)
{
    return {
        'os' : os,
        'os_version' : osVersion,
        'browser' : browser,
        'browser_version' : `${browserVersion}.${browserVersionSuffix}`,
        'browserstack.selenium_version' : '3.8.1',
    };
}

function device (os, device)
{
    return {
        'os_version' : os,
        'device' : device,
        'real_mobile' : 'true',
        'browserstack.selenium_version' : '3.8.1',
    };
}
// endregion


const browsers = {
    // Chrome (Windows)
    win_chrome: browser("Windows", 10, "Chrome", CURRENT_CHROME),
    win_chrome_1: browser("Windows", 10, "Chrome", CURRENT_CHROME - 1),

    // Firefox (Windows)
    win_firefox: browser("Windows", 10, "Firefox", CURRENT_FIREFOX),
    win_firefox_1: browser("Windows", 10, "Firefox", CURRENT_FIREFOX - 1),

    // Edge
    win_edge: browser("Windows", "Edge", CURRENT_EDGE),
    win_edge_1: browser("Windows", "Edge", CURRENT_EDGE - 1),

    // IE 11
    win_ie11: browser("Windows", "8.1", "IE", 11),
    win_ie10: browser("Windows", "8", "IE", 10),

    // Chrome (macOS)
    mac_chrome: browser("OS X", "High Sierra", "Chrome", CURRENT_CHROME),
    mac_chrome_1: browser("OS X", "High Sierra", "Chrome", CURRENT_CHROME - 1),

    // Firefox (Windows)
    mac_firefox: browser("OS X", "High Sierra", "Firefox", CURRENT_FIREFOX),
    mac_firefox_1: browser("OS X", "High Sierra", "Firefox", CURRENT_FIREFOX - 1),

    // Safari
    mac_safari: browser("OS X", "High Sierra", "Safari", 11),
    mac_safari_1: browser("OS X", "Sierra", "Safari", 10, 1),

    // Safari (iOS)
    ios_safari_latest: device("10.3", "iPhone 7"),

    // Chrome (Android)
    android_chrome_latest: device("8.0", "Google Pixel"),
};

module.exports = function (config) {
    config.set({
        frameworks: ['qunit'],
        files: [
            'tests/dist/complete-library-build.js',
            'tests/dist/all-tests.js'
        ],
        reporters: [
            'dots',
            'BrowserStack',
        ],
        port: 9876,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // use high timeout to better handle long running iOS tasks
        captureTimeout: 180000,

        // Browser config
        customLaunchers: browsers,
        browsers: Object.keys(browsers),
    });
};
