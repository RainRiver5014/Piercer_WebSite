import styled from "styled-components";

const DashboardStyle = styled.div`
   .dashboardMain {
      .dashboardHerosect {
         position: relative;
         .bgHero {
            img {
               width: 100%;
               max-height: 810px;
            }
            video {
               width: 100%;
               max-height: 720px;
               background-size:cover;
               background-repeat:no-repeat;
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
                  top: 20%;
                  left: 50%;
                  transform: translateX(-50%);
                  display: flex;
                  .button{
                     display: inline-block;
                     padding: 18px 64px;
                     margin:18px;
                     max-width:180px;
                     font-size: 14px;
                     cursor: pointer;
                     text-align: center;
                     outline: none;
                     color: black;
                     background-color:white;
                     border: none;
                     border-radius: 45px;
                  }
               }
            }
         }
      }
   }
`;

export default DashboardStyle;
