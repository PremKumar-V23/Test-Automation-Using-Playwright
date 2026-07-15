pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'df631d0e-151f-48d8-a295-57cb13da26a2',
                    url: 'https://github.com/PremKumar-V23/Test-Automation-Using-Playwright.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t playwright-tests .'
            }
        }

        stage('Run Tests in Docker') {
            steps {
                bat '''
                    docker run --rm ^
                    -v "%WORKSPACE%\\playwright-report:/app/playwright-report" ^
                    -v "%WORKSPACE%\\test-results:/app/test-results" ^
                    playwright-tests
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**', fingerprint: true

            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }

        success {
            echo 'Build Success'
        }

        failure {
            echo 'Build Failed'
        }
    }
}
