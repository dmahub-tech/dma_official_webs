import React from 'react';
import Link from "next/link";

const GetStarted = ({type}: {type: string}) => {
    return (
        <div
            className={`call-action-banner c-b pt-60 pb-60 position-re radius-10 gr-purple-red-bg`}
            data-overlay-dark="0"
        >
            <div className="row position-re ontop">
                <div className="col-lg-7">
                    <div className="text">
                        <h6 className="sub-title fw-400">Already interested!</h6>
                        <h4 className="fw-800">Don&lsquo;t wait and start now !</h4>
                        <p className="text-light">Tell us which describes you, and we&lsquo;ll get in touch with next
                            steps.</p>
                    </div>
                </div>
                <div className="col-lg-5 valign">
                    <div className="call-button full-width d-flex justify-content-end">
                        <div
                            data-cal-namespace=""
                            data-cal-link="sogtheimmortal/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="butn butn-md bg-light radius-30">
                            <span className="text text-dark slide-up">Get Started</span>
                            <span className="text text-dark slide-down">Get Started</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-over bg-img opacity-3 radius-30" data-background="img/patterns/call-action.png"></div>
        </div>
    );
};

export default GetStarted;