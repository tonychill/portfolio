import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: 'PL05JnYLSEuZDEnwHQIxQWUMotBQx-5EKdgqpKZm7IA',
});
const MainFeed = () => {
  const [stories, setStories] = useState([]);
  async function fetchEntriesForContentType() {
    const entries = await client.getEntries({
      order: '-sys.createdAt',
      content_type: 'story',
    });
    //console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  // const [stories, setStories] = useState([]);
  useEffect(() => {
    const getStories = async () => {
      const allStories = await fetchEntriesForContentType();
      setStories([...allStories]);
    };
    getStories();
  }, []);
  console.log(stories);

  return (
    <Row>
      <Col xs={6}>
        <ListGroup variant='flush'>
          {stories.map(s => (
            <ListGroup.Item key={s.fields.title}>
              <div>
                <div className='ts-s-img'></div>
                <div>{s.fields.title}</div>
                <div></div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default MainFeed;
