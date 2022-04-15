import Styles from "../styles/Bottombar.module.css";
import { useState, useEffect } from "react";
import { RiHomeSmile2Fill, RiSearchEyeFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { RiUser5Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export const Bottombar = (event) => {
  let oldScrollY = 0;

  const [isVisible, setIsVisible] = useState(true);

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(false);
    }
    oldScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, [isVisible]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      animate: { opacity: 0 },
      transition: {
        type: "spring",
        backInOut: [0.17, 0.67, 0.83, 0.67],
        // damping: 30,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 0 },
  };

  // useEffect(() => {
  //   var timer = null;
  //   window.addEventListener(
  //     "scroll",
  //     function () {
  //       setIsVisible(false);
  //       if (timer !== null) {
  //         clearTimeout(timer);
  //       }
  //       timer = setTimeout(function () {
  //         setIsVisible(true);
  //       }, 150);
  //     },
  //     false
  //   );
  //   return () => window.removeEventListener("scroll", {});
  // }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67] }}
          >
            <div className={`${Styles.bottomNav}`}>
              <div className={`${Styles.bnTab}`}>
                <RiHomeSmile2Fill
                  size="35"
                  color="#000"
                  // onClick={() => setActiveTabs("home")}
                />
              </div>
              <div className={`${Styles.bnTab}`}>
                <RiSearchEyeFill
                  size="35"
                  color="#000"
                  // onClick={() => setActiveTabs("search")}
                />
              </div>
              <div className={`${Styles.bnTab}`}>
                <AiFillHeart
                  size="35"
                  color="#000"
                  // onClick={() => setActiveTabs("saved")}
                />
              </div>
              <div className={`${Styles.bnTab}`}>
                <RiUser5Fill
                  size="35"
                  color="#000"
                  // onClick={() => setActiveTabs("account")}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
