import { gql } from '@apollo/client'

type User = {
  id: string
  token: string
  userName: string
}
export type registerUserData = {
  registerUser: User
}

export type RegisterInput = {
  userName: string
  password: string
  confirmPassword: string
}

export type RegisterVar = {
  inputs: RegisterInput
}

export const CREATE_USER = gql`
  mutation registerUser($inputs: RegisterInput) {
    registerUser(inputs: $inputs) {
      id
      token
      userName
    }
  }
`