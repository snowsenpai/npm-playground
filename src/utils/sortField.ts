/* eslint-disable @typescript-eslint/no-unused-vars */
//* get selected keys of a type as an array of strings

interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

//* variant 1
export function createKeysArray<T>() {
  return <K extends (keyof T)[]>(...keys: K) => {
    const keySet = new Set(keys);
    if (keySet.size !== keys.length) throw new Error('Duplicate keys are not allowed'); // at run time
    return keys;
  };
}

// can be used with zod enum // e.g for db SORT=sortField
const userSortFields = createKeysArray<TestUser>()('createdAt', 'email');
// const userSortFields = createKeysArray<TestUser>()('createdAt', 'createdAt'); // duplicate keys err

//* variant 2
type TupleToUnion<T extends any[]> = T[number];

// unique keys
type IsTupleUnique<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends TupleToUnion<R>
    ? false
    : IsTupleUnique<R>
  : true;

type EnsureUnique<T extends any[]> = IsTupleUnique<T> extends true ? T : never;

// export if needed
function createKeysArray1<T>() {
  return <K extends (keyof T)[]>(...keys: EnsureUnique<K>) => keys;
}

const userSortFields1 = createKeysArray1<TestUser>()('createdAt', 'email');
