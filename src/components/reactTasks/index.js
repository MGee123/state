import React from 'react'
import Champ from './champs'


export default () => {
  const x = [{ name: 'Aatrox', role: 'Fighter', diff: '6/10', price: '6300ip', file: './components/reactTasks/AatroxSquare.png' },
{ name: 'Ahri', role: 'Assassin', diff: '8/10', price: '6300ip', file: './components/reactTasks/AhriSquare.png' },
{ name: 'Bard', role: 'Support', diff: '9/10', price: '6300ip', file: './components/reactTasks/BardSquare.png' },
{ name: 'Gangplank', role: 'Fighter', diff: '8/10', price: '3150ip', file: './components/reactTasks/GangplankSquare.png' },
{ name: 'Garen', role: 'Tank', diff: '2/10', price: '450ip', file: './components/reactTasks/GarenSquare.png' },
{ name: 'Ezreal', role: 'Marksman', diff: '7/10', price: '4800ip', file: './components/reactTasks/EzrealSquare.png' },
{ name: 'Zilean', role: 'Support/Mage', diff: '6/10', price: '1350ip', file: './components/reactTasks/ZileanSquare.png' }]
  return (

    <div>
      <h1>Champs</h1>

      { _.map(x, (champion) => <Champ champ={champion} />) }

    </div>
  )
}

