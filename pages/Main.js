import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Pfp from '../public/cometPfp.svg'

export default function Main() {
    return (

        <div className={styles.container}>
            <Head>
                <title>White Comets</title>
            </Head>
            <nav className='navbar'>
                <span className="starLogo">★</span>
                <ul className='navbar-list'>
                    <li className='navbar-list-items'>Comets</li>
                    <li className='navbar-list-items'>Craters</li>
                    <li className='navbar-list-items'>Expeditions</li>
                    <li className='navbar-list-items'>Origin</li>
                </ul>
            </nav>
            <section className='cometSection'>
            </section>
        </div>
    )
}