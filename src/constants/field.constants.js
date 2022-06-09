import { OPERATIONS } from "./matrix.constans";

export const FIELDS_ID = {
  [OPERATIONS.SUM]: {
    field_1: 'sum_field_1',
    field_2: 'sum_field_2',
    result: 'sum_result'
  },
  [OPERATIONS.SUBTRACT]: {
    field_1: 'subtract_field_1',
    field_2: 'subtract_field_2',
    result: 'subtract_result'
  },
  [OPERATIONS.MULTIPLY]: {
    field_1: 'multiply_field_1',
    field_2: 'multiply_field_2',
    result: 'multiply_result'
  },
  [OPERATIONS.MULTIPLY_BY]: {
    field_1: 'multiply_by_field_1',
    field_2: 'multiply_by_field_2',
    result: 'multiply_by_result'
  },
};

