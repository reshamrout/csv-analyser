import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-muted/40">
      <main className="max-w-6xl mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            CSV Runner Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Upload running data and analyze performance metrics
          </p>
        </header>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
