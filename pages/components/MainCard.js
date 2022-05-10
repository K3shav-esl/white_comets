import Head from 'next/head'
import Image from 'next/image'

export default function MainCard(props){
    const {name, desc, source} = props
    return(
        <div className='cometContainer'>
            <img className="cometImage" src={props.source}>

            </img>
            <p className='cometName'>
                {props.name}
            </p>
            <p className="cometDesc">
                {props.desc}
            </p>
        </div>
    )
}