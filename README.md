# Treffen App

## Objective

The App Objective is To build a serverless,progressive web application(PWA) with React using a test-driven development(TDD)technique.

## Key Features
Filter Events by City
Toggle Event Information
Dictate Event Quantity
Offline Functionality
App Shortcut Addition to Home
Visual Charts of Event Statistics

## User Stories and Scenarios

### User story 1 - Filter Events by City
Scenario 1:
When user hasn’t searched for a city, show upcoming events from all cities. Given user hasn’t searched for any city; When the user opens the app; Then the user should see a list of upcoming events.

Scenario 2:
User opens the app and has searched a city.

Given the main page with search option has been opened, when the user entered a city, then they should be shown upcoming events for that city.

### User story 2 - Show/Hide Event Details
Scenario 1:
Initially, the event details are hidden. Given the user is viewing the list of events When no action is taken on an event Then the event details should be hidden by default.

### User story 3 - Dictate Event Quantity
Scenario 1:
Given: The user is on the events listing page. When: The user inputs a specific number or selects a predefined option from a drop-down menu to specify the desired number of events to be displayed. Then: The events listing page refreshes, displaying the specified number of events.

### User story 4 - Offline Functionality
Scenario 1:
Given the user has no internet connection, when the user is accessing the app, then cached data, stored inside the app, will be provided to the user.

