import React from 'react'

const Education = () => {
    return (
        <div className='container_bg_style'>
            <div className='education_wrapper'>
                <h2>education</h2>
                <div className='education_list'>
                    <div className='education_item1'>
                            {[
                                { school: 'S.F.S Matric Hr Sec School', details: 'SSLC - MAR 2016' },
                                { school: 'SOWDAMBIKAA MATRIC HR.SEC SCHOOL', details: 'HSC - MAR 2018' },
                                { school: 'M.A.M COLLEGE OF ENGINEERING', details: 'B.E(CSE) - JUL 2022' },
                                { school: 'TECHVOLT PRIVATE LTD', details: 'WEB DEVELOPMENT (INTERN)' },
                                { school: 'FUZIONEST PRIVATE LTD', details: 'ASSOCIATE SOFTWARE DEVELOPER (9 MONTHS) - JAN 2024' },
                            ].map((item, index) => (
                                <div
                                    className='work_details'
                                    key={index}
                                   
                                >
                                    <h6>{item.school}</h6>
                                    <p>{item.details}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education