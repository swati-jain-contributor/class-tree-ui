import React from 'react';
import '../header.less';
import '../reset.less';
import '../style.less';
import { ImageFilterFrames } from 'material-ui/svg-icons';
import {books} from '../books.js';

// function chunkArray(myArray, chunk_size) {
//   let index = 0;
//   let arrayLength = myArray.length;
//   let tempArray = [];

//   for (index = 0; index < arrayLength; index += chunk_size) {
//     let myChunk = myArray.slice(index, index + chunk_size);
//     // Do something if you want with the group
//     tempArray.push(myChunk);
//   }

//   return tempArray;
// }
// let bookSets = chunkArray(books, 3);
class Book extends React.Component {
  componentDidMount() {
    setTimeout(() => {

    }, 0);
  }
  render() {

    return (
      <div>
        <section className="banner-section bg-banner">

          <div className="container">
            <div className="breadcrumb-share clearfix hidden-xs">

              <div className="pull-left">
                <div className="basic-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/"><span>Home</span></a>&nbsp;/&nbsp;
                        </li>

                    <li className="active">
                      <span>Books</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>


            <div className="row">

              <div className="col-md-8">
                <h1>All Books</h1>
                <p style={{ fontSize: "18px", lineHeight: "30px" }}>There are no corners in the world of books except these!</p>
              </div>

            </div>


          </div>

        </section>
        <section className="book-list row">
          {books.map((b, i) => <React.Fragment key={b.id}>
            <div className="col-xs-4 col-md-2 parent">
              <a href={'/book/'+b.uniqueName}><img src={b["img"]} className="img-responsive book" /></a>
            </div>
            {(((i + 1) % 3 == 0) && ((i + 1) % 6 == 0)) ? <div className="col-xs-12 shelf" /> : null}
            {(((i + 1) % 3 == 0) && ((i + 1) % 6 != 0)) ? <div className="col-xs-12 shelf hidden-md hidden-lg" /> : null}
          </React.Fragment>)}
          {
            ((books.length % 6) != 0)?
            <React.Fragment>
            {new Array(books.length % 6).fill(0).map(s=><div className="col-xs-4 col-md-2 parent" key={s}/>)}
            <div className="col-xs-12 shelf" />
            </React.Fragment> : null
          }
        
          {/* {loadBooks()} */}
          {/* {bookSets.map(set => <div className="shelf">
            <div className="wood" />
            {set.map(b => <div className="book"><img src={b.img} /> <h4>{b.name}</h4> <span>{b.author}</span> <span>{b.reads} Reads</span> <div><button><a href={"/book/" + b.uniqueName}>Read Now</a></button></div></div>)}</div>)} */}
          {/* <div className="books"> */}
          {/* {books.map(b => <div className="book"><img src={b.img} /> <h4>{b.name}</h4> <span>{b.author}</span> <span>{b.reads} Reads</span> <div><button><a href={"/book/" + b.uniqueName}>Read Now</a></button></div></div>)} */}
          {/* </div> */}
        </section>

      </div>);
  }
}

export default Book;
