import query from 'dom-helpers/query';
import $class from 'dom-helpers/class';
const device = {};
const ua = navigator.userAgent;

let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
let iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
let KQ = ua.indexOf('kuaiqianbao') > -1;
let FeiFan = ua.indexOf('feifan') > -1;

device.KQ = KQ;
device.FeiFan = FeiFan;

device.ios = device.android = device.iphone = device.ipod = device.ipad = device.androidChrome = false;

// Android
if (android) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
}
if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
}

// iOS
if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
}
if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
}
if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
}
// iOS 8+ changed UA
if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
}

// Webview
device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

// Minimal UI
if (device.os && device.os === 'ios') {
    let osVersionArr = device.osVersion.split('.');
    let viewport = query.querySelectorAll(document, '[name="viewport"]');
    device.minimalUi = !device.webView &&
                        (ipod || iphone) &&
                        (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
                        viewport.length > 0 && viewport[0].getAttribute('content').indexOf('minimal-ui') >= 0;
}

const windowWidth = query.width(window, true);
const windowHeight = query.height(window, true);

device.needsStatusBar = function () {
    if (device.webView && (windowWidth * windowHeight === screen.width * screen.height)) {
        return true;
    }
    return false;
};

device.statusBar = device.needsStatusBar();

const classNames = [];

device.pixelRatio = window.devicePixelRatio || 1;

classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio));

if (device.pixelRatio >= 2) {
    classNames.push('retina');
}

// OS classes
if (device.os) {
    classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'));
    if (device.os === 'ios') {
        var major = parseInt(device.osVersion.split('.')[0], 10);
        for (var i = major - 1; i >= 6; i--) {
            classNames.push('ios-gt-' + i);
        }
    }
}

let html = query.querySelectorAll(document, 'html')[0];

if (device.statusBar) {
  classNames.push('with-statusbar-overlay');
}
else {
  $class.removeClass(html, 'with-statusbar-overlay');
}

// Add html classes
classNames.forEach((c)=>$class.addClass(html, c));

// Export object
export default device;
