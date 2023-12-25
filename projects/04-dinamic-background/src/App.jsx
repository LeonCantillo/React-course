import { useState, useEffect } from 'react'
import { Square } from './components/squareOfBg'
import './styles/App.css'

function App() {
  const [squaresOb, setSquaresOb]= useState([])

  useEffect(() => {
    const handleSize = () => {
      const widthPage = window.innerWidth
      const heightPage = window.innerHeight
      const sizeSquare = widthPage * 0.05 - 2 //-2px gap
      
      const numSquareWidth = Math.floor(widthPage/sizeSquare)
      const numSquareHeight = Math.floor(heightPage/sizeSquare)
      const numSquare = numSquareHeight * numSquareWidth
      
      const newArray = Array.from({length: numSquare}, (_,index) => (<Square key={index}/>))
      setSquaresOb(newArray)
      
      console.log('width:',widthPage,'height:',heightPage,'size:',sizeSquare)
      console.log('Swidth:',numSquareWidth,'Sheight:',numSquareHeight,'total:', numSquare)
    }

    handleSize();
    
    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)

  }, [])

  return (
    <>
      <section className='dinamic_background'>
        <section className='signinbox'>
          {squaresOb}
        </section>
      </section>
    </>
  )
}

export default App
