import HeroSec from "@/components/HeroSec"
import Background from "@/components/background/Background"
import AboutSec from "@/components/aboutsection/AboutSec"


export default function App() {

  return (
    <section className="m-0">
      <HeroSec />


      <Background>
        <AboutSec />
      </Background>

      {/* next section is skill take inspiration from tailwind website */}


    </section>
  )
}