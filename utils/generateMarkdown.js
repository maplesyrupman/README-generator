// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseStuff = {
  'No license': ['',''],
  'GNU AGPLv3': ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 'https://www.gnu.org/licenses/agpl-3.0.txt'],
  'GNU GPLv3': ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0-standalone.html'],
  'GNU LGPLv3': ['[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 'https://www.gnu.org/licenses/lgpl-3.0-standalone.html'],
  'Mozilla Public License 2.0': ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'https://www.mozilla.org/en-US/MPL/2.0/'],
  'Apache License 2.0': ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://www.apache.org/licenses/LICENSE-2.0'],
  'MIT License': ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT'],
  'Boost Software License 1.0': ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 'https://www.boost.org/LICENSE_1_0.txt'],
  'The Unlicense': ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'https://unlicense.org/'],
}

function renderLicenseBadge(license) {
  return licenseStuff[license][0];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](${licenseStuff[license][1]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseData) {
  return licenseData ?
  `## License

  This is licenced under the ${renderLicenseLink(licenseData)}
  `
  :
  '';
}

const createTableOfContents = (data) => {
  let contents = Object.keys(data).filter(section => section && 
                                          section !== 'confirmOpen' && 
                                          section !== 'githubUsername' && 
                                          section !== 'email' &&
                                          section !== 'title' &&
                                          section !== 'description');

  const tableTitles = {
    installation: 'installation-instructions',
    usage: 'usage-information',
    contribution: 'contributing',
    tests: 'tests',
    contact: 'contact-information'
  }

  tableOfContents = '';
  contents.forEach(section => {
    const sectionTitle = section[0].toUpperCase() + section.slice(1);
    tableOfContents = tableOfContents + `\n* [${sectionTitle}](##${tableTitles[section]})`;
  })
  return tableOfContents + `\n* [Contact Information](##${tableTitles.contact})`;
}

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
## Contributing
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

You can also checkout my [Github](https://github.com/${github})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${data.description}
  ${createInstallationSection(data.installation)}
  ${createUsageSection(data.usage)}
  ${createContributionSection(data.contribution)}
  ${createTestSection(data.tests)}
  ${createContactSection(data.githubUsername, data.email)}
  ${renderLicenseSection(data.license)}
`;
}










module.exports = generateMarkdown;
