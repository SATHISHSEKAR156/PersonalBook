import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserDataProvider } from './contexts/userDataProvider';
import { createTheme, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundaries';
import ErrorFallback from './components/Errors/errorFallback';

// Creating a material-ui theme
const THEME = createTheme({
  typography: {
    fontFamily: `"Aleo", serif`,
    fontSize: 14,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <UserDataProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </UserDataProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
