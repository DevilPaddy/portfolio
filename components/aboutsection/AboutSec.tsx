import './aboutsec.css'

export default function AboutSec() {

    return (
        <section className="aboutsec max-w-7xl mx-auto py-4 px-4 md:px-18 m-0">
            <div className="side-title">
                <h4>About</h4>
            </div>

            <div className="about-title text-center">
                <h4>Turning ideas into digital experiences</h4>
            </div>

            <div className='about-para'>
                <div className='flex flex-col gap-2.5' >
                    <span>I'm a final-year B.Tech student and web developer with a passion for <span className='text-white'>building modern, high-performance websites</span> that look great on every device. For me, development isn't just about writing code it's about <span className='text-white'>creating seamless experiences</span> that users actually enjoy.</span> <br />
                    <span>I specialize in <span className='text-white'>crafting responsive websites</span> using cutting-edge technologies like <span className='text-white'>React and Next.js</span>, ensuring fast load times and smooth interactions. Whether it's a sleek landing page or a complex web application, <span className='text-white'>I focus on clean code and user-centric design.</span> </span><br />
                    <span>Beyond web development, <span className='text-white'>I also build mobile applications with React Native</span>, bringing the same attention to detail and performance to <span className='text-white'>iOS and Android platforms.</span></span>
                </div>
            </div>
        </section>
    )
}