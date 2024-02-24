import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { viteBundler } from '@payloadcms/bundler-vite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { BlogPosts } from './collections/BlogPosts'
import { PageTemplates } from './collections/pageTemplates/PageTemplates'

export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Media,
    BlogPosts,
    PageTemplates,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
