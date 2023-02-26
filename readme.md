QUIZ API Developer Test

- [Deployed on Heroku](#deployed-on-heroku)
- [Quiz API](#quiz-api)
  - [Quiz JSON](#quiz-json)
  - [Quiz API Endpoints](#quiz-api-endpoints)
  - [GET /quiz](#get-quiz)
  - [POST /quiz](#post-quiz)
  - [GET /quiz/:id](#get-quizid)
  - [PUT /quiz/:id](#put-quizid)
  - [DELETE /quiz/:id](#delete-quizid)
  - [Quiz API Source Code](#quiz-api-source-code)
  - [Quiz API Demo](#quiz-api-demo)

Deployed on Heroku
========
[Quiz API](https://nodemysqlcrud.herokuapp.com/quiz) is deployed on Heroku.

Quiz API
========

Quiz API is a REST API that stores quiz questions and answers in JSON format.

*   One of the options is the correct answer.
*   The user will select the correct answer and the app will check if the answer is correct.
*   The Quiz JSON have a question property and options can be two, three or four options. and one of the options is the correct answer.

Quiz JSON
---------

Quiz JSON is a JSON object that stores quiz questions and answers.

One of the options is the correct answer.

The user will select the correct answer and the app will check if the answer is correct.

The Quiz JSON have a question property and options can be two, three or four options. and one of the options is the correct answer.

Here is an example of a Quiz JSON object:

     {
        "id": 1,
        "title": "Exam 1",
        "description": "This is the first exam.",
        "isActivated": true,
        "created_at": "2020-05-01T00:00:00.000Z",
        "updated_at": null,
        "created_by": "admin",
        "quizQuestions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Paris"
            },
            {
            "id": 2,
            "question": "What is the capital of Germany?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Berlin"
            }
        ]
    }
    

Quiz API Endpoints
------------------

Quiz API has the following endpoints:

*   GET /quiz
*   POST /quiz
*   GET /quiz/:id
*   PUT /quiz/:id
*   DELETE /quiz/:id

GET /quiz
---------

Get all quiz questions and answers.

Example:

    GET /quiz
    
```json
Response:
[
       {
        "id": 1,
        "title": "Exam 1",
        "description": "This is the first exam.",
        "isActivated": true,
        "created_at": "2020-05-01T00:00:00.000Z",
        "updated_at": null,
        "created_by": "admin",
        "quizQuestions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Paris"
            },
            {
            "id": 2,
            "question": "What is the capital of Germany?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Berlin"
            }
        ]
    },
    {
        "id": 2,
        "title": "Exam 2",
        "description": "This is the second exam.",
        "isActivated": true,
        "created_at": "2020-05-01T00:00:00.000Z",
        "updated_at": null,
        "created_by": "admin",
        "quizQuestions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Paris"
            },
            {
            "id": 2,
            "question": "What is the capital of Germany?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Berlin"
            }
        ]
    },
    {
        "id": 3,
        "title": "Exam 3",
        "description": "This is the third exam.",
        "isActivated": true,
        "created_at": "2020-05-01T00:00:00.000Z",
        "updated_at": null,
        "created_by": "admin",
        "quizQuestions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Paris"
            },
            {
            "id": 2,
            "question": "What is the capital of Germany?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            "answer": "Berlin"
            }
        ]
    }
]
```
    

POST /quiz
----------

Create a new quiz question and answer.

Example:

POST /quiz

```JSON
    {
        "title": "Geography Quiz",
        "description": "Test your knowledge of world geography!",
        "isActivated": true,
        "created_by": "admin",
        "quizQuestions": [
            {
                "id": 1,
                "question": "What is the only continent that lies entirely within the Eastern Hemisphere?",
                "options": [
                    "Africa",
                    "Asia",
                    "Australia",
                    "Antarctica"
                ],
                "answer": "Australia"
            },
            {
                "id": 2,
                "question": "Which two countries in South America do not share a border with Brazil?",
                "options": [
                    "Chile and Argentina",
                    "Colombia and Ecuador",
                    "Peru and Bolivia",
                    "Uruguay and Paraguay"
                ],
                "answer": "Chile and Argentina"
            }
        ]
    }
```

Response:
```JSON
    {
        "error": false,
        "message": "Quiz added successfully!",
        "data": 1
    }
```
    

GET /quiz/:id
-------------

Get a quiz question and answer by id.

Example:

    GET /quiz/1

    URL Params:
    id = 1

    URL Just for testing:
            [https://nodemysqlcrud.herokuapp.com/quiz/1](https://nodemysqlcrud.herokuapp.com/quiz/1)

Response:
```JSON
[
    {
        "id": 1,
        "title": "Exam 4",
        "description": "This is the fourth exam.",
        "quizQuestions": "[{\"id\": 1, \"answer\": \"Paris\", \"options\": [\"Paris\", \"London\", \"Berlin\", \"Rome\"], \"question\": \"What is the capital of France?\"}, {\"id\": 2, \"answer\": \"Berlin\", \"options\": [\"Paris\", \"London\", \"Berlin\", \"Rome\"], \"question\": \"What is the capital of Germany?\"}]",
        "isActivated": 1,
        "created_at": "2023-02-26T11:27:20.000Z",
        "updated_at": "2023-02-26T11:27:20.000Z",
        "created_by": "admin"
    }
]
```

PUT /quiz/:id
-------------

Update a quiz question and answer by id.

Example:

URL Just be like this:
https://nodemysqlcrud.herokuapp.com/quiz/3

Body:
```json
{
    "title": "Updated Math Quiz",
    "description": "An updated quiz to test your math skills.",
    "quizQuestions": [
        {
            "id": 1,
            "question": "What is 2 + 2?",
            "options": [
                "3",
                "4",
                "5",
                "6"
            ],
            "answer": "4"
        },
        {
            "id": 2,
            "question": "What is the square root of 100?",
            "options": [
                "7",
                "8",
                "9",
                "10"
            ],
            "answer": "10"
        },
        {
            "id": 3,
            "question": "What is 4 x 4?",
            "options": [
                "12",
                "14",
                "16",
                "18"
            ],
            "answer": "16"
        }
    ],
    "isActivated": true,
    "created_by": "admin"
}
```

PUT /quiz/1
```JSON
{
    "error": false,
    "message": "Quiz successfully updated"
}
```   
    

Response:
```JSON
{
    "error": false,
    "message": "Quiz successfully updated"
}
``` 
    

DELETE /quiz/:id
----------------

Delete a quiz question and answer by id.

Example:

DELETE /quiz/1

Parameters:

  * id: Quiz id

URL Just like this : https://nodemysqlcrud.herokuapp.com/quiz/3

Response:
```JSON
  {
    "error": false,
    "message": "Quiz successfully deleted"
  }
```

Quiz API Source Code
--------------------

Quiz API source code is available on GitHub:

[Github Source Code](https://github.com/Muhammad-Bilal-7896/ApiMySQLDevTest)

Quiz API Demo
-------------

Quiz API demo is available on Heroku:

[Quiz API Demo](https://quiz-api-mysql.herokuapp.com/)

Quiz API is developed by Muhammad Bilal

For any questions, please contact me at [bilalmohib7896@gmail.com](mailto:bilalmohib7896@gmail.com)