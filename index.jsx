import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { loremIpsum } from 'lorem-ipsum';
import Badge from './components/Badge';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Testimonials from './components/Testimonials';



  

function App() {
  
   const goodIcon = <img className="icon" src="./icons/good.png"/>
    const warningIcon = <img className="icon" src="./icons/warning.png"/>
    const dangerIcon = <img className="icon"src="./icons/danger.png"/>
    const infoIcon = <img className="icon" src="./icons/info.png"/>
    const brandIcon = <img className="brand-icon-img" src='./icons/brand.png'/>
    const qouteIcon = <img className="qoute-icon-img" src='./icons/qoute.png'/>
    const divider = <img className='divid' src='./icons/divid.png'/>

    const backgroundColors = ["white", "red", "yellow", "green", "blue", "indigo", "purple", "pink"] 

    const badges = backgroundColors.map((color) => {
      {return <Badge key={color} backgroundColor={color}>Badge</Badge>}
    })

    const badgesPill = backgroundColors.map((color) => {
      {return <Badge key={color} backgroundColor={color} variant="pill">Badge</Badge>}
    })

  return (
    <main>
    <div className='badge-container'>
    <p><b>Square</b></p>
    {badges}
    </div>
    <div className='badge-container'>
    <p><b>Pill</b></p>
    {badgesPill}
    </div>

    <section className='banner-container'>
    <Banner variant="success" message={loremIpsum()}>{goodIcon} Congrats</Banner>
    <Banner variant="warning" message={loremIpsum()}>{warningIcon} Attention</Banner>
    <Banner variant="error" message={loremIpsum()}>{dangerIcon} There is a problem with your app</Banner>
    <Banner variant="neutral" message={loremIpsum()}>{infoIcon} Update avaliable </Banner>
    <Banner variant="success" message={loremIpsum()} compact={true}>{goodIcon} Congrats</Banner>
    <Banner variant="warning" message={loremIpsum() }compact={true}>{warningIcon} Attention</Banner>
    <Banner variant="error" message={loremIpsum()} compact={true}>{dangerIcon} There is a problem with your app</Banner>
    <Banner variant="neutral" message={loremIpsum()} compact={true}>{infoIcon} Update avaliable </Banner>
    </section>

    <section className='card-container'>
    <Cards>
      <div className={`brand-icon`}>
      {brandIcon}
      </div>
      <h3>Easy development</h3>
      <p>{loremIpsum()}</p>
    </Cards>
    </section>

     <section className='test-container'>
    <Testimonials>
      <img className='profile' src=".././images/women.png"/>
      <div className='test-content'>
       {qouteIcon}
      <p>{loremIpsum()}</p>
      <div className='test-footer'>
        <p className="name"><b>May Andersons</b></p>
        <p className='role'>Workcation, CTO</p>
      </div>
      </div>
    </Testimonials>
    <Testimonials photoless={true}>
      <div className='photoless-content'>
      <img className="logo" src=".././images/logo.png"/>
      <p className='qoute-text'>{loremIpsum()}</p>
      <div className='test-photoless-footer'>
        <p>May Andersons</p>
        {divider}
        <p>Workcation, CTO</p>
      </div>
      </div>
    </Testimonials>
    
    </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
