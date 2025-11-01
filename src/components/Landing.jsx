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
        lidControls
          .start({
            x: [0, -8, 8, -6, 6, -4, 4, -2, 2, 0],
            transition: { duration: 0.6, ease: "easeInOut" },
          })
          .then(() => {
            lidControls.start({
              y: "-120vh",
              transition: { duration: 0.9, ease: [0.45, 0, 0.55, 1] },
            });
          });

        messageControls.start({
          opacity: 0,
          y: 30,
          transition: { duration: 0.5, ease: "easeInOut" },
        });

        const isMobile = window.innerWidth <= 900;
        const nameDelay = isMobile ? 0.6 : 0.3;

        nameTrackControls.start({
          opacity: 1,
          y: isMobile ? -100 : -220,
          transition: { duration: 1, ease: "easeOut", delay: nameDelay },
        });

        nameTrackControls.start({
          opacity: 0,
          transition: { duration: 1, ease: "easeInOut", delay: 1.8 },
        });

        mottoFadeControls
          .start({
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut", delay: 2.4 },
          })
          .then(() => {
            bgControls
              .start({
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut" },
              })
              .then(() => {
                bgControls.set({ opacity: 1 });
              });

            setTimeout(() => {
              mottoFadeControls
                .start({
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                })
                .then(() => {
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
                      border: "2px solid #000000",
                      borderRadius: ["20px", "16px", "12px", "8px"],
                      transition: {
                        duration: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                        borderRadius: { duration: 1.6, ease: "easeInOut" },
                      },
                    })
                    .then(() => {
                      setTimeout(() => {
                        navigate("/home");
                      }, 200);
                    });
                });
            }, 1300);
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
    };
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
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
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
          <h1 className="company-name">
            C. HAUS <span className="mobile-break">Objekt</span>
          </h1>
        </motion.div>

        <motion.div
          className="gift-lid"
          animate={lidControls}
          style={{
            transformOrigin: "center bottom",
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