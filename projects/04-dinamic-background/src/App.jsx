import { useState, useEffect } from 'react'
import { Square } from './components/squareOfBg'
import './styles/App.css'

function App() {
  const [squaresOb, setSquaresOb]= useState([])

  useEffect(() => {
    const handleSize = () => {
      const widthPage = window.innerWidth
      const heightPage = window.innerHeight
      const percentageSize = () => (widthPage < 600 ? 0.2 : widthPage < 900 ? 0.1 : 0.05)
      const sizeSquare = widthPage * percentageSize()
      const numSquareWidth = Math.ceil(widthPage/sizeSquare)
      const numSquareHeight = Math.ceil(heightPage/sizeSquare)
      const numSquare = numSquareHeight * numSquareWidth
      
      const newArray = Array.from({length: numSquare}, (_,index) => (<Square key={index}/>))
      // Lo que es lo mismo:
      // const newArray = [];
      // for (let i = 0; i < numSquare; i++) {
      //   newArray.push((index => (
      //     <Square key={index}>{i}</Square>
      //   ))(i));
      // }
      setSquaresOb(newArray)
      
      console.log('width:',widthPage,'height:',heightPage,'size:',Math.floor(sizeSquare))
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
