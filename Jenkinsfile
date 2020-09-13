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
                  branch 'master'
              }
              steps {
                  bat 'npm run ng -- build --prod --base-href /app/'
              }
          }
          stage('Build for development') {
              when {
                  branch 'dev'
              }
              steps {
                  bat 'npm run ng -- build --prod --base-href /app-dev/'
              }
          }
          stage('Deploy for production') {
              when {
                  branch 'master'
              }
              steps {
                  bat 'appcmd stop apppool /apppool.name:\"Toktak Web App\"'
                  bat 'copy .\\dist\\website D:\\Toktak-Web-App\\production'
                  bat 'copy .\\web.config D:\\Toktak-Web-App\\develop\\web.config'
                  bat 'appcmd start apppool /apppool.name:\"Toktak Web App\"'
              }
          }
          stage('Deploy for development') {
              when {
                  branch 'dev'
              }
              steps {
                  bat 'appcmd stop apppool /apppool.name:\"Toktak Web App Dev\"'
                  bat 'copy .\\dist\\website D:\\Toktak-Web-App\\develop'
                  bat 'copy .\\web.development.config D:\\Toktak-Web-App\\develop\\web.config'
                  bat 'appcmd start apppool /apppool.name:\"Toktak Web App Dev\"'
              }
          }
      }
}
