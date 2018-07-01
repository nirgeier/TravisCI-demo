
<a target="blank" href="https://travis-ci.org/nirgeier/DevOps">
  <img src="https://api.travis-ci.org/nirgeier/DevOps.svg?branch=master">
</a>  

-----

# Jasmine & Travis-ci demo repo
This repository will demonstarte the following flow:

- Clone a git repository
- Make changes to code and to tests
- Run local tests
- Commit and see the auto build running

### Create accounts
- Create an account on https://github.com
- Go to the demo repository at: https://github.com/nirgeier/TravisCI-demo
- click on the fork and fork the project to your account

### Prepeare TravisCI
- Create an account on https://travis-ci.org
- Log into your TravisCI account
- Sync your github projects to TravisCI
- Mark the repository you wish to build

### Checkout the code
- Login to your google cloud server and open the console or do it on your windows machine
- clone the forked project locally to your computer (git clone...)
- go the the repository folder and edit the readme file and add your name
- add the files, commit and push them back to github

### View the build process in real time
- Go to github and click on the branches tab. Now you should see a yellow dot,
- Click on the yellow dot and you will be redirected to the TravisCI site to view the build process
- When the build is done it will be marked as failed.

### Fixing the code
- Create a new branch based upon master
- Edit the test file under tests folder and remove the tests which are failed
- Add commit and push files to the new branch
- repeate the prevoius section to view if the build is workign or not.
