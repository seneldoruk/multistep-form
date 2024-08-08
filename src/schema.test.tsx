import { expect, test } from "bun:test";
import { FormSchema } from "./schema";

test("schema is valid", async () => {
  expect(
    FormSchema.safeParse({
      fullName: "John Doe",
      email: "abc@asc.com",
      phoneNumber: "123456789",
      salary: "1000",
    }).success
  ).toBe(true);
  expect(
    FormSchema.safeParse({
      fullName: "",
      email: "com",
      phoneNumber: "asd",
      salary: "",
    }).success
  ).toBe(false);
});
