import Image from "next/image";
import Link from "next/link";
import { Users, LayoutDashboard, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navigationFeatures = [
  {
    title: "ユーザー管理",
    description:
      "システムを利用するユーザーの一覧表示、新規作成、削除を行います。",
    href: "/users",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "分析ダッシュボード",
    description:
      "（今後の実装予定）システム利用状況の統計やグラフを表示します。",
    href: "#", // まだ存在しない画面
    icon: LayoutDashboard,
    color: "text-green-600",
  },
  {
    title: "システム設定",
    description: "（今後の実装予定）アプリケーションの基本設定を管理します。",
    href: "#", // まだ存在しない画面
    icon: Settings,
    color: "text-zinc-600",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* 簡易的なヘッダー部分 */}
      <header className="border-b bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={18}
            priority
          />
          <div className="text-sm text-zinc-500">
            リニューアル・プロトタイプ v0.1
          </div>
        </div>
      </header>

      {/* メインコンテンツエリア */}
      <main className="grow max-w-7xl w-full mx-auto py-16 px-6 sm:py-24">
        <div className="flex flex-col items-center gap-4 text-center mb-16 sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Next.js Playground
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js (App Router) や Radix UI + Tailwind CSS
            などのフロントエンド技術を検証するための実験場です。Go (Gin)
            バックエンドとの連携をはじめ、様々な実装テストをここで行います。
          </p>
        </div>

        {/* 機能カードのグリッドレイアウト */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {navigationFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group overflow-hidden transition-all hover:border-zinc-300 hover:shadow-md dark:hover:border-zinc-700"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div
                    className={`p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 ${feature.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 min-h-[56px]">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 border-t bg-zinc-50/50 dark:bg-black/20">
                  <Link href={feature.href} passHref className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-between font-medium group-hover:text-blue-600"
                      disabled={feature.href === "#"} // URLがない場合は無効化
                    >
                      {feature.href === "#" ? "準備中" : "画面を開く"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-24 border-t pt-12 text-center text-sm text-zinc-500">
          開発リソース:{" "}
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="font-medium text-zinc-700 dark:text-zinc-300 hover:underline"
          >
            Documentation
          </a>
          {" / "}
          <a
            href="https://www.radix-ui.com/primitives"
            target="_blank"
            className="font-medium text-zinc-700 dark:text-zinc-300 hover:underline"
          >
            Radix UI
          </a>
          {" / "}
          <a
            href="https://gin-gonic.com/ja/docs/"
            target="_blank"
            className="font-medium text-zinc-700 dark:text-zinc-300 hover:underline"
          >
            Gin Web Framework
          </a>
        </div>
      </main>
    </div>
  );
}
