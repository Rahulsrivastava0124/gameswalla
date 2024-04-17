import GuideBetting from '../Images/GuideBetting.webp'

export const BettingGuide = () => {
    return (
        <>
            <h1 className=" text-2xl md:text-4xl font-bold text-red-700 my-6 bg-gray-200 p-3 mx-8 md:mx-16 rounded-2xl">India's Most Comprehensive Betting
                Guide.</h1>
    <div className="md:my-12 my-8 md:mx-16 mx-6">
        <div className="flex flex-wrap sm:mt-10  ">
        <div className=" md:w-[45%] w-[100%] md:mr-6">
                    <img src={GuideBetting} alt="guide_photo " className="sm:h-[100%] rounded-2xl object-contain"/>
                </div>
                <div className="md:w-[50%] w-auto p-6 text-start ">
                    <p className="mb-2">
    We have created GamesWalla.in in order to help you gamble legally and profitably in India. We’ll provide you with step-by-step guides on everything from choosing the right best betting sites to becoming a profitable player and making safe bets.
</p>
                    <p className="mb-2">
    The Exchange Market is a prominent platform for online betting in India with instant withdrawal. It features various<span className="text-blue-600"> online betting options for both new and expert betting players</span>. Here betting players can easily find the right betting site.
                        </p>

                    <p className="mb-2"> Our goal is to share all the betting-related updates, such as How to Find
                        the<span className="text-blue-600"> Best Online Betting Site, how to deposit money on a betting site</span>,
                        How to withdraw,<span className="text-blue-600"> How to get a welcome bonus, How to place bets, Today Match Prediction, Betting Tips</span> & Tricks, Reviews, and more.
                    </p>

  <p className="mb-2 font-medium">  We aim to provide Indian players with the best possible answers to all of their online betting questions. Here are the most common questions we get, such as:</p>
<ul className="list-disc mb-2 ml-9   ">
    <li>Is Online Betting Legal in India?</li>
    <li>How can I get started with online gambling?</li>
    <li>Which betting site is the best for Indian bettors?</li>
    <li>How Can I make money with Gambling?</li>
    <li>How Can I withdraw money from online betting sites?</li>
</ul>

    <p className="mb-2">Are you looking to play online betting in India? We’ll guide you through the most profitable ways to betting in India. So please follow us on this journey.
</p>
                </div>

            </div>
        </div>
            </>
    )
}
