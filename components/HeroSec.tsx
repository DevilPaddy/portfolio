import Link from "next/link"
import { HiArrowLongRight } from "react-icons/hi2";
export default function HeroSec() {

    return (
        <section className="hero py-4 px-4 md:px-18 m-0">
            <div className="hero-content">
                <div className="hero-title">
                    <h2>Building Digital Experiences That Matter</h2>
                </div>
                <div className="hero-para">
                    <p>I turn ideas into clean, functional websites. From concept to deployment, I build digital solutions that help businesses grow.</p>
                </div>

                <Link
                    className="contact-btn"
                    href={'/'}
                >Get In Touch <HiArrowLongRight size={28} />
                </Link>
            </div>
        </section>
    )
}