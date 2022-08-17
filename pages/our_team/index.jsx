/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { data } from '../api/teamData';
import { Container, Col, Row, Card } from 'react-bootstrap';
import styles from '../../styles/page.styles/ourTeam.module.scss';
import { ConditionalLinks } from '../../components/conditionalLinks';
import HeroBanner from '../../components/layout/nav_bar/heroBanner';

export default function OurTeam() {
  const SplitPhrase = ({ name }) => {
    let newArray = name.split(' ');
    let firstWord = newArray[0];
    let secondWord = newArray[1];
    return (
      <div>
        <h2 className={styles.splitPhrase}>
          {firstWord + '  '}
          <span className="text-primary">{secondWord || undefined }</span>
        </h2>
      </div>
    );
  };

  const backgroundImg = '/team/about_us1.jpg';

  return (
    <Container fluid className={styles.ourTeam_container_main}>
      <HeroBanner
        activeLink={'meet our team'}
        text={'meet our team'}
        bannerOverlay
        backgroundImg={backgroundImg}
      />
      <Container>
        <div className={styles.ourTeam_container}>
          {data.map(({ NAME, description, members }, idx) => (
            <>
              <div
                className={[styles.ourTeam_advisoryBoard].join(' ')}
                key={NAME}
              >
                <SplitPhrase name={NAME} />
              </div>

              <div
                className={[styles.card_container__outer].join(' ')}
              >
                {members.map(
                  ({ image, name, title, description, link }, i) => (
                    <div
                      className={styles.card_container__inner_main}
                    >
                      <Card
                        key={i}
                        className={[
                          '',
                          styles.card_container__inner,
                        ].join(' ')}
                      >
                        <ConditionalLinks //adds an optional <Link href={...}> tag around cards with a link
                          condition={link}
                          wrapper={(children) => (
                            <Link
                              href={link}
                              key={name}
                              className={styles.conditionalLinks}
                            >
                              <a>{children}</a>
                            </Link>
                          )}
                        >
                          <img
                            src={
                              image || '/person-placeholder-image.png'
                            }
                            alt={image}
                            className={[
                              !image
                                ? styles.card_placeholder_image
                                : styles.card_image,
                              !name && styles.Card_hidden,
                            ].join(' ')}
                          />

                          <Card.Title
                            className={[styles.card_title].join(' ')}
                          >
                            {name}
                          </Card.Title>

                          {
                            // NAME == 'Advisory Board' &&
                            NAME == 'Advisory Board' ? (
                              <>
                                <div
                                  className={[
                                    NAME == 'Advisory Board' &&
                                      styles.card_container__inner__colored__text__d,
                                  ].join(' ')}
                                >
                                  {description}
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  className={[
                                    styles.card_container__inner__colored__text,
                                  ].join(' ')}
                                >
                                  {title}
                                </div>
                              </>
                            )
                          }
                        </ConditionalLinks>
                      </Card>
                    </div>
                  )
                )}
              </div>
            </>
          ))}
        </div>
      </Container>
    </Container>
  );
}
