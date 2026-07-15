pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git ...
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t playwright-tests .'
            }
        }

        stage('Run Tests in Docker') {
            steps {
                bat 'docker run --rm -v "%CD%:/app" playwright-tests'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**'
            publishHTML(...)
        }
    }
}
