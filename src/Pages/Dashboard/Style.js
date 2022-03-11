import styled from "styled-components";

const DashboardStyle = styled.div`
   .dashboardMain {
      .dashboardHerosect {
         position: relative;
         .bgHero {
       
            video {
               width: 100%;
               max-height: 1220px;
               background-size:cover;
               background-repeat:no-repeat;
            }
            
         }
         @media only screen and (max-width:100px) {
            .bgHero {
              width: 80%;
              padding: 0;
            }
          }
          @media only screen and (max-height:100px) {
            .bgHero {
              height: 80%;
              padding: 0;
            }
          }

         .remainImg {
            position: absolute;
            top: 80px;
            right: 30px;
         }
         .playSectMain {
            .playsect {
               margin-top: -70px;
               .mainGrid {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .playLeft {
                     position: relative;
                     z-index: 2;
                     ul {
                        position: absolute;
                        top: 20px;
                        left: 45px;
                        right: 80px;
                        padding: 0;
                        list-style: none;
                        display: flex;
                        justify-content: space-around;
                     }
                  }
                  .playRight {
                     text-align: right;
                     ul {
                        left: 90px;
                        right: 50px;
                     }
                  }
                  .playBtnSect {
                     position: relative;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     flex-direction: column;
                     z-index: 2;
                     .playBg {
                        position: absolute;
                        left: 67px;
                        top: 57px;
                     }
                     p {
                        position: absolute;
                        font-size: 30px;
                        color: #572a15;
                        font-weight: bold;
                     }
                  }
               }
            }
            .appstoreSect {
               position: relative;
               max-width: 85%;
               margin: auto;
               margin-top: -185px;
               img.bgPlay {
                  width: 100%;
               }
               .paymentMethod {
                  position: absolute;
                  top: 30%;
                  left: 50%;
                  transform: translateX(-50%);
                  display: flex;
                  
                  .button{
                  display: block;
                  float: left;
                  width: 225px;
                  height: 60px;
                  text-align: center;
                  line-height: 3.85;
                  font-weight:bold;
                  border: 3px solid white;
                  font-family: "Open Sans", sans-serif;
                  border-radius: 50px;
                  color: black;
                  background: white;
                  box-shadow: 0px 0px 15px rgb(0 0 0 / 25%);
                  margin-left: 10px;
                  margin-right: 10px;
                  margin-right: 10px;
                  margin-bottom: 20px;
                  transition: 0.3s all;
                  cursor: pointer;

                  }
               }
            }
         }
      }
   }
`;

export default DashboardStyle;
