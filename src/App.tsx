import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation.tsx';
import ImageCarousel from './ImageCarousel.tsx';
import AcademicCalendar from './AcademicCalendar.tsx';
import FeePayment from './FeePayment.tsx';
import PdfViewer from './components/pdf viewer/PdfViewer.tsx';
const App = () => {       
   
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Navigation/>} /> 
          <Route path="/academic-calendar" element={<AcademicCalendar/>} />
          <Route path='/fee-payment' element={<FeePayment/>} />
          <Route path='/pdf-viewer' element={<PdfViewer/>} />
        </Routes>
      </Router>

    )
}
export default App;