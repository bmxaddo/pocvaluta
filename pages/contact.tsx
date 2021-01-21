import Link from "next/link";
import {StockSliderWrapper} from "../components/wrapper";

export default function Home() {
    return (
        <div>
            <div>
                <h1>
                    Contact page
                    <div>
                        <img src={'https://i.euroinvestor.com/logo/valutakurser_logo_rgb_new.png'}
                              alt='Logo image for valutakurser'/>
                    </div>
                    <div>
                        <Link href={'/'}>GO TO MAIN PAGE</Link>
                    </div>
                    <StockSliderWrapper/>
                </h1>
            </div>
        </div>
    )
}
