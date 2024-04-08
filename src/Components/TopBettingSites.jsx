export const TopBettingSites = () => {
    const TableList=[
        {
            bookmark:'GamesWalla.NET',
            bonus:'Welcome 100%',
            turnover:'Turnover: 5 x Deposit Amount\n' +
                '\n',
            minOdds:'No Min.',
            link:''
        },
        {
            bookmark:'SS Exchange',
            bonus:'Welcome 100%',
            turnover:'Turnover: 3 x Deposit Amount\n' +
                '\n',
            minOdds:'No Min.',
            link:''
        },
        {
            bookmark:'SKY EXCHANGE',
            bonus:'Welcome 5% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'No Min.',
            link:''
        },
        {
            bookmark:'MONY777',
            bonus:'Welcome 7% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'No Min.',
            link:''
        },
        {
            bookmark:'SATFAIR',
            bonus:'Welcome 10% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'2.0',
            link:''
        },
        {
            bookmark:'LOTUSBOOK247',
            bonus:'Welcome 10% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'2.0',
            link:''
        },
        {
            bookmark:'BETXHUB247',
            bonus:'Welcome 10% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'2.0',
            link:''
        },
        {
            bookmark:'SATSPORT',
            bonus:'Welcome 10% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'2.0',
            link:''
        },
        {
            bookmark:'SATSPORT247',
            bonus:'Welcome 100%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'No Min.',
            link:''
        },
        {
            bookmark:'DIAMOND EXCHANGE',
            bonus:'Welcome 10% to 20%',
            turnover:'Turnover: 3 x Deposit Amount',
            minOdds:'2.0',
            link:''
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
                            <th className='hidden md:table-cell'>TURNOVER</th>
                            <th className='hidden md:table-cell'> MIN ODDS</th>
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
                                    <td className="text-base hidden md:table-cell">{item.turnover}</td>
                                    <td className="text-base hidden md:table-cell">{item.minOdds}</td>
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
