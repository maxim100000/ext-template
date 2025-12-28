<script lang='ts'>
    import {getTabs, groupTabs} from "@/popup/utils/tabs";

    type Tab = chrome.tabs.Tab
let tbs: Tab[] = []
</script>

{#snippet listEntry(tabs, i)}
    <li class="p-1 odd:bg-[#80808030] even:bg-[#ffffff]">
        <a href="/" onclick={async (e) => {
            e.preventDefault()
        tbs = tabs     
            await chrome.tabs.update(tbs[i].id, {active: true})
        }}>
            <h3 class="m-0">{tabs[i].title}</h3>
        </a>
    </li>
{/snippet}


<h1 class="mb-4">Google Dev Docs</h1>

<ul class="list-none ps-0 m-[1rem_0]">
    {#await getTabs() then tab}
    {#each {length: tab.length} as _, i}
    {@render listEntry(tab, i)}
        {/each}
        {/await}
</ul>

<button class="btn" onclick={groupTabs}>Group</button>