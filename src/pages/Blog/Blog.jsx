import React from "react";
import Banners from "../Shared/Banners/Banners";
import useTitle from "../../customHook/useTitle";

const Blog = () => {

  useTitle('Blog-page')


  return (
    <div className="mb-20">
        <Banners></Banners>
      <div className="w-2/3 mx-auto space-y-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              An access token and refresh token are both used in the context of
              authentication and authorization systems.
            </p>
            <p className="my-3">
              {" "}
              1) An access token is a credential that is used to authenticate
              and authorize a client when making requests to access protected
              resources on a server. It is typically a long string of characters
              that represents the clients identity and permissions.
            </p>

            <p>
              2) A refresh token is a separate credential that is used to obtain
              a new access token when the current access token expires. Access
              tokens have a limited lifespan for security reasons, and once they
              expire, they cannot be used to make authenticated requests
              anymore. To obtain a new access token without requiring the user
              to re-authenticate, the client can use a refresh token.
            </p>
            <p className="mt-4">
              store token as an HTTP-only cookie or localStorge
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL and NoSQL databases depends on the specific requirements of
              our application, including data structure, scalability needs,
              query patterns, and consistency requirements. In some cases, a
              combination of both types may be used in a polyglot persistence
              approach to leverage the strengths of each database type for
              different aspects of an application.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content">
            <p>Express.js and NestJS are popular choices for building server-side applications, but they target different use cases. Express.js is more lightweight and flexible, suitable for smaller projects or when developers prefer more control over the application structure. On the other hand, NestJS provides a robust, opinionated framework with batteries-included features, making it suitable for complex, enterprise-level applications that benefit from a structured and scalable architecture</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>The aggregate framework provides a flexible and powerful way to perform advanced data processing and analysis in MongoDB, allowing for complex queries and computations on collections of documents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
