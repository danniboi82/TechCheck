// Processor - 
// Laptop- 
// Hard Drive - 
// Tower - 
// Graphic Card -
// Gaming Peripheral
// Gaming Console
// Power Supply - 
// RAM - 
// PC - 
// MotherBoard - 

import GraphicsCard from './graphicscard.jpg'
import GamingPeripheral from './gamingperipheral.png'
import Laptop from './laptop.jpg'
import Motherboard from './motherboard.jpg'
import PC from './pc.jpg'
import Processor from './processor.jpg'
import PSU from './psu.png'
import RAM from './ram.jpg'
import GamingConsole from './switch.jpg'
import HardDrive from './harddrive.jpg'
import Tower from './tower.jpg'

const catArray= [
  { id: '1',
    img: GraphicsCard,
    name: 'Graphic Cards',
    value:'Graphic Card',
    priceRange: '50-500',
  },
  { id: '2',
  img: Processor,
  name: 'Processors',
  value:'Processor',
  priceRange: '50-500',
  },
  { id: '3',
  img: HardDrive,
  name: 'Hard Drives',
  value:'Hard Drive',
  priceRange: '50-500',
  },
  { id: '4',
    img: Motherboard,
    name: 'Motherboards',
    value:'MotherBoard',
    priceRange: '25-600',
  },
  { id: '5',
  img: RAM,
  name: 'RAM',
  value:'RAM',
  priceRange: '50-500',
  },
  { id: '6',
  img: PSU,
  name: 'Power Supply',
  value:'Power Supply',
  priceRange: '50-500',
  },
  { id: '7',
  img: Tower,
  name: 'Computer Cases',
  value:'Tower',
  priceRange: '50-500',
  },
  { id: '8',
    img: PC,
    name: 'Desktop Computers',
    value:'Desktop',
    priceRange: '100-1000',
  },
  {id: '9',
    img: GamingPeripheral,
    name: 'Gaming Peripherals Mice, Keyboards, Headsets',
    value:'Gaming Peripheral',
    priceRange: '10-600',
  },

  {id: '10',
    img: Laptop,
    name: 'Laptops',
    value:'Laptop',
    priceRange: '50-1000',
  },
  {id: '11',
    img: GamingConsole,
    name: 'Game Consoles',
    value:'Gaming Console',
    priceRange: '50-400',
  },
];
export default catArray;