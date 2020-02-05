// The entry file of your WebAssembly module.

import * as wamr from "env"
import * as timer from "./env"

var period = 0;

export function on_init() : void {
    // var timer_id = timer.timer_create(1000, true, false);
    // wamr.log_number(timer_id);
    // timer_id = timer.timer_create(1000, true, true);
    // wamr.log_number(timer_id);
    timer.setTimeout(() => {
        wamr.log_str("time is up.");
    }, 2000);

    timer.setInterval(() => {
        period ++;
        wamr.log_str("run " + period.toString() + " peroid");
    }, 5000);
}

export function on_destroy() : void {

}

export function _on_timer_callback(on_timer_id: i32): void {
    for (let i = 0; i < timer.timer_list.length; i++) {
        if (timer.timer_list[i].timer_id == on_timer_id) {
            timer.timer_list[i].cb();
        }
    }
}