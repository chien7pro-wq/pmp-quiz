import { resetAll } from "../utils/storage.js";
import { useState } from "react";

export default function Settings() {
  const [confirming, setConfirming] = useState(false);

  const handleReset = () => {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    resetAll();
    window.location.reload();
  };

  return (
    <div className="space-y-5 px-4 pt-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          設定
        </h1>
      </header>

      <section className="space-y-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="font-semibold">資料管理</h2>
        <p className="text-sm text-gray-500">
          所有答題紀錄都存在你瀏覽器本機，換裝置或清除瀏覽器資料就會不見。
        </p>
        <button
          onClick={handleReset}
          className={`w-full rounded-lg py-2 text-sm font-semibold text-white ${
            confirming
              ? "bg-rose-600"
              : "bg-gray-400 dark:bg-gray-700"
          }`}
        >
          {confirming ? "⚠️ 再按一次確認清除" : "清除所有進度（錯題 + 統計）"}
        </button>
      </section>

      <section className="space-y-2 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="font-semibold">關於</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          PMP L1 商業環境 刷題 APP
          <br />
          題庫依章節分類，含詳解。
          <br />
          資料本地儲存，無需帳號登入。
        </p>
      </section>
    </div>
  );
}
