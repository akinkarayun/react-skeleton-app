import React from 'react'
import css from '../index.module.css'
import { SkeletonArticle } from './skeletons/partials/SkeletonArticle';
import { SkeletonElement } from './skeletons/SkeletonElement';

interface ArticleProps {

}


interface IArticle {
  title: string,
  body: string,
  userId: number,
  id: number,

}

export const Article: React.FC<ArticleProps> = ({ }) => {
  const [articles, setArticles] = React.useState([] as IArticle[]);

  React.useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await response.json()
      setArticles(json)
    }, 6000)
  })

  console.log(articles)
  return (
    <div className={css.articles}>
      <h2>Article</h2>
      {articles && articles.map((article) => (
        <div key={article.id} className={css.article}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>

        </div>
      ))}
      {articles.length === 0 && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle />)}
    </div>
  );
}