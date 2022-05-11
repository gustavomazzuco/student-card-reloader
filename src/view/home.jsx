import { Slideshow } from "../components/slide-show.jsx"
import { Menu } from "../components/navigation.jsx"

export default function Home() {
    return(

        <page>
            <header className="page-header center-mid">
                <Menu/>
            </header>

            <Slideshow/>
        </page>

    )
}