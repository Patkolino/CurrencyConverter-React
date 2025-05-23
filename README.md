# Currency Converter App

A simple and efficient currency converter built with React allows users to convert between multiple currencies - exchange rates are **fixed** as they are not fetched in real-time.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

Here’s a quick demo of the app in action:

https://github.com/user-attachments/assets/3a4bf9fd-198f-4275-91f3-01a322d1883b

<video autoplay muted loop playsinline src="CurrencyConverterDemo.mp4" title="App demo preview"></video>

I invite you to test it out:
https://patkolino.github.io/CurrencyConverter-React/

## Features

- **Multiple currencies**: App is currently supporting 4 currencies (EUR, USD, GBP, and PLN)
- **Interactive UI**: Simple responsive design with a clean user interface for both mobile and desktop users
- **Error handling**: Handles missing inputs, same-currency selections, and invalid values with helpfull feedback and messages
- **Reset functionality**: Instantly clears all input fields and result with a single click
- **Live Date and time**: This project includes a real-time date and time display

## Technologies

- **React**: Used for building the user interface
- **React Hooks**: `useState`, `useEffect` for state management and side effects. `useCurrentDate` custom hook that handles real-time clock logic using `setInterval`
- **Styled Components** - CSS in JavaScript for clean, component-scoped styling
- **ThemeProvider & GlobalStyle** - Consistent theme and global styles are set up across the app
- **normalize.css** - Installed via npm to ensure consistent styling across different browsers

## Usage

1. **Choose currency**: Select the currency from which you want to make the conversion *(mandatory field)*
2. **Insert amount** : Enter the amount you want to convert *(only possitive whole numbers are accepted)*
3. **Select currency to which you want to convert**: Choose the currency to which you want to make the conversion *(mandatory field)*
4. **Click Convert**: 
- If all fields are valid and selected currencies are different, the conversion result will be displayed below the buttons
- If any of the mandatory fields are missing or the same currency is selected for both "from" and "to", an error is shown (either a browser validation message for missing input or an alert message if both currencies are the same)

Additionally, the **Clear fields** button can be used at any time to reset the form to its initial state. This also removes the conversion result, if one was previously displayed.
