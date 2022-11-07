***Agenda***
1.Setting up a Github account
2.Installing and configuring Git
3.Local and Remote Repos
4.Deploying React App on Heroku

--------------------------------------------------------------
download from here git 
https://git-scm.com/download/win

git --version
git version 2.38.1.windows.1

mkdir folderName
cd folderName

git init
Initialized empty Git repository in C:/Users/..../folderName/.git/

create project file

git add .
add all file inside the repo. (if you want to move your file from staging area.)

git status 
check current add file in green color

git commit -m "1st commit"
for commit it (file move to the local repo)

git log
show all previous commit for future ref.

-------------------------------------------------------------

**REMOTE REPO.**

git remote add origin https://github.com/rahul-project/Project-AlmaBetter.git

git remote -v
origin  https://github.com/rahul-project/Project-AlmaBetter.git (fetch)
origin  https://github.com/rahul-project/Project-AlmaBetter.git (push)
"checking purpose"

git push origin master
add file to remote repo in master branch
goto repo-->setting-->collaborator-->add people

-------------------------------------------------------------

git clone https://github.com/rahul-project/Project-AlmaBetter.git
git clone in other friend repo

**make a chage do again**
git add .
add all file inside the repo. (if you want to move your file from staging area.)

git status 
check current add file in green color

git commit -m "commit it"
for commit it (file move to the local repo)

git pull origin master
get repo in your personal local folder after clone get latest change

-------------------------------------------------------------
**Create React App**
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
npx create-react-app resume-building-app
// cd my-app
// npm start