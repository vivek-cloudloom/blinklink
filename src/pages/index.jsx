import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="d-flex flex-column gap1">
            <span className="typography-1">
              Where the future <span className="text-danger">Influences</span>
            </span>
            <span className="typography-2">
              The power of attention, in the palm of your hand
            </span>
            <div>
              <button type="button" className="btn btn-danger download-now">
                <span className="typography-3">Download Now</span>
              </button>
            </div>
          </div>
          <Image
            src="/images/home.png"
            alt="The power of attention, in the palm of your hand"
            width={675}
            height={448}
          />
        </div>
      </div>
      <div className="home-item">
        <div className="container align-items-center d-flex flex-column justify-content-between h-100">
          <div className="align-items-center d-flex">
            <div className="w-50">
              <Image
                src="/images/revolution.png"
                alt="Influence"
                width={465}
                height={334}
              />
            </div>

            <div className="p-5 w-50">
              <h4 className="typography-5">
                Unlocking the{" "}
                <span className="text-danger">Creator Economy</span> through
                Influence
              </h4>
              <p className="typography-6">
                We have seen the future of Marketing. Watch this video to learn
                about how it belongs to you.
              </p>
              <a className="text-danger">Play Video</a>
            </div>
          </div>

          <div className="align-items-center d-flex">
            <div className="p-5 w-50">
              <h4 className="typography-5">
                A Revolution in Influencer Income.
              </h4>
              <p className="typography-6">
                Demand the market value of your Audience. Advertise your
                influence across platforms. No more intermediaries between you
                and marketers.
              </p>
              <a className="text-danger">Explore BlinkLink Solutions</a>
            </div>
            <div className="w-50">
              <Image
                src="/images/revolution.png"
                alt="Influence"
                width={556}
                height={453}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
        <div className="w-50">
          <Image
            src="/images/idea.png"
            alt="Influence"
            width={703}
            height={501}
          />
          </div>
          <div className="w-50 d-flex flex-column gap1">
            <span className="typography-1">
              Focus your time only on new ideas and Content Creation.
            </span>
            <p className="typography-6">
              "Omni-platform Deploy" is a powerful tool that automatically
              optimises your content for different platforms. Along with
              integrations like Canva, we help you schedule posts and interact
              with your audience across the platforms you are on.
            </p>
            <div>
              <a className="text-danger">Explore BlinkLink Solutions</a>
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="d-flex flex-column gap1 w-50">
            <span className="typography-7">
              The Operating System for{" "}
              <span className="text-info">Marketing</span>
            </span>
            <p className="typography-6">
              Influencer Marketplace combined with the best in Deeplinking,
              Attribution and Spend Tracking. All you need, in a simple and
              streamlined interface.
            </p>
            <div>
              <a className="text-info">Talk to the Enterprise Team</a>
            </div>
          </div>
          <div className="w-50">
          <Image
            src="/images/marketing.png"
            alt="Influence"
            width={629}
            height={634}
          />
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="d-flex flex-column gap1 w-60">
            <span className="typography-5 text-danger">
              Join the Influence Revolution
            </span>
            <p className="typography-6">
              If you're a problem solver with incurable passions, find your
              second home at BlinkLink where innovation never goes unrewarded.
            </p>
            <p className="typography-6">
              We’re a young team and growing rapidly. Join us and together, lets
              make a difference
            </p>
            <div>
              <button type="button" className="btn btn-danger download-now">
                <span className="typography-3">BlinkLink Careers</span>
              </button>
            </div>
          </div>
          <div className="w-40">
          <Image
            src="/images/career.png"
            alt="Influence"
            width={371}
            height={393}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
