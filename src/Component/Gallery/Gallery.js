import react from 'react'
import Header from '../Gallery/Header/Header'
import Popular from '../Gallery/popularBar/PopularBar'
import Catalog from '../Gallery/Catalog/Catalog'
import classes from '../Gallery/Gallery.module.css'


const Gallery = ()=>{
    return(
        <div className={classes.majorContainer}>
            <div className={classes.HeaderContainer}>
                <Header />
                <Popular />
            </div>
            <Catalog />
        </div>
    )
}

export default Gallery