import { z } from 'zod';
import { resourceSort } from './constexpr';

type AnyObj = Record<PropertyKey, unknown>;

type ZodObj<T extends AnyObj> = {
  [key in keyof T]: z.ZodType<T[key]>
}

//* Gotchas
//* case1: a type with one or more optional keys but with one required key
//* case2: property with : null | undefined | string(any primitive)
/**
 * create a zod object with a given type `T`
 * 
 * @param arg an object with keys that match keys in `T` with properties of {@link z.ZodType}
 * 
 * @returns a zod object
 */
export const zObject = <T extends AnyObj>(arg: ZodObj<T>) => z.object(arg);

/**
 * creates a merged pagination object
 * 
 * @param {string[]} arr array to use with zod enum
 * @param {string} str default value for the `sortField`
 * 
 * @returns a zod object with key `sortField` merged with {@link paginationSchema}
*/
export const zResourcePagination = <T extends readonly [string, ...string[]]>(arr: T, str: T[number]) => 
  z.object({ sortField: z.enum(arr).default(str) }).merge(paginationSchema);


//... unique identifiers
export const pk_id = z.coerce.number(); // uInt!
export const nanoid = z.string();
// uuid

// common derived primitive schemas e.g uInt, password
export const emailSchema = z.string().email();
export const nameSchema = z.string();
// diff??
export const uInt = z.number().int().positive();
export const uInt_coerce = z.coerce.number().int().positive();

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(5),
  sort: z.enum(resourceSort).default('asc'),
});