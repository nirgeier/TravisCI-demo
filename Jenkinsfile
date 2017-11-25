pipeline {
  agent none
  stages {
    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'node_modules/karma/bin/karma start karma.conf.js --single-run'
      }
    }
  }
}