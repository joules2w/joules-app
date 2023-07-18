const constants = [
    { 
        id : 1, 
        title : 'Interactive Developer', 
        description : 'Interactive Developer', 
        skills : ['JavaScript', 'node.js'], 
        experience : '4 Years', 
        location : 'Delhi', 
        salary : '4 to 6', 
        eligibility : 'Interactive developer' 
        },
    { 
        id : 2, 
        title : 'Technical Support Engineer', 
        description : 'bpo', 
        skills : ['Excellent Communication Skill Working with US Client'], 
        experience : 'Fresher/ Experience Years', 
        location : 'Bangalore', 
        salary : '1.5 to 2.3', 
        eligibility : 'bpo' 
    },
    { 
        id : 3, 
        title : 'Technical Support Engineer', 
        description : 'Excellent understanding of the technical fundamentals of the Internet. You should have a solid knowledge of internet protocols such as SSH, FTP, SFTP & HTTP,The ability to be a good listener, and to really understand a customer problem or question and help them solve it. Excellent writing skills. Most of your work will be written (email, documentation, etc.). Excellent telephone mannerisms. Some support will be provided over the phone (via our VoIP system) 2-3 years previous experience in a technical support role', 
        skills : ['Should have  above 65% in acadamic', 'Good programming language'], 
        experience : 'Fresher / 2 Years', 
        location : 'Bangalore', 
        salary : '1.5 to 5.4', 
        eligibility : 'Helping customers solve technical issues with our widgets. Answering questions from customers and prospective customers about the features and capabilities of our widgets. Developing customer-facing documentation for our website on an as-needed basis. Communicating customer needs and wishes to our development and engineering staff.' 
    },
    { 
        id : 4, 
        title : 'Software Engineer', 
        description : 'The engineer trainee is responsible for managing the data and all the information related to the particular project he/ she is assigned to. The trainee engineer is responsible for completion of all the assigned tasks in the given deadline. All tasks assigned are for the trainees own learning.', 
        skills : ['Should have above 65% in academic', 'good programming language knowledge'], 
        experience : '0 Years', 
        location : 'Bangalore', 
        salary : '1.5 to 2 LPA', 
        eligibility: 'The trainee is responsible for reporting to his/ her mentor after the completion of each and every task. The engineer trainee is responsible for preparing a report in how the training has helped him/ her in understanding the dos and don’ts of the sector.' 
    },
    { 
        id : 5, 
        title : 'Peoplesoft FSCM', 
        description : '"Qualifications Basic • Bachelors degree or foreign equivalent required from an accredited institution. Will also consider three years of progressive experience in the specialty in lieu of every year of education. • At least 8 years of experience with IT. • At least 7 years of relevant experience. Preferred * At least 7 years of PeopleSoft development experience in PeopleSoft Financial applications. * Strong functional expertise in PeopleSoft Accounts Payable, eProcurement, purchasing & Asset Management modules. Accounts Payables knowledge is must. * Expertise in Application Designer, Application Packages, People Code, Application Engine, Approval Workflow Engine (AWE). * Experience in working on inbound / outbound interfaces is required. * Expertise in Integration tools i.e., Integration Broker, Web services, Component Interface, File Layout is must. * Expertise in Reporting tools i.e., SQR, XML Publisher, PS Query. * Debug and optimize SQL statements within Query, SQR, and Application Engine * Developed conversions, interfaces, extensions, customizations and reports, to address client requirement in accordance with the industry best practices * Experience in creating the Technical Design and Test case documents. * Must have working knowledge of Accounting and financials concepts like VAT, Sales and USE tax etc. * Must have strong communication skills and an ability to communicate at all levels within the organization. * Ability to work in team in diverse/ multiple stakeholder environment * Experience and desire to work in a Global delivery environment "', 
        skills : ['PeopleSoft FSCM'], 
        experience : '5+ Years', 
        location : 'Bangalore', 
        salary : '5 to 10 LPA', 
        eligibility : 'Planning, Communication and Leadership skills necessary. PeopleSoft Project Costing, Asset Management and Grants functional subject matter expertise is required. Ability to review Functional and Technical solutions with Development and Solutions team and provide feedback. Should have service oriented and customer focused approach Experience in offshore/onsite model. Interact with Functional and Technical Team to resolve issues & conflicts as needed. Knowledge of requirement-gathering methodologies and Software Development Lifecycle (SDLC). Commitment to delivering a high quality work product. Knowledge of Project Costing, Asset Management and Grants Modules is desired.' 
    },
    { 
        id : 6, 
        title : 'Pega development', 
        description : '4+ years of relevant Pega development experience. Overall experience should be 5+ years.CSSA Certification required.', 
        skills : ['Pega', 'CSSA Certification'], 
        experience : '4+ Years', 
        location: 'Bangalore', 
        salary : '5 to 10 LPA', 
        eligibility : '• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements.' 
    },
    { 
        id : 7, 
        title : '.Net Developer', 
        description: '1. Analyzes business/ functional requirements and prepares development project schedule, tasks, and estimates. 2. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 3. Accountable for design and code reviews, and resolution of defects. 4. Leads development and integration environment setup. 5. Lead configuration management including source code control, build automation and development of deployment scripts and instructions. 6. Provides on-going support to business and content teams managing sites on strategic technology platform. 7. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 8. Accountable for design and code reviews, and resolution of defects. 9. Leads development and integration environment setup.', 
        skills : ['C#', 'Asp.net', 'HTML5', 'wcf', 'wpf', 'css3'], 
        experience : '7+ Years', 
        location : 'Pune', 
        salary : '8 to 10 LPA', 
        eligibility : '• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements.' 
    },
];  

