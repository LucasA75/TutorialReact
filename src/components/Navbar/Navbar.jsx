import React, { useEffect, useState } from 'react'
import "./nav.css"

const Navbar = () => {

    const [dark, setDark] = useState(false)
    const [scrollY, setScroll] = useState(0)

    const [background, setBackground] = useState({
        minHeight: "50px",
        width: "100%",
        top: "0",
        backgroundColor:"#333" ,
        position: "fixed",
        scale: "1"
    })

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY; // Definimos scrollY como una variable local
            setScroll(y);
            if (y > 40) {
                setBackground({
                    ...background,
                    scale: "2",
                });
                setDark(true);
            } else {
                setBackground({
                    ...background,
                    sclae: "1",
                });
                setDark(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <>
            <nav style={background} >
                <div className='Logo'>Logo</div>
                <section>
                    <a href="">Home</a>
                    <a href="">Contacto</a>
                    <a href="">More Info</a>
                    <div >
                        <button onClick={() => {
                            setDark((cambio) => !cambio)
                        }}>cambio</button>
                    </div>
                </section>
                <div >
                    valor del Scroll : {scrollY}
                </div>
            </nav>

        </>
    )
}

export default Navbar