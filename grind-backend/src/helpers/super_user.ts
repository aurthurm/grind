import { UserRole } from './constants';

export const SUPER_USER = {
  userName: 'admin',
  email: 'admin@grind.com',
  firstName: 'Admin',
  lastName: 'Admin',
  middleName: '',
  name: 'Administrator',
  status: 'active',
  roles: [UserRole.SU_ADMIN],
  pin: '0000',
  phone: '0000',
  password: 'admin',
  address: '',
  requirePinChange: true,
  requirePasswordChange: true,
};
