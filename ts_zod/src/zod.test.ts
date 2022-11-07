
import {onlyStringSchema,OnlyStringSchemaType} from "./zod"
test('zodはオブジェクトの型を強く指定できる', () => {
    const validObject = {str: "foo"}
    const result =onlyStringSchema.parse(validObject)
  expect(result).toBeTruthy()
});
test('zodはTSのタイプをschemaから生成できる', () => {
    const validObject:OnlyStringSchemaType = {str: "foo"}
    const result =onlyStringSchema.parse(validObject)
  expect(result).toBeTruthy()
});