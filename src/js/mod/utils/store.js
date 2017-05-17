import engine from 'store/src/store-engine'
import sessionStorage from 'store/storages/sessionStorage'
import localStorage from 'store/storages/localStorage'
import memoryStorage from 'store/storages/memoryStorage'
import defaultsPlugin from 'store/plugins/defaults'
import expirePlugin from 'store/plugins/expire'


export const ss = engine.createStore([sessionStorage, memoryStorage], [defaultsPlugin, expirePlugin]);

export const ls = engine.createStore([localStorage, memoryStorage], [defaultsPlugin, expirePlugin]);
