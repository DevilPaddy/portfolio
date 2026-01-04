'use client'
import './navbar.css'
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { Activity, useState } from "react";

export default function Navbar() {

    const [isToggle, setIsToggle] = useState(false);

    function closeMenu() {
        setIsToggle(false);
    }

    return (
        <nav className="relative">
            <div className="py-4 px-4 md:px-18 flex items-center justify-between">
                <div className="logo">
                    <Link href={'/'}>Anuj Belsare</Link>
                </div>

                <div className="menu-btn">
                    <button onClick={() => setIsToggle(!isToggle)}
                    >{isToggle ? <CgClose size={22} /> : <IoMenu size={22} />}
                    </button>
                </div>
            </div>

            <Activity mode={isToggle ? 'visible' : 'hidden'}>
                <div className="menu absolute top-0 left-0 py-4 px-4 md:px-18">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Link href={'/'} onClick={closeMenu}>Anuj Belsare</Link>
                        </div>

                        <div className="menu-btn">
                            <button onClick={() => setIsToggle(!isToggle)}
                            >{isToggle ? <CgClose size={22} /> : <IoMenu size={22} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-end justify-start">
                        <Link
                            className='menua'
                            onClick={closeMenu}
                            href={'/'}
                        >HOME
                        </Link>
                        <Link
                            className='menua'
                            onClick={closeMenu}
                            href={'/'}
                        >SKILLS
                        </Link>
                        <Link
                            className='menua'
                            onClick={closeMenu}
                            href={'/'}
                        >PROJECTS
                        </Link>
                        <Link
                            className='menua'
                            onClick={closeMenu}
                            href={'/'}
                        >CONTACT ME
                        </Link>
                    </div>
                </div>
            </Activity>
        </nav>
    )
}