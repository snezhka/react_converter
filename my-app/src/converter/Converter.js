import { Banner } from '../banner/Banner';
import { useState } from 'react';

export function Converter({ show }) {
    const [showConverter, setShowConverter] = useState(show);
    const [showBanner, setShowBanner] = useState(false);
    function toggleBanner() {
        setShowConverter(!showConverter);
        setShowBanner(!showBanner);
    }
    debugger;
    if (showConverter) {
        return (
            <div>
                <a href='#' className='banner_converter-button' onClick={toggleBanner}>CLick</a>
            </div >
        )
    } else {
        return (
            <Banner show={showBanner} />
        )
    }
}