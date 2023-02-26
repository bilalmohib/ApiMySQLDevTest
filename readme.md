QUIZ API Developer Test

- [Deployed on Heroku](#deployed-on-heroku)
- [Quiz API](#quiz-api)
  - [Quiz JSON](#quiz-json)
  - [Quiz API Endpoints](#quiz-api-endpoints)
  - [Testing the API](#testing-the-api)
  - [GET /quiz](#get-quiz)
  - [POST /quiz](#post-quiz)
  - [GET /quiz/:id](#get-quizid)
  - [**PUT /quiz/:id**](#put-quizid)
  - [**DELETE /quiz/:id**](#delete-quizid)
  - [**Quiz API Source Code**](#quiz-api-source-code)
  - [**Quiz API Demo**](#quiz-api-demo)

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
        "rating": 5,
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
            "answer": "Paris",
            "isMandatory": true
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
            "answer": "Berlin",
            "isMandatory": true
            }
        ]
    }
    

Quiz API Endpoints
------------------

Quiz API has the following endpoints:

*   GET /quiz , 
    URL: [https://nodemysqlcrud.herokuapp.com/quiz](https://nodemysqlcrud.herokuapp.com/quiz)
*   POST /quiz
    URL: [https://nodemysqlcrud.herokuapp.com/quiz](https://nodemysqlcrud.herokuapp.com/quiz)
*   GET /quiz/:id
    URL: [https://nodemysqlcrud.herokuapp.com/quiz/:id](https://nodemysqlcrud.herokuapp.com/quiz/:id)
*   PUT /quiz/:id
    URL: [https://nodemysqlcrud.herokuapp.com/quiz/:id](https://nodemysqlcrud.herokuapp.com/quiz/:id)
*   DELETE /quiz/:id
    URL: [https://nodemysqlcrud.herokuapp.com/quiz/:id](https://nodemysqlcrud.herokuapp.com/quiz/:id)

Testing the API
----------------
If you want to test the API endpoints, you can use [Postman](https://www.postman.com/lunar-space-683154/workspace/apitest/collection/26009791-bad2866e-05e2-4bf2-8ee3-ff1554025840?action=share&creator=26009791).

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
        "title": "Biology Quiz",
        "rating": 3,
        "description": "Test your knowledge of biology!",
        "quizQuestions": "[{\"answer\": \"Cellular respiration\", \"options\": [\"Photosynthesis\", \"Cellular respiration\", \"Fermentation\", \"Glycolysis\"], \"question\": \"What is the process by which cells convert glucose into ATP?\", \"isMandatory\": true}, {\"answer\": \"Ribosome\", \"options\": [\"Mitochondria\", \"Lysosome\", \"Endoplasmic reticulum\", \"Ribosome\"], \"question\": \"What is the name of the organelle responsible for protein synthesis?\", \"isMandatory\": true}, {\"answer\": \"Photosynthesis\", \"options\": [\"Photosynthesis\", \"Cellular respiration\", \"Fermentation\", \"Glycolysis\"], \"question\": \"What is the name of the process by which plants convert light energy into chemical energy?\", \"isMandatory\": true}]",
        "isActivated": 1,
        "created_at": "2023-02-26T15:33:57.000Z",
        "updated_at": "2023-02-26T15:33:57.000Z",
        "created_by": "admin"
    },
    {
        "id": 2,
        "title": "Astronomy Quiz",
        "rating": 4,
        "description": "Test your knowledge of astronomy!",
        "quizQuestions": "[{\"answer\": \"Proxima Centauri\", \"options\": [\"Alpha Centauri\", \"Betelgeuse\", \"Sirius\", \"Proxima Centauri\"], \"question\": \"What is the closest star to our solar system?\", \"isMandatory\": true}, {\"answer\": \"Ganymede\", \"options\": [\"Ganymede\", \"Europa\", \"Callisto\", \"Titan\"], \"question\": \"What is the name of the largest moon in our solar system?\", \"isMandatory\": true}, {\"answer\": \"Canis Major Dwarf\", \"options\": [\"Andromeda\", \"Canis Major Dwarf\", \"Triangulum\", \"Large Magellanic Cloud\"], \"question\": \"What is the name of the nearest galaxy to our Milky Way?\", \"isMandatory\": true}]",
        "isActivated": 1,
        "created_at": "2023-02-26T15:35:32.000Z",
        "updated_at": "2023-02-26T15:35:32.000Z",
        "created_by": "admin"
    },
    {
        "id": 3,
        "title": "Programming Quiz",
        "rating": 5,
        "description": "Test your knowledge of programming!",
        "quizQuestions": "[{\"answer\": \"13\", \"options\": [\"25\", \"13\", \"17\", \"None of the above\"], \"question\": \"What is the output of the following code: print(3 + 2 * 5)\", \"isMandatory\": true}, {\"answer\": \"def\", \"options\": [\"define\", \"function\", \"def\", \"define_function\"], \"question\": \"What is the keyword used in Python to define a function?\", \"isMandatory\": true}, {\"answer\": \"To create a new object of a class\", \"options\": [\"To create a new object of a class\", \"To define an instance method of a class\", \"To provide a way to access private variables\", \"To implement inheritance\"], \"question\": \"What is the purpose of a constructor in object-oriented programming?\", \"isMandatory\": true}]",
        "isActivated": 1,
        "created_at": "2023-02-26T15:37:02.000Z",
        "updated_at": "2023-02-26T15:37:02.000Z",
        "created_by": "admin"
    },
    {
        "id": 4,
        "title": "Random Knowledge Quiz",
        "rating": 5,
        "description": "Test your general knowledge with these difficult questions!",
        "quizQuestions": "[{\"answer\": \"Skin\", \"options\": [\"Heart\", \"Brain\", \"Skin\", \"Liver\"], \"question\": \"What is the largest organ in the human body?\", \"isMandatory\": true}, {\"answer\": \"Vatican City\", \"options\": [\"Monaco\", \"Nauru\", \"Vatican City\", \"San Marino\"], \"question\": \"What is the smallest country in the world by land area?\", \"isMandatory\": true}, {\"answer\": \"O3\", \"options\": [\"O\", \"O2\", \"O3\", \"O4\"], \"question\": \"What is the chemical formula for ozone?\", \"isMandatory\": true}, {\"answer\": \"Mariana Trench\", \"options\": [\"Mariana Trench\", \"Puerto Rico Trench\", \"Java Trench\", \"Kermadec Trench\"], \"question\": \"What is the name of the deepest part of the ocean?\", \"isMandatory\": true}, {\"answer\": \"Antarctic\", \"options\": [\"Sahara\", \"Arabian\", \"Antarctic\", \"Gobi\"], \"question\": \"What is the largest desert in the world?\", \"isMandatory\": true}]",
        "isActivated": 1,
        "created_at": "2023-02-26T15:38:31.000Z",
        "updated_at": "2023-02-26T15:38:31.000Z",
        "created_by": "admin"
    }
]
```
    

POST /quiz
----------

Create a new quiz question and answer.

Example:

POST /quiz

**Body:**
```JSON
    {
    "title": "Random Knowledge Quiz",
    "description": "Test your general knowledge with these difficult questions!",
    "rating": 4,
    "quizQuestions": [
        {
            "question": "What is the largest organ in the human body?",
            "options": [
                "Heart",
                "Brain",
                "Skin",
                "Liver"
            ],
            "answer": "Skin",
            "isMandatory": true
        },
        {
            "question": "What is the smallest country in the world by land area?",
            "options": [
                "Monaco",
                "Nauru",
                "Vatican City",
                "San Marino"
            ],
            "answer": "Vatican City",
            "isMandatory": true
        },
        {
            "question": "What is the chemical formula for ozone?",
            "options": [
                "O",
                "O2",
                "O3",
                "O4"
            ],
            "answer": "O3",
            "isMandatory": true
        },
        {
            "question": "What is the name of the deepest part of the ocean?",
            "options": [
                "Mariana Trench",
                "Puerto Rico Trench",
                "Java Trench",
                "Kermadec Trench"
            ],
            "answer": "Mariana Trench",
            "isMandatory": true
        },
        {
            "question": "What is the largest desert in the world?",
            "options": [
                "Sahara",
                "Arabian",
                "Antarctic",
                "Gobi"
            ],
            "answer": "Antarctic",
            "isMandatory": true
        }
    ],
    "isActivated": true,
    "created_by": "admin"
}
```

Response:
```JSON
{
    "error": false,
    "message": "Quiz added successfully!",
    "data": 4
}
```
    

GET /quiz/:id
-------------

Get a quiz question and answer by id.

Example:

**GET /quiz/1**

**URL Params:**
id = 1

**URL Just for testing:**
[https://nodemysqlcrud.herokuapp.com/quiz/1](https://nodemysqlcrud.herokuapp.com/quiz/1)

**Response:**
```JSON
[
    {
        "id": 1,
        "title": "Biology Quiz",
        "rating": 4,
        "description": "Test your knowledge of biology!",
        "quizQuestions": "[{\"answer\": \"Cellular respiration\", \"options\": [\"Photosynthesis\", \"Cellular respiration\", \"Fermentation\", \"Glycolysis\"], \"question\": \"What is the process by which cells convert glucose into ATP?\", \"isMandatory\": true}, {\"answer\": \"Ribosome\", \"options\": [\"Mitochondria\", \"Lysosome\", \"Endoplasmic reticulum\", \"Ribosome\"], \"question\": \"What is the name of the organelle responsible for protein synthesis?\", \"isMandatory\": true}, {\"answer\": \"Photosynthesis\", \"options\": [\"Photosynthesis\", \"Cellular respiration\", \"Fermentation\", \"Glycolysis\"], \"question\": \"What is the name of the process by which plants convert light energy into chemical energy?\", \"isMandatory\": true}]",
        "isActivated": 1,
        "created_at": "2023-02-26T15:33:57.000Z",
        "updated_at": "2023-02-26T15:33:57.000Z",
        "created_by": "admin"
    }
]
```

**PUT /quiz/:id**
-------------

Update a quiz question and answer by id.

Example:

**URL Just be like this:**
[https://nodemysqlcrud.herokuapp.com/quiz/3](https://nodemysqlcrud.herokuapp.com/quiz/3)

**Body:**
```json
{
    "title": "Biology Quiz Updated",
    "description": "Test your knowledge of biology! Now Updated Will appear",
    "rating": 4,
    "quizQuestions": [
        {
            "question": "What is the process by which cells convert glucose into ATP?",
            "options": [
                "Photosynthesis",
                "Cellular respiration",
                "Fermentation",
                "Glycolysis"
            ],
            "answer": "Cellular respiration",
            "isMandatory": true
        },
        {
            "question": "What is the name of the organelle responsible for protein synthesis?",
            "options": [
                "Mitochondria",
                "Lysosome",
                "Endoplasmic reticulum",
                "Ribosome"
            ],
            "answer": "Ribosome",
            "isMandatory": true
        },
        {
            "question": "What is the name of the process by which plants convert light energy into chemical energy?",
            "options": [
                "Photosynthesis",
                "Cellular respiration",
                "Fermentation",
                "Glycolysis"
            ],
            "answer": "Photosynthesis",
            "isMandatory": false
        }
    ],
    "isActivated": true,
    "created_by": "admin"
}
``` 

**Response:**
```JSON
{
    "error": false,
    "message": "Quiz successfully updated"
}
``` 
    

**DELETE /quiz/:id**
----------------

Delete a quiz question and answer by id.

Example:

**DELETE /quiz/1**

**Parameters:**

  * id: Quiz id

**URL Just like this**
[https://nodemysqlcrud.herokuapp.com/quiz/3](https://nodemysqlcrud.herokuapp.com/quiz/3)

**Response:**
```JSON
  {
    "error": false,
    "message": "Quiz successfully deleted"
  }
```

**Quiz API Source Code**
--------------------

Quiz API source code is available on GitHub:

[Github Source Code](https://github.com/Muhammad-Bilal-7896/ApiMySQLDevTest)

**Quiz API Demo**
-------------

Quiz API demo is available on Heroku:

[Quiz API Demo](https://nodemysqlcrud.herokuapp.com)

Quiz API is developed by Muhammad Bilal

For any questions, please contact me at [bilalmohib7896@gmail.com](mailto:bilalmohib7896@gmail.com)