import * as z from "zod";

// Zod でバリデーションスキーマを定義
export const formSchema = z.object({
  name: z.string().min(1, { message: "名前は必須です。" }),
  email: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください。" }),
});
