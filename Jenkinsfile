pipeline {
  agent {
    docker {
      image 'node:7-alpine' 
      args '-p 3000:3000' 
      }
    }
  stages {
    stage('Checkout') {
      echo 'Getting source code...'
      checkout scm
    }
    stage('Build') {
      echo 'Building dependencies...'
      sh 'npm i'
    }
    stage('Test') {
      steps {
        sh 'node_modules/karma/bin/karma start karma.conf.js --single-run'
      }
    }
  }
}
