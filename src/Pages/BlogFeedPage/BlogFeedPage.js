import React from "react";
import Layout from "../../hoc/Layout";
import HomeLayout from "../../hoc/HomeLayout/HomeLayout";
import MiddleFeedLayout from "../../hoc/MiddleFeedLayout/MiddleFeedLayout";
import BlogFeed from "../../components/Feeds/BlogsFeed/BlogsFeed";

const BlogFeedPage = (props) => {
  return (
    <Layout>
      <HomeLayout isRightBar={true}>
        <MiddleFeedLayout>
          <BlogFeed />
        </MiddleFeedLayout>
      </HomeLayout>
    </Layout>
  );
};

export default BlogFeedPage;
