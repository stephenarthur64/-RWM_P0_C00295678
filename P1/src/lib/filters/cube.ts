// Pure functon: cube a single integer
export function cube(x: number) : number {
    return x * x * x;
}

// Map over sequence
export function cubes(xs: number[]) : number[] {
    return xs.map(cube);
}