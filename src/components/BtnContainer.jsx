const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className="job-btn"
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
