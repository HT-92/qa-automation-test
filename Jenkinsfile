pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                npm ci
                npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright tests') {
            steps {
                sh '''
                npx playwright test
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}