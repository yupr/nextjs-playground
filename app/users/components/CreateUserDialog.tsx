"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/app/users/utils";

type Props = {
  onAdd: (user: { name: string; email: string }) => void;
};

/**
 * ユーザーの新規作成ダイアログ
 * @param onAdd ユーザーを追加する関数
 */
export function CreateUserDialog({ onAdd }: Props) {
  const [open, setOpen] = useState(false);

  // React Hook Form の初期化と Zod の連携
  const form = useForm<z.infer<typeof formSchema>>({
    // Zod 4.3 系のスキーマ型と @hookform/resolvers の zodResolver 型定義が内部バージョンで一致せず TS エラーになるため。実行時は問題ない。
    resolver: zodResolver(formSchema as never),
    defaultValues: { name: "", email: "" },
  });

  // standard な register とエラー状態を取得
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onAdd(values);
    reset();
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>新規作成</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ユーザーの新規作成</DialogTitle>
          <DialogDescription>
            新しいユーザーの名前とメールアドレスを入力してください。
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">名前</FieldLabel>
            <Input
              id="name"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && <FieldError>{errors.name.message}</FieldError>}
          </Field>

          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">メールアドレス</FieldLabel>
            <Input
              id="email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          <div className="flex justify-end pt-4">
            <Button type="submit">保存する</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
