pipeline {
  agent none
  stages {
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'Node-9.2.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }
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
