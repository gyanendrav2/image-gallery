import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnsplashImagesAPIcall } from '../Redux/Actions';
import Gallery from 'react-grid-gallery';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../Styles/colors';

const useStyles = makeStyles({
    header: {
        backgroundColor: colors.primary,
        textAlign: 'center',
        padding: '1rem',
        color: colors.white
    },
});

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const images = useSelector((state: any) => state.imageReducer.images);
    const [imageList, setImageList] = useState([]);
    useEffect(() => {
        dispatch(getUnsplashImagesAPIcall());
    }, []);

    useEffect(() => {
        const result = images.map((item: any) => {
            return {
                src: item.urls.full,
                thumbnail: item.urls.thumb,
                thumbnailWidth: item.width,
                thumbnailHeight: item.height,
                isSelected: false,
                caption: item.alt_description,
            };
        });
        setImageList(result);
    }, [images]);

    return (
        <Box>
            <Typography variant="h4" className={classes.header}>
                Image Gallery Made By Gyanendra Verma
            </Typography>
            <Gallery images={imageList} backdropClosesModal={true} />
        </Box>
    );
};

export default Home;
