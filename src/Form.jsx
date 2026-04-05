export default function Form({data, setData, setSubmitted}) {

    const handleClick = () => setSubmitted(prev => !prev);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>            
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
                <button onClick={handleClick}>Submit</button>
            </section>          
        </>
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