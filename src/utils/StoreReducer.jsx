import {createSlice} from '@reduxjs/toolkit'
import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import vehicle_01 from '../assets/images/vehicle-01.jpg'
import vehicle_02 from '../assets/images/vehicle-02.jpg'
import vehicle_03 from '../assets/images/vehicle-03.jpg'
import vehicle_04 from '../assets/images/vehicle-04.jpg'
import vehicle_05 from '../assets/images/vehicle-05.jpg'
import vehicle_06 from '../assets/images/vehicle-06.jpg'

import audis from '../assets/images/audis.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'

const initialState = {
    des:[
        {id:1 , img: one , text:'Select a car' , description:"To contribute to positive change and achieve our sustainability goals with many extraordinary "},
        {id:2 , img: two , text:'Contact Operator' , description:"To contribute to positive change and achieve our sustainability goals with many extraordinary "},
        {id:3 , img: three , text:'Lets Drive ' , description:"To contribute to positive change and achieve our sustainability goals with many extraordinary "},
    ],

    cars:[
        {id:1, img:vehicle_01  },
        {id:2, img:vehicle_02  },
        {id:3, img:vehicle_03  },
        {id:4, img:vehicle_04  },
        {id:5, img:vehicle_05  },
        {id:6, img:vehicle_06  },
    ] ,

    optionVehicle :[
        {id:1 , vehicleName:'Audi A1 S' , img:audis},
        {id:2 , vehicleName:'Mercedes 35' , img:image2},
        {id:3 , vehicleName:'Mercedes' , img:image3},
        {id:4 , vehicleName:'VW passatCC' , img:image4},
        {id:5 , vehicleName:'BMW 320' , img:image5},
        {id:6 , vehicleName:'Toyota Camry' , img:image6},
        {id:7 , vehicleName:'Lexus CT' , img:image7},
    ]

}


export const descriptionSlice = createSlice({
    name:'description',
    initialState,
    reducers:{

    }
})

export const {} = descriptionSlice.actions
export default descriptionSlice.reducer

