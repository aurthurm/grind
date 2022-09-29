
export interface IUser {
  _id?: string
  firstName?: string
  middleName?: string
  lastName?: string
  name?: string
  email?: string
  // roles?: UserRole[]
  hashed_password?: string
  pin?: string
  resetPinKey?: string
  requirePinChange?: boolean
  password?: string
  resetPasswordKey?: string
  requirePasswordChange?: boolean
  phone?: string
  lastLogin?: Date
  lastPasswordReset?: Date
  completeness?: number
  status?: string
  is_active?: boolean
  is_superuser?: boolean
  createdBy?: string
  community?: string
}