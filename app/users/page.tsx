import { UserList } from "./components/UserList";

// モックAPIからデータを取得
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // 常に最新を取得する (SSRとして動作)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">ユーザー管理</h1>
      <UserList initialUsers={users} />
    </main>
  );
}
