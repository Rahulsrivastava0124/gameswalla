import blackjack from '../Images/blackjack.png';
import roulette from '../Images/roulette.gif';
import baccarat from '../Images/baccarat.png';
import slotgames from '../Images/slot-machine.png';
import sports from '../Images/sports.png';
import cricket from '../Images/cricket.png';
import football from '../Images/football.png';
import horse from '../Images/horseriding.png';
import kabaddi from '../Images/kabaddi.png';
import tennis from '../Images/tennis.png';
import cosino from '../Images/Casino.png';
import greyhound from '../Images/dog.png';

import {SportTypeCard} from "./Card/SportTypeCard";

export const MostPopularSports = () => {
    const SportsCard=[
        {
            image:cosino,
            heading:"Casino Games",
            paragraph:"GamesWalla provides a selection of online casino sites where you can play different Casino games from multiple reliable software vendors. It includes Microgaming and NetEnt, featuring slots, table games, and video poker. With random number generators (RNGs) that are audited by independent testing organizations to assure fairness, they assert that they provide transparent and equitable gaming experiences."
        },
        {
            image:blackjack,
            heading:"Blackjack",
            paragraph:"There are 18 blackjack slots on the bookmaker’s website, including the most sophisticated iterations of this well-known game. Side bets are possible in almost all versions. You can also play a sophisticated game of blackjack here and generate winning card combinations. You can find the best blackjack betting sites on GamesWalla. Do check them out and start playing blackjack."
        },
        {
            image:roulette,
            heading:"Roulette",
            paragraph:"Along with eighteen online versions of the same game that can be played on GamesWalla.com. The website also features sixteen variations of slot roulette. Even though Indian players are the bookmaker’s main target market, you can load a roulette game in German, Russian, or Italian, among other European languages. Check out the Ultimate strategy: How to win at Roulette."
        },
        {
            image:baccarat,
            heading:"Baccarat",
            paragraph:"Numerous live baccarat variants, including an accelerated version of this well-known game, are available on the website. You can start playing and exploring all of the slots that are devoted to this game in demo mode. Find a suitable strategy from the list and explore online Baccarat strategies to consistently improve your chances of winning before starting to play Baccarat."
        },
        {
            image:slotgames,
            heading:"Slot games",
            paragraph:"The bookmaker not only offers casino games but also does slot games. GamesWalla has an extensive catalog of various titles ranging from simple slots to high-level slots. These slot games can bring out countless benefits for the players."
        },
        {
            image:sports,
            heading:"Sport Games",
            paragraph:"GamesWalla offers its customers a chance to prove themselves through the amazing collection of sports games in its library. If you are a sports lover, you don’t have to look elsewhere. You can find the most popular sports for online betting in India under one umbrella that is, GamesWalla. "
        },
        {
            image:cricket,
            heading:"Cricket",
            paragraph:"Cricket is the most popular sport in India and every Indian is a cricket fan. Cricket is even more popular than the national sport, hockey. Therefore, there is a huge online betting market for cricket. GamesWalla provides updates on every cricket league and match. It provides match predictions and other updates on popular leagues such as IPL, PSL, and other T20 leagues. "
        },
        {
            image:football,
            heading:"Football",
            paragraph:"Another well-liked sport that is appreciated in India is football. Football became popular in India because Indians were exposed to the Premier League, La Liga, and the World Cup. You might investigate the betting markets that are comparable to those for cricket. One of the most profitable games in the GamesWalla catalog is football. "
        },
        {
            image:horse,
            heading:"Horse racing",
            paragraph:"One of the greatest things about GamesWalla, which covers specialized sports, is horse racing. The website that offers betting does not ignore niche sports like horse racing. Horse racing offers enormous winning potential with well-placed wagers. Before the game begins, you must familiarize yourself with the horses and the jockey. Find out about the conditions and the history of wins. "
        },
        {
            image:kabaddi,
            heading:"Kabaddi",
            paragraph:"Kabaddi is a sport that is very niche but has betting markets all over the world. You can find the best Kabaddi betting markets on GamesWalla. GamesWalla is updated on popular Kabaddi betting leagues such as the Pro Kabaddi League. You can also find the best kabaddi betting sites on the homepage."
        },
        {
            image:tennis,
            heading:"Tennis",
            paragraph:"In India, tennis is one of the most popular sports. The nation is home to a huge number of tennis fan base. They watch all of the big events, including the ATP, Wimbledon, and US Open, avidly. As a result, there are many betting options available to bettors who enjoy tennis. GamesWalla offers the best tennis betting odds and markets. You can also access the top tennis betting sites on GamesWalla."
        },
        {
            image:greyhound,
            heading:"Greyhound",
            paragraph:"Greyhound betting has created a massive fan base in India in recent years. GamesWalla offers greyhound betting markets for fans in India. You can bet on your favorite hounds and win huge prizes. Meanwhile, don’t forget to check out the top greyhound betting sites mentioned on the site."
        },

    ]

    return (
        <>
            <h1 className=" text-2xl md:text-4xl font-bold text-gray-900 my-6">Bet On The Most Popular Sports In                India</h1>
            <div className="sm:mx-16 flex flex-wrap justify-around p-6">
                {
                    SportsCard.map((data,index)=>
                        <SportTypeCard data={data}/>
                    )
                }
            </div>
        </>
    )
}
