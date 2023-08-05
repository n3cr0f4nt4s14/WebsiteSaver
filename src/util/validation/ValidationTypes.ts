/**
 * File: ValidationTypes.ts
 * 
 * @author Necrofantasia
 * @created 2023.08.05
 * @updated 2023.08.05
 */

/**
 * The ValidationTypes enum.
 * 
 * A list of all types that may be validated against.
 * 
 * @author Necrofantasia
 * @created 2023.08.05
 * @updated 2023.08.05
 */
enum ValidationTypes {
	BIGINT = "bigint",
	BOOLEAN = "boolean",
	FUNCTION = "function",
	NUMBER = "number",
	OBJECT = "object",
	STRING = "string",
	SYMBOL = "symbol"
}

Object.freeze(ValidationTypes);

export {
    ValidationTypes
};
