export const TopBettingSites = () => {
    const TableList=[
        {
            bookmark:'Casino Games',
            bonus:'Welcome 100%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'BlackJack',
            bonus:'Welcome 100%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Roulette',
            bonus:'Welcome 5% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Slot Games',
            bonus:'Welcome 7% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Sport Games',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Cricket',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Football',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Horse Racing ',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Kabaddi',
            bonus:'Welcome 100%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Tennis',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },
        {
            bookmark:'Grayhound',
            bonus:'Welcome 10% to 20%',
            link:'https://wa.link/8l2fxm'
        },

    ]
    return (
        <>
            <h1 className=" text-2xl md:text-4xl font-bold text-red-700 sm:my-16 my-8 bg-gray-200   p-3 mx-8 md:mx-16 rounded-2xl">Top Betting Site's in India</h1>
            <div className=" bg-gray-50 border border-red-500 mx-4 md:p-8 md:mx-16 rounded-md">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className='bg-red-50'>
                        <tr className="text-base border-b-2 border-red-300">
                            <th>RANK</th>
                            <th>BOOKMAKER</th>
                            <th className='hidden md:table-cell'>BONUS</th>
                            <th> LINK</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            TableList.map((item,index) => (
                                <tr className="rounded-l-2xl">
                                    <th className='text-gray-500'>{index+1}</th>
                                    <td className="font-bold ">{item.bookmark}</td>
                                    <td className="text-base hidden md:table-cell">{item.bonus}</td>
                                    <td><a href={item.link} className='btn rounded-lg btn-sm btn-outline btn-error'>Get Bonus</a></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
