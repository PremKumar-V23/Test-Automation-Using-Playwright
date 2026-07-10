pipeline {
    agent any
    
    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select the browser'
        )
    }
    environment{
        ENVIRONMENT = "QA"
        TEAM = "Automation"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Check Environment Variable') {
            steps {
                echo "Selected Browser: ${params.BROWSER}"
                bat "echo ${params.BROWSER}"
                bat 'echo %ENVIRONMENT%'
                bat 'echo %TEAM%'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat "npx playwright test --project=${params.BROWSER}"
            }
        }
    }
    post {
        always{
            echo "Archiving Playwright reports..."
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', fingerprint: true
            publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Report'
        ])
        }
        success{
            echo 'Build Success'
        }
        failure{
            echo 'Build Failed'
        }
    }
}

