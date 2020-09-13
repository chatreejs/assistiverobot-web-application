pipeline {
      agent any
      tools {
          nodejs "NodeJS 12"
      }
      stages {
          stage('Install') {
              steps {
                  bat 'npm install'
              }
          }
          stage('Test') {
              steps {
                echo 'Test Complete'
              }
          }
          stage('Build for production') {
              when {
                  branch: 'master'
              }
              steps {
                  bat 'npm run ng -- build --prod --base-href /app/'
              }
          }
          stage('Build for development') {
              when {
                  branch: 'master'
              }
              steps {
                  bat 'npm run ng -- build --prod --base-href /app-dev/'
              }
          }
      }
}
