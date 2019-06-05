(function run() {
    let all = document.querySelectorAll('[data-tooltip-content="Mark as done"]');
    if (all.length == 0) return;
    let a = all[0];
    setTimeout(() => {
        a.click();
        run();
    }, 100);
})();
