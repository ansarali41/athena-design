import React from 'react';
import './RunningProject.css'
import running from '../../image-icon/20 [Converted]@2x.png'
import { Button } from 'react-bootstrap';

const RunningProject = () => {
    return (
        <section className='running-project' id='service'>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <img src={running} alt=""/>
                    </div>
                    <div className="col-md-6 py-5">
                        <h1 className='mt-5 mb-3 pt-4'>Stay Running & Project</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <Button className='mt-3' id="btnstyle">Contact Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningProject;