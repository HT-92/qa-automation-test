pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root'
        }
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install Playwright browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}