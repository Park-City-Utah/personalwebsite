import { returnAPIKey } from "./apikey.js";
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const collapseButton = document.getElementById('collapse-button');
const API_KEY = returnAPIKey();
const resume = `
Information:
Name: ParkerFerguson    
Website: parker-ferguson.com (resume available for download here)                     
Phone number: 702.848.9822 
Email: parker@engineerd.io
DOB: Jan 1, 1984
Citizenship: Canadian 
Visa Status: Permanent Resident (Green Card), United States of America

Links:
  Website link: www.parker-ferguson.com
  LinkedIn link: https://www.linkedin.com/in/parkersferguson
  Medium link: https://parkcity-pf.medium.com

Biography:
"Sr. Software/Automation/Process Engineer, Technical Lead, Manager, Director, SCRUM master, Jira Administrator, Founder & Consultant.
I engage new technologies and tools as often as possible; I am consistent with year round course study, certifications and personal projects.I find teaching an excellent way to establish expertise and to this end I am a published author of multiple articles and tutorials with an audience of 80k and counting.
Interested in blockchain technologies I recently founded an LLC, sourced contract work and acted as consultant and developer on several web3 projects.
I am a graduate of both Business Administration & Computer Science and this is well reflected in my ability to deliver results in and across international teams, on-time and business aligned."



Summary of Qualifications:
- Engineer, Founder & Author passionate about sharing my knowledge of technology with others
- Technical, code contributing leader capable of adding transparency and predictability to development & release lifecycle
- Champion of quality with a history of overcoming systemic challenges & developing a culture of quality within R&D
- Data-driven decision maker with expert ability to communicate with technical & non-technical stakeholders

Skills:
Strategic Planning, Business Continuity, Automation, Risk/Resource/Vendor/Release Management, Onshore/Offshore/ Remote Management, Continuous Integration & Delivery, Testing, Object Oriented Programming (OOP), Behavior Driven Development (BDD), Page Object Model (POM), Scripting, Database, Incident Management, Blockchain, web3, NFT, Scrum master, Process Mapping, Lean Sigma Six, Data & Service virtualization

Languages:
GraphQL, REST, Javascript, Python, Solidity, Node.js, React/React Native, Ruby, Cucumber/Gherkin, Capybara, HTML, JSON, SQL

Tools:
Docker, Bamboo, Jenkins, BitBucket, GitHub, GitLab, Zephyr, Postman, Visual Studio, TestStudio, Sahi, TestRail, FogBugz, JMeter, ChatGPT, Opencover, NCover, Sauce Labs, MySQL, WireShark, Zeek, Volatility, Windows & MAC, Selenium, Appium, AWS (CloudFront, Elastic Beanstalk, SSM, S3, Lambda, EC2, Cert Manager, Route 53, IAM), Ansible, Kafka, LVM, Splunk, New Relic, Tenable, Remix, Zabbix, Nginx, Jira (Administration)

Relevant Experience:
Software Engineer & Founder, EngineeRD
2021 – Current
Projects at Engineerd,
- Blockchain Developer & Technical Lead: Chanlink verified (VRF) randomized generative art NFT deployed to the Ethereum blockchain w/ Python, Brownie, IPFS, Pinata, Solidity (ERC-721).
- Blockchain Developer: POC on-chain NFT game featuring Solidity SVG generation at mint.
- Data Analyst, Programmer & Consultant: Data analysis & automation of quarterly depletion reporting. Marketeam provides marketing & menu services to many of Las Vegas largest properties.
- Developer, Author: Web3 tutorials published in Better-Programming, Coinmonks, The Startup.

Sr. Process Engineer, Caesars Digital
  2021 – Current
  Summary: Assessment, design, implementation & strategic oversight of scalable, data-informed, processes & tooling.
- Developed customer focused DMADV iterative improvement strategies including a tiered support model w/ unified ingestion, consistent data capture & controls reducing both TTR & Major Incidents ~20% YoY (PagerDuty, Slack, Jira)
- Created cross-functional ‘Hyper-care’ support model for top deliverables 2023 (Native iOS, BackOffice, iGaming, Retail)
- Hands-on Jira Administration including automation, reporting & integrations increasing visibility & reducing risk
- Oversaw Vulnerability Management Initiatives (Tenable, Tenable-Jira Integration, 3rd party audits & remediation)
- Authored, tested and implemented Ansible automation plays to recursively find, cross-reference & update eligible IPs during production data center migration, significantly reducing resource requirements and scheduled maintenance time

Interim Director - Quality Engineering & Technical Writing, Kaseya - VSA
	2018 – 2020
	Summary: Internationally relocated to engage flagship product as Director of Quality Engineering.
- Analyzed legacy strategies, identified underleveraged KPIs & retooled Jira to tightly couple & clearly identify the relationship between development, planning & quality outcomes - allowed for data-driven, iterative improvement
- Lead re-design & implementation of automation strategy to cut manual test effort by additional 20% in 3 months
- Reduced manual testing 30% via value based test system matrix & standards, elimination of low-value permutations
- Oversaw identification of 1000+ bugs & retroactive creation of of hundreds of test cases without requirements
- Early release adoption increase of 50% as direct result from an improved ability to release quality software
- Jira Administration & task automation saved Engineering Managers upwards of 10 hours per sprint
- Partnered with DevOps on GDPR compliant data center migration testing saving 4% of sales via fines
- Increased Org-wide visibility via dashboards, real-time Zephyr API test results, email & Zabbix test env status
- Visually reported cost as time spent on several potential points of improvement in SDLC, implemented solutions
- Executive Summit Special Guest: Developed, presented & later implemented Business Unit Alignment Quality Initiative in accordance with the ISO 25010 standard model

Senior SDET (Technical Lead), Kaseya - Identity & Access Management
	2016 – 2018
	Summary: Uniquely effective individual contributor, recognized thought leader, mentor and Technical Lead.
- Developed & implemented BDD & REST API focused test framework for web & mobile testing
- Containerized test executions using Docker, Selenium, GitHub and Jenkins
- Followed Object Oriented design principles including Factories & Page Object Model (POM)
- REST API based setup/teardown strategy for speed, reuse & low maintenance reliability (non-brittle)
- CI (merge) driven testing with Jira Zephyr ‘ZAPI’ real-time test results; email & chat notification via Jenkins
Recipient of excellence in teamwork award and cash prize

Software Development Engineer in Test, Kaseya - AuthAnvil
	2014 – 2016
	Individual contributor with best in Org automation coverage, stability and reporting.  
- Developed overall test strategy for next generation Identity & Access Management products
- Implemented hybrid data driven REST service & CSV keyword scenario based test framework
	
Relevant Personal Projects:
  1. NFT Generative art, smart contract, highly available & secure minting website hosted in AWS - Python, React, AWS S3, Cloudfront, Chainlink. Tutorial published in Coinmonks.
	2022
	2. NLP Sentiment Analysis Twitter data sentiment analysis by keyword. Containerized API driven web application hosted in AWS - React, Tweepy API, Python, Pandas, PyPlot, Elastic Beanstalk, Docker, Express API, Nginx, Redis, PostGres, Travis CI, gitHub.
	2022


Education:
  1. Diploma of Computer Technology - Database, British Columbia Institute of Technology
	2012 – 2014
	2. Bachelor's Degree - Second Degree Program -  Computer Science, Simon Fraser University
	2011 – 2012
	3. Bachelor of Business Administration - General, Thompson Rivers University
	2005 – 2010

Certifications
  2023: Atlassian Certified Professional - Jira
	2021: AWS Certified Developer Associate
	2021: AWS Certified Cloud Practitioner
	2021: Coursera INFOSEC (3 course) Cyber Incident Response Specialization
	2020: SCRUM.org Professional SCRUM Master PSM1
	2018: Certified Bitcoin Professional


Projects:
- Ethereum Whale watcher, uses Ethers.js to monitor new Ethereum blocks and notify users when large Ether transactions occured.
- NLP Sentiment analysis, used Pandas, Tweepy API and NLP Sentiment Analysis tools to develop Python scripts to generate charts indicating sentiment analysis outcomes from Twitter data.
- Generative art NFT project deployed to Ethereum blockchain using Python, Brownie, IPFS storage.

Recommendations:

Gray Knowlton, VP Of Engineering at Kaseya
Gray managed Parker directly
"Parker has had a profound effect on Quality Assurance at Kaseya, bringing the critically important
backbone required of a great QA organization. Parker is detail oriented, data
driven, and strongly principled. His knowledge of QA practice in both manual and
automated environments is outstanding. He has a strong eye for efficiency and
optimization, and did a wonderful job streamlining quality efforts of multiple
products to bring the required effort in line with available resources, and
producing much more reliable results. Most importantly, Parker knows how to build
quality environments that yield high quality, customer friendly software."

Vincent Tessier, Director of Software Engineering at Drips
Parker worked with Vincent in the same group
"Parker is an excellent hands-on leader and manager with great expertise in all aspects of
software quality. We have been working together for almost 3 years and I have seen
him solving very difficult problems with strong time constraints. Parker makes
decisions based on data. His vision, skills and process improvements of QA are
outstanding while providing very detailed reporting of all stages of QA operations.
He is also very focused on automation to improve test coverage in all areas of
software products. His managerial skills are excellent. Overall, I strongly
recommend Parker."

Chris DiStasio, Principal Product Manager at Elastic
Chris was senior to Parker but didn't manage Parker directly
"Parker changed the game for our team! His work and the results that he drove will serve as the foundation for the future success of our development projects. 
Parker will raise his hand to take on a difficult problem (emphasis on *difficult*), get to the source of it, propose a solution, and then *measure and report* the progress in a meaningful and actionable way. Consider this in the context of a large, global engineering organization with a team of heavily matrixed cross-functional stakeholders (along with many other day-to-day challenges) and it's easy for me to recognize that what Parker has accomplished is nothing short of amazing.
Parker is someone you want on your team. I would welcome the opportunity to work with Parker again."
`;

