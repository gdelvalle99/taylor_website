import React from "react"
import { Link } from "gatsby"
import EmailListForm from "../components/email"
import menuStyles from "./menu.module.css"
import Modal from 'react-modal'



export default function Menu() {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return <div className={menuStyles.container}>
  <div className={menuStyles.outModal}>
  <button onClick={openModal} className={menuStyles.subbutton}>Subscribe</button>
  <Modal className={menuStyles.emailModal}
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={menuStyles}
  >
  <EmailListForm />
  <button onClick={closeModal} className={menuStyles.subbutton}>Close</button>
</Modal>
  </div>

  <div className={menuStyles.nav}>
    <button className={menuStyles.phonebtn}>Menu</button>
    <div className={menuStyles.phonenav}>
    <div className={menuStyles.dropdown}>
      <button className={menuStyles.dropbtn}>More</button>
      <div className={menuStyles.dropcontent}>
        <Link to="/features/">Features</Link>
        <Link to="/blog/">Blog</Link>
      </div>
    </div>
    <Link to="/contact/">Gallery</Link>
    <Link to="/exhibits/">Exhibits</Link>
    <Link to="/">About</Link>
    </div>
  </div>
  </div>
}
