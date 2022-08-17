/* eslint-disable react/jsx-key */
import { Modal, Button, Col, Row } from 'react-bootstrap'
import styles from '../styles/component.styles/donateModal.module.scss'

function DonateModal(props) {

  const donationAmount = ['N500  ', 'N1000 ', 'N5000 ', 'N10000', 'N20000'];
  const paymentMethod = ['paypal', 'bank Transfer', 'credit card', 'debut card']


  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <div className={ styles.donateModal_component } >
        <div className={ styles.donateModal_component_inner } >
      <Modal.Body>
          <div>
            <h2 className={ styles.donation_header }>DONATION <span className='text-primary '>INFORMATION</span></h2>
          </div>
          <div >
            <p>How much would you like to donate:</p>
          </div>
          <div className={styles.donation_buttons_component}>
            <div  >
              {donationAmount.map((amount, i) => (
              <button key={i} type="button" className={["btn", styles.amount_button ].join(' ')}>{amount}</button>
              ) )}
            </div>
            <input type="text" placeholder='specify amount' />
          </div>
          </Modal.Body> 

          <Modal.Body>
            <h4 className={ styles.donorInfo} >Donor Information</h4>
            <form className={ styles.donorInfo_component } >
              <Row className={ styles.donorInfo_row_component } > 
                <Col md={6} className={ styles.donorInfo_input_comp} >
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="" />
                </Col>

                <Col md={6} className={ styles.donorInfo_input_comp} >
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="name" placeholder="" />
                </Col>

                <Col md={6} className={ styles.donorInfo_input_comp} >
                  <label htmlFor="address">Address</label>
                  <input type="address" id="address" name="address" placeholder="" />
                </Col>

                <Col md={6} className={ styles.donorInfo_input_comp} >
                  <label htmlFor="phone">Phn Num</label>
                  <input type="phone" id="phone" name="phone" placeholder="" />
                </Col>
              </Row>
            </form>
              <div>
                <span className={ styles.donorInfo_checkBox_payment_method } >choose your payment method:</span>
                { paymentMethod.map((item, i) => (
                  <span key={i} className={ styles.donorInfo_checkBox } >
                      <input type="checkbox" name="my-checkbox" id="opt-in" />
                      <label htmlFor="opt-in">{ item }</label>
                  </span>
                ))}
              </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className={["btn", styles.donate_button ].join(' ')} onClick={props.onHide}>Donate</button>
          </Modal.Footer>
      </div>
      </div>
    </Modal>
  );
}


export default DonateModal;