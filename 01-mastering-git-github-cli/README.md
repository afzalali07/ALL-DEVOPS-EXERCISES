# Exercise 1: Push a text file to GitHub

The file `hello.txt` contains a short sample message. Create an empty GitHub repository named `git-cli-essentials`, then open a terminal in this folder and push that text file.

Set your commit identity if it is not already set:

```bash
git config --global user.name "afzalali07"
git config --global user.email "afzalalikah@gmail.com"
```

Track, commit, and push the text file:

```bash
git init
git add hello.txt
git status
git commit -m "Add sample text file"
git branch -M main
git remote add origin https://github.com/afzalali07/git-cli-essentials.git
git push -u origin main
```

Edit `hello.txt` with another line, then push your change:

```bash
git add hello.txt
git commit -m "Update sample text"
git push
```

GitHub authentication is handled by GitHub; do not put a password or token in this folder.
