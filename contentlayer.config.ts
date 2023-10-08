import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    // slug: { type: 'string', required: true }, // NOTE: add slug later
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    // NOTE: add slug later
    // path: {
    //   type: "string",
    //   resolve: (post) => `/posts/${post.slug}`,
    // },
  },
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] });
