/**
 * File: Validation.ts
 * 
 * @author Necrofantasia
 * @created 2023.08.02
 * @updated 2023.08.05
 */

import { Class } from "./Internal";
import { ValidationTypes } from "./Internal";

/**
 * The Validation class.
 * 
 * A utility class that may be used to validate variables.
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
		if(value === undefined)
			throw new TypeError(MSG_NULLABLE + "undefined" + MSG_CLOSING);
		if(value === null)
			throw new TypeError(MSG_NULLABLE + "null" + MSG_CLOSING);
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// START - Special types																			//
	//																									//
	// START - Primitives																				//
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	public static isBigint(value: any): value is bigint {
		return typeof value === "bigint";
	}

	public static assertIsBigint(value: any): asserts value is bigint {
		if(typeof value !== "bigint")
			throw new TypeError(buildMessage(ValidationTypes.BIGINT, typeof value));
	}

	public static isBoolean(value: any): value is boolean {
		return typeof value === "boolean";
	}

	public static assertIsBoolean(value: any): asserts value is boolean {
		if(typeof value !== "boolean")
			throw new TypeError(buildMessage(ValidationTypes.BOOLEAN, typeof value));
	}

	public static isNumber(value: any): value is number {
		return typeof value === "number";
	}

	public static assertIsNumber(value: any): asserts value is number {
		if(typeof value !== "number")
			throw new TypeError(buildMessage(ValidationTypes.NUMBER, typeof value));
	}

	public static isString(value: any): value is string {
		return typeof value === "string";
	}

	public static assertIsString(value: any): asserts value is string {
		if(typeof value !== "string")
			throw new TypeError(buildMessage(ValidationTypes.STRING, typeof value));
	}

	public static isSymbol(value: any): value is symbol {
		return typeof value === "symbol";
	}

	public static assertIsSymbol(value: any): asserts value is symbol {
		if(typeof value !== "symbol")
			throw new TypeError(buildMessage(ValidationTypes.SYMBOL, typeof value));
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// END - Primitives																					//
	//																									//
	// START - Objects																					//
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	public static isFunction(value: any): value is Function {
		return typeof value === "function";
	}

	public static assertIsFunction(value: any): asserts value is Function {
		if(typeof value !== "function")
			throw new TypeError(buildMessage(ValidationTypes.FUNCTION, typeof value));
	}

	public static isObject(value: any): value is object {
		return typeof value === "object";
	}

	public static assertIsObject(value: any): asserts value is object {
		if(typeof value !== "object")
			throw new TypeError(buildMessage(ValidationTypes.OBJECT, typeof value));
	}

	public static isInstanceOf<T>(value: any, clazz: Class<T>): value is Class<T> {
		return value instanceof clazz;
	}

	public static assertIsInstanceOf<T>(value: unknown, clazz: Class<T>): asserts value is Class<T> {
		if(!(value instanceof Object))
			throw new TypeError(MSG_INSTANCE_1 + Object.name + MSG_CLOSING);
		else if(!(value instanceof clazz))
			throw new TypeError(MSG_INSTANCE_1 + clazz.name + MSG_INSTANCE_2 + value.constructor.name + MSG_CLOSING);
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// END - Objects																					//
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	public static isTypeOf(value: any, type: ValidationTypes.BIGINT): value is bigint;
	public static isTypeOf(value: any, type: ValidationTypes.BOOLEAN): value is boolean;
	public static isTypeOf(value: any, type: ValidationTypes.FUNCTION): value is Function;
	public static isTypeOf(value: any, type: ValidationTypes.NUMBER): value is number;
	public static isTypeOf(value: any, type: ValidationTypes.OBJECT): value is object;
	public static isTypeOf(value: any, type: ValidationTypes.STRING): value is string;
	public static isTypeOf(value: any, type: ValidationTypes.SYMBOL): value is symbol;
	public static isTypeOf(value: any, type: ValidationTypes): boolean {
		return typeof value === type;
	}

	public static assertsIsTypeOf(value: any, type: ValidationTypes.BIGINT): asserts value is bigint;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.BOOLEAN): asserts value is boolean;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.FUNCTION): asserts value is Function;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.NUMBER): asserts value is number;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.OBJECT): asserts value is object;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.STRING): asserts value is string;
	public static assertsIsTypeOf(value: any, type: ValidationTypes.SYMBOL): asserts value is symbol;
	public static assertsIsTypeOf(value: any, type: ValidationTypes): void {
		if(typeof value !== type)
			throw new TypeError(buildMessage(type, typeof value));
	}
}

const MSG_CLOSING: string = "`.";

const MSG_NULLABLE: string = "Argument is `";
const MSG_TYPE_1: string = "Argument is not of type `";
const MSG_TYPE_2: string = "`. Given type: `";
const MSG_INSTANCE_1: string = "Argument is not an instance of `";
const MSG_INSTANCE_2: string = "`. Given instance: `";

const buildMessage = (wanted: ValidationTypes, given: string): string => {
	return MSG_TYPE_1 + wanted + MSG_TYPE_2 + given + MSG_CLOSING;
};

Object.freeze(Validation);

export {
	Validation
};
