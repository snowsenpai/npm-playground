import { z } from 'zod';

const id = z.number();
const nanoid = z.string();
const firstName = z.string().min(1);
const lastName = z.string();
const email = z.string().email();
const username = z.string();

export const create = z.object({ 
  firstName,
  lastName,
  email,
  username
});

export const findQuery = z.object({ 
  id: id.optional(),
  firstName: firstName.optional(),
  lastName: lastName.optional(),
  email: email.optional(),
  username: username.optional()
 });

 export const updateFields = z.object({ 
  firstName: firstName.optional(),
  lastName: lastName.optional(),
  email: email.optional(),
  username: username.optional()
 });