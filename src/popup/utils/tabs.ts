export async function getTabs() {
    let tabs = await chrome.tabs.query({url: '<all_urls>'})
    const collator = new Intl.Collator();
    tabs.sort((a, b) => collator.compare(a.title || '', b.title || ''));
    return tabs
}


export async function groupTabs() {
    let tabs = await chrome.tabs.query({url: '<all_urls>'})
    const tabIds = tabs.map((tab) => tab.id).
    filter((value): value is number => value !== undefined);
    if (tabIds.length > 0) {
        const group = await chrome.tabs.group({tabIds: tabIds as [number, ...number[]]});
        await chrome.tabGroups.update(group, {title: "DOCS", color: 'green'});

    }
}