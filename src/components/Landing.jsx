import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const lidControls = useAnimation();
  const messageControls = useAnimation();
  const nameTrackControls = useAnimation();
  const bgControls = useAnimation();
  const mottoControls = useAnimation();
  const baseControls = useAnimation();
  const giftRef = useRef(null);

  useEffect(() => {
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

        bgControls.start({
          opacity: 1,
          transition: { duration: 2.2, ease: "easeInOut", delay: 2.2 },
        });
        nameTrackControls.start({
          opacity: 0,
          transition: { duration: 2.2, ease: "easeInOut", delay: 2.2 },
        });

        mottoControls
          .start({
            opacity: 1,
            transition: { duration: 1.8, ease: "easeInOut", delay: 4.6 },
          })
          .then(() => {
            baseControls.start({
              width: isMobile ? "110vw" : "100vw",
              left: "50%",
              x: "-50%",
              transition: { duration: 2, ease: "easeInOut" },
            });

            setTimeout(() => {
              navigate("/home");
            }, 2200);
          });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lidControls, messageControls, nameTrackControls, bgControls, mottoControls, baseControls]);

  return (
    <motion.div className="landing-page">
      {}
      <motion.div className="background-image" initial={{ opacity: 0 }} animate={bgControls} />

      {}
      <div className="gift-box" ref={giftRef}>

        {}
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

        {}
        <motion.div
          className="gift-lid"
          animate={lidControls}
          style={{ transformOrigin: "left bottom", perspective: 800, zIndex: 200 }}
        >
          <div className="bow">
            <div className="bow-left" />
            <div className="bow-right" />
          </div>
        </motion.div>

        {}
        <motion.div
          className="gift-base"
          initial={{ left: "50%", x: "-50%" }}
          animate={baseControls}
          style={{ zIndex: 150 }}
        >
          <motion.div className="motto" initial={{ opacity: 0 }} animate={mottoControls}>
            <p>Timeless culture</p>
            <p>Objects to gift</p>
            <p>Designs to keep</p>
          </motion.div>
        </motion.div>
      </div>

      {}
      <motion.p className="scroll-text" initial={{ opacity: 1 }} animate={messageControls}>
        Scroll to Enter
      </motion.p>
      <motion.div className="down-arrow" initial={{ opacity: 1 }} animate={messageControls}>
        ↓
      </motion.div>
    </motion.div>
  );
}