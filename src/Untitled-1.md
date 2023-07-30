\documentclass[]{resume-openfont}

\pagestyle{fancy}
\resetHeaderAndFooter

%--------------------------------------------------------------
% Convenience command - make it easy to fill template

% Create job position command. Parameters: company, position, location, when
\newcommand{\resumeHeading}[4]{\runsubsection{\uppercase{#1}}\descript{ | #2}\hfill\location{#3 | #4}\fakeNewLine}

% Create education heading. Parameters: Name, degree, location, when
\newcommand{\educationHeading}[4]{\runsubsection{#1}\hspace*{\fill}  \location{#3 | #4}\\
\descript{#2}\fakeNewLine}

% Create project heading. Parameters: Name, link, Tech stack
\newcommand{\projectHeading}[3]{\Project{#1}{#2}
\descript{#3}\\}

\newcommand{\projectHeadingWithDate}[4]{\Project{#1}{#2}
\descript{#3 | #4}\\}

% Parameters: courses
\newcommand{\courseWork}[1]{\textbf{Coursework:} #1}

% Parameters: courses
\newcommand{\teacherAssistant}[1]{\textbf{Teacher Assistant (TA):} #1}
 
%--------------------------------------------------------------
\begin{document}

%--------------------------------------------------------------
%     Profile
%--------------------------------------------------------------
\newcommand{\yourName}{Muhammad Awais Niaz}
% How you want it to show up on the resume
\newcommand{\yourWebsite}{website.com}
% vs how you want it to show up. If it's the same you can just replace "\yourWebsiteLink" with "yourWebsite"
\newcommand{\yourWebsiteLink}{https://website.com}
\newcommand{\yourEmail}{awaisniaz1995@gmail.com}
\newcommand{\yourPhone}{+923318817469}
\newcommand{\githubUserName}{https://github.com/awaisniaz}
\newcommand{\linkedInUserName}{https://www.linkedin.com/in/awais1995/}

% An alternate profile section 
% \alignProfileTable
% \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
%     \ralewayBold{\href{\yourWebsiteLink}{\Large \yourName}} & 
%     Email : \href{mailto:\yourEmail}{\yourEmail}
%     \\
%     \href{https://github.com/\githubUserName}{GitHub://\githubUserName} & 
%     Mobile : \yourPhone
%     \\
%     \href{https://www.linkedin.com/in/\linkedInUserName}{LinkedIn://\linkedInUserName} & Website : \href{\yourWebsiteLink}{\yourWebsite}
%     \\
% \end{tabular*}

\begin{center}
    \Huge \scshape \latoRegular{\yourName} \\ \vspace{1pt}
    \small \href{mailto:\yourEmail}{\underline{\yourEmail}}  $|$  \yourPhone $|$ 
    \href{https://www.linkedin.com/in/\linkedInUserName}{\underline{linkedIn/\linkedInUserName}} $|$
    \href{https://github.com/\githubUserName}{\underline{github/\githubUserName}} 
    % $|$ \href{\yourWebsiteLink}{\underline{\yourWebsite}}
\end{center}

%--------------------------------------------------------------
%     Education
%--------------------------------------------------------------
\section{Education}
% Put school first and degree second if your school is reputable
\educationHeading{BS. Honours Computer Science}{University of Wah}{Wah Cantt,Pakistan}{Sep 2018}

\educationHeading{Intermediate- ICS}{Fazaia Degree College}{PAC Kamra, Pakistan}{Aug, 2014}

% \teacherAssistant{World Wide Web Information Systems Development}
% \courseWork{Data Structures and Algorithms; Operating Systems;  Computer Security; Software Testing; Advanced Networking; Big Data Analytics}
\sectionsep

%--------------------------------------------------------------
%     Skills
%--------------------------------------------------------------
\section{Skills}
\begin{skillList}
    \singleItem{Languages:}{JavaScript, Python, SQL}
    \\
    \singleItem{Development:}{React, JavaScript, TypeScript, HTML/CSS,Next.js,Nest.js,Vue.js, React Native,Socket.io, Web3.js}
    \\
    \singleItem{Technology:}{Git, AWS, Docker, Apache, \LaTeX, MongoDB, Redis, Elastics Search, Kafka, MYSQL}
\end{skillList}

% A more concise alternate 
% \begin{skillList}
%     \doubleItem{Languages:}{Java, C++, Python, C\#, PHP, Prolog, Bash, C, Racket}%
%     {Databases:}{SQL, MongoDB, Neo4j, DynamoDB}
%     \\
%     \doubleItem{Web Development:}{JavaScript, TypeScript, React, HTML/CSS}
%     {Technology:}{Git, AWS, GCP, Azure, Docker, \LaTeX}%
% \end{skillList}
%--------------------------------------------------------------
%     Experience
%--------------------------------------------------------------
\section{Work Experience}
\resumeHeading{Mwan Pvt Ltd}{Full Stack Developer}{Islamabad, Pakistan}{Jun 2021 – Present}
\begin{bullets}
    \item Designing  and implementation a Modern UI using \textbf{React} and \textbf{TypeScript,Nextjs and Vue.js} and Tailwindcss.
     \item Development of API's using Nodejs,Nestjs and some time with Python (Django) using graphql and Rest Design Pattern
    \item  Integration a Backend with Frontend also work with third Party services such Aws (s3,SQS,Sns),Firebase,Mapbox.
    \item Communicate with blockchain to read and write the data on blockchain.
    \item Performance Optimization of Both Frontend and Backend.
\item Also working with Ether.js,Web3.js and Socket.io.
\item Also Work on React Native.
\item CICD pipeline using Jenkins and Docker.
\end{bullets}
\sectionsep

\resumeHeading{Target Energy Solutions}{Full Stack Developer}{Islamabad, Pakistan}{Nov 2019 – Jun 2021}
\begin{bullets}
    \item Designing  and implementation a Modern UI using \textbf{React} and \textbf{TypeScript,Nextjs with Bootstrap and css}.
     \item Development of API's using Nodejs,Express.js using graphql and Rest Design Pattern
    \item  Integration a Backend with Frontend also work with third Party services such Aws ,Firebase,Mapbox.
    \item Get the data from backend and Visualiza the data on map.
    \item Performance Optimization at Frontend .
\item Dockerize the System
\end{bullets}
\sectionsep

\resumeHeading{TechInFlux.Pvt}{Mern Stack Developer}{Rawalpindi,Pakistan}{Jun 2019 - Nov 2019}
\begin{bullets}
    \item Designing of UI for web and Mobile using React,React Native.
    \item API's Integration with Frontend.
\item  Code Debugging
\item Worked with Map
\item  Worked with Third party API's
\end{bullets}
\sectionsep
%--------------------------------------------------------------
%     Projects
%--------------------------------------------------------------
\section{Projects}

\projectHeading{Ex-Sports Marketplace}{}{Javascript, Node.js, React.js, MongoDB, AWS S3, Socket.io}
Ex-Sport is a cutting-edge blockchain-based NFT marketplace, offering users the ability to buy and sell NFTs from three diverse blockchain networks. Witness live gaming events organized by our skilled Exs Team and enjoy playing various games on the platform. Join us to explore the future of NFTs and immerse yourself in an exciting world of decentralized gaming.\\
\sectionsep
  
\projectHeading{Navigate Marine}{https://github.com/Aarif123456/image\_repository}{Typescript,React.js,Nodejs,AWS S3,Ec2,Mapbox}
Navigate Marine is a web based system that allow the user to track their shipment in a Sea and also analyze that how many shipments currently in a single route.Also User can analyze the capacity of Smelters in different regions and Compare with Each Other.\\
\sectionsep

\projectHeading{Virtual Event Management System}{}{React,Python,Nodejs,AWS Services,MongoDb,Socket.io,Firebase}
The Virtual Event Management System is an advanced platform that facilitates seamless organization and execution of virtual events. It streamlines event planning, attendee registration, and provides interactive tools for engaging virtual experiences, making it the ideal solution for hosting successful online events. User can also Chat with other attendees
\sectionsep

\projectHeading{SEHAHUB MEDICAL SUPPLY CHAIN SYSTEM
}{}{Javascript,React.js,Nodejs,Tailwindcss}
SEHAHUB is a robust medical supply chain system operating in Dubai, ensuring efficient and reliable distribution of medical resources. It streamlines the procurement and delivery process, contributing to the seamless functioning of the healthcare industry in the region.\\
\sectionsep

\projectHeading{Prisampay Wallet}{}{React,React Native,Typescipt,Nodejs,Web3.js}
Prisampay Wallet is a secure blockchain wallet that empowers users to effortlessly send and receive tokens from their digital wallet. With its user-friendly interface and advanced security features, Prisampay Wallet ensures seamless and safe transactions within the blockchain network, providing users with a convenient and reliable platform for managing their digital assets.\\
\sectionsep
\projectHeading{Jobboard}{}{React,React Native,Typescipt,Nodejs,Python}
The JobBoard is a dynamic online platform connecting job seekers with a diverse range of employment opportunities. Employers can post job listings, while candidates can explore and apply for positions tailored to their skills and aspirations. With its user-friendly interface and powerful search tools, JobBoard streamlines the job search process, making it easier for employers to find top talent and job seekers to discover their dream careers.\\
\sectionsep

%------------------------------------------------
% Links
%------------------------------------------------

\section{Links} 

Github:// \href{https://github.com/awaisniaz}{\bf Awaisniaz} \\
LinkedIn:// \href{https://www.linkedin.com/in/awais1995/}{\bf awais1995} \\
Medium:// \href{https://medium.com/@awaisniaz1995}{\bf awais1995} \\
Hacker Rank:// \href{https://www.hackerrank.com/awaisniaz1995?hr_r=1}{\bf awais1995} \\
LeetCode:// \href{https://leetcode.com/awais_niaz/}{\bf awais1995} \\
Stack Overflow:// \href{https://stackoverflow.com/users/12704097/awais-niaz}{\bf awais1995} \\


\sectionspace % Some whitespace after the section

% Example using bullets and dates 
% \projectHeadingWithDate{Hogwart\textquotesingle{}s Library Management System}{https://github.com/Aarif123456/hogwartslibrary}{PHP, JavaScript, HTML, CSS, MySQL}{Aug 2019}
% \begin{bullets}
    % \item A full-stack library management system, where users can manage books and holds on their accounts. Users can search the library\textquotesingle{}s catalogue, which has every book mentioned in the Harry Potter series. The system distinguishes between 4 users. For examples, librarians who can also check or return books on behalf of users.\\
% \end{bullets}
% \sectionsep

%--------------------------------------------------------------
%     My Profiles
%--------------------------------------------------------------
  

\end{document}