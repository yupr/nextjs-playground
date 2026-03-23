import * as z from "zod";

// Zod でバリデーションスキーマを定義
export const formSchema = z.object({
  name: z.string().min(1, { message: "名前は必須です。" }),
  email: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください。" }),
});

/**
 * ユーザーを取得
 * @returns ユーザー
 */
export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // 常に最新を取得する (SSRとして動作)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
