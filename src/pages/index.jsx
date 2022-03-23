import { Button } from "react-bootstrap";
import Image from "next/image";
import ArrowLink from "../components/common/ArrowLink";
import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between default-page-height">
          <div className="d-flex flex-column gap1">
            <span className="typography-variant-18">
              Where the future{" "}
              <span className="text-danger torus-font typography-variant-27">
                Influences
              </span>
            </span>
            <p className="typography-variant-8">
              The power of attention,
              <br /> in the palm of your hand
            </p>
            <div>
              <Button variant="danger" className="btn-height">
                <span className="text-light typography-variant-4">
                  Download Now
                </span>
              </Button>
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
              <Title>
                Unlocking the{" "}
                <span className="text-danger">Creator Economy</span> through
                Influence
              </Title>

              <Paragraph>
                We have seen the future of Marketing. Watch this video to learn
                about how it belongs to you.
              </Paragraph>
              <ArrowLink label="Play Video" />
            </div>
          </div>

          <div className="align-items-center d-flex">
            <div className="p-5 w-50">
              <Title>A Revolution in Influencer Income.</Title>
              <Paragraph>
                Demand the market value of your Audience. Advertise your
                influence across platforms. No more intermediaries between you
                and marketers.
              </Paragraph>
              <ArrowLink label="Explore BlinkLink Solutions" />
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
            <Title>
              Focus your time only on new ideas and Content Creation.
            </Title>
            <Paragraph>
              "Omni-platform Deploy" is a powerful tool that automatically
              optimises your content for different platforms. Along with
              integrations like Canva, we help you schedule posts and interact
              with your audience across the platforms you are on.
            </Paragraph>
            <div>
              <ArrowLink label="Explore BlinkLink Features" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="d-flex flex-column gap1 w-50">
            <Title isDefaultFont={true}>
              The Operating System for{" "}
              <span className="typography-variant-22 torus-font text-info">
                Marketing
              </span>
            </Title>
            <Paragraph>
              Influencer Marketplace combined with the best in Deeplinking,
              Attribution and Spend Tracking. All you need, in a simple and
              streamlined interface.
            </Paragraph>
            <div>
              <ArrowLink type="info" label="Talk to the Enterprise Team" />
            </div>
          </div>
          <div className="w-50">
            <Image
              src="/images/marketingInfluence.png"
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
            <Title className="text-danger">
              Join the Influence Revolution
            </Title>
            <Paragraph>
              If you're a problem solver with incurable passions, find your
              second home at BlinkLink where innovation never goes unrewarded.
            </Paragraph>
            <Paragraph>
              We’re a young team and growing rapidly. Join us and together, lets
              make a difference
            </Paragraph>
            <div>
              <Button variant="danger" className="btn-height">
                <span className="text-light typography-variant-4">
                  BlinkLink Careers
                </span>
              </Button>
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
