import Logo from './../assets/snackmart.png'

export default function HomeAdmin() {
    return (
        <>
            <div className="flex">

                {/* Sidebar */}
                <div className="bg-white h-screen flex flex-col items-center border-r-2 w-auto" style={{width:"250px"}}>
                    
                    {/* Logo */}
                    <div>
                        <img src={Logo} className="w-28 mt-5 rounded-full" alt="Logo" />                        
                    </div>
                    
                    {/* Username */}
                    <div className='pt-3'>
                        <button className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-md border-b-2 leading-tight  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out underline-offset-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Hello, Username
                        </button>
                        <div style={{minHeight: "120px;"}}>
                            <div className="flex justify-center collapse collapse-horizontal" id="collapseWidthExample">
                                <button className="font-medium block w-full py-2 border-b-2 border-neutral-200 bg-white max-w-sm">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Menu */}
                    <div className=''>
                        {/* Dashboard */}
                        <div className='' style={{marginTop:"70px"}}>
                            <button className='text-gray-700 font-semibold py-3 w-full hover:border-b-2 active:'> {/*active belum dipasang */}
                                Dashboard
                            </button>
                            <button className='text-gray-700 font-semibold py-3 my-3 w-full hover:border-b-2 active:'>
                                New Cashier
                            </button>
                            <button className='text-gray-700 font-semibold py-3 w-full hover:border-b-2 active:'>
                                Sales
                            </button>
                        </div>

                    </div>



                </div>

                {/* Main Page */}
                <div className="basis-5/6">
                    main page
                </div>

            </div>
        </>
    )
}