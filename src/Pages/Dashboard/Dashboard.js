import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography, Grid, Button} from "@mui/material";


import backgroundVideo from "../../Assets/Videos/videofile.mp4";



import DashboardStyle from "./Style";

const Dashboard = () => {
   return (
      <DashboardStyle>
         <Box className="dashboardMain">
            <Box className="dashboardHerosect">
             
               {/* <Box className="bgHero">
                  <img src={background} alt="background" />
               </Box> */}
               <Box className="bgHero">
                  <video autoPlay loop muted id='video'>
                     <source src = {backgroundVideo} type='video/mp4'/>
                  </video>
               </Box>
               {/* <img src={remaintime} alt="remaintime" className="remainImg" /> */}
               <Box className="playSectMain">
                  <Box className="appstoreSect">
                     {/* <img src={bgPlay} alt="bgPlay" className="bgPlay" /> */}
                     <div className="paymentMethod">
                        <a href="https://discord.com/invite/versa">
                           <button className="button">Discord</button>
                        </a>
                        <a href="https://t.me/RBXFlip">
                          <button className="button">Piercer</button>
                        </a>
                     
                     </div>
                  </Box>
               </Box>
            </Box>
         </Box>
      </DashboardStyle>
   );
};

export default Dashboard;
