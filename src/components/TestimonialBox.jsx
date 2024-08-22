import React from 'react'
import user from '../assets/images/user.png'
function TestimonialBox() {
  return (
    <>
      <div className="bg-white w-[70%] shadow-lg rounded-xl mt-5">
                <div className="p-5 after:content-[',,'] after:text-4xl after:float-right after:text-[#ff4c31] ">
                      <h1 className="font-bold text-2xl 879:text-xl">"The rem value is the same as the em value displayed above. Both units are scalable."</h1>
                      <div className="flex gap-5 mt-8">
                        <img src={user} />
                        <div>
                          <h5 className="font-medium text-xl">Hector Tractor</h5>
                          <p className="font-thin text-xl">Kapan, Area</p>
                        </div>
                      </div>

                    {/* <div className="inline-block float-right">
                      <h1 className="text-9xl">,,</h1>
                    </div> */}


                  </div>
                <div className="p-5 after:content-[',,'] after:text-4xl after:float-right after:text-[#ff4c31] ">
                      <h1 className="font-bold text-2xl 879:text-xl">"The rem value is the same as the em value displayed above. Both units are scalable."</h1>
                      <div className="flex gap-5 mt-8">
                        <img src={user} />
                        <div>
                          <h5 className="font-medium text-xl">Hector Tractor</h5>
                          <p className="font-thin text-xl">Kapan, Area</p>
                        </div>
                      </div>

                    {/* <div className="inline-block float-right">
                      <h1 className="text-9xl">,,</h1>
                    </div> */}


                  </div>
                <div className="p-5 after:content-[',,'] after:text-4xl after:float-right after:text-[#ff4c31] ">
                      <h1 className="font-bold text-2xl 879:text-xl">"The rem value is the same as the em value displayed above. Both units are scalable."</h1>
                      <div className="flex gap-5 mt-8">
                        <img src={user} />
                        <div>
                          <h5 className="font-medium text-xl">Hector Tractor</h5>
                          <p className="font-thin text-xl">Kapan, Area</p>
                        </div>
                      </div>

                    {/* <div className="inline-block float-right">
                      <h1 className="text-9xl">,,</h1>
                    </div> */}


                  </div>

        </div>
    </>
  )
}

export default TestimonialBox
