import Hero from "./Hero.jsx";
import Navbar from "./Navbar";
import BettingSites from "./BettingSites.jsx"
import WelcomeTo from './WelcomeTo.jsx'
import {TopBettingSites} from "./TopBettingSites";
import {Celebrities} from "./Celebrities";
import {BettingGuide} from "./BettingGuide";
import {Steps} from "./Steps";
import {MostPopularSports} from "./MostPopularSports";
import {Contact} from "./Contact";
import {BonusandPromotions} from "./BonusandPromotions";
import {Footer} from "./Footer";

export const Home = () => {
    return (
        <>

            <Hero />
            <Contact/>
            <BettingSites/>
            <WelcomeTo/>
            <TopBettingSites/>
            <Celebrities/>
            <BettingGuide/>
            <Steps/>
            <MostPopularSports/>
            <BonusandPromotions/>

        </>
    )
}
