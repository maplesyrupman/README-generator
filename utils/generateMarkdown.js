// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const createInstallationSection = installationData => {
  return installationData ? 
  `
## Installation Instructions
${installationData}
  `
  :
  ''
}

const createUsageSection = usageData => {
  return usageData ?
  `
## Usage Information
${usageData}
  `
  :
  ''
}

const createContributionSection = contributionData => {
  return contributionData ?
  `
## Contribution Information
${contributionData}
  `
  :
  ''
}

const createTestSection = testData => {
  return testData ?
  `
## Tests
${testData}
  `
  :
  ''
}

const createContactSection = (github, email) => {
  return `
## Contact Information
If you'd like to get in touch, feel free to send me an email at ${email}

You can also checkout my [Github][https://github.com/${github}]
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ${createInstallationSection(data.installation)}
  ${createUsageSection(data.usage)}
  ${createContributionSection(data.contribution)}
  ${createTestSection(data.tests)}
  ${createContactSection(data.githubUsername, data.email)}
`;
}










module.exports = generateMarkdown;
