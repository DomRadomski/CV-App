import { Children } from "react"

function CVold({data}) {
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

export default function CV({data}) {
    return (
        <div className="cv">
            <GeneralInfo data={data}/>
            <Education data={data}/>
            <Experience data={data}/>
        </div>
    )
}

function GeneralInfo({data}) {
    return (
        <section>
            <h1 className="name">{data.name}</h1>
            <div className="contact">
                <span>{data.email}</span>
                <span>{data.phone}</span>
            </div>
            <h3>About Me</h3>
            <div class="about">{data.about}</div>
        </section>
    )
}

function Education({data}) {
    return (
        <section>
            <h3>Education</h3>
            <div className="flex">
                <span>{data.uni} ({formatDate(data.uniDate)}) - {data.uniCourse}</span>
                
            </div>
        </section>
    )
}

function Experience({data}) {
    return (
        <section>
            <h3>Experience</h3>
            <div className="flex">
                <span>{data.company} ({formatDate(data.posFrom)} - {formatDate(data.posTo)}) - {data.position}</span>
            </div>
            <div className="responsibility">{data.responsibility}</div>
        </section>
    )
}

function Item({title, children}) {
    return (
        <>
            <h3>{title}</h3>
            <div>{children}</div>
        </>
    )
}

function formatDate(dateStr) {
  const date = new Date(dateStr);

  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0 → 01
  const year = String(date.getFullYear())

  return `${month}/${year}`;
}