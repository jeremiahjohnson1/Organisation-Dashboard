 import { ColorModeContext, useMode } from "./theme";
 import { CssBaseline, ThemeProvider } from "@mui/material";
 import { Routes, Route } from 'react-router-dom';
 import Topbar from "./scenes/global/Topbar";
 import Sidebar from "./scenes/global/Sidebar";
 import Dashboard from "./scenes/dashboard/index";
 import Team from "./scenes/team";
 import CONTACTS from "./scenes/contacts";
 import Invoices from "./scenes/invoice";
//  import BAR from "./scenes/bar";
//  import FORM from "./scenes/line";
//  import LINE from "./scenes/line";
//  import PIE from "./scenes/pie"; 
//  import FAQ from "./scenes/faq";
//  import GEOGRAPHY from "./scenes/geography";
//  import CALENDER from "./scenes/calender";
 
 
 function App() {
   const [theme, colorMode] = useMode();
    return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
               <Sidebar/>
               <main className="content">
                  <Topbar />
                  <Routes>
                      <Route path="/" element={<Dashboard/>}/> 
                      <Route path="/team/" element={<Team/>}/>
                      <Route path="/contacts" element={<CONTACTS/>}/> 
                      <Route path="/invoices" element={<Invoices/>}/> 
                     {/*
                     <Route path="/contacts" element={<CONTACTS/>}/> 
                     <Route path="/bar" element={<BAR/>}/>
                     <Route path="/form" element={<FORM/>}/>
                     <Route path="/line" element={<LINE/>}/> 
                     <Route path="/pie" element={<PIE/>}/> 
                     <Route path="/faq" element={<FAQ/>}/>
                     <Route path="/geography" element={<GEOGRAPHY/>}/>
                     <Route path="/calender" element={<CALENDER/>}/>  */}
                  </Routes>
               </main>
            </div>
         </ThemeProvider>
      </ColorModeContext.Provider>
    );
 }

 export default App;