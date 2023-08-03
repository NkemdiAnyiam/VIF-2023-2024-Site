import React from 'react';

import { PictureSquare } from '../../../components/PictureSquare/PictureSquare';

export function AboutVizPage(): JSX.Element {
  return (
    <main className="about-viz-page">
      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            About Viz
          </h1>
          {/* <p className="banner__intro-text">
            Viz Industry Fair (VIF) is both an organization and annual event dedicated to career planning and success for students within the new school
            of Performance, Visualization and Fine Arts (PVFA).
          </p> */}
        </div>
      </header>

      <section className="section section--development" id="development">
        <div className="container">
          <h2 className="heading-secondary">Development</h2>
          <div className="paragraphs">
            <p>
              The Texas A&M University Visualization Laboratory was established in 1988. The academic program started one year later.
              The Visualization Laboratory and Visualization academic program were created in response to clear indications
              that digital visualization was going to play a highly important role in digital communication.
              The visualization academic programs produce leaders in the fields where art and science merge.
            </p>
            <p>
              Our program has helped develop artists who have gone into fields such as Game Art, Game Design, Technical Art, Animation,
              Surfacing, Production, Tool Development, Rigging, UI/UX, Interactive Design, Graphic Design, AR and VR, Visual Computing, and more.
            </p>
            <p>
              Since our establishment, the Visualization program has expanded to international recognition, and most recently transitioned
              into the new school of Performance, Visualization and Fine Arts (PVFA). With the development of the new school,
              we look forward to welcoming new students and ushering in future generations of leaders in the fields of art and science.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--programs" id="programs">
        <div className="container">
          <h2 className="heading-secondary">Programs</h2>
          <div className="paragraphs">
            <p>
              Our programs include the following
            </p>
          </div>
          <ul className="programs__list">
            <li className="programs__item">
              <PictureSquare
                text="Minor in Game Design and Development"
                imgUrl={require('../../../images/programs/game-design-and-development.jpg')}
                altText="minor in game design and development"
                color='green'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Bachelor of Science in Visualization"
                imgUrl={require('../../../images/programs/bachelor-of-science-visualization.jpg')}
                altText="bachelor of science in visualization"
                color='red'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Master of Science in Visualization"
                imgUrl={require('../../../images/programs/master-of-science-visualization.jpg')}
                altText="master of science in visualization"
                color='yellow'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Master of Fine Arts in Visualization"
                imgUrl={require('../../../images/programs/master-of-fine-arts-visualization.jpg')}
                altText="master of fine arts in visualization"
                color='red'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Ph.D. in Architecture"
                imgUrl={require('../../../images/programs/phd-architecture.jpg')}
                altText="Ph.D. in architecture"
                color='green'
              />
            </li>
          </ul>
        </div>
      </section>

<section className="section section--sizzle-reels" id="sizzle-reels">
  <div className="container">
    <h2 className="heading-secondary">Viz Sizzle Reels</h2>
  </div>
</section>
    </main>
  );
}