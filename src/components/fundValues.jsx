import { foundValues } from '../data'
import './foundValues.css'

function Foundvalues( { link, description } ){
    return (
        <div>
            <img src={link} alt=""/>
            <p>{description}</p>
        </div>

    )
}

export default function FundValues(){
    return (
        <div className="found-values">
            <Foundvalues
                link={foundValues[0].link}
                description={foundValues[0].description}
            />

            <Foundvalues
                link={foundValues[1].link}
                description={foundValues[1].description}
            />

            <Foundvalues
                link={foundValues[2].link}
                description={foundValues[2].description}
            />

            <Foundvalues
                link={foundValues[3].link}
                description={foundValues[3].description}
            />

            <Foundvalues
                link={foundValues[4].link}
                description={foundValues[4].description}
            />
        </div>

    )
}