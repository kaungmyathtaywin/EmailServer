[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Email Server

<!-- Project Overview  -->

## Project Overview
This project is a serverless cloud API for sending emails at my portfolio [website](https://kaungmyathtaywin.com). It leverages Node.js, Express.js, and Nodemailer to handle email sending functionalities. This API uses Vercel for serverless deployment.

<!-- Table of Contents  -->

## Table of Contents
* [Features](#features)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Running the Application](#running-the-application)
* [API Endpoints](#api-endpoints)
* [License](#license)

<!-- Features -->

## Features
* Serverless Architecture
* Email Sending with CORS Support
* Environment Configuration

<!-- Built With -->

## Built With
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url]
* [![Vercel][Vercel]][Vercel-url]

<!-- Getting Started -->

## Getting Started

### Prerequisites
* Node.js (>= 20.x)
* All other dependencies and configurations can be found in `package.json` file.

### Installation
1. Clone the repository
```sh
git clone https://github.com/kaungmyathtaywin/EmailServer.git
cd EmailServer
```

2. Install dependencies
```sh
npm install
```

3. Set up environment variables. Create a `.env` file in the root directory. Copy and paste the following into the created `.env` file.
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

## Running the Application
```sh
npm run start
```

The application should be running at your `localhost` with port `8000`.

<!-- API Endpoints -->

## API Endpoints
### Send Email
* URL: `/api/send-email`
* Method: `POST`
* Headers:
    * `Content-Type: application/json`
* Body Parameters:
    * `name` (string): name of the sender
    * `email` (string): email address of the sender
    * `subject` (string): subject of the email
    * `message` (string): body of the email

### Example Request
```json
POST /api/send-email
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "subject": "Test Email",
    "message": "This is a test email."
}
```

### Example Response
```json
{
    "message": "Your message has been sent. Thank you!"
}
```

<!-- License -->

## License
This project is licensed under the MIT license. See LICENSE.txt for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kaung-myat-htay-win-258ab9251/

[Node.js]: https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=nodedotjs&logoColor=white&logoSize=auto
[Node-url]: https://nodejs.org/en

[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white&logoSize=auto
[Express-url]: https://expressjs.com/

[Vercel]: https://img.shields.io/badge/vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white&logoSize=auto
[Vercel-url]: https://vercel.com