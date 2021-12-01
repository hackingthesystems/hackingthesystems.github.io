
# Icon Changer
save the following code in the URL of a bookmark or drag the following code to your bookmark bar

main controller:
`javascript:(function(){let l=document.createElement("script");l.src="https://hackingthesystems.github.io/js/liveupdate_namesite.js";document.body.appendChild(l);}());void 0` 

reset config
`javascript:(function(){let l=document.createElement("script");l.src="https://hackingthesystems.github.io/js/liveupdate_deletecookie.js";document.body.appendChild(l);}());void 0`

# The Annoying Bookmarklet
Copy the below code and make a new bookmark (CTRL+D). Then edit the bookmark's URL address to the below code. 

```js
javascript:fetch("https://raw.githubusercontent.com/hackingthesystems/TheAnnoyingBookmarklet/main/public.js").then((res) => res.text().then((t) => eval(t)))
```
