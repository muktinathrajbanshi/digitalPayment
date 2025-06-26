import React, { useState } from 'react';
import workapi from './API/workApi';

const HowitWorks = () => {

    const [workData, setWorkData] = useState(workapi);
    console.log(workData);

  return (
    <>
      <section>
        <div className="work_container container">
            <h1 className="main_heading text-center"> How does it Work </h1>
            <div className="row">

                {
                    workData.map((curElem) => {
                        const {id, logo, title, info} = curElem;
                        return (
                            <>
                                <div className="col-12 col-lg-4 text-center work_container_subdiv">
                                    <i class={`fontawesome_style ${logo}`}></i>
                                    <h2 className="sub_heading">{ title }</h2>
                                    <p className="main-hero-para w-100">
                                    { info }
                                    </p>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
      </section>
    </>
  );
};

export default HowitWorks;
