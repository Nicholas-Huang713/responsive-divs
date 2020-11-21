import React from 'react'

export default function Layout({children}) {
    return (
        <>
            <header>
                <div className="head">
                    <h1>
                        Title Title Title
                    </h1>
                </div>
            </header>
            <main className="content">
                {children}
            </main>
        </>
    )
}
