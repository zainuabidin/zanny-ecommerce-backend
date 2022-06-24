# zanny-ecommerce-backend


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Videos](#videos)
- [Contact Information](#contact)

## Description

This application is the back of an e-commerce site that allows users to check their products, categories and brands. The user can view all products related to the category and label, the categories with their labels and the labels of all their associated products. In addition, users can create, update, and delete products, categories, and labels..

## Installation

- node.js needs to be installed prior to use
- open terminal
- clone the repo: `https://github.com/zainuabidin/zanny-ecommerce-backend`
- cd into new directory
- download JSON packages by entering `npm i`
- create `.env` file 
- to connect to the database run `mysql -u root -p` and enter password from .env file
- source the schema.sql
- seed the data by running `npm run seed`
- enter `npm start`

## Usage

This application will allow users to view, create, update, and delete categories, products, and tags.

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

```

## Videos


[Schema and Seeds](https://drive.google.com/file/d/107rzbFowpxOkhGTh2VPp57iKQkNHMHIA/view?usp=sharing)

[Get-Put-Post](https://drive.google.com/file/d/1HjjkzPnHgKQM4RXi6FmXdK0agtLk023f/view?usp=sharing)

[DELETE](https://drive.google.com/file/d/13AJMkof__nBr7XWNRB-Aw1pTYCOx6RTq/view?usp=sharing)

## Contact

Email Address: xan.abdn@gmail.com

Linkedin Profile: [LinkedIn](https://www.linkedin.com/in/zain-abidin-a2923419a/)

Github: [Profile](https://github.com/zainuabidin)

Github: [Repo](https://github.com/zainuabidin/zanny-ecommerce-backend)