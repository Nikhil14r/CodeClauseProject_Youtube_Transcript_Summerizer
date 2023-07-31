var reserve, sites = {
    "a": "https://try.summari.com/try",
    "b": "https://app.summari.com/my-summari",
    "c": "https://quillbot.com/summarize"
};

// Retrieve data from local storage
chrome.storage.local.get(['key'], (result) => {
    reserve = result.key;

    // Temporary link generator for specific website 'https://uau.li/'
    if (document.location.href === 'https://uau.li/') {
        // Insert text, imitate keyboard press, submit click, wait 1 sec, save link
        document.querySelector('#data').innerHTML = result.key.temporary;
        document.querySelector('#data').dispatchEvent(new Event('input', { bubbles: true }));
        document.querySelector('#btnSubmit').click();
        setTimeout(() => {
            reserve.temporaryLink = "https://" + document.querySelector('#result').innerText;
            chrome.storage.local.set({ key: reserve });
            document.location.href = sites[reserve.site]; // Redirect to the summarizer website
        }, 1000);
    }
    // Text summary for specific website 'https://try.summari.com/try'
    else if (document.location.href === 'https://try.summari.com/try') {
        window.localStorage.clear(); // Clear website local storage

        if (!document.querySelector('#link')) { window.location.reload(); }

        document.querySelector('#link').value = result.key.temporaryLink;
        document.querySelector('#link').dispatchEvent(new Event('input', { bubbles: true }));
        setTimeout(() => { document.querySelector('button').click(); }, 2000);
    }
    // Text summary with logged in account for specific website 'https://app.summari.com/my-summari'
    else if (document.location.href === sites.b) {
        setTimeout(() => {
            document.querySelector("button[data-cy=add-link-button]").click();
            setTimeout(() => {
                document.querySelector("#add-link-input").value = reserve.temporaryLink;
                document.querySelector("#add-link-input").dispatchEvent(new Event('input', { bubbles: true }));
                setTimeout(() => { document.querySelector("#btn-summarize-modal").click(); }, 400);
            }, 400);
        }, 2000);
    }
    // Short duration videos text summary for specific website 'https://quillbot.com/summarize'
    else if (document.location.href === sites.c) {
        setTimeout(() => {
            document.querySelector(".css-nqhs2h").click(); // Enable summary filter by key sentences
            setTimeout(() => {
                let inputText = document.querySelector("div[placeholder='Paste or write about your topic then click the Summarize button.']");
                inputText.innerText = reserve.temporary;
                setTimeout(() => { document.querySelector(".css-hjaote").click(); }, 2000);
            }, 500);
        }, 2000);
    }

    // Enable subtitles if reserve.temporaryLink is set to "!"
    if (reserve.temporaryLink === "!") {
        setTimeout(() => { document.querySelector(".ytp-subtitles-button").click(); }, 2000);
    }
});

// Automation of extension's subtitle retrieval using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener((request) => {
    if (request.target === "content" && request.action === 'refreshTab') {
        document.location.reload(); // Refresh the current tab
    }
});
