import { useEffect, useState } from 'react'

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth)
        }
        console.log('resize')
        window.addEventListener('resize', resize);

        // cleanup
        return () => {
            console.log('cleanup resize')
            window.removeEventListener('resize', resize)
        }
    }, []);

    return width
}

export default useWindowWidth;