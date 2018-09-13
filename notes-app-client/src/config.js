export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "scott-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s7s21ajb5d.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_MedmgY39x",
    APP_CLIENT_ID: "vb7hoqsti8avfh8lpgf1arprn",
    IDENTITY_POOL_ID: "us-east-1:4e80ad20-e9ce-4f51-8921-5b5dff7281be"
  }
};
