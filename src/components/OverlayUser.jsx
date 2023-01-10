import {UilUserCircle } from '@iconscout/react-unicons';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const OverlayUser = ({setUser, user}) => {

    const menuRef = useRef()

    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(event.target)){
                setUser(false)
            }
        };

        document.addEventListener("mousedown", handler);

    },[])

  return (
    <div ref={menuRef} className="dd-user">
        <div className='dd-profile-saya'>       
            <UilUserCircle  />
            <Link onClick={()=>setUser(user)} to="/profile-user" className='nama-poin-user'>
                <h2>Udin</h2>
                <h4>Profile Saya</h4>
                <span>0 Poin</span>
            </Link>
        </div>
        <div className='dd-bot-user'>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:clipboard-user-outline"/>
                <h4>Menjadi Pengelola</h4>
            </div>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:piggy-bank-outline"/>
                <h4>Tabungan</h4>
            </div>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:clipboard-text-clock-outline"/>
                <h4>Histori</h4>
            </div>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:bell-outline"/>
                <h4>Notifikasi</h4>
            </div>
            <div className='option-bot-user logout'>
                <iconify-icon icon="mi:log-out"/>
                <h4>Logout</h4>
            </div>
        </div>
    </div>
  )
}
