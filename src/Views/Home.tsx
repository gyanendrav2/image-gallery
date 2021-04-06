import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OutlineBtn from '../components/Button/OutlineBtn';
import { decrementAction, incrementAction } from '../Redux/Actions';
import { colors } from '../Styles/colors';

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counterReducer.count);
    const handleIncrement = () => {
        dispatch(incrementAction(counter + 1));
    };
    const handleDecrement = () => {
        dispatch(decrementAction(counter - 1));
    };
    return (
        <Grid container alignItems="center" justify="center">
            <Typography variant="h1" style={{ width: '100%', textAlign: 'center' }}>
                {counter}
            </Typography>
            <Box>
                <OutlineBtn color={colors.primary} title="Increment" trigger={handleIncrement} />
                <OutlineBtn color={colors.primary} title="Decrement" trigger={handleDecrement} />
            </Box>
        </Grid>
    );
};

export default Home;
