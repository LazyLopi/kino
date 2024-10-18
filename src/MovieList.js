import React from 'react';
import './App.css';
import robot from './robot.jpg';
import joker from './joker.jpg';
import kulej from './kulej.jpg';
import pingwin from './pingwin.jpg';
import niepewnosc from './niepewnosc.jpg';
import terrifier from './terrifier.jpg';

const menuItems = [
    {
        id: 1,
        name: 'Dziki robot',
        time1: '15:45',
        time2: '18:00',
        description: 'animowany/przygodowy/familijny',
        image: robot,
    },
    {
        id: 2,
        name: 'Joker:Folie a deux',
        time1: '15:00',
        time2: '17:30',
        description: 'dramat/kryminalny.',
        image: joker,
    },
    {
        id: 3,
        name: 'kulej',
        time1: '16:30',
        time2: '19:00',
        description: 'biograficzny',
        image: kulej,
    },
    {
        id: 4,
        name: 'moj przyjaciel pingwin',
        time1: '9:00',
        time2: '17:30',
        description: 'familijny',
        image: pingwin,
    },
    {
        id: 5,
        name: 'Terrifier 3',
        time1: '14:30',
        time2: '19:00',
        description: 'Horror',
        image: terrifier,
    },
    {
        id: 6,
        name: 'Niepewnosc',
        time1: '11:25',
        time2: '17:40',
        description: 'Biograficzny',
        image: niepewnosc,
    }
];


const Menu = () => {
    return (
        <div>
            <h1>Repertuar</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <div style={{ position: 'relative'}}>
                            <h1 style={{ margin: 0 }}>{item.name}</h1>
                            <h2 style={{ margin: '5px 0', textAlign: 'right', backgroundColor: 'lightgray', display: 'inline-block'}}>{item.time1} {item.time2}</h2>
                            <p style={{ color: 'gray' }}>{item.description}</p>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <Menu />
        </div>
    );
};

export default App;