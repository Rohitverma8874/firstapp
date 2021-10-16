import { useContext } from "react";
import { ProductContext } from "../productContext";
import { Formik } from 'formik';
import app_config from "../config";
import Swal from "sweetalert2";

const Login = () => {

    const { loggedIn, setLoggedIn } = useContext(ProductContext);

    // const loginSubmit = () => {
    //     setLoggedIn(true);
    // }

    const url = app_config.api_url;
    const loginForm = {
        email: '',
        password: ''
    }

    const loginSubmit = (values) => {
        console.log(values);

        fetch(url + '/user/getbyemail/' + values.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data) {
                    if (data.password == values.password) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Loggedin Successfully'
                        })

                        console.log('login success');
                        setLoggedIn(true);
                        sessionStorage.setItem('user', JSON.stringify(data));
                        window.location.replace('/productlist');

                        return;
                    } else {
                        console.log('password incorrect');
                    }
                } else {
                    console.log('email not found');
                }

                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Email or password is incorrect!'
                })
            })
    }

    return (
        <div className="col-md-4 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                        {({
                            values, handleChange, handleSubmit
                        }) => (
                            <form className="mt-4" onSubmit={handleSubmit}>

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

    )
}

export default Login;