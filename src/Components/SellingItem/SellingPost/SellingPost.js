import React, { useEffect, useState } from 'react'
import { storage } from '../../../firebase';

import './SellingPost.css'

const SellingPost = ({ classData }) => {

    const [image, setImage] = useState()

    useEffect(() => {
        storage.ref(`/images/${classData.Image}`).getDownloadURL().then((url) => setImage(url))
    }, [image])

    console.log(image)

    return (
        <div className='sellingPost'>

            <div className="sellingPost__crop">
                <p>Crop: {classData.crop}</p>
            </div>

            <div className="sellingPost__price">
                <p>Price: {classData.price}</p>
            </div>

            <div className="sellingPost__capacity">
                <p>Capacity: {classData.capacity}</p>
            </div>

            <div className="sellingPost__contact">
                <p>Contact: {classData?.contact}</p>
            </div>

            <div className="sellingPost__user">
                <p>Email: {classData?.user}</p>
            </div>

            <div className="sellingPost__image">
                <img src={image} alt="" style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "99px",
                    marginTop: "20px"
                }}
                />
            </div>

        </div>
    )
}

export default SellingPost
