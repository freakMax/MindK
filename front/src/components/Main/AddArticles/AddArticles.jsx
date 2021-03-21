import './AddArticles.css'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import {createPost} from '../../../Requests/requests'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'


function AddArticles(open,handleClose) {
    const initialValues = {
        title:'',
        content:''
    }
    const validationSchema = Yup.object().shape({
        title:Yup.string().min(3,'Too short').max(30, 'Too long').required('Required'),
        content:Yup.string().min(1,'Too short').max(150, 'Too long').required('Reuired')
    })
    const onSubmit = data => {
        console.log(data)
        createPost(data)
    }

    return (
        <>
        <Dialog>
                <DialogTitle>Edit yout post</DialogTitle>
                <DialogContent>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className='formArticle'>
                            <div className='inputBlock'>
                                <p className="title">Title</p>
                                <Field
                                    id='title'
                                    name='title'
                                    />
                                {errors.title && touched.title ? (
                                    <div>{errors.title}</div>
                                ) : null}
                            </div>
                            <div>
                                <p className="title">Content</p>
                                <Field
                                    id='content'
                                    name='content'>
                                        {({ field }) => (
                                            <textarea type="text" {...field} className='text-area'/>
                                    )}
                                </Field>
                                {errors.content && touched.content ? (
                                    <div>{errors.content}</div>
                                ) : null}
                            </div>

                            <div id="radio-group">For whom?</div>
                            <div role="group" aria-labelledby="radio-group" className='radio'>
                                    <div>
                                        <Field type="radio" name="access" value="all" />
                                        <span className='radio-text'>All</span>
                                    </div>
                                    <div>
                                        <Field type="radio" name="access" value="friends" />
                                        <span className='radio-text'>For Friends</span>
                                    </div>
                                    <div>
                                        <Field type="radio" name="access" value="me" />
                                        <span className='radio-text'>Only me</span>
                                    </div>
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
    
}



export default AddArticles;