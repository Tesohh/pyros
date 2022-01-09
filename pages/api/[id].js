// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // console.log();
  res.status(200);
  return (
    <>
      <h1>{req.query.id}</h1>
    </>
  );
}