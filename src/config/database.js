import { connect } from "mongoose";

export default async () => {
  const databases = {
    development: {
      url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      options: {
        useNewUrlParser: true,
      },
    },
    production: {
      url: ``,
      options: {},
    },
  };

  const config = databases[process.env.NODE_ENV];

  return connect(config.url, config.options, (error) => {
    if (!error) console.log("MongoDB Running");
    else console.log(`MongoDB Error -> ${error}`);
  });
};
