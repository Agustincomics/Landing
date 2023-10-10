import React from 'react';
import { Container } from 'react-bootstrap';
import LandingPage from './LandingPage';
import MapContainer from '../utilidades/MapContainer';
import Principal from './Principal';

const PagPrincipal = () => {
    return (
        <Container className='mt-5'>
            <LandingPage></LandingPage>
            <Principal></Principal>
            <MapContainer></MapContainer>
        </Container>
    );
};

export default PagPrincipal;