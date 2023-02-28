import React, { useState } from 'react'

function Pricing() {

  const priceTable = [
    {
      name:'India',
      monthly: {
        basic: '1200 ₹',
        pro: '1600 ₹'
      },
      annually:{
        basic: '1000 ₹',
        pro: '1400 ₹'
      }

    },
    {
      name:'USA',
      monthly: {
        basic: '80 $',
        pro: '60 $'
      },
      annually:{
        basic: '65 $',
        pro: '45 $'
      }

    },
    {
      name:'UK',
      monthly: {
        basic: '50 £',
        pro: '60 £'
      },
      annually:{
        basic: '40 £',
        pro: '50 £'
      }

    }
  ]

  const [selectedCountry, setSelectedCountry] = useState("India")
  const [selectedCountryData, setSelectedCountryData] = useState({
      name:'India',
      monthly: {
        basic: '1200 ₹',
        pro: '1600 ₹'
      },
      annually:{
        basic: '1000 ₹',
        pro: '1400 ₹'
      }

    })
  const [selectedCycle, setSelectedCycle] = useState("M")

  return (
    <div>
      <h2>React Pricing page</h2>

      {/* Country */}
      <h3>Select country:</h3>
      <select name="country"  value={selectedCountry} onChange={(e)=>{
          setSelectedCountry(e.target.value)
          setSelectedCountryData(priceTable.filter(country=>country.name===e.target.value)[0])
        }}>
        {priceTable.map((country,index)=>
          <option value={country.name} key={index}>{country.name}</option>
        )}
      </select>

      {/* Billing cycle */}
      <h3 >Select billing cycle:</h3>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="M" onChange={e=>setSelectedCycle('M')} checked={selectedCycle==='M'} />
            Monthly
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="A" onChange={e=>setSelectedCycle('A')} checked={selectedCycle==='A'} />
            Annually
          </label>
        </div>
      </form>

      <div className='card-wrapper'>
        {/* Card 1 */}
        <div className='price-card'>
          <h4>Standard</h4>
          <h3 style={{color:'grey'}}>{selectedCycle === 'M' ? selectedCountryData.monthly.basic : selectedCountryData.annually.basic}</h3>
          <h5>per user per month</h5>
          <div className='draw-line'/>
          <p>~features list</p>
        </div>

        {/* Card 2 */}
        <div className='price-card'>
          <h4>Professional</h4>
          <h3 style={{color:'grey'}}>{selectedCycle === 'M' ? selectedCountryData.monthly.pro : selectedCountryData.annually.pro}</h3>
          <h5>per user per month</h5>

          <div className='draw-line'/>
          <p>~features list</p>
        </div>
        
      </div>
    </div>
  )
}

export default Pricing