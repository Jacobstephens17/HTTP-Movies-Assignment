import React from 'react'

const UpdateMovie = () => {


    return(
        <div>
            <form>
                <input
                    type = 'text'
                    placeholder ='Title'
                />

                <input
                    type = 'text'
                    placeholder ='Director'
                />

                <input
                    type = 'text'
                    placeholder ='MetaScore'
                />
                
                <input
                type = 'text'
                placeholder ='Stars'
                />
                
                <button>Save Changes</button>
            </form>
        </div>
    )
}

export default UpdateMovie;