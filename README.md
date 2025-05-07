# Currency Converter App

A simple and efficient currency converter built with React, allowing users to convert between multiple currencies -  exchange rates are **fixed** as they are not fetched real-time at this moment.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

Here’s a quick demo of the app in action:

I invite you to test it out:
https://patkolino.github.io/CurrencyConverter-React/

## Features

- **Multiple currencies**: App is currently supporting 4 currencies (EUR, USD, GBP and PLN)
- **Interactive UI**: Simple responsive design with a clean user interface
- **Error handling**: Proper handling for invalid, missing or identical currencies or values
- **Reset functionality**: Easily clear all input fields with a single click

## Technologies

- **React**: Used for building the user interface
- **React Hook**: `useState` for managing states
- **CSS**: Custom styling with responsive design for mobile and smaller screens

## Usage

1. **Choose currency**: Select the currency from which you want to make the conversion *(mandatory field)*
2. **Insert amount** : Enter the amount you want to convert *(only possitive whole numbers are accepted)*
3. **Select currency to which you want to convert**: Choose the currency to which you want to make the conversion *(mandatory field)*
4. **Click Convert**: 
- If all fields are valid and selected currencies are different, the conversion result will be displayed bellow the buttons
- If any of the mandatory fields are missing or the same currency is selected for both "from" and "to", an error is shown (either browser validation message for missing input or an alert message if both currencies are same)

Additionally, the **Clear fields** button can be used at any time to reset the form to its initial state. This also removes the conversion result, if one was previously displayed.
