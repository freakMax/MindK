import PropTypes from 'prop-types'
import './Profile.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Cropper from 'react-cropper'
import Button from '@material-ui/core/Button'
import 'cropperjs/dist/cropper.css'
import { useState, useCallback } from 'react'
import { useMutation } from 'react-query'
import { updateImage, updateProfile } from '../../../Requests/requests'

function Profile({ setData }) {
  const [image, setImage] = useState()
  const [cropper, setCropper] = useState()
  const [croppedImage, setCroppedImage] = useState()

  const { mutate: uploadImage } = useMutation(updateImage)
  const { mutate: uploadProfile } = useMutation(updateProfile)

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Too short')
      .max(15, 'Too long')
      .required('Required'),
    surname: Yup.string()
      .min(1, 'Too short')
      .max(15, 'Too long')
      .required('Reuired'),
  })

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

  const id = 5

  const onSaveProfile = useCallback(
    async (data) => {
      try {
        await uploadProfile({ id, data })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    [uploadProfile]
  )

  const onSaveImage = useCallback(
    async (data) => {
      try {
        await uploadImage({ id, data })
      } catch (error) {
        console.log(error)
      }
    },
    [uploadImage]
  )
  const onHandleSaveProfile = (data) => {
    onSaveProfile({ data })
  }
  const onHandleSaveImage = (data) => {
    onSaveImage({ image: croppedImage })
  }

  const cropImage = () => {
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL())
    }
  }

  return (
    <>
      <div className='formProfile'>
        <Formik
          initialValues={{
            name: '',
            surname: '',
          }}
          validationSchema={userSchema}
          onSubmit={onHandleSaveProfile}
        >
          {({ errors, touched }) => (
            <Form className='formArticle'>
              <div className='inputBlock'>
                <p className='title'>New name</p>
                <Field id='name' name='name' />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>
              <div>
                <p className='title'>New surname</p>
                <Field id='surname' name='surname' />
                {errors.surname && touched.surname ? (
                  <div>{errors.surname}</div>
                ) : null}
              </div>
              <button type='submit' onClick={onHandleSaveProfile}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className='image-block'>
          <h4 className='center'>Update your profile image</h4>
          {!croppedImage && (
            <Button variant='contained' component='label'>
              Upload image
              <input onChange={handleChange} hidden type='file' name='avatar' />
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
          {croppedImage && (
            <Button variant='contained' onClick={onHandleSaveImage}>
              Save
            </Button>
          )}
        </div>
        <Link to='/auth'>
          <button type='submit' className='reg-btn'>
            Log Out
          </button>
        </Link>
      </div>
    </>
  )
}

Profile.propTypes = {
  setData: PropTypes.func.isRequired,
}

export default Profile
