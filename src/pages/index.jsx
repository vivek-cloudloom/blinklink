import Head from "next/head";
import { Container, Row, Card, Button, Form } from "react-bootstrap";

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
          <img src="/images/home.png" />
        </div>
      </div>
      <div className="home-item">
        <div className="container align-items-center d-flex flex-column justify-content-between h-100">
          <div className="align-items-center d-flex">
            <img src="/images/revolution.png" />
            <div className="p-5">
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
            <div className="p-5">
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
            <img src="/images/revolution.png" />
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <img src="/images/idea.png" />
          <div className="d-flex flex-column gap1">
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
          <div className="d-flex flex-column gap1">
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
          <img src="/images/marketing.png" />
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="d-flex flex-column gap1">
            <span className="typography-5 text-danger">
              Join the Influence Revolution
            </span>
            <p className="typography-6">
              If you're a problem solver with incurable passions, find your
              second home at BlinkLink where innovation never goes unrewarded.
              We’re a young team and growing rapidly. Join us and together, lets
              make a difference
            </p>
            <div>
              <button type="button" className="btn btn-danger download-now">
                <span className="typography-3">BlinkLink Careers</span>
              </button>
            </div>
          </div>
          <img src="/images/career.png" />
        </div>
      </div>

    
    </div>
  );
}
