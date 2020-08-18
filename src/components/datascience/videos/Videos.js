import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';


const videos = [{
  id: 1,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/ai-ml-dl-ds.webp",
  url: "https://www.youtube.com/embed/k2P_pHQDlp0",
  topic: "AI Vs ML Vs DL Vs Data Science",
  description: "",
  sharedBy: "Krish Naik",
  totalViews: 124,
  category: "Data Science"
},
{
  id: 2,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/oaklawn.webp",
  url: "https://www.youtube.com/embed/iJUzouXg5kY",
  topic: "Demystifying Data Science | TEDxOakLawn  ",
  description: "In this talk Mr.Asitang Mishra relates his experiences as a Data Scientist at the world famous NASA Jet Propulsion Laboratory (JPL). With his wit, intellect, and didactic aphorisms, Asitang truly paints a picture on what it means to be the modern day data science superhero.",
  sharedBy: "Mr.Asitang Mishra",
  totalViews: 82,
  category: "Data Science"
},
{
  id: 3,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/jacknelon.webp",
  url: "https://www.youtube.com/embed/f3lUEnMaiAU",
  topic: "Jack Ma and Elon Musk hold debate on Artificial Intelligence",
  description: "Alibaba co-founder and executive chairman Jack Ma and Tesla CEO Elon Musk hold a debate in Shanghai over artificial intelligence.",
  sharedBy: "China TV",
  totalViews: 286,
  category: "Data Science"
},
{
  id: 4,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/danger-of-ai.webp",
  url: "https://www.youtube.com/embed/OhCzX0iLnOc",
  topic: "The danger of AI is weirder than you think ",
  description: "",
  sharedBy: "Janelle Shane",
  totalViews: 89,
  category: "Data Science"
},
{
  id: 5,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/type-ml-1.webp",
  url: "https://www.youtube.com/embed/YlGEQyEM_a8",
  topic: "Types of Machine Learning Part-1",
  description: "This lecture gives an overview of the main categories of machine learning, including supervised, un-supervised, and semi-supervised techniques, depending on the availability of expert labels.  We also discuss the different methods to handle discrete versus continuous labels.    ",
  sharedBy: "Steve Brunton",
  totalViews: 89,
  category: "Data Science"
},
{
  id: 6,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/type-ml-2.webp",
  url: "https://www.youtube.com/embed/OhCzX0iLnOc",
  topic: "Types of Machine Learning Part-2",
  description: "This lecture gives an overview of the main categories of machine learning, including supervised, un-supervised, and semi-supervised techniques, depending on the availability of expert labels.  We also discuss the different methods to handle discrete versus continuous labels.",
  sharedBy: "Steve Brunton",
  totalViews: 54,
  category: "Data Science"
},
{
  id: 14,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/ml-zero-to-hero.webp",
  url: "https://www.youtube.com/embed/VwVg9jCtqaU",
  topic: "Machine Learning Zero to Hero",
  description: "This is a talk for people who know code, but who don’t necessarily know machine learning. Learn the ‘new’ paradigm of machine learning, and how models are an alternative implementation for some logic scenarios",
  sharedBy: "Laurence Moroney and Karmel Allison  ",
  totalViews: 2313,
  category: "Data Science",
  selected: true
},

{
  id: 7,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/deep-learning.webp",
  url: "https://www.youtube.com/embed/YRhxdVk_sIs",
  topic: "Convolutional Neural Networks (CNNs) explained",
  description: "In this video, we explain the concept of convolutional neural networks, how they’re used, and how they work on a technical level. We also discuss the details behind convolutional layers and filters.",
  sharedBy: "Deep lizard",
  totalViews: 43,
  category: "Neural Network"
},
{
  id: 8,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/rocket-science.webp",
  url: "https://www.youtube.com/embed/-6RpfD04fPw",
  topic: "Rocket Science Class by Elon Musk",
  description: "",
  sharedBy: "Deadly wise turtle",
  totalViews: 89,
  category: "Neural Network"
},
{
  id: 9,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/neural-network.webp",
  url: "https://www.youtube.com/embed/BFdMrDOx_CM",
  topic: "Inside a Neural Network ",
  description: "Just what is happening inside a Convolutional Neural Network? Dr Mike Pound shows us the images in between the input and the result.",
  sharedBy: "Computerphile",
  totalViews: 89,
  category: "Neural Network"
},
{
  id: 10,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/crash-course.webp",
  url: "https://www.youtube.com/embed/r0Ogt-q956I",
  topic: "Deep Learning: A Crash Course",
  description: "Deep learning is a revolutionary technique for discovering patterns from data. We'll see how this technology works and what it offers us for computer graphics.",
  sharedBy: "ACMSIGGRAPH",
  totalViews: 89,
  category: "Neural Network"
},
{
  id: 11,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/how-deep-neural-nwk.webp",
  url: "https://www.youtube.com/embed/BFdMrDOx_CM",
  topic: "How Deep Neural Networks Work",
  description: "",
  sharedBy: "Brandon Rohrer",
  totalViews: 35,
  category: "Neural Network"
},
{
  id: 12,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/nlp-embedding.webp",
  url: "https://www.youtube.com/embed/qqt3aMPB81c",
  topic: "NLP & Tabular data & Collaborative filtering & Embeddings",
  description: "we'll dive in to *natural language processing* (NLP), using the IMDb movie review dataset. In this task, our goal is to predict whether a movie review is positive or negative; this is called *sentiment analysis*.",
  sharedBy: "Jeremy Howard",
  totalViews: 89,
  category: "Neural Network"
},
{
  id: 13,
  img: "https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/video/cover/gta-python.webp",
  url: "https://www.youtube.com/embed/KSX2psajYrg",
  topic: "Self driving car neural network in the city - Python plays GTA with Tensor Flow",
  description: "Just what is happening inside a Convolutional Neural Network? Dr Mike Pound shows us the images in between the input and the result.",
  sharedBy: "sentdex",
  totalViews: 89,
  category: "Neural Network"
}
];
class Videos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videos:videos,
      isplaying:false
    };
    this.selectVideo = this.selectVideo.bind(this);
  }
  componentDidMount() {
    document.title ="Videos on Data Science";
  }
  selectVideo(id){
    let videos = this.state.videos;
    videos.map(v=>v.selected=false);
    videos.find(v=>v.id==id).selected=true;
    this.setState({videos, isplaying:false});
    window.scrollTo(0,0);
  }
  render() {
    let videos = this.state.videos;
    let selectedCategory = videos.find(v => v.selected == true).category;
    let selectedVideo = videos.find(v => v.selected == true);
    let featuredvideos = videos.filter(v => v.category == selectedCategory && !v.selected).slice(0, 6);
    let othervideos = videos.filter(o => o.category != selectedCategory);

    return (
      <div className="video-section">
        <div className={"video-banner " + (this.state.isplaying ? "playing" :"")}>
          { !this.state.isplaying ? <a onClick={()=>{this.setState({isplaying:true});}} className="video-cover" href="javascript: void(0);" data-action="video" data-id="147" style={{ opacity: 1 }}>
            <img width="1500" height="500" src={selectedVideo.img} className="attachment-vlog-cover-full size-vlog-cover-full wp-post-image" alt={selectedVideo.topic} />
            <span className="vlog-format-action large"><i className="fa fa-play" /></span>
          </a> :
          <div>
          <iframe src={selectedVideo.url + "?feature=oembed&amp;autoplay=1&amp;auto_play=1&amp;rel=0"} frameBorder="0" allowFullScreen="" name="fitvid0" allow="autoplay; encrypted-media" />
          </div>}
        </div>
        <div className="vlog-featured-info container vlog-f-hide">

          <div className="row">

            <div className="col-lg-12">

              <div className="vlog-featured-info-bg vlog-highlight">

                <div className="entry-header" >
                  <span className="entry-category" ><a href="" className="vlog-cat-9">{selectedVideo.category}</a></span>

                  <h2 className="entry-title h1"><a href="">{selectedVideo.topic}</a></h2>
                  <div className="entry-meta"><div className="meta-item meta-author"><span className="vcard author"><span className="fn"><a className="meta-icon">{selectedVideo.sharedBy}</a></span></span></div><div className="meta-item meta-date"><span className="updated meta-icon">4 weeks ago</span></div></div>

                </div>

                <div className="entry-actions vlog-vcenter-actions" ><a  className="action-item comments">{selectedVideo.totalViews} views</a></div>

              </div>

            </div>

          </div>

        </div>
        <section>
          <div className="vlog-section vlog-no-sid  ">
            <div className="container">
              <div className="vlog-content">
                <div className="row row-eq-height">
                  <div className="vlog-module module-series col-lg-12 col-md-12 col-sm-12 " id="vlog-module-0-0" data-col="12">
                    <div className="vlog-mod-head"><div className="vlog-mod-title"><h4>Featured Playlists</h4></div></div>
                    <div className="row vlog-cats row-eq-height ">
                      {featuredvideos.map((a, i) =>
                        <article onClick={()=>this.selectVideo(a.id)} key={i} className="vlog-lay-e vlog-cat col-lg-4 col-sm-4 col-md-4 col-xs-12 post-4 page type-page status-publish hentry">
                          <div className="entry-image">
                            <a title={a.topic}>
                              <img width="344" height="193" src={a.img} className="attachment-vlog-lay-e-full size-vlog-lay-e-full wp-post-image" alt={a.topic} />	       		        <span className="vlog-format-action small"><i className="fa fa-play" /></span>
                            </a>
                          </div>
                          <div className="entry-header">
                            <h2 className="entry-title h5"><a>{a.topic}</a></h2>
                          </div>

                          <div className="entry-meta"><span className="meta-item"><span className="vlog-count">{a.totalViews}</span>views</span></div>

                        </article>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="courses-section">
          <div className="vlog-section vlog-no-sid vlog-bg ">

            <div className="container">



              <div className="vlog-content">

                <div className="row row-eq-height">
                  <div className="vlog-module module-text col-lg-12 col-md-12 col-sm-12 col-xs-12 " id="vlog-module-1-0">

                    <div className="vlog-txt-module">
                      <div className="text-center" >
                        <h2>You will love our courses</h2>
                        <p>Our courses is a carefully crafted based on market demand with focus on learner mindset. We provide customize courses based on your requirement and timing! One of the best corporate personal trainer would be alotted to you who would make sure that you are growing well.</p>
                        <button className="vlog-button" onClick={() => {this.context.router.push('/courses'); window.scrollTo(0, 0); }}>Know more</button>
                      </div>		</div>

                  </div>



                </div>

              </div>



            </div>

          </div>
        </section>
        <section>
          <div className="vlog-section latest">

            <div className="container">



              <div className="vlog-content">

                <div className="row row-eq-height">



                  <div className="vlog-module module-posts col-lg-12 col-md-12 col-sm-12 " id="vlog-module-2-0" data-col="12">

                    <div className="vlog-mod-head"><div className="vlog-mod-title"><h4>Latest videos</h4></div></div>


                    <div className="row vlog-posts row-eq-height ">


                      {othervideos.map((v, i) => <article key={i} onClick={()=>this.selectVideo(v.id)} className="vlog-lay-b lay-horizontal vlog-post post-92 post type-post status-publish format-gallery has-post-thumbnail hentry category-technology tag-magazine tag-video post_format-post-format-gallery">
                        <div className="row">

                          <div className="col-lg-6 col-md-6  col-sm-6 col-xs-12">
                            <div className="entry-image">
                              <a  title="Take advantage of different weather forecasts" className="" data-id="92">
                                <img width="366" height="205" src={v.img} className="attachment-vlog-lay-b size-vlog-lay-b wp-post-image" alt={v.topic} sizes="(max-width: 366px) 100vw, 366px" />                                                     </a>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">

                            <div className="entry-header">



                              <span className="entry-category"><a className="vlog-cat-8">{v.category}</a></span>

                              <h2 className="entry-title h2"><a>{v.topic}</a></h2>
                      <div className="entry-meta"><div className="meta-item meta-date"><span className="updated meta-icon">7 days ago</span></div><div className="meta-item meta-comments"><a>{v.totalViews} views</a></div></div>

                            </div>

                            <div className="entry-content">
                              <p>{v.description}</p>
                            </div>


                          </div>
                        </div>
                      </article>

                      )}


                    </div>


                  </div>



                </div>

              </div>


            </div>

          </div>
        </section>
      
      </div>

    );
  }
}

export default Videos;
Videos.contextTypes = {
  router: PropTypes.func.isRequired
};
