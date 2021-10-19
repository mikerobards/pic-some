import React, { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils"


function Photos() {
    // getting the list of allPhotos from Context
    const { allPhotos } = useContext(Context)

    // mapping over them and creating an img component
    // the part that makes the image work is by passing the entire imgage object down
    // through a prop called img
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos