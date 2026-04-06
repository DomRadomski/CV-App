export default function Form({data, setData, setSubmitted}) {

    const handleClick = () => setSubmitted(prev => !prev);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="form">            
            <section>
                <h2>General Information</h2>

                <div>
                    <FormElement
                        name="name"
                        label="Name"
                        required={true}
                        value={data.name}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="email"
                        label="Email"
                        type="email"
                        required={true}
                        value={data.email}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="phone"
                        label="Phone Number"
                        type="tel"
                        value={data.phone}
                        onChange={handleChange}
                    />
                </div>

            </section>

            <section>
                <h2>Education</h2>

                <div>
                    <FormElement
                        name="uni"
                        label="University"
                        value={data.uni}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="uniCourse"
                        label="Course"
                        value={data.uniCourse}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="uniDate"
                        label="Date of study"
                        type="date"
                        value={data.uniDate}
                        onChange={handleChange}
                    />
                </div>
    
            </section> 

            <section>
                <h2>Experience</h2>

                <div>
                    <FormElement
                        name="company"
                        label="Company"
                        value={data.company}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="position"
                        label="Position"
                        value={data.position}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="posFrom"
                        label="Started Position"
                        type="date"
                        value={data.posFrom}
                        onChange={handleChange}
                    />

                    <FormElement
                        name="posTo"
                        label="Finished Position"
                        type="date"
                        value={data.posTo}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick}>Submit</button>
            </section>                           
        </div>
    )
}

function FormElement({ name, label, type = "text", required = false, value, onChange}) {
  
    return (
    <div>
      <label htmlFor={name}>{label}</label><br />
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}