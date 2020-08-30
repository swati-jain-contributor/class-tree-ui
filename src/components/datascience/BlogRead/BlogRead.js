import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
import {blogs} from '../blogs';

class BlogRead extends React.Component {
  constructor(props, context) {
    super(props, context);
    let blog = blogs.find(b => b.uniqueid == this.props.params.uniqueid) ;
    // this.setState({ b: blog});
    this.state = {
      b:blog
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
    document.title= this.state.b.topic;
  }
  render() {
    return (
      <div className="blog-read">
        <div className="article" />
      </div>);
  }
}

export default BlogRead;
BlogRead.contextTypes = {
  router: PropTypes.func.isRequired
};
