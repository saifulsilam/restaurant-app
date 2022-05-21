import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import "./Menu.css";
const Menu = () => {
    return (
        <div className="main">
            <section class="menu-breadcum">
                <p><Link to='/'>BackToHome</Link></p>
                <h2>Our Delicious Menu</h2>
                <p>FOR PRICING, SEE OUR ONLINE ORDERING.</p>
                <input type="submit" class="submit" value="Order Now!" />
                <p>For More Information, Call at : 123-3432-678</p>
            </section>
            <div class="row menus">
             <h2>Menus</h2>
             </div>
            <div class="row menus-item">
            <div class="col span_1_of_2">

                <div class="menu">
            <div class="title">
                <h2>Breakfast — Served daily from 7 – 11 am.</h2>
            </div>
            <div class="menu-item">
                <h3>Hummas</h3>
                <p>chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p>chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
         </div>

         <div class="menu">
            <div class="title">
                <h2>Lunch — Served daily from 11 am – 7pm.</h2>
            </div>
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 

         </div>
            
            {/*  */}
            </div>
            </div>

            <div class="row menus-item">
            <div class="col span_1_of_2">

                <div class="menu">
                <div class="title">
                <h2>Dinner — Served daily from 7 – 11 pm.</h2>
            </div>
            <div class="menu-item">
                <h3>Hummas</h3>
                <p>chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p>chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
         </div>

         <div class="menu">
            <div class="title">
                <h2>Lunch — Served daily from 11 am – 7pm.</h2>
            </div>
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 
            <div class="menu-item">
                <h3>Hummas</h3>
                <p class="element">chicken,oil,zinzar,rice</p>
                <p>$12.56</p>
            </div> 

         </div>
            
            {/*  */}
            </div>
            </div>


            <section class="menu-copyright">
                <p>&#169;2020 De Lounge</p>
            </section>


      </div>
      

    )
}

export default Menu
