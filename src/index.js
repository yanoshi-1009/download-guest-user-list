(async () => {
  "use strict";

  // URLチェック
  if (!/^https:\/\/.+\.cybozu\.com\/k/.test(location.href)) {
    window.alert("このサイトでは実行できません。");
    return;
  }

  // Papaparseの読み込み
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js";
  document.body.appendChild(script);

  try {
    const users = await kintone
      .api(kintone.api.url("/k/api/guest/list.json"), "POST", {})
      .then((resp) => resp.result.items);
    const csv = Papa.unparse(users);
    const blob = new Blob([csv], { type: "text/csv" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "guests.csv";
    a.click();
  } catch (e) {
    window.alert(`ユーザー情報の取得に失敗しました。\n${e.message}`);
  }
})();
