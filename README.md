# banQi Test App

Application that simulates a banking application.

## Installation

Expo was used cause the project was simple and the development should be fast due to deadline.

```bash
npm install -g expo-cli
```

## Usage

Run this command to install all dependencies:
```bash
yarn
```
After this, to run the application, run the following command:
```bash
yarn start
```

## Build

To build this app, it's necessary to run the command and follow the instructions in command line:
```bash
expo build:android | expo build:ios
```
PS: The Expo should be running with "yarn start"

## Unit Tests

Unit tests could not be configured because many errors happens on try to run the command **jest**, due to styled-component use.
The unit tests are written, but we can't run them.
