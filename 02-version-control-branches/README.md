# Exercise 2: Version control and branches

Open `index.html` in a browser and click the button. Use Git to track a change on a branch and merge it back.

```bash
git init
git add .
git commit -m "Add simple HTML and JavaScript page"
git switch -c update-message
```

Change the message in `script.js`, then save that work:

```bash
git add script.js
git commit -m "Update page message"
git switch main
git merge update-message
git log --oneline --graph
```
