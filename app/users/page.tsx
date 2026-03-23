import { getUsers } from "@/app/users/utils";
import { UserList } from "./components/UserList";

/**
 * ユーザー管理ページ
 * @returns ユーザー管理ページ
 */
export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">ユーザー管理</h1>
      <UserList initialUsers={users} />
    </main>
  );
}
