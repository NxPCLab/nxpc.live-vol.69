import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'
import Hero from 'components/hero'
import About from 'components/about'
import Information from 'components/infomation'
import TimeTable from 'components/timeTable'
import Performer from 'components/performer'
import Meta from 'components/meta'

export default function Layout() {
    return (
        <>
            <Meta />

            <Header />

            <main>
                <Container>
                    <Hero />
                    <div id="about">
                        <About />
                    </div>
                    <div id="info">
                        <Information />
                    </div>
                    <div id="timetable">
                        <TimeTable />
                    </div>
                    <div id="performer">
                        <Performer />
                    </div>
                </Container>
            </main>

            <Footer />
        </>
    )
}
