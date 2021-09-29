function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

eraseCookie("siteTitle")
eraseCookie("siteFavicon")
eraseCookie("autoTitle")
eraseCookie("autoFavicon")

window.location.reload(false); 
