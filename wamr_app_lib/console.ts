@external("env", "printf")
declare function printf(a: ArrayBuffer): i32;

export function log(a: string): void {
    printf(String.UTF8.encode(a + '\n', true));
}

export function log_number(a: number): void {
    printf(String.UTF8.encode(a.toString() + '\n'));
}