import { Children } from "react"

export default function CV({data}) {
    return (
        <div className="cv">
            <section>
                <h2>General Information</h2>
                <Item title="Name:">{data.name}</Item>
                <Item title="Email:">{data.email}</Item>
                <Item title="Phone:">{data.phone}</Item>
            </section>

            <section>
                <h2>Education</h2>
                <Item title="University:">{data.uni}</Item>
                <Item title="Course:">{data.uniCourse}</Item>
                <Item title="Date of study:">{data.uniDate}</Item>
            </section>

            <section>
                <h2>Experience</h2>
                <Item title="Company:">{data.company}</Item>
                <Item title="Position:">{data.position}</Item>
                <Item title="Date started:">{data.posFrom}</Item>
                <Item title="Date finished:">{data.posTo}</Item>
            </section>
        </div>
    )
}

function generalInfo({data}) {
    <section>
        <h2>General Information</h2>
    </section>
}

function Item({title, children}) {
    return (
        <>
            <h3>{title}</h3>
            <div>{children}</div>
        </>
    )
}