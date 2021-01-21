# WeVolunteerKC

## Description

_Duration: 2 Week Sprint_

WeCodeKC wants to find a better way to keep track of and manage volunteers and mentors who are helping to support their mission. Volunteers and mentors currently have to fill out personal information every time they want to contribute to an event. The WeCodeKC staff wants to grow their network of volunteers as well as their program and the process of managing and reaching out to these volunteers is very manual right now. They want to make it easy for volunteers and mentors to register for events and keep track of information for research purposes.

This application streamlines the registration process for mentors and volunteers to WeCodeKC while simultaneously encouraging new members to join the mentorship group by listing upcoming events before logging in. Volunteers and mentors will now be able to track their upcoming events in a simple, effective, user-friendly method.

WeCodeKC will have access to demographics provided by the volunteers/mentors for research purposes and the ability to create events so that volunteers/mentors can easily sign up for them.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Events Page:
![Screen Shot 2021-01-21 at 3 46 26 PM](https://user-images.githubusercontent.com/69406113/105417679-933e7a00-5c01-11eb-9ee9-a4473ce5f383.png)

Profile Page
![Screen Shot 2021-01-21 at 3 51 57 PM](https://user-images.githubusercontent.com/69406113/105417720-a0f3ff80-5c01-11eb-8670-b494ec42834a.png)

Admin Page - Verification
![Screen Shot 2021-01-21 at 3 53 54 PM](https://user-images.githubusercontent.com/69406113/105417760-ae10ee80-5c01-11eb-8a3f-02a7b8fe599d.png)

Admin Page - Calendar
![Screen Shot 2021-01-21 at 3 55 45 PM](https://user-images.githubusercontent.com/69406113/105417782-b6692980-5c01-11eb-936c-4c91a48ca495.png)

Admin Page - Demographics
![Screen Shot 2021-01-21 at 3 56 56 PM](https://user-images.githubusercontent.com/69406113/105417812-c1bc5500-5c01-11eb-9c45-1ef5b3057d02.png)

Mobile Profile Pages:
![Screen Shot 2021-01-21 at 3 52 40 PM](https://user-images.githubusercontent.com/69406113/105417911-eadce580-5c01-11eb-9117-90b790d200d4.png)
![Screen Shot 2021-01-21 at 3 52 51 PM](https://user-images.githubusercontent.com/69406113/105417938-f6301100-5c01-11eb-98b9-99bfaa711dc3.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

This version of the project uses Docker to run the development environment. You will need to install [docker](https://www.docker.com/).

1. Clone this repo to your local machine.
2. Open the project in the editor of your choice. We use [VS Code](https://code.visualstudio.com/); run `npm install`.
3. In order to access specific functions and API’s you will need to configure a `.env` file. Please see detailed instructions below.\*
4. From the project root directory: `docker-compose up --build`
5. The development database should populate with the data stored in the `init.sql` and `data.sql` files.\*\*
6. Once the development server has started it should serve a message to indicate the server started successfully.
7. In a browser, go to `http://localhost:3000`. You should see the application running.
8. Create a user by registering as a volunteer or a mentor.

### Detailed Instructions for Configuring the .env (Secure Development)

1. Database name as `DATABASE_NAME`.
2. Server session secret: `SERVER_SESSION_SECRET` and this can be equal to a secure password. For help creating a password: [Password Generator](https://passwordsgenerator.net/).
3. The Docker database setup is handled in 3 configs: `DOCKER_DB_PORT=5432` (defaulted config), `DOCKER_DB_USER` (set to your configuration for secure dev), and `DOCKER_DB_PASS`.
4. A `NODE_ENV` can be set to ‘development’.
5. For AWS S3, configure the `.env` with your account and API Access Key: `AWS_ACCESS_KEY_ID` and your Secret Key as `AWS_SECRET_ACCESS_KEY`.
6. Email masking functionality is handled by Nodemailer. This sends secure emails from an account to keep users hidden until choosing to share their contact information. This can be configured in the `.env` file with `MAILER_EMAIL` and `MAILER_PASSWORD`.

\*\*The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

## Usage

Steps:

Note: For testing purposes, test accounts and data are currently initialized with the project upon build. These lines can be removed and are not entirely necessary, but may prove helpful as a tool to show off the application

1. Register and/or login to the application. If you’re creating a new account, you’re directed to the ‘Step 1 - About Me’ tab. Complete the forms on tabs 1-3 by providing the necessary information, and click ‘Submit.’

2. After logging into your account, you see the Landing Page. Note, you can also reach this page by selecting ‘Home’ in the top nav bar.

The Landing Page contains a brief summary of your own information and an option to ‘View Profile.’ You can also view and edit your profile information by selecting ‘Profile’ in the top nav bar.

Additionally, the page contains one large button at the very top labeled ‘IHKC Community,’ and below, you see three smaller buttons labeled as follows: “‘Find a Business,’ ‘Find a Speaker,’ ‘Find a Space.’”

3. To search through the community of members, select the ‘IHKC Community’ button. After navigating to the Search Page, you can find members by inputting a job title, community role, or an organization name. When the search results appear, clicking the down carrot shows more information about a user and let’s you contact them from within the app.

4. Selecting one of the three smaller buttons from the Landing Page, you can view a list of local businesses, speakers, and/or spaces to hold events. Selecting the ‘+’ button expands a card, and you can view additional information including contact info for the individual or entity. Note: these are resources, not necessarily members, so the option to contact them from within in the app is not available.

## Usage

How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx

## Built With

JavaScript
TypeScript
React
Redux
Redux-Saga
Axios
Node.js
Express
PostgreSQL
Material-UI
SweetAlert
Luxon
React-Big-Calendar
RRule
Nodemailer
Heroku
Docker

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you Tammy Buckner, Dr Philip Hickman, and Shanice Gipson at WeCodeKC for giving us the opportunity to build this application for them!

## Support

If you have suggestions or issues, please email us at [alexbe.campbell@gmail.com], [clintondhipple@gmail.com], [johnny.c.alexander@gmail.com], [sarahnpeters@gmail.com].
