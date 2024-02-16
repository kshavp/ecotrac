SUSTAINABLE LIVING TRACKER 🌲

Welcome to the Sustainable Living Tracker! This Web application aims to assist users in monitoring and improving their sustainability practices in various aspects of daily life. By providing insights, tips, and tracking capabilities, this tool empowers individuals to make more environmentally conscious choices and reduce their Carbon footprint.🌍

## Problem Statements
Develop a web or mobile application that educates beginners on sustainable living practices and tracks their progress in adopting eco-friendly habits. This application include features such as Carbon Footprints calculations , tips for reducing  waste, and challenges to encourage sustainable behaviours.

## Key Features 
🌍Tracking: Users can track their activities related to energy consumption, water usage, waste generation, transportation, and more.

🌍Analysis: This application provides analysis and visualization of users' sustainability data, allowing them to identify patterns and areas for improvement.

🌍Education: Users have access to educational resources, articles, and tips on sustainable living practices to increase their awareness and knowledge.

🌍Goal Setting: The application enables users to set personal sustainability goals and track their progress over time.

🌍Community: Users can connect with like-minded individuals, share experiences, and collaborate on sustainability initiatives.

## Technologies Used 

Frontend: EJS, TailwindCSS, Vanilla CSS
Backend: Node.js, Express.js, 
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Data Visualization: Chart.js

## Demo

Insert gif or link to demo


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


Team- PolyCognit


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


