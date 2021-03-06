# Finstagram

## Share photos with select groups!

We're all familiar with the ever popular "Instagram"- but what of those who are familiar with "Finstagram", the underbelly of Instagram where folks can share photos with an exclusive group of people!

This project brings that idea to life. Finstagram (taken from the pop culture phenomenon "finsta", aka "fake-insta") allows users to store photos that disappear after a specified amount of time. Users can choose to post photos only for their followers, or publicly without toggling their private account on and off. Instgram has implemented this functionality in some form with the "Close Friends" stories, but sometimes you want to post an actual photo to be liked without using this feature.

## Tools

The backend is a Node and Express REST backend, user authentication is handled by PassportJS, with the database handled by MongoDB. The frontend is built with React with Typescript, styled-components, and react-transition-group. CI/CD is handled by CircleCI, Husky, and Heroku.

Tests are handled with Jest and react-testing-library.
