import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import AssistSurvey from './pages/AssistSurvey';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <main style={{ minHeight: 'calc(100vh - 160px)', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assist-survey" element={<AssistSurvey />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 