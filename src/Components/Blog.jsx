import {Blogcard} from "./Card/Blogcard";

export const Blog = () => {
    return (
        <>
        <h1 className="md:text-4xl mt-6 font-medium"> Blogs  </h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Blogcard/>
                    </div>
                </div>
            </section>
        </>
    )
}
