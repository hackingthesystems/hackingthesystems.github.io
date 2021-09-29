(function () {
    const script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.type = 'text/javascript';
    script.addEventListener('load', () => {
        console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
    });
    document.head.appendChild(script);
})();

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

if (location.protocol == 'https:') {
    //change favicon
    siteIco = getCookie("siteFavicon")
    autoFavicon = getCookie("autoFavicon")
    if (siteIco) {
        if (autoFavicon) {
            changeFavicon(autoFavicon)
        } else {
            let choice;
            choice = prompt("Previously saved icon detected, would you like to use it? \n\n 'Y' for Yes \n\n 'N' for No")
            if (choice === "Y") {
                changeFavicon(siteIco)
                let auto;
                auto = prompt("Would you like to automatically set the favicon without prompt? To change it, you will have to use the external bookmarklet to remove the automatic setting. \n\n 'Y' for Yes \n\n 'N' for No")
                if (auto === "Y") {
                    setCookie("autoFavicon", siteIco, 365)
                }
            } else if (choice === "N") {
                let url;
                url = prompt("Please enter the URL you wish to mask this page as. Some websites may not work, working on a fix soon. Example: google.com", "google.com");
                iconURL = "https://" + url + "/favicon.ico"
                changeFavicon(iconURL);
                setCookie("siteFavicon", iconURL, 365)
            } else {
                alert('Invalid input received. Skipped Favicon.')
            }
        }
    } else {
        let url;
        url = prompt("Please enter the URL you wish to mask this page as. Some websites may not work, working on a fix soon. Example: google.com", "google.com");
        iconURL = "https://" + url + "/favicon.ico"
        changeFavicon(iconURL);
        setCookie("siteFavicon", iconURL, 365)
    }

    //change title (thanks to cors restrictions i cant make it automatically detect and change the title)
    siteTitle = getCookie("siteTitle")
    autoTitle = getCookie("autoTitle")
    if (siteTitle) {
        if (autoTitle) {
            document.title = autoTitle
        } else {
            let choice;
            choice = prompt("Previously saved title detected, would you like to use it? \n\n 'Y' for Yes \n\n 'N' for No")
            if (choice === "Y") {
                document.title = siteTitle
                let auto;
                auto = prompt("Would you like to automatically set the title without prompt? To change it, you will have to use the external bookmarklet to remove the automatic setting. \n\n 'Y' for Yes \n\n 'N' for No")
                if (auto === "Y") {
                    setCookie("autoTitle", siteTitle, 365)
                }
            } else if (choice === "N") {
                let title;
                title = prompt("Please enter the title of the page. (Because of internet regulations I am unable to make this part automatic -- yet.)", "Google")
                document.title = title
                setCookie("siteTitle", title, 365)
            } else {
                alert('Invalid input received. Skipped Title.')
            }
        }
    } else {
        let title;
        title = prompt("Please enter the title of the page. (Because of internet regulations I am unable to make this part automatic -- yet.)", "Google")
        document.title = title
        setCookie("siteTitle", title, 365)
    }


} else {
    alert('This website is not using HTTPS protocol. You can tell by the domain having "https://" not "http://".')
}
