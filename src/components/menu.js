import React from "react"
import { Link } from "gatsby"
import EmailListForm from "../components/email"
import menuStyles from "./menu.module.css"
import Modal from 'react-modal'
import styled, {css} from 'styled-components'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: gray;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  text-align: right;
  padding: 2rem;
  top: 0;
  border-style: none none none solid;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0;
    font-weight: bold;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;


    &:hover {
      color: white;
    }
  }
`

const NMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        About
      </a>
      <a href="/exhibits/">
        Exhibits
      </a>
      <a href="/contact/">
        Gallery
      </a>
      <a href="/features/">
        Features
      </a>
      <a href="/blog/">
        Blog
      </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  background-color: white;
  position: fixed;
  top: 42px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: .75rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.1875rem;
    background: ${({ open }) => open ? 'black' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(40px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default function Menu() {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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

  <div className={menuStyles.smallnav}>
    <Burger open={open} setOpen={setOpen}/>
    <NMenu open={open} setOpen={setOpen}/>
  </div>
  </div>
}