// Initialize prompt, updatable
let initialPrompt = "You are a helpful chatbot that is embedded in a personal website for Parker Ferguson. The webiste has content has job and education history as well as recommendatations from previous colleagues, you have similar information as text in the chat history. You will answer questions about Parker when prompted, in a positive light and with a promotional tone as if you are representing him for a potential job offer. You will try to keep responses to to a maximum of 50 words but less in considered better. Your intiail promp was 'Hello! Do you have any questions about Parker Ferguson?' and you will expect an asnser from the user to start.";

// Initialize conversation history
let conversationHistory = [
  { role: 'system', content: initialPrompt },
  { role: 'system', content: resume },

];

function addMessage(content, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.textContent = content;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Your chatbot logic using the openai object
async function generateResponse(userInput) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: conversationHistory.concat({ role: 'user', content: userInput })
          })
        });
    
        const data = await response.json();
        const responseContent = data.choices[0].message.content;
        return responseContent;
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Sorry, there was an error processing your request.');
  }
}

async function handleUserInput() {
    const userText = userInput.value;
    if (userText.trim() === '') return;
  
    addMessage(userText, 'sent');
    userInput.value = '';
  
    try {
      const response = await generateResponse(userText);
      addMessage(response, 'received');
      conversationHistory.push({ role: 'user', content: userText });
      conversationHistory.push({ role: 'assistant', content: response });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

// Hide the chatbot container and show the icon initially
chatbotToggle.style.display = 'flex';
chatbotContainer.style.display = 'none';

// Expand the chatbot when the icon is clicked
chatbotToggle.addEventListener('click', () => {
  chatbotToggle.style.display = 'none'; // Hide the icon
  chatbotContainer.style.display = 'block';
});

// Collapse the chatbot when the collapse button is clicked
collapseButton.addEventListener('click', () => {
  chatbotToggle.style.display = 'flex'; // Show the icon
  chatbotContainer.style.display = 'none';
});

// Reset the chatbot icon when the chatbot is expanded
chatbotContainer.addEventListener('transitionend', () => {
  if (chatbotContainer.style.display === 'block') {
    chatbotToggle.style.display = 'none'; // Hide the icon
  }
});
  
  
  // Event listener for the "click" event on the "Send" button
  sendButton.addEventListener('click', () => {
    handleUserInput();
  });
  
  // Event listener for the "keydown" event on the user input field
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleUserInput();
    }
  });