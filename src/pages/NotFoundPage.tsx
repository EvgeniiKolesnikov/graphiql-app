import notFound from 'assets/notFound.jpg';

export const NotFoundPage = () => {
  return (
    <>
      <img src={notFound} alt="404 image" className="notFound" />
      <h1 className="title">Not Found</h1>
    </>
  );
};
