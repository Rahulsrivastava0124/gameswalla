import Hero from "./Hero.jsx";
import BettingSites from "./BettingSites.jsx"
import WelcomeTo from './WelcomeTo.jsx'
import {TopBettingSites} from "./TopBettingSites";
import {Celebrities} from "./Celebrities";
import {BettingGuide} from "./BettingGuide";
import {Steps} from "./Steps";
import {MostPopularSports} from "./MostPopularSports";
import {Contact} from "./Contact";
import {BonusandPromotions} from "./BonusandPromotions";
import {About} from "./About";
import {Whatsapp} from "./Whatsapp";

export const Home = () => {
    return (
        <>
            <Hero />
            <Contact/>
            <MostPopularSports/>
            <WelcomeTo/>
            <TopBettingSites/>
            <Celebrities/>
            <BettingGuide/>
            <Steps/>
            <BonusandPromotions/>
            <About/>
            <Whatsapp/>
        </>
    )
}
