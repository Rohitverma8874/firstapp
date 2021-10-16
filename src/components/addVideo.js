import { Button, Card, CardContent, Container, TextField, Grid } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import app_config from '../config';

const AddVideo = () => {

    const [thumbnail, setThumbnail] = useState("");
    const [video, setVideo] = useState("");

    const url = app_config.api_url;

    const videoForm = {
        title: '',
        description: '',
        category: '',
        thumbnail: '',
        file: '',
    }

    const videoSubmit = (values) => {
        console.log(values);
    }

    const uploadThumbnail = (e) => {
        let tempFile = e.target.files[0];
        console.log(tempFile);

        const tempForm = new FormData();
        tempForm.append('file', tempFile);

        const reqOptions = {
            method: 'POST',
            body: tempForm,
        }

        fetch(url + '/util/uploadFile', reqOptions)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const uploadVideo = (e) => {

    }

    

    return (
        <div>
            <h1>Add Video Here</h1>

            <Container>
                <Card>
                    <CardContent>
                        <h3>Add Video Form</h3>
                        <hr />
                        <Formik initialValues={videoForm} onSubmit={videoSubmit}>
                            {
                                ({ values, handleSubmit, handleChange }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField className="mt-5 w-100" label="Title" variant="filled" id="title" value={values.title} onChange={handleChange} />
                                        <TextField multiline className="mt-3 w-100" label="Description" variant="filled" id="description" value={values.description} onChange={handleChange} />
                                        <TextField className="mt-3 w-100" label="Category" variant="filled" id="category" value={values.category} onChange={handleChange} />

                                        <Grid container spacing={5}>
                                            <Grid item md={6}>
                                                <label className="mt-3">Upload Thumbnail</label>
                                                <input className="form-control" onChange={uploadThumbnail} type="file" />
                                            </Grid>
                                            <Grid item md={6}>
                                                <label className="mt-3">Upload File</label>
                                                <input className="form-control" onChange={uploadVideo} type="file" />
                                            </Grid>
                                        </Grid>



                                        <Button type="submit" className="mt-5 w-25" variant="contained" color="secondary">Submit</Button>

                                    </form>
                                )
                            }
                        </Formik>

                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default AddVideo;