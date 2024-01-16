import React from 'react'
import "./footer.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Para un desplazamiento suave
        });
      };

    return (
        <footer className="footer">

            <div className="footer_wrapper">

                <div className="footer_top">

                    <div className="footer_top-mobile">

                        <div className="card">
                            <div className="card-icons">

                                <a href="#" className="logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="51" viewBox="0 0 45 51" fill="none">
                                        <path d="M32.9858 26.0305H31.2493V29.3132H32.8789C34.2147 29.3132 34.8825 28.9334 34.8825 27.6854C34.8825 26.4375 34.2147 26.0305 32.9858 26.0305Z" fill="white" />
                                        <path d="M34.5887 22.7749C34.5887 21.8525 34.1078 21.2556 33.0392 21.2556H31.2493V24.267H33.0392C34.1078 24.267 34.5887 23.7244 34.5887 22.7749Z" fill="white" />
                                        <path d="M11.3998 21.2556H10.0641V24.9995H11.5869C12.8692 24.9995 13.5905 24.5383 13.5905 23.1276C13.5905 21.6626 12.8158 21.2556 11.3998 21.2556Z" fill="white" />
                                        <path d="M43.2177 11.8417L23.7957 0.637163C22.9942 0.175959 22.0058 0.175959 21.2043 0.637163L1.78233 11.8417C1.00759 12.3029 0.5 13.1439 0.5 14.0664V36.4755C0.5 37.3979 1.00759 38.2389 1.78233 38.7001L21.2043 49.9047C21.605 50.1217 22.0592 50.2573 22.4866 50.2573C22.9408 50.2573 23.3682 50.1488 23.769 49.9047L43.191 38.7001C43.9924 38.2389 44.4733 37.3708 44.4733 36.4755V14.0664C44.5 13.1439 44.0191 12.3029 43.2177 11.8417ZM13.8576 31.1581L11.667 26.8444H10.0641V31.1581H7.95355V19.4109H11.5067C14.1248 19.4109 15.7277 20.4418 15.7277 23.1277C15.7277 25.298 14.5789 26.1391 13.6706 26.4917L16.2086 31.1309H13.8576V31.1581ZM24.6506 31.1581L19.9754 23.4261H19.8953V31.1581H17.8916V19.4109H19.7083L24.4369 27.1429H24.517V19.4109H26.5206V31.1581H24.6506ZM33.0926 31.1581H29.1655V19.4109H33.1193C35.5237 19.4109 36.7259 20.6589 36.7259 22.6122C36.7259 23.6703 36.1648 24.5655 35.2832 24.9725V25.0539C36.4053 25.5151 37.0465 26.4104 37.0465 27.794C37.0465 29.8287 35.871 31.1581 33.0926 31.1581Z" fill="white" />
                                    </svg>
                                </a>

                                <div className="footer_social">
                                    <a href="#" className="footer_social-link" >
                                        <AiFillInstagram size={26} />
                                    </a>

                                    <a href="" className="footer_social-link">
                                        <FaFacebookSquare size={23} />
                                    </a>
                                </div>
                            </div>
                            <div className="card-text">
                                <p>Somos una familia en constante crecimiento y mejora, agradecemos su retroalimentacion.</p>
                            </div>
                            <div className="footer_opinion">
                                <a href="https://rednbluepty.com/evalua-nuestro-sitio-web" className="opinion_text">
                                    ¡Dinos lo que piensas de la página web!
                                </a>
                            </div>
                        </div>


                        <div className="visible-mobile">

                            <div className="scrollup-mobile" onClick={handleScrollToTop}>
                                <svg className="scrollup-mobile" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 38 37" fill="none">
                                    <path d="M19 0.0313721C14.1985 0.0313721 9.59363 1.93873 6.19846 5.3339C2.80329 8.72907 0.895935 13.3339 0.895935 18.1354C0.895935 22.9369 2.80329 27.5418 6.19846 30.9369C9.59363 34.3321 14.1985 36.2395 19 36.2395C23.8015 36.2395 28.4063 34.3321 31.8015 30.9369C35.1967 27.5418 37.1041 22.9369 37.1041 18.1354C37.1041 13.3339 35.1967 8.72907 31.8015 5.3339C28.4063 1.93873 23.8015 0.0313721 19 0.0313721ZM23.6479 18.0098C23.5169 18.1183 23.3525 18.1784 23.1824 18.1798C23.0732 18.1791 22.9656 18.1542 22.8672 18.1069C22.7688 18.0596 22.6822 17.9911 22.6134 17.9064L19.7389 14.4185V24.4016C19.7389 24.5976 19.6611 24.7856 19.5225 24.9241C19.3839 25.0627 19.196 25.1406 19 25.1406C18.804 25.1406 18.616 25.0627 18.4775 24.9241C18.3389 24.7856 18.2611 24.5976 18.2611 24.4016V14.4185L15.394 17.9064C15.3325 17.9817 15.2566 18.0442 15.1709 18.0902C15.0852 18.1362 14.9913 18.1648 14.8945 18.1745C14.7977 18.1841 14.6999 18.1745 14.6069 18.1462C14.5138 18.118 14.4272 18.0716 14.352 18.0098C14.2772 17.9478 14.2154 17.8716 14.17 17.7856C14.1247 17.6996 14.0968 17.6055 14.0878 17.5088C14.0789 17.412 14.0892 17.3144 14.118 17.2216C14.1469 17.1288 14.1937 17.0426 14.256 16.9679L18.1502 12.2313C18.2539 12.1076 18.3823 12.0069 18.5271 11.9357C18.6764 11.8663 18.839 11.8303 19.0037 11.8303C19.1683 11.8303 19.331 11.8663 19.4803 11.9357C19.6255 12.0064 19.7539 12.1071 19.8572 12.2313L23.7514 16.9679C23.8132 17.043 23.8595 17.1296 23.8878 17.2227C23.916 17.3158 23.9256 17.4135 23.916 17.5103C23.9064 17.6071 23.8778 17.7011 23.8318 17.7868C23.7858 17.8725 23.7233 17.9483 23.6479 18.0098Z" fill="white" />
                                </svg>
                            </div>

                            <div className="footer_social-mobile">
                                <a href="#" className="footer_social-link" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 40 40" fill="none">
                                        <path opacity="0.1" d="M0.627258 6.68284C0.627258 3.536 3.17828 0.984985 6.32512 0.984985H33.6749C36.8217 0.984985 39.3727 3.536 39.3727 6.68285V34.0326C39.3727 37.1794 36.8217 39.7304 33.6749 39.7304H6.32512C3.17827 39.7304 0.627258 37.1794 0.627258 34.0326V6.68284Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1281 10.1013H14.872C12.0518 10.1013 9.7439 12.4082 9.7439 15.2294V25.4855C9.7439 28.3057 12.0518 30.6136 14.872 30.6136H25.1281C27.9483 30.6136 30.2562 28.3057 30.2562 25.4855V15.2294C30.2562 12.4082 27.9483 10.1013 25.1281 10.1013ZM20.0003 24.6309C17.6398 24.6309 15.7268 22.7171 15.7268 20.3577C15.7268 17.9973 17.6398 16.0842 20.0003 16.0842C22.3597 16.0842 24.2738 17.9973 24.2738 20.3577C24.2738 22.7171 22.3597 24.6309 20.0003 24.6309ZM24.2737 14.8023C24.2737 15.5102 24.847 16.0843 25.5557 16.0843C26.2644 16.0843 26.8377 15.5102 26.8377 14.8023C26.8377 14.0944 26.2644 13.5203 25.5557 13.5203C24.847 13.5203 24.2737 14.0944 24.2737 14.8023Z" fill="white" />
                                    </svg>
                                </a>

                                <a href="" className="footer_social-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 40 39" fill="none">
                                        <path opacity="0.1" d="M0.627258 5.93736C0.627258 2.79052 3.17828 0.239502 6.32512 0.239502H33.6749C36.8217 0.239502 39.3727 2.79052 39.3727 5.93736V33.2871C39.3727 36.4339 36.8217 38.985 33.6749 38.985H6.32512C3.17827 38.985 0.627258 36.4339 0.627258 33.2871V5.93736Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4445 29.8685V20.1813H15.4417V16.843H17.4445V14.8386C17.4445 12.1152 18.5754 10.4957 21.7885 10.4957H24.4634V13.8345H22.7914C21.5406 13.8345 21.4579 14.301 21.4579 15.1717L21.4534 16.8426H24.4823L24.1279 20.181H21.4534V29.8685H17.4445Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="footer_menus">
                        <div className="footer-list-left">
                            <ul>
                                <li className="footer_li">
                                    <a href="https://rednbluepty.com/#:~:text=De%20trayectoria-,NOSOTROS,-Con%C3%B3cenos%20un%20poco" className="footer_link" target='_blank'>Nosotros</a>
                                </li>

                                <li className="footer_li">
                                    <a href="https://rednbluepty.com/#:~:text=NUESTROS-,SERVICIOS,-Compras%20por%20internet" className="footer_link"  target='_blank'>Servicios</a>
                                </li>

                                <li className="footer_li">
                                    <a href="https://rednbluepty.com/#:~:text=No%20dudes%20en-,escribirnos,-%C2%BFTienes%20alguna%20duda" className="footer_link"  target='_blank'>Contáctanos</a>
                                </li>

                                <li className="footer_li">
                                    <a href="https://portal.rednbluepty.com/registrate" className="footer_link"  target='_blank'>Regístrate</a>
                                </li>
                                <li className="footer_li">
                                    <a href="https://portal.rednbluepty.com/" className="footer_link"  target='_blank'>Portal</a>
                                </li>

                            </ul>
                        </div>

                        <div className="footer-list-right">
                            <ul className="footer-list-right">

                                <li className="footer_li">
                                    <a href="https://rednbluepty.com/preguntas-frecuentes" className="footer_link"  target='_blank'>Preguntas Frecuentes</a>
                                </li>

                                <li className="footer_li">
                                    <a href="#" className="footer_link"  target='_blank'>Ventajas de comprar por internet</a>
                                </li>

                                <li className="footer_li">
                                    <a href="#" className="footer_link"  target='_blank'>RednBlue Logistics</a>
                                </li>

                                <li className="footer_li">
                                    <a href="#" className="footer_link"  target='_blank'>Soporte técnico</a>
                                </li>

                            </ul>
                        </div>

                        <div className="scrollup" onClick={handleScrollToTop}>
                            <svg className="scrollup" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 38 37" fill="none">
                                <path d="M19 0.0313721C14.1985 0.0313721 9.59363 1.93873 6.19846 5.3339C2.80329 8.72907 0.895935 13.3339 0.895935 18.1354C0.895935 22.9369 2.80329 27.5418 6.19846 30.9369C9.59363 34.3321 14.1985 36.2395 19 36.2395C23.8015 36.2395 28.4063 34.3321 31.8015 30.9369C35.1967 27.5418 37.1041 22.9369 37.1041 18.1354C37.1041 13.3339 35.1967 8.72907 31.8015 5.3339C28.4063 1.93873 23.8015 0.0313721 19 0.0313721ZM23.6479 18.0098C23.5169 18.1183 23.3525 18.1784 23.1824 18.1798C23.0732 18.1791 22.9656 18.1542 22.8672 18.1069C22.7688 18.0596 22.6822 17.9911 22.6134 17.9064L19.7389 14.4185V24.4016C19.7389 24.5976 19.6611 24.7856 19.5225 24.9241C19.3839 25.0627 19.196 25.1406 19 25.1406C18.804 25.1406 18.616 25.0627 18.4775 24.9241C18.3389 24.7856 18.2611 24.5976 18.2611 24.4016V14.4185L15.394 17.9064C15.3325 17.9817 15.2566 18.0442 15.1709 18.0902C15.0852 18.1362 14.9913 18.1648 14.8945 18.1745C14.7977 18.1841 14.6999 18.1745 14.6069 18.1462C14.5138 18.118 14.4272 18.0716 14.352 18.0098C14.2772 17.9478 14.2154 17.8716 14.17 17.7856C14.1247 17.6996 14.0968 17.6055 14.0878 17.5088C14.0789 17.412 14.0892 17.3144 14.118 17.2216C14.1469 17.1288 14.1937 17.0426 14.256 16.9679L18.1502 12.2313C18.2539 12.1076 18.3823 12.0069 18.5271 11.9357C18.6764 11.8663 18.839 11.8303 19.0037 11.8303C19.1683 11.8303 19.331 11.8663 19.4803 11.9357C19.6255 12.0064 19.7539 12.1071 19.8572 12.2313L23.7514 16.9679C23.8132 17.043 23.8595 17.1296 23.8878 17.2227C23.916 17.3158 23.9256 17.4135 23.916 17.5103C23.9064 17.6071 23.8778 17.7011 23.8318 17.7868C23.7858 17.8725 23.7233 17.9483 23.6479 18.0098Z" fill="white" />
                            </svg>
                        </div>
                    </div>



                </div>

                <div className="line"></div>

                <div className="footer_middle">
                    <div className="footer-address">
                        <span className="footer-middle-content"><FaLocationDot /> Av. 6a oeste y calle G sur, David, Chiriquí, Panamá.</span>
                    </div>
                    
                    <div className="phone-email">
                    <div className="footer_phone">
                        <span className="footer-middle-content"><FaPhone /> +507 787-002</span>
                    </div>

                    <div className="footer_email">
                        <span className="footer-middle-content"><MdEmail /> info@rednbluepty.com</span>
                    </div>
                    </div>

                </div>

                <div className="footer_bottom">
                    <div className="logo-title">
                        <h1 className="footer_title">RednBlue</h1>
                    </div>
                    <div className="copyright">  <span className='footer_copy'>&#169; Copyright. Todos los derechos reservados RednBlue 2024. Kayro Valero - Prueba Técnica</span></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer