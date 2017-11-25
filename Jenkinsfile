pipeline {
  agent none
  stages {
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'Node-7.4.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }
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
