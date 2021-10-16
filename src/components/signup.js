import { Formik } from "formik";
import app_config from "../config";

const Signup = () => {

    const url = app_config.api_url;

    const signupform = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    const signupSubmit = (values) => {
        console.log(values);

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(url + '/user/add', reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="container">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mt-5">Signup Here</h2>
                        <hr />

                        <Formik initialValues={signupform} onSubmit={signupSubmit}>
                            {({
                                values, handleSubmit, handleChange
                            }) => (
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <label className="mt-3">Name</label>
                                    <input className="form-control" id="name" onChange={handleChange} value={values.name} />

                                    <label className="mt-3">Username</label>
                                    <input className="form-control" id="username" onChange={handleChange} value={values.username} />

                                    <label className="mt-3">Email</label>
                                    <input className="form-control" id="email" onChange={handleChange} value={values.email} />

                                    <label className="mt-3">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />

                                    <button type="submit" className="btn btn-secondary mt-5 w-100">Submit</button>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup;