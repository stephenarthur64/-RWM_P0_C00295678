import {collatzMulti as peerCollatz} from 'peer-filter-C00294680';
import {diffs as myDiff} from '$lib/filters/diff';

export function combinedFilter(xs: number[]) : number[]{
    const afterMine = peerCollatz(xs);
    return myDiff(afterMine);
}