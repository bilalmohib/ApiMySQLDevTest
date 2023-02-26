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
      "questions": [
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
      \]
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
        "questions": [
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
        "questions": [
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
        "questions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            \],
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
    {
        "title": "Exam 4",
        "description": "This is the fourth exam.",
        "questions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": \[
                "Paris",
                "London",
                "Berlin",
                "Rome"
            \],
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
    

Response:

    {
        "id": 4,
        "title": "Exam 4",
        "description": "This is the fourth exam.",
        "questions": [
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
    

GET /quiz/:id
-------------

Get a quiz question and answer by id.

Example:

    GET /quiz/1
    

Response:

        {
            "id": 4,
            "title": "Exam 4",
            "description": "This is the fourth exam.",
            "questions": [
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
    

PUT /quiz/:id
-------------

Update a quiz question and answer by id.

Example:

    PUT /quiz/1
    {
        "title": "Exam 1",
        "description": "This is the first exam. Updated.",
        "questions": [
            {
            "id": 1,
            "question": "What is the capital of France?",
            "options": [
                "Paris",
                "London",
                "Berlin",
                "Rome",
                "Madrid",
                "Rome",
                "Copenhagen",
                "Amsterdam"
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
    

Response:

        {
            "title": "Exam 1",
            "description": "This is the first exam. Updated.",
            "questions": [
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
    

DELETE /quiz/:id
----------------

Delete a quiz question and answer by id.

Example:

    DELETE /quiz/1
    

Response:

      {
        "message": "Quiz deleted successfully."
      }
    

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