 /* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from '../../styles/page.styles/founder.module.scss'
import HeroBanner from '../../components/layout/nav_bar/heroBanner'

export default function ProfessorGambari() {

  const backgroundImg =  "/advisory board.png"

  return(
    <>
      <HeroBanner activeLink={'ADVISORY BOARD'} text={'About us'} backgroundImg={ backgroundImg } />
        <div className={ styles.founder_container }>
        <div className={ styles.founder_container_inner }>
          <div className={ styles.founder_about }>
            <div className={ styles.founder_about_img }>
                <img src='' alt='ADVISORY BOARD' />
            </div>
            <div className={ styles.founder_about_info }>
              <h1 className={ styles.founder_header_main }>ADVISORY BOARD</h1>
              <h2 className={ styles.founder_header } >Prof Gabi Siboni</h2>
              <p>
                  Prof. Gabi Siboni is a National Security Specialist and the Director of the Military and
                  Strategic Affairs Program as well as of the Cyber Security Program at the Tel Aviv {"University's"}
                  Institute for National Security Studies (INSS). Prof. Siboni is also the editor of
                  Cyber: Intelligence and Security Journal. He serves as a senior consultant to the IDF
                  and other Israeli security organizations. Siboni is a Professor for cybersecurity at the
                  Francisco de Vitoria University, Madrid, Spain. He published more than 100 peer
                  reviewed articles and several books about National Security, and Cybersecurity.
              </p>

              <p> 
                  In addition, Siboni is the chief methodologist of the {"IDF's"} Research Center for Force
                  Deployment and Buildup. In this scope, he develops Strategic & Operational concepts
                  for various domains including: Integrated Combat in complex and densely populated
                  areas, Cyber defense and Cyber warfare, Cognitive and Influence operations and
                  more. He also develops methodologies for Computerized Simulation for various needs
                  including for Military Operations.
              </p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>
                  Prof. Siboni is a Specialist in geopolitical risk analysis with expertise extending to corporate
                  strategy and operations, physical security, cybersecurity of large organizations,
                  with application of bespoke methodologies and analytical processes.®He is a consultant
                  in a wide range of fields, including: Cyber Security (including ICS and SCADA Security),
                  Information Technology, ICT & Cloud Risk Management, and Strategic Planning.
                  He has extensive proven experience in Decision Support Systems (DSS) related
                  to Cyber Security Investment, and Security & Safety Control Systems.
              </p>

              <p>
                  His consulting firm, G. Bina, provides security and cyber-security advisory services
                  across the top tier of the Israel private sector, including its infrastructure and defense
                  firms, as well as most sensitive government, military and intelligence agencies. It also
                  works in India supporting one of its critical financial markets infrastructure institution
              </p>

          </div>

      </div>
      </div>
    </>
  )
}
