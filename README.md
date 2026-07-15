# 🚀 Playwright Test Automation Framework with Jenkins & Docker

A production-ready UI Automation Testing Framework built using **Playwright**, **JavaScript**, **Docker**, and **Jenkins CI/CD**. The project automates web application testing, executes tests inside Docker containers, publishes HTML reports through Jenkins, and supports continuous integration using GitHub.

---

## 🏷️ Badges

![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-red?logo=jenkins)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

---

# 📌 Project Overview

This project demonstrates an end-to-end **Test Automation CI/CD Pipeline**.

It includes:

- UI Automation using Playwright
- Cross-browser Testing
- Dockerized Test Execution
- Jenkins Pipeline Integration
- HTML Report Generation
- Artifact Archiving
- GitHub Source Control Integration
- Docker Hub Image Publishing

---

# 🛠️ Tech Stack

- Playwright
- JavaScript
- Node.js
- Docker
- Jenkins
- GitHub

---

# 📂 Project Structure

```
Test-Automation-Using-Playwright
│
├── tests/
├── screenshots/
├── playwright-report/
├── test-results/
├── Dockerfile
├── Jenkinsfile
├── package.json
├── package-lock.json
├── playwright.config.js
├── .dockerignore
└── README.md
```

---

# 🚀 Features

- Automated UI Testing
- Login Validation
- Inventory Validation
- Checkout Testing
- Responsive UI Testing
- Sorting Validation
- Cross-browser Execution
- HTML Reports
- Docker Support
- Jenkins CI/CD Pipeline
- Artifact Archiving
- Docker Hub Image

---

# 🐳 Docker Image

Pull the Docker image directly from Docker Hub.

```bash
docker pull premkumarv23/playwright-tests:v1.0
```

Run the Docker container:

```bash
docker run premkumarv23/playwright-tests:v1.0
```

Docker Hub Repository:

https://hub.docker.com/r/premkumarv23/playwright-tests

---

# 🔨 Build Docker Image

Clone the repository

```bash
git clone https://github.com/PremKumar-V23/Test-Automation-Using-Playwright.git
```

Go to the project folder

```bash
cd Test-Automation-Using-Playwright
```

Build the Docker image

```bash
docker build -t playwright-tests .
```

Run the container

```bash
docker run playwright-tests
```

---

# ▶️ Run Locally

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Execute all tests

```bash
npx playwright test
```

Run a specific browser

```bash
npx playwright test --project=chromium
```

Open HTML report

```bash
npx playwright show-report
```

---

# ⚙️ Jenkins Pipeline

The Jenkins pipeline performs the following steps automatically:

1. Checkout source code from GitHub
2. Build Docker Image
3. Run Playwright Tests inside Docker
4. Generate Playwright HTML Report
5. Archive Test Results
6. Publish HTML Report
7. Display Build Status

---

# 🏗️ CI/CD Workflow

```
Developer
    │
git push
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ▼
Checkout Source Code
    │
    ▼
Build Docker Image
    │
    ▼
Run Playwright Tests
    │
    ▼
Generate HTML Report
    │
    ▼
Archive Test Results
    │
    ▼
Publish HTML Report
```

---

# 📸 Screenshots

Create an **images** folder and add screenshots like:

```
images/
│
├── jenkins-success.png
├── playwright-report.png
├── docker-desktop.png
└── dockerhub.png
```

Reference them:

```markdown
## Jenkins Pipeline

![Jenkins Pipeline](images/jenkins-success.png)

## Playwright HTML Report

![Playwright Report](images/playwright-report.png)

## Docker Desktop

![Docker Desktop](images/docker-desktop.png)

## Docker Hub

![Docker Hub](images/dockerhub.png)
```

---

# 📦 Docker Commands

Build Image

```bash
docker build -t playwright-tests .
```

List Images

```bash
docker images
```

Run Container

```bash
docker run playwright-tests
```

List Containers

```bash
docker ps -a
```

Push Image

```bash
docker push premkumarv23/playwright-tests:v1.0
```

Pull Image

```bash
docker pull premkumarv23/playwright-tests:v1.0
```

---

# 📊 Test Reports

Playwright automatically generates:

- HTML Report
- Screenshots
- Videos
- Trace Files

View the report using:

```bash
npx playwright show-report
```

---

# 💼 Resume Highlights

### Playwright Automation Framework with Jenkins & Docker

- Developed a production-ready UI Automation Testing Framework using Playwright and JavaScript.
- Containerized the automation framework using Docker.
- Built CI/CD pipelines using Jenkins Declarative Pipelines.
- Integrated GitHub SCM with Jenkins for automated builds.
- Published Playwright HTML Reports and archived test artifacts.
- Published Docker images to Docker Hub for easy distribution.
- Implemented cross-browser automation testing and responsive UI validation.

---

# 👨‍💻 Author

**Prem Kumar**

🎓 MSc Information Technology

🔗 GitHub: https://github.com/PremKumar-V23

🐳 Docker Hub: https://hub.docker.com/r/premkumarv23/playwright-tests

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.