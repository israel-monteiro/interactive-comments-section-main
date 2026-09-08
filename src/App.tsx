import { CommentList } from "./components/CommentList";
import { CommentProvider } from "./contexts/CommentProvider";

function App() {
    
    return (
        <main className="flex min-h-screen items-center py-14.5">
            <CommentProvider>
                <CommentList/>
            </CommentProvider>
        </main>
    );
}

export default App;
