/**
 * File: Validation.ts
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.05
 */

/**
 * The Validation class.
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.05
 */
class Validation {

	/** This is a utility class. It contains only static methods and is non instantiable. */
	private constructor() {
		//TODO: Improve error: UnsupportedOperationException.
		throw new Error();
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// START - Special types																			//
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	public static isNonNull(value: any): value is NonNullable<any> {
		return value != null;
	}

	public static assertIsNonNullable(value: any): asserts value is NonNullable<unknown> {
		if(value == null)
			throw new TypeError("Argument `value` is `undefined` or `null`.");
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// START - Special types																			//
	//																									//
	// START - Primitives																				//
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	public static isBoolean(value: any): value is boolean {
		return typeof value === "boolean";
	}

	public static assertIsBoolean(value: any): asserts value is boolean {
		if(typeof value !== "boolean")
			throw new TypeError("Argument `value` is not of type `boolean`.");
	}

	public static isNumber(value: any): value is number {
		return typeof value === "number";
	}

	public static assertIsNumber(value: any): asserts value is number {
		if(typeof value !== "number")
			throw new TypeError("Argument `value` is not of type `number`.");
	}

	public static isBigint(value: any): value is bigint {
		return typeof value === "bigint";
	}

	public static assertIsBigint(value: any): asserts value is bigint {
		if(typeof value !== "bigint")
			throw new TypeError("Argument `value` is not of type `bigint`.");
	}

	public static isString(value: any): value is string {
		return typeof value === "string";
	}

	public static assertIsString(value: any): asserts value is string {
		if(typeof value !== "string")
			throw new TypeError("Argument `value` is not of type `string`.");
	}

	public static isSymbol(value: any): value is symbol {
		return typeof value === "symbol";
	}

	public static assertIsSymbol(value: any): asserts value is symbol {
		if(typeof value !== "symbol")
			throw new TypeError("Argument `value` is not of type `symbol`.");
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// END - Primitives																					//
	//////////////////////////////////////////////////////////////////////////////////////////////////////
}

export {
	Validation
};
