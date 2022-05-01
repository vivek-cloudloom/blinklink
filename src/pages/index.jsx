import { Button } from "react-bootstrap";
import Image from "next/image";
import ArrowLink from "../components/common/ArrowLink";
import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { findDOMNode } from "react-dom";
// import dynamic from "next/dynamic";
// const screenfull = dynamic(() => import('screenfull'), {
//   suspense: false,
// })
// import screenfull from 'screenfull';
// import { findDOMNode } from 'react-dom'
export default function Home() {
  // const onFullScreen = (e) => {
  //   console.log("ON FULL SCREEN")
  //   var isFullscreenNow = document.webkitFullscreenElement !== null;
  //   if (isFullscreenNow) {
  //     videoRef.current.play();
  //     videoRef.current.style.opacity = 1;
  //   } else {
  //     videoRef.current.load();
  //     videoRef.current.style.opacity = .3;
  //   }
  // };

  // useEffect(() => {
  //   if (videoRef && videoRef.current) {
  //     videoRef.current.addEventListener("webkitfullscreenchange", onFullScreen);
  //     videoRef.current.addEventListener("mozfullscreenchange", onFullScreen);
  //     videoRef.current.addEventListener("fullscreenchange", onFullScreen);
  //   }

  //   return function cleanup() {
  //     if (videoRef && videoRef.current) {
  //       videoRef.current.removeEventListener(
  //         "webkitfullscreenchange",
  //         onFullScreen
  //       );
  //       videoRef.current.removeEventListener(
  //         "mozfullscreenchange",
  //         onFullScreen
  //       );
  //       videoRef.current.removeEventListener("fullscreenchange", onFullScreen);
  //     }
  //   };
  // }, []);
  const videoRef = useRef();
  let screenfull = null;
  const onExist = () => {
    console.log("On Exist");
  };

  const playVideo = () => {
    videoRef.current.play();
  }
  const loadVideo = async (e) => {
    // if (videoRef.current.requestFullScreen) {
    //   videoRef.current.requestFullScreen();
    // } else if (videoRef.current.webkitRequestFullScreen) {
    //   videoRef.current.webkitRequestFullScreen();
    // } else if (videoRef.current.mozRequestFullScreen) {
    //   videoRef.current.mozRequestFullScreen();
    // }
    //  videoRef.current.style.opacity = 1;
    // screenfull.request(findDOMNode(videoRef))
    if (!screenfull) {
      screenfull = (await import("screenfull")).default;
    }
    screenfull.request(findDOMNode(videoRef.current));
    const callback = () => {
      if (!screenfull.isFullscreen) {
        togglePlaying(false);
        videoRef.current.seekTo(0);
        setOpacity(.3)
        screenfull.off("change", callback);
      }
    };
    screenfull.on("change", callback);
    // screenfull.exit(togglePlaying(false))
    setOpacity(1)
    togglePlaying(true);
    
    //videoRef.current.play();
    // e.target.style.display = "none";
  };
  const [playing, togglePlaying] = useState(false);
  const [opacity , setOpacity] = useState(.3);
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="container d-flex vh-100">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 offset-lg-1 order-2 order-lg-1">
              <div className="d-flex flex-column gap-4">
                <span className="typography-5-medium">
                  Where the future{" "}
                  <span className="text-danger torus-font typography-7-semibold">
                    Influences
                  </span>
                </span>
                <p className="typography-2-normal">
                  The power of attention,
                  <br /> in the palm of your hand
                </p>
                <div>
                  <Link href={"/signup"}>
                    <Button variant="danger" className="btn-height">
                      <span className="text-light typography-1-normal">
                        Download Now
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 order-1 col-lg-7 order-1 order-lg-2">
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
            <div className="col-12 col-lg-4 offset-lg-1">
              <div className="position-relative">
                <video className="creator-economy" ref={videoRef} controls>
                  <source src="/videos/Teaser_v1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <ReactPlayer
                  playing={playing}
                  ref={videoRef}
                  className="creator-economy"
                  url="/videos/Teaser_v1.mp4"
                  style={{opacity : opacity}}
                />
                <div
                  className="d-flex h-100 justify-content-center position-absolute w-100 top-0"
                  onClick={loadVideo}
                >
                  <Image
                    src="/images/main/play.svg"
                    alt="Influence"
                    width={57}
                    height={65}
                    quality={100}
                  />
                </div> */}
                {/* <Image
                  src="/images/main/video.svg"
                  alt="Influence"
                  width={361}
                  height={251}
                  quality={100}
                />
                <div
                  className="position-absolute"
                  style={{ left: "152px", top: "93px" }}
                >
                  <Image
                    src="/images/main/play.svg"
                    alt="Influence"
                    width={57}
                    height={65}
                    quality={100}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-12  offset-lg-1 col-lg-5 col-xxl-4">
              <Title>
                Unlocking the{" "}
                <span className="text-danger">Creator Economy</span> through
                Influence
              </Title>

              <Paragraph>
                We have seen the future of Marketing. Watch this video to learn
                about how it belongs to you.
              </Paragraph>
              <ArrowLink label="Play Video" onClick={playVideo} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
              <Title>A Revolution in Influencer Income.</Title>
              <Paragraph>
                Demand the market value of your Audience. Advertise your
                influence across platforms. No more intermediaries between you
                and marketers.
              </Paragraph>
              <ArrowLink
                label="Explore BlinkLink Solutions"
                link="/solutions"
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
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
        <div className="align-items-center container d-flex py-5">
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
                  <ArrowLink
                    label="Explore BlinkLink Features"
                    link="/features"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="align-items-center container d-flex py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
              <Title isDefaultFont={true}>
                The Operating System for{" "}
                <span className="typography-5-semibold torus-font text-info">
                  Marketing
                </span>
              </Title>
              <Paragraph>
                Influencer Marketplace combined with the best in Deeplinking,
                Attribution and Spend Tracking. All you need, in a simple and
                streamlined interface.
              </Paragraph>
              <div>
                <ArrowLink
                  type="info"
                  label="Talk to the Enterprise Team"
                  link="/enterprise"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
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
            <div className="col-12 col-lg-6  offset-lg-1  order-2 order-lg-1">
              <div className="d-flex flex-column gap-4">
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
                  <ArrowLink
                    label="BlinkLink Careers"
                    type={"danger"}
                    link="/careers"
                  />
                  {/* <Link key={subItem.title} href={subItem.link}>
                          <a className="dropdown-item typography-1-semibold text-dark"  onClick={()=>{
                          toggleNavBar(false);
                        }}>
                            {subItem.title}
                          </a>
                        </Link> */}
                  {/* <Button variant="danger" className="btn-height">
                    <span className="text-light typography-1-normal">
                      BlinkLink Careers
                    </span>
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
              <Image
                src="/images/logo/logo-dark.svg"
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
