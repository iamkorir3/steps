function test() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handPrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handPrevious}>
              <span>👈</span>Previous
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handNext}>
              Next<span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

return <div></div>;

export default test;
