// function that returns a license badge based on which license is passed in
const licenseBadgeLinks = require('./licenseBadges');
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing](#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  * 
  
  ## Installation
  To install dependencies, run the following:

  \`
  ${data.installation}
  \`

  ${data.contribute}

  ## Tests

  To Run Tests, run the following:
  \`
  ${data.tests}
  \`

  ## Questions
  Question about the repository? Contact me at [${(data.email)}](mailto:${data.email}). View more of my GitHub Projects at [${data.username}](https://github.com/${data.username})
`;
  // url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];
}

module.exports = generateMarkdown;
