import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

function bounceInterp(r) {
  return `translate3d(0, ${15 * Math.sin(r + (2 * Math.PI) / 1.6)}px, 0)`;
}

export default function Intro() {
  const { radians } = useSpring({
    from: { radians: 0 },
    to: async (next) => {
      await next({ radians: 1 * Math.PI });
    },
    loop: { reverse: true },
    reset: true,
  });

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <img
          src='https://picsum.photos/200'
          className='h-40 w-40 rounded-full mx-auto mb-5'
        />
        <div>
          <h1>Hello there!</h1>
          <div>
            <h1>My name is Kazymir, nice to e-meet you</h1>
            <animated.div style={{ transform: radians.to(bounceInterp) }}>
              <h2>👋</h2>
            </animated.div>
          </div>
          <p>Welcome to my online portfolio. Sadly it's not quite yet ready!</p>
          <p>Come back soon to see its progress 😊</p>
          <div>
            <div>
              <div>
                <Button color='secondary' component={Link} to={"/story"}>
                  Skip to CV
                </Button>
              </div>
              <div>
                <Button
                  color='primary'
                  variant='contained'
                  component={Link}
                  to={"/story"}
                  style={{ textTransform: "none" }}
                >
                  Let's hear your story!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
