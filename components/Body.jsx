import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link"

const Body = () => {
  // サンプルの記事データ
  const articles = [
    {
      id: 1,
      title: "記事1",
      content: "記事1の内容",
    },
    {
      id: 2,
      title: "記事2",
      content: "記事2の内容",
    },
    {
      id: 3,
      title: "記事3",
      content: "記事3の内容",
    },
    {
      id: 4,
      title: "記事4",
      content: "記事4の内容",
    },
  ];

  return (
    <Box p={4}>
      <Grid
        templateColumns={{
          base: "1fr",  // モバイル画面では1列表示
          md: "repeat(4, 1fr)", // デスクトップ画面では4列表示
        }}
        gap={4}
      >
        {articles.map((article) => (
          <Box key={article.id}>
            <Link  href={`/articles/${article.id}`}>
              
                <Box
                  bg="white"
                  boxShadow="md"
                  p={4}
                  borderRadius="md"
                  cursor="pointer"
                >
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </Box>
              
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Body;
