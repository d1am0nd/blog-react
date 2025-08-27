import env from '../../../config/env';
import {IPost} from '../../../src/ts/api/posts';
import * as mysql from 'mysql';
import * as sm from 'sitemap';

const connection = mysql.createConnection({
  host     : (env as any).database.hostname,
  user     : (env as any).database.username,
  password : (env as any).database.password,
  database : (env as any).database.name,
});
connection.connect();

export const getPosts = (): Promise<Array<IPost>> => (
  new Promise<Array<IPost>>((resolve, reject) => {
    connection.query(`
      SELECT slug, published_at, summary, title
      FROM posts
      WHERE published_at < NOW()
      ORDER BY published_at DESC
    `, (err: any, results: Array<IPost>) => {
      if (err) reject(err);
      resolve(results);
    });
  })
);

export const createSitemap = async () => {
  return new Promise((resolve, reject) => {
    getPosts()
      .then((posts) => {
        const sitemap = sm.createSitemap({
          hostname: env.hostname,
          urls: [
            {url: '/', changfreq: 'weekly', priority: 0.8},
            {url: '/about-me', changfreq: 'monthly', priority: 0.3},
            {url: '/my-projects', changfreq: 'monthly', priority: 0.5},
            ...posts.map((post) => {
              return {url: `/posts/${post.slug}`, changfreq: 'monthly', priority: 0.6};
            }),
          ],
        });
        sitemap.toXML((err: any, xml: string) => {
          if (err) reject(err);
          resolve(xml);
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};
