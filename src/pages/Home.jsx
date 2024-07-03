import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import "../styles/Home.css"

const Home = () => {

    return (
        <>
            <div id="heroSection">
                <div className="heroContent">
                    <div className="content">
                        <h1 className='max-[350px]:'>Your secret tools for
                            <br /> peak <span>productivity</span>.</h1>
                        <p>Hyphan, where efficient task management, seamless time tracking, and effortless collaboration come together. Empower yourself and your team to achieve more.</p>
                        <div className="contentButtons">
                            <Link to="/tools">
                                <Button text="Exlpore Tools" />
                            </Link>
                            <Link to="/contact">
                                <Button text="Contact Me" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="opacity-95" />

            <div id="productsSection">
                <section className="text-black bg-[#d5fbd7] body-font" id="Blogs">
                    <div className="container px-5 py-10 mx-auto">
                        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-black">Tools that’ll make your
                            productivity to peak.</h2>

                        <p className='md:text-lg text-gray-700 text-center lg:w-[60%] max-width-[400px]:w-[15%] m-auto mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam obcaecati totam molestiae accusantium repudiandae sequi illum cum eum minus.</p>
                        <div className="flex  flex-wrap items-center justify-center">

                            <div className=" lg:w-[25%] max-[1280px]:lg:w-[50%] p-3">
                                <div
                                    className="shadow-[0_0_0_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] h-full bg-white p-10 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-bold text-black mb-3">Pomodoro
                                    </h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.</p>
                                    <Link to="pomodoro"><Button text="Check Now" /></Link>
                                </div>
                            </div>
                            <div className=" lg:w-[25%] max-[1280px]:lg:w-[50%] p-3">
                                <div
                                    className="shadow-[0_0_0_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] h-full bg-white p-10 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-bold  text-black mb-3">Todo Tasks
                                    </h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.</p>
                                    <Link to="todo-tasks"><Button text="Check Now" /></Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>


            <div id="leftProductDes">
                <section className=" flex items-center justify-center py-10">
                    <div className="rounded-lg flex flex-col md:flex-row w-4/5 h-1/2 container mx-auto">
                        <div className="w-full md:w-1/2 flex items-center justify-start max-[768px]:justify-center">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczOZ2jkUgPVV7V_ItPZzfqiDKhTBNitk48LvvYWNLYi3HG3Kk8uuxNkBArDRXrD6UHNI_OAI-KLmFTHgcoBVcso6A4a8ZAkVP_C_yY14KMthhgCs-6RfYmshCOj7iIUlYkCnDIYMVDrggEPnVGOMfDtHmQXuMHc9VAV5-A0IsNnfeAf8x44LIv-HBSOYjbE_rdiWa77sAHma6nzmdjFCRVC2Y_q1sOIiC0YBIfxpOacMWso5jvDL4VHvq454eCp6IusSNp4eb5hq5e8AlyPrwtD83g4qwy4jhk9D7vU4jpSmPINM0I933peSRgIkpjkalNT3GypJWWWcq14-P0zvNvpUeFvN_at5T4urm8RwKogcdXHMrNk2cIWssrLDmv7frBL4UF6zxLKmWFFEw21PNkzpev5UaF2bGNeShH4XXInD9Qb8Kz_Dufh6iRoE9Ss0mjPY2sr1Iw5sUxWkvemIt9dXIMiy-EyCgCiNbfh0wzLv9ZliwGyJlQYFxKBPnv3yXYiswgPbsujT_CcxSbOICINfPOYDu_xx86sX-m3RIzIhwLXT_7c-28ACjj5jqBl5oPZiQmKLEQLfXloT3dxXIizd_R-XcSog6GCk3elbWh4Gcc5eYiAwug5rLsKP_hPdNXsG5JqxDgaILqOah_ttblbN2o4kxJjdrhWFFANm7USdFxy7mRISSxK0VysmA0tmjOAAFrU6v-bMe232TgSdzNj_99C0B9lsM5q9abX-TBVOBb-F4K501Sw08Aj7EYdQtgMOisg7gDXsC3YHU8L87slv7w38cNW-Lx82JBr171AUL4fHa7dsznnvBCVuQ7w5moKtVyVTjMXSo8n1eFBibKi0DBPRYgqxH1hzl-q_v2HOqEx4Hnjc7bBCpOeSiFPfA0LJpmtteOfQ1Sf2SQAShsQTPnQ=w900-h900-s-no-gm?authuser=0" alt="Dummy Image" className="object-cover w-4/5 rounded-[4rem]" />
                        </div>
                        <div
                            className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:text-left md: text-left max-[768px]:text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Maximize Your Productivity</h2>
                            <p className="text-base md:text-lg text-gray-700">Effortlessly manage tasks, track time, collaborate effectively, and analyze productivity trends with Hyphan's comprehensive toolkit.</p>
                            <ul role="list" className="marker:text-lime-500 list-disc pl-5 space-y-2 pt-5 text-gray-500 max-[768px]:hidden">
                                <li>Stay organized with intuitive task management.</li>
                                <li>Track time seamlessly to optimize your workflow.</li>
                                <li>Collaborate with ease across projects and teams.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div id="rightProductDes">
                <section className="flex items-center justify-center py-10">
                    <div
                        className="rounded-lg flex flex-col md:flex-row w-4/5 h-1/2 max-[768px]:flex-col-reverse container mx-auto">
                        <div
                            className="w-full md:w-1/2 flex flex-col justify-center max-[768px]:items-center p-6 lg:text-left md: text-left max-[768px]:text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Empower Your Workday</h2>
                            <p className="text-base md:text-lg text-gray-700">Discover Hyphan, where productivity meets simplicity. Manage tasks intuitively, track time effortlessly, collaborate seamlessly, and gain deep insights into your productivity all in one place.</p>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-end max-[768px]:justify-center">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczMVxqBiToCGg2lVBz77788UigNBkbfAydOAu9TlPFsNsYZoiSe1-qzzhdrwaA4xncSMlcpG7OtZkeO80sM8EY9KEjtssfDdTSPrRIpePqfsxo7qNStxw2ruuV4dlvCazWvyakI8UOcSkE8K0Z_Sb9bq_1JLPapH3aomXLhQRX41i2xsIayQLXFnHqyG1-j3mMctkVYE3cDVTxkATevG3u2-CypCLTUyPrsG2-Sg5-Kffh7ut0mw-tzFOY03Vt53cPaXUmL4MLm4MIxsRaYfximXi4eftXuW3iOgZ3pwSdUeUxCXFrZnmnRSdIJK23znq2tbG3p3Lw_1zho19q0BB4Jm24IV17Ns9INTcHWLEYiYAu8jsNEfkP-sZ1gfrzWOpM3-7_DVjeyH4tJchkDae7rVm8TNACVEG_bMydUwoJkZQr-RcGI-AyXlNAqOwNgdLXfoOVE2gJlBxHRcIyjWYa2xdFggaQ1P98qGDVgtwn4GCZfsUdG8bRxn0Jwpvj_9a7AOCTToQiVimaJXkcbiSIbLKOq2TsnatzVUR28ky79ZhwlO7oEfiYjNA8fQtEdpkNhfyXpBPyZEd7V5mOLJp2BawLyvLteEjjFRtdNgNlNVfz8j4aQOd35RTLw0KtFh77TUrfqa4h4bkqIafuvmN25nTggmq3tMXXtrXDt_4dd8okLCzrXBdlj9VJ7iJCAOXFf6bczY2-1g9zOT2t3mQnO-FwH2lJUQ4fM2fNyDYB4Unwz1B0ItwRLCWpU1uS7Cni-TX3UqHquguRNhxRGXjnbYPHqZT6VxmkY0DslnIuWIlqMEyZ902CgGKV5-ARsFmdwokhRvF7rMea_GX58YHFveyLQgaxMfdlWgV1xRq-jMnq0M4adQ2ZbgvgN_y5Uz4Lyox798Njp3jqkr3gHubENfhVU=w900-h900-s-no-gm?authuser=0" alt="Dummy Imsdfasdage" className="object-cover w-4/5 rounded-[4rem]" />
                        </div>
                    </div>
                </section>
            </div>
            <hr className="opacity-95" />

            <div id="footer">
                <footer className="text-gray-400 bg-black body-font ">

                    <hr className="opacity-20" />

                    <div className="bg-blank">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <div className="">
                                <a className="flex title-font font-medium items-center md:justify-start max-[640px]:justify-center text-white">
                                    <img src="https://lh3.googleusercontent.com/pw/AP1GczOdE5IZWpACVNzJA_spgvTP2zjbl4bU-Rqd_ecNd041wfgSr-s62UoCwKF3afEhlMZBfGaeMWLd5FBYD8bD_MV3s_36ZbTTgPHL05HkO_ROAKjIrUOHv-GZwmm2fdkgZ_NJLAPlujR4Vpi18NRUUmo6vYQ2XMyOZAyD54CIxktR-wg_lk33-YaWGbVczbNqF7dXNT55vw_uYthi_vMpQvZRqRCdD_KB-kCrVk9LQ8E_x-mH3hIPj6rx2AjVhgzGo0vyE__yiWlP9u45Oz3mBCvcZSjGKuRsD92G4do1XegcyQ1aCwoRe3aY0QqIV5xFlfxr9StHzjnbh4P4kDZQ-BEJmhgGSoZ00SSV9CyzhAii4m63U3OmSv_kmsDkXWVAbTMkh5PRfGUcjocRcXeXNsii8XG1xu-NymkGoB-j0szaYjrL_sxK-DHvz7TMWGTcV1jafMdDJwlnqY_RZ0CL5pNY9yRUpiUPU9kNq4j7We-V53gZgYywCCyQjdKxarl_Ojpwxh7Z5lPBBSCYmLpHTZcsMDoFLJWF6ChstnfALFzq2S9s-AD5bK22eEh23HO0Nl5AxSng_iXGp1jQvF4M-NJ5F-v2OE0izYU0-za6hzOEZ39lBbU4zYBFA5PqeFSLaXDNN8QYKdRXOM3BtlMPPYnmmoEhpK7uEtXzmytrSBNnHgY03dX2q324GSNFpt7a4N6A9Xzg7rR6nXbSKkuXQrMmSuoYtLci9Hg5rDsvlNOdyghiek5q-sR4XzBamFRWQOILo2F2kPH83v63MNcoZK_gYJAk0aGxxtWCM6JKgNkTf1UbZ3rvrskZ3Uyq0sthC9dNjrpK5xdvLVL4vIknh4wUsJJCLR3byLdiDYFMbHut39vUl06nNTa4KQsvFec3AdF1z77z3HyHcGyg9A2mastyeyc=w67-h68-s-no-gm?authuser=0" alt="" width="30px" />
                                    <span className="text-xl px-3">Hyphan</span>
                                </a>
                                <p className="mt-2  md:justify-start max-[768px]:text-center text-sm text-gray-500">Your secret tools for
                                    peak productivity.</p>
                            </div>
                            <span className="max-[640px]:text-center inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <nav className="list-none">
                                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">All Tools</h2>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" target='blank' to="pomodoro">Pomodoro</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" target='blank' to="todo-tasks">Todo Tasks</Link>
                                    </li>
                                </nav>

                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-800 bg-opacity-75">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-400 text-sm text-center sm:text-left">© Hyphan All Right Reserved 2024
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-400 hover:text-gray-100 cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
                                        viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-400 hover:text-gray-100 cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-400 hover:text-gray-100 cursor-pointer">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-400 hover:text-gray-100 cursor-pointer">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Home