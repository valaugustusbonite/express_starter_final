import { object, string} from 'zod';

export const createUserSchema = ({
  body: object({
    firstName: string({
      required_error: 'First name is required.',
    }),
    lastName: string({
      required_error: 'Last Name is required.',
    }),
    password: string({
      required_error: 'Password is required.'
    }).min(6, 'Password too short - should be a minimum of 6 characters.'),
    passwordConfirmation: string({
      required_error: 'passwordConfirmation is required'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email.')
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })
})