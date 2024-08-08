import Pagination from "./components/Pagination";
import FormFirstStep from "./form-steps/FirstStep";

function App() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="card bg-neutral text-center items-center w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Register</h2>
            <FormFirstStep />
            <div className="card-actions justify-end">
              <Pagination activePage={3} totalPages={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
