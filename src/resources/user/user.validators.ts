import { z } from 'zod';

const id = z.string();
const firstName = z.string().min(1);
const lastName = z.string();
const email = z.string().email();
const username = z.string();

export const find = z.object({ id, firstName, lastName, email, username });

export const findQuery = z.object({ id, username });