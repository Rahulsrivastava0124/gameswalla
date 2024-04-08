export const SportTypeCard = (props) => {
    return (
        <div className="md:card rounded-xl overflow-hidden border border-red-300  bg-base-100 shadow-xl mb-6">
            <figure className='bg-red-50 md:p-[2rem] p-[2rem]'><img src={props.data.image} alt="Movie" className="w-[10rem] mix-blend-darken m-auto"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{props.data.heading}</h2>
                <p className="md:w-[20rem] text-start">{props.data.paragraph}</p>

            </div>
        </div>
    )
}
