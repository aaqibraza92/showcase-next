import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Navigation = () => {
    const [menu, setMenu] = useState([]);
    const getMenu = async () => {
        await axios.get(apiBaseUrl + megaMenu).then((res) => {
            if (res && res?.status === 200) {
                setMenu(res?.data?.data);
            }

        })
    }

    useEffect(() => {
        getMenu();
    }, [])
    return (
        <div>Navigation</div>
    )
}

export default Navigation