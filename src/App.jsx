import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navBar/NavBar";
import { FirstSection } from "./components/firstSection/FirstSection";
import { SecondSection } from "./components/secondSection/SecondSection";
import { ThirdSection } from "./components/thirdSection/ThirdSection";
import { FourthSection } from "./components/fourthSection/FourthSection";
import { FifthSection } from "./components/fifthSection/FifthSection";
import { SixthSection } from "./components/sixthSection/SixthSection";
import { SeventhSection } from "./components/seventhSection/SeventhSection";
import { EighthSection } from "./components/eighthSection/EighthSection";
import { NinethSection } from "./components/ninethSection/NinethSection";
import { TenthSection } from "./components/tenthSection/TenthSection";
import { HelpSection } from "./components/helpSection/HelpSection";
import { BlogSection } from "./components/blogSection/BlogSection";

const App = ()=>{
  return(
    <>
    <NavBar/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <EighthSection/>
    <NinethSection/>
    <TenthSection/>
    <HelpSection/>
    <BlogSection/>
    <Footer/>
  </>
  )
}

export default App
