/**
 * File: Types.ts
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.02
 */

/**
 * 
 * 
 * @author Necrofantasia
 * @created 2023.08.05
 * @updated 2023.08.05
 */
type Class<T> = new (...args: any[]) => T;

/**
 * 
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.02
 */
type OptionalUndefined<T> = T | undefined;

/**
 * 
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.02
 */
type OptionalNull<T> = T | null;

/**
 * 
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.02
 */
type Optional<T> = OptionalUndefined<T> | OptionalNull<T>;

export {
    Class,
    OptionalUndefined, OptionalNull, Optional
};
