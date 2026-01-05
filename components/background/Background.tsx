import './background.css'
import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({children}:BackgroundProps){

    return(
        <section className='relative bgclass m-0'>
            <div className="glow-div div1"></div>
            <div className="glow-div div2"></div>
            <div className='relative z-10'>
                {children}
            </div>
        </section>
    )
}