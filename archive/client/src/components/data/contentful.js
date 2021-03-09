import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// const previewClient = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
//   host: "preview.contentful.com",
// });

const getClient = (preview) => (preview ? previewClient : client);

function parseTraveler({ fields }) {
  return {
    // name: fields.name,
    // picture: fields.picture.fields.file,
  };
}

function parseItem({ fields }) {
  return {
    // title: fields.title,
    // slug: fields.slug,
    // date: fields.date,
    // content: fields.content,
    // excerpt: fields.excerpt,
    // coverImage: fields.coverImage.fields.file,
    // author: parseTraveler(fields.author),
  };
}

function parseItemEntries(entries, cb = parseItem) {
  return entries?.items?.map(cb);
}

export async function getPreviewItemBySlug(slug, type) {
  const entries = await getClient(true).getEntries({
    content_type: type,
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parseItemEntries(entries)[0];
}

export async function getAllItemsWithSlug(type) {
  const entries = await client.getEntries({
    content_type: type,
    select: "fields.slug",
  });
  return parseItemEntries(entries, (post) => post.fields);
}
/**getExperiences(type: string, filters: object, id: string)
 * get all the experiences the match the passed type and filters. if an id is passed then the first params will be ignored and only the id will be used to retrieve the experience.  */

export async function getArticlesByType(type = "article") {
  try {
    const entries = await getClient(false).getEntries({
      content_type: type,
      order: "-sys.createdAt",
    });
    return entries.items;
  } catch (error) {
    console.log(error);
  }
}
export async function getArticle(slug) {
  const experience = await getClient(false).getEntry(slug);
  return experience;
}
export async function getRelatedArticles(type) {
  let fields =
    type === "cars"
      ? "sys.id,fields.rate,fields.passengers,fields.media"
      : "sys.id,fields.name,fields.rate,fields.cabins,fields.heads,fields.passengers,fields.media";

  try {
    // const experiences = await getClient(false).getEntries({
    //   content_type: type,
    //   "fields.rate[lt]": `${rate}`,
    //   select: fields,
    // });
    // return experiences;
  } catch (error) {
    console.log(error);
  }
}

export async function getOtherItems(slug, preview, type) {
  const entry = await getClient(preview).getEntries({
    content_type: type,
    limit: 1,
    "fields.slug[in]": slug,
  });
  const entries = await getClient(preview, type).getEntries({
    content_type: type,
    limit: 2,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  return {
    post: parseItemEntries(entry)[0],
    morePosts: parseItemEntries(entries),
  };
}

// async function fetchEntriesForContentType() {
//   const entries = await client.getEntries({
//     order: "-sys.createdAt",
//     content_type: "story",
//   });
//   if (entries.items) return entries.items;
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }
