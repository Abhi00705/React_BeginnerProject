import React, { useEffect, useState } from 'react'
import './Meal.css';

const Meal = () => {
    const[data, setData] = useState([]);
    async function fetchData(){
        const resp = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const json = await resp.json();
        setData(json.meals);
    }
    useEffect(()=>{
        fetchData();
        console.log(data);
    },[]);
    
  return !data?<h1>loading...</h1>: (
    <>
    {/* {
        data.map((item)=>{
            return(
                <>
                <div className='MealCard'>
                <img src={item.strMealThumb} alt="img" />
                <section>
                    <h2>{item.strMeal}</h2>
                    <h3>{item.idMeal}</h3>
                </section>
        
                </div>  
                </>
            );
        })
    } */}
    <div className='container'>
        
    {
        data.map((item)=>{
            return(
                <>
                    <div className='mealCard'>
                        <img className='mealImg' src={item.strMealThumb} alt="img" />
                        <h2 className='mealName detail'>{item.strMeal}</h2>
                        <h2 className='mealId detail' >#{item.idMeal}</h2>
                    </div>
                </>
            )
        })
    }
    </div>

</>
    
  )
}

export default Meal