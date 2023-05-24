import * as React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SideSocialIcons from '../../Components/SideSocialIcons';
import Pics1 from '../../Assets/whatwedo/edsuport.jpg'
import Pics3 from '../../Assets/whatwedo/pics3.jpg'
import Pics2 from '../../Assets/whatwedo/pics2.jpg'
import Pics4 from '../../Assets/whatwedo/pics4.jpg'


const WhatWeDo = () => {

    return (
        <div>
            <Navbar />
            <section className="section3">
                <div className='container'>
                    <div className='row mt-5'>
                        <h3 className='text-center purple'>What We Do</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='mt-5'>
                                <h3 className='purple w-700'>EDUCATIONAL SUPPORT</h3>
                                <p>
                                    AAF is guided by the principle that education is basic human right and all children must have
                                    access and also believe that it is one of the veritable empowerment tools against poverty.
                                    Education of girls from poor family background is a challenge. AAF provide education support
                                    for these girls since they are the group that are likely to be deprived of this right on
                                    account of their entrenched poverty and marginalized social status. AAF provide for
                                    girls from the poor family background essential school needs such as uniforms, school
                                    and examination fees, shoes, books and stationery. This support is vital to forestall
                                    these girls drop out of school to prevent them being taken low paid employment job in
                                    exploitative condition or resort to paid sex with older men in order to continue
                                    their education at the cost of their lives in the long term.
                                    Our approach for selection of girls for education support is
                                    based solely on need and not on academic performance.
                                    This is done through information received from our community
                                    partners and investigated by our staff to identify girls who are at the risk of dropping
                                    out of school due to poverty. If these girls are deprived of education, they may face early
                                    marriage or migrating to cities to work as a child labourers where they are often exploited.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className=''>
                                <img className='mt-5' width='100%' src={Pics1} alt='pics' />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div className='mt-5'>
                                <h3 className='purple w-700'>VOCATIONAL SKILLS AQUISATION/ TRAINING</h3>
                                <p>
                                    One of the focal points of AAF is to provide support through vocational skills acquisition
                                    to indigent girls and young women who are not interested in pursuing formal education to
                                    fulfill their potential and this will afford them opportunity to break cycle of poverty
                                    that currentlyplague people from poor family background. After the completion of the training
                                    AAF will also support them with necessary tools, equipment, grant and raw materials to start
                                    their businesses. The foundation will also constitute supervisory bodies to monitor the
                                    progress and also provide advisory services in case there is a challenge encounter during the
                                    formative stage of the business. AAF has partnered with local training institutes and businesses,
                                    participants could choose from a variety of vocations such as sewing, hairdressing, perfume
                                    making, food catering services, bakeries and psalteriesetc. This vocational skills acquisitions
                                    will be combine with entrepreneurial skills to equip the
                                    beneficiaries on how to manage business successfully
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className=''>
                                <img width='100%' src={Pics3} alt='pics' />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div className='mt-5'>
                                <h3 className='purple w-700'>MENTORING</h3>
                                <p>
                                    As girls navigate adolescent stage, they face challenge of moving through physical,
                                    psychological, sexual, and emotional development with a healthy sense of self intact.
                                    A mentor at this stage of girl’s life can have an impact in successfully navigating
                                    the years to adulthood.
                                    AAF believe that mentorship should start as early as in the middle secondary
                                    school when girls are starting to form opinion about the world around them and what
                                    to do in the future. This is very important especially with the girls from poor
                                    background who lack the privileged others have to network with successful
                                    individuals who can help them start their careers on the right path. Mentors
                                    are very important in levelling the playing field for girls of all backgrounds
                                    and bridge the gender gap that keeps so many young women from reaching up the
                                    career ladder. From the experience, irrespective of your background and
                                    education attainment, the sooner girls are exposed to and have a chance
                                    to learn from positive female role models across a variety of roles and
                                    fields the better they think limitlessly about their future and able
                                    to tackle the obstacles they encounter along their career path in life.

                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className=''>
                                <img className='mt-5' width='100%' src={Pics2} alt='pics' />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div className='mt-5'>
                                <h3 className='purple w-700'>LEADERSHIP TRAINING</h3>
                                <p>
                                    AAF recongnises the importance of providing girls and young women skills
                                    and confidence to become leaders in their societies. The leadership
                                    training for girls and young women of this foundation will empower
                                    necessary skills in leadership quality needed for them to actively
                                    participate in the leadership role. The training will build leadership
                                    proficiency in girls and young women with the goal of preparing
                                    generation of women leaders who have the tendency to be responsible
                                    and responsive leaders in the nearest future. The training will
                                    include leadership training workshop, seminar, conference,
                                    learning visits and organizing advocacy

                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className=''>
                                <img className='mt-5' width='100%' src={Pics4} alt='pics' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SideSocialIcons />
            <Footer />

        </div>
    )
}

export default WhatWeDo