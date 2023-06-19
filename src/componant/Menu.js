import React from "react";
import Footer from "./Footer";
import Chhola from '../image/Chhola.jpg'
import Dosa from '../image/Dosa.jpg'
import Gujrati from '../image/Gujrati.jpeg'
import Idli from '../image/Idli.jpg'
import masala from '../image/masala.jpg'
import paneer from '../image/paneer.jpg'
import '../styles/MenuStyle.css'
const Menu = () => {
    return (
        <>
            <br /> <br /><br />
            <div className="cards">
                <div className="chola  cardimg">
                    <div className="img">   <img src={Chhola} alt="#" height='350px' width='370px' /></div>
                    <h1>Chhola</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
                <div className="dosa  cardimg">
                    <div className="img">   <img src={Dosa} alt="#" height='350px' width='370px' /></div>
                    <h1>Dosa</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
                <div className="Gujrati  cardimg">
                    <div className="img"> <img src={Gujrati} alt="#" height='350px' width='370px' /></div>
                    <h1>Gujrati</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
                <div className="idli  cardimg">
                    <div className="img">  <img src={Idli} alt="#" height='350px' width='370px' /></div>
                    <h1>Tdli</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
                <div className="masala  cardimg">
                    <div className="img"> <img src={masala} alt="#" height='350px' width='370px' /></div>
                    <h1>Masala</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
                <div className="paneer  cardimg">
                    <div className="img"> <img src={paneer} alt="#" height='350px' width='370px' /></div>
                    <h1>Paneer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p></div>
            </div >

            <Footer />
        </>
    );
};

export default Menu;
