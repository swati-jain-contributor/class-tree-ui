import React from 'react';
import '../header.less';
import '../reset.less';
import '../style.less';
const b = {
  id: 1,
  img: "https://books.google.co.in/books/content?id=9klLaqIUbSAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70PgALsiv-WZOu_fGraV_P_T3nVCmRT19oqL16RD2ELiXE0xD2QoVD3IO_JNGYWjZXoPKaHirAAoofsxdVRSaPY4-2ymY6Qb5wADXPe5B8NvXyfzWfPULanHQugy4Ko9Qb2yeFv",
  name: "Head First Statistics",
  reads: 120,
  author: "Dawn Griffiths",
  rating: "4",
  loadName: "Introduction%20to%20Machine%20Learning_page"
};
class Corporate extends React.Component {
  componentDidMount() {
    setTimeout(() => {

    }, 0);
  }
  render() {
    return (
      <div>
        <section>
          <h2>84% of ORGANIZATIONS WILL FAIL DUE TO THE LACK OF RIGHT SKILLS</h2>
          <span>We carefully craft learning solutions to ensure your organisation is #futureready</span>
          <div />
        </section>
        <section>
          <h3>How we can help</h3>
          <div>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      E-Learning
        </button>
                  </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    With over 3000 e-learning hours developed, we can offer a variety of e-learning solutions for your organisation’s meets. From marketing solutions, knowledge transfer and application training, our team has a solution for all your e-learning needs.
      </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Upskilling
        </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  Our training philosophy is built on a platform of experiential learning that believes people learn best when they ‘do’, ‘reflect’ and ‘apply’ in a live instructor-led environment. Our training programs are innovative in their ability to customise content and delivery to ensure your specific training and business requirements are addressed.
      </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Agile Hiring
        </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  Our industry-renowned ‘train and deploy’ model helps you scale your hiring requirements with quality sourcing, customised training and placements across various domains and geographies. These models significantly reduce onboarding time, significantly reduce cost (30% - 60%) and increase candidate fitment.
      </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section>
          <h4>We specialise in these courses</h4>
        </section>
        <section>
          <h4>Trusted by 200+ Organizations</h4>
        </section>
        <section>
          <h4>Get in touch with us</h4>
        </section>
        <section>
          <h4>Corporate Reviews</h4>
        </section>
      </div>);
  }
}

export default Corporate;
