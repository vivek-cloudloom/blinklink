import { Button } from "react-bootstrap";
import Image from "next/image";
import ArrowLink from "../components/common/ArrowLink";
import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="container align-items-center d-flex vh-100">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 offset-lg-1">
              <div className="d-flex flex-column gap-4">
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
            </div>
            <div className="col-12 col-lg-7">
              <Image
                src="/images/main/Viral-Marketer.svg"
                alt="Viral Marketer"
                width={675}
                height={448}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-item">
        <div className="container d-flex flex-column gap-5 py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1">
              <Image
                src="/images/main/revolution.svg"
                alt="Influence"
                width={465}
                height={334}
                quality={100}
              />
            </div>
            <div className="col-12 col-lg-5 col-xxl-4">
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
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1">
              <Title>A Revolution in Influencer Income.</Title>
              <Paragraph>
                Demand the market value of your Audience. Advertise your
                influence across platforms. No more intermediaries between you
                and marketers.
              </Paragraph>
              <ArrowLink label="Explore BlinkLink Solutions" />
            </div>
            <div className="col-12 col-lg-6">
              <Image
                src="/images/main/revolution.svg"
                alt="Revolution"
                width={556}
                height={453}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="align-items-center container d-flex vh-100">
          <div className="align-items-center row">
            <div className="col-12 col-lg-6">
              <Image
                src="/images/main/idea.svg"
                alt="Influence"
                width={703}
                height={501}
                quality={100}
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-4">
                <Title className="w-80">
                  Focus your time only on new ideas and Content Creation.
                </Title>
                <Paragraph>
                  "Omni-platform Deploy" is a powerful tool that automatically
                  optimises your content for different platforms. Along with
                  integrations like Canva, we help you schedule posts and
                  interact with your audience across the platforms you are on.
                </Paragraph>
                <div>
                  <ArrowLink label="Explore BlinkLink Features" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="align-items-center container d-flex vh-100">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1">
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
            <div className="col-12 col-lg-6">
              <Image
                src="/images/main/marketingInfluence.svg"
                alt="Marketing Influence"
                width={629}
                height={634}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="align-items-center container d-flex py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="d-flex flex-column gap-4 ps-4">
                <Title className="text-danger">
                  Join the Influence Revolution
                </Title>
                <Paragraph>
                  If you're a problem solver with incurable passions, find your
                  second home at BlinkLink where innovation never goes
                  unrewarded.
                </Paragraph>
                <Paragraph>
                  We’re a young team and growing rapidly. Join us and together,
                  lets make a difference
                </Paragraph>
                <div>
                  <Button variant="danger" className="btn-height">
                    <span className="text-light typography-variant-4">
                      BlinkLink Careers
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <Image
                src="/images/main/logo-dark.svg"
                alt="Influence"
                width={371}
                height={393}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
