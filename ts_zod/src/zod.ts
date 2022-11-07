import * as z from "zod";

export const onlyStringSchema = z.object({
  str: z.string(),
});

export type OnlyStringSchemaType = z.infer<typeof onlyStringSchema>;
