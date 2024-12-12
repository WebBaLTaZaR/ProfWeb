function TitlePage({title}) {
  return (
    <>
      <div className="titlePageCart">
        <div className="titlePageCart-wrap limit__content">
          <div className="titlePageCartItem">{title}</div>
        </div>
      </div>
    </>
  );
}

export default TitlePage;
