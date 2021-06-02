import { Grid } from '../../components/';
import { Feature } from '../../components/';

const features = [{
    name: 'Seam',
    controls: [
        {
            name:'X',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Y',
            dev: 0,
            devOutTotal: 0,
            statusCode: 1,
        },
        {
            name:'Z',
            dev: 0,
            devOutTotal: 0,
            statusCode: 2,
        },
        {
            name:'Diameter',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Length',
            dev: 0,
            devOutTotal: 0,
            statusCode: 1,
        }
    ],
    statusCode: 0,
},
{
    name: 'Seam',
    controls: [
        {
            name:'X',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Y',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Z',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Diameter',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Length',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        }
    ],
    statusCode: 1,
},
{
    name: 'Seam',
    controls: [
        {
            name:'X',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Y',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Z',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Diameter',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        },
        {
            name:'Length',
            dev: 0,
            devOutTotal: 0,
            statusCode: 0,
        }
    ],
    statusCode: 2,
}];

function Home() {
    return (
        <div>
            <h1>Home works</h1>
            <Grid responsive colMinSize="450px">
                <Feature feature={features[0]}></Feature>
                <Feature feature={features[1]}></Feature>
                <Feature feature={features[2]}></Feature>
            </Grid>
        </div>
    );
}

export default Home;