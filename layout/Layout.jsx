import Head from "next/head"
import Sidebar from "../components/Sidebar"

const Layout = (props) => {
    const { children, pagina } = props

    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafetería" />
            </Head>

            <div className="md:flex">
                <aside className="dm:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <section className="p-10">
                        {children}
                    </section>
                </main>
            </div>
        </>
    )
}

export default Layout