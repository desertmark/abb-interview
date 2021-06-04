import React from 'react';
import { Grid, Feature } from '../../components/';
import HomeProvider, { useHomeState } from './home.context';

function Home() {
    const homeState = useHomeState();
    return (
        <div>
            {homeState.parts.map((part, index) => <React.Fragment key={index}>
                <h1>{part.name}</h1>
                <Grid colMinSize="375px" responsive>
                    {part.features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)}
                </Grid>
            </React.Fragment>)}
        </div>
    );
}

const HomeExport = () => <HomeProvider><Home></Home></HomeProvider>;
export default HomeExport;