import React from 'react'
import IngredLogo from './IngredLogo'

function LogoText() {
    return (
        < >
            <h4 className='text-md-center'>Daily essentials with good intentions — for living life or creating it.
            </h4>
            <div className='row flex-sm-column flex-md-row mt-3 mt-md-5'>
                
                <IngredLogo src='fitbit' text='Traceable Ingredients'/>
                <IngredLogo src='not_interested' text='Non-GMO'/>
                <IngredLogo src='health_and_safety' text='Third Party Tested'/>
                <IngredLogo src='spa' text='Vegan'/>
                <IngredLogo src='water_drop' text='No Artificial Flavors or Synthetic Fillers'/>
            </div>

        </>
    )
}

export default LogoText
