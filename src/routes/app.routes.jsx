import {Routes, Route} from 'react-router-dom';

import {PlateEdit} from '../pages/PlateEdit';
import {PlateAdd} from '../pages/PlateAdd';
import {Details} from '../pages/Details';
import {Home} from '../pages/Home';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/PlateEdit/:id' element={<PlateEdit />} />
            <Route path='/PlateAdd' element={<PlateAdd />} />
            <Route path='/Details/:id' element={<Details />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}