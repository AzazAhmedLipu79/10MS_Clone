const HeroHome = () => {
  return (
    <div className="container  col-xxl-10 mx-auto px-2 py-4">
      <div className="row flex-lg-row-reverse align-items-center justify-content-center">
        <div className="col-12 col-sm-12  col-lg-6">
          {/* <img
            src="https://embed.lottiefiles.com/animation/75643"
            className="d-block mx-lg-auto img-fluid "
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          /> */}
          <iframe
            width="700"
            height="500"
            className="d-block mx-lg-auto container-fluid"
            src="https://embed.lottiefiles.com/animation/75643"
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            ঘরে বসে পড়াশোনার সহজ সমাধান
          </h1>
          <p className="lead">
            ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি পরীক্ষা প্রস্তুতির
            জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ সার্বক্ষণিক দিকনির্দেশনা
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
