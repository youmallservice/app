import React from 'react';

import Card from '../../Components/cards/index'
import Nav from '../../Components/navBar/index'
import Caroussel from '../../Components/caroussel/index'

export default function HomePage() {
    return (
        <>
            <Nav />
            <div id="page-content">
              {/* <Caroussel /> */}
              <Card />
            </div>
        </>
    )
}
