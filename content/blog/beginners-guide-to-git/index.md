---
title: "Beginner Friendly Guide to Git"
date: "2023-10-24T22:12:03.284Z"
description: "Basic introduction of what Git is, and how to use it effectively!"
---

Git is a version control system, that allows you to track changes to files and folders. It is also used to collaborate with other developers, as each feature can have its own branch and then be merged into the main branch. This is very useful as it allows you to work on a feature without affecting the main branch, and then merge the changes when you are ready. Merging occurs when you have completed the feature and carried out adequate testing to make sure that your code changes do not break the main branch (which represents the production code that is used by users).
However, it can be quite confusing to use at first, and there are many different commands to learn.

So, here's my beginner's introduction to Git, with some useful commands to help you get started.

# Accessing a repository
## git clone

`git clone` allows you to clone a remote repository. If you want to create a local copy of the `origin` remote repository on your computer, you can use `git clone origin`. This will create a local copy of the `origin` remote repository on your computer, and will also create a local branch called `main` which will track the `main` branch on the `origin` remote repository.
There are usually 2 ways to clone a repository: via SSH or HTTPS. If you are using SSH, you will need to add your SSH key to your GitHub account. If you are using HTTPS, you will need to enter your GitHub username and password after executing the `git clone` command, and every time you want to push changes to the remote repository.

## git pull

`git pull` allows you to fetch and merge changes from a remote repository. This is useful if you want to update your local repository with the changes that have been made to the remote repository. For example, if you want to update your local repository with the changes that have been made to the `main` branch on the `origin` remote repository, you can use `git pull origin main` to fetch and merge the changes.

# Making changes to a repository

If you are making changes to a repository (git terminology for a folder), there are three core commands you will need to use : `git add`, `git commit` and `git push`
`git add` adds the local changes that you have made. `git commit` adds a message to the local changes, and should explain the changes you have made. A good commit message helps not only you but others understand what changes you have made. `git push` pushes the changes from the local repository to the remote repository (e.g. GitHub, GitLab) along with the commit message.

# Merging changes from one branch to another

## git merge

`git merge` merges the changes from one branch to another. For example, if you have a branch called `feature` and you want to merge the changes from `feature` to `main`, you can use `git checkout main` to switch to the `main` branch, and then use `git merge feature` to merge the changes from `feature` to `main`.
## git fetch
`git fetch` fetches the changes from a remote repository, but does not merge them. This is useful if you want to see the changes that have been made, but do not want to merge them yet. For example, if you want to see the changes that have been made to the `main` branch, you can use `git fetch origin main` to fetch the changes from the `main` branch on the `origin` remote repository.

## git rebase

`git rebase` is similar to `git merge`, but instead of merging the changes from one branch to another, it applies the changes from one branch to another. This is useful when you want to apply the changes from one branch to another, without merging the entire branch. For example, if you have a branch called `feature` and you want to apply the changes from `feature` to `main`, you can use `git checkout main` to switch to the `main` branch, and then use `git rebase feature` to apply the changes from `feature` to `main`.

# Other useful commands

Here are some handy commands to make your life easier.

## git branch

`git branch` allows you to see the branches that are available. `git branch -a` allows you to see both local and remote branches. `git branch -r` allows you to see remote branches only. `git branch -vv` allows you to see the branches that are available, along with the commit hash of the last commit on each branch.

## git checkout

`git checkout` allows you to switch branches. For example, if you want to switch to the `main` branch, you can use `git checkout main` to switch to the `main` branch. You can also use `git checkout -b` to create a new branch and switch to it at the same time. For example, if you want to create a new branch called `feature` and switch to it, you can use `git checkout -b feature`.
## git stash

`git stash` allows you to save your changes without committing them. This is useful if you want to switch branches, but don't want to commit your changes yet. You can then use `git stash pop` to apply the changes to the current branch.
For example, if I want to checkout onto another branch, but have unsaved changes on my current branch that I do not want to commit yet, I can use `git stash` to save the changes, then `git checkout` to switch branches. When I want to return to my original branch, I can use `git checkout` to switch back, and then use `git stash pop` to retrieve the unsaved changes I had made.

## git log --oneline

`git log` allows you to see the commit history of the current branch. `git log --oneline` summarises the commit history onto one line, so is useful to see the commit history in a more concise format. You can also see the commit hash, which is useful for cherry-picking if needed.

## git cherry-pick

`git cherry-pick` allows you to select the commit you want to apply to the current branch. This is useful if you want to apply a commit from another branch, but do not want to merge the entire branch. To access the commit hash, you can use `git log --oneline` to get the commit hash.
If I want to apply the commit with the hash `123456` to my current branch, I can use `git cherry-pick 123456` to apply the commit. You can also cherry-pick multiple commits by listing the commit hashes one after another, e.g. `git cherry-pick 123456 789012`.

## git reset

`git reset` allows you to reset the current branch to a previous commit. This is useful if you want to undo a commit, or if you want to undo a merge. There are three different types of reset: `--soft`, `--mixed` and `--hard`.
`--soft` will reset the branch to the previous commit, but will keep the changes in the staging area. `--mixed` will reset the branch to the previous commit, and will remove the changes from the staging area.
`--hard` will reset the branch to the previous commit, and will remove the changes from the staging area and the working directory.

## git revert

`git revert` allows you to revert a commit. This is useful if you want to undo a commit, but do not want to reset the branch to a previous commit. For example, if you want to undo a commit that has already been pushed to a remote repository, you can use `git revert` to undo the commit, and then push the changes to the remote repository.
