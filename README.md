# Validation Application

## _This project is intended to show how user validation and http requests operate using nodeJS_

## Dependencies

- Express
- Express sessions
- Joi

## Operating the application

1. Utilize the **POST** method to create a user at the **/signup** endpoint. requst must contain a valid email as well as a password of 8-15 characters with one capital letter, one lowercase letter, one number, and one special character.
2. Use the **GET** method at the **/users** endpoint to ensure your user exists within the users array.
3. Once the user is confirmed proceed to make a **POST** request at the **/signin endpoint**.
4. Now that youre signed in you have acces to the recipes. Make a **GET** request at the **/recipes** endpoint to see them.
