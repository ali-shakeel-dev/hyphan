import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import "../styles/Navbar.css"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleNav = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className="container m-auto">
                <img className='BurgerIcon' src="https://lh3.googleusercontent.com/pw/AP1GczOdE5IZWpACVNzJA_spgvTP2zjbl4bU-Rqd_ecNd041wfgSr-s62UoCwKF3afEhlMZBfGaeMWLd5FBYD8bD_MV3s_36ZbTTgPHL05HkO_ROAKjIrUOHv-GZwmm2fdkgZ_NJLAPlujR4Vpi18NRUUmo6vYQ2XMyOZAyD54CIxktR-wg_lk33-YaWGbVczbNqF7dXNT55vw_uYthi_vMpQvZRqRCdD_KB-kCrVk9LQ8E_x-mH3hIPj6rx2AjVhgzGo0vyE__yiWlP9u45Oz3mBCvcZSjGKuRsD92G4do1XegcyQ1aCwoRe3aY0QqIV5xFlfxr9StHzjnbh4P4kDZQ-BEJmhgGSoZ00SSV9CyzhAii4m63U3OmSv_kmsDkXWVAbTMkh5PRfGUcjocRcXeXNsii8XG1xu-NymkGoB-j0szaYjrL_sxK-DHvz7TMWGTcV1jafMdDJwlnqY_RZ0CL5pNY9yRUpiUPU9kNq4j7We-V53gZgYywCCyQjdKxarl_Ojpwxh7Z5lPBBSCYmLpHTZcsMDoFLJWF6ChstnfALFzq2S9s-AD5bK22eEh23HO0Nl5AxSng_iXGp1jQvF4M-NJ5F-v2OE0izYU0-za6hzOEZ39lBbU4zYBFA5PqeFSLaXDNN8QYKdRXOM3BtlMPPYnmmoEhpK7uEtXzmytrSBNnHgY03dX2q324GSNFpt7a4N6A9Xzg7rR6nXbSKkuXQrMmSuoYtLci9Hg5rDsvlNOdyghiek5q-sR4XzBamFRWQOILo2F2kPH83v63MNcoZK_gYJAk0aGxxtWCM6JKgNkTf1UbZ3rvrskZ3Uyq0sthC9dNjrpK5xdvLVL4vIknh4wUsJJCLR3byLdiDYFMbHut39vUl06nNTa4KQsvFec3AdF1z77z3HyHcGyg9A2mastyeyc=w67-h68-s-no-gm?authuser=0" alt="" onClick={handleNav} />
                <div id="navBar" className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/">

                        <div className="logo">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczOdE5IZWpACVNzJA_spgvTP2zjbl4bU-Rqd_ecNd041wfgSr-s62UoCwKF3afEhlMZBfGaeMWLd5FBYD8bD_MV3s_36ZbTTgPHL05HkO_ROAKjIrUOHv-GZwmm2fdkgZ_NJLAPlujR4Vpi18NRUUmo6vYQ2XMyOZAyD54CIxktR-wg_lk33-YaWGbVczbNqF7dXNT55vw_uYthi_vMpQvZRqRCdD_KB-kCrVk9LQ8E_x-mH3hIPj6rx2AjVhgzGo0vyE__yiWlP9u45Oz3mBCvcZSjGKuRsD92G4do1XegcyQ1aCwoRe3aY0QqIV5xFlfxr9StHzjnbh4P4kDZQ-BEJmhgGSoZ00SSV9CyzhAii4m63U3OmSv_kmsDkXWVAbTMkh5PRfGUcjocRcXeXNsii8XG1xu-NymkGoB-j0szaYjrL_sxK-DHvz7TMWGTcV1jafMdDJwlnqY_RZ0CL5pNY9yRUpiUPU9kNq4j7We-V53gZgYywCCyQjdKxarl_Ojpwxh7Z5lPBBSCYmLpHTZcsMDoFLJWF6ChstnfALFzq2S9s-AD5bK22eEh23HO0Nl5AxSng_iXGp1jQvF4M-NJ5F-v2OE0izYU0-za6hzOEZ39lBbU4zYBFA5PqeFSLaXDNN8QYKdRXOM3BtlMPPYnmmoEhpK7uEtXzmytrSBNnHgY03dX2q324GSNFpt7a4N6A9Xzg7rR6nXbSKkuXQrMmSuoYtLci9Hg5rDsvlNOdyghiek5q-sR4XzBamFRWQOILo2F2kPH83v63MNcoZK_gYJAk0aGxxtWCM6JKgNkTf1UbZ3rvrskZ3Uyq0sthC9dNjrpK5xdvLVL4vIknh4wUsJJCLR3byLdiDYFMbHut39vUl06nNTa4KQsvFec3AdF1z77z3HyHcGyg9A2mastyeyc=w67-h68-s-no-gm?authuser=0" alt="Hyphan Logo" />
                            <div className="logoText">
                                <h1>Hyphan</h1>
                            </div>
                        </div>
                    </Link>
                    <div className="itemsList">
                        <Link to="/pomodoro" className="hover:text-gray-500">Pomodoro</Link>
                        <Link to="/todo-tasks" className="hover:text-gray-500">ToDo Tasks</Link>
                        <Link to="/contact" className="hover:text-gray-500"><Button text="Contact" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar