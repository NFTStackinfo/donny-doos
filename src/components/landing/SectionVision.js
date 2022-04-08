import React, {forwardRef} from 'react';
import Fade from "react-reveal/Fade";

const SectionVision = forwardRef ((props, ref) => {
    return (
        <section id="vision" className="section section-vision" ref={ref}>
            <div className="container">
                <div className="vision-container flex flex-col gap-12 flex-row-md">
                    <div>
                        <img src="/assets/vision.png" alt="The Vision" className="margin-inline-auto"/>
                    </div>
                    <Fade right>
                        <div>
                            <h2 className="uppercase ff-primary fs-900 ls-2 fw-normal">The vision</h2>

                            <p className="fw-500 fw-bold fs-500 margin-top-6">
                                The message we want to spread is simple, but important to us and hopefully, to many more. <br/>
                                Every kid, no matter what race, background or upbringing, deserves a happy and healthy childhood. <br/>
                                We aim to raise awareness and provide help where it’s needed the most, but we need you, too!
                            </p>

                            <p className="fw-500 fw-bold fs-500 margin-top-4">
                                We are looking for brave individuals with similar belief system to join us on our incredibly challenging journey. In return, an action plan was put in place to provide value for those that would. <br/>
                                Together, we can do it both. <br/>
                                Kindness will always prevail, and community led by good people will prove that.
                            </p>

                            <h3 className="fs-600 ls-2 ff-primary primary-text margin-top-12 fw-normal">We all can doobetter!</h3>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
})

export default SectionVision;