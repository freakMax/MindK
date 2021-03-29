import './AddArticles.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { createPost } from '../../../Requests/requests'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import Button from '@material-ui/core/Button'
import { useState, useCallback } from 'react'
import { useMutation } from 'react-query'

function AddArticles({ open, handleClose }) {
  const [image, setImage] = useState()
  const [cropper, setCropper] = useState()
  const [croppedImage, setCroppedImage] = useState()
  const { mutate: newPost } = useMutation(createPost)
  const initialValues = {
    title: '',
    content: '',
  }
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Too short')
      .max(30, 'Too long')
      .required('Required'),
    content: Yup.string()
      .min(1, 'Too short')
      .max(150, 'Too long')
      .required('Reuired'),
  })
  const onSavePost = useCallback(
    async (data) => {
      try {
        await newPost(data)
      } catch (error) {
        console.log(error)
      }
    },
    [newPost]
  )

  const onSubmit = (data) => {
    onSavePost({ ...data, image: croppedImage })
  }
  const imageValidator = (file) => {
    return ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
  }
  const handleChange = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    if (imageValidator(e.target.files[0])) {
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }
  const cropImage = () => {
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL())
    }
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add your post</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className='formArticle'>
                <div className='inputBlock'>
                  <p className='title'>Title</p>
                  <Field id='title' name='title' />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                </div>
                <div>
                  <p className='title'>Content</p>
                  <Field id='content' name='content'>
                    {({ field }) => (
                      <textarea type='text' {...field} className='text-area' />
                    )}
                  </Field>
                  {errors.content && touched.content ? (
                    <div>{errors.content}</div>
                  ) : null}
                </div>

                <div id='radio-group'>For whom?</div>
                <div
                  role='group'
                  aria-labelledby='radio-group'
                  className='radio'
                >
                  <div>
                    <Field type='radio' name='access' value='all' />
                    <span className='radio-text'>All</span>
                  </div>
                  <div>
                    <Field type='radio' name='access' value='friends' />
                    <span className='radio-text'>For Friends</span>
                  </div>
                  <div>
                    <Field type='radio' name='access' value='me' />
                    <span className='radio-text'>Only me</span>
                  </div>
                </div>
                <div className='image-block'>
                  <h4 className='center'>Update your profile image</h4>
                  {!croppedImage && (
                    <Button variant='contained' component='label'>
                      Upload image
                      <input
                        onChange={handleChange}
                        hidden
                        type='file'
                        name='avatar'
                      />
                    </Button>
                  )}
                  {image && !croppedImage && (
                    <Cropper
                      src={image}
                      style={{ height: 400, width: '400' }}
                      initialAspectRatio={3 / 3}
                      aspectRatio={3 / 3}
                      onInitialized={(res) => setCropper(res)}
                      className='center'
                    />
                  )}
                  {image && !croppedImage && (
                    <button
                      type='submit'
                      variant='contained'
                      onClick={cropImage}
                      className='reg-btn'
                    >
                      Crop
                    </button>
                  )}
                  {croppedImage && (
                    <img src={croppedImage} alt='img' className='center' />
                  )}
                </div>
                <button type='submit'>Submit</button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddArticles
