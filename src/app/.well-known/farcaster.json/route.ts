export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://the-way-of-code-miniapp.vercel.app';

  const config = {
    "accountAssociation": {
      "header": "eyJmaWQiOjYxNiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDVFNzlGNjkwY2NENDIwMDdENUEwYUQ2NzhDRDQ3NDc0MzM5NDAwRTMifQ",
      "payload": "eyJkb21haW4iOiJ0aGUtd2F5LW9mLWNvZGUtbWluaWFwcC52ZXJjZWwuYXBwIn0",
      "signature": "MHg3MjM5ZmIwYzY1MmU2MWJlNGQxMDIxZWJmZDA5Njc4NTdkNTIxZWFiZDg1MTJmYWE3NjdiMzc1ODliMzkwZGQ3MTBjNzZmZGVmZTAxZDIyOWUzOTIzZmM0MzI1ZGI0MDY4ZDVjOGNkYTcwYWY2Y2VjODBjNjBjMDNjNjRjMzRmOTFi"
    },
    frame: {
      version: "1",
      name: "The Way of Code",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/vibecoding.jpeg`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/icon.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  };

  return Response.json(config);
}
