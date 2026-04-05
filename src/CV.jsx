import { Children } from "react"

export default function CV({data}) {
    return (
        <>
            <section>
                <Item title="Name">{data.name}</Item>
                <Item title="Email">{data.email}</Item>
                <Item title="Phone">{data.phone}</Item>
            </section>
        </>
    )
}

function Item({title, children}) {
    return (
        <>
            <h2>{title}</h2>
            <div>{children}</div>
        </>
    )
}