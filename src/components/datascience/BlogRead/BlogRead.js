import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
const urls=[
  "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/bringing-the-best-out-of-jupyter-notebooks-for-data-science-f087.html",
  "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/sample.html",
  "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/visual-wake-words-with-tensorflow-lite-micro-8578e59ea6f9.html",
  "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/using-tensorflow-2-for-state-of-the-art-natural-language-process",
  "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/stop-installing-tensorflow-using-pip-for-performance-sake-5854f9",
];
class BlogRead extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch("https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/"+ this.props.params.uniqueid)
      .then(res=>res.text())
      .then(data=>{
        let el = document.createElement( 'html' );
        el.innerHTML=data.replace(/max\/[0-9][0-9]\//g, "max/1400/");
        document.querySelector('.article').append(el.querySelector("article"));
        document.querySelector('[href^="/@"]').parentElement.parentElement.parentElement.style.display="none";
        document.querySelectorAll("noscript").forEach(sc => sc.previousElementSibling.style.display="none");
        document.querySelector("article section").style.display="none";
        // try{
        //   el.querySelector("article img").parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
        // }
        // catch(ex){
        //   console.log(ex);
        // }
        // document.querySelector("article h1").nextElementSibling.style.display="none";
      });
    }, 0);
  }
  render() {
    return (
      <div className="blog-read">
        <h4>{this.state.topic}</h4>
        <div className="article" />
      </div>);
  }
}

export default BlogRead;
BlogRead.contextTypes = {
  router: PropTypes.func.isRequired
};