const referrals = [
    { 
        id : 1, 
        jobid : 101, 
        name : 'Rakshit', 
        email : 'rakshit@gmail.com', 
        mobilenumber : 9876543210, 
        totalexperience : 3 
    },
    { 
        id : 2, 
        jobid : 102, 
        name : 'Jeevan', 
        email : 'jeevan@gmail.com', 
        mobilenumber : 9865986598, 
        totalexperience : 0 
    },
    { 
        id : 3, 
        jobid : 103, 
        name : 'Vishwas', 
        email : 'vishwas@gmail.com', 
        mobilenumber : 8585858585, 
        totalexperience : 1 
    },
    { 
        id : 4, 
        jobid : 104, 
        name : 'Santosh', 
        email : 'santosh@gmail.com', 
        mobilenumber : 9513572584, 
        totalexperience : 9 
    },
    { 
        id : 5, 
        jobid : 105, 
        name : 'Prajwal', 
        email : 'prajwal@gmail.com', 
        mobilenumber : 8523694173, 
        totalexperience : 6 
    },
    { 
        id : 6, 
        jobid : 106, 
        name : 'Sharan', 
        email : 'sharan@gmail.com', 
        mobilenumber : 6583241597, 
        totalexperience : 5 
    }
];

const ticket = [
    {
        id : 1,
        priority : 'High',
        heading : 'testing',
        ticketdescription : 'Testing',
        assigned : '5 Jyly 2023',
        createdOn : '25 June 2023',
        createdBy : 'Arjun',
        status : 'Open'
    },
    {
        id : 2,
        priority : 'Low',
        heading : 'Software Tester',
        ticketdescription : "Software test engineer",
        assigned : '10 June 2023',
        createdOn : '10 May 2023',
        createdBy : 'Harish',
        status : 'Open'
    },
    {
        id : 3,
        priority : 'Medium',
        heading : 'Developer',
        ticketdescription : 'Android Developer',
        assigned : '10 Jan 2022',
        createdOn : '30 May 2022',
        createdBy : 'Pramod',
        status : 'Reopen'
    }
]

   


export { constants, referrals, ticket };