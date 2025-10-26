import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import "./CommonStyles.css";

export default function Landing() {
  const navigate = useNavigate();
  const lidControls = useAnimation();
  const messageControls = useAnimation();
  const nameTrackControls = useAnimation();
  const bgControls = useAnimation();
  const mottoFadeControls = useAnimation();
  const baseControls = useAnimation();
  const giftRef = useRef(null);
  const baseRef = useRef(null);

  useEffect(() => {
    import("./Home");

    const handleScroll = () => {
      if (!giftRef.current) return;
      const boxTop = giftRef.current.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 2;

      if (boxTop < triggerPoint) {
        lidControls.start({
          y: "-120vh",
          transition: { duration: 2.5, ease: "easeInOut" },
        });

        messageControls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 1.2, ease: "easeInOut" },
        });

        const isMobile = window.innerWidth <= 768;

        nameTrackControls.start({
          opacity: 1,
          y: isMobile ? -100 : -220,
          transition: { duration: 2, ease: "easeOut", delay: 0.1 },
        });

        nameTrackControls.start({
          opacity: 0,
          transition: { duration: 2.2, ease: "easeInOut", delay: 2.2 },
        });

        mottoFadeControls
          .start({
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut", delay: 4.0 },
          })
          .then(() => {
            bgControls.start({
              opacity: 1,
              transition: { duration: 3, ease: "easeInOut" },
            }).then(() => {
              bgControls.set({ opacity: 1 });
            });

            setTimeout(() => {
              mottoFadeControls.start({
                opacity: 0,
                transition: { duration: 1.2, ease: "easeInOut" },
              });

              const grid = document.getElementById("grid-placeholder");
              const giftBase = baseRef.current;
              if (!grid || !giftBase) return;

              const gridRect = grid.getBoundingClientRect();
              const giftRect = giftBase.getBoundingClientRect();
              const scaleX = gridRect.width / giftRect.width;
              const scaleY = gridRect.height / giftRect.height;

              baseControls
                .start({
                  originX: 0.5,
                  originY: 0.5,
                  scaleX,
                  scaleY,
                  borderRadius: "20px",
                  transition: {
                    duration: 3.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                })
                .then(() => {
                  baseControls
                    .start({
                      backgroundColor: [
                        "#000000", "#0a0a0a", "#141414", "#1f1f1f", "#292929",
                        "#333333", "#3d3d3d", "#474747", "#515151", "#5b5b5b",
                        "#656565", "#6f6f6f", "#797979", "#838383", "#8d8d8d",
                        "#979797", "#a1a1a1", "#ababab", "#b5b5b5", "#bfbfbf",
                        "#c9c9c9", "#d3d3d3", "#dddddd", "#e7e7e7", "#f1f1f1",
                        "#ffffff",
                      ],
                      border: "2px solid #000000",
                      borderRadius: [
                        "20px", "18px", "16px", "14px", "12px",
                        "10px", "8px", "6px", "4px", "2px", "0px",
                      ],
                      transition: {
                        duration: 4, 
                        ease: "linear",
                        times: Array.from({ length: 26 }, (_, i) => i / 25),
                      },
                    })
                    .then(() => {
                      setTimeout(() => {
                        navigate("/home");
                      }, 200);
                    });
                });
            }, 2000);
          });

        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("click", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleScroll);
    }
  }, [
    lidControls,
    messageControls,
    nameTrackControls,
    bgControls,
    mottoFadeControls,
    baseControls,
    navigate,
  ]);

  return (
    <motion.div
      className="landing-page"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {}
      <motion.div
        className="background-image"
        initial={{ opacity: 0 }}
        animate={bgControls}
      />

      <div
        id="grid-placeholder"
        className="content-container"
        style={{
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <div className="box box1"></div>
        <div className="right-column">
          <div className="box box2"></div>
          <div className="merged-top"></div>
          <div className="merged-bottom"></div>
          <div className="middle-section">
            <div className="left-half">
              <div className="box box3"></div>
              <div className="bottom-row">
                <div className="box box5-left"></div>
                <div className="box box5-right"></div>
              </div>
            </div>
            <div className="box box4and6"></div>
          </div>
        </div>
      </div>

      <div className="gift-box" ref={giftRef}>
        <motion.div
          className="name-track"
          initial={{ opacity: 1, y: 40 }}
          animate={nameTrackControls}
          style={{
            position: "absolute",
            left: "20%",
            bottom: 80,
            zIndex: 300,
          }}
        >
          <h1 className="company-name">C. Haus Objekt</h1>
        </motion.div>

        <motion.div
          className="gift-lid"
          animate={lidControls}
          style={{
            transformOrigin: "left bottom",
            perspective: 800,
            zIndex: 200,
          }}
        >
          <div className="bow">
            <div className="bow-left" />
            <div className="bow-right" />
          </div>
        </motion.div>

        <motion.div
          className="gift-base"
          ref={baseRef}
          initial={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            x: "-50%",
            originX: 0.5,
            originY: 0.5,
            scaleX: 1,
            scaleY: 1,
            borderRadius: 20,
          }}
          animate={baseControls}
          style={{
            zIndex: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            className="motto"
            initial={{ opacity: 0 }}
            animate={mottoFadeControls}
          >
            <p>Timeless culture</p>
            <p>Objects to gift</p>
            <p>Designs to keep</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        className="scroll-text"
        initial={{ opacity: 1 }}
        animate={messageControls}
      >
        Scroll or Click to Open
      </motion.p>
      <motion.div
        className="down-arrow"
        initial={{ opacity: 1 }}
        animate={messageControls}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}