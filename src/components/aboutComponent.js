import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({lead}) {
    return(
        <div key={lead.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={lead.image} alt={lead.name} />
                </Media>
                <Media body className="col-12">
                    <Media heading>{lead.name}</Media>
                    <p>{lead.designation}</p>
                    <p>{lead.description}</p>
                </Media>    
            </Media>
        </div>
    );
}

function About(props) {

    const leaders = props.leaders.map((lead) => {
        return (
            <RenderLeader lead={lead} />
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2019, Recipe World quickly established itself as a culinary icon par excellence in India. With its unique brand of world fusion cuisine that can be found nowhere else. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The recipe traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Sanjeev Kapoor, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Apr. 2019</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">India Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Make awesome dishes following recipes given</p>
                                <footer className="blockquote-footer">Sanjeev Kapoor,
                                <cite title="Source Title">Ceo,Recipe World</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About; 