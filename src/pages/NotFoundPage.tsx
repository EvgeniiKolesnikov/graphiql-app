import notFound from 'assets/notFound.jpg';

export const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <img src={notFound} alt="404 image" className="notFound" />
        <h1 className="title">Not Found</h1>
      </div>
    </main>
  );
};
