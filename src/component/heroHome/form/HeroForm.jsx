import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroForm.module.css'; // Import modular CSS
import RentForm from './RentForm/RentForm.jsx';
import Sell from "./Sell/Sell.jsx"
function HeroForm() {  
  const navigate = useNavigate();
  const [setForm,GetForm] = useState("buy");
  const RenderComponent = ()=>{
            switch(setForm){
              case "sell":
                  return <Sell/>
              case "Rent":
                   return <RentForm/>
              default:
                   return <div>
                   <div className={styles.Buy} >
                      <h3>Buy Property</h3>
                       <form action="submit" className={styles.form}>
                        <div className="search">
                            <label htmlFor="search">Search : </label>
                            {/* <input type="text" placeholder='Enter porperty' required/> */}
                            <input type="text" placeholder='Enter  property location' className={styles.inputSearch} />
                        </div>
                        <div className={styles.categories}>
                            <label htmlFor="catg">Categaries</label>
                             <select name="House" id="catg">
                                <option value="House">House</option>
                                <option value="Aprtment">Aprtment</option>
                                <option value="office">Office</option>
                                <option value="TownHome">TownHome</option>
                             </select>
                        </div>
                        <div className={styles.prise}>
                        <label htmlFor="price">Min price</label>
                             <select name="price" id="price">
                                <option value="5000">5000</option>
                                <option value="5000">10000</option>
                                <option value="5000">15000</option>
                                <option value="5000">50000</option>
                                <option value="5000">550000</option>
                                <option value="5000">150000</option>
                             </select>
                        </div>
                        <div className={styles.prise}>
                        <label htmlFor="price2">Max Price</label>
                             <select name={styles.Max} id="price2">
                                <option value="5000">5000</option>
                                <option value="5000">7000</option>
                                <option value="5000">3000</option>
                                <option value="5000">2000</option>
                                <option value="5000">50000</option>
                                <option value="5000">25000</option>
                             </select>
                        </div>
                        <button type='none' onClick={()=>{
                              navigate("/seProperty");
                             }} className={styles.submit}>Search</button>
            
                       </form>
                   </div>
                 </div>
            }
  }

  const serchHandlar=()=>{
       navigate("/property");

  }
  return (
    <>
    <div className={styles.heroFormWrapper}>
      <div className={styles.formTab}>
        <button onClick={()=>{
           GetForm('Buy');
        }} className={styles.tabBtn} data-tab-btn>Buy</button>
        <button  onClick={()=>{
          GetForm('sell');
        }}
            className={styles.tabBtn} data-tab-btn>Sell</button>
        <button onClick={()=>{
           GetForm('Rent');
        }} className={styles.tabBtn} data-tab-btn>Rent</button>
      </div>
      <div className={styles.RenderComponent}>
       {RenderComponent()}
     </div>
    

      {/* <form action="" className={styles.heroForm}>
        <div className={styles.inputWrapper}>
          <label htmlFor="search" className={styles.inputLabel}>Search :*</label>
          <div className={styles.searchBox}>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder="   Search your home" 
              required 
              className={styles.inputField} 
            />
            <ion-icon name="search-outline" className={styles.searchIcon}></ion-icon>
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="category" className={styles.inputLabel}>Select Categories:</label>
          <select name="category" id="category" className={styles.dropdownList}>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="offices">Offices</option>
            <option value="townhome">Townhome</option>
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="min-price" className={styles.inputLabel}>Min Price :</label>
          <select name="min-price" id="min-price" className={styles.dropdownList}>
            <option value="min price">Min Price</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="max-price" className={styles.inputLabel}>Max Price :</label>
          <select name="max-price" id="max-price" className={styles.dropdownList}>
            <option value="max price">Max Price</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </div>

        <button type="submit" onClick={serchHandlar} className={`${styles.btn} ${styles.btnPrimary}`}>Search now</button>
      </form> */}

      
    </div>
    
    </>
  );
}

export default HeroForm;
