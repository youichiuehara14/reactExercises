import StudentChecker from './components/StudentChecker';
import studentData from './data/StudentData.json';
function App() {
  return (
    <>
      <div>
        <StudentChecker studentData={studentData} />
      </div>
    </>
  );
}

export default App;
