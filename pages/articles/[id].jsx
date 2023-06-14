import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // ここで記事のデータを取得するなどの処理を行うことができます

  return (
    <div>
      <h1>記事詳細</h1>
      <p>記事ID: {id}</p>
      {/* ここに記事の詳細コンテンツを表示するなどのコードを追加 */}
    </div>
  );
};

export default ArticlePage;
