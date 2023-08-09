import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { AuthContext } from "../../context/AuthContext"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./Header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Header = ({ variant = false }) => {
    const { user, logout } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false)
    };

    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleConfirmLogout = () => {
        logout()
        setShowModal(false)
    };

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                <img src="/public/vite.svg" alt="" />

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/contacto">Contacto</Link>
                    <Link className="header__link" to="/nosotros">Nosotros</Link>
                    <p className="usuario">
                        <button className="user-button" onClick={handleOpenModal}>{user.email} <FontAwesomeIcon icon={faCaretDown} className="user-icon" /></button>
                    </p>


                </nav>
                <CartWidget />
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerrar Cuenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Deseas cerrar tu cuenta?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleConfirmLogout}>
                        Cerrar cuenta
                    </Button>
                </Modal.Footer>
            </Modal>
        </header>
    )
}

export default Header
