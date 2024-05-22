import { stepsData } from "../mockData/stepsData";

export type ButtonSizesType = "small" | "medium" | "large" | string;
export type ButtonTypesType = "button" | "submit" | "reset" | "loader";
export const hex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

export const isHex = (color?: string, loc?: string): boolean => {
  if ((color && !hex.test(color)) || !color) {
    console.warn(
      loc,
      "applied default color, for set another color, please, use Hex colors"
    );
    return false;
  }
  return hex.test(color);
};

// Генеричний тип для пустого об'єкта
type EmptyObjectType<T> = { [K in keyof T]: T[K] };
type ArrayType<T> = T[];

// Функція для створення масиву пустих об'єктів
export const createEmptyObjectsArray = <T>(
  length: number,
  emptyObject: EmptyObjectType<T>,
  arr: ArrayType<T>
): T[] => {
  const emptyObjectsArray = Array(length - arr.length).fill(emptyObject);
  return [...arr, ...emptyObjectsArray];
};

export const getDataType = <T>(data: T): T => {
  return data;
}

