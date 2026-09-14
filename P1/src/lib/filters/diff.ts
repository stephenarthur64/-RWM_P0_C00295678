export function diff(x : number, last : number) : number {
    let result: number = 0;

    result = x - last;
    if (result < 0) {
        result = result * -1;
    }

    return result;
}

export function diffs(xs: number[]) : number[] {
    let result : number[] = [];

    for (let i = 0; i < xs.length; i++){
        if (i == 0){
            result[0] = xs[0];
        }
        else {
            result[i] = diff(xs[i], xs[i - 1]);
        }
    }

    return result;
}
