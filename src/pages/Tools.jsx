import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Tools = () => {

    const customStyles = {
        height: 'calc(100vh - 90px)'
    }

    return (
        <div id="productsSection">
            <section className="text-black min-[1024px]:h-[80vh] flex items-center justify-center body-font rounded" id="Blogs" >
                <div className="container px-5 py-10 max-[1024px]:pt-15 mx-auto">
                    <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-black">Tools that’ll make your
                        productivity to peak.</h2>

                    <p className='md:text-lg text-gray-700 text-center lg:w-[60%] max-width-[400px]:w-[15%] m-auto mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam obcaecati totam molestiae accusantium repudiandae sequi illum cum eum minus.</p>
                    <div className="flex  flex-wrap justify-center">

                        <div className="lg:w-[25%] max-[1280px]:lg:w-[50%] p-3">
                            <div
                                className="shadow-[0_0_0_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] h-full bg-white p-10 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font font-bold sm:text-2xl text-xl text-black mb-3">Pomodoro</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.</p>
                                <Link to="/pomodoro"><Button text="Check Now" /></Link>
                            </div>
                        </div>

                        <div className=" lg:w-[25%] max-[1280px]:lg:w-[50%] p-3">
                            <div
                                className="shadow-[0_0_0_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] h-full bg-white p-10 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font sm:text-2xl text-xl font-bold  text-black mb-3">Todo Tasks
                                </h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.</p>
                                <Link to="/todo-tasks"><Button text="Check Now" /></Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div >
    )
}

export default Tools