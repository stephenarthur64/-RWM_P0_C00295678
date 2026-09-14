<script lang="ts">
    import {combinedFilter} from '$lib/filters'
    let raw = $state('1 3 5 7 9 999');
    let input = $derived(
        raw.trim().split(/\s+/).filter(Boolean).map(Number)
    );
    let output = $derived(combinedFilter(input));
</script>

<h1>Combined (peer to mine)</h1>
<label>Input<input bind:value={raw}/></label>
<p>Output: {output.join(' ')}</p>