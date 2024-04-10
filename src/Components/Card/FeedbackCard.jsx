import {StarIcon} from '@heroicons/react/24/solid'
export const FeedbackCard = () => {
    return (
        <>
<div className="card border border-red-500 rounded-lg p-2 w-[25rem] mb-4">
    <div className="card-body text-center">
        <p className="mb-2 text-lg">
            There are a few aspects of this casino that I found extremely appealing: winnings are withdrawn fairly quickly (within 1-2 hours, which is a great sign for a casino); a highly user-friendly mobile interface (I play most frequently from a mobile device); live chat is always available! This greatly boosts Exchmarket’s reputation!
        </p>
        <h5 className='mb-2 text-lg text-red-700'>
            Rajash
            <p className='text-sm text-black'> GamesWalla</p>
        </h5>
<span className='flex justify-around h-10 text-red-700'>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
</span>
    </div>
</div>

        </>
    )
}
