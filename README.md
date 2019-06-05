# Facebook Pages Power User Scripts

A collection of scripts to make life easier managing Facebook Pages.

---

# Mark-all-as-Done Snippet
A Chrome snippet to mark all messages and notifications in Facebook Pages Inbox as done.

For anyone who manages multiple pages and does not have the time to hover over each message or notification spamming clicking to clear the queue.

## Steps

1. Open Inbox page in Chrome.
2. Open DevTools (F12).
3. Open `Sources` tab.
4. Open Snippets section (Just below top left of screen, you may need to click the `>>` icon if you don't see it.
5. Click `New Snippet`
6. Paste snippet below.
7. Right-click snippet in left pane, click `Run`.
8. Sit back and watch your messages/notifications disappear.

## Script
```javascript
(function run() {
    let all = document.querySelectorAll('[data-tooltip-content="Mark as done"]');
    if (all.length == 0) return;
    let a = all[0];
    setTimeout(() => {
        a.click();
        run();
    }, 100);
})();
```


### Note
1. This will be in a separate file in this repo. This Readme may not always get updated to the latest version.
2. If your internet is not fast enough, your script may finish before new elements are loaded on the page. In this case, increase time in milliseconds (currently `100`) in the `setTimeout()`.
