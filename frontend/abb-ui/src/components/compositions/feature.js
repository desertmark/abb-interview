import React from 'react';
import styled from "styled-components";
import { Flex, Text, Grid, Icon } from "../index";
import { STATUS_COLOR, STATUS_ICON } from '../../config/constants';

const FeatureWrapper = styled(Flex)`
    .feature__header {
        background-color: ${props => STATUS_COLOR[props.color]};
        padding: 1rem;
    }
    .feature__body {
        background-color: lightgrey;
        padding: 1rem;
    }
`;

/**
 * 
 * @param {{
 *  feature: {
 *      name: string,
 *      controls: {
 *          name: string,
 *          dev: number,
 *          devOutTotal: number,
 *          statusCode: number,
 *      }[]
 *      statusCode: number,
 *  }
 * }} param0 
 */
function Feature({ feature }) {
    return (
        <FeatureWrapper color={feature.statusCode}>
            <Flex direction="row" justify="space-between" className="feature__header">
                <Flex direction="row">
                    <Flex mr="1rem">
                        <Icon name="circle"></Icon>
                    </Flex>
                    <Text secondary upper bold>{feature.name}</Text>
                </Flex>
                <Icon name={STATUS_ICON[feature.statusCode]} w="1.5rem"></Icon>
            </Flex>
            <Grid cols={4} className="feature__body">
                <Text bold>Control</Text>
                <Text bold>Dev</Text>
                <Text bold>Dev Out Tot</Text>
                <Text bold></Text>

                {feature.controls.map((control, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Text>{control.name}</Text>
                            <Text>{control.dev}</Text>
                            <Text>{control.devOutTotal}</Text>
                            <Icon w="1.5rem" name={STATUS_ICON[control.statusCode]} color={STATUS_COLOR[control.statusCode]}></Icon>
                        </React.Fragment>
                    );
                })}

            </Grid>
        </FeatureWrapper>
    );
}


export default Feature;