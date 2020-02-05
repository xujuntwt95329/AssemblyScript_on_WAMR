import * as wamr from "env"

declare function wasm_create_timer(a: i32, b: bool, c: bool): i32;

export var timer_list = new Array<user_timer>();

class user_timer {
    timer_id: i32 = 0;
    timeout: i32;
    period: bool = false;
    cb: () => void;

    constructor(cb: () => void, timeout: i32, period: bool) {
        this.cb = cb;
        this.timeout = timeout;
        this.period = period
        this.timer_id = timer_create(this.timeout, this.period, true);
    }
}

export function timer_create(a: i32, b: bool, c: bool): i32 {
    return wasm_create_timer(a, b, c);
}

export function setTimeout(cb: () => void, timeout: i32): void {
    var timer = new user_timer(cb, timeout, false);
    timer_list.push(timer);
}

export function setInterval(cb: () => void, timeout: i32): void {
    var timer = new user_timer(cb, timeout, true);
    timer_list.push(timer);
}

// export function _on_timer_callback(timer_id: i32): void {
//     timer_list.forEach(timer => {
//         if (timer.timer_id == timer_id) {
//             timer.cb();
//         }
//     })
// }
