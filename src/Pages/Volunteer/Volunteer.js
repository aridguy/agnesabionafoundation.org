import React, { useEffect } from "react";
import './Volunteer.css'
import AOS from 'aos';
// import Navbar from "../../Components/Navbar/Navbar";
import videoBg from '../../Assets/animation.mp4'
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'

const Volunteer = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [state, handleSubmit] = useForm("mwkjdqod");
    if (state.succeeded) {
        return Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    } 

    return (
        <div className="volunteers">
            <video className="playVid" src={videoBg} autoPlay loop muted />
            <div className="formBg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="formInnerPlace p-5">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h4 className="text-white">
                                            We need some informations for us to verify you as a volunteer with us.
                                        </h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <p><input type="text" name="name" placeholder="full name" className="form-control" id="name" />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="address" placeholder="address" className="form-control" id="address" />
                                        <ValidationError
                                            prefix="Address"
                                            field="address"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="country" placeholder="country" className="form-control" id="Country" />
                                        <ValidationError
                                            prefix="Country"
                                            field="country"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="number" placeholder="phone number (home/Mobile)" className="form-control" id="number" />
                                        <ValidationError
                                            prefix="Number"
                                            field="number"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="email" placeholder="email address (home/Mobile)" className="form-control" id="email" />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="date" name="date of birth" placeholder="date of birth" className="form-control" id="dob" />
                                        <ValidationError
                                            prefix="Dob"
                                            field="dob"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <h4 className="text-white">Ifyou are involved with us as a volunteer and an emergency arises, whom should we contact?</h4>
                                    <p><input type="text" name="date of birth" placeholder="name of NOK" className="form-control" id="nok-dob" />
                                        <ValidationError
                                            prefix="Next of kin Dob"
                                            field="next of kin dob"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="relationship NOK" placeholder="relationship to NOK" className="form-control" id="relationship" />
                                        <ValidationError
                                            prefix="Relationship"
                                            field="relationship"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <p><input type="text" name="number next of kin" placeholder="phone number  (home/Mobile)" className="form-control" id="nok-number" />
                                        <ValidationError
                                            prefix="Nok number"
                                            field="nok number"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <h4 className="text-white">Equal<span className="opportunityEqu">Opportunities</span></h4>
                                    <span className="text-white">
                                        Help Bristol’s Homelessis committed to equal opportunities
                                        and all volunteer recruitment decisions will be based on merit,
                                        suitabilityfortheroleandexperience.All volunteer recruitment decisions will
                                        not be influenced by race, colour, nationality, religion, sex,
                                        marital status, family status, sexualorientation, disability,
                                        age. Help Bristol’s Homeless fully endorses a working
                                        environment free fromdiscriminationandharassment.
                                    </span>
                                    <h4 className="text-white">Disclosure<span className="opportunityEqu">ofCriminalBackground</span></h4>
                                    <span className="text-white">
                                        Do you have any criminal prosecutions pending (excluding minor motoring offences e.g. speeding)?
                                        Have you ever been convicted of any criminal offences which are not yet spent under The Rehabilitation
                                        of Offenders Act 1974 or The Re habilitation of Offenders(NI) Order 1978. Please notethat any ex-offenders
                                        of such convictions will be considered on an individual basis and the natureand potential relevance of the
                                        offence to the role being applied for will be taken into account in the recruitment decision.
                                    </span>
                                    <p className="mt-2"><input type="text" name="criminal records" placeholder="Have you ever been convicted in last 5 years?" className="form-control" id="vforms" />
                                        <ValidationError
                                            prefix="Record"
                                            field="record"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <h4 className="text-white">Your <span className="opportunityEqu">Skills and interests</span></h4>
                                    <span className="text-white">
                                        Help Bristol’s Homelessis committed to equal opportunities
                                        and all volunteer recruitment decisions will be based on merit,
                                        suitabilityfortheroleandexperience.All volunteer recruitment decisions will
                                        not be influenced by race, colour, nationality, religion, sex,
                                        marital status, family status, sexualorientation, disability,
                                        age. Help Bristol’s Homeless fully endorses a working
                                        environment free fromdiscriminationandharassment.
                                    </span>
                                    <p className="mt-2"><input type="text" name="experience" placeholder="have a voluntary work experience? if yes please explain!" className="form-control" id="vforms" />
                                        <ValidationError
                                            prefix="Experience"
                                            field="experience"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <h4 className="text-white">How did you learn about us?</h4>
                                    <span className="text-white">
                                        tell us how you learn about ou (Agnes Abiona Foundaton)
                                    </span>
                                    <p><select className="form-control">
                                        <option>Facebook</option>
                                        <option>Instagram</option>
                                        <option>Twitter</option>
                                        <option>Google</option>
                                    </select>
                                        <ValidationError
                                            prefix="Media"
                                            field="media"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <h4 className="text-white">Your <span className="opportunityEqu">Documents</span></h4>
                                    <i className="text-white">upload CV here</i>
                                    <p className="mt-2"><input title="upload CV" type="file" name="upload cv" placeholder="have a voluntary work experience? if yes please explain!" className="form-control" id="vforms" />
                                        <ValidationError
                                            prefix="Cv"
                                            field="cv"
                                            errors={state.errors}
                                        />
                                    </p>
                                    <i className="text-white">passport photograph</i>
                                    <py className="mt-2"><input title="passport photo" type="file" name="passport" placeholder="have a voluntary work experience? if yes please explain!" className="form-control" id="vforms" />
                                        <ValidationError
                                            prefix="Passport"
                                            field="passport"
                                            errors={state.errors}
                                        />
                                    </py>
                                    <p className="mt-2 text-white"><input title="upload CV" type="checkbox" name="passport" placeholder="have a voluntary work experience? if yes please explain!" id="vforms" /> every informations i have provided about my self are true</p>
                                    <p className="mt-2 text-white"><input title="upload CV" type="checkbox" name="passport" placeholder="have a voluntary work experience? if yes please explain!" id="vforms" /> I agree to agnesabionafoundation terms and conditions</p>
                                    <p className="mt-2 text-white"><input title="upload CV" type="checkbox" name="passport" placeholder="have a voluntary work experience? if yes please explain!" id="vforms" /> I agree to provide additional information to the organization (AAF) on request</p>
                                    <button className="btn btn-info">Submit Application</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer