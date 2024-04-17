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
            paragraph:"GamesWalla provides a selection of online casino sites where you can play different Casino games from multiple reliable software vendors. "
        },
        {
            image:blackjack,
            heading:"Blackjack",
            paragraph:"There are 18 blackjack slots on the bookmaker’s website, including the most sophisticated iterations of this well-known game. "
        },
        {
            image:roulette,
            heading:"Roulette",
            paragraph:"Along with eighteen online versions of the same game that can be played on GamesWalla.in The website also features sixteen variations of slot roulette. "
        },
        {
            image:baccarat,
            heading:"Baccarat",
            paragraph:"Numerous live baccarat variants, including an accelerated version of this well-known game, are available on the website. "
        },
        {
            image:slotgames,
            heading:"Slot games",
            paragraph:"The bookmaker not only offers casino games but also does slot games. GamesWalla has an extensive catalog of various titles ranging from simple slots to high-level slots. "
        },
        {
            image:sports,
            heading:"Sport Games",
            paragraph:"GamesWalla offers its customers a chance to prove themselves through the amazing collection of sports games in its library. "
        },
        {
            image:cricket,
            heading:"Cricket",
            paragraph:"Cricket is the most popular sport in India and every Indian is a cricket fan. Cricket is even more popular than the national sport, hockey. "
        },
        {
            image:football,
            heading:"Football",
            paragraph:"Another well-liked sport that is appreciated in India is football. Football became popular in India because Indians were exposed to the Premier League, La Liga, and the World Cup.  "
        },
        {
            image:horse,
            heading:"Horse racing",
            paragraph:"One of the greatest things about GamesWalla, which covers specialized sports, is horse racing. The website that offers betting does not ignore niche sports like horse racing.  "
        },
        {
            image:kabaddi,
            heading:"Kabaddi",
            paragraph:"Kabaddi is a sport that is very niche but has betting markets all over the world. You can find the best Kabaddi betting markets on GamesWalla. "
        },
        {
            image:tennis,
            heading:"Tennis",
            paragraph:"In India, tennis is one of the most popular sports. The nation is home to a huge number of tennis fan base. They watch all of the big events, including the ATP, Wimbledon, and US Open, avidly. "
        },
        {
            image:greyhound,
            heading:"Greyhound",
            paragraph:"Greyhound betting has created a massive fan base in India in recent years. GamesWalla offers greyhound betting markets for fans in India. "
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
