import React from 'react';

const HomeCat = () => {
  return (
    <section className="home-cat-sec text-center">
      <div className="container-fluid">
        <h2 className="site-title">Sellers, use
          <a href="http://iticket.kyazoonga.com/" target="_blank" rel="noopener noreferrer" >
            <img src="http://www.kyazoonga.com/images/iticket-logo.png" alt="" style={{width: "100px"}}/>
          </a> to create and sell your event tickets online
          <small>Discover and purchase tickets to cool events created and listed by organizers directly</small>
        </h2>
        <div className="row">
          <div className="col-sm-6 cat-box">
            <div id="dvYoutube">

            </div>
          </div>
          <div className="col-sm-6 cat-box">
            <a href="javascript:void(0)" className="block-link">
              <div className="cat-txt">
                <h3>Kyazoonga Blog</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" className="img-full-width"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCat;