interface Supoort {
  touch: boolean;
  pointerEvents: boolean;
  passiveListener: boolean;
  intersectionObserver: boolean;
}

let support: Supoort;

function calcSupport(): Supoort {
  return {
    touch: !!(
      'ontouchstart' in window ||
      ((window as any).DocumentTouch &&
        document instanceof (window as any).DocumentTouch)
    ),

    pointerEvents:
      !!(window as any).PointerEvent &&
      'maxTouchPoints' in window.navigator &&
      window.navigator.maxTouchPoints >= 0,

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', () => null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    })(),

    intersectionObserver: (function checkObserver() {
      return 'IntersectionObserver' in window;
    })()
  };
}

export function getSupport(): Supoort {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

export interface Device {
  ios: boolean;
  android: boolean;
  androidChrome: boolean;
  desktop: boolean;
  iphone: boolean;
  ipod: boolean;
  ipad: boolean;
  edge: boolean;
  ie: boolean;
  firefox: boolean;
  macos: boolean;
  windows: boolean;
  cordova: boolean;
  phonegap: boolean;
  electron: boolean;
  capacitor: boolean;
  nwjs: boolean;
  os: string;
  osVersion: string;
  pixelRatio: number;
  prefersColorScheme: () => 'light' | 'dark';
}

let deviceCalculated: Device;

function calcDevice({ userAgent }: { userAgent?: string } = {}): Device {
  const support = getSupport();

  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;

  const device: any = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    iphone: false,
    ipod: false,
    ipad: false,
    edge: false,
    ie: false,
    firefox: false,
    macos: false,
    windows: false,
    cordova: !!((window as any).cordova || (window as any).phonegap),
    phonegap: !!((window as any).cordova || (window as any).phonegap),
    electron: false,
    capacitor: !!(window as any).Capacitor,
    nwjs: false
  };

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
  const edge = ua.indexOf('Edge/') >= 0;
  const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
  const windows = platform === 'Win32';
  const electron = ua.toLowerCase().indexOf('electron') >= 0;
  const nwjs =
    typeof (window as any).nw !== 'undefined' &&
    typeof process !== 'undefined' &&
    typeof process.versions !== 'undefined' &&
    typeof process.versions.nw !== 'undefined';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810'
  ];
  if (
    !ipad &&
    macos &&
    support.touch &&
    iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0
  ) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = ['0', '1', '13_0_0'];
    macos = false;
  }

  device.ie = ie;
  device.edge = edge;
  device.firefox = firefox;

  // Android
  if (android && !windows) {
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
    device.ipod = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView =
    !!(
      (iphone || ipad || ipod) &&
      (ua.match(/.*AppleWebKit(?!.*Safari)/i) ||
        (window.navigator as any).standalone)
    ) ||
    (window.matchMedia &&
      window.matchMedia('(display-mode: standalone)').matches);
  device.webview = device.webView;
  device.standalone = device.webView;

  // Desktop
  device.desktop = !(device.ios || device.android) || electron || nwjs;
  if (device.desktop) {
    device.electron = electron;
    device.nwjs = nwjs;
    device.macos = macos;
    device.windows = windows;
    if (device.macos) {
      device.os = 'macos';
    }
    if (device.windows) {
      device.os = 'windows';
    }
  }

  // Pixel Ratio
  device.pixelRatio = window.devicePixelRatio || 1;

  // Color Scheme
  const DARK = '(prefers-color-scheme: dark)';
  const LIGHT = '(prefers-color-scheme: light)';
  device.prefersColorScheme = function prefersColorTheme() {
    let theme = 'light';

    if (window.matchMedia && window.matchMedia(LIGHT).matches) {
      theme = 'light';
    }
    if (window.matchMedia && window.matchMedia(DARK).matches) {
      theme = 'dark';
    }
    return theme;
  };

  // Export object
  return device;
}

export function getDevice(overrides = {}, reset?: boolean): Device {
  if (!deviceCalculated || reset) {
    deviceCalculated = calcDevice(overrides);
  }
  return deviceCalculated;
}
