import { APP_URL } from "../../../lib/utils";

export async function GET() {
  const config = {
    "accountAssociation": {
      "header": "eyJmaWQiOjYxNiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDVFNzlGNjkwY2NENDIwMDdENUEwYUQ2NzhDRDQ3NDc0MzM5NDAwRTMifQ",
      "payload": "eyJkb21haW4iOiJ0aGUtd2F5LW9mLWNvZGUtbWluaWFwcC52ZXJjZWwuYXBwIn0",
      "signature": "MHg3MjM5ZmIwYzY1MmU2MWJlNGQxMDIxZWJmZDA5Njc4NTdkNTIxZWFiZDg1MTJmYWE3NjdiMzc1ODliMzkwZGQ3MTBjNzZmZGVmZTAxZDIyOWUzOTIzZmM0MzI1ZGI0MDY4ZDVjOGNkYTcwYWY2Y2VjODBjNjBjMDNjNjRjMzRmOTFi"
    },
    frame: {
      version: "1",
      name: "The Way of Code",
      iconUrl: `${APP_URL}/icon.png`,
      homeUrl: APP_URL,
      imageUrl: `${APP_URL}/vibecoding.jpeg`,
      buttonTitle: "Start Vibing",
      splashImageUrl: `${APP_URL}/icon.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  };

  return Response.json(config);
}
