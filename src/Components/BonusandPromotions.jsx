import React from "react";
import PhoneApp from '../Images/PhoneApp.png'
import master from '../Images/master card.png'
import visa from '../Images/visa.png'
import paypal from '../Images/paypal.png'
import crypto from '../Images/cryptocurrency.png'

export const BonusandPromotions = () => {
    return (
        <div className="my-10">
            <h1 className=" text-gray-900 font-bold sm:my-12 my-8 md:text-4xl text-2xl bg-gray-200  p-3 mx-8 md:mx-16 rounded-2xl">
                GamesWalla bonuses and promotions
            </h1>
            <div className='px-6'>
            <div className='text-start md:mx-24 text-lg'>
                <p className='mb-3'>Exchmarket offers a wide variety of bonuses and promotions. These bonuses and promotions help in boosting the morale and confidence of the users. They can also help them stand a chance of winning big. They not only provide bonuses and promotions but also conduct special events often. The list keeps constantly updating. However, the welcome bonus remains constant.</p>

                    <p className='mb-3'>Here are the bonus criteria that you need to look out for;</p>
<ul className='mb-3 ml-4'>
    <li> Deposit money between 1k to 15k & Get a 3% Guaranteed Bonus</li>
    <li>   Deposit money between 16k to 40k & Get a 4% Guaranteed Bonus</li>
    <li>Deposit money between 40k to 1 Lac & Get a 5% Guaranteed Bonus</li>
    <li> Deposit money 1 Lac Above and get a 6% Guaranteed Bonus</li>
</ul>
                   <p> You can get a maximum of up to Rs12000 on the site. The fun does not end there. You can now refer your friends and earn money with Exchmarket. You can get a referral bonus of up to Rs5000.</p>

                    <p>Here is everything you need to know about the bonuses and promotions offered by Exchmarket. You can read through it and make the most of it.</p>
            </div>
            <div>
            </div>
                    <div className='md:mx-24 text-lg text-start'>
                        <h2 className="text-3xl my-8 font-medium divider  divider-error">
                            Odds and margins
                        </h2>
                        <p  className='mb-3'>The odds and margins are the most important components of sports betting both online and offline. Taking all the online betting sites in India into considerationGamesWallaoffers the most competitive odds and margins of them all. This helps them attract and retain customers. The odds and margins, however, may vary depending on the popularity of the event or market. There are other factors including the bets placed, and the level of competition it faces from other sportsbooks that come into play.</p>
                        <p className='mb-3'>Odds can be defined as the chance or the probability of an event occurring. The odds are expressed in decimal or fractional format. The odds are the deciding factor that decides the amount you may probably win. This is if you place a bet at the given risk. Higher odds simply mean high risk and low probability of an event occurrence.</p>
                        <p className='mb-3'>On the other hand, margins represent the commission of the bookmaker. Bookmakers make sure they get their share of profit by using margins. The margin can be defined as the difference between the odds offered by the company and the actual probability of an event occurring. The bettor gains an advantage if the margin is low. The bookmaker gets a smaller share of the profit that way. This is whereGamesWallashines. They offer lower margins to attract customers. Both the customer and the bookmaker can profit from it.</p>
                    </div>
                <div className='md:mx-24 text-lg text-start'>
                    <h2 className="text-3xl my-8 font-medium divider  divider-error">
                       Mobile App
                    </h2>
                    <div className='flex flex-wrap '>
                        <div className='w-[40rem] mb-6'>
<p className='mb-6'>Exchmarket makes its presence available in the form of both a website and a mobile app. It is to reach out to more customers. Nowadays everyone is busy on their smartphones and people barely use a website on a desktop to function. The mobile app is more convenient. You can simply download it from the website and use it on your smartphone.</p>
                            <p>The mobile version ofGamesWallacontains features that include placing bets, checking your wallet balance, depositing and withdrawing, watching live matches, and checking live scores. You can also receive notifications on bonuses and promotions. The app has a user-friendly interface that any user would find easier to adapt to.</p>

                        </div>
                        <div className=" w-[30rem] ">
                           <img src={PhoneApp} alt={"Phone App"} className='h-[30rem] m-auto'/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl my-8 font-medium divider  divider-error">
                         Payment Methods
                        </h2>
                        <div className="flex flex-wrap justify-center" >
                            <img src={master} alt='master card' className="w-[10rem] md:mx-4 mx-2 border px-9 rounded-lg py-4   border-red-300 shadow mb-4"/>
                            <img src={visa} alt='visa card' className="w-[10rem] md:mx-4 mx-2 border px-9 rounded-lg py-4 border-red-300 shadow mb-4"/>
                            <img src={paypal} alt=' paypal' className="w-[10rem] md:mx-4 mx-2 border px-9 rounded-lg py-4 border-red-300 shadow mb-4"/>
                            <img src={crypto} alt='crypto' className="w-[10rem] md:mx-4 mx-2 border px-9 rounded-lg py-4 border-red-300 shadow mb-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
