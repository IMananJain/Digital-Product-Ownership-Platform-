import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Collapse } from 'antd';

const SecondFold = () => {
  const { Panel } = Collapse;
  return (
    <div className={styles.secondFold}>
      <div className={styles.heading}>Our Values</div>
      <p className={styles.subParagraph}>
        Our values are at the core of our efforts to build the best platform for our users
      </p>
      <div className={styles.mainDiv}>
        <Collapse ghost expandIconPosition="end" size="large">
          {
            [
              {
                header: "Trust comes first",
                paragraph: "Trust is a fundamental pillar of how we show up for the broader web3 community and for our teams. The trust of our user experience comes first, and we don’t sacrifice the stability, reliability and trustworthiness of our platform, even if it means delaying the launch of a feature. Internally, we don’t sacrifice the trust of our teammates. We lean into communicating honestly and transparently, while practicing deep empathy. We share context with each other, and pull for it too. Trust is what makes us a great team."
              },
              {
                header: "Dive deep",
                paragraph: "We are intellectually humble in the face of uncertainty, and approach big questions with deep curiosity. We dive deep to understand a problem and get to the root cause of things, unapologetically asking, “why?” to unpack deeper layers of context. We actively pressure test ideas and seek disconfirming evidence from others before making decisions. When we make bets, we’re the first to call out our shortcomings and course-correct by looking at the data."
              },
              {
                header: "Buld on ocean, not an aquarium",
                paragraph: "Web3 is a new technological paradigm. It’s fundamental that we collaborate with the web3 ecosystem and build for the long-term because we have a responsibility to build with and for the entire NFT space. We do not make unilateral decisions that impact the diversity or direction of the ecosystem without stress-testing our assumptions with the broader community. We’re not here to build our own aquarium, but rather to create an ocean together with the vibrant web3 community."
              },
              {
                header: "Take the helm",
                paragraph: "Everyone at OpenSea is an owner, which includes owning the outcome. We act on behalf of the entire company and beyond just our own teams. We step up and lean into the work beyond our scope, choosing not to say, “that’s not my job.” We are responsible and hold ourselves and others accountable. We also consult with the right people to optimize our decisions, bringing our crewmates along with us. We overcome mountains together to get things done."
              },
              {
                header: "Iron Sharpens Iron",
                paragraph: "We are building a championship team. We demand greatness from each other, and we continually raise the bar. We give high-quality constructive feedback to help each other grow. When we make a mistake, we own it, fix it, and learn from it. We embrace diverse perspectives, identities, and experiences so that we can deliver impactful outcomes. To do all of the above, we strive to create an environment of trust and mutual respect."
              },
              {
                header: "High Quality, High Velocity",
                paragraph: "This is an aspirational value about striking the right balance between quality and speed, which may often feel like two contradicting choices. High Quality, High Velocity doesn’t mean pixel-perfect quality at super speed. That’s a recipe for burnout. Rather, it’s assessing when we want to go slow to speed up, ship fast while avoiding icebergs or meet somewhere in the middle. This can feel like a complex value because it’s easier to choose just quality or just speed. Figuring out how to balance both is the hardest part, but it’s also where we deliver the best solutions."
              },
            ].map((data, idx) => {
              return <Panel header={data.header} key={idx}>
                <p>{data.paragraph}</p>
              </Panel>
            })
          }
        </Collapse>
      </div>
    </div>
  );
};

export default SecondFold;
