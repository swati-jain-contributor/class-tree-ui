import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './course-card.less';

let cordova;
class CourseCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let pc = this.props.course;
    let foldername;
    if (pc.technology == "sql")
      foldername = "SQL";
    else if (pc.stream.indexOf("Machine Learning") > -1)
      foldername = "machine-learning";
    else if (pc.stream.indexOf("Probability") > -1)
      foldername = "probability";
    else if (['excel', 'spreadsheets', 'theory', 'scala', 'tableau', 'power_bi', 'git', 'shell'].indexOf(pc.technology) > -1)
      foldername = pc.technology;
    else if (pc.stream.indexOf("Visualization") > -1)
      foldername = "visualization";
    else if (pc.technology == "r" && pc.stream.indexOf('Programming') > -1)
      foldername = "r";
    else if (pc.technology == "python" && pc.stream.indexOf('Programming') > -1)
      foldername = "python";
    else if (pc.stream.indexOf('Cleaning') > -1)
      foldername = "cleaning";
    else
      foldername = "others";

    return (
      <div>
        <a href={'/course/' + pc.title.toLowerCase().replace(/ /g, "-")} onClick={(e)=>e.preventDefault()}>
          <article className="course" onClick={() => { this.context.router.push('/course/' + pc.title.toLowerCase().replace(/ /g, "-")); window.scrollTo(0, 0); }}>
            <p className="live-instuctor">Instructor Led 1:1 Personal Session</p>
            <img alt={pc.title} className="course-img" src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/courses/" + foldername + "/" + pc.id + ".webp"} />
            <h3>{pc.title}</h3>
            <p>{pc.description.length > 80 ? pc.description.substring(0, 80) + "..." : pc.description}</p>
            <p className="time"><i className="fa fa-clock" aria-hidden="true" /> &nbsp;&nbsp; {pc.time} <span>When you are available</span></p>

            <p className="price"> <span className="actual-price">{pc.price * 1.60} INR</span><span className="sale-price">{pc.price} INR</span></p>
            {/* <p>{pc.stream}</p> */}
            {/* {pc.id} */}
            {/* <p>{pc.technology}</p> */}
            <img alt={"Technologgy-" +pc.technology} className="tech-img" src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/00fff168c1ea7a30add9c8718b3bd3452321da7b/tech/" + pc.technology + ".svg"} />
          </article>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
CourseCard.contextTypes = {
  router: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
