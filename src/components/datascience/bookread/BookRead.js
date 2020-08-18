import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
import { books } from '../books.js';
import LazyLoad from 'react-lazy-load';

class BookRead extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount() {
    let book = books.find(b => b.uniqueName == this.props.params.uniqueid) ;
    this.setState({ b: book});
    document.title="Read "+book.name;
  }
  render() {
    let b = this.state.b;
    return (
      b ? <div>
        {/* <section className="banner-section bg-banner">

          <div className="container">
            <div className="breadcrumb-share clearfix hidden-xs">

              <div className="pull-left">
                <div className="basic-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/"><span>Home</span></a>&nbsp;/&nbsp;
                        </li>
                    <li>
                      <a href="/books"><span>Books</span></a>&nbsp;/&nbsp;
                        </li>
                    <li className="active">
                      <span>{b.name}</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>


            <div className="row">

              <div className="col-md-8">
                <h1>{b.name}</h1>
                <p style={{ fontSize: "18px", lineHeight: "30px" }}> Author - {b.author} </p>
              </div>

            </div>


          </div>

        </section> */}
        <LazyLoad 
      debounce={false}
      offsetVertical={500}
      >
        <div className="pages">
          {(new Array(b.pages)).fill(0).map((r, i) => <img src={b.url.replace('$pageno$', ('00' + (i + 1)).slice(-3))} alt={"Book "+b.name +" page "+(i+1)}/>)}
        </div>
</LazyLoad>
        

      </div> : null);
  }
}

export default BookRead;
BookRead.contextTypes = {
  router: PropTypes.func.isRequired
};
