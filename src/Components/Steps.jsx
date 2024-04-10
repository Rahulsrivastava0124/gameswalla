import Step1 from '../Images/Step1.png'
import Step2 from '../Images/contactme.png'
import Step3 from '../Images/10-minutes.png'

export const Steps = () => {
    return (
        <>
            <div className="px-4 py-16 sm:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-red-700 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"

            >
              <defs>
                <pattern
                    id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7"/>
                </pattern>
              </defs>
              <rect
                  fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative text-red-700">Step</span>
          </span>{' '}
                     to Getting Betting ID
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                    <div className="relative text-center">
                        <div
                            className="flex items-center justify-center w-56 h-56 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-56 sm:h-56">

                        <img src={Step1} alt="Step1"   className="w-12 h-12 text-deep-purple-accent-400 sm:w-40 sm:h-40" />
                        </div>
                        <h6 className="mb-2 text-2xl font-extrabold">Submit the Form</h6>


                        <div className="top-0 right-0 flex items-center justify-center h-56 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative text-center">
                        <div
                            className="flex items-center justify-center w-56 h-56 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-56 sm:h-56">

                           <img src={Step2} alt="step2"/>
                        </div>
                        <h6 className="mb-2 text-2xl font-extrabold">The support team will contact you  </h6>


                        <div className="top-0 right-0 flex items-center justify-center h-56 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative text-center">
                        <div
                            className="flex items-center justify-center w-56 h-56 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-56 sm:h-56">

                          <img  src={Step3} alt="step3" className="w-12 h-12 text-deep-purple-accent-400 sm:w-40 sm:h-40"/>
                        </div>
                        <h6 className="mb-2 text-2xl font-extrabold">Get your ID in 2 Min.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
