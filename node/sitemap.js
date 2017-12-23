import dbConfig from '../config/database.json';
import env from '../config/env.json';
import mysql from 'mysql';
import sm from 'sitemap';

const connection = mysql.createConnection({
  host     : dbConfig.hostname,
  user     : dbConfig.username,
  password : dbConfig.password,
  database : dbConfig.name,
});
connection.connect();

export const getPosts = function() {
  return new Promise((resolve, reject) => {
    connection.query(`
      SELECT slug, published_at, summary, title
      FROM posts
      WHERE published_at < NOW()
      ORDER BY published_at DESC
    `, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const createSitemap = function() {
  return new Promise((resolve, reject) => {
    getPosts()
      .then(posts => {
        const sitemap = sm.createSitemap({
          hostname: env.hostname,
          urls: [
            {url: '/', changfreq: 'weekly', priority: 0.8},
            {url: '/about-me', changfreq: 'monthly', priority: 0.3},
            {url: '/my-projects', changfreq: 'monthly', priority: 0.5},
            ...posts.map(post => {
              return {url: `/posts/${post.slug}`, changfreq: 'monthly', priority: 0.6};
            }),
          ],
        });
        sitemap.toXML((err, xml) => {
          if (err) reject(err);
          resolve(xml);
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};
