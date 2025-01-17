type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type Article = {
  id: number;
  title: string;
  description: string;
  author_id: number;
  author_name?: string;
  author_email?: string;
};

type Author = {
  id: number;
  name: string;
  email: string;
}

type ArticleWithAuthor = Article & {
  author_name: string;
  author_email: string;
};

export type {MessageResponse, ErrorResponse, Article, Author, ArticleWithAuthor};
