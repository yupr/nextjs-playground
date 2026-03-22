"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreateUserDialog } from "./components/CreateUserDialog";

type User = {
  id: number;
  name: string;
  email: string;
};

export function UserList({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAdd = (newUser: { name: string; email: string }) => {
    const userWithId = { ...newUser, id: Date.now() };

    setUsers([userWithId, ...users]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">登録済みユーザー</h2>
        <CreateUserDialog onAdd={handleAdd} />
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <Button variant="destructive" onClick={() => handleDelete(user.id)}>
              削除
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
