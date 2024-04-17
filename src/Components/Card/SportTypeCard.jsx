export const SportTypeCard = (props) => {
    return (
        <div className="md:card rounded-xl overflow-hidden border border-red-300  bg-base-100 shadow-xl mb-6">
            <figure className='bg-red-50 transition ease-in-out hover:scale-105'><img src={props.data.image} alt="Movie" className=" mix-blend-darken m-auto"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{props.data.heading}</h2>
                <p className="md:w-[20rem] text-start">{props.data.paragraph}</p>
<a href='https://wa.link/8l2fxm' className={"btn btn-error btn-lg bg-red-600 text-white text-xl "}>
    Get Account
</a>
            </div>
        </div>
    )
}
