import React, { useMemo } from "react";
import { Badge, MantineColor } from "@mantine/core";
import { useTranslate, useTranslation } from "@refinedev/core";
import { ArticleTypeObj } from "@constants";
// import { BusinessStateObj } from "@constants";

export const ArticleTypeBadge: React.FC<{
  article: ArticleType;
}> = ({ article }) => {
  const {translate} = useTranslation();

  const color = useMemo(() => {
    if (article) {
      const colorMap: { [key in  ArticleType]: MantineColor } = {
        [ArticleTypeObj.article]: "green.8",
        [ArticleTypeObj.breve]: "green.0",
        [ArticleTypeObj.cover]: "green.6",
        [ArticleTypeObj.news]: "green.4",
        [ArticleTypeObj.sports]: "green.2",
      };
      return colorMap[article];
    }
    return undefined;
  }, [article]);

  if (!article) {
    return null;
  }

  return (
    <Badge radius="xs" size="md" variant="light" color={color}>
      {translate(`badges.articles-type.${article}`) }
    </Badge>
  );
};
