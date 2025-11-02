import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import QnA from './pages/QnA';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PageNotFound from '../PageNotFound';
import StudentDashboardDetails from './pages/projectDetails/StudentDashboardDetails';
import NextMeetDetails from './pages/projectDetails/NextMeetDetails';
import TradeStockEasyDetails from './pages/projectDetails/TradeStockEasyDetails';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

  <Navbar/>
  <Routes>

     <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
        <Route path="/project" element={<Projects/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
            <Route path="/qna" element={<QnA/>}/> 
               <Route path="/projects/student-collaboration-dashboard" element={<StudentDashboardDetails/>}/> 
                  <Route path="/projects/next-meet-video-app" element={<NextMeetDetails/>}/> 
                     <Route path="/projects/trade-stock-easy" element={<TradeStockEasyDetails/>}/> 
   
   <Route path="/*" element={<PageNotFound/>}/>
   
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);

