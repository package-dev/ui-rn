const { isObject } = require("lodash");
const log = console.debug

class Log {
    static e = (...a) => log(Color.red, ...a)
    static e1 = (...a) => Log.format(Color.red, ...a)
    static d = (...a) => log(Color.cyan, ...a)
    static d1 = (...a) => Log.format(Color.cyan, ...a)
    static g = (...a) => log(Color.green, ...a)
    static g1 = (...a) => Log.format(Color.green, ...a)
    static y = (...a) => log(Color.yellow, ...a)
    static y1 = (...a) => Log.format(Color.yellow, ...a)
    static format(color = Color.yellow, ...a) {
        {
            if (a.length == 1) {
                log(color, JSON.stringify(a[0], null, ' '));
            }
            else if (a.length >= 2) {
                const end = a.slice(2)
                if (isObject(a[0])) log(JSON.stringify(a[0], null, ' '), JSON.stringify(a[1], null, ' '), ...end);
                else log(color, a[0], JSON.stringify(a[1], null, ' '), ...end);
            }

        }
    }
}
const Color = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
}
window.Log = Log